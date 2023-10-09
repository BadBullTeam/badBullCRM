<template>
    <div class="table-ui">
        <div class="table-search">
            <input type="text" placeholder="Поиск" @input="search">
        </div>
        <div class="table-ui-content" @mousedown="tableResize" @mouseup="tableResize" @mousemove="tableResize" @mouseleave="tableResize">
            <table cellpadding="0" cellspacing="0">
                <tr>
                    <th v-for="th in tableData.tableHeader" :key="th.id" class="table-ui-header">
                        {{ th.translate }}
                        <button  class="table-resize"></button>
                    </th>
                </tr>
                <TransitionGroup name="rows">
                    <tr v-for="tr in searchedTableData" :key="tr.id" @click="openPopup(tr)">
                        <td v-for="[key, value] in Object.entries(tr)" :key="key">
                            {{ value }}
                        </td>
                    </tr>
                </TransitionGroup>
            </table>
        </div>
        <Transition name="popupTable">
            <div class="table-popup" v-if="isOpenedPopup" @click="isOpenedPopup = false">
                <div class="table-popup_contant" @click.stop>
                    <h3>Запись номер: {{ selectedRow.id }}</h3>
                    <div class="table-popup_contant-row" v-for="([key, value]) in Object.entries(selectedRow)" :key="key">
                        <span>{{ tableData.tableHeader.filter((row)=> key == row.name)[0].translate  }}: </span>
                        <p>{{ value }}</p>
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script>
export default {
    methods:{
        search(e){
            let searchText = e.target.value
            this.searchedTableData = this.tableData.data.filter((row)=> row.theme.indexOf(searchText) > -1)
        },
        openPopup(obj){
            this.selectedRow = obj
            this.isOpenedPopup = true
        },
        tableResize(e){
            e.preventDefault()
            if (e.type === "mousedown") {
                this.tMouse.isMouseDown = true;
                let element = e.target.parentElement;
                if(!element.classList.contains('table-ui-header')){
                    console.log(false);
                    return
                } 
                let th = element
                this.tMouse.target = th;
                this.tMouse.targetWidth = th.clientWidth;
                this.tMouse.targetPosX = th.getBoundingClientRect().x;
                
            }
            if (e.type === "mouseup" || e.type == "mouseleave"){
                this.tMouse = {
                    isMouseDown: false,
                    target: false,
                    targetWidth: false,
                    targetPosX: false
                };
            } 
            if (e.type === "mousemove") {
                if (!this.tMouse.target || !this.tMouse.isMouseDown) return false;
                let size = (e.clientX - this.tMouse.targetWidth) - this.tMouse.targetPosX;
                this.tMouse.target.style.width = this.tMouse.targetWidth + size + "px";
            }
        }
    },
    watch:{
        searchedTableData(){
            deep: true
        },
        selectedRow(){
            deep: true
        }
    },

    data(){
        return{
            selectedRow: {
                        id: 3,
                        date: '04.09.2023 13:57',
                        theme: 'js',
                        text: 'Нужно разработать фронтенд приложение на нукст джс чтобы было пиздатое и Гога завидывал что не пошёл с нами',
                        requester: 'Лукашкин Владислав Евгеньевич',
                        responser: 'Махов Дмитрий Андреевич'
                    },
            isOpenedPopup: false,
            tMouse: {
                isMouseDown: false,
                target: false,
                targetWidth: false,
                targetPosX: false
            },
            tableData:{
                tableHeader:[
                    {
                        id: 0,
                        name: 'id',
                        translate: 'Номер'
                    },
                    {
                        id: 1,
                        name: 'date',
                        translate: 'Дата'
                    },
                    {
                        id: 2,
                        name: 'theme',
                        translate: 'Тема'
                    },
                    {
                        id: 3,
                        name: 'text',
                        translate: 'Сообщение'
                    },
                    {
                        id: 4,
                        name: 'requester',
                        translate: 'Отправитель'
                    },
                    {
                        id: 5,
                        name: 'responser',
                        translate: 'Исполнитель'
                    }
                ],
                data:[
                    {
                        id: 0,
                        date: '04.09.2023 13:57',
                        theme: 'backend приложение',
                        text: 'Нужно разработать фронтенд приложение на нукст джс чтобы было пиздатое и Гога завидывал что не пошёл с нами',
                        requester: 'Лукашкин Владислав Евгеньевич',
                        responser: 'Махов Дмитрий Андреевич'
                    },
                    {
                        id: 1,
                        date: '04.09.2023 13:57',
                        theme: 'frontend приложение',
                        text: 'Нужно разработать фронтенд приложение на нукст джс чтобы было пиздатое и Гога завидывал что не пошёл с нами',
                        requester: 'Лукашкин Владислав Евгеньевич',
                        responser: 'Махов Дмитрий Андреевич'
                    },
                    {
                        id: 2,
                        date: '04.09.2023 13:57',
                        theme: 'mongo',
                        text: 'Нужно разработать фронтенд приложение на нукст джс чтобы было пиздатое и Гога завидывал что не пошёл с нами',
                        requester: 'Лукашкин Владислав Евгеньевич',
                        responser: 'Махов Дмитрий Андреевич'
                    },
                    {
                        id: 3,
                        date: '04.09.2023 13:57',
                        theme: 'js',
                        text: 'Нужно разработать фронтенд приложение на нукст джс чтобы было пиздатое и Гога завидывал что не пошёл с нами',
                        requester: 'Лукашкин Владислав Евгеньевич',
                        responser: 'Махов Дмитрий Андреевич'
                    },

                ]
            },
            searchedTableData:[
            {
                        id: 0,
                        date: '04.09.2023 13:57',
                        theme: 'backend приложение',
                        text: 'Нужно разработать фронтенд приложение на нукст джс чтобы было пиздатое и Гога завидывал что не пошёл с нами',
                        requester: 'Лукашкин Владислав Евгеньевич',
                        responser: 'Махов Дмитрий Андреевич'
                    },
                    {
                        id: 1,
                        date: '04.09.2023 13:57',
                        theme: 'frontend приложение',
                        text: 'Нужно разработать фронтенд приложение на нукст джс чтобы было пиздатое и Гога завидывал что не пошёл с нами',
                        requester: 'Лукашкин Владислав Евгеньевич',
                        responser: 'Махов Дмитрий Андреевич'
                    },
                    {
                        id: 2,
                        date: '04.09.2023 13:57',
                        theme: 'mongo',
                        text: 'Нужно разработать фронтенд приложение на нукст джс чтобы было пиздатое и Гога завидывал что не пошёл с нами',
                        requester: 'Лукашкин Владислав Евгеньевич',
                        responser: 'Махов Дмитрий Андреевич'
                    },
                    {
                        id: 3,
                        date: '04.09.2023 13:57',
                        theme: 'js',
                        text: 'Нужно разработать фронтенд приложение на нукст джс чтобы было пиздатое и Гога завидывал что не пошёл с нами',
                        requester: 'Лукашкин Владислав Евгеньевич',
                        responser: 'Махов Дмитрий Андреевич'
                    },
            ]
        }
    }
}
</script>

