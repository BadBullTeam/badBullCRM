<template>
        <div class="guest-page" :class="[color, theme, edge]">
            <layouts-header-index :theme="theme" @activateSign="activateSign"/>
            <transition name="auth">
                <auth-signIn v-if="isSignIn" :isSignIn="isSignIn" @activateSign="activateSign"/>
            </transition>
            <transition name="auth">
                <auth-signUp v-if="isSignUp" :isSignUp="isSignUp" @activateSign="activateSign"/>
            </transition>
            <div class="theme-bg"></div>
            <article class="promo">
                <div class="promo-content">
                    <div class="promo-settings">
                        <div class="edge-buttons">
                            <button @click="setEdges('straight')" class="selected straight">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2.5" y="2.5" width="25" height="25" stroke-width="5"/>
                                </svg>
                            </button>
                            <button @click="setEdges('rounded')" class=" rounded">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2.5" y="2.5" width="25" height="25" rx="5.5" stroke-width="5"/>
                                </svg>
                            </button>
                        </div>
                        <div class="color-buttons">
                            <ul class="color-buttons-items">
                                <li class="color-buttons-item"><button @click="setColor('red')" class="color-bg red"></button></li>
                                <li class="color-buttons-item"><button @click="setColor('orange')" class="color-bg orange"></button></li>
                                <li class="color-buttons-item"><button @click="setColor('lime')" class="color-bg lime"></button></li>
                                <li class="color-buttons-item"><button @click="setColor('green')" class="color-bg green"></button></li>
                                <li class="color-buttons-item"><button @click="setColor('azure')" class="color-bg azure"></button></li>
                                <li class="color-buttons-item"><button @click="setColor('aque')" class="color-bg aque selected"></button></li>
                                <li class="color-buttons-item"><button @click="setColor('blue')" class="color-bg blue"></button></li>
                                <li class="color-buttons-item"><button @click="setColor('purple')" class="color-bg purple"></button></li>
                                <li class="color-buttons-item"><button @click="setColor('pink')" class="color-bg pink"></button></li>
                            </ul>
                        </div>
                        <div class="theme-button" @click="setTheme()">
                            <svg v-if="theme == 'light'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.998 22H10.998V19H12.998V22ZM18.362 19.778L16.241 17.657L17.655 16.243L19.777 18.365L18.364 19.778H18.362ZM5.63399 19.778L4.21899 18.364L6.33899 16.242L7.75399 17.656L5.63399 19.777V19.778ZM11.998 17.007C9.23296 17.0059 6.99225 14.7637 6.99299 11.9987C6.99372 9.23364 9.23562 6.99263 12.0007 6.993C14.7657 6.99337 17.007 9.23497 17.007 12C17.0042 14.7649 14.7629 17.0053 11.998 17.007ZM11.998 8.993C10.3375 8.9941 8.99225 10.3409 8.99299 12.0013C8.99372 13.6618 10.3402 15.0074 12.0007 15.007C13.6611 15.0066 15.007 13.6605 15.007 12C15.0053 10.3392 13.6588 8.99355 11.998 8.993ZM21.998 13H18.998V11H21.998V13ZM4.99799 13H1.99799V11H4.99799V13ZM17.654 7.758L16.241 6.343L18.362 4.221L19.777 5.636L17.655 7.757L17.654 7.758ZM6.34099 7.758L4.22099 5.637L5.63599 4.223L7.75599 6.345L6.34199 7.757L6.34099 7.758ZM12.998 5H10.998V2H12.998V5Z"/>
                            </svg>
                            <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.248 16.9971C18.1656 16.9989 18.0829 16.9999 18 16.9999C11.9249 16.9999 7 12.075 7 5.99987C7 5.91697 7.00092 5.83428 7.00275 5.7518C5.17211 7.21839 4 9.47327 4 11.9998C4 16.4181 7.58172 19.9998 12 19.9998C14.5266 19.9998 16.7814 18.8277 18.248 16.9971ZM19.4661 14.881C18.989 14.9592 18.4992 14.9999 18 14.9999C13.0294 14.9999 9 10.9704 9 5.99987C9 5.50062 9.04065 5.01086 9.11882 4.53373C9.25094 3.72732 9.49024 2.95697 9.82162 2.23779C8.96026 2.42915 8.14073 2.73161 7.37882 3.12934C4.18215 4.79809 2 8.14413 2 11.9998C2 17.5227 6.47715 21.9998 12 21.9998C15.8557 21.9998 19.2017 19.8177 20.8705 16.6211C21.2682 15.8592 21.5707 15.0396 21.762 14.1783C21.0429 14.5096 20.2725 14.7489 19.4661 14.881Z"/>
                            </svg>
                        </div>
                    </div>
                    <h1>Создай CRM которую <br> хочешь <span>именно ты!</span></h1>
                    <button id="try-button" @mouseover="hoverButton" @click="test()" class="try-button">Попробовать</button>
                    <div class="buttons-bg">
                        <ul class="buttons-bg-items">
                            <li class="buttons-bg-item">
                                <div class="bg-item-content"></div>
                                <div class="bg-item-plus">
                                    <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="23.001" y="0.200195" width="19" height="64.6"/>
                                            <rect x="0.199219" y="42.0002" width="19" height="64.6" transform="rotate(-90 0.199219 42.0002)"/>
                                    </svg>
                                </div>
                            </li>
                            <li class="buttons-bg-item">
                                <div class="bg-item-content"></div>
                                <div class="bg-item-plus">
                                    <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="23.001" y="0.200195" width="19" height="64.6"/>
                                            <rect x="0.199219" y="42.0002" width="19" height="64.6" transform="rotate(-90 0.199219 42.0002)"/>
                                    </svg>
                                </div>
                            </li>
                            <li class="buttons-bg-item">
                                <div class="bg-item-content"></div>
                                <div class="bg-item-plus">
                                    <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="23.001" y="0.200195" width="19" height="64.6"/>
                                            <rect x="0.199219" y="42.0002" width="19" height="64.6" transform="rotate(-90 0.199219 42.0002)"/>
                                    </svg>
                                </div>
                            </li>
                            <li class="buttons-bg-item">
                                <div class="bg-item-content"></div>
                                <div class="bg-item-plus">
                                    <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="23.001" y="0.200195" width="19" height="64.6"/>
                                            <rect x="0.199219" y="42.0002" width="19" height="64.6" transform="rotate(-90 0.199219 42.0002)"/>
                                    </svg>

                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </article>
        </div>
