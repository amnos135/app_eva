<template>
  <main>
    <div id="profile">
      <div id="my_image">
        <img src="../assets/profile_image.png" alt="프로필설정" />
      </div>
      <div id="introduce">
        <ul>
          <li><span>사용자사용자</span></li>
          <li><span>300</span></li>
        </ul>
      </div>
      <div id="setting">
        <a href="#none">
          <img src="../assets/settings.png" alt="프로필설정" />
        </a>
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
      </ul>
    </div>
    <div id="boxes">
     <div id="box_wrap">
        <ul>
          <a href="#none">
            <li>
              <img src="../assets/notice.png" alt="공지사항" />
              공지사항
            </li>
          </a>
          <a href="#none">
            <li>
              <img src="../assets/event.png" alt="이벤트" />
              이벤트
            </li>
          </a>
          <a href="#none">
            <li>
              <img src="../assets/faq.png" alt="FAQ" />
              FAQ
            </li>
          </a>
          <a href="#none">
            <li>
              <img src="../assets/app.png" alt="어플소개" />
              어플소개
            </li>
          </a>
          <a href="#none">
            <li>
              <img src="../assets/service.png" alt="이용약관" />
              이용약관
            </li>
          </a>
        </ul>
     </div>
    </div>
  </main>
</template>


<style>
dl,
ol,
ul {
  padding-left: 0;
  margin: 0;
}

main {
  width: 100%;
  height: 1000px;
  background-color: #e9e9e9;
  color: black;
}
#profile {
  width: 100%;
  height: 180px;
  background: #065f44;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  }
#profile > #my_image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: white;
  overflow: hidden;
}
#profile > #my_image > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
#introduce > ul {
  padding-left: 0;
  margin: 0;
  color: #c7d3cf;
}

#introduce > ul > li:nth-child(2)::before {
  content: url(../assets/coffee-bean.png);
  vertical-align: middle;
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
  border-bottom: 1px solid #4d4d4d;
  display: flex;
  justify-content: space-between;
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
#boxes  ul > a {
  text-decoration: none;
  color: black;
}
#boxes #box_wrap{
  max-width: 370px;
  height: 500px;
/*  background: #4d4d4d;
 */ margin: 0 auto;
 margin-top: 20px;
}
#boxes ul{
  padding-left: 0;
  display: grid; 
 justify-items: center;
 grid-template-rows: repeat(2, 90px);
  grid-template-columns: repeat(3, 1fr);
gap: 20px 0px ;
}

#boxes ul > a > li {
  width: 90px;
  height: 90px;
  border: 1px solid #4d4d4d;
  padding-top: 15px;
  box-sizing: border-box;
  border-radius: 10px;
}

#boxes ul > a > li > img {
  display: block;
  margin: 0 auto;
  margin-bottom: 5px;
}
 
</style>