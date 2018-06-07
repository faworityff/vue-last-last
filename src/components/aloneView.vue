<template>
    <div>
        <div class="club-content container-fluid m-top">
            <div class="club-top-nav club-all">
                <div class="wrap row align-items-center justify-content-between">
                    <a href="index.html" class="back-page">
                        Назад
                        <span class="forward">
                            <svg version="1.1" id="back" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                     x="0px" y="0px" viewBox="0 0 143.3 82.3"	 style="enable-background:new 0 0 143.3 82.3;" xml:space="preserve">

<path class="st0" d="M104.3,78.4l35.9-35.9c0,0,0,0,0,0c0.2-0.2,0.3-0.4,0.4-0.6c0.1-0.2,0.2-0.5,0.2-0.7c0,0,0,0,0,0
	c0-0.3-0.1-0.5-0.2-0.8c-0.1-0.2-0.2-0.5-0.4-0.6L104.3,3.8c-0.8-0.8-2-0.8-2.8,0c-0.4,0.4-0.6,0.9-0.6,1.4c0,0.5,0.2,1,0.6,1.4
	L134,39.1H5.6c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2H134l-32.5,32.5c-0.4,0.4-0.6,0.9-0.6,1.4c0,0.5,0.2,1,0.6,1.4
	C102.3,79.2,103.5,79.2,104.3,78.4"/>
</svg>
                         </span>
                    </a>
                    <a href="!#" class="add-location">
                        Добавить локацию
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
                        <span class="add-locate">
                    <svg version="1.1" id="add" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                         x="0px" y="0px" viewBox="0 0 528.9 530.6" style="enable-background:new 0 0 528.9 530.6;" xml:space="preserve">

<polygon class="st0" points="528.9,230.4 300.2,230.4 300.2,1.4 229.3,1.4 229.3,230.4 1,230.4 1,301.3 229.3,301.3 229.3,530.3
	300.2,530.3 300.2,301.3 528.9,301.3 "/>
</svg>
                </span>
                    </a>
                </div>
            </div>
            <div class="club-section">
                <div class="club-wrap row justify-content-between">
                    <div class="club-wrap-title mob-here-block row justify-content-center align-items-start">
                        <div class="title-navigation">
                            <a href="#review">Отзывы</a>
                            <a href="#map">На карте</a>
                            <a href="#profile">Обзор</a>
                            <a href="#description" class="active-title">Описание</a>
                        </div>
                        <div class="line-navigation">
                            <div class="block-navigation"></div>
                        </div>
                    </div>
                    <div class="club-wrap-blocks row">
                        <!--FILTERS-->
                        <div class="filter-column for-scroll col-md-5 col-lg-5 col-xl-3">
                            <div id="description" class="col filter-column-wrap">
                                <div class="row">
                                    <h1>{{obj.name}}</h1>
                                </div>
                                <div class="rating-location-wrap row align-items-center justify-content-between">
                                    <div class="rating-wrap col-6">
                                        <div class="row align-items-center justify-content-start">
                                            <div class="col-auto">
                                                <div class="rating-count row align-items-center justify-content-center">
                                                    {{obj.rating}}
                                                </div>
                                            </div>
                                            <div class="">Оценка<br/>посетителей</div>
                                        </div>
                                    </div>
                                    <div class="location-wrap col-6">
                                        <div class="row align-items-center justify-content-end">
                                            <div class="location">
                                                <span>{{obj.city}}</span>,<br/><span>{{obj.country}}</span></div>
                                            <div class="location-pin">
                                                <svg version="1.1" id="pin" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                                     x="0px" y="0px"	 viewBox="0 0 43.8 51.4" style="enable-background:new 0 0 43.8 51.4;" xml:space="preserve">
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
                                <div class="club-params row align-items-start justify-content-start">
                                    <div class="col-auto">
                                        <div class="icon-description row align-items-center justify-content-center">
                                            <svg version="1.1" id="time" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 x="0px" y="0px"	 viewBox="0 0 64.7 64.5" style="enable-background:new 0 0 64.7 64.5;" xml:space="preserve">

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
                                        </div>
                                    </div>
                                    <!--todo добавить в рассписание дни недели-->
                                    <div class="col club-work-time" v-if="obj.isEveryDay == true">
                                        <div>Ежедневно: {{obj.schedule[1].start}} - {{obj.schedule[1].end}}</div>
                                    </div>
                                    <div class="col club-work-time" v-else>
                                        <div v-for="sh in obj.schedule">Пн: {{sh.start }} - {{sh.end}}</div>
                                    </div>
                                </div>
                                <div class="club-params row align-items-start justify-content-start">
                                    <div class="col-auto">
                                        <div class="icon-description row align-items-center justify-content-center">
                                            <svg version="1.1" id="pin" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 x="0px" y="0px"	 viewBox="0 0 43.8 51.4" style="enable-background:new 0 0 43.8 51.4;" xml:space="preserve">
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
                                    <div class="col">
                                        {{obj.district}} {{obj.street}} {{obj.flat}}
                                    </div>
                                </div>
                                <div class="club-params row align-items-start justify-content-start">
                                    <div class="col-auto">
                                        <div class="icon-description row align-items-center justify-content-center">
                                            <svg version="1.1" id="viber" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 x="0px" y="0px"	 viewBox="0 0 97.5 97.5" style="enable-background:new 0 0 97.5 97.5;" xml:space="preserve">
