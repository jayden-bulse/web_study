<template>
  <div class="content">
         <div class="weatherCard card" :class="{'fanActive':cardHovering && !isMobile}" @mouseenter="cardHovering = true" @mouseleave="cardHovering = false">
            <div class="wc-top">WELCOME CARD</div>
            <div class="wc-middle">
                <div class="start">A note from your host,</div>
                <div class="bold">Margaux.</div>
                <div class="body">
                    We're so glad you're coming. The shutters will be open,
                    the lemonade cold, and the cat - Poivre - pretending
                    not to notice you.
                </div>
            </div>
            <div class="wc-bottom">
                <div class="small">ROOM</div>
                <div class="bold">La Garrigue</div>
            </div>
  
        <img class="sun" src="../public/assets/images/icon-sun.svg" alt="">
    </div>
    <div class="dataCard card" :class="{'fanActive':cardHovering && !isMobile}" @mouseenter="cardHovering = true" @mouseleave="cardHovering = false">
        <div class="dc-top">
            <div class="left">
                <div class="word">RECEIPT</div>
                <div class="bold">Your stay</div>
            </div>
            <div class="right">
                <div class="word">Nu M5-2026</div>
                <div class="word">0421-AH</div>
            </div>
        </div>
        <div class="dc-middle1">
            <div class="checkData">
                <div class="info">CHECK  IN</div>
                <div class="date">{{bookingData.checkIn}}</div>
                <div class="detail-date">Saturday · 15:00</div>
            </div>
             <div class="checkData">
                <div class="info">CHECK  OUT</div>
                <div class="date">{{ bookingData.checkOut }}</div>
                <div class="detail-date">Wednesday · 11:00</div>
            </div>
        </div>
        <div class="dc-middle2">
            <div class="cost">
                <div class="name">Room·{{bookingData.room}}×4 night</div>
                <div class="price">€ 620.00</div>
            </div>
            <div class="cost">
                   <div class="name">Breakfast×2 guests</div>
                <div class="price">€ 96.00</div>
            </div>
            <div class="cost shadow">
                    <div class="name">Tourist tax</div>
                <div class="price">€ 14.40</div>
            </div>
        </div>
        <div class="dc-bottom">
            <div class="totalCost">
                <div class="tag">TOTAL PAID</div>
                <div class="price">{{ bookingData.totalPrice }}</div>
            </div>
            <div class="payArea">
                <div class="tag">PAID · WISE · GBP</div>
                <img src="../public/assets/images/icon-barcode.svg" alt="">
            </div>
        </div>
    </div>

    <div class="tip" v-show="!isMobile">HOVER TO FAN</div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
    name:'FanCardArea'
})
import {ref} from 'vue'
import {useUserStore} from './stores/myPinia.ts'
import { useMediaQuery } from '@vueuse/core'
let cardHovering = ref(false);
const bookingData = useUserStore();
console.log(bookingData);

let isMobile = useMediaQuery("(max-width:768px)");

</script>

<style scoped>
.content{
    width:100%;
    height:100%;
    display: flex;
    justify-content: space-around;
    position: relative;
    align-items: center;
}

.card{
    width:28%;
    aspect-ratio:0.86/1;
    border-radius: 20px;
    padding: 0px 18px;
    box-sizing: border-box;
    position: absolute;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    bottom:30px;
}

.card:hover{
    cursor:grab;
}

.dataCard{
    left:23%;
    z-index: 1;
    background-color: #FEFDFC; 
    display: flex;
    flex-direction: column;
    box-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.02),
    0 10px 20px rgba(0, 0, 0, 0.04),
    0 20px 40px rgba(0, 0, 0, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.6);
    transform: rotate(-4deg);

    transform-origin:bottom right;
}

/* 当鼠标悬停在父容器上时，改变两张卡片的状态 */
.dataCard.fanActive{
  /* 展开时，加大旋转角度，并向左平移、稍微上移 */
  transform: rotate(-9deg) translateX(-30px) translateY(-10px);
  /* 阴影也可以稍微变大，模拟卡片飞起 */
  box-shadow: 0 10px 20px rgba(80, 30, 10, 0.1), 0 40px 80px rgba(80, 30, 10, 0.2);
}

.weatherCard.fanActive{
  /* 向右展开，加大旋转角度 */
  transform: rotate(9deg) translateX(30px) translateY(-10px);
  box-shadow: 0 10px 20px rgba(80, 30, 10, 0.1), 0 40px 80px rgba(80, 30, 10, 0.2);
}

.dc-top{
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height:18%;
    box-sizing: border-box;
    padding-top: 0px;
}

