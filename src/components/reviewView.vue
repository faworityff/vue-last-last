<template>
    <div id="review" class="">
        <div class="review-section" v-for="(review, index) in obj.reviews" v-if="index < limit">
            <div class="review-block row justify-content-between align-items-start">
                <div class="col-auto">
                    <div class="review-image row">
                        <img :src="review.author_avatar">
                    </div>
                </div>
                <div class="col review-right-content">
                    <div class="row">
                        <div class="col review-top-title">
                            <div class="row justify-content-start align-items-start">
                                <div class="col-auto">
                                    <div class="review-name row">
                                        {{review.author_name}}
                                    </div>
                                    <div class="review-date row">
                                        <!--{{review.date}}-->
                                    </div>
                                </div>
                                <div class="col-auto review-rating">
                                    <span class="round" v-for="n in 5" v-bind:class="{active: actPoint(review.rat_avg ,n)}"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="row justify-content-between align-items-start">
                                <div class="review-content col">
                                    <div class="review-title row">
                                        {{review.title}}
                                    </div>
                                    <div class="review-description row">
                                        {{review.content}}
                                    </div>
                                </div>
                                <div class="review-buttons col-auto">
                                    <div class="complain-button row justify-content-end align-items-center">
                                        <div class="underline open-in-popup" data-number="5" :data-id="review.id"
                                             v-on:click="getYammerForm(review.id)">Пожаловаться</div>
                                        <svg version="1.1" id="complain" xmlns="http://www.w3.org/2000/svg"
                                                                         xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                                         viewBox="0 0 104.4 104.5" style="enable-background:new 0 0 104.4 104.5;" xml:space="preserve">

<path class="st0" d="M4.8,101.9c-0.7,0-1.3-0.3-1.8-0.7c-0.7-0.7-0.9-1.7-0.6-2.6l7-20.9C4.8,69.9,2.3,61,2.3,51.9
	c0-27.6,22.4-50,50-50s50,22.4,50,50s-22.4,50-50,50c-9.1,0-18-2.5-25.8-7.2l-20.9,7C5.3,101.9,5.1,101.9,4.8,101.9z M26.8,89.5
	c0.5,0,0.9,0.1,1.3,0.4c7.2,4.6,15.6,7,24.1,7c24.8,0,45-20.2,45-45s-20.2-45-45-45s-45,20.2-45,45c0,8.6,2.4,16.9,7,24.1
	c0.4,0.6,0.5,1.4,0.3,2.1L8.8,95.4L26,89.6C26.3,89.5,26.5,89.5,26.8,89.5z"/>
<circle class="st0" cx="51.7" cy="81.2" r="2.5"/>
<path class="st0" d="M52.3,64.8c-1.4,0-2.5-1.1-2.5-2.5V24.5c0-1.4,1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5v37.8
	C54.8,63.7,53.7,64.8,52.3,64.8z"/>
</svg>
                                    </div>
                                    <div class="answer-button row justify-content-end align-items-center">
                                        <div class="underline">Ответить</div>
                                        <svg version="1.1" id="add" xmlns="http://www.w3.org/2000/svg"
                                                                         xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                                         viewBox="0 0 528.9 530.6" style="enable-background:new 0 0 528.9 530.6;" xml:space="preserve">

<polygon class="st0" points="528.9,230.4 300.2,230.4 300.2,1.4 229.3,1.4 229.3,230.4 1,230.4 1,301.3 229.3,301.3 229.3,530.3
	300.2,530.3 300.2,301.3 528.9,301.3 "></polygon>
</svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 review-block answer-block">
                            <form class="row" :id="'addAnswer' + review.id" v-on:submit.prevent="addAnswer('addAnswer' + review.id)">
                                <textarea name="content_ru" rows="4"></textarea>
                                <input class="answer-btn"  type="submit" value="Ответить"></input>
                                <input type="hidden" name="rev_id"  :value="review.id">
                                <input type="hidden" name="inst_id"  :value="obj.id">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div v-for="(otz, index) in review.comments" >
                <div v-if="index < limitComment">
                    <otziv-view :otz="otz" :obj="obj" :otzLim="otzLim"></otziv-view>
                </div>
                <div v-else-if="index == limitComment"   v-on:click="moreOtzivov" class="more-comments underline">Показать все ответы</div>
            </div>

        </div>

    </div>
</template>

<script>
  import Vue from 'vue'
  import otziv_view from '@/components/otzivView';
  import axios from 'axios'
  Vue.component('otziv-view', otziv_view, {
    props: ['otz','obj','otzLim']
  })


  export default {
    props: ['obj','limit'],
    data: function (){
        return {
          otzLim:0,
          limitComment:0
        }
    },
    methods: {
      getYammerForm: function (ids) {

      },
      moreOtzivov: function () {
        this.limitComment = this.limitComment ? 0 : 1000;
      },
      actPoint: function (a,b) {
        return +a >= b ? true : false
      },
    }
  }
</script>

<style scoped>
#review {
    width: 100%;
}
</style>