<template>
    <div>
        <div class="main-content container-fluid m-top" >
            <div class="first-screen">
                <div class="h-top-block wrap row align-items-end justify-content-between">
                    <div class="search-block row col-12 col-xl-4">
                        <h1>{{main['title']}}</h1>
                    </div>
                    <div class="search-wrap col-12 col-xl-6">
                        <form class="row align-items-end justify-content-between">
                            <div class="input-group-search col-12 col-sm-6">
                                <input list="searchlist" type="search" v-model="input" v-on:input="searchFilter"
                                       placeholder="Введите название клуба">
                                <datalist id="searchlist">
                                    <option v-for="point in searched" :val="point['name']"
                                            v-on:click="getSubPage"><a :href="point.slug">{{ point['name']}}</a>
                                    </option>
                                </datalist>
                            </div>
                            <div class="input-group-select col-9 col-sm-4">
                                <select class="" v-model="city" v-on:change="newCity">
                                    <option v-for="(value, key ) in cities" :value="key" :selected="key == city">{{key}}</option>
                                </select>
                            </div>
                            <div class="col-3 col-sm-2 search-btn-right">
                                <button class="btn btn-search" type="submit">
                                    <svg version="1.1" id="search-inp" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                                                            viewBox="0 0 17.5 16.6" style="enable-background:new 0 0 17.5 16.6;" xml:space="preserve">
                                        <path  class="st0" d="M12.2,10.2c0.7-1,1.1-2.2,1.1-3.5c0-3.5-2.8-6.3-6.3-6.3S0.7,3.1,0.7,6.6s2.8,6.3,6.3,6.3c1.3,0,2.5-0.4,3.5-1.1l4.5,4.5                                                                                  l1.7-1.7L12.2,10.2z M2.6,6.6c0-2.4,2-4.4,4.4-4.4s4.4,2,4.4,4.4S9.4,11,7,11S2.6,9.1,2.6,6.6z"/>
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div class="btn-all-club col-xl-auto">
                        <a class="btn btn-arrow" :href="baseHref + 'all'">
                            {{main['longtitle']}}
                            <span class="forward">
                                <svg version="1.1" id="arr-all"
                                     xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 143.3 82.3"
                                     style="enable-background:new 0 0 143.3 82.3;" xml:space="preserve">
                                    <path class="st0" d="M104.3,78.4l35.9-35.9c0,0,0,0,0,0c0.2-0.2,0.3-0.4,0.4-0.6c0.1-0.2,0.2-0.5,0.2-0.7c0,0,0,0,0,0
                                    c0-0.3-0.1-0.5-0.2-0.8c-0.1-0.2-0.2-0.5-0.4-0.6L104.3,3.8c-0.8-0.8-2-0.8-2.8,0c-0.4,0.4-0.6,0.9-0.6,1.4c0,0.5,0.2,1,0.6,1.4
                                    L134,39.1H5.6c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2H134l-32.5,32.5c-0.4,0.4-0.6,0.9-0.6,1.4c0,0.5,0.2,1,0.6,1.4
                                    C102.3,79.2,103.5,79.2,104.3,78.4"/>
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
                <div class="big-drug row">
                    <div class="background">
                    </div>
                    <img class="big-drug-img" src="/assets/img/drugstore_map/main/drugstore_map.svg">
                </div>
                <div class="wave-blocks wrap row justify-content-between">
                    <div class="col-lg-9 col-md-6 col-12 carousel slide" id="mobileCarousel">
                        <div class="carousel-inner row">
                            <div class="carousel-item active col">
                                <div id="m1" class="wave-img"></div>
                                <div class="wave-title">
                                    {{main['titletext1']}}
                                </div>
                                <div class="wave-text">
                                    {{main['text1']}}
                                </div>
                            </div>
                            <div class="carousel-item col">
                                <div id="m2" class="wave-img"></div>
                                <div class="wave-title">
                                    {{main['titletext2']}}
                                </div>
                                <div class="wave-text">
                                    {{main['text2']}}
                                </div>
                            </div>
                            <div class="carousel-item col">
                                <div id="m3" class="wave-img"></div>
                                <div class="wave-title">
                                    {{main['titletext3']}}
                                </div>
                                <div class="wave-text">
                                    {{main['text3']}}
                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev carousel-control" href="#mobileCarousel" role="button"
                           data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        </a>
                        <a class="carousel-control-next carousel-control" href="#mobileCarousel" role="button"
                           data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-6 col-12 wave-pool">
                        <div class="wave-img">
                            <img src="/assets/img/drugstore_map/4-4.png">
                        </div>
                        <div class="wave-btn">{{main['btnLuck']}}</div>
                    </div>
                </div>
            </div>
            <!--РЕКОМЕНДОВАНЫЕ-->
            <div class="club-section">
                <div class="club-wrap row justify-content-between">
                    <div class="club-wrap-title row justify-content-center align-items-start">
                        <div class="">Рекомендованные</div>
                    </div>
                    <div class="club-wrap-blocks row" >
                        <div class="club-item col-lg-3 col-6"  v-for="(obj, index) in listRecom" v-if="filtred.limitList > index">
                            <item-vues :obj="obj" :seen="seen" :baseHref="baseHref"></item-vues>
                        </div>
                    </div>
                </div>
                <a  :href="baseHref + 'all?'+recomendHref" class="club-all row align-items-center">
                    <div class="wrap row align-items-center justify-content-end">
                        Все рекомендованные
                        <span class="forward">
                            <svg version="1.1" id="arr-recomnd" xmlns="http://www.w3.org/2000/svg"
                                 xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 143.3 82.3"   style="enable-background:new 0 0 143.3 82.3;" xml:space="preserve">
                                <path class="st0" d="M104.3,78.4l35.9-35.9c0,0,0,0,0,0c0.2-0.2,0.3-0.4,0.4-0.6c0.1-0.2,0.2-0.5,0.2-0.7c0,0,0,0,0,0
                                c0-0.3-0.1-0.5-0.2-0.8c-0.1-0.2-0.2-0.5-0.4-0.6L104.3,3.8c-0.8-0.8-2-0.8-2.8,0c-0.4,0.4-0.6,0.9-0.6,1.4c0,0.5,0.2,1,0.6,1.4
                                L134,39.1H5.6c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2H134l-32.5,32.5c-0.4,0.4-0.6,0.9-0.6,1.4c0,0.5,0.2,1,0.6,1.4
                                C102.3,79.2,103.5,79.2,104.3,78.4"></path>
                            </svg>
                         </span>
                    </div>
                </a>
            </div>
            <!--Клубы-->
            <div class="club-section">
                <div class="club-wrap row justify-content-between">
                    <div class="club-wrap-title row justify-content-center align-items-start">
                        <div class="">Клубы</div>
                    </div>
                    <div class="club-wrap-blocks row">
                        <div class="club-item col-lg-3 col-6"  v-for="(obj, index) in listClub"   v-if="filtred.limitList > index">
                            <item-vues :obj="obj" :seen="seen"  :baseHref="baseHref"></item-vues>
                        </div>
                    </div>
                </div>
                <a :href="baseHref + 'all?'+clubHref"  class="club-all row align-items-center">
                    <div class="wrap row align-items-center justify-content-end">
                        Все клубы
                        <span class="forward">
                            <svg version="1.1" id="arr-all-clb"
                                 xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 143.3 82.3"
                                 style="enable-background:new 0 0 143.3 82.3;" xml:space="preserve">
                                <path class="st0" d="M104.3,78.4l35.9-35.9c0,0,0,0,0,0c0.2-0.2,0.3-0.4,0.4-0.6c0.1-0.2,0.2-0.5,0.2-0.7c0,0,0,0,0,0
                                c0-0.3-0.1-0.5-0.2-0.8c-0.1-0.2-0.2-0.5-0.4-0.6L104.3,3.8c-0.8-0.8-2-0.8-2.8,0c-0.4,0.4-0.6,0.9-0.6,1.4c0,0.5,0.2,1,0.6,1.4
                                L134,39.1H5.6c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2H134l-32.5,32.5c-0.4,0.4-0.6,0.9-0.6,1.4c0,0.5,0.2,1,0.6,1.4
                                C102.3,79.2,103.5,79.2,104.3,78.4"/>
                            </svg>
                        </span>
                    </div>
                </a>
            </div>
            <!--недавно просмотренные-->
            <div class="club-section" v-if="seen[0].length">
                <div class="club-wrap row justify-content-between">
                    <div class="club-wrap-title row justify-content-center align-items-start">
                        <div class="">Вы недавно смотрели</div>
                    </div>
                    <div class="club-wrap-blocks row">
                        <div class="club-item col-lg-3 col-6"  v-for="(obj, index) in listSeen"
                             v-if="filtred.limitList >= index">
                            <item-vues :obj="obj" :baseHref="baseHref"></item-vues>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import Vue from 'vue'
  import item_vue from '@/components/itemVue';

  Vue.component('item-vues', item_vue,  {
    props: ['obj','seen','baseHref']
  })
  var seen = window.$cookies.isKey('seen') ? JSON.parse(window.$cookies.get('seen')) : {0:[]};
  var lang = document.querySelector('html').getAttribute('lang');
  var country = 'Украина';
  var city = window.$cookies.isKey('city') ? window.$cookies.get('city') : 'Київ';

  window.$cookies.set('city', city, Infinity, '/map');
  export default {
    searched: '',
    input: '',
    lang: lang,
    country: country,
    city: city,
    props: ['needle', 'allPoints', 'locations', 'main', 'filtred', 'baseHref'],
    data() {
      return {
        input: this.input,
        searched: this.searched,
        lang: lang,
        cities:[],
        city: city,
        country: country,
        recomended: [],
        recomendHref: 'state={"recomend":"true"}',
        clubHref: 'state={"sub":[9]}',
        clubs: [],
        seen:seen,
        listRecom: [],
        listClub: [],
        listSeen: [],
        limRecomended: 0,
        limClubs:0,
        limWached:0
      }
    },
    metaInfo: {
      title: 'Default Title',
      titleTemplate: '%s | My Awesome Webapp',
      link: [
        { rel: 'stylesheet', href: '/assets/css/map/main-page.css' },
        { rel: 'stylesheet', href: '/assets/css/map/responsive.css' },
        // { rel: 'favicon', href: 'favicon.ico' }
      ],
      script: [
        { src: 'https://sova.j2landing.com/assets/js/map/main-page.js', type: 'text/javascript', body: true },
      ]
    },
    computed: {
      getNeedle: function () {
        return this.needle;
      },
      getPoints: function () {
        return this.allPoints;
      },
      setCounrty: function () {
      },
    },
    mounted() {
      this.creatingSorting()
      this.cities = this.locations[country];
      setTimeout(function () {
        restartClub();
      }, 50)
    },
    methods: {

      creatingSorting: function () {
        this.listRecom = []
        this.listClub = []
        this.listSeen = []
        for ( this.obj in this.allPoints) {
          if(this.allPoints[this.obj].isCounsel == true  && this.allPoints[this.obj].city == this.city) {
            this.listRecom.push(this.allPoints[this.obj]);
          }
        }
        for ( this.obj in this.allPoints) {
          if(this.allPoints[this.obj].arr_sub.indexOf('9') >= 0  && this.allPoints[this.obj].city == this.city) {
            this.listClub.push(this.allPoints[this.obj]);
          }
        }
        for (this.obj in this.allPoints) {
          if(seen[0].indexOf(this.allPoints[this.obj].id)  >= 0 && this.allPoints[this.obj].city == this.city ) {
            this.listSeen.push(this.allPoints[this.obj]);
          }
        }
      },
      searchFilter: function () {
        var p = this.input
        var l = [];
        this.allPoints.filter(function (obj) {
          var searchRegex = new RegExp(p, 'i');
          if ((searchRegex.test(obj['name']) || searchRegex.test(['obj.content'])) && this.city == obj.city)
              l.push(obj);
        }.bind(this))
        this.searched = l;
      },
      getSubPage: function () {
      },
      controlLimit: function () {
        this.limWached  = this.limWached + 1
        return true
      },
      newCity: function () {
      //   window.$cookies.set('city', this.city, Infinity, '/map');
      //   this.creatingSorting()
      //   setTimeout(function () {
      //     restartClub();
      //   }, 50)
      }
    },

  };
</script>


