<template>
    <div>
        <input type="search" id="search-black" placeholder=""  v-model="input" v-on:input="searchFilter">
        <ul id="searchlist" class="search-list">
            <li v-for="point in searched" :val="point['name']">
                <router-link :to="'/'+ point.category_slug +'/'+ point.slug">{{ point['name']}}</router-link>
            </li>
            <li v-for="point in searchedCategory" :val="point['name']">
                <router-link :to='getHref(point.id, "sub")'>{{ point['name']}}</router-link>
            </li>
            <li v-for="point in searchedMark" :val="point['name']">
                <router-link :to='getHref(point.id, "mark")'>{{ point['name']}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        objctsSearch: JSON.parse(window.loc_obj).objects,
        input:  '',
        searched: '',
        searchedMark: '',
        searchedCategory: '',
      }
    },
    methods: {
      searchFilter: function () {
        var p = this.input
        var l = [];
        var cat = []
        var mark = []
        console.log('iter');
        if (p.length) {
          /* search in objects */
          this.objctsSearch.filter(function (obj) {
            var searchRegex = new RegExp(p, 'i');
            if ((searchRegex.test(obj['name']) || searchRegex.test(['obj.content'])) && this.city == obj.city)
              l.push(obj);
            console.log(l, obj);
          }.bind(this))
          /* search in subcategories */
          for (var k in this.categories) {
            this.categories[k]['marks'].filter(function (obj) {
              var searchRegex = new RegExp(p, 'i');
              if ((searchRegex.test(obj['name']))) {
                mark.push(obj);
              }
            }.bind(this))
            if (k != 'common_mark') {
              this.categories[k]['subcat'].filter(function (obj) {
                var searchRegex = new RegExp(p, 'i');
                if ((searchRegex.test(obj['name']))) {
                  cat.push(obj);
                }
              }.bind(this))
            }
          }
          this.searchedMark = mark;
          this.searchedCategory = cat;
          this.searched = l;
          setTimeout(function () {
            console.log(l);
          },5000)
          console.log(l)
          console.log(this.searched)
        } else {
          this.searched = l;
        }
      },
    }
  }
</script>

<style scoped>

</style>