<path d="M77.9,71.1l3.5,2l0.1-0.2C86.4,66.1,89,58,89,49.5c0.1-10.9-4-21.1-11.6-28.7c-7.6-7.7-17.7-12-28.5-12
	C26.6,8.8,8.4,27,8.4,49.3s18.1,40.4,40.4,40.4c3.9,0,7.6-0.5,11.1-1.6l0.2-0.1l-0.8-4L59,84.1c-3.4,1-6.9,1.6-10.4,1.6
	c-20,0-36.3-16.3-36.3-36.3s16.3-36.3,36.3-36.3s36.3,16.3,36.3,36.3c0,7.7-2.4,15.1-7,21.5L77.9,71.1z"/>
<path d="M83,14.6C73.9,5.5,61.7,0.4,48.9,0.4C44.4,0.4,40.1,1,36,2.2l-0.2,0.1L36.5,6l0.3-0.1c4-1.1,8.1-1.7,12.1-1.7
	c24.5,0,44.5,19.9,44.5,44.5s-20,44.4-44.5,44.4C24.3,93,4.4,73,4.4,48.6c0-9.3,2.8-18.1,8.2-25.7l0.2-0.3l-3.3-1.9l-0.1,0.2
	C3.6,29,0.6,38.6,0.6,48.7c0,26.5,21.6,48.1,48.1,48.1C75.3,96.8,97,75.2,97,48.7C97,35.8,92.1,23.7,83,14.6z"/>
<path d="M65.9,63.3l-8.3-7.8c0,0-4.3,4.8-6.2,4.1c0,0-6-3.6-10.6-13.3c-0.9-1.9,5.4-5.2,5.4-5.2l-5.8-9.8c0,0-9.2,4.6-8.6,10
	c0.6,5.3,4.9,19.9,21.4,28C58.9,72.1,65.9,63.3,65.9,63.3z"/>
</svg>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <!-- Для приложения Viber на ПК-->
                                        <a title="Viber" href="viber://chat?number=+380442327001">+38 (067)232-70-01</a>,
                                        <!--Для приложения Viber на мобильных
                                        <a title="Viber" href="viber://add?number=380442327001">+38 (067)232-70-01</a>,-->

                                        <!--Для приложения Viber на ПК-->
                                        <a title="Viber" href="viber://chat?number=+380634979606">+38 (063)497-96-06</a>
                                        <!-- Для приложения Viber на мобильных
                                         <a title="Viber" href="viber://add?number=380634979606">+38 (063)497-96-06</a>-->
                                    </div>
                                </div>
                                <div class="club-params row align-items-start justify-content-start">
                                    <div class="col-auto">
                                        <div class="icon-description row align-items-center justify-content-center">
                                            <svg version="1.1" id="site" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 x="0px" y="0px"
	 viewBox="0 0 300 302.1" style="enable-background:new 0 0 300 302.1;" xml:space="preserve">
