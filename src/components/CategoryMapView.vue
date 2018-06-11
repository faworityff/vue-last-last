    <template>
        <div class="search-content container-fluid m-top">
            <div class="club-top-nav club-all">
                <div class="wrap row align-items-center justify-content-between">
                    <a class="back-page" v-on:click="goBack">
                        Назад
                        <span class="forward">
                        <svg version="1.1" id="back"
                             xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 143.3 82.3"
                             style="enable-background:new 0 0 143.3 82.3;" xml:space="preserve">

                            <path class="st0" d="M104.3,78.4l35.9-35.9c0,0,0,0,0,0c0.2-0.2,0.3-0.4,0.4-0.6c0.1-0.2,0.2-0.5,0.2-0.7c0,0,0,0,0,0
                            c0-0.3-0.1-0.5-0.2-0.8c-0.1-0.2-0.2-0.5-0.4-0.6L104.3,3.8c-0.8-0.8-2-0.8-2.8,0c-0.4,0.4-0.6,0.9-0.6,1.4c0,0.5,0.2,1,0.6,1.4
                            L134,39.1H5.6c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2H134l-32.5,32.5c-0.4,0.4-0.6,0.9-0.6,1.4c0,0.5,0.2,1,0.6,1.4
                            C102.3,79.2,103.5,79.2,104.3,78.4"/>
                        </svg>
                    </span>
                    </a>
                    <a href="/inst-create" class="add-location">
                <span class="location-pin">
                    <svg version="1.1" id="add-loc" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         viewBox="0 0 43.8 51.4" style="enable-background:new 0 0 43.8 51.4;" xml:space="preserve">
                            <g>
                                <g>
                                    <path class="st0" d="M21.4,0.9C9.9,0.9,0.6,10.3,0.6,21.7c0,4.8,3.3,11,9.9,18.4c4,4.4,7.9,7.9,9.2,9V26.5c-2.3-0.7-4-2.9-4-5.4
                                        c0-3.2,2.6-5.7,5.7-5.7c3.2,0,5.7,2.6,5.7,5.7c0,2.5-1.6,4.6-3.9,5.4c0,0,0,0,0,0v10.4c0,2.1,0,4.3,0,6.4v5.9
                                        c1.4-1.2,5.2-4.6,9.1-9c6.6-7.4,9.9-13.6,9.9-18.4C42.2,10.3,32.9,0.9,21.4,0.9z"/>
                                </g>
                            </g>
                    </svg>
                </span>
                        Добавить локацию
                        <span class="add-locate">
                        <svg version="1.1" id="add" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                 viewBox="0 0 528.9 530.6" style="enable-background:new 0 0 528.9 530.6;" xml:space="preserve">

                            <polygon class="st0" points="528.9,230.4 300.2,230.4 300.2,1.4 229.3,1.4 229.3,230.4 1,230.4 1,301.3 229.3,301.3 229.3,530.3
                                300.2,530.3 300.2,301.3 528.9,301.3 "/>
                            </svg>
                    </span>
                    </a>
                </div>
            </div>
            <div class="club-section">
                <div class="club-wrap row justify-content-between">
                    <div class="club-wrap-title row justify-content-center align-items-start">
                        <div class="">Поиск локации</div>
                    </div>
                    <div class="club-wrap-blocks row">
                        <!--FILTERS-->
                        <div class="filter-column col-md-6 col-lg-3">
                            <div class="search-club">
                                <form class="">
                                <div class="input-group-search">
                                    <input type="search" id="search-black-screen">
                                </div>
                                <div class="search-btn-right">
                                    <button class="btn btn-search" type="submit">
                                        <svg version="1.1" id="search-inp" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 17.5 16.6" style="enable-background:new 0 0 17.5 16.6;" xml:space="preserve">

<path class="st0" d="M12.2,10.2c0.7-1,1.1-2.2,1.1-3.5c0-3.5-2.8-6.3-6.3-6.3S0.7,3.1,0.7,6.6s2.8,6.3,6.3,6.3c1.3,0,2.5-0.4,3.5-1.1l4.5,4.5
	l1.7-1.7L12.2,10.2z M2.6,6.6c0-2.4,2-4.4,4.4-4.4s4.4,2,4.4,4.4S9.4,11,7,11S2.6,9.1,2.6,6.6z"></path>
