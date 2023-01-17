<template>
    <main class="page">
        <div class="page__container">
            <div class="page__body">
                <div class="page__leftside"></div>
                <MessageContainer class="page__rightside" :authUserId="user.id" :chatId="chatId" />
            </div>
        </div>
    </main>
</template>

<script>
import MessageContainer from "./MessageContainer.vue";
export default {
    components: {
        MessageContainer,
    },
    props: {
        user: {
            type: Object,
            required: true,
        },
    },

    data() {
        return {};
    },
};
</script>

<style></style>
