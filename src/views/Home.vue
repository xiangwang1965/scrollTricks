<template>
    <div>
        <Profile> </Profile>
        <Work></Work>
        <Contact></Contact>
    </div>
</template>
<style>
.wrapper-pro {
    position: relative;
    height: 100vh;
    overflow: hidden;
    z-index: 1;
}
.con-main {
    position: relative;
}
</style>
<script>
import Profile from './Profile.vue';
import Work from './Work.vue';
import Contact from './Contact.vue';
import mix from '@/components/mixin';
import navmix from '@/components/navmix';

export default {
    name: 'Main',
    components: {
        Profile,
        Work,
        Contact,
    },
    mixins: [mix, navmix],
    data() {
        return {};
    },
    mounted() {
        this.$nextTick(() => {
            TweenLite.to(window, 2, { scrollTo: `#${this.$route.name.toLocaleLowerCase()}` });
        });
    },
};
</script>