<g>
	<g>
		<g>
			<path d="M202.1,96.3c-5.6-5.4-12-10-19-13.4c3.4,5.2,6.4,11.1,8.9,17.8C195.5,99.3,198.9,97.9,202.1,96.3z"/>
			<path d="M112.6,144.8h32.2v-27.3c-9.6-0.4-18.9-1.8-27.6-4C114.6,123,113,133.6,112.6,144.8z"/>
			<path d="M116.6,184c8.9-2.3,18.4-3.8,28.2-4.2v-24.6h-32.2C113,165.4,114.4,175.1,116.6,184z"/>
			<path d="M120.4,103.7c7.6,1.9,15.9,3.1,24.4,3.5V75.3c-1.5,0.1-3,0.3-4.5,0.4C132.4,80.6,125.4,90.6,120.4,103.7z"/>
			<path d="M96.9,202.8c6.7,6.7,14.6,12.2,23.5,16c-4.3-6.1-7.9-13.5-10.8-21.8C105,198.6,100.8,200.6,96.9,202.8z"/>
			<path d="M120.3,81.3c-8,3.5-15.3,8.3-21.6,14.2c3.6,1.9,7.5,3.6,11.7,5.1C113.1,93.3,116.5,86.8,120.3,81.3z"/>
			<path d="M107.2,110.5c-5.6-2-10.9-4.4-15.7-7.2c-9.2,11.5-15.1,25.9-16.2,41.5h26.9C102.6,132.5,104.3,120.9,107.2,110.5z"/>
			<path d="M102.2,155.2H75.3c1,14.8,6.3,28.4,14.7,39.6c5-3,10.6-5.6,16.5-7.8C104.1,177.3,102.6,166.6,102.2,155.2z"/>
			<path d="M140.5,224.3c1.4,0.2,2.8,0.3,4.3,0.4v-34.6c-8.8,0.4-17.4,1.7-25.3,3.7C124.6,208.2,132,219.2,140.5,224.3z"/>
			<path d="M195.8,187c5.3,1.9,10.3,4.2,14.9,6.8c8-11,13-24.3,14-38.6h-24.6C199.7,166.6,198.2,177.3,195.8,187z"/>
			<path d="M183,217.2c7.8-3.9,14.9-9,20.9-15.2c-3.4-1.8-7.2-3.5-11.1-5C190.1,204.6,186.8,211.4,183,217.2z"/>
			<path d="M150,0C67.2,0,0,67.2,0,150s67.2,150,150,150s150-67.2,150-150S232.8,0,150,0z M150,240.5c-49.9,0-90.5-40.6-90.5-90.5
				s40.6-90.5,90.5-90.5s90.5,40.6,90.5,90.5S199.9,240.5,150,240.5z"/>
			<path d="M162.7,76.2c-2.5-0.4-5-0.7-7.5-0.9v31.9c9.3-0.3,18.4-1.5,26.7-3.6C177.1,91,170.4,81.2,162.7,76.2z"/>
			<path d="M195.1,110.5c2.9,10.4,4.6,22,5,34.3h24.6c-1-15.2-6.7-29.2-15.5-40.6C204.9,106.6,200.1,108.7,195.1,110.5z"/>
			<path d="M155.2,224.7c2.5-0.2,4.9-0.5,7.4-0.9c8.2-5.3,15.3-16,20.2-29.9c-8.6-2.2-18-3.5-27.6-3.8V224.7z"/>
			<path d="M185.1,113.5c-9.4,2.4-19.5,3.8-29.9,4.1v27.2h34.5C189.3,133.6,187.7,123,185.1,113.5z"/>
			<path d="M189.7,155.2h-34.5v24.5c10.7,0.3,21.1,1.7,30.6,4.2C188,175.1,189.4,165.4,189.7,155.2z"/>
		</g>
	</g>
</g>
</svg>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <a :href="obj.web">{{obj.web}}</a>
                                    </div>
                                </div>
                                <div class="club-params row align-items-start justify-content-start">
                                    <div class="col-auto">
                                        <div class="icon-description row align-items-center justify-content-center">
                                            <svg version="1.1" id="mail" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 x="0px" y="0px"	 viewBox="0 0 63.1 63.7" style="enable-background:new 0 0 63.1 63.7;" xml:space="preserve">

