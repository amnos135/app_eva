
<template>

 <footer>
  <div id="footer_wrap">
     <ul>
        <li class="btn1">
          <router-link to="/main">          
              <img src="../assets/1.png" alt="홈">
              <p>홈</p>
          </router-link> 
        </li>

        <li>
          <router-link to="/sub1">          
              <img src="../assets/2.png" alt="">
              <p>카페</p>
          </router-link> 
        </li>

        <li>
          <router-link to="/sub2">          
              <img class="maps" src="../assets/3.png" alt="">
          </router-link> 
        </li>
      
        <li>
          <router-link to="/cafe">          
              <img src="../assets/4.png" alt="">
              <p>소통</p>
          </router-link> 
        </li>

        <li>
          <router-link to="/mypage">          
              <img src="../assets/5.png" alt="">
              <p>설정</p>
          </router-link> 
        </li>
    </ul>
  </div>
 </footer>
</template>



<script>

  export default {
    data: () => ({
      name : 'FooTer',
       
    }),
  }
  
</script>


<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Gowun+Dodum&family=Noto+Sans+KR:wght@300&display=swap');

*{list-style: none;

}
  footer{

    width: 100%;
    height: 100%;
    text-align: center;
   }
  #footer_wrap{
    z-index: 99999999999;
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 69px;
    background: white;
    border-top: 1px solid #cdcdcd;
z-index: 99;
  }
  footer ul{
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    height: 69px;
  }
  footer ul li{
    color: black;
    width: 20%;
    height: 59px;
    padding-top: 10px;
  }
  /* footer ul li.btn1:hover {
  background: url('../assets/1_2.png') no-repeat;
  
  } */
  footer ul img{
    display: block;
    height:auto;
    margin: 0 auto;
    width: 30px;
  }
  p{
    margin: 0 auto;
    width: 50px;
    font-size: 0.9em;
    font-family: sans-serif;
    margin-top: 3px;
    color: #696969;
    text-decoration: none;
  }
 
  p:hover{
    color: #065F44;
  }
  footer ul li img.maps{
    position: absolute;
    top: -14px;
    width: 58px;
    left: 50%;
    margin-left: -30px;
  }
  
 </style>