</svg>
                                    </button>
                                </div>
                            </form>
                            </div>
                            <form id="accordion" class="filter">
                                <div class="card" v-for="(value, key ) in categories" v-if="'common_mark' != key">
                                    <div class="card-header" v-bind:class="{collapsed: filterOpen(value.id)}"
                                         :id="'heading_'+ value.id"
                                         data-toggle="collapse" :data-target="'#collapse_'+ value.id"
                                         aria-expanded="false" :aria-controls="'collapse_'+ value.id"
                                         v-on:click="filterIdObj(value.id)">
                                        <div class="filter-title">
                                        <span class="filter-cat-icon">
                                        <svg version="1.1" id="disko"
                                             xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                             x="0px" y="0px"
                                                 viewBox="0 0 84.1 91.9" style="enable-background:new 0 0 84.1 91.9;" xml:space="preserve">
                                            <path d="M33.6,26.9c0.2-1.2,0.1-2.6,0.6-3.1c3.9-3,2.4-7.2,2.5-10.9c0.2-4.3,0-8.6,0-12.9c0.4,0,0.9,0,1.3,0c0,1.9,0,3.7,0,5.6
                                                c0,3.5,0,7,0,10.5c0,2.6-0.7,5.4,2.3,7.3c0.8,0.5,0.7,2.2,1.1,3.7c9.7,1.7,17.7,6.5,22.9,15.4c4,6.8,5,14.1,3.7,21.7
                                                C65.5,78.6,51.6,89.7,37,89.3C22.2,89,9,77.7,6.9,63.4C4.6,47.6,13.1,31,33.6,26.9z M30.8,63.9c4.4,0,8.4,0,12.5,0
                                                c0-4.4,0-8.4,0-12.4c-4.3,0-8.4,0-12.5,0C30.8,55.7,30.8,59.6,30.8,63.9z M56.3,52.5c-3.9-0.4-7.4-0.7-11.1-1.1c0,4.3,0,8.3,0,12.7
                                                c3.8-0.4,7.3-0.7,11.1-1.1C56.3,59.5,56.3,56.3,56.3,52.5z M43.5,49.7c-0.3-3.2-0.4-5.9-0.9-8.6c-0.1-0.8-1.3-1.8-2.1-1.9
                                                c-2.2-0.3-4.5-0.3-6.7,0c-0.8,0.1-2,1.1-2.1,1.9c-0.5,2.7-0.6,5.5-0.8,8.6c3.2,0,6,0,8.9,0C40.8,49.7,41.9,49.7,43.5,49.7z
                                                 M44.1,76.6c10.6-1.6,10.6-0.8,11.8-11.9c-3.6,0.4-7.1,0.7-10.7,1.1C44.8,69.4,44.5,72.8,44.1,76.6z M19,64.7
                                                c1.6,10.6,1.8,10.8,11.2,11.7c-0.4-3.6-0.7-7.1-1-10.8C25.7,65.3,22.5,65,19,64.7z M44.1,39.8c0.4,3.5,0.8,6.7,1.2,10
                                                c3.7,0.3,7.1,0.6,10.6,0.9C54.7,41,54.6,40.8,44.1,39.8z M30.2,39.6c-9.4,1-11.4,3.2-10.5,11.1c3.1-0.3,6.3-0.7,9.4-1
                                                C29.5,46.2,29.9,43.1,30.2,39.6z M32.3,37.5c3.4,0,6.4,0,9.5,0c-0.4-6.7-0.8-7.3-4.5-7.3C33,30.2,32.6,30.9,32.3,37.5z M17,53
                                                c-7.5,0.7-7.9,1.1-7.3,6.3c0.3,2.4,2.9,3.4,7.3,2.6C17,59,17,56,17,53z M65,54.1c-2.3-0.4-4.5-0.9-6.9-1.3c0,3.4,0,6.3,0,9.2
                                                C65,62.8,65.8,62,65,54.1z M32.4,78.9c0.9,7.1,1.2,7.5,6.1,6.9c4.7-0.5,2.1-4.5,3.9-6.9C38.6,78.9,35.7,78.9,32.4,78.9z M52.7,77
                                                c-9.1,1-10.1,1.8-9.7,8.2C49.4,84.2,50.6,83.2,52.7,77z M22.1,39.6c8.8-0.9,10.1-2.1,9.2-8.4C26,31.5,23.1,34.6,22.1,39.6z M43,31
                                                c-0.1,6.8,2.1,8.5,9.6,7.9C51.5,33.8,48.2,31.5,43,31z M64.4,63.2c-7.1,1.2-7.6,1.8-7.9,10C62.7,71.2,64.2,69.4,64.4,63.2z
                                                 M64.4,52.1c-0.3-5.3-3.2-7.9-7.9-9.1C57.8,52.2,56.7,51.3,64.4,52.1z M14.5,41.6c0.3,0.3,0.5,0.5,0.8,0.8c3.5-0.9,6.4-2.6,6.5-7.6
                                                C19.1,37.3,16.8,39.4,14.5,41.6z M60.7,73.9c-4.8,0.6-6.7,2.9-6.6,7C56.1,78.8,58.1,76.7,60.7,73.9z M14.7,74.7
                                                c2.1,2,4.2,4.1,6.9,6.8C21.1,76.5,18.8,74.6,14.7,74.7z M58.7,42.8c0.4-0.4,0.9-0.7,1.3-1.1c-1.9-2.2-3.9-4.4-5.8-6.5
                                                c-0.5,0.5-0.9,0.9-1.4,1.4C54.7,38.6,56.7,40.7,58.7,42.8z M40.8,25.3c-1.7-1-2.6-2-3.3-1.9c-0.8,0.1-1.4,1.3-2.1,2
                                                c0.7,0.5,1.4,1.5,2.1,1.5C38.3,27,39.1,26.2,40.8,25.3z"/>
                                            <path d="M65,37.8c-0.6-4.3-2.5-6.8-7-7.3c4.6,0,6.4-2.6,6.6-7.5c1.9,6.3,1.9,6.3,7.7,7.7C67.7,31.5,64.5,32.9,65,37.8z"/>
                                            <path d="M14.6,19.4c-0.6-4.3-2.5-6.8-7-7.3c4.6,0,6.4-2.6,6.6-7.5c1.9,6.3,1.9,6.3,7.7,7.7C17.3,13,14.1,14.4,14.6,19.4z"/>
                                            <path d="M7.4,91c-0.6-4.3-2.5-6.8-7-7.3c4.6,0,6.4-2.6,6.6-7.5c1.9,6.3,1.9,6.3,7.7,7.6C10,84.7,6.8,86.1,7.4,91z"/>
                                            <path d="M75.7,80.4c-0.6-4.3-2.5-6.8-7-7.3c4.6,0,6.4-2.6,6.6-7.5c1.9,6.3,1.9,6.3,7.7,7.7C78.3,74,75.1,75.4,75.7,80.4z"/>
                                        </svg>
                                    </span>
                                            {{value['name']}}
                                            <span class="arr"></span>
                                        </div>
                                    </div>
                                    <div :id="'collapse_'+ value.id" class="collapse"
                                         v-bind:class="{show: !filterOpen(value.id)}" aria-labelledby="heading1">
                                        <div class="card-body">
                                            <div class="form-check" v-for="subcategory in value.subcat">
                                                <input class="form-check-input" type="checkbox" name="exampleRadios1"
                                                       :id="'subcategory_'+subcategory['id']" :val="subcategory['id']"
                                                       v-on:click="subFilterObj(subcategory['id'])"
                                                       :checked="filtred.sub.indexOf(subcategory['id']) >=0">
                                                <label class="form-check-label" :for="'subcategory_'+subcategory['id']">
                                                    {{subcategory.name}}
                                                </label>
                                            </div>
                                            <div class="additional-marks">С метками</div>
                                            <div class="form-check" v-for="oneMark in value.marks">
                                                <input class="form-check-input" type="checkbox" name="exampleRadios1-1"
                                                       :id="'mark_'+oneMark['id']" :value="oneMark['id']"
                                                       v-on:click="marksFilterObj(oneMark['id'])"
                                                       :checked="filtred.mark.indexOf(oneMark['id']) >=0">
                                                <label class="form-check-label" :for="'mark_'+oneMark['id']">
                                                    {{oneMark['name']}}
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!--Время работы-->
                                <div class="card">
                                    <div class="card-header" id="heading6" data-toggle="collapse" data-target="#collapse6"
                                         aria-expanded="true" aria-controls="collapse3">
                                        <div class="filter-title">
                                    <span class="filter-cat-icon">
                                        <svg version="1.1" id="time" xmlns="http://www.w3.org/2000/svg"
                                             xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                 viewBox="0 0 64.7 64.5" style="enable-background:new 0 0 64.7 64.5;" xml:space="preserve">

                                                 <g>
                                                    <circle class="st0" cx="32.3" cy="32.4" r="31"/>
                                                    <circle class="st0" cx="32.3" cy="32.4" r="27"/>
                                                    <circle class="st1" cx="32.3" cy="32.4" r="21"/>
                                                    <line class="st0" x1="32.3" y1="29.4" x2="32.3" y2="15.4"/>
                                                    <line class="st0" x1="32.3" y1="38.4" x2="32.3" y2="35.4"/>
                                                    <path class="st0" d="M35.3,32.4c0,1.7-1.3,3-3,3c-1.3,0-2.3-0.8-2.8-1.9c-0.2-0.3-0.2-0.7-0.2-1.1c0-1.7,1.3-3,3-3
                                                        c1.2,0,2.3,0.7,2.7,1.8C35.2,31.5,35.3,31.9,35.3,32.4z"/>
                                                    <line class="st0" x1="29.5" y1="33.5" x2="18.3" y2="38.4"/>
                                                    <line class="st0" x1="37.4" y1="30.1" x2="35" y2="31.1"/>
                                                </g>
                                            </svg>
                                    </span>
                                            Время работы<span class="arr"></span>
                                        </div>
                                    </div>
                                    <div id="collapse6" class="collapse show" aria-labelledby="heading6">
                                        <div class="card-body">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" name="exampleRadios6"
                                                       id="exampleRadios6-1" value="option6-1">
                                                <label class="form-check-label" for="exampleRadios6-1">
                                                    Открыто сейчас
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" name="exampleRadios6"
                                                       id="exampleRadios6-2" value="option6-2">

                                                <label class="work-time form-check-label full-width" for="exampleRadios6-2">

                                                    <div class="row">
                                                        <div class="col-12">
                                                            По времени работы:
                                                        </div>
                                                        <div class="col-5">
                                                            <input id="timepickerFr" type="text"
                                                                   class="form-control timepicker" placeholder="от" value="">
                                                        </div>
                                                        -
                                                        <div class="col-5">
                                                            <input id="timepickerTo" type="text"
                                                                   class="form-control timepicker" placeholder="до"  value="">
                                                        </div>
                                                        <button v-on:click="timeChangeFrom">Выбрать</button>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!--РЕКОМЕНДОВАНЫЕ-->
                                <div class="card">
                                    <div class="card-header" id="heading7" data-toggle="collapse" data-target="#collapse7"
                                         aria-expanded="true" aria-controls="collapse7">
                                        <div class="filter-title">
                                    <span class="filter-cat-icon">
                                        <svg version="1.1" id="reccom" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                             x="0px" y="0px" viewBox="0 0 40.9 39" style="enable-background:new 0 0 40.9 39;" xml:space="preserve">
                                            <g>
                                                <path d="M14.8,23.4l-3.6,11l9.4-6.8l9.4,6.8l-3.6-11l9.4-6.8H24.2L20.6,5.5L17,16.6H5.4L14.8,23.4
                                                 M20.6,0.1l4.8,14.8h15.5L28.3,24 l4.8,14.8l-12.6-9.1L7.9,38.8L12.7,24L0.1,14.9h15.5L20.6,0.1"/>
                                                <polyline points="18.6,18.5 20.6,12.3 22.6,18.5 29.2,18.5 23.8,22.4 25.9,28.7 20.6,24.8 15.3,28.7
                                                17.3,22.4 12,18.5 18.6,18.5"/>
                                            </g>
                                        </svg>
                                    </span>
                                            Рекомендовано администрацией сайта<span class="arr"></span>
                                        </div>
                                    </div>
                                    <div id="collapse7" class="collapse show" aria-labelledby="heading7">
                                        <div class="card-body">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" name="exampleRadios7"
                                                       id="exampleRadios7-1" value="option7-1"  :checked="recomend == 'true'">
                                                <label class="form-check-label" for="exampleRadios7-1"
                                                       v-on:click="recomendFilterObj()">
                                                    Да
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!--РАЙОН-->
                                <div class="card">
                                    <div class="card-header" id="heading8" data-toggle="collapse" data-target="#collapse8"
                                         aria-expanded="true" aria-controls="collapse8">
                                        <div class="filter-title">
                                    <span class="filter-cat-icon">
                                        <svg version="1.1" id="area" xmlns="http://www.w3.org/2000/svg"
                                             xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 43.8 51.4" style="enable-background:new 0 0 43.8 51.4;" xml:space="preserve">
                                            <g>
                                                <g>
                                                    <path class="st0" d="M21.4,0.9C9.9,0.9,0.6,10.3,0.6,21.7c0,4.8,3.3,11,9.9,18.4c4,4.4,7.9,7.9,9.2,9V26.5c-2.3-0.7-4-2.9-4-5.4
                                                        c0-3.2,2.6-5.7,5.7-5.7c3.2,0,5.7,2.6,5.7,5.7c0,2.5-1.6,4.6-3.9,5.4c0,0,0,0,0,0v10.4c0,2.1,0,4.3,0,6.4v5.9
                                                        c1.4-1.2,5.2-4.6,9.1-9c6.6-7.4,9.9-13.6,9.9-18.4C42.2,10.3,32.9,0.9,21.4,0.9z"/>
                                                </g>
                                            </g>
                                        </svg>
                                    </span>
                                            Поиск по району<span class="arr"></span>
                                        </div>
                                    </div>
                                    <div id="collapse8" class="collapse show" aria-labelledby="heading8">
                                        <div class="card-body">
                                            <div class="form-check" v-for="(point, ind) in location[country][city]">
                                                <input class="form-check-input" type="checkbox" :name="'exampleRadios_'+ind"
                                                       :id="'exampleRadios_'+ind" :value="point">
                                                <label class="form-check-label" :for="'exampleRadios_'+ind"
                                                       v-on:click="districtFilterObj(point)">
                                                    {{point}}
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <!--РАНЕЕ ИЗБРАННЫЕ-->
                                <div class="card">
                                    <div class="card-header" id="heading9" data-toggle="collapse" data-target="#collapse9"
                                         aria-expanded="true" aria-controls="collapse9">
                                        <div class="filter-title">
                                    <span class="filter-cat-icon">
                                        <svg version="1.1" id="favorite" xmlns="http://www.w3.org/2000/svg"
                                             xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 41 50" style="enable-background:new 0 0 41 50;" xml:space="preserve">
                            <g>
                                <path d="M20.8,0.9C9.6,0.9,0.6,10.3,0.6,21.7c0,4.8,3.2,11,9.6,18.4c3.9,4.4,7.7,7.9,8.9,9V27.2l-5.4-5.4L12,20
                                    c-2-2.1-2.1-5.4-0.1-7.5c2-2,5.3-2,7.2,0l1.6,1.7l1.7-1.7c2-2,5.3-2.1,7.2,0c2,2.1,2,5.4,0,7.5L28,21.8l-5.4,5.5v9.6
                                    c0,2.1,0,4.3,0,6.4v5.9c1.4-1.2,5-4.6,8.8-9c6.4-7.4,9.6-13.6,9.6-18.4C41,10.3,32,0.9,20.8,0.9z"/>
