<template>
    <aside class="sidebar">
        <ul class="sidebar-tabs">
            <li class="sidebar-tab" v-for="(tab, id) in tabs" :key="id" :class="tab.subtabs.length ? 'with-subtabs' : ''">
                <div class="sidebar-tab-title closed" v-if="tab.subtabs.length" @click="this.subtabsOpener">
                    <span>{{ tab.title }}</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.4851 15.535L12.0001 7.05005L3.51511 15.535L4.92911 16.95L12.0001 9.87805L19.0711 16.95L20.4851 15.535Z" fill="#323232"/>
                    </svg>

                </div>
                <NuxtLink :to="`/${user.id + tab.link}`" class="sidebar-tab-title" v-else>
                    <span>{{ tab.title }}</span>
                </NuxtLink>
                
                <ul class="sidebar-tab-subtabs" :style="{ height: tab.subtabs.length * 5 + 'rem' }" >
                    <li class="sidebar-tab-subtab" v-for="(subtab, id) in tab.subtabs" :key="id">
                        <NuxtLink :to="`/${user.id + tab.link + subtab.link}`" class="sidebar-tab-title subtab-title">
                            <span>{{ subtab.title }}</span>
                        </NuxtLink>
                    </li>
                </ul>
            </li>
            <li class="add-tab" :class="isAddTab ? 'close' : ''" @click="onAddTab()">
                <svg width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_0_2895)"><path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></g><defs><clipPath id="clip0_0_2895"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
            </li>
        </ul>
        <transition name="addtab">
            <div class="add-tab-popup" v-if="isAddTab">
                <span class="add-tab-title">Добавление новой вкладки</span>
                <hr>
                <ui-inputUI :value="newTab.title.value" @input="newTab.title.value = $event.target.value" :max="newTab.title.max" :tip="newTab.title.tip" :error="newTab.title.error" :title="newTab.title.title"/>
                <ui-inputUI :value="newTab.title_eng.value" @input="newTab.title_eng.value = $event.target.value" :max="newTab.title_eng.max" :tip="newTab.title_eng.tip" :error="newTab.title_eng.error" :title="newTab.title_eng.title"/>
                <ui-buttonUI @click="addTab()">Добавить вкладку</ui-buttonUI>
            </div>
        </transition>
    </aside>
</template>

<script>
import { useCrmStore } from '@/stores/crm'

export default {
    methods:{
        subtabsOpener(e){
            if (e.target.classList.contains('closed')){
                e.target.classList.remove('closed')
            }
            else{
                e.target.classList.add('closed')
            }
            
        },
        addTab(){
            let translit = this.newTab.title_eng.value
            if(this.newTab.title.value == ''){
                this.newTab.title.error = 'Данное поле не должно быть пустым'
                console.log(this.newTab.title.error);
                return
            }
            if(this.newTab.title_eng.value == ''){
                translit = useCrmStore().translit(this.newTab.title.value)
            }

            // Отправка всех данных на бекенд и бекенд отправляет id созданной вкладки

            useCrmStore().tabs.push(
                {
                    id: 0,
                    title: this.newTab.title.value,
                    name: translit,
                    link: `/${translit}`,
                    subtabs: [],
                    components: []
                }
            )

            this.newTab.title.value = ''
            this.newTab.title_eng.value = ''
            this.isAddTab = false
        },
        onAddTab(){
            this.isAddTab = !this.isAddTab
        }
    },
    data(){
        return{
            tabs: [],
            user:{},
            isAddTab: false,
            newTab:{
                title: {
                    title: 'Название вкладки:',
                    value: '',
                    tip: 'Название вкладки, которе будет отображаться во всех вкладках',
                    error: '',
                    max: 20
                },
                title_eng: {
                    title: 'Название вкладки ENG:',
                    value: '',
                    tip: 'Значение, которое будет отображаться в ссылке (если пустое будет транслит названия)',
                    error: '',
                    max: 20
                }
            }
        }
    },
    beforeMount(){
        this.tabs = useCrmStore().tabs
        this.user = useCrmStore().user
    },
}

</script>

<style scope>
    .sidebar{
        position: fixed;
        top: 0;
        left: 0;
        width: 15rem;
        height: 100vh;
        background-color: #F3F3F3;
        z-index: 10;
        padding-top: 15rem;
        border-radius: 0 2rem 2rem 0;
    }

    .sidebar-tabs{
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        height: 65%;
    }

    .sidebar-tabs::-webkit-scrollbar {
        width: 0px;
    }

    .sidebar-tab{
        width: 100%;
    }

    .sidebar-tab .sidebar-tab-title{
        display: flex;
        height: 5rem;
        width: 100%;
        font-size: 1.3rem;
        justify-content: center;
        align-items: center;
        transition: .3s;
        cursor: pointer;
        z-index: 2;
    }

    .with-subtabs .sidebar-tab-title svg{
        transform: scale(1.5) translateX(1rem) translateY(.1rem) rotate(180deg);
        transition: .3s;
    }

    .with-subtabs .subtab-title.sidebar-tab-title::after{
        content: "";
    }

    .sidebar-tab .sidebar-tab-title span{
        max-width: 70%;
        text-align: center;
        z-index: -1;
    }

    .sidebar-tab a:hover{
        box-shadow: inset -6rem 0px 5rem -5rem rgba(115, 71, 218, 0.6);
    }

    .router-link-active{
        box-shadow: inset 6rem 0px 5rem -5rem rgba(90, 219, 176, .6);
    }

    .sidebar-tab a.router-link-active:hover{
        box-shadow: inset 6rem 0px 5rem -5rem rgba(90, 219, 176, .6),
                    inset -6rem 0px 5rem -5rem rgba(115, 71, 218, 0.6);
    }

    .sidebar-tab-subtabs{
        overflow: hidden;
        transition: .3s;
    }

    .sidebar-tab-title.closed ~ .sidebar-tab-subtabs{
        border-top: none;
        height: 0rem !important;
        border-top: 0px solid #171320;
    }

    .with-subtabs .sidebar-tab-title.closed svg{
        transform: scale(1.5) translateX(1rem) translateY(.1rem) rotate(0);
    }

    .sidebar-tab-subtab .sidebar-tab-title{
        font-size: 1rem;
    }

    .add-tab{
        width: 100%;
        height: 5rem;
        background-color: #dddddd;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .add-tab svg{
        transform: scale(1.5);
        fill: white;
        transition: .3s;
    }

    .add-tab.close svg{
        transform: scale(1.5) rotate(135deg);
    }

    .add-tab-popup{
        position: absolute;
        top: 50%;
        left: 105%;
        transform: translateY(-50%);
        background-color: #F3F3F3;
        padding: 1rem;
        box-shadow: 0 .5rem .5rem 0 rgba(0, 0, 0, .3);
        display: flex;
        flex-direction: column;
        gap: 1rem;
        border-radius: 1rem;
    }

    .add-tab-popup hr{
        border: none;
        height: 1px;
        background-color: #5adbb0;
    }

    .addtab-enter-active,
    .addtab-leave-active {
        transition: 0.2s;
    }

    .addtab-enter-from,
    .addtab-leave-to {
        opacity: 0;
        transform: translateY(-50%) translateX(-25%);
    }

    .user-info{
        margin: 2rem 1rem;
        padding: 2rem 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        border-bottom: 1px solid #5adbb0;
    }

    .user-info img{
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        background-color: black;
        object-fit: cover;
    }
</style>