.dc-top .right{
    margin-bottom: 15px;
}

.dc-top::after{
    content: "";
    position: absolute;
    bottom: 0;
    height: 1px;
    width: 100%;
    background-image: linear-gradient(to right,rgba(0,0,0,0.2) 50%,transparent 50%);
    background-size: 6px 1px;
    background-repeat: repeat-x;
}

.word{
    font-family: "DM Mono Regular";
    font-size:12px;
    color:#a6a49f;
    font-weight: 450;
    margin-bottom: 3px;
}

.bold{
    font-family: "Fraunces-Variable";
    font-size: 28px;
    font-weight:600;
    color: #2a2623;
}

.dc-middle1{
    position: relative;
    height: 29%;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.dc-middle1::after{
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 100%;
    background-image: linear-gradient(to right,rgba(0,0,0,0.2) 50%,transparent 50%);
    background-size: 6px 1px;
    background-repeat: repeat-x;
}

.checkData{
    width:50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.checkData .info{
    font-family: "DM Sans";
    font-size:12px;
    font-weight: 150;
}

.checkData .date{
    font-family: "Fraunces-Variable";
    font-size: 36px;
    font-weight: 600;
    margin:9px 0;
}

.checkData .detail-date{
    font-size: 13px;
    font-family: "DM Sans";
    font-weight: 210;
}

.dc-middle2{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height:26%;
    border-bottom: 1px solid #444444;
}

.cost{
    display: flex;
    justify-content: space-between;
    font-family: "DM Sans";
    font-weight: 300;
    font-size: 14px;
}

.shadow{
    font-weight: 200;
}

.dc-bottom{
    height: 27%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.totalCost,.payArea{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.totalCost .tag{
    font-size:15px;
    font-weight: 150;
    font-family: "DM Sans";
    letter-spacing: 2px;
}

.totalCost .price{
    font-size:28px;
    font-family:"Fraunces-Variable";
    font-weight: 580;
}

.payArea .tag{
    font-size: 12px;
    font-family: "DM Sans";
    font-weight: 150;
    letter-spacing: 1px;
}

.weatherCard{
    position: absolute;
    right:23%;
    z-index:2;
    background: linear-gradient(to top right, #9e3e1d, #dd763c);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 
    0 4px 10px rgba(158, 62, 29, 0.15),
    0 15px 30px rgba(158, 62, 29,0.20),
    0 30px 60px rgba(158, 62, 29, 0.3);
    transform: rotate(4deg);

    transform-origin:bottom left;
}

.weatherCard .sun{
    position: absolute;
    top:30px;
    right: 18px;
}

.wc-top{
    font-size:11px;
    font-family: "DM Sans";
    font-weight: 400;
    color: hsl(21, 56%, 68%);
    padding-top:37px;
}

.wc-middle{
    margin-bottom:20px;
}

.wc-middle .start{
    color: hsl(21, 56%, 78%);
    font-size:18px;
    font-family: "Fraunces-ltalic";
    margin-bottom: 5px; 
}

.wc-middle .bold{
    color:white;
    font-size: 38px;
    font-family: "Fraunces-ltalic";
    margin-bottom: 20px;
}

.wc-middle .body{
    font-family: "DM Sans";
    font-size:14px;
    color:hsl(21, 56%, 74%);
}

.wc-bottom{
    margin-bottom: 20px;
}

.wc-bottom .small{
    font-size:10px;
    color: hsl(21, 56%, 68%);
    margin-bottom: 10px;
}

.wc-bottom .bold{
    color: hsl(21, 56%, 85%);
    font-size:20px;
    font-family: "Fraunces-Variable";
}

.content .tip{
    align-self: flex-end;
    justify-self: center;
    display: flex;
    gap:9px;
    align-items: center;
    font-size: 8px;
    font-family:"DM Sans";
    color: #9c928a;
    margin: 0 auto;
    letter-spacing: 1px;
    word-spacing: 3px;
} 

.content .tip::after,.content .tip::before{
    background-color: #C55A3F;
    content: "";
    width: 5px;
    height: 5px;
    display: block;
    transform: rotate(45deg);
    border-radius: 1px;
}

@media (max-width:768px){
    .content{

        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top:60px;
    }
    .card{
        position: relative;
        width: 85%;
        aspect-ratio:0.80/1;
        transition:none;
    }
    .dataCard{
        left:0%;
        transform: rotate(-1deg);
    }
    .weatherCard{
        right:0%;
        transform: rotate(1deg);
        margin-bottom: 20px;
    }
}
</style>