<path class="st0" d="M31.7,1.6C14.9,1.6,1.2,15.3,1.2,32.1s13.7,30.5,30.5,30.5c6.3,0,12.3-2.1,17.2-5.4c0.3-0.1,0.6-0.3,0.9-0.6
	c0,0,0,0,0,0l0,0c0.6-0.5,0.9-1.3,0.9-2.1c0-1.6-1.3-3-3-3c-0.6,0-1.1,0.2-1.6,0.5l0,0c-4.1,3-9,4.7-14.5,4.7
	c-13.6,0-24.6-11-24.6-24.6s11-24.6,24.6-24.6s24.6,11,24.6,24.6c0,2.1-0.3,4.1-0.7,6c-0.1,0.4-0.2,0.7-0.3,1.1
	c-0.7,1.9-2,2.9-3.8,2.9c-2.2,0-4-1.8-4-4c0,0,0,0,0-0.1h0v-6V21.1h0c-0.1-1.5-1.3-2.7-2.8-2.7c-1.2,0-2.2,0.8-2.6,1.8
	c-2.7-2.4-6.3-3.8-10.2-3.8c-8.7,0-15.7,7-15.7,15.7s7,15.7,15.7,15.7c4.5,0,8.5-1.9,11.4-4.9c1.7,2.9,4.8,4.9,8.4,4.9
	c3.4,0,6.4-1.7,8.1-4.3c2-2.9,2.6-7.4,2.6-11.4C62.3,15.3,48.6,1.6,31.7,1.6z M31.7,42.2c-5.6,0-10-4.5-10-10c0-5.6,4.5-10,10-10
	c5.6,0,10,4.5,10,10C41.8,37.7,37.3,42.2,31.7,42.2z"/>
</svg>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <a :href="'mailto:' + obj.email">{{obj.email}}</a>
                                    </div>
                                </div>
                                <div class="club-params club-params-social row align-items-start justify-content-between">
                                    <div class="col-2">
                                        <div class="club-more">
                                            <div></div>
                                        </div>
                                    </div>
                                    <div class="col-10 social">
                                        соцсети:
                                        <span v-for="(key, value) in obj.socials">
                                            <a :href="key">{{value}}</a>
                                            <span class="social-br">/</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div id="profile" class="filter-column-wrap">
                                <div class="one-club active">
                                    <div class="club-block">
                                        <div class="review-img">
                                            <div class="review-img-inner">
                                                <div class="club-data-img"
                                                     data-img="https://45.j2landing.com/DrugStoreMap/img/6.jpg"
                                                     style="background-image: url('img/6.jpg'), linear-gradient(to bottom, rgba(255,0,233,0.5) 0%,rgba(255,0,233,0.5) 100%);"></div>
                                            </div>
                                            <div class="review-rev row align-items-center justify-content-center">
                                                <div class="">
                                                    <div class="review-rev-count">{{obj.reviews.length}}</div>
                                                    <div>Отзывов</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="rating rating-percent">
                                    <div class="row">
                                        <div class="col-4">Отлично:</div>
                                        <div class="col-6">
                                            <span class="round active"></span>
                                            <span class="round active"></span>
                                            <span class="round active"></span>
                                            <span class="round active"></span>
                                            <span class="round active"></span>
                                        </div>
                                        <div class="col-2"><span v-if="obj.precentage[5]">{{obj.precentage[5]}}</span> <span v-else>0</span></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4">Хорошо:</div>
                                        <div class="col-6">
                                            <span class="round active"></span>
                                            <span class="round active"></span>
                                            <span class="round active"></span>
                                            <span class="round active"></span>
                                        </div>
                                        <div class="col-2"><span v-if="obj.precentage[4] ">{{obj.precentage[4]}}</span> <span v-else>0</span></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4">Неплохо:</div>
                                        <div class="col-6">
                                            <span class="round active"></span>
                                            <span class="round active"></span>
                                            <span class="round active"></span>
                                        </div>
                                        <div class="col-2"><span v-if="obj.precentage[3] ">{{obj.precentage[3]}}</span> <span v-else>0</span></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4">Плохо:</div>
                                        <div class="col-6">
                                            <span class="round active"></span>
                                            <span class="round active"></span>
                                        </div>
                                        <div class="col-2" ><span v-if="obj.precentage[2] ">{{obj.precentage[2]}}</span> <span v-else>0</span></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4">Ужасно:</div>
                                        <div class="col-6">
                                            <span class="round active"></span>
                                        </div>
                                        <div class="col-2"><span v-if="obj.precentage[1] ">{{obj.precentage[1]}}</span> <span v-else>0</span></div>
                                    </div>
                                </div>
                                <div class="marks col">
                                    <div class="club-params row align-items-center justify-content-start" v-for="mark in obj.marks">
                                        <div class="col-auto">
                                            <div class="icon-description row align-items-center justify-content-center">
                                                <img :src="mark.icon" alt="">
                                            </div>
                                        </div>
                                        <div class="col">
                                            {{mark.name}}
                                        </div>
                                    </div>

                                    <div class="club-params row align-items-center justify-content-start" v-if="obj.cuisine != null">
                                        <div class="col-auto">
                                            <div class="icon-description row align-items-center justify-content-center">
                                                <svg version="1.1" id="food" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                                     x="0px" y="0px" viewBox="0 0 100 77.3" style="enable-background:new 0 0 100 77.3;" xml:space="preserve">