<style>
    .table-ui-content{
        margin-top: 2rem;
    }

    table{
        color: white;
        display: block;
        width: 100%;
        overflow: auto;
    }

    tr:nth-child(even){
        background-color: #313131;
        
    }

    tr{
        cursor: pointer;
    }

    td{
        padding: .5rem;
        max-width: 16rem; 
        min-width: 1rem;
        white-space: nowrap; 
        word-wrap: break-word;
        overflow: hidden; 
        text-overflow: ellipsis;
    }

    .table-ui th{
        padding: .5rem;
        border-bottom: 2px solid #424242;
        position: relative;
    }

    .table-ui th .table-resize{
        cursor:col-resize;
        position: absolute;
        right: -0.25rem;
        top: 0;
        width: .5rem;
        height: 100%;
        z-index: 2;
        opacity: .05;
        background-color: #888;
        border: none;
    }

    .table-search{
        padding: 1rem;
        background-color: #100f13;
    }

    .table-search input{
        width: 100%;
        outline: none;
        background-color: transparent;
        border: none;

    }

    .rows-enter-active,
    .rows-leave-active {
        transition: all 0.3s ease;
    }
    .rows-enter-from,
    .rows-leave-to {
        opacity: 0;
    }

    .table-popup{
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        z-index: 10;
        background-color: rgba(0, 0, 0, .3);
        backdrop-filter: blur(1rem);
    }

    .table-popup .table-popup_contant{
        margin: auto;
        background-color: #100f13;
        padding: 3rem;
        display: flex;
        flex-direction: column;
        gap: .5rem;

        transition: .3s;
    }

    .table-popup .table-popup_contant h3{
        font-size: 1.5rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid #313131;
        margin-bottom: 1rem;
    }

    .table-popup_contant-row{
        display: flex;
        gap: 1rem;
    }

    .table-popup_contant-row span{
        font-weight: bold;
    }

    
    .popupTable-enter-active,
    .popupTable-leave-active {
        transition: all 0.3s ease;
    }
    .popupTable-enter-from,
    .popupTable-leave-to {
        opacity: 0;
    }

    .popupTable-enter-from .table-popup_contant,
    .popupTable-leave-to .table-popup_contant{
        transform: translateY(40%);
    }

    .popupTable-enter-to .table-popup_contant,
    .popupTable-leave-from .table-popup_contant{
        transform: translateY(0);
    }
    
</style>