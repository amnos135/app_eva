<template>
  <main>
    

    <div class="header">

<!--Content before waves-->
 <a href="#none">
      <img src="../assets/thrinking_logo.png" alt="로고" />
    </a>

    <div id="buttons">
      <!-- Modal 버튼 -->
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        로그인
      </button>

      <router-link to="/main">
        <button
          type="button"
          class="btn btn-primary"
          data-bs-target="#exampleModal"
        >
          비회원
        </button>
      </router-link>
  
      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal" style="color:black;"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">SNS 로그인</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">자체 로그인은 준비중입니다
            <!-- 부트스트랩 sns 로그인 -->
            <section style="margin-top:20px;">
                      <form style="display:flex; gap:10px;flex-direction:column;">
                      <a class="btn btn-primary btn-lg btn-block" style="background-color: #3b5998" href="#!"
                        role="button">
                        <i class="fab fa-facebook-f me-2"></i>페이스북으로 로그인
                      </a>
                      <a class="btn btn-primary btn-lg btn-block" style="background-color: #55acee" href="#!"
                        role="button">
                        <i class="fab fa-twitter me-2"></i>트위터로 로그인
                      </a>


                      <a v-if="user.email==undefined" @click="kakaoLoin" class="btn btn-primary btn-lg btn-block" style="background-color: #f1cd00" href="#!"
                        role="button">
                        <i class="fab fa-twitter me-2"></i>카카오톡으로 로그인
                      </a>
                      <a v-else @click="kakaoLogout" class="btn btn-primary btn-lg btn-block" style="background-color: grey" href="#!"
                        role="button">
                        <i class="fab fa-twitter me-2"></i>카카오톡 로그아웃하기
                      </a>
                    </form>
            
            </section>
            <!-- 부트스트랩 sns 로그인 끝 -->







            </div>
            <div class="modal-footer">
              <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
              <label class="form-check-label" for="form1Example3">자동 로그인</label>
            </div>

            <router-link to="/main">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                완료
              </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <!-- Modal 버튼 끝-->

    </div>


<!--Waves Container-->
<div>
<svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
<defs>
<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
</defs>
<g class="parallax">
<use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
<use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
<use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
<use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
</g>
</svg>
</div>
<!--Waves end-->

</div>
<!--Header ends-->
 
    
  </main>
   <Footer></Footer> 
  
</template>



<script>

  import Footer from '../layouts/Footer.vue';


export default {
    components: { Footer},
    computed: {
      user () {
        return this.$store.state.user
      }
    },
    methods: {
      kakaoLoin () {
        window.Kakao.Auth.login({
          scope: ' account_email, profile_nickname',
          success: this.getProfile
        })
      },
      getProfile (authObj) {
        console.log(authObj);
        window.Kakao.API.request({
          url: "/v2/user/me",
          success: (res) => {
            const kakao_account = res.kakao_account;
            console.log(kakao_account);
            this.login(kakao_account);
            alert("로그인 성공!");
          },
        });
      },
      async login(kakao_account) {
        /* await this.$api("/api/login",{
          param: [
            { email: kakao_account.account_email },
            { nickname: kakao_account.profile_nickname }
          ]
        }) */

        this.$store.commit('user', kakao_account)
      },
      kakaoLogout () {
        window.Kakao.Auth.logout((response) => {
          console.log(response)
          this.$store.commit('user', {})
          alert('로그아웃');
          this.$router.push({ path: '/' })
        })
      },
      
      


    },
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
  height: 100%;
  color: black;
  color: white;
} 
main img{
    max-width: 50%; 
    height:auto; 
    display: block;
  padding: 40px;
  margin: 0 auto;
}
@media screen and (min-width: 450px) {
 main img {
      max-width: 40%; 
  }
}
/* 부트스트랩 모달팝업 */
 
button.btn.btn-primary{
   border: 1px solid #4f4f4f;
  background-color: #065f44;
  width: 200px;
  height: 50px;
}
button.btn.btn-secondary{
  background-color: #065f44;

}


#buttons{
  display: flex;
  flex-wrap: wrap;
    flex-direction: column;
    align-content: space-around;
    gap: 10px;
}
/* 부트스트랩 모달팝업 */

@import url(//fonts.googleapis.com/css?family=Lato:300:400);

body {
  margin:0;
}

h1 {
  font-family: 'Lato', sans-serif;
  font-weight:300;
  letter-spacing: 2px;
  font-size:48px;
}
p {
  font-family: 'Lato', sans-serif;
  letter-spacing: 1px;
  font-size:14px;
  color: #333333;
}

.header {
  position:relative;
  text-align:center;
  background: linear-gradient(60deg, #065f44 0%, rgba(26, 105, 33, 0.281) 100%);
  color:white;
}
.logo {
  width:50px;
  fill:white;
  padding-right:15px;
  display:inline-block;
  vertical-align: middle;
}

.inner-header {
  height:65vh;
  width:100%;
  margin: 0;
  padding: 0;
}

.flex { /*Flexbox for containers*/
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.waves {
  position:relative;
  width: 100%;
  height:15vh;
  margin-bottom:-7px; /*Fix for safari gap*/
  min-height:100px;
  max-height:150px;
}

.content {
  position:relative;
  height:20vh;
  text-align:center;
  background-color: white;
}

/* Animation */

.parallax > use {
  animation: move-forever 25s cubic-bezier(.55,.5,.45,.5)     infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
   transform: translate3d(-90px,0,0);
  }
  100% { 
    transform: translate3d(85px,0,0);
  }
}
/*Shrinking for mobile*/
@media (max-width: 768px) {
  .waves {
    height:40px;
    min-height:40px;
  }
  .content {
    height:30vh;
  }
  h1 {
    font-size:24px;
  }
}


img{
  display: none;
}

</style>