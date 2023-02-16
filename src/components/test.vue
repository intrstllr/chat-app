<template>
    <div class="main">
        <div class="count">{{ count }}</div>
        <div class="btns">
            <button @click.prevent="zero" class="button">0</button>
            <button @click.prevent="plus" class="button">+</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            count: 0,
        };
    },
    methods: {
        plus() {
            this.count++;
            console.log(this.count);
        },
        zero() {
            this.count = 0;
        },
    },
};
</script>

<style>
.main {
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-self: center
}
.count {
    background-color: aqua;
    width: 250px;
    height: 250px;
    margin: auto;
}
.button {
    background-color: blue;
    height: 50px;
    width: 50px;
    margin: auto;
}
.btns{
    padding: auto;
    display: flex;
    flex-direction: column;
}
</style>
