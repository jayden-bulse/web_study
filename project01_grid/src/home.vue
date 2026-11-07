<template>
  <div class="content" ref="contentRef">
   <div class="topBanner container">
      <div class="word">
        Bridge Collective
      </div>
      <div class="menu">
        <img @click="menuOpenF()"  :src="photoPath" alt="menuPG">
      </div>
    </div>
    <hr>
    <div class="main">
      <div class="introduce">
        <div class="word">
          <div class="bigFont">A classroom for every child.</div>
          <div class="smallFont">
            We fund the schools, train the teachers,
            and measure what works —— so every child
            we reach today becomes a graduate tomorrow.
          </div>
        </div>
      </div>

      <div class="cardArea">
        <div class="card">
          <div class="top">
            <img src="../public/assets/images/icon-sparkle.svg" alt="">
            <div class="topData">
              2.4M
            </div>
          </div>
          <div class="bottom">
            <div class="boldData">Students reached</div>
            <div class="detailData">Across 31 countries since 2011.</div>
          </div>
        </div>
        <div class="card">
          <div class="top">
            <img src="../public/assets/images/icon-plus.svg" alt="">
            <div class="topData">
              1,284
            </div>
          </div>
          <div class="bottom">
            <div class="boldData">Schools partnered</div>
            <div class="detailData">In 14 countries,from Kenya to Guatemaia</div>
          </div>
        </div>
        <div class="card">
          <div class="top">
            <img src="../public/assets/images/icon-arrow-right.svg" alt="">
            <div class="topData">
              38K
            </div>
          </div>
          <div class="bottom">
            <div class="boldData">Teacher trained</div>
            <div class="detailData">Equipped with modern tools and methodology</div>
          </div>
        </div>
        <div class="card">
          <div class="top">
            <img src="../public/assets/images/icon-trending-up.svg" alt="">
            <div class="topData">
              3.1x
            </div>
          </div>
          <div class="bottom">
            <div class="boldData">Graduation lift</div>
            <div class="detailData">Partner schools outperform national average 3x.</div>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <div class="footer container">
      <div class="word">
        &copy 2026 Bridge Collective
      </div>
      <div class="data">
        Registered charity 12345678
      </div>
    </div>
       <div v-show="menuOpen==true" class="menuPanel">
        <div class="option">About</div>
        <div class="option">Our Work</div>
        <div class="option">Partners</div>
        <div class="option">Annual Report</div>
        <div class="option">Donate</div>
      </div>

      <div v-if="menuOpen==true" class="overly"></div>

  </div>
</template>

<script setup lang="ts">
defineOptions({
    name:'home',
})
import { watchEffect,ref,onMounted,onBeforeUnmount } from 'vue'

let contentRef = ref<HTMLElement | null>(null);
let contentHeight = ref(0);
let menuOpen = ref(false);
let  photoPath = ref<string>('../public/assets/images/icon-menu.svg');

function updateHeight() {
  if (contentRef.value) contentHeight.value = contentRef.value.offsetHeight
}

onMounted(updateHeight)
window.addEventListener('resize', updateHeight)
window.addEventListener('orientationchange', updateHeight)
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateHeight)
  window.removeEventListener('orientationchange', updateHeight)
})

// 将尺寸同步到 :root 的 CSS 变量上
watchEffect(() => {
  document.documentElement.style.setProperty('--content-height', `${contentHeight.value}px`)
})

function menuOpenF(){
  menuOpen.value = !menuOpen.value;
  if(menuOpen.value==true){
    photoPath.value = '../public/assets/images/icon-close.svg';
  }
  else{
    photoPath.value = '../public/assets/images/icon-menu.svg';
  }
  console.log(menuOpen.value);
}

</script>

<style scoped>
  /* 分隔线的样式：border-bottom: 1px solid rgba(255, 255, 255, 0.2); */
  .container{
    width:100%;
    box-sizing: border-box;
    padding-left: 40px;
    padding-right:40px;
  }
    @font-face {
  font-family: 'Inter';
  src: url('./assets/fonts/inter-variable.ttf') format('truetype');
  font-weight: 100 900;  /* 可变字体支持的字重范围 */
  font-style: normal;
}