</g>
</svg>
                                    </span>
                                            Ранее избранные<span class="arr"></span>
                                        </div>
                                    </div>
                                    <div id="collapse9" class="collapse show" aria-labelledby="heading9">
                                        <div class="card-body">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" name="exampleRadios9"
                                                       id="exampleRadios9-1" value="option9-1" :checked="faworite == true"
                                                       v-on:click="faworiteShow()">
                                                <label class="form-check-label" for="exampleRadios9-1">
                                                    Да
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!--Общие-->
                                <div class="card" v-for="(value, key ) in categories" v-if="'common_mark' == key">
                                    <div class="card-header" v-bind:class="{collapsed: filterOpen(value.id)}"
                                         :id="'heading_'+ value.id"
                                         data-toggle="collapse" :data-target="'#collapse_'+ value.id"
                                         aria-expanded="false" :aria-controls="'collapse_'+ value.id"
                                         v-on:click="filterIdObj(value.id)">
                                        <div class="filter-title">
                                        <span class="filter-cat-icon">
                                        <svg version="1.1" id="disko" xmlns="http://www.w3.org/2000/svg"
                                             xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                 viewBox="0 0 84.1 91.9" style="enable-background:new 0 0 84.1 91.9;" xml:space="preserve">
                                            <path d="M33.6,26.9c0.2-1.2,0.1-2.6,0.6-3.1c3.9-3,2.4-7.2,2.5-10.9c0.2-4.3,0-8.6,0-12.9c0.4,0,0.9,0,1.3,0c0,1.9,0,3.7,0,5.6
                                                c0,3.5,0,7,0,10.5c0,2.6-0.7,5.4,2.3,7.3c0.8,0.5,0.7,2.2,1.1,3.7c9.7,1.7,17.7,6.5,22.9,15.4c4,6.8,5,14.1,3.7,21.7
                                                C65.5,78.6,51.6,89.7,37,89.3C22.2,89,9,77.7,6.9,63.4C4.6,47.6,13.1,31,33.6,26.9z M30.8,63.9c4.4,0,8.4,0,12.5,0
                                                c0-4.4,0-8.4,0-12.4c-4.3,0-8.4,0-12.5,0C30.8,55.7,30.8,59.6,30.8,63.9z M56.3,52.5c-3.9-0.4-7.4-0.7-11.1-1.1c0,4.3,0,8.3,0,12.7
                                                c3.8-0.4,7.3-0.7,11.1-1.1C56.3,59.5,56.3,56.3,56.3,52.5z M43.5,49.7c-0.3-3.2-0.4-5.9-0.9-8.6c-0.1-0.8-1.3-1.8-2.1-1.9
                                                c-2.2-0.3-4.5-0.3-6.7,0c-0.8,0.1-2,1.1-2.1,1.9c-0.5,2.7-0.6,5.5-0.8,8.6c3.2,0,6,0,8.9,0C40.8,49.7,41.9,49.7,43.5,49.7z
                                                 M44.1,76.6c10.6-1.6,10.6-0.8,11.8-11.9c-3.6,0.4-7.1,0.7-10.7,1.1C44.8,69.4,44.5,72.8,44.1,76.6z M19,64.7
                                                c1.6,10.6,1.8,10.8,11.2,11.7c-0.4-3.6-0.7-7.1-1-10.8C25.7,65.3,22.5,65,19,64.7z M44.1,39.8c0.4,3.5,0.8,6.7,1.2,10
                                                c3.7,0.3,7.1,0.6,10.6,0.9C54.7,41,54.6,40.8,44.1,39.8z M30.2,39.6c-9.4,1-11.4,3.2-10.5,11.1c3.1-0.3,6.3-0.7,9.4-1
                                                C29.5,46.2,29.9,43.1,30.2,39.6z M32.3,37.5c3.4,0,6.4,0,9.5,0c-0.4-6.7-0.8-7.3-4.5-7.3C33,30.2,32.6,30.9,32.3,37.5z M17,53
                                                c-7.5,0.7-7.9,1.1-7.3,6.3c0.3,2.4,2.9,3.4,7.3,2.6C17,59,17,56,17,53z M65,54.1c-2.3-0.4-4.5-0.9-6.9-1.3c0,3.4,0,6.3,0,9.2
                                                C65,62.8,65.8,62,65,54.1z M32.4,78.9c0.9,7.1,1.2,7.5,6.1,6.9c4.7-0.5,2.1-4.5,3.9-6.9C38.6,78.9,35.7,78.9,32.4,78.9z M52.7,77
                                                c-9.1,1-10.1,1.8-9.7,8.2C49.4,84.2,50.6,83.2,52.7,77z M22.1,39.6c8.8-0.9,10.1-2.1,9.2-8.4C26,31.5,23.1,34.6,22.1,39.6z M43,31
                                                c-0.1,6.8,2.1,8.5,9.6,7.9C51.5,33.8,48.2,31.5,43,31z M64.4,63.2c-7.1,1.2-7.6,1.8-7.9,10C62.7,71.2,64.2,69.4,64.4,63.2z
                                                 M64.4,52.1c-0.3-5.3-3.2-7.9-7.9-9.1C57.8,52.2,56.7,51.3,64.4,52.1z M14.5,41.6c0.3,0.3,0.5,0.5,0.8,0.8c3.5-0.9,6.4-2.6,6.5-7.6
                                                C19.1,37.3,16.8,39.4,14.5,41.6z M60.7,73.9c-4.8,0.6-6.7,2.9-6.6,7C56.1,78.8,58.1,76.7,60.7,73.9z M14.7,74.7
                                                c2.1,2,4.2,4.1,6.9,6.8C21.1,76.5,18.8,74.6,14.7,74.7z M58.7,42.8c0.4-0.4,0.9-0.7,1.3-1.1c-1.9-2.2-3.9-4.4-5.8-6.5
                                                c-0.5,0.5-0.9,0.9-1.4,1.4C54.7,38.6,56.7,40.7,58.7,42.8z M40.8,25.3c-1.7-1-2.6-2-3.3-1.9c-0.8,0.1-1.4,1.3-2.1,2
                                                c0.7,0.5,1.4,1.5,2.1,1.5C38.3,27,39.1,26.2,40.8,25.3z"/>
                                            <path d="M65,37.8c-0.6-4.3-2.5-6.8-7-7.3c4.6,0,6.4-2.6,6.6-7.5c1.9,6.3,1.9,6.3,7.7,7.7C67.7,31.5,64.5,32.9,65,37.8z"/>
                                            <path d="M14.6,19.4c-0.6-4.3-2.5-6.8-7-7.3c4.6,0,6.4-2.6,6.6-7.5c1.9,6.3,1.9,6.3,7.7,7.7C17.3,13,14.1,14.4,14.6,19.4z"/>
                                            <path d="M7.4,91c-0.6-4.3-2.5-6.8-7-7.3c4.6,0,6.4-2.6,6.6-7.5c1.9,6.3,1.9,6.3,7.7,7.6C10,84.7,6.8,86.1,7.4,91z"/>
                                            <path d="M75.7,80.4c-0.6-4.3-2.5-6.8-7-7.3c4.6,0,6.4-2.6,6.6-7.5c1.9,6.3,1.9,6.3,7.7,7.7C78.3,74,75.1,75.4,75.7,80.4z"/>
                                        </svg>
                                    </span>
                                            {{value['name']}}
                                            <span class="arr"></span>
                                        </div>
                                    </div>
                                    <div :id="'collapse_'+ value.id" class="collapse"
                                         v-bind:class="{show: !filterOpen(value.id)}" aria-labelledby="heading1">
                                        <div class="card-body">
                                            <div class="form-check" v-for="subcategory in value.subcat">
                                                <input class="form-check-input" type="checkbox" name="exampleRadios1"
                                                       :id="'subcategory_'+subcategory['id']" :val="subcategory['id']"
                                                       v-on:click="subFilterObj(subcategory['id'])"
                                                       :checked="filtred.sub.indexOf(subcategory['id']) >=0">
                                                <label class="form-check-label" :for="'subcategory_'+subcategory['id']">
                                                    {{subcategory.name}}
                                                </label>
                                            </div>
                                            <div class="additional-marks">С метками</div>
                                            <div class="form-check" v-for="oneMark in value.marks">
                                                <input class="form-check-input" type="checkbox" name="exampleRadios1-1"
                                                       :id="'mark_'+oneMark['id']" :value="oneMark['id']"
                                                       v-on:click="marksFilterObj(oneMark['id'])"
                                                       :checked="filtred.mark.indexOf(oneMark['id']) >=0">
                                                <label class="form-check-label" :for="'mark_'+oneMark['id']">
                                                    {{oneMark['name']}}
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <!--END FILTERS-->
                        <!--ПОКАЗЫВАЕМ РЕЗУЛЬТАТЫ-->
                        <div class="filter-map filter-club col-md-6 col-lg-9">
                            <div class="map">
                                <google-map name="map" :coord_lat="filtred.mapObj[0].lat" :coord_lng="filtred.mapObj[0].lng"
                                            :objctsAll="filtred.mapObj" :city="null"></google-map>
                            </div>
                        </div>
                    </div>
                </div>
                <!--показать еще -->
                <!--<a href="!#" class="club-all row alignl-center border-b-mob" v-on:click="showMore">
                   <div class="add-more wrap row align-items-center justify-content-center" >
                       Загрузить еще
                       <span>
                        <svg version="1.1" id="more" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                            viewBox="0 0 54.9 55" style="enable-background:new 0 0 54.9 55;" xml:space="preserve">
                             <path class="st0" d="M32.1,50.8C20.8,53.2,9.5,47.1,5.2,36.3C1.1,26,4.7,14.3,13.8,8.1l-0.9,6c-0.1,0.8,0.4,1.6,1.3,1.7
                                           c0.1,0,0.1,0,0.2,0c0.7,0,1.4-0.5,1.5-1.3l1.3-8.7c0.1-0.4,0-0.8-0.3-1.1c-0.2-0.3-0.6-0.5-1-0.6L7.2,2.8C6.4,2.7,5.6,3.2,5.5,4.1
                                           C5.4,4.9,5.9,5.7,6.8,5.8L11,6.4c-9.3,7.2-12.9,19.8-8.5,31c4.1,10.4,14,16.9,24.8,16.9c1.8,0,3.7-0.2,5.5-0.6
                                           c0.8-0.2,1.3-1,1.2-1.8C33.7,51.2,32.9,50.7,32.1,50.8z M48.6,49l-4.5-0.7c9-7.3,12.4-19.6,8-30.6C47.3,5.6,34.6-1.3,21.8,1.4
                                           c-0.8,0.2-1.3,1-1.2,1.8s1,1.3,1.8,1.2C33.7,2,45,8.1,49.3,18.9c4,10,0.7,21.3-7.7,27.7l0.9-5.8c0.1-0.8-0.4-1.6-1.3-1.7
                                           c-0.8-0.1-1.6,0.4-1.7,1.3l-1.3,8.7c-0.1,0.4,0,0.8,0.3,1.1c0.2,0.3,0.6,0.5,1,0.6l8.7,1.3c0.1,0,0.1,0,0.2,0c0.7,0,1.4-0.5,1.5-1.3
                                           C50,49.9,49.4,49.1,48.6,49z"/>
                         </svg>
                   </span>
                   </div>
               </a>-->
           </div>
       </div>
   </template>
