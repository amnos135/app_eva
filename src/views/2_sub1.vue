<template>
  <div id="wrap">
        <header id="header">
            <!-- <h1 class="search">
                
            </h1>  -->
            <input type="text" placeholder="검색어를 입력해주세요.">
            <button><img src="./img/search.png" alt="search"></button>
        </header>
        <div id="container">
            <div class="near"> 
                <h2>내 위치 근처<img src="./img/near.png" alt="near"></h2>
                <div id="swiper01">
                    <swiper
                        :slides-per-view="4"
                        :space-between="0"
                        :pagination="{ clickable: true }"
                        @swiper="onSwiper"
                        @slideChange="onSlideChange">
                        <swiper-slide>
                        <li class="swiper"><a style="color: white" href="#none">#전체</a></li>
                        </swiper-slide>
                        <swiper-slide>
                        <li class="swiper"><a style="color: white" href="#none">#디저트</a></li>
                        </swiper-slide>
                        <swiper-slide>
                        <li class="swiper"><a style="color: white" href="#none">#우유</a></li>
                        </swiper-slide>
                        <swiper-slide>
                        <li class="swiper"><a style="color: white" href="#none">#빙수</a></li>
                        </swiper-slide>
                        <swiper-slide>
                        <li class="swiper"><a style="color: white" href="#none">#번</a></li>
                        </swiper-slide>
                        <swiper-slide>
                        <li class="swiper"><a style="color: white" href="#none">#스무디</a></li>
                        </swiper-slide>
                        <swiper-slide>
                        <li class="swiper"><a style="color: white" href="#none">#프라페</a></li>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
                <div class="list">
                    <ul>
                        <li><img src="./img/list1.png" alt="yogerpresso" class="cafe">
                            <a href="#none">
                            <ul>
                                <li><h2>Yogerpresso</h2></li>
                                    <li>현재 위치에서 5m </li>
                                    <li>
                                        <img src="./img/Star1.png" alt="별점">
                                        <img src="./img/Star1.png" alt="별점">
                                        <img src="./img/Star1.png" alt="별점">
                                        <img src="./img/Star1.png" alt="별점">
                                        <img src="./img/Star2.png" alt="별점"> 
                                    </li>
                                        <li>#요거프레소 #딸기요거트 #아이스아메리카노 #과일빙수</li>
                            </ul></a>
                        </li>
                        <li><img src="./img/list2.png" alt="starbucks" class="cafe">
                            <a href="#none">
                            <ul>
                                <li><h2>Starbucks</h2></li>
                                    <li>현재 위치에서 5m </li>
                                    <li>
                                        <img src="./img/Star1.png" alt="별점">
                                <img src="./img/Star1.png" alt="별점">
                                <img src="./img/Star1.png" alt="별점">
                                <img src="./img/Star1.png" alt="별점">
                                <img src="./img/Star1.5.png" alt="별점">  
                                    </li>
                                        <li>#스타벅스 #아메리카노 #조각케익 #시즌음료  #텀블러</li>
                            </ul></a>
                        </li>
                        <li><img src="./img/list3.png" alt="Ediya" class="cafe">
                            <a href="#none">
                            <ul>
                                <li><h2>Ediya Coffe</h2></li>
                                    <li>현재 위치에서 5m </li>
                                    <li>
                                        <img src="./img/Star1.png" alt="별점">
                                <img src="./img/Star1.png" alt="별점">
                                <img src="./img/Star1.png" alt="별점">
                                <img src="./img/Star2.png" alt="별점">
                                <img src="./img/Star2.png" alt="별점"> 
                                    </li>
                                        <li>#이디야 #아이스아메리카노 #디저트 #가성비</li>
                            </ul></a>
                        </li>
                        <li><img src="./img/list4.png" alt="Ediya" class="cafe">
                            <a href="#none">
                            <ul>
                                <li><h2>A Twosome Place</h2></li>
                                    <li>현재 위치에서 5m </li>
                                    <li>
                                        <img src="./img/Star1.png" alt="별점">
                                <img src="./img/Star1.png" alt="별점">
                                <img src="./img/Star1.png" alt="별점">
                                <img src="./img/Star1.5.png" alt="별점">
                                <img src="./img/Star2.png" alt="별점"> 
                                    </li>
                                        <li>#투썸플레이스 #디저트 #조각케익 #넓은카페 </li>
                            </ul></a>
                        </li>
                        <li><img src="./img/list5.png" alt="Ediya" class="cafe">
                            <a href="#none">
                            <ul>
                                <li><h2>Mega Coffe</h2></li>
                                    <li>현재 위치에서 5m </li>
                                    <li>
                                        <img src="./img/Star1.png" alt="별점">
                                <img src="./img/Star1.png" alt="별점">
                                <img src="./img/Star1.png" alt="별점">
                                <img src="./img/Star1.png" alt="별점">
                                <img src="./img/Star2.png" alt="별점"> 
                                    </li>
                                        <li>#메가커피 #아이스아메리카노 #프라페  #가성비</li>
                            </ul></a>
                        </li>
                        <li><img src="./img/list6.png" alt="dessert39" class="cafe">
                            <a href="#none">
                            <ul>
                                <li><h2>Dessert 39</h2></li>
                                    <li>현재 위치에서 5m </li>
                                    <li>
                                        <img src="./img/Star1.png" alt="별점">
                                <img src="./img/Star1.png" alt="별점">
                                <img src="./img/Star1.png" alt="별점">
                                <img src="./img/Star1.png" alt="별점">
                                <img src="./img/Star1.5.png" alt="별점">  
                                    </li>
                                        <li>#디저트 #빙수 #조각케익 #가성비  #대용량</li>
                            </ul></a>
                        </li>
                    </ul>
                </div>
            
        </div>
    </div>
