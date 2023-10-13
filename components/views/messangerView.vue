<template>
    <div class="messanger">
        <div class="messanger-chats">

        </div>
        <div class="messanger-active_chat">
            <ul class="active_chat-messages">
                <li class="active_chat-message recipient">hi</li>
                <li class="active_chat-message sender">hello</li>
            </ul>
            <div class="active_chat-send">
                <ui-inputUI/>
                <ui-buttonUI>
                    Отправить
                </ui-buttonUI>
            </div> 
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    .messanger{
        display: flex;
        justify-content: space-between;
        height: 65vh;
    }

    .messanger-chats{
        background-color: #100f13;
        width: 20%;
        height: 100%;
    }

    .messanger-active_chat{
        background-color: #100f13;
        width: 77%;
        height: 100%;
        position: relative;
    }

    .active_chat-messages{
        display: flex;
        flex-direction: column;
        padding: 2rem;
        gap: 1rem;
    }

    .active_chat-message{
        padding: .5rem 1rem;
        /* border-radius: .5rem; */
        background-color: #282830;
        position: relative;
        align-self: flex-start;
    }

    .active_chat-message.recipient::after{
        content: ''; 
        position: absolute;
        left: -.4rem; bottom: 0; 
        border: .4rem solid transparent; 
        border-right: .4rem solid #282830;
        border-bottom: .4rem solid #282830;
    }

    .active_chat-message.sender{
        background-color: #1cba7b;
        align-self: flex-end;
    }

    .active_chat-message.sender::after{
        content: ''; 
        position: absolute;
        right: -.4rem; 
        bottom: 0;
        border: .4rem solid transparent; 
        border-left: .4rem solid #1cba7b;
        border-bottom: .4rem solid #1cba7b;
    }

    .active_chat-send{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        display: flex;
        padding: 2rem;
        backdrop-filter: blur(1rem);
        background-color: rgba(0, 0, 0, .3);
    }

</style>