<template>
<Header />
  <main>
    <div id="profile">
      <div id="profile_wrap">
        <span style="color:#c7d3cf;">김이조</span>
        <div id="my_image">
          <img src="../assets/profile_image.png" alt="프로필설정" />
        </div>
        <div id="introduce">
          <ul>
            <li><span>#.커피사랑</span></li>
          </ul>
        </div>
      </div>

      <div id="icons">
        <ul>
          <li style="display:flex;    flex-wrap: nowrap;
    align-items: center;
    align-content: space-around;
    flex-direction: row; gap:5px; justify-content: center;  align-itmes:center; min-width: 100%; height:90px; border-bottom:1px solid #c7d3cf; line-height:80px; ">
            <span>300</span>
            /
            <img style="margin-right:2px;" src="../assets/gift.png" alt="이벤트" />
            <img src="../assets/card.png" alt="이벤트" />
          </li>
          <a href="#none"><li><img src="../assets/notice.png" alt="공지사항" />공지사항</li></a>
          <a href="#none">
            <li>
              <img src="../assets/event.png" alt="이벤트" />
              이벤트
            </li>
          </a>
          <a href="#none">
            <li>
              <img src="../assets/coupon.png" alt="쿠폰등록" />
              쿠폰등록
            </li>
          </a>
          <a href="#none">
            <li>
              <img src="../assets/faq.png" alt="어플질문답변" />
              FAQ
            </li>
          </a>
        </ul>
      </div>
    </div>
    <div id="settings">
      <ul>
        <a href="#none">
          <li>관심 매장 설정</li>
        </a>
        <a href="#none">
          <li>관심 태그 설정</li>
        </a>
        <a href="#none">
          <li>사장님 가게 설정</li>
        </a>
        <a href="#none">
          <li>어플 소개</li>
        </a>
        <a href="#none">
          <li>이용 약관</li>
        </a>
      </ul>
    </div>
    <!-- 모달끝 -->
  </main>
<Footer />  
</template>

<script>
import Header from '../layouts/mypageHeader';
  import Footer from '../layouts/Footer.vue';

  export default {
    components: {Header, Footer}
  } 
</script>


<style scoped>
dl,
ol,
ul {
  padding-left: 0;
  margin: 0;
}

main {
  width: 100%;
  background-color: #e9e9e9;
  color: black;
  text-align: center;
}
#profile {
  width: 100%;
  height: 100%;
  background: #065f44;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 20px;
  gap: 20px;
}
#profile  #my_image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #c7d3cf;
  overflow: hidden;
}
#profile  #my_image > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
#profile_wrap{
  height: 100%;
  background: #065f44;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 15px 0;
  gap: 20px;
  position: relative;
  left: 25px;
  
}
#icons {
  width: 100%;
  height: 100%;
  background: #065f44;
  font-family: "Noto Sans";
}
#icons ul {
  padding-left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: flex-start;
  border-top: 1px solid #c7d3cf;
  margin-bottom: 0;

 }
 #icons ul a{
  width: 25%;
  min-height: 100px;
  padding: 10px;
  padding-top: 20px;
 border-right: 1px solid #c7d3cf;
   text-align: center;
     color: #c7d3cf;
 }
 #icons ul a li{
    display: inline-block;

 }
  #icons ul a:last-child{
border-right: 1px solid #065f44;
  }
#icons > ul > li:nth-child(1) span::before {
  content: url(../assets/coffee-bean.png);
  position: relative;
    top: 8px;
}
 #icons ul a li img{
  display: block;
  margin: 0 auto;
  width: 34px;
  height: 34px;
 }



#introduce > ul {
  padding-left: 0;
  margin: 0;
  color: #c7d3cf;
}
#introduce span::after {
    background-image: url('../assets/edit.png');
    background-size: 20px 20px;
    display: inline-block;
    width: 20px; 
    height: 20px;
    content:"";
  vertical-align: middle;
  margin: 5px;
}
 
 #settings{
  width: 100%;
  height: 100%;
  background: red;
  font-family: "Noto Sans";
 }
#settings > ul {
  padding-left: 0;
  margin: 0;
  background-color: white;
 
}
#settings > ul li {
  width: 100%;
  height: 60px;
  line-height: 60px;
  padding: 0 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #4d4d4d;
  display: flex;
  justify-content: space-between;
  border: 1px solid #c7d3cf;
}
#settings > ul li::after {
  background-image: url("../assets/next.png");
  background-size: 10px 15px;
  width: 10px;
  height: 15px;
  content: "";
  position: relative;
  top: 20px;
}

#settings > ul > a,
#boxes ul > a {
  text-decoration: none;
  color: black;
}
 
</style>