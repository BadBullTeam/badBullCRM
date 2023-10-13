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
    }

    .taskmanager-task{
        height: 100%;
        min-width: 20rem;
        background-color: #121212;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4rem;
    }

    .subtasks{
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .subtask{
        background-color: #100f13;
        width: 100%;
        height: 12rem;
        padding: 2rem;
        overflow: hidden;
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

    .task-until{
        font-size: .8rem;
        color: #888;
    }

    .taskmanager .subtask-title{
        max-width: 100%;
        
    }

    .taskmanager .subtask-title span{
        overflow-wrap: break-word;
    }
</style>