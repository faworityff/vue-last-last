<template>
    <a :href="obj.category_slug+'/'+obj.slug" v-on:click="clickItem(obj.id)" class="one-club">
        <div class="club-block row">
            <div class="clone-img"></div>
            <div class="club-arr"></div>
            <div class="club-title"> {{ obj['name'] }}</div>
            <div class="rating-location-wrap row align-items-center justify-content-between">
                <div class="rating-wrap col-xs-4">
                    <div class="row align-items-center justify-content-between">
                        <div class="rating-count row align-items-center justify-content-center">
                            {{obj.rating}}
                        </div>
                        <div class="">Оценка<br/>посетителей</div>
                    </div>
                </div>
                <div class="location-wrap col-xs-4">
                    <div class="row align-items-center justify-content-between">
                        <div class="location"><span>{{ obj['city'] }}</span>,<br/><span>{{ obj['country'] }}</span>
                        </div>
                        <div class="location-pin">
                            <svg version="1.1" id="pin" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                                                         viewBox="0 0 43.8 51.4" style="enable-background:new 0 0 43.8 51.4;" xml:space="preserve">
                                                    <g>
                                                        <g>
                                                            <path class="st0" d="M21.4,0.9C9.9,0.9,0.6,10.3,0.6,21.7c0,4.8,3.3,11,9.9,18.4c4,4.4,7.9,7.9,9.2,9V26.5c-2.3-0.7-4-2.9-4-5.4
                                                                c0-3.2,2.6-5.7,5.7-5.7c3.2,0,5.7,2.6,5.7,5.7c0,2.5-1.6,4.6-3.9,5.4c0,0,0,0,0,0v10.4c0,2.1,0,4.3,0,6.4v5.9
                                                                c1.4-1.2,5.2-4.6,9.1-9c6.6-7.4,9.9-13.6,9.9-18.4C42.2,10.3,32.9,0.9,21.4,0.9z"/>
                                                        </g>
                                                    </g>
                                                </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="">
                <div class="review-img">
                    <div class="review-img-inner" v-if="obj.gallery[0] != undefined">
                        <div class="club-data-img" :data-img="obj.gallery[0]['path']"></div>
                    </div>
                    <div class="review-rev row align-items-center justify-content-center">
                        <div class="">
                            <div class="review-rev-count">{{Object.keys(obj.reviews).length}}</div>
                            <div>Отзывов</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="club-more">
                <div>Подробнее</div>
            </div>
        </div>
    </a>
</template>
<script>
  var seen = window.$cookies.isKey('seen') ? JSON.parse(window.$cookies.get('seen')) : {0:[]};
console.log(seen, 'seen1');
  export default {
    props: ['obj'],
    data: function () {
      return {
        seen:seen
      }
    },
    methods: {
      clickItem:function (a) {
        console.log(this.seen[0], this.seen[0].indexOf(a), a);
        if(this.seen[0].indexOf(a)< 0) {
          this.seen[0].push(a)
          window.$cookies.set('seen', JSON.stringify(this.seen), Infinity, '/map');
        }
      }
    }
  }
</script>