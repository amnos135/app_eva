<template>
  <Header />
  <!-- <header>
  <router-link to="/main">
    <img src="../assets/com_logo.png" href="../views/2_main.vue" alt="로고">
  </router-link>
   <div class="hidden hamburger">
        <div class="line n1"></div>
        <div class="line n2"></div>
        <div class="line n3"></div>
    </div>
  </header> -->
  <main>
    <div id="swiper01">
      <swiper
        :slides-per-view="4"
        :space-between="0"
        :pagination="{ clickable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide>
          <li><a style="color: white" href="#none">#전체</a></li>
        </swiper-slide>
        <swiper-slide>
          <li><a style="color: white" href="#none">#디저트</a></li>
        </swiper-slide>
        <swiper-slide>
          <li><a style="color: white" href="#none">#우유</a></li>
        </swiper-slide>
        <swiper-slide>
          <li><a style="color: white" href="#none">#빙수</a></li>
        </swiper-slide>
        <swiper-slide>
          <li><a style="color: white" href="#none">#번</a></li>
        </swiper-slide>
        <swiper-slide>
          <li><a style="color: white" href="#none">#스무디</a></li>
        </swiper-slide>
        <swiper-slide>
          <li><a style="color: white" href="#none">#프라페</a></li>
        </swiper-slide>
      </swiper>
    </div>

    <article id="sub1">
      <div class="sub_img">
        <img src="./image/preview.png" alt="사진" />
      </div>
      <div class="sub_top">
        <ul>
          <li>#디저트</li>
          <li>#우유</li>
        </ul>
        <button type="button">
          <img src="./image/button.png" alt="삼점" />
        </button>
      </div>
      <div class="sub_write">
        <a href="#none">
          <div class="write">
            <img src="./image/place.png" alt="위치" />
            <span>
              <h1>커피전문점</h1>
              <p>경기 안양시 만안구 안양로 303 안양메쎄타워 2층</p>
            </span>
          </div>
        </a>
        <p>
          라떼와 스콘이 너무 맛있는 집! <br />
          분위기도 이뻐요 ㅠㅠ<br />
          안양에서 분위기 즐기고 싶다면 추천합니다!!
        </p>
      </div>
      <div class="sub_bottom">
        <h1>단골 · 30분 전.</h1>
        <div>
          <a href="#none">
            <img src="./image/message.png" alt="댓글" />
            <p>2 개</p>
          </a>
        </div>
      </div>
    </article>
    <!-- 본문 -->

    <article id="sub1">
      <div class="sub_top">
        <ul>
          <li>#디저트</li>
          <li>#우유</li>
        </ul>
        <button type="button">
          <img src="./image/button.png" alt="삼점" />
        </button>
      </div>
      <div class="sub_write">
        <p class="lo">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque nullam
          neque amet, commodo iaculis laoreet ipsum elit. Fermentum, morbi
          congue consectetur erat. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Neque nullam neque amet, commodo iaculis laoreet
          ipsum elit. Fermentum, morbi congue consectetur erat. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Neque nullam neque amet,
          commodo iaculis laoreet ipsum elit. Fermentum, morbi congue
          consectetur erat.
        </p>
      </div>
      <div class="sub_bottom">
        <h1>단골 · 1시간 전.</h1>
        <div>
          <a href="#none">
            <img src="./image/message.png" alt="댓글" />
            <p>2 개</p>
          </a>
        </div>
      </div>
    </article>
    <!-- 본문 -->
  </main>
  <Footer />
</template>

<script>
import Header from "../layouts/ham.vue";
import Footer from "../layouts/Footer.vue";

// import Swiper core and required components
import SwiperCore, { Pagination, A11y } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";

// install Swiper components
SwiperCore.use([Pagination, A11y]);

export default {
  components: { Header, Footer, Swiper, SwiperSlide },
  methods: {
    onSwiper(swiper) {
      // console.log(swiper)
    },
    onSlideChange() {
      // console.log('slide change')
    },
  },
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Gowun+Dodum&family=Noto+Sans+KR:wght@300&display=swap");

@font-face {
  font-family: "GangwonEdu_OTFLightA";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEdu_OTFLightA.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

#swiper01 {
  width: 100%;
  height: 60px;
  color: white;
  padding-top: 10px;
  padding-left: 30px;
}

h1,
p {
  font-family: "GowunDodum-Regular";
}

dl,
ol,
ul {
  padding-left: 0;
  margin: 0;
}

ul,
li {
  list-style: none;
}

a {
  text-decoration: none;
}

main {
  padding-top: 60px;
  width: 100%;
  height: 1300px;
  background-color: #ffffff;
  color: black;
  font-family: "GowunDodum-Regular";
  text-align: left;
  /*   margin: 0 auto;
 */
}
.button {
  position: fixed;
  width: 80px;
  height: 80px;
  top: 85%;
  left: 80%;
}

#bar {
  width: 90%;
  height: 59px;
  margin: 0 auto;
  border-bottom: 1px solid #cccccc;
}

