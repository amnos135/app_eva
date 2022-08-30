<template>
<header>
  <router-link to="/">
    <img src="../assets/thrinking_logo.png" href="../views/2_main.vue" alt="로고">
  </router-link>
  </header>

</template>
<script>

  export default {
    data: () => ({
      name : 'Header',
       
    }),
  }
  
</script>





<style scoped>/*     background : #065F44;
 */ 
  header{
    z-index: 999;
    text-align: center;
     position: fixed;
     width: 100%;
    height: 60px;
    background: white;
    line-height: 60px;
    border-bottom: 3px solid 4d4d4d;
        background-color: rgb(255, 255, 255);
    box-shadow: 0px 0px 3px  0px gray;
/*     font-family: "Noto Sans";
 */  }
  header a img{
   /*  max-width:13%; height:auto; */
   width: 50px;
   height: 50px;
/*    position: relative;
   left: 0px;
   right: 0px;
   top: 0px; */
     
  }

</style>