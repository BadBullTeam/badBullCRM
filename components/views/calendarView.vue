<template>
    <div class="calendar">
        <div class="mouth">
            <button @click="previousMonth()">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.535 3.51489L7.05005 11.9999L15.535 20.4849L16.95 19.0709L9.87805 11.9999L16.95 4.92889L15.535 3.51489Z" fill="#323232"/>
                </svg>
            </button>
            <span>{{ months[currMonth] }} {{ currYear }}</span>
            <button @click="nextMonth()">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.46495 20.4851L16.95 12.0001L8.46495 3.51511L7.04995 4.92911L14.122 12.0001L7.04995 19.0711L8.46495 20.4851Z" fill="#323232"/>
                </svg>
            </button>
        </div>
        <div class="dayOfWeen">
            <div>Пн</div>
            <div>Вт</div>
            <div>Ср</div>
            <div>Чт</div>
            <div>Пт</div>
            <div>Сб</div>
            <div>Вс</div>
        </div>
        <div class="days">
            <div class="day" v-for="day in calendar" :key="day.id" :class="day.type">{{ day.day }}</div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{
            months : ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            DaysOfWeek : ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'],
            currMonth: false,
            currYear: false,
            currDay: false,
            calendar:[]
            
        }
    },
    beforeMount(){
        var d = new Date();
        this.currMonth = d.getMonth();
        this.currYear = d.getFullYear();
        this.currDay = d.getDate();
        this.showcurr();
    },
    methods:{
        showcurr(){
            this.calendar = []
            this.showMonth(this.currYear, this.currMonth);
        },

        previousMonth(){
            if ( this.currMonth == 0 ) {
                this.currMonth = 11;
                this.currYear = this.currYear - 1;
            }
            else {
                this.currMonth = this.currMonth - 1;
            }
            this.showcurr();
        },

        nextMonth(){
            if ( this.currMonth == 11 ) {
                this.currMonth = 0;
                this.currYear = this.currYear + 1;
            }
            else {
                this.currMonth = this.currMonth + 1;
            }
            this.showcurr();
        },

        showMonth(y, m){
            var d = new Date()

            let firstDayOfMonth = new Date(y, m, 7).getDay()
            let lastDateOfMonth =  new Date(y, m+1, 0).getDate()
            let lastDayOfLastMonth = m == 0 ? new Date(y-1, 11, 0).getDate() : new Date(y, m, 0).getDate();
            
            var i=1;
            do {
                var dow = new Date(y, m, i);
                if ( i == 1 ) {
                    
                    var k = lastDayOfLastMonth - firstDayOfMonth+1;
                    for(var j=0; j < firstDayOfMonth; j++) {
                        this.calendar.push({id: `${k}not-current`, day: k, type: 'not-current'})
                        k++;
                    }
                }
                var chk = new Date();
                var chkY = chk.getFullYear();
                var chkM = chk.getMonth();
                if (chkY == this.currYear && chkM == this.currMonth && i == this.currDay) {
                    this.calendar.push({id: `${i}today`, day: i, type: 'today'})
                } else {
                    if(dow.getDay() == 0 || dow.getDay() == 6 ){
                        this.calendar.push({id: `${i}weekend`, day: i, type: 'weekend'})
                    }
                    else{
                        this.calendar.push({id: `${i}normal`, day: i, type: 'normal'})
                    }
                    
                }
                dow = dow.getDay()
                if ( i == lastDateOfMonth ) {
                    var k=1;
                    for(dow; dow < 7; dow++) {
                        this.calendar.push({id: `${k}not-current`, day: k, type: 'not-current'})
                        k++;
                    }
                }
                i++;
            }while(i <= lastDateOfMonth);
        }
    }
}
</script>

<style>
    .calendar{
        display: flex;
        flex-direction: column;
        gap: .5rem;
        width: 21rem;
        margin: 0 auto;
    }

    .mouth{
        display: flex;
        justify-content: space-between;
        font-size: 1.2rem;
        margin-top: .5rem;
    }

    .mouth button{
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .dayOfWeen{
        display: flex;
        padding-bottom: .5rem;
        border-bottom: 1px black solid;
    }

    .dayOfWeen div{
        text-align: center;
        width: 3rem;
        font-weight: bold;
        
    }

    .days{
        display: flex;
        flex-wrap: wrap;
    }

    .day{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 3rem;
        width: 3rem;
    }

    .day.normal{
        font-weight: bolder;
    }

    .day.today{
        border-radius: 50%;
        color: white;
        font-weight: bolder;
        background-color: #ee3f3f;
    }

    .day.weekend{
        color: #ee3f3f;
        font-weight: bolder;
    }
</style>