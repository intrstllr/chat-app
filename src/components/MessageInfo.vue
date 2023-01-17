<template>
    <div class="message">
        <div class="message__time">{{new Date(message.date).toLocaleTimeString()}}</div>
        <div class="message__body">{{message.body}}</div>
    </div>
</template>

<script>
export default {
    props:{
        message: {
            type: Object,
            required: true,
        },
    },
}
</script>