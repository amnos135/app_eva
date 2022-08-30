<template>
  <Header />
  <main>




    <img src="../assets/ad.jpg" alt="구글광고" />
    <div id="ranking">
      <ul>
        <li>
          <span>오늘의 음료</span>
          <div class="time">
            <span>마지막 갱신시각 오후 1시 30분</span>
            <img src="./img/re.png" class="re" alt="갱신">
          </div>
        </li>
        <li>
          <ul class="today">
            <li>
              <div class="round_box">
                <img src="../assets/coffee_1.jpg" alt="1위음료사진" />
              </div>
              <p>
                <span>1위</span>
                <span>복숭아 아이스티</span>
                <span>스타벅스 (3m)</span>
              </p>
            </li>

            <li>
              <div class="round_box">
                <img src="../assets/coffee_2.png" alt="2위음료사진" />
              </div>
              <p>
                <span>2위</span>
                <span>자몽차</span>
                <span>딩동당동 (783m)</span>
              </p>
            </li>
            <li>
              <div class="round_box">
                <img src="../assets/coffee_3.jpg" alt="3위음료사진" />
              </div>
              <p>
                <span>3위</span>
                <span>구름을 품은 크림 카페라떼</span>
                <span>카페 어울림 (2km)</span>
              </p>
            </li>
          </ul>
        </li>
      </ul>
    </div>




    <!-- Modal 버튼 -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
     음료를 더 재미있게 즐기고 싶다면 클릭!
    </button>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" style="margin-top:100px;">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">나만의 룰렛 만들기</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            룰렛 카테고리를 설정할 수 있습니다. <br>
            ex) - 복불복 음료<br>
            - 복불복 금액 설정<br>
            - 복불복 카페 설정<br>
            etc...<br>

            <!-- 검색바 -->
            <!-- Bootstrap CSS -->
            <link rel='stylesheet'
              href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css'>
            <!-- Font Awesome CSS -->
            <link rel='stylesheet'
              href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>
            <!-- Actual search box -->
            <div class="form-group has-search" style="margin-top:1rem; margin-bottom:0;">
              <span class="fa fa-search form-control-feedback"></span>
              <input type="text" class="form-control" placeholder="Search">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">저장하기</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal 버튼 끝-->
    <VueWinwheel :segments="options" />



    




  </main>
  
  <Footer></Footer>
</template>

<script>
import Header from '../layouts/Header';
import Footer from '../layouts/Footer.vue';
import VueWinwheel from 'vue-winwheel/vue-winwheel';

export default {
  components: { Header, Footer, VueWinwheel },
  data() {
    return {
      options: [
        {
          textFillStyle: '#fff',
          fillStyle: '#12B080',
          text: '스타벅스'
        },
        {
          textFillStyle: '#000',
          fillStyle: '#BDFFEB',
          text: '편의점커피'
        },
        {
          textFillStyle: '#fff',
          fillStyle: '#12B080',
          text: '메가커피'
        },
        {
          textFillStyle: '#000',
          fillStyle: '#BDFFEB',
          text: '컴포즈커피'
        },
        {
          textFillStyle: '#fff',
          fillStyle: '#12B080',
          text: '카페어울림'
        },
        {
          textFillStyle: '#000',
          fillStyle: '#BDFFEB',
          text: '투썸플레이스'
        },
        {
          textFillStyle: '#fff',
          fillStyle: '#12B080',
          text: '깡생수'
        },
        {
          textFillStyle: '#000',
          fillStyle: '#BDFFEB',
          text: '믹스커피'
        }
      ]
    }
  }
} 
</script>

<style scoped>
@font-face {
  font-family: 'GowunDodum-Regular';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/GowunDodum-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

main {
  text-align: center;
  width: 100%;
  height: auto;
    background-color: rgb(255, 20, 20);
  color: black;
  font-family: 'GowunDodum-Regular';
}

main>img {
  width: 100%;
  margin-top: 60px;
}

#ranking>ul {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  flex-direction: column;
  padding-left: 0;
}

#ranking>ul>li:first-child {
  /*   background-color: pink;
 */
  width: 100%;
  height: 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
  align-items: baseline;
  padding: 0px 20px;
}

#ranking>ul>li:first-child>span:first-child {
  font-size: 25px;
  font-size: 6vw;
  color: #4f4f4f;
  line-height: 80px;
}
#ranking>ul>li:first-child>.time>span{
  position: relative;
  font-size: 3vw;
  color: #888888;
  top: -1px;
  left: -3px;
}


.vue-winwheel{
  margin-top: 20px;
}

.vue-winwheel .canvas-wrapper[data-v-78bf01f8]::after {
    content: '';
    display: block;
    width: 42px;
    background: rgb(0, 255, 55);
    height: 42px;
    position: absolute;
    left: calc(50% - 25px);
    margin: auto;
    border-radius: 100%;
    top: calc(50% - 29px);
    border: 5px solid white;
    box-sizing: content-box;
}
/* 룰렛 */
h1{
  color: #065f44;
}
@media screen and (min-width: 450px) {

  main{
    background-color: #ffffff;
    height: 1400px;
  }

  #ranking>ul>li:first-child>span:first-child {
    font-size: 26px;
  }
}

#ranking>ul>li:first-child>span:nth-child(2) {
  font-size: 10px;
  color: #4f4f4f;
  padding-left: 280px;
}
#ranking>ul>li.time{
  float: left;
}
#ranking>ul>li:last-child>ul.today {
  width: 100%;
  height: 100%;
  /*   background: #aaa;
 */
  display: flex;
  justify-content: space-around;
   padding-left: 0;
}

#ranking>ul>li:last-child>ul.today li {
  width: 30%;
  height: 100%;
  padding: 10px 0px;
  overflow: hidden;
}

#ranking>ul>li:last-child>ul.today>li div.round_box {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  margin: 0 auto;
   height: 30vw;
}

#ranking>ul>li:last-child>ul.today>li div.round_box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

#ranking>ul>li:last-child>ul.today>li p {
  margin: 0 auto;
}

#ranking>ul>li:last-child>ul.today>li p span:nth-child(1) {
  display: block;
  font-size: 3vw;
}

#ranking>ul>li:last-child>ul.today>li p span:nth-child(2) {
  display: block;
  font-size: 3vw;
      overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}



@media screen and (max-width: 509px) {

main {
  height: 1200px;
  background-color: #ffffff;
}


  #ranking>ul>li:last-child>ul.today>li p span:nth-child(1),
  #ranking>ul>li:last-child>ul.today>li p span:nth-child(2) {
    font-size: 16px;
  }
}


#ranking>ul>li:last-child>ul.today>li p span:last-child {
  display: block;
  font-size: 2vw;
}










/* 부트스트랩 모달팝업 */

button.btn.btn-primary {
  border: 1px solid #4f4f4f;
  background-color: #065f44;
  margin-top: 20px;
}

/* 부트스트랩 모달팝업 */
/*부트스트랩검색바 */

.has-search .form-control {
  padding-left: 2.375rem;
}

.has-search .form-control-feedback {
  position: absolute;
  z-index: 2;
  display: block;
  width: 2.375rem;
  height: 2.375rem;
  line-height: 2.375rem;
  text-align: center;
  pointer-events: none;
  color: #aaa;
}

/*부트스트랩검색바 */
</style>