<template>
    <div>
        <VueNav></VueNav>
        <Profile> </Profile>
        <Work></Work>
        <Contact></Contact>
    </div>
</template>
<script>
import VueNav from './Vuenav.vue';
import Profile from './Profile.vue';
import Work from './Work.vue';
import Contact from './Contact.vue';
import mix from '@/components/mixin';
export default {
    name: 'Main',
    components: {
        VueNav,
        Profile,
        Work,
        Contact,
    },
    mixins: [mix],
    data() {
        return {};
    },
};
</script>