hr {
  border: none; 
  /* 核心：用半透明的白色，代替纯白 */
  border-top: 1px solid rgba(255, 255, 255, 0.4); 
  margin: 0; 
}

  .content{
    position:relative;
    font-family: 'Inter';
    background-color:#2754fd;
    width:100%;
    min-height:100vh;
    color:white;
    display: flex;
    flex-direction: column;
  }

  .topBanner{
    background-color: #2754fd;
    font-size:15px;
    height:calc(var(--content-height)*0.08);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position:relative;
    z-index: 101;
  }
  .topBanner .word::before{
    content:"";
    display: inline-block;
    width:11px;
    height: 11px;
    border-radius: 50%;
    background-color: white;
    margin-right: 10px;
  }
  .menu img{
    width: 25px;
    margin-right: 10px;
  }

  .menu img:hover{
    width: 30px;
  }

  .menuPanel{
    display: flex;
    flex-direction: column;
    align-items:end;
    position: absolute;
    top:calc(var(--content-height)*0.080);
    right: 0;
    box-sizing: border-box;
    width:27%;
    padding-top:40px;
    z-index: 101;
    background-color: #2754fd;
    height: calc(var(--content-height)*0.92);
  }

  .option{
    font-size:clamp(24px,3vw,38px);
    margin-bottom: 14px;
    margin-right: 50px;
  }

  .overly{
    background: rgba(0, 0, 0, 0.6); 
    z-index: 100;
    position: fixed;
    inset:0;         
  }


  .main{
    height: calc(var(--content-height)*0.84);
    display: flex;
    position: relative;
  }

  .footer{
    flex:1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size:15px;
  }

  .introduce{
    color:white;
    display: flex;
    align-items: center;
    width:44%;
    padding-left: 40px;
    border-right: 1px solid rgba(255, 255, 255, 0.2);
  }

  .cardArea{
    flex: 1;
    display: grid;
   grid-template-columns: repeat(2, 1fr);  /* 2列 */
  grid-template-rows: repeat(2, 1fr);     /* 2行 */
  }

  .card{
    border-right:1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255,255,255,0.2);
    padding:30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .card .top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height:14%;
  }

  .card .top img{
    width: 33px;
  }

  .card .top .topData{
    font-size:clamp(24px,3vw,38px);
  }

  .card .bottom{
    display: flex;
    flex-direction: column;
    height: 14%;

  }

  .card .bottom .detailData{
     color: #a1c3ff;
     font-size:14px;
  }
  .card .bottom .boldData{
    color:white;
    font-size:18px;
  }

  
  .card:nth-child(2n) {
  border-right: none;
}

  .card:nth-child(n+3){
    border-bottom:none;
  }

  .introduce .word{
    display: flex;
    flex-direction: column;
    width:66%;
  }

  .bigFont{
    font-size:clamp(32px,5vw,65px);
    margin-bottom: 45px;
    line-height: 1.2;
  }
  .smallFont{
    color: #a1c3ff;
    font-size: clamp(16px,1.4vw,19px);
    line-height: 1.6;
  }

   /* 不同媒体的不同页面布局 */
  @media(max-width:1024px){
    .container{
      padding-left:30px;
      padding-right:30px;
    }
    .bigFont{
      font-size:48px;
    }
    .card{
      padding:20px;
    }
  }

  @media(max-width:768px){
    .container {
        padding-left: 20px;
        padding-right: 20px;
      }
      .content{
        height: auto;
  
      }
      .topBanner {
        height: auto;
        padding-bottom: 15px;
        padding-top: 15px;
      }
    
      .main {
      flex-direction:column;
      height: auto;
    }
    .introduce{
      width:100%;
      box-sizing: border-box;
      padding-left:20px;
      padding-right:20px;
      padding-top:50px;
      padding-bottom: 60px;
      border-right:none;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }

    .introduce .word{
      width:100%;
    }

    .bigFont{
      margin-bottom: 25px;
    }

    .smallFont{
      font-size: 20px;
    }

    .cardArea{
      display: flex;
      flex-direction: column;
      height: auto;
      flex: none; /* 关键：重置桌面端的 flex:1（flex-basis:0%），否则在 height:auto 的父容器里高度会塌缩 */
    }

    .card{
      height:70vw;
      border-right: none;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2); 
    }

    .card .bottom{
      height:auto;
    }

    .menuPanel{
      width:100%;
    }
    .footer{
      display: flex;
      flex: none; /* 关键：不要 flex:0（flex-basis:0%），让 footer 按内容自然撑开 */
      flex-direction:column;
      align-items: start;
      height: auto;
      padding-bottom: 15px;
      padding-top:15px;
    }
  }
</style>