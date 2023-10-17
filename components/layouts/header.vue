<template>
    <header>
        <div class="search">
            <ui-inputUI :placeholder="'Search'" />
        </div>
        <div class="userinfo">
            <div class="messages"></div>
            <div @click="isContext = !isContext" class="user">
                <span>{{ user?.lastname + ' ' + user?.firstname }}</span>
                <img src="@/assets/img/72d6f09e-b8d0-4aa3-a985-28cc29d680a5.jfif" alt="">
                <transition name="user-context-menu">
                    <ul  v-if="isContext" class="user-context-menu">
                        <li class="user-context-menu-item">Главная</li>
                        <li class="user-context-menu-item">Тема</li>
                        <li class="user-context-menu-item">Выйти</li>
                    </ul>
                </transition>
            </div>
        </div>
    </header>
</template>

<script>
import { useCrmStore } from '@/stores/crm'

export default {
    data(){
        return{
            user: {},
            isContext: false,
        }
    },
    beforeMount(){
        this.user = useCrmStore().user
    },
}
</script>

<style>
    header{
        height: 5rem;
        background-color: transparent;
        padding: 0 3rem;
        margin-left: 15rem;
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    .search{
        width: 52rem;
        height: 3rem;
        border-radius: 4rem;
        overflow: hidden;
    }

    .search .input-container{
        width: 100%;
        height: 100%;
    }

    .search .input-container input{
        width: 100%;
        height: 100%;
        border: none;
    }

    .userinfo{
        width: 25rem;
        height: 3rem;
        
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .userinfo .messages{
        height: 3rem;
        width: 3rem;
        background-color: #F3F3F3;
        border-radius: 50%;
    }

    .userinfo .user{
        padding: 0 0 0 1rem;
        display: flex;
        align-items: center;
        gap: 2rem;
        background-color: #F3F3F3;
        border-radius: 4rem;
        position: relative;
        cursor: pointer;
    }

    .userinfo .user img{
        width: 3rem;
        height: 3rem;
        object-fit: cover;
        border: 2px #F3F3F3 solid;
        box-shadow: 0 0 4px 2px rgba(0, 0, 0, .3);
        border-radius: 50%;
    }

    .user-context-menu{
        width: 100%;
        background-color: #F3F3F3;
        position: absolute;
        left: 0;
        top: 110%;
        padding: 1rem;
        border-radius: 2rem;
    }

    .user-context-menu .user-context-menu-item{
        width: 100%;
        padding: .5rem 1rem;
        text-align: center;
        border-bottom: 1px rgba(0, 0, 0, .3) solid;
        cursor: pointer;
        transition: .3s;
        
    }

    .user-context-menu .user-context-menu-item:first-child{
        border-radius: 1.5rem 1.5rem 0 0 ;
    }

    .user-context-menu .user-context-menu-item:last-child{
        border: none;
        border-radius: 0 0 1.5rem 1.5rem;
    }

    .user-context-menu .user-context-menu-item:hover{
        background-color: #b9b9b9;
    }

    .user-context-menu-enter-active,
    .user-context-menu-leave-active {
        transition: 0.2s;
    }

    .user-context-menu-enter-from,
    .user-context-menu-leave-to {
        opacity: 0;
        transform: translateY(-10%);
    }
</style>