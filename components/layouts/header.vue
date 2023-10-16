<template>
    <header>
        <div class="search">
            <ui-inputUI :placeholder="'Search'" />
        </div>
        <div class="userinfo">
            <div class="messages"></div>
            <div class="user">
                <span>{{ user?.lastname + ' ' + user?.firstname }}</span>

                <img src="@/assets/img/72d6f09e-b8d0-4aa3-a985-28cc29d680a5.jfif" alt="">
            </div>
        </div>
    </header>
</template>

<script>
import { useCrmStore } from '@/stores/crm'

export default {
    data(){
        return{
            user: {}
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
        overflow: hidden;
    }

    .userinfo .user img{
        width: 3rem;
        height: 3rem;
        object-fit: cover;
        border: 2px #F3F3F3 solid;
        box-shadow: 0 0 4px 2px rgba(0, 0, 0, .3);
        border-radius: 50%;
    }
</style>