<g>
	<path d="M30.1,19.4c0,1.8-0.7,3.5-2,4.7c-0.6,0.6-0.6,1.6,0,2.2c0.3,0.3,0.7,0.5,1.1,0.5s0.8-0.2,1.1-0.5c1.9-1.9,2.9-4.3,2.9-7
		c0-2.6-1-5.1-2.9-7c-1.3-1.3-2-2.9-2-4.7c0-1.8,0.7-3.5,2-4.7c0.6-0.6,0.6-1.6,0-2.2c-0.6-0.6-1.6-0.6-2.2,0
		c-1.9,1.9-2.9,4.3-2.9,7c0,2.6,1,5.1,2.9,7C29.4,15.9,30.1,17.6,30.1,19.4z"/>
	<path d="M50.6,19.4c0,1.8-0.7,3.5-2,4.7c-0.6,0.6-0.6,1.6,0,2.2c0.3,0.3,0.7,0.5,1.1,0.5s0.8-0.2,1.1-0.5c1.9-1.9,2.9-4.3,2.9-7
		c0-2.6-1-5.1-2.9-7c-1.3-1.3-2-2.9-2-4.7c0-1.8,0.7-3.5,2-4.7c0.6-0.6,0.6-1.6,0-2.2c-0.6-0.6-1.6-0.6-2.2,0
		c-1.9,1.9-2.9,4.3-2.9,7c0,2.6,1,5.1,2.9,7C49.9,15.9,50.6,17.6,50.6,19.4z"/>
	<path d="M70.5,19.4c0,1.8-0.7,3.5-2,4.7c-0.6,0.6-0.6,1.6,0,2.2c0.3,0.3,0.7,0.5,1.1,0.5s0.8-0.2,1.1-0.5c1.9-1.9,2.9-4.3,2.9-7
		c0-2.6-1-5.1-2.9-7c-1.3-1.3-2-2.9-2-4.7c0-1.8,0.7-3.5,2-4.7c0.6-0.6,0.6-1.6,0-2.2s-1.6-0.6-2.2,0c-1.9,1.9-2.9,4.3-2.9,7
		c0,2.6,1,5.1,2.9,7C69.8,15.9,70.5,17.6,70.5,19.4z"/>
	<path d="M49.3,33.4c-11.4,0-21.4,5.7-27.5,14.3h55C70.8,39.1,60.7,33.4,49.3,33.4z"/>
	<path d="M80.7,47.8h14c-4-5.6-10.6-9.2-18-9.2c-1.3,0-2.5,0.1-3.7,0.3C76,41.4,78.6,44.4,80.7,47.8z"/>
	<path d="M27.7,37.3c-1.1-0.2-2.2-0.3-3.3-0.3c-8.1,0-15.2,4.3-19.1,10.7H18C20.5,43.7,23.9,40.1,27.7,37.3z"/>
	<path d="M99.7,50.6c-0.3-0.4-0.8-0.6-1.3-0.6H1.6c-0.5,0-1,0.2-1.3,0.6C0,51-0.1,51.5,0,52c3,11.8,13.1,20.4,25.3,21.5
		c3,0.2,5.9,1.4,8.1,3.4c0.3,0.3,0.7,0.4,1.1,0.4h30.9c0.4,0,0.8-0.1,1.1-0.4c2.2-2,5.1-3.2,8.2-3.4C86.8,72.4,97,63.8,100,52
		C100.1,51.5,100,51,99.7,50.6z M74.5,70.3c-3.5,0.2-6.9,1.5-9.6,3.8H35.1c-2.7-2.3-6.1-3.6-9.5-3.8C15.5,69.4,7,62.7,3.7,53.2h92.6
		C93,62.7,84.5,69.4,74.5,70.3z"/>
