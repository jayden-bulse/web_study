<template>
      <div class="nav" :class="{'navFold':(isMobile && isFold)}">
        <div class="logo">
            <img src="../public/assets/images/logo.svg" alt="logo">
            <img  :src=currentSrc class="function" :class="{'animationEffect':isAnimating}" @click="foldMenu()" v-show="isMobile" alt="">
        </div>
        <div class="menu" v-show="!isMobile || (isMobile && isFold)">
            <div class="tags">
                <div class="option" :class="{active:activeIndex===0}" @click="chooseTag(0)">
                    <img src="../public/assets/images/icon-bed.svg" alt="">
                    <div class="describe">Your stay</div>
                </div>
                  <div class="option" :class="{active:activeIndex===1}" @click="chooseTag(1)">
                    <img src="../public/assets/images/icon-house.svg" alt="">
                    <div class="describe">The house</div>
                </div>
                  <div class="option" :class="{active:activeIndex===2}" @click="chooseTag(2)">
                    <img src="../public/assets/images/icon-pin.svg" alt="">
                    <div class="describe">Around town</div>
                </div>
                  <div class="option" :class="{active:activeIndex===3}" @click="chooseTag(3)">
                    <img src="../public/assets/images/icon-breakfast-outline.svg" alt="">
                    <div class="describe">Breakfast</div>
                </div>
                  <div class="option" :class="{active:activeIndex===4}" @click="chooseTag(4)">
                    <img src="../public/assets/images/icon-mail.svg" alt="">
                    <div class="describe">Messages</div>
                </div>
            </div>
            
            <div class="card">
                <div class="normal">TODAY IN CASIS</div>
                <div class="big">27°</div>
                <div class="normal">Sunny·light breeze</div>
                <img src="../public/assets/images/icon-weather.svg" alt="">
            </div>
        </div>
        <div class="bottom" v-show="!isMobile || (isMobile && isFold)">
            <div class="word">EST.1987</div>
            <div class="word">MAISON SOLETL    12 RUE DES OLIVIERS    CASSIS</div>
            <div class="word">©️2026 MAISON SOLEIL</div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineOptions({
    name:'Nav'
})
import {ref} from 'vue';
import { useMediaQuery } from '@vueuse/core'

let activeIndex = ref(0);
function chooseTag(index:number){
    activeIndex.value = index;
}
let isMobile = useMediaQuery("(max-width:768px)");
let isFold = ref(false);
let isAnimating = ref(false);

const img1 = "../public/assets/images/icon-menu.svg";
const img2 = "../public/assets/images/icon-close.svg"
let currentSrc = ref(img1);

function foldMenu(){
    if(isFold.value){
        isFold.value = false;
        currentSrc.value = img1;
    }
    else{
        isFold.value = true;
        currentSrc.value = img2;
    }
}

</script>

<style scoped>
.nav{
    width:18%;
    border-right:1px solid hsl(36, 22%, 80%);
    display:flex;
    flex-direction: column;
    box-sizing:border-box;
}

.logo{
    position: relative;
    width:100%;
    height: 9%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    padding-left:12px;
    padding-right: 12px;
}

.logo img{
    width:43%;
}

.logo::after{
    content: "";
    position: absolute;
    bottom: 0;
    height: 1px;
    background-color:hsl(36, 22%, 80%);
    margin:0 auto;
    width: 90%;
}

.menu{
    position:relative;
    height:78%;
    width:100%;
    box-sizing: border-box;
    padding:10px 12px 13px 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.menu::after{
    content: "";
    position: absolute;
    bottom: 0;
    height: 1px;
    background-color:hsl(36, 22%, 86%);
    margin:0 auto;
    width: 90%;
}

.tags{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.option{
    display: flex;
    width:100%;
    padding-top: 10px;
    padding-bottom: 10px;
    align-items: center;
    border-radius: 8px;
}

.option:hover{
    background-color: #ffffff;
    cursor: pointer;
}

.option.active{
    background-color: #ffffff;
}

.option img{
    margin-left:8px;
    margin-right:8px;
}

.option .describe{
    font-family: 'DM Mono Regular';
    font-weight: 300;
    font-size: 13px;
}

.card{
    width: 100%;
    aspect-ratio:2.2/1;
    background-color: #f4d98a;
    border-radius: 15px;
    position:relative;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding-left: 15px;
    padding-top: 3px;
    padding-bottom: 3px;
    overflow: hidden;
}

.card .normal{
    font-family:'DM Mono Regular';
    color: hsl(41, 24%, 44%);
    font-size: 12px;
    height: 30%;
    display: flex;
    align-items: center;
    font-weight: 180;
}
.card .big{
    font-family: 'Fraunces-Variable';
    font-size:36px;
    font-weight: 900;
    height: 40%;
    display: flex;
    align-items: center;
}

.card img{
    position: absolute;
    top:-20%;
    right:-6%;
    width: 30%;
    
}

.bottom{
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding:15px 0;
    padding-left: 12px;
    justify-content: space-between;
}

.bottom .word{
    font-family:'DM Sans';
    color: hsl(40, 4%, 54%);
    font-size: 11px;
    font-weight: 300;
    width: 70%;
}

@media (max-width:768px){
    .nav{
        width: 100%;
    }

    .navFold{
        height: 100vh;
    }

    .logo{
        flex-direction: row;
        justify-content: space-between;
        padding-top:15px;
        padding-bottom: 15px;
    } 

    .logo img{
        width:26%;
    }

    .logo .function{
        transition: transform 0.15s ease;
        width:6%;
        touch-action: manipulation;
        -webkit-tap-highlight-color: transparent;
    }    

    .logo::after{
        width:100%;
        left:0;
    }

    /* 动画效果 */
    .animationEffect{
        animation: popScale 0.3s ease-in-out;
    }
    @keyframes popScale{
        0% {transform: scale(1);}
        50% {transform: scale(1.2);}
        100% {transform: scale(1);}
    }
    .menu {
        height: 80%;
    }

    .card {
        aspect-ratio: 3/1;
    }

    .card::after {
        width: 95%;
        margin: 0 auto;
    }

    .bottom .word{
        width:60%;
    }

    .bottom{
        margin-bottom: 10px;
    }
}
</style>