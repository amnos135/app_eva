<template>
  <div :class="{ loader: true, fadeout: !isLoading }">
    <div class="home">
      <img src="../assets/logo.png" alt="logo" />
    </div>
  </div>
</template>

<script>
export default {
    name:"LoadingScreen",
    pros:["isLoading"],
};
</script>

<style>
.loader {
  width: 100%;
  height: 100%;
  background-color: #ebebeb;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  color: white;
  display: block;
  font-size: 32px;
  overflow: hidden;
  padding-top: 10vh;
}
.fadeout {
    animation: fadeout 5s forwards; /* 사라질때 2초 앞으로*/
}
@keyframes fadeout{
    to{
        opacity: 0;
        visibility: hidden;
    }
}
</style>