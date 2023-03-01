<template>
    <div class="message">
        <!-- <div class="message_body">{{ mess.body }}</div> -->
        <!-- <div class="message_time">{{ new Date(mess.time).toLocaleTimeString() }}</div> -->
        <div class="btn_del" @click.prevent="console">X</div>
    </div>
</template>
<script>
export default {
    props: {
        mess: Object,
    },
    data(){
        return{}
    },
    methods:{
        console(){
        console.log(this.message)
        }
    }
};
</script>
<style>
.message {
    max-width: 65%;
    min-width: 30%;
    width: fit-content;
    background-color: antiquewhite;
    padding: 10px;
    border: 1px solid rgb(0, 0, 0, 0.5);
    border-radius: 5px;
    word-break: break-all;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 10px;
}
.message_time {
    user-select: none;
    padding: 5px 0px;
}
.btn_del {
    top: 4px;
    right: 4px;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    background-color: #faa;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    cursor: pointer;
}
.btn_del:hover {
    background-color: #f00;
}
</style>