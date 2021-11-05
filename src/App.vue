<template>
    <router-view></router-view>
</template>
<script>
export default {
    name: 'Main',
    data() {
        return {
            transitionName: 'slide-left',
        };
    },
};
</script>