</g>
</svg>
                                            </div>
                                        </div>
                                        <div class="col">
                                            {{obj.cuisine}}
                                        </div>
                                    </div>
                                    <div class="club-params row align-items-center justify-content-start" v-if="obj.avg_cost != null">
                                        <div class="col-auto">
                                            <div class="icon-description row align-items-center justify-content-center">
                                                <svg version="1.1" id="dolor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                                     x="0px" y="0px"	 viewBox="0 0 48.6 48.5" style="enable-background:new 0 0 48.6 48.5;" xml:space="preserve">
<g>
	<g>
		<path d="M24.3,48.2c-13.2,0-24-10.8-24-24s10.8-24,24-24s24,10.8,24,24S37.5,48.2,24.3,48.2z M24.3,2.2c-12.1,0-22,9.9-22,22
			s9.9,22,22,22c12.1,0,22-9.9,22-22S36.4,2.2,24.3,2.2z"/>
	</g>
	<g>
		<path d="M24.3,44.2c-11,0-20-9-20-20s9-20,20-20c11,0,20,9,20,20S35.3,44.2,24.3,44.2z M24.3,6.2c-9.9,0-18,8.1-18,18
			s8.1,18,18,18c9.9,0,18-8.1,18-18S34.2,6.2,24.3,6.2z"/>
	</g>
	<g>
		<g>
			<path d="M24.3,25.2c-3.9,0-7-3.1-7-7s3.1-7,7-7c3.9,0,7,3.1,7,7h-2c0-2.8-2.2-5-5-5c-2.8,0-5,2.2-5,5s2.2,5,5,5V25.2z"/>
		</g>
		<g>
			<path d="M24.3,37.2c-3.9,0-7-3.1-7-7h2c0,2.8,2.2,5,5,5c2.8,0,5-2.2,5-5s-2.2-5-5-5v-2c3.9,0,7,3.1,7,7S28.2,37.2,24.3,37.2z"/>
		</g>
		<g>
			<rect x="23.3" y="9.2" width="2" height="30"/>
		</g>
	</g>
</g>
</svg>
                                            </div>
                                        </div>
                                        <div class="col">
                                            Средний чек: {{obj.avg_cost}}
                                        </div>
                                    </div>
                                </div>
                                <div class="rating rating-rew">
                                    <div class="row" v-for="avgs in obj.avgCtiterias">
                                        <div class="col-5">{{avgs.name}}:</div>
                                        <div class="col-7">
                                            <span class="round" v-for="n in 5"
                                                  v-bind:class="{active: avgPoint(avgs.avg, n)}"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="map">
                                <div id="map"></div>
                                <div class="show-full">
                                    <a href="map.html" class="btn">Показать карту
                                        <span class="forward">
                                            <svg version="1.1" id="MAP-arr"xmlns="http://www.w3.org/2000/svg"
                                     xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 143.3 82.3"	 style="enable-background:new 0 0 143.3 82.3;" xml:space="preserve">

<path class="st0" d="M104.3,78.4l35.9-35.9c0,0,0,0,0,0c0.2-0.2,0.3-0.4,0.4-0.6c0.1-0.2,0.2-0.5,0.2-0.7c0,0,0,0,0,0
	c0-0.3-0.1-0.5-0.2-0.8c-0.1-0.2-0.2-0.5-0.4-0.6L104.3,3.8c-0.8-0.8-2-0.8-2.8,0c-0.4,0.4-0.6,0.9-0.6,1.4c0,0.5,0.2,1,0.6,1.4
	L134,39.1H5.6c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2H134l-32.5,32.5c-0.4,0.4-0.6,0.9-0.6,1.4c0,0.5,0.2,1,0.6,1.4
	C102.3,79.2,103.5,79.2,104.3,78.4"/>
</svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <!--END FILTERS-->
                        <div class="filter-club for-scroll col-md-7 col-lg-7 col-xl-9">
                            <div class="row">
                                <div class="description-club">
                                    <div class="slider-club-wrap">
                                        <div class="slider-club slider">
                                            <div class="" v-for="img in obj.gallery" v-if="img.status == 'active'">
                                                <img :src="img.path" :title="img.title" :alt="img.alt">
                                            </div>
                                        </div>
                                        <div class="club-name-slider">Forsage</div>
                                        <div class="recommended" v-on:click="addToFavorite(obj)" v-bind:class="{active: obj.isFav}">
                                            <svg version="1.1" id="reccom" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 x="0px" y="0px"	 viewBox="0 0 40.9 39" style="enable-background:new 0 0 40.9 39;" xml:space="preserve">
<g>
	<path d="M14.8,23.4l-3.6,11l9.4-6.8l9.4,6.8l-3.6-11l9.4-6.8H24.2L20.6,5.5L17,16.6H5.4L14.8,23.4 M20.6,0.1l4.8,14.8h15.5L28.3,24
		l4.8,14.8l-12.6-9.1L7.9,38.8L12.7,24L0.1,14.9h15.5L20.6,0.1"/>
	<polyline points="18.6,18.5 20.6,12.3 22.6,18.5 29.2,18.5 23.8,22.4 25.9,28.7 20.6,24.8 15.3,28.7 17.3,22.4 12,18.5 18.6,18.5
		"/>
</g>
</svg>
                                        </div>
                                        <div class="gallery open-in-popup" data-number="2">
                                            <div class="underline">Фотогалерея</div>
                                            <span class="forward">
                                                <svg version="1.1" id="back" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                                     x="0px" y="0px" viewBox="0 0 143.3 82.3" style="enable-background:new 0 0 143.3 82.3;" xml:space="preserve">

<path class="st0" d="M104.3,78.4l35.9-35.9c0,0,0,0,0,0c0.2-0.2,0.3-0.4,0.4-0.6c0.1-0.2,0.2-0.5,0.2-0.7c0,0,0,0,0,0
	c0-0.3-0.1-0.5-0.2-0.8c-0.1-0.2-0.2-0.5-0.4-0.6L104.3,3.8c-0.8-0.8-2-0.8-2.8,0c-0.4,0.4-0.6,0.9-0.6,1.4c0,0.5,0.2,1,0.6,1.4
	L134,39.1H5.6c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2H134l-32.5,32.5c-0.4,0.4-0.6,0.9-0.6,1.4c0,0.5,0.2,1,0.6,1.4
	C102.3,79.2,103.5,79.2,104.3,78.4"></path>
