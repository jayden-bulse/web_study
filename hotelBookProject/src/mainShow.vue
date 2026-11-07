<template>
    <div class="mainShow">
        <div class="top container">
            <div class="left">
                <div class="info">BOOKING · CONFIRMED</div>
                <div class="bold">
                    <div class="part1">Bienvenue, </div>
                    <div class="part2">{{name}}.</div>
                </div>
            </div>
            <div class="right">
                <button class="WhiteButton btn" :class="{'animationEffect':isAnimating == 1}" @click="tapBtn(1)">Print receipt</button>
                <button class="BlackButton btn" :class="{'animationEffect':isAnimating == 2}" @click="tapBtn(2)">Add to calendar</button>
            </div>
        </div>
        <div class="middle container">
            <FanCardArea></FanCardArea>
        </div>
        <div class="bottom container">
            <div class="card">
                <div class="card-top arrival">
                    <div class="imgData">
                        <img class ="bgArrival" src="../public/assets/images/icon-key.svg" alt="">
                       <div class="info">ARRIVAl</div>
                    </div>
                    <div class="order">
                        01
                    </div>
                </div>
                <div class="card-middle">
                    <div class="bold">
                        Check-in from 15:00
                    </div>
                    <div class="shadow">
                        Sat, 25 April
                    </div>
                </div>
                <div class="card-bottom">
                    <span>
                        Ring the brass bell by the blue door. 
                        If we're at the market, the key is in the terracotta pot
                        by the olive tree.
                    </span>
                </div>
            </div>
              <div class="card">
                <div class="card-top wifiColor">
                    <div class="imgData">
                        <img class="bgWifi" src="../public/assets/images/icon-wifi.svg" alt="">
                       <div class="info">WIFI</div>
                    </div>
                    <div class="order">
                        02
                    </div>
                </div>
                <div class="card-middle">
                    <div class="bold">
                        Le Soleil·Guest
                    </div>
                    <div class="shadow">
                        Password below
                    </div>
                </div>
                <div class="card-bottom-wifi">
                    <div class="data">
                        <div class="mark">NETWORK</div>
                        <div class="info">Le Soleil·Guest</div>
                    </div>
                    <div class="data">
                          <div class="mark">PASSWORD</div>
                        <div class="info">{{passWord}}<div class="btn" @click="tapCopy()">copy</div> </div>
                    </div>
                </div>
            </div>
             <div class="card">
                <div class="card-top breakfastColor">
                    <div class="imgData">
                        <img class="bgBreak" src="../public/assets/images/icon-breakfast.svg" alt="">
                       <div class="info">BREAKFAST</div>
                    </div>
                    <div class="order">
                        03
                    </div>
                </div>
                <div class="card-middle">
                    <div class="bold">
                        Served 8-10:30
                    </div>
                    <div class="shadow">
                        On the terrace
                    </div>
                </div>
                <div class="card-bottom">
                    <span>
                       Fresh figs, Marseille honey, pain au levain, 
                       and espresso. Gluten-free option? 
                       Leave a note the night before.
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineOptions({
    name: 'MainShow'
})
import FanCardArea from './FanCardArea.vue';
import { useUserStore } from './stores/myPinia.ts';
import {ref} from 'vue';

const name = useUserStore().username;

const passWord = "jayden-1030";

async function tapCopy(){
    try{
        await navigator.clipboard.writeText(passWord);
        alert('复制成功');
    }
    catch(error){
        console.error('复制失败',error);
        alert('复制失败请手动复制');
    }
}

let isAnimating = ref(0);

function tapBtn(num:number){
    isAnimating.value = 0;
    setTimeout(()=>{
        isAnimating.value = num;
        setTimeout(() => {
            isAnimating.value = 0;
        }, 300);
    },10)
}

</script>

<style scoped>

.container {
    padding-left: 40px;
    padding-right: 40px;
}

.mainShow {
    width: 82%;
}

.top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 13.5%;
    box-sizing: border-box;
}

.top .left {
    display: flex;
    flex-direction: column;
    padding-bottom: 8px;
}

