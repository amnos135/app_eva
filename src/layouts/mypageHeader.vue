<template>
<header>
  <a href="#none">
    <img src="../assets/back.png" alt="뒤로가기">
  </a>
  <span>마이페이지</span>
 </header>

</template>




<script>
export default {
    name:'HeaDer'
}
</script>





<style scoped>/*     background : #065F44;
 */ 
  header{
    width: 100%;
    height: 60px;
    background: white;
    line-height: 60px;
    border-bottom: 3px solid 4d4d4d;
/*     font-family: "Noto Sans";
 */  }
  header a img{
    position: absolute;
    left: 10px;
    top: 18px;

  }
</style>