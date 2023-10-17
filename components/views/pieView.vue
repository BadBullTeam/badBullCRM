<template>
    <div class="pie">
        <div class="pie-graphs">
            <!-- <div class="pie-graph" :style="{'--color': '#f3f3f3', '--ng': '360deg' }"></div> -->
            <div class="pie-graph" v-for="graph in graphs" :key="graph.id" :style="{'--color': graph.color, '--ng': 360 *(graph.count / graphs[0].count) + 'deg' }"></div>
        </div>
        <div class="graph-titles">
            <div class="graph-title" v-for="graph in graphs" :key="graph.id">
                <div class="graph-color" :style="{'--color': graph.color}"></div>
                <span class="graph-name">{{ graph.title }}</span> -
                <span class="graph-precents">{{ Math.floor(graph.count / graphs[0].count * 100) }}% - {{ graph.count }}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            graphs:[
                {
                    id:0,
                    color: '#EEB8F9',
                    count: 320,
                    title: 'График 1'
                },
                {
                    id:1,
                    color: '#11D4B4',
                    count: 200,
                    title: 'График 2'
                },
                {
                    id:2,
                    color: '#7F1CF9',
                    count: 60,
                    title: 'График 3'
                }
            ]
        }
    }
}
</script>
<style>
    .pie{
        width: 100%;
        height: 15rem;   
        padding-top: 1rem; 
        
        --thickness: 1.5rem;
        --_inner: calc(70% - var(--thickness));
        --_outer: calc(var(--_inner) + 1px);
        display: flex;
        align-items: center;
        gap: 1rem;
        flex-direction: column;
    }

    .pie-graphs{
        width: 10rem;
        min-height: 10rem; 
        position: relative;
        --color: #f3f3f3;
        --ng: 0deg;
    }

    .pie-graph{
        position: absolute;
        top: 0;
        left: 0;
        width: 10rem;
        height: 10rem; 
        border-radius: 50%;
        mask: radial-gradient(circle, #0000 var(--_inner), #000 var(--_outer));
        background-image: conic-gradient(var(--color), var(--color) var(--ng), #0000 0);
        transition: .3s;
    }

    .graph-titles{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
        padding: .5rem;
    }

    .graph-title{
        display: flex;
        gap: .5rem;
        align-items: center;
    }

    .graph-color{
        width: 1rem;
        height: 1rem;
        border-radius: .2rem;
        background-color: var(--color);
    }

    .graph-precents{
        font-weight: bold;
    }
</style>