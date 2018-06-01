import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';
import VueCookies from 'vue-cookies'

import mainView from '@/components/mainView';
import categoryView from '@/components/categoryView';
import aloneView from '@/components/aloneView';

Vue.use(Router)
Vue.use(Meta)
Vue.use(VueCookies)

var lang = document.querySelector('html').getAttribute('lang');
var baseHref = '/map/';

if(lang != 'ru') {
   baseHref = '/' +lang +'/map/';
}
const mainViews = mainView;
const categoryViews = categoryView;
const aloneViews = aloneView;
var seen = window.$cookies.isKey('seen') ? JSON.parse(window.$cookies.get('seen')) : {0:[]};
console.log(seen);
var obj = '';
 $.ajax({
   url: '//sova.j2landing.com/map-api/get',
   type:'POST',
   async: false,
   success:function( data ) {
     obj = JSON.parse( data)
    }
   })
console.log(obj);

const inst = obj;
var lang = document.querySelector('html').getAttribute('lang');

var routsArr = document.querySelectorAll('router-link');
var routsObjArr = [];
var routsSubObjArr = [];
var filtred=[]
var z =0;
/* при старте получаем все фильтры в исходном положении */
for (var cateObj  in  inst.category) {
  var VRegExp = new RegExp(/\/+/g);

  filtred[z] = {sub:[],mark:[],slug:[],category_id:[],district:[], time_from:'', time_till:'', limitList:12,shown:0};
  filtred[z].slug.push(routsArr[z].getAttribute('to').replace(VRegExp, ''))
  filtred[z].category_id.push(+routsArr[z].getAttribute('data-id'))

  z++
}

// todo добавление фильтров для страницы all. потом переделать
filtred[z] = {sub:[],mark:[],slug:[],category_id:[],district:[], time_from:'', time_till:'', limitList:12,shown:0};
filtred[z].slug.push(routsArr[z].getAttribute('to').replace(VRegExp, ''))
var allrouts = routsArr[z].getAttribute('data-id').split(',')

for (var i = 0; i < allrouts.length; i++) {
  filtred[z].category_id.push(+allrouts[i])
}

console.log(filtred, 'filtred');

/* routs главной страницы*/
routsObjArr[0] = {
  path: routsArr[0].getAttribute('to'),
  component: mainViews,
  props: { needle: inst.category,  allPoints: inst.objects, locations: inst.location, main: inst.main},
}
/* routs страницы все */
routsObjArr[routsArr.length] = {
  path: routsArr[routsArr.length-1].getAttribute('to'),
  component: categoryViews,
  props: { objcts: inst.objects, categories: inst.category, filtred: filtred[routsArr.length-1], location: inst.location},
}

/* routs категорий */
for (var i = 1; i < routsArr.length - 1; i++) {
    routsObjArr[i] = {
      path: routsArr[i].getAttribute('to'),
      component: categoryViews,
      props: { objcts: inst.objects, categories: inst.category, filtred: filtred[i], location: inst.location},
    }
}
/* routs одного заведения */
for (var i = 1; i < routsArr.length; i++) {
  routsSubObjArr[i] = {
    path: routsArr[i].getAttribute('to') + '/:alias',
    name: 'category',
    component: aloneViews,
    props: { objcts: inst.objects},
  }
  routsObjArr.push(routsSubObjArr[i])
}


const routes = routsObjArr;

var router = new  Router({
  routes: routes,
  mode: 'history',
  linkActiveClass: 'active',
  transitionOnLoad: true,
  base:baseHref,

})
export default router
