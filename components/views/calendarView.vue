<template>
    <div class="calendar">
        <table>
            <tr>
                <th>Пн</th>
                <th>Вт</th>
                <th>Ср</th>
                <th>Чт</th>
                <th>Пт</th>
                <th>Сб</th>
                <th>Вс</th>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data(){
        return{
            months : ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            DaysOfWeek : ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'],
            currMonth,
            currYear,
            currDay,
        }
    },
    beforeMount(){
        var d = new Date();
        this.currMonth = d.getMonth();
        this.currYear = d.getFullYear();
        this.currDay = d.getDate();
    },
    methods:{
        showcurr : () => {
            this.showMonth(this.currYear, this.currMonth);
        },

        previousMonth : () => {
            if ( this.currMonth == 0 ) {
                this.currMonth = 11;
                this.currYear = this.currYear - 1;
            }
            else {
                this.currMonth = this.currMonth - 1;
            }
            this.showcurr();
        },

        nextMonth : () => {
            if ( this.currMonth == 11 ) {
                this.currMonth = 0;
                this.currYear = this.currYear + 1;
            }
            else {
                this.currMonth = this.currMonth + 1;
            }
            this.showcurr();
        },

        showMonth : (y, m) => {
            var d = new Date()
            // Первый день недели в выбранном месяце 
            firstDayOfMonth = new Date(y, m, 7).getDay()
            // Последний день выбранного месяца
            lastDateOfMonth =  new Date(y, m+1, 0).getDate()
            // Последний день предыдущего месяца
            lastDayOfLastMonth = m == 0 ? new Date(y-1, 11, 0).getDate() : new Date(y, m, 0).getDate();
            var html = '<table>';
            // Запись выбранного месяца и года
            html += '<thead><tr>';
            html += '<td colspan="7">' + this.Months[m] + ' ' + y + '</td>';
            html += '</tr></thead>';
            // заголовок дней недели
            html += '<tr class="days">';
            for(var i=0; i < this.DaysOfWeek.length;i++) {
                html += '<td>' + this.DaysOfWeek[i] + '</td>';
            }
            html += '</tr>';
            // Записываем дни
            var i=1;
            do {
                var dow = new Date(y, m, i).getDay();
                // Начать новую строку в понедельник
                if ( dow == 1 ) {
                    html += '<tr>';
                }
                // Если первый день недели не понедельник показать последние дни предыдущего месяца
                else if ( i == 1 ) {
                    html += '<tr>';
                    var k = lastDayOfLastMonth - firstDayOfMonth+1;
                for(var j=0; j < firstDayOfMonth; j++) {
                    html += '<td class="not-current">' + k + '</td>';
                    k++;
                }
                }
                // Записываем текущий день в цикл
                var chk = new Date();
                var chkY = chk.getFullYear();
                var chkM = chk.getMonth();
                if (chkY == this.currYear && chkM == this.currMonth && i == this.currDay) {
                    html += '<td class="today">' + i + '</td>';
                } else {
                    html += '<td class="normal">' + i + '</td>';
                }
                // закрыть строку в воскресенье
                if ( dow == 0 ) {
                    html += '</tr>';
                }
                // Если последний день месяца не воскресенье, показать первые дни следующего месяца
                else if ( i == lastDateOfMonth ) {
                    var k=1;
                    for(dow; dow < 7; dow++) {
                        html += '<td class="not-current">' + k + '</td>';
                        k++;
                    }
                }
                i++;
            }while(i <= lastDateOfMonth);
            // Конец таблицы
            html += '</table>';
            // Записываем HTML в div
            document.getElementById(this.divId).innerHTML = html;
            }
    }
}
</script>

<style>
    
</style>