#bar > img {
  position: relative;
  width: auto;
  height: 40px;
  top: 10px;
  left: 10px;
}

#bar span {
  position: relative;
  float: right;
  top: 20px;
  left: -10px;
}

#article1 {
  width: auto;
  height: 70px;
  font-family: "GowunDodum-Regular";
}

#top {
  width: 90%;
  height: 55px;
  margin-left: 5%;
  padding-top: 15px;
  overflow: hidden;
}

#top ul {
  width: 1000px;
  height: auto;
}

li {
  display: flex;
  width: auto;
  height: 40px;
  background: #065f44;
  float: left;
  /*   margin-right: 15px;
 */
  border-radius: 25px;
  padding: 0 20%;
  justify-content: center;
  align-items: center;
  font-size: 1.25em;
  color: #ffffff;
  font-family: "Gowun Dodum", sans-serif;
}

#top ul li a {
  color: #ffffff;
  font-family: "Gowun Dodum", sans-serif;
}

#sub1 {
  width: 90%;
  height: auto;
  margin: 0 auto;
  border-bottom: 1px solid #cccccc;
}

/* #sub1 .sub_img {
  width: 100%;
  height: 350px;
  background: #cccccc;
  box-shadow: 0 0 5px #cccccc;
  overflow: hidden;
} */

#sub1 .sub_img img {
  width: 100%;
 }

.sub_top {
  width: 100%;
  height: 40px;
  margin-top: 30px;
}

.sub_top ul {
  width: auto;
  height: 30px;
}
.sub_top ul li {
  font-size: 1.1em;
  padding: 0 2%;
  margin-right: 15px;
}

button {
  position: relative;
  width: 50px;
  height: 30px;
  float: right;
  top: -25px;
  align-items: center;
  background: #ffffff;
}

button img {
  width: auto;
  height: 30px;
}

.sub_write {
  width: 100%;
  height: 300px;
  margin-top: 20px;
}

.sub_write .write {
  width: 99.8%;
  height: 98px;
  border-radius: 15px;
  border: 1px solid #cccccc;
}

.sub_write .write img {
  width: 98px;
  height: 97px;
  float: left;
}

.sub_write .write span {
  display: block;
  width: 50%;
  height: 50px;
  margin-top: 20px;
  margin-left: 15%;
  color: #000000;
  font-family: "GangwonEdu_OTFLightA", sans-serif;
  float: left;
}

.sub_write .write span p {
  font-size: 0.9em;
  margin-top: -10px;
}

.write > span > p {
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  box-orient: vertical;

  height: 60px;
  line-height: 30px;
  font-size: 1.3em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.sub_write .write span h1 {
  margin-left: 20%;
}

.sub_write > p {
  width: 100%;
  height: 200px;
  margin-top: 20px;
  font-family: "GangwonEdu_OTFLightA", sans-serif;
  overflow: hidden;
  font-size: 3vh;
}
div.sub_write > p.lo {
  height: 300px;
}
.sub_bottom {
  width: 100%;
  height: 55px;
  line-height: 55px;
}

.sub_bottom h1 {
  float: left;
  color: #4d4d4d;
  font-family: "Gowun Dodum", sans-serif;
  font-size: 3vh;
}

.sub_bottom div {
  width: auto;
  height: auto;
  float: right;
}

.sub_bottom img {
  width: 30px;
  height: 30px;
  margin-top: 5px;
  margin-right: 10px;
  float: left;
}

.sub_bottom p {
  margin-top: -5px;
  float: left;
  color: #4d4d4d;
}

/* footer {
  width: auto;
  height: 150px;
}
 */
.bm-burger-button {
  position: fixed;
  width: 36px;
  height: 30px;
  left: 36px;
  top: 36px;
  cursor: pointer;
}

.bm-burger-bars {
  background-color: #373a47;
}

.line-style {
  position: absolute;
  height: 20%;
  left: 0;
  right: 0;
}

.cross-style {
  position: absolute;
  top: 12px;
  right: 2px;
  cursor: pointer;
}

.bm-cross {
  background: #bdc3c7;
}

.bm-cross-button {
  height: 24px;
  width: 24px;
}

.bm-menu {
  height: 100%;
  /* 100% Full-height */
  width: 0;
  /* 0 width - change this with JavaScript */
  position: fixed;
  /* Stay in place */
  z-index: 1000;
  /* Stay on top */
  top: 0;
  left: 0;
  background-color: rgb(63, 63, 65);
  /* Black*/
  overflow-x: hidden;
  /* Disable horizontal scroll */
  padding-top: 60px;
  /* Place content 60px from the top */
  transition: 0.5s;
  /*0.5 second transition effect to slide in the sidenav*/
}

.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
}

