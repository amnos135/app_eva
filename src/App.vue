<template>
  <div>
 <!--    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/Detail">Product디테일</router-link> |
      <router-link to="/Create">Product크리에이트</router-link> |
    </nav> -->
    
    <div id="app">

      <LoadingScreen :isLoading="isLoading" />
     <!--  <router-view/> -->
    
    <!-- 페이지가 로드되지 않는다면 HelloWorld페이지로이동 -->
      <main v-if="!isLoading">
        <!-- <img class="logopng" src="./assets/logo.png" alt="logo" width="25%"> -->
        <HelloWorld />
      </main>
      <!-- <login></login> -->
     <!--  <router-view/> --><!-- 내용이 변경되는 영역 -->
    </div>
      <Footer></Footer>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue"//1.컴포넌트 불러오기
import LoadingScreen from "./components/LoadingScreen.vue"//처음 로드되는 페이지


  import Header from './layouts/Header';
  import Footer from './layouts/Footer.vue';
  import login from './views/2_login.vue';

  export default {
    components: { Header,Footer,login, HelloWorld,LoadingScreen},
      data() {
    return {  isLoading : true};
  },
  mounted() {
    setTimeout(()=>{
      this.isLoading = false;
    },3000);
  }
  };
</script>

<style>

@font-face {
    font-family: 'GowunDodum-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/GowunDodum-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

#app {
  font-family: 'GowunDodum-Regular', Arial, sans-serif;
  text-align: center;
  }

* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  text-decoration: none;
}

ul,
ol {
  list-style: none;
  text-decoration: none;

}
a {
  text-decoration: none !important;
}

</style>


 