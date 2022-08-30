<template>
 <header>
  <router-link to="/login">
    <img src="../assets/com_logo.png" href="../views/2_main.vue" alt="로고">
  </router-link>
   <div class="hidden hamburger">
        <div class="line n1"></div>
        <div class="line n2"></div>
        <div class="line n3"></div>
    </div>
  </header>
</template>

<script>

</script>

<style scoped>
header{
  
     position: fixed;
     width: 100%;
    height: 60px;
    line-height: 50px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 0px 3px  0px gray;
    padding-left: 7%;
    z-index: 9999;
  }
  header a img{
   width: 42px;
   height: 42px;
     
  }

  /* 햄버거 */
.hamburger{
    width: 100%;
    height: 60px;
    position: absolute;
    cursor: pointer;
    top:0px;
    left: 10px;
     z-index: 9999;

 }
 
@media screen and (max-width: 439px) {
.hamburger{
    width: 100%;
    height: 60px;
    position: fixed;
    cursor: pointer;
    top:0px;
    left: 10px;
     z-index: 9999;
 }
  }

.line{
    width: 38px;
    height: 3px;
    background-color: #000; 
    position: absolute;
    top: 20px;
    right: 6%;
    transition : all .4s;
}
.line.n2{
    top: 30px;
}
.line.n3{
    top: 40px;
}
.hamburger.active .line.n1{
    transform: translateY(20px) rotate(-45deg);
    top: 8px;
}
.hamburger.active .line.n2{
    opacity: 0;
}
.hamburger.active .line.n3{
    transform: translateY(20px) rotate(45deg);
    top: 8px;
}
</style>