<script>
 import Vue from 'vue'
 import item_vue from '@/components/itemVue';
 import google_map from '@/components/mapView';

 Vue.component('item-vues', item_vue, {
   props: ['obj', 'seen']
 })
 Vue.component('google-map', google_map, {
   props: ['name', 'coord_lat', 'coord_lng','city', 'objctsAll']
 })

 var seen = window.$cookies.isKey('seenseen') ? JSON.parse(window.$cookies.get('seen')) : {0:[]};

 var city = window.$cookies.isKey('city') ? window.$cookies.get('city') : 'Київ';
 window.$cookies.set('city', city, Infinity, '/map');
 console.log(city);
 var country = 'Украина';

 export default {
   props: ['objcts', 'filtred', 'categories', 'location', 'baseHref'],
   data() {
     return {
       faworite: false,
       city: city,
       country: country,
       seen:seen,
       recomend: false,
       cities:null,
       mapObj: []
     }
   },
   metaInfo: {
     title: 'Default Title',
     titleTemplate: '%s | My Awesome Webapp',
     link: [
       {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/gijgo@1.9.6/css/gijgo.min.css'},
       {rel: 'stylesheet', href: '/assets/css/map/search.css'},
       {rel: 'stylesheet', href: '/assets/css/map/responsive.css'},
       // { rel: 'favicon', href: 'favicon.ico' }
     ],
     script: [
       // { src: 'https://45.j2landing.com/DrugStoreMap/js/main-page.js', type: 'text/javascript', body: true },
     ]
   },
   created: function () {
     if(window.location.search.search('state=') >= 0){
       var  h = window.location.search.split('&')
       for (var i = 0; i < h.length; i++){
         if(h[i].search('state=')>=0) {
           var p  = h[i].split('=')
           p =  JSON.parse(decodeURIComponent(p[1]));
           for (var t in p) {
             if(t != 'slug') {
               this.filtred[t] = p[t]
             }else {
               this.filtred[t]  =  this.$route.path.slice(1,this.$route.path.length)
             }
           }
           this.recomend =  this.filtred.recomend
         }
       }
     }
     if(this.filtred.city != '' ){
       this.city = this.filtred.city
       window.$cookies.set('city', this.city, Infinity, '/map');
     }else {
       this.filtred.city = this.city
     }
     this.createFilterObject()
   },
   mounted() {
   },
   computed: {
     objctsGet: function () {
       return this.objcts
     },
     filtredGet: function () {
       return this.filtred
     },
   },
   watch: {
     '$route'(to, from) {
       this.filtersubFilter();
     }
   },
   methods: {
     newCity: function () {
       window.$cookies.set('city', this.city, Infinity, '/map');
       this.filtred.city = this.city
       this.filtersubFilter()
     },
     /* НАзад */
     goBack: function () {
       window.history.go(-2)
     },
     /* избранные */
     faworiteShow: function () {
       this.faworite = this.faworite ? false : true
     },
     /* считаем показаные заведения */
     calcShow: function () {
       this.filtred.shown = this.filtred.shown + 1
       return true
     },
     /* показать больше */
     showMore: function (e) {
       e.preventDefault(e);
       this.filtred.limitList +=12;
       this.filtersubFilter();
     },
     /* создаем объект */
     createFilterObject: function () {
       this.filtersubFilter();
     },
     /* проверяем открывать ли категорию фильтров */
     filterOpen: function (a) {
       return this.filtred.category_id.indexOf(a) >= 0 ? false : true
     },
     /* проверка родительского пути у объекта */
     filterObjSlug: function (a) {
       var VRegExp = new RegExp(/\/+/g);
       return a == this.$route.path.replace(VRegExp, '') ? true : false
     },
     /* Убираем/добавляем свойства в фильтр категории родителя*/
     filterIdObj: function (a) {
       if (this.filtred.category_id.indexOf(a) >= 0) {
         this.filtred.category_id.splice(this.filtred.category_id.indexOf(a), 1);
       } else {
         this.filtred.category_id.push(a);
       }
       this.filtersubFilter();
     },
     /* Убираем/добавляем свойства в фильтр  субкатегории*/
     subFilterObj: function (a) {
       if (this.filtred.sub.indexOf(a) >= 0) {
         this.filtred.sub.splice(this.filtred.sub.indexOf(a), 1);
       } else {
         this.filtred.sub.push(a);
       }
       this.filtersubFilter();
     },
     /* Убираем/добавляем свойства в фильтр метки*/
     marksFilterObj: function (a) {
       if (this.filtred.mark.indexOf(a) >= 0) {
         this.filtred.mark.splice(this.filtred.mark.indexOf(a), 1);
       } else {
         this.filtred.mark.push(a);
       }
       this.filtersubFilter();
     },
     /* Убираем/добавляем свойства в фильтр район*/
     districtFilterObj: function (a) {
       if (this.filtred.district.indexOf(a) >= 0) {
         this.filtred.district.splice(this.filtred.district.indexOf(a), 1);
       } else {
         this.filtred.district.push(a);
       }
       this.filtersubFilter();
     },
     /* показывать или нет рекомендованые */
     recomendFilterObj: function () {
       this.recomend = this.recomend ? false : true;
       this.filtred.recomend = this.recomend
       this.filtred.shown = 0
       this.pushState()
     },
     /* записываем состояние */
     pushState: function (){
       var t =  this.filtred.slug + '?state=' + JSON.stringify(this.filtred);
       window.history.pushState('', '',  t )
     },
     /* переводим время в формат */
     getTimeStamp: function (a) {
       var d = new Date()
       var s = a.split(':');
       var newdate = d.setHours(s[0])
       newdate = d.setMinutes(s[1])
       return newdate;
     },
     /* проверяем заведения с ежедневным расписанием */
     checkTimeOpen: function (day) {
       var bj = this.objcts[this.obj].schedule[day]
       if( bj.start != null &&  bj.end != null ) {
         var shedule_from =  this.getTimeStamp(bj.start);
         var shedule_till =  this.getTimeStamp(bj.end);
         var time_from = this.getTimeStamp(this.filtred.time_from);
         var time_till = this.getTimeStamp(this.filtred.time_till);
         if (time_from > time_till) {
           // time_till = new Date(time_till).setDate((new Date(time_till)).getDate() + 1)
           if (shedule_from > shedule_till ) {
             shedule_till = new Date(shedule_till).setDate((new Date(shedule_till)).getDate() + 1);
             if (shedule_till > time_from ) {
               return true;
             }
           }else {
             time_till = new Date(time_till).setDate((new Date(time_till)).getDate() + 1)
             shedule_from = day == 7 ? this.objcts[this.obj].schedule[1].start : this.objcts[this.obj].schedule[day +1].start;
             if(shedule_from != null) {
               shedule_from =  this.getTimeStamp(shedule_from);
               shedule_from = new Date(shedule_from).setDate((new Date(shedule_from)).getDate() + 1);
               if (shedule_from < time_till ) {
                 return true;
               }
             }
           }
         }else{
           if (shedule_till > time_till ) {
             return true;
           }
         }
       }
       return false
     },
     /* получаем значения из таймпикера */
     timeChangeFrom: function (e) {
       e.preventDefault()
       this.filtred.time_till = $('#timepickerTo').val();
       this.filtred.time_from = $('#timepickerFr').val();
       this.filtersubFilter();
     },
     /* проверяем заведения с однотипным расписанием */
     checkTimeOpenEveryday: function (day) {
       var bj = this.objcts[this.obj].schedule[day]
       if(bj.start != null && bj.end != null) {
         var shedule_from = this.getTimeStamp(bj.start);
         var shedule_till = this.getTimeStamp(bj.end);
         var time_from = this.getTimeStamp(this.filtred.time_from);
         var time_till = this.getTimeStamp(this.filtred.time_till);
         if (shedule_till > time_from ) {
           return true;
         }
       }
       return false
     },
     filtersubFilter: function (k) {
       this.cities = this.location[country];
       this.filtred.mapObj = []
       console.log('this.filtred---', this.filtred);
       var day = new Date()
       day = day.getDay()
       this.filtred.shown = 0

       /* фильтрация заведений исходя из свойств  filter */
       for (this.obj in this.objcts) {
         this.objcts[this.obj].show_subs = false;
         this.objcts[this.obj].show_marks = false;
         this.objcts[this.obj].show_district = false;
         this.objcts[this.obj].show_time = false;
         if (!this.filtred.sub.length) {
           if (this.filtred.category_id.indexOf(this.objcts[this.obj].category_id) >= 0 || this.filterObjSlug(this.objcts[this.obj].category_slug)) {
             this.objcts[this.obj].show_subs = true
           }
         } else {
           for (this.subFilteregory  in this.objcts[this.obj].subcat) {
             if (this.filtred.sub.indexOf(this.objcts[this.obj].subcat[this.subFilteregory]['id']) >= 0) {
               this.objcts[this.obj].show_subs = true
             }
           }
         }
         if (!this.filtred.mark.length) {
           if (this.filtred.category_id.indexOf(this.objcts[this.obj].category_id) >= 0 || this.filterObjSlug(this.objcts[this.obj].category_slug)) {
             this.objcts[this.obj].show_marks = true
           }
         } else {
           for (this.subFilteregory  in this.objcts[this.obj].marks) {
             if (this.filtred.mark.indexOf(this.objcts[this.obj].marks[this.subFilteregory]['id']) >= 0) {
               this.objcts[this.obj].show_marks = true
             }
           }
         }
         if (!this.filtred.district.length) {
           if (this.filtred.category_id.indexOf(this.objcts[this.obj].category_id) >= 0 || this.filterObjSlug(this.objcts[this.obj].category_slug)) {
             this.objcts[this.obj].show_district = true
           }
         } else {
           if (this.filtred.district.indexOf(this.objcts[this.obj].district) >= 0) {
             this.objcts[this.obj].show_district = true
           }
         }
         if(!this.filtred.time_from.length) {
           this.objcts[this.obj].show_time = true
         }else {
           if(this.objcts[this.obj].schedule.length > 1) {
             var chrck = this.checkTimeOpen(day)
             if(chrck) {
               this.objcts[this.obj].show_time = true;
             }
           }else {
             var chrck = this.checkTimeOpenEveryday(1)
             if(chrck) {
               this.objcts[this.obj].show_time = true;
             }
           }
         }
       }
       this.pushState()
       for (var k in this.objcts) {
         if(this.objcts[k].show_district == true && this.objcts[k].show_subs == true &&
           this.objcts[k].show_marks == true && (this.objcts[k].isCounsel  == (this.recomend ? true : this.objcts[k].isCounsel))
           && (this.objcts[k].isFav  == (this.faworite ? true : this.objcts[k].isFav)) && this.city == this.objcts[k].city
           && this.objcts[k].show_time == true && this.filtred.limitList >= this.filtred.shown) {
           this.filtred.mapObj.push(this.objcts[k])
         }
       }
       console.log(this.filtred.mapObj, 'his.mapObj');
       console.log('this.filtred', this.filtred);
       console.log('this.objcts', this.objcts);
       this.$forceUpdate();
       setTimeout(function () {
         restartClub()
       }, 50)
     },
   },
 }
 ;
</script>