</template>

<script>
import { useCrmStore } from '@/stores/crm'
import confetti from "canvas-confetti"
import axios from "axios"


export default{
    data(){
        return{
            color: 'aque',
            theme: 'light',
            edge: 'straight',
            isSignIn: false,
            isSignUp: false
        }
    },
    methods:{
        activateSign(sign){
            console.log(sign);
            if(sign == 'signin') this.isSignIn = true
            else if(sign == 'signup') this.isSignUp = true
            else if(sign == 'unsignin') this.isSignIn = false
            else if(sign == 'unsignup') this.isSignUp = false
        },
        setColor(clr){
            console.log(document.querySelector(`.color-bg.${clr}`).classList.contains('selected'));
            if(document.querySelector(`.color-bg.${clr}`).classList.contains('selected')){
                return
            }
            document.querySelector('.color-bg.selected').classList.remove('selected')
            this.color = clr
            document.querySelector(`.color-bg.${clr}`).classList.add('selected')
        },
        setEdges(edg){
            if(document.querySelector(`.edge-buttons .${edg}`).classList.contains('selected')){
                return
            }
            document.querySelector('.edge-buttons .selected').classList.remove('selected')
            this.edge = edg
            document.querySelector(`.edge-buttons .${edg}`).classList.add('selected')
        },
        setTheme(){
            if(this.theme == 'light'){
                this.theme = 'dark'
            }
            else{
                this.theme = 'light'
            }
            axios.get('http://26.249.118.112:3000/').then((res)=>{
                console.log(res);
            })
        },
        hoverButton(e){
            confetti({
                particleCount: 30,
                spread: 70,
                origin: { y: 0.6 }
            });
        },
        test(){
            if(!("Notification" in window)){
                alert("Не поддерживается")
            }
            else if(Notification.permission == "granted"){
                const notification = new Notification(
                    'LO SIENTO OCURRIO EL ERROR:',
                    {
                        icon: 'https://sun9-27.userapi.com/impg/u-l0ci4VIKQMQlkneE9CmP_4R6BDvHJDsa4fEw/j5zCm2cB_HA.jpg?size=736x484&quality=95&sign=f3957db263959da6452f9a006c319b13&type=album',
                        body: 'asd',
                    }
                );
                notification.onclick = ()=>{
                    console.log('clicked');
                    notification.close();
                }
            }
            else if(Notification.permission != "denied"){
                Notification.requestPermission((permission)=>{
                    if(permission == "granted"){
                        const notification = new Notification(
                            'LO SIENTO OCURRIO EL ERROR:',
                            {
                                icon: 'https://sun9-27.userapi.com/impg/u-l0ci4VIKQMQlkneE9CmP_4R6BDvHJDsa4fEw/j5zCm2cB_HA.jpg?size=736x484&quality=95&sign=f3957db263959da6452f9a006c319b13&type=album',
                                body: 'asd',
                            }
                        );
                        notification.onclick = ()=>{
                            console.log('clicked');
                            notification.close();
                        }
                    }
                })
            }
            
        
        }
    },
    beforeCreate(){
        useRoute().meta.layout = 'guest'
    }
}
</script>

