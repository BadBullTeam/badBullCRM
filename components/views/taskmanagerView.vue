<template>
    <ul class="taskmanager">
        <li class="taskmanager-task">
            <span class="task-title">Название поля</span>
            <ul class="subtasks">
                <li class="subtask">
                    <div class="user-task">
                        <span>ДМ</span>
                    </div>
                    <div class="task-until">14.10.2023 14:06</div>
                    <div class="subtask-title">
                        <span>Встретить мастера <br> по вентиляции</span>
                    </div>
                </li>
                <li class="subtask">
                    <div class="user-task">
                        <span>ДМ</span>
                    </div>
                    <div class="task-until">14.10.2023 14:06</div>
                    <div class="subtask-title">
                        <span>Встретить мастера <br> по вентиляции</span>
                    </div>
                </li>
                <li class="subtask">
                    <div class="user-task">
                        <span>ДМ</span>
                    </div>
                    <div class="task-until">14.10.2023 14:06</div>
                    <div class="subtask-title">
                        <span>Встретить мастера <br> по вентиляции</span>
                    </div>
                </li>
                <li class="subtask">
                    <div class="user-task">
                        <span>ДМ</span>
                    </div>
                    <div class="task-until">14.10.2023 14:06</div>
                    <div class="subtask-title">
                        <span>Встретить мастера <br> по вентиляции</span>
                    </div>
                </li>
            </ul>
        </li>
        <li class="taskmanager-task">
            <span class="task-title">Название поля</span>
            <ul class="subtasks">
                <li class="subtask">
                    <div class="user-task">
                        <span>ДМ</span>
                    </div>
                    <div class="task-until">14.10.2023 14:06</div>
                    <div class="subtask-title">
                        <span>Встретить мастера <br> по вентиляции</span>
                    </div>
                </li>
            </ul>
        </li>
        <li class="taskmanager-task">
            <span class="task-title">Название поля</span>
            <ul class="subtasks">
                <li class="subtask">
                    <div class="user-task">
                        <span>ДМ</span>
                    </div>
                    <div class="task-until">14.10.2023 14:06</div>
                    <div class="subtask-title">
                        <span>Встретить мастера <br> по вентиляции</span>
                    </div>
                </li>
            </ul>
        </li>
        <li class="taskmanager-task">
            <span class="task-title">Название поля</span>
            <ul class="subtasks">
                <li class="subtask">
                    <div class="user-task">
                        <span>ДМ</span>
                    </div>
                    <div class="task-until">14.10.2023 14:06</div>
                    <div class="subtask-title">
                        <span>Встретить мастера <br> по вентиляции</span>
                    </div>
                </li>
            </ul>
        </li>
        <li class="taskmanager-task">
            <span class="task-title">Название поля</span>
            <ul class="subtasks">
                <li class="subtask">
                    <div class="user-task">
                        <span>ДМ</span>
                    </div>
                    <div class="task-until">14.10.2023 14:06</div>
                    <div class="subtask-title">
                        <span>Встретить мастера <br> по вентиляции</span>
                    </div>
                </li>
            </ul>
        </li>
        <li class="taskmanager-task">
            <span class="task-title">Название поля</span>
            <ul class="subtasks">
                <li class="subtask">
                    <div class="user-task">
                        <span>ДМ</span>
                    </div>
                    <div class="task-until">14.10.2023 14:06</div>
                    <div class="subtask-title">
                        <span>Встретить мастера <br> по вентиляции</span>
                    </div>
                </li>
            </ul>
        </li>
        <li class="taskmanager-task">
            <span class="task-title">Название поля</span>
            <ul class="subtasks">
                <li class="subtask">
                    <div class="user-task">
                        <span>ДМ</span>
                    </div>
                    <div class="task-until">14.10.2023 14:06</div>
                    <div class="subtask-title">
                        <span>Встретить мастера <br> по вентиляции</span>
                    </div>
                </li>
            </ul>
        </li>
    </ul>
</template>

<script>
export default {
    
}
</script>

<style>
    .taskmanager{
        height: 40rem;
        width: 100%;
        display: flex;
        gap: 2rem;
        white-space: nowrap;
        overflow-x: auto;
        overflow-y: hidden;
        padding: 1rem;
    }

    .taskmanager-task{
        height: 100%;
        min-width: 20rem;
        background-color: #f3f3f3;
        border-radius: 1.5rem;
        box-shadow: 0 .4rem .6rem .2rem rgba(0, 0, 0, .1);
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4rem;
    }

    .subtasks{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;
        overflow-y: auto;
    }

    .subtask{
        background-color: #6f3eff;
        
        border-radius: 1.5rem;
        width: 100%;
        min-height: 12rem;
        padding: 2rem;
        overflow: hidden;
    }

    .subtasks::-webkit-scrollbar{
        width: 0;
    }

    .user-task{
        
        margin-bottom: 1rem;
        border: 1px white solid;
        border-radius: 50%;
        width: 3rem;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .user-task span{
        color: white;
    }

    .task-until{
        font-size: .8rem;
        color: #b9b9b9;
    }

    .taskmanager .subtask-title{
        max-width: 100%;
        font-size: 1.2rem;
        font-weight: bold;
        
    }

    .taskmanager .subtask-title span{
        color: white;
    }
</style>