<Footer /> 
</template>

<script>

import Footer from '../layouts/Footer.vue';


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
  components: { Footer, Swiper, SwiperSlide },
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
@font-face {
    font-family: 'GowunDodum-Regular','Noto Sans KR', sans-serif;
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/GowunDodum-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

#swiper01 {
  width: 100%;
  height: 60px;
  color: white;
  padding-top: 10px;
}
li.swiper {
  display: flex;
  width: auto;
  height: 40px;
  background: #065f44;
  float: left;
  /*   margin-right: 15px;
 */
  border-radius: 25px;
  padding: 0 12%;
  justify-content: center;
  align-items: center;
  font-size: 1.25em;
  color: #ffffff;
  font-family: "Gowun Dodum", sans-serif;
}


h2{
    font-weight: bold;
}
ul,li{list-style: none;}
a{text-decoration: none; color: #333;}
#wrap{
        margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    width: 100%;
    margin: 0 auto;
    background: rgb(255, 255, 255);
    position: relative;
    box-sizing: border-box;
    min-height: 100%;
        font-family: 'Noto Sans KR', 돋움, sans-serif;
    line-height: 1;
    text-align: left;
}
#header{
    position: fixed;
    width: 100%;
    height: 60px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 0px 4px  0px gray;
     z-index: 9999;
 }
/* header */
    input{
        height: 42px;
        width: 81%;
        background-color: rgb(255, 255, 255);
        margin: 8px auto;
        border: #065F44 2px solid;
        border-radius: 20px;
        padding-left: 20px;
        margin-left: 50px;
    }
/*     header button{
        position: absolute;
        top: 13px;
        left: 695px;
        background-color: #ffffff;
    } */
        header button{
        position: fixed;
        top: 15px;
         right: 0px;
     }
    header button img{
        width: 30px;
        position: fixed;
        top: 13px;
        right: 100px;  
    }
    h1.search img{
        float: right;
        padding: 4px 30px 0 0;
    }
    #container{display: block;
        width: 100%;
        min-height: 1600px;
        margin: 0 auto;
        background: rgb(255, 255, 255);
        padding-left: 10px;
    }
    div.near h2{
        padding-bottom: 10px;
    }
    div.near{
        padding-top: 80px;
        overflow: hidden;
        text-align: center;
        color: #383838;
    }
    div.near img{
        padding-left: 15px;
    }

    div.near ul.cafelist{
        width: 1200px;
        font-family: 'GowunDodum-Regular','Noto Sans KR', sans-serif;
        
    }
    div.near ul.cafelist li{
        display: flex;
        font-size: 1.5rem;
        font-weight: bold;
        margin: 20px 10px 10px 0;
        float: left;
        width: auto;
        height: 40px;
        background-color: #b3b3b3;
        padding: 0 3%;
        margin-right: 15px;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    }
    div.near ul.cafelist li:first-child{
            margin-left: -30px;
        }
    .cafelist{
        display: block;
    }
    .cafelist h2{
        float: left;
        width: 200px;
        height: 50px;
        background-color: #065F44;
    }
    
    .cafelist ul li{
        float: left;
    }
    div.list{
        /* display: flex; */
        width: 100%;
        margin: 0 auto;
        height: 1100px;
    }
    
    .list >ul{
        margin-top: 30px;
         margin-left: -32px;
        width: 105%;
    }
    .list> ul> li{
        border-top: 1px solid #afafaf;
        padding: 30px 0 0 0px;
        display: flex;
        height: 200px;
        width: 100%;
        font-size: 1.25em;
        line-height: 1.3;
        
        
    }
    .list> ul> li>img{
        width: 130px;
        height: 130px;
        
    }
    .list> ul> li:last-child{
        border-bottom: 1px solid #afafaf;
    }
    
    .list> ul> li>a >ul> li{
        
    margin-left: 10px;
     }
@media screen and (max-width:609px){
    #wrap{
        width: 100%;
        min-width: 380px;
    }

    #header{
        width: 100%;
    }
    input{
        width: 82%;
        margin-left: 40px;
    }
    header button{
        position: fixed;
        top: 15px;
         right: 0px;
     }
    header button img{
        width: 30px;
        position: fixed;
        top: 13px;
        right: 60px;  
    }
    #container{
        min-height: 1200px;
        background: rgb(255, 255, 255);
    }
    div.near h2{
        width: 100%;
        text-align: center;
        font-size: 1.2rem;
        padding-top: 15px;
    }

    div.near img{
        width: 35px;
    }
    div.near ul.cafelist li{
        font-size: 1.1rem;
        margin: 10px 15px 10px 0; 
    }
        div.near ul.cafelist li:first-child{
            margin-left: -10px;
        }
    div.list{
        /* display: flex; */
        width: 95%;
    }
    .list >ul{
        margin-top: 20px;
    }
    .list> ul> li{
        width: 100%;
        font-size: 1rem;
        padding: 20px 0 10px 0;
        height: 170px;
    }

    .list> ul> li img.cafe{
    width: 90px;
    height: 90px;
    margin-top: 20px;
    }
    .list> ul> li>a >ul> li{
        
    margin-left: -10px;
        width: 100%;
    }

}
</style>