<style scoped>
    .guest-page.light{
        --index-bg-color: #e3eeff;
        --text-color: black;
    }
    
    .guest-page.dark{
        --index-bg-color: #212121; 
        --text-color: white;
    }

    .guest-page.straight{
        --edge: 0rem;
    }
    .guest-page.rounded{
        --edge: 3rem;
    }


    .guest-page.red{
        --main-color: #ff5b5b; 
        --second-color: #fc8282;
        --btn-color: #49CC49;
    }
    .guest-page.orange{
        --main-color: #ffa05b; 
        --second-color: #fab889;
        --btn-color: #399E94;
    }
    .guest-page.lime{
        --main-color: #a4eb20; 
        --second-color: #d2ff7d;
        --btn-color: #CC1C7C;
    }
    .guest-page.green{
        --main-color: #22e436; 
        --second-color: #92ff9d;
        --btn-color: #FF3126;
    }
    .guest-page.azure{
        --main-color: #24f39d; 
        --second-color: #95fdd2;
        --btn-color: #FF6726;
    }
    .guest-page.aque{
        --main-color: #3888ff; 
        --second-color: #89b8ff;
        --btn-color: #FFAE24;
    }
    .guest-page.blue{
        --main-color: #5f5bff; 
        --second-color: #9492ff;
        --btn-color: #FFD03F;
    }
    .guest-page.purple{
        --main-color: #d45bff; 
        --second-color: #e190ff;
        --btn-color: #cbd446;
    }
    .guest-page.pink{
        --main-color: #ff5baa; 
        --second-color: #ff8bc3;
        --btn-color: #9ccf4a;
    }

    .promo{
        height: 100vh;
        margin: 0 8rem;
        padding-top: 15rem;
    }

    .theme-bg{
        position: fixed;
        z-index: 1;
        width: 0rem;
        height: 0rem;
        top: 50%;
        left: 50%;
        background-color: #212121;
        border-radius: 50rem;
        transition: .4s linear;
    }

    .guest-page.dark .theme-bg{
        width: 200vw;
        height: 200%;
        transform: translateX(-100vw) translateY(-50%);
    }

    .guest-page{
        background-color: #e3eeff;
        transition: .3s;
    }

    .promo-settings{
        height: 4rem;
        border: .3rem var(--main-color) solid;
        display: flex;
        transition: .3s;
        overflow: hidden;
        border-radius: var(--edge);
    }

    .promo-content{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4rem;
        position: relative;
        z-index: 2;
    }
    
    .promo-settings .theme-button{
        width: 5rem;
        height: 100%;
        background-color: var(--main-color);
    }

    .promo-settings .theme-button svg{
        width: 100%;
        height: 100%;
        fill: var(--index-bg-color);
    }

    .promo-settings .edge-buttons button{
        width: 5rem;
        height: 100%;
        border: none;
        background-color: var(--second-color);
        transition: .3s;
    }

    .promo-settings .edge-buttons button.selected{
        background-color: var(--main-color);
    }

    .promo-settings .edge-buttons button svg{
        stroke: var(--index-bg-color);
        transition: .3s;
    }

    .promo-settings .color-buttons{
        height: 100%;
        width: 14rem;
        display: flex;
    }   

    .promo-settings .color-buttons .color-buttons-items{
        background-color: #45484d;
        display: flex;
        margin: auto;
        width: 13.5rem;
        height: 1.5rem;
    }

    .promo-settings .color-buttons .color-buttons-item{
        width: 1.5rem;
        height: 1.5rem;
    }

    .promo-settings .color-buttons .color-buttons-item .color-bg{
        border: none;
        width: 100%;
        height: 100%;
        transform: scale(.6);
        transition: .3s;
    }

    .promo-settings .color-buttons .color-buttons-item .color-bg:hover{
        transform: scale(.8);
    }

    .promo-settings .color-buttons .color-buttons-item .color-bg.selected{
        transform: scale(1);
    }

    .promo-settings .color-buttons .color-buttons-item:nth-child(1) .color-bg{
        background-color: #FF5B5B;
    }
    .promo-settings .color-buttons .color-buttons-item:nth-child(2) .color-bg{
        background-color: #FFA05B;
    }
    .promo-settings .color-buttons .color-buttons-item:nth-child(3) .color-bg{
        background-color: #CBFF5B;
    }
    .promo-settings .color-buttons .color-buttons-item:nth-child(4) .color-bg{
        background-color: #5BFF6C;
    }
    .promo-settings .color-buttons .color-buttons-item:nth-child(5) .color-bg{
        background-color: #5BFFBA;
    }
    .promo-settings .color-buttons .color-buttons-item:nth-child(6) .color-bg{
        background-color: #3888FF;
    }
    .promo-settings .color-buttons .color-buttons-item:nth-child(7) .color-bg{
        background-color: #5F5BFF;
    }
    .promo-settings .color-buttons .color-buttons-item:nth-child(8) .color-bg{
        background-color: #D45BFF;
    }
    .promo-settings .color-buttons .color-buttons-item:nth-child(9) .color-bg{
        background-color: #FF5BAA;
    }


    .promo-content h1{
        color: black;
        font-size: 4rem;
        text-align: center;
        color: var(--text-color);
        transition: .3s;
    }

    .promo-content h1 span{
        color: var(--main-color);
        transition: .3s;
    }

    .promo-content .try-button{
        font-size: 1.5rem;
        width: 60%;
        font-weight: bold;
        padding: 1rem 0;
        border: none;
        background-color: var(--btn-color);
        cursor: pointer;
        transition: .3s;
        border-radius: var(--edge);
    }

    .promo-content .try-button:hover{
        transform: scale(.9);
    }

    .buttons-bg{
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
    }

    .buttons-bg-items{
        position: relative;
        width: 100%;
        height: 100%;
        z-index: -1;
    }

    .buttons-bg-item{
        position: absolute;
        width: 10rem;
        height: 10rem;
        background-color: var(--second-color);
        box-shadow: 0 .3rem 1rem .1rem rgba(0, 0, 0, .1);
        border-radius: var(--edge);
        transition: .3s;
        cursor: pointer;
    }

    .buttons-bg-item:nth-child(1){
        top: 0;
        left: 0;
        transform: scale(.7) translateX(-4rem);
    }
    .buttons-bg-item:nth-child(2){
        top: 0;
        right: 0;
        transform: scale(.4) translateX(-4rem);
    }
    .buttons-bg-item:nth-child(3){
        bottom: 0;
        left: 0;
        transform: scale(1.1);
    }
    .buttons-bg-item:nth-child(4){
        bottom: 0;
        right: 0;
        transform: scale(.9) translateX(4rem) translateY(-4rem);
    }

    .buttons-bg-item .bg-item-plus{
        width: 100%;
        height: 100%;
        display: flex;
    }

    .buttons-bg-item .bg-item-plus svg{
        width: 30%;
        height: 30%;
        margin: auto;
        fill: var(--index-bg-color);
        transition: .3s;
    }

    .auth-enter-active,
    .auth-leave-active {
        transition: 0.2s;
    }

    .auth-enter-from,
    .auth-leave-to {
        opacity: 0;
    }

</style>