.bm-item-list {
  color: #b8b7ad;
  margin-left: 10%;
  font-size: 20px;
}

.bm-item-list > * {
  display: flex;
  text-decoration: none;
  padding: 0.7em;
}

.bm-item-list > * > span {
  margin-left: 10px;
  font-weight: 700;
  color: white;
}

@media screen and (max-width: 509px) {
  #swiper01 {
    padding-left: 21px;
  }

  .cf:after {
    content: "";
    display: block;
    clear: both;
  }

  ul,
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  body {
    width: auto;
    max-width: 780px;
    height: auto;
    background: #ffffff;
  }

  .button {
    position: fixed;
    width: 80px;
    height: 80px;
    top: 85%;
    left: 75%;
  }

  .button img {
    width: 80px;
    height: 80px;
  }

  .line {
    left: 390px;
  }

  #bar {
    width: 90%;
    height: 59px;
    margin: 0 auto;
    border-bottom: 1px solid #cccccc;
  }

  #bar > img {
    position: relative;
    width: auto;
    height: 40px;
    top: 10px;
    left: 10px;
  }

  #bar span {
    position: relative;
    float: right;
    top: 20px;
    left: -10px;
  }

  #article1 {
    width: auto;
    height: 70px;
  }

  #top {
    width: 90%;
    height: 40px;
    margin-left: 5%;
    padding-top: 10px;
    overflow: hidden;
  }

  #top ul {
    width: 1000px;
    height: auto;
  }

  li {
    display: flex;
    width: auto;
    height: 30px;
    background: #065f44;
    float: left;
    /*     margin-right: 15px;
 */
    border-radius: 25px;
    padding: 0 10%;
    justify-content: center;
    align-items: center;
    font-size: 1.25em;
    color: #ffffff;
    font-family: "Gowun Dodum", sans-serif;
  }

  #top ul li a {
    color: #ffffff;
    font-family: "Gowun Dodum", sans-serif;
  }

  #sub1 {
    width: 90%;
    height: auto;
    margin: 0 auto;
    border-bottom: 1px solid #cccccc;
    margin-top: 10px;
  }

/*   #sub1 .sub_img {
    width: 100%;
    height: 320px;
    background: #cccccc;
    box-shadow: 0 0 5px #cccccc;
    margin-top: -20px;
  }
 */
  #sub1 .sub_img img {
    width: 100%;
  /*   height: 400px; */
  }

  .sub_top {
    width: 100%;
    height: 40px;
    margin-top: 20px;
  }

  .sub_top ul {
    width: auto;
    height: 30px;
  }

  .sub_top ul li {
    font-size: 1.1em;
    padding: 0 2%;
    margin-right: 15px;
  }

  button {
    position: relative;
    width: 50px;
    height: 20px;
    float: right;
    top: -25px;
    align-items: center;
    /*     background: #ffffff;
 */
  }

  button img {
    width: auto;
    height: 20px;
  }

  .sub_write {
    width: 100%;
    height: 300px;
    margin-top: 10px;
  }

  .sub_write .write {
    width: 99.8%;
    height: 78px;
    border-radius: 15px;
    border: 1px solid #cccccc;
  }

  .sub_write .write img {
    width: 78px;
    height: 78px;
    float: left;
  }

  .sub_write .write span {
    display: block;
    width: 65%;
    height: 50px;
    margin-top: -61px;
    margin-left: 25%;
    color: #000000;
    font-size: 0.8em;
    float: left;
    font-family: "GangwonEdu_OTFLightA", sans-serif;
  }

  .write > span > p {
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    line-clamp: 2;
    box-orient: vertical;

    height: 60px;
    line-height: 30px;
    font-size: 1.3em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .sub_write > p {
    width: 100%;
    height: 150px;
    margin-top: 20px;
    font-family: "GangwonEdu_OTFLightA", sans-serif;
    font-size: 3vh;
    overflow: hidden;
  }

  .sub_bottom {
    width: 100%;
    height: 55px;
    line-height: 55px;
  }

  .sub_bottom h1 {
    float: left;
    color: #4d4d4d;
    font-family: "Gowun Dodum", sans-serif;
    font-size: 1em;
    margin-top: 20px;
  }

  .sub_bottom div {
    width: auto;
    height: auto;
    float: right;
  }

  .sub_bottom img {
    width: 20px;
    height: 20px;
    margin-top: 20px;
    margin-right: 10px;
    float: left;
  }

  .sub_bottom p {
    float: left;
    color: #4d4d4d;
    margin-top: 3px;
  }

/*   footer {
    width: auto;
    height: 150px;
  } */
}