</svg></span>
                                        </div>
                                    </div>
                                    <div class="content-club-wrap">
                                        <div class="content-club" v-html="obj.content">
                                        </div>
                                        <div class="social">
                                            поделиться:
                                            <a href="#!">facebook</a>
                                            /
                                            <a href="#!">twitter</a>
                                        </div>
                                    </div>
                                </div>
                                <!--ОТЗЫВЫ-->
                                <review-vues :obj="obj"></review-vues>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="club-bottom-nav club-all club-wrap row justify-content-between">
                <div class="club-wrap-title"></div>
                <div class="club-wrap-blocks row">
                    <div class="filter-column col-md-4 col-lg-3"></div>
                    <div class="filter-club col-md-8 col-lg-9">
                        <div class="content-club-wrap row justify-content-between">
                            <a class="back-page">
                                Все отзывы
                                <span class="rew">
                                        <svg version="1.1" id="rew" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                             x="0px" y="0px"	 viewBox="0 0 92.8 77.6" style="enable-background:new 0 0 92.8 77.6;" xml:space="preserve">

                                            <path class="st0" d="M71.3,24.1c-2.1-12.4-16.9-22-34.7-22c-19.3,0-35,11.2-35,25c0,6.5,3.5,12.7,9.7,17.3l-5.2,9.8
                                                c-0.5,1-0.3,2.2,0.4,2.9c0.5,0.5,1.1,0.7,1.8,0.7c0.4,0,0.8-0.1,1.2-0.3l14-7.3c0.4,0.1,0.9,0.2,1.3,0.4c3.2,10.8,16.8,19,33.1,19
                                                c4.6,0,9.1-0.6,13.3-1.9l14.4,7.6c0.2,0.1,0.4,0.1,0.6,0.1c0.3,0,0.6-0.1,0.9-0.4c0.4-0.4,0.5-1,0.2-1.5l-5.7-10.8
                                                c6.4-4.4,10-10.5,10-16.9C91.6,36.2,83.2,27.8,71.3,24.1z M23.9,45.3c-0.6-0.2-1.3-0.1-1.9,0.2l-7.8,4.1l2.5-4.7
                                                c0.6-1.1,0.2-2.6-0.9-3.3c-6-3.8-9.2-8.9-9.2-14.4c0-11,13.5-20,30-20s30,9,30,20s-13.5,20-30,20C32.1,47.1,27.9,46.5,23.9,45.3z
                                                 M79.2,61.3c-0.5,0.4-0.7,1.1-0.4,1.6l4.3,8.3l-11.3-5.9c-0.2-0.1-0.4-0.1-0.6-0.1c-0.1,0-0.3,0-0.4,0.1c-4.1,1.3-8.5,1.9-13,1.9
                                                c-14.5,0-26.7-6.7-30.2-15.8c2.9,0.5,5.9,0.8,9,0.8c19.3,0,35-11.2,35-25c0-0.1,0-0.2,0-0.3c10.4,3.5,17.5,10.7,17.5,19.1
                                                C89.1,51.8,85.6,57.3,79.2,61.3z"/>
                                            <circle cx="27" cy="26.8" r="5.1"/>
                                            <circle cx="46.4" cy="26.8" r="5.1"/>
                                        </svg>
                                </span>
                            </a>
                            <a class="add-location open-in-popup" data-number="3">
                                Добавить отзыв
                                <span class="add-locate">
                                        <svg version="1.1" id="add" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                             x="0px" y="0px" viewBox="0 0 528.9 530.6" style="enable-background:new 0 0 528.9 530.6;" xml:space="preserve">

<polygon class="st0" points="528.9,230.4 300.2,230.4 300.2,1.4 229.3,1.4 229.3,230.4 1,230.4 1,301.3 229.3,301.3 229.3,530.3
	300.2,530.3 300.2,301.3 528.9,301.3 "/>
</svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--POPUP REVIEW-->

        <div class="popup" data-number="3"  v-html="popRewiev"></div>

        <!--end POPUP REVIEW -->
    </div>
</template>

<script>

  import Vue from 'vue'
  import review_vue from '@/components/reviewView';
  import axios from 'axios';
  Vue.component('review-vues', review_vue, {
    props: ['obj']
  })
  export default {
    props: ['objcts','seen'],
    data() {
      return {
        obj: {},
        popRewiev: 'dsadsads'
      }
    },
    metaInfo: {
      title: 'Default Title',
      titleTemplate: '%s | My Awesome Webapp',
      link: [
        {rel: 'stylesheet', href: 'https://45.j2landing.com/DrugStoreMap/css/club.css'},
        // { rel: 'favicon', href: 'favicon.ico' }
      ],
      script: [
        {src: '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', type: 'text/javascript', body: true},
        {src: 'https://45.j2landing.com/DrugStoreMap/js/sliders.js', type: 'text/javascript', body: true},
        {src: 'https://45.j2landing.com/DrugStoreMap/js/jquery.scrollTo-min.js', type: 'text/javascript', body: true},
      ]
    },
    created: function () {
      var objName = this.$route.params.alias
      for (this.objs in this.objcts) {
        if (this.objcts[this.objs].slug == objName) {
          this.obj = this.objcts[this.objs]
          console.log(this.objcts[this.objs]);
        }
      }

    },
    mounted:function () {
      axios.get('/comment-create/' + this.$route.params.alias)
        .then(resp => {
          console.log(4);
          this.popRewiev  = resp.data ;
        })

      setTimeout(function () {
        restartClub();
        initSliders()
      },500)
    },
    methods: {
      popReviews: function (ids) {

      },
      avgPoint: function (a, b) {
        return +a >= b ? true : false
      },
      addToFavorite:function (obj) {
        //todo убрать путь
        console.log(obj);

        var uri = obj.isFav ?  '/favorites/unset/'+obj.id :  '/favorites/set/'+obj.id;
        axios.post(uri)
          .then(resp => {
            obj.isFav  = resp.data ;
          })
      }
    }
  }

</script>