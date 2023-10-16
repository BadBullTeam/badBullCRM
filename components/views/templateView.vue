<template>
    <div class="component" :class="component.size == 1 ? 'size-1' : component.size == 2 ? 'size-2' : component.size == 3 ? 'size-3' : 'size-0'">
        <div class="draggable">
            <div class="component-title">
                <div class="component-title-content">
                    <h2>{{ component.title }}</h2>
                    <button @click="contextMenu()">
                        <div class="btn-circle"></div>
                        <div class="btn-circle"></div>
                        <div class="btn-circle"></div>
                        <transition name="context-menu">
                            <ul @click.stop class="component-contextmenu" v-if="isContextMenu">
                                <li class="component-contextmenu-item" @click="selectSubmenu(1)">
                                    <span>Размер</span>
                                    <transition name="subcontext-menu">
                                        <ul @click.stop class="component-subcontextmenu" v-if="subContextMenu == 1">
                                            <li class="component-subcontextmenu-item" @click="changeSize(1)">1 блок</li>
                                            <li class="component-subcontextmenu-item" @click="changeSize(2)">2 блока</li>
                                            <li class="component-subcontextmenu-item" @click="changeSize(3)">3 блока</li>
                                        </ul>
                                    </transition>
                                </li>
                                <li class="component-contextmenu-item">
                                    <span>Добавить данные</span>
                                </li>
                            </ul>
                        </transition>
                    </button>
                </div>
            </div>
            <views-tableView v-if="component.type == 0"/>
            <views-testView v-if="component.type == -1"/>
            <views-messangerView v-if="component.type == 1"/>
            <views-taskmanagerView v-if="component.type == 2"/>
            <views-schedulerView v-if="component.type == 3"/>
            <views-pieView v-if="component.type == 4"/>
            <views-calendarView v-if="component.type == 5"/>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        component: {
            type: Object,
            require: true
        },
    },
    data(){
        return{
            isContextMenu: false,
            subContextMenu: 0
        }
    },
    methods:{
        onDragstart(e){
            
        },
        onDrop(){
            
        },
        contextMenu(){
            if(this.isContextMenu){
                this.isContextMenu = false
                this.subContextMenu = 0
            }
            else{
                this.isContextMenu = true
            }
        },
        selectSubmenu(id){
            if(this.subContextMenu == id){
                this.subContextMenu = 0
                return
            }
            this.subContextMenu = id
            
        },
        changeSize(size){
            this.component.size = size
            this.subContextMenu = 0
            this.isContextMenu = false
        }
    },
    watch:{
        size(){
            deep:true
        }
    }
}
</script>
<style>
    .component{
        height: 30rem;
        transition: .3s;
    }
    
    .component .draggable{
        background-color: #E9E9E9;
        height: 100%;
        width: 100%;
        border-radius: 2.5rem;
        padding-bottom: 2rem;
        
    }

    .component .component-title{
        padding: 2rem;
        background-color: #f3f3f3;
        height: 6rem;
        border-radius: 2.5rem 2.5rem 0 0;
    }

    .component .component-title-content{
        display: flex;
        justify-content: space-between;
        margin-bottom: 2rem;
        padding-bottom: 2rem;
        
    }

    .component .component-title-content button{
        background-color: transparent;
        border: none;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-around;
        border-radius: 50%;
        cursor: pointer;
        width: 1.8rem;
        height: 1.8rem;
        padding: .1rem;
        position: relative;
    }

    .btn-circle{
        width: .3rem;
        height: .3rem;
        background-color: #000;
    }

    .component-contextmenu{
        position: absolute;
        top: 100%;
        right: 0;
        background-color: #f3f3f3;
        box-shadow: 0 .5rem .5rem  rgba(0, 0, 0, .3);
        z-index: 2;
    }

    .component-contextmenu-item{
        padding: .5rem 1rem;
        position: relative;
    }

    .component-subcontextmenu{
        position: absolute;
        top: 0;
        left: 105%;
        background-color: #f3f3f3;
        box-shadow: 0 .5rem .5rem  rgba(0, 0, 0, .3);
        z-index: -2;
    }

    .component-subcontextmenu-item{
        padding: .5rem 1rem;
        text-wrap: nowrap;
    }

    .component.size-0{
        width: 79rem;
        height: auto;
    }
    .component.size-1{
        width: 25rem;
    }
    .component.size-2{
        width: 52rem;
    }
    .component.size-3{
        width: 79rem;
    }

    .component:last-child{
        justify-self: flex-start;
    }

    .context-menu-enter-active,
    .context-menu-leave-active {
        transition: 0.2s linear;
    }

    .context-menu-enter-from,
    .context-menu-leave-to {
        opacity: 0;
        transform: translateY(-25%);
    }

    .subcontext-menu-enter-active,
    .subcontext-menu-leave-active {
        transition: 0.2s linear;
    }

    .subcontext-menu-enter-from,
    .subcontext-menu-leave-to {
        opacity: 0;
        transform: translateX(-25%);
    }
</style>