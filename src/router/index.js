import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';
import VueCookies from 'vue-cookies'
import axios from 'axios';
import _  from 'lodash';
import mainView from '@/components/mainView';
import categoryView from '@/components/categoryView';
import categoryMapView from '@/components/CategoryMapView';
import aloneView from '@/components/aloneView';

Vue.use(Router)
Vue.use(Meta)
Vue.use(VueCookies)

/* получаем данные */
var router;
const inst = JSON.parse(window.loc_obj);

Vue.prototype.trans = (string, args) => {
  let value = _.get(window.i18n, string);
  _.eachRight(args, (paramVal, paramKey) => {
    value = _.replace(value, `:${paramKey}`, paramVal);
  });
  return value;
};

var lang = document.querySelector('html').getAttribute('lang');
var baseHref = inst.main.base_href.slice(inst.main.base.length, inst.main.base_href.length) + '/';
var lang = document.querySelector('html').getAttribute('lang');

const mainViews = mainView;
const categoryViews = categoryView;
const categoryMapViews = categoryMapView;
const aloneViews = aloneView;

var seen = window.$cookies.isKey('seen') ? JSON.parse(window.$cookies.get('seen')) : {0:[]};
var routsArr = document.querySelectorAll('router-link');
var routsObjArr = [];
var routsSubObjArr = [];
var filtred=[]
var z =0;

if(lang != 'ru') {
   baseHref = '/' +lang + baseHref;
}
console.log(inst);

/* при старте получаем все фильтры в исходном положении */
for (var cateObj  in  inst.category) {
  var VRegExp = new RegExp(/\/+/g);
  filtred[z] = {sub:[],mark:[],slug:[],category_id:[],district:[], time_from:'', time_till:'', limitList:11,shown:0,city:''};
  filtred[z].slug.push(routsArr[z].getAttribute('to').replace(VRegExp, ''))
  filtred[z].category_id.push(+routsArr[z].getAttribute('data-id'))
  z == 0 ? filtred[z].limitList = 4 : ''
  z++
}
filtred[z] = {sub:[],mark:[],slug:[],category_id:[],district:[], time_from:'', time_till:'', limitList:11,shown:0,city:''};
filtred[z].slug.push('all')

for (var i = 0; i < routsArr.length; i++) {
  filtred[z].category_id.push(+routsArr[i].getAttribute('data-id'))
}
/* routs страницы все */
routsObjArr[routsArr.length] = {
  path: '/all',
  component: categoryViews,
  props: { objcts: inst.objects,  categories: inst.category, filtred: filtred[routsArr.length], location: inst.location, baseHref:baseHref},
}
// console.log(filtred, 'filtred');

/* routs главной страницы*/
routsObjArr[0] = {
  path: routsArr[0].getAttribute('to'),
  component: mainViews,
  props: { needle: inst.category,  allPoints: inst.objects, filtred: filtred[0], categories: inst.category, locations: inst.location, main: inst.main, baseHref:baseHref},
}
/* routs страницы на карте */
routsObjArr[routsArr.length+1] = {
  path: '/onmap',
  component: categoryMapViews,
  props: { objcts: inst.objects,  main: inst.main, categories: inst.category, filtred: filtred[routsArr.length], location: inst.location, baseHref:baseHref},
}

/* routs категорий */
for (var i = 1; i < routsArr.length ; i++) {
    routsObjArr[i] = {
      path: routsArr[i].getAttribute('to'),
      component: categoryViews,
      onBeforeChange() {
        document.body.classList.remove('main-page');
        document.body.classList.remove('white-menu');
      },
      props: { objcts: inst.objects, categories: inst.category, main: inst.main, filtred: filtred[i], location: inst.location,baseHref:baseHref},
    }
}
/* routs одного заведения */
for (var i = 1; i < routsArr.length; i++) {
  routsSubObjArr[i] = {
    path: routsArr[i].getAttribute('to') + '/:alias',
    name: 'category',
    component: aloneViews,
    props: { objcts: inst.objects, main: inst.main},
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
  props: true,
})
export default router
