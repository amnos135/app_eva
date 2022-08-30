<template>
  <main>
    <img src="../assets/ad.jpg" alt="구글광고" />
    <div id="ranking">
      <ul>
        <li>
          <span>오늘의 음료</span>
          <span>마지막 갱신시각 오후 1시 30분</span>
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
  </main>
</template>


<style>

@font-face {
    font-family: 'GowunDodum-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/GowunDodum-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

main {
  width: 100%;
  height: 1600px;
  background-color:#d4d4d4;
  color: black;
 font-family: 'GowunDodum-Regular';
}
main > img {
  width: 100%;
}

#ranking > ul {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  flex-direction: column;
  padding-left: 0;
}
#ranking > ul > li:first-child {
/*   background-color: pink;
 */  width: 100%;
  height: 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
  align-items: baseline;
  padding: 0px 20px;
}
#ranking > ul > li:first-child > span:first-child {
  font-size: 25px;
  font-size: 6vw;
  color: #4f4f4f;
  line-height: 80px;
}
@media screen and (min-width: 450px) {
 #ranking > ul > li:first-child > span:first-child {
     font-size: 26px;
  }
}
#ranking > ul > li:first-child > span:last-child {
  font-size: 10px;
  color: #4f4f4f;
}
#ranking > ul > li:last-child > ul.today {
  width: 100%;
  height: 100%;
/*   background: #aaa;
 */  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 0;
}
#ranking > ul > li:last-child > ul.today li {
  width: 30%;
  height: 100%;
  padding: 10px 0px;
  overflow: hidden;
}

#ranking > ul > li:last-child > ul.today > li div.round_box {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  margin: 0 auto;
  width: 30vw;
  height: 30vw;
}
#ranking > ul > li:last-child > ul.today > li div.round_box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
#ranking > ul > li:last-child > ul.today > li p {
  margin: 0 auto;
}
#ranking > ul > li:last-child > ul.today > li p span:nth-child(1) {
  display: block;
 font-size: 3vw;
}
#ranking > ul > li:last-child > ul.today > li p span:nth-child(2) {
  display: block;
 font-size: 3vw;
}

@media screen and (min-width: 450px) {
 #ranking > ul > li:last-child > ul.today > li p span:nth-child(1),
 #ranking > ul > li:last-child > ul.today > li p span:nth-child(2) {
     font-size: 16px;
  }
}
#ranking > ul > li:last-child > ul.today > li p span:last-child {
  display: block;
  font-size: 2vw;
}
</style>