@media screen and (max-width: 439px) {
  #swiper01 {
    padding-left: 20px;
  }

  .cf:after {
    content: "";
    display: block;
    clear: both;
  }

  ul,
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  body {
    width: auto;
    max-width: 780px;
    height: auto;
    background: #ffffff;
  }

  .button {
    position: fixed;
    width: 80px;
    height: 80px;
    top: 85%;
    left: 75%;
  }

  .button img {
    width: 80px;
    height: 80px;
  }

  header {
    width: auto;
    height: 60px;
    background: #ffffff;
  }

  #bar {
    width: 90%;
    height: 59px;
    margin: 0 auto;
    border-bottom: 1px solid #cccccc;
  }

  #bar > img {
    position: relative;
    width: auto;
    height: 40px;
    top: 10px;
    left: 10px;
  }

  #bar span {
    position: relative;
    float: right;
    top: 20px;
    left: -10px;
  }

  #article1 {
    width: auto;
    height: 70px;
  }

  #top {
    width: 90%;
    height: 40px;
    margin-left: 5%;
    padding-top: 10px;
    overflow: hidden;
  }

  #top ul {
    width: 1000px;
    height: auto;
  }

  li {
    display: flex;
    width: auto;
    height: 30px;
    background: #065f44;
    float: left;
    /*     margin-right: 15px;
 */
    border-radius: 25px;
    padding: 0 10%;
    justify-content: center;
    align-items: center;
    font-size: 1.25em;
    color: #ffffff;
    font-family: "Gowun Dodum", sans-serif;
  }

  #top ul li a {
    color: #ffffff;
    font-family: "Gowun Dodum", sans-serif;
  }

  #sub1 {
    width: 90%;
    height: auto;
    margin: 0 auto;
    border-bottom: 1px solid #cccccc;
    margin-top: 10px;
  }

/*   #sub1 .sub_img {
    width: 100%;
    height: 320px;
    background: #cccccc;
    box-shadow: 0 0 5px #cccccc;
    margin-top: -20px;
  } */

  #sub1 .sub_img img {
    width: 100%;
  }

  .sub_top {
    width: 100%;
    height: 40px;
    margin-top: 20px;
  }

  .sub_top ul {
    width: auto;
    height: 30px;
  }

  .sub_top ul li {
    font-size: 1.1em;
    padding: 0 2%;
    margin-right: 15px;
  }

  button {
    position: relative;
    width: 50px;
    height: 20px;
    float: right;
    top: -25px;
    align-items: center;
    /*     background: #ffffff;
 */
  }

  button img {
    width: auto;
    height: 20px;
  }

  .sub_write {
    width: 100%;
    height: 300px;
    margin-top: 10px;
  }

  .sub_write .write {
    width: 99.8%;
    height: 78px;
    border-radius: 15px;
    border: 1px solid #cccccc;
  }

  .sub_write .write img {
    width: 78px;
    height: 78px;
    float: left;
  }

  .sub_write .write span {
    display: block;
    width: 50%;
    height: 50px;
    margin-top: 10px;
    margin-left: 10%;
    color: #000000;
    font-size: 0.9em;
    font-family: "GangwonEdu_OTFLightA", sans-serif;
  }

  .sub_write > p {
    width: 100%;
    height: 150px;
    margin-top: 20px;
    font-family: "GangwonEdu_OTFLightA", sans-serif;
    font-size: 3vh;
  }

  .sub_bottom {
    width: 100%;
    height: 55px;
    line-height: 55px;
  }

  .sub_bottom h1 {
    float: left;
    color: #4d4d4d;
    font-family: "Gowun Dodum", sans-serif;
    font-size: 1em;
  }

  .sub_bottom div {
    width: auto;
    height: auto;
    float: right;
  }

  .sub_bottom img {
    width: 20px;
    height: 20px;
    margin-top: 18px;
    margin-right: 10px;
    float: left;
  }

  .sub_bottom p {
    float: left;
    color: #4d4d4d;
  }
/* 
  footer {
    width: auto;
    height: 150px;
  } */

  .swiper-wrapper {
    background: black;
  }
}
</style>