.top .left .info {
    font-family: 'DM Sans';
    font-weight: 400;
    font-size: 12px;
    text-transform: uppercase;
    /* 全大写 */
    letter-spacing: 2px;
    color: #8C8C8C;
    /* 柔和的高级灰 */
    padding-bottom: 5px;
}

.top .left .bold {
    display: flex;
    font-size: 34px;
    font-family: "Fraunces-Variable";
    color: #2C2C2C;
}

.top .left .bold .part2 {
    font-family: 'Fraunces-ltalic';
    margin-left: 4px;
    color:rgb(176, 75, 43);
}

.top .right{
    width:21%;
    display: flex;
    justify-content: space-between;
}

.top .right button{
    font-size:13px;
    padding:8px 18px;
    border-radius: 18px;
    font-weight: 600;
}

.top .right .WhiteButton{
    background-color: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.08);
    color: #3C3C3C; 
}

.top .right .BlackButton{
    background-color: #000000;
    color: white;
}

.top .right .btn:hover{
    padding:10px 23px;
    cursor:pointer;
}

.middle{
    width:100%;
    box-sizing: border-box;
    height:50%;
}

.bottom{
    width:100%;
    height:36.5%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    justify-content: space-around;

}

.bottom .card{
    width:30%;
    aspect-ratio: 240/165;
    background-color: #fcfbf7;
    border-radius:4%;
    box-sizing: border-box;
    padding:20px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.arrival{
    color:#b53f15;
}

.wifiColor{
    color:#5767be;
}

.breakfastColor{
    color:#bf4b7e;
}

.bgArrival{
    background-color:#b53f15;
}

.bgWifi{
    background-color:#5767be;
}

.bgBreak{
    background-color:#bf4b7e;
}

.card-top{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.card-top .imgData{
    display: flex;
    align-items: center;
}


.bottom .card img{
    border-radius: 20%;
    padding:5px;
    margin-right: 8px;
}

.card-top .imgData .info{
    font-size:12px;
    font-weight: 600;
    letter-spacing: 1px;
    font-family: "DM Sans";
}

.card-top .order{
    font-family: "Fraunces-Variable";
    font-size:27px;
    font-weight: 500;
}


.card-middle .bold{
    font-size:30px;
    font-family: "Fraunces-Variable";
    font-weight: 500;
    margin-bottom: 6px;
}

.card-middle .shadow{
    font-size:11px;
    color:#b3afa9;
}

.card-bottom{
    font-size:14px;
    color:hsl(33, 6%, 30%);
}

.card-bottom-wifi{
    display: flex;
    flex-direction: column;
}

.card-bottom-wifi .data{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f2eeea;
    padding:6px 8px;
    border-radius: 8px;
    height: 20px;
}

.card-bottom-wifi .data{
    margin-bottom: 3px;
}

.card-bottom-wifi .data .mark{
    font-size:13px;
    color: #b1aca4;
}

.card-bottom-wifi .data .info{
    font-size:12px;
}

.card-bottom-wifi .data .info .btn{
    display: inline-flex;       
    text-align: center;
    align-items: center;     
    justify-content: center;
    margin-left:7px;
    border-radius: 15px;
    padding: 0px 5px;
    padding-top:1px;
    padding-bottom: 2px;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05);
    border:1px solid #b1aca4;
    color: #b1aca4;
}

.card-bottom-wifi .data .info .btn:hover{
    cursor:pointer;
}

@media (max-width:768px){
    .mainShow{
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .container {
    padding-left: 15px;
    padding-right: 15px;
    }       
    .top{
        flex-direction: column;
        align-items: flex-start;
        padding-top:15px;
        margin-bottom: 20px;
    }
    .top .right{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
    .top .right .btn{
        width:47%;
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

    .middle{
        display: flex;
        flex-direction: column;
        height: auto;
    }
    
    .bottom{
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;
    }

    .bottom .card{
        width:100%;
        margin-bottom: 20px;
        background-color: #fcfbf7;
    }
}

</style>