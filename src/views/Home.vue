<template>
    <full-page ref="fullpage" :options="options" id="fullpage">
        <VueNav></VueNav>
        <Profile> </Profile>
        <Work></Work>
        <Contact></Contact>
    </full-page>
</template>
<script>
import VueNav from './Vuenav.vue';
import Profile from './Profile.vue';
import Work from './Work.vue';
import Contact from './Contact.vue';

export default {
    name: 'Main',
    components: {
        VueNav,
        Profile,
        Work,
        Contact,
    },
    data() {
        return {
            options: {
                licenseKey: 'YOUR_KEY_HEERE',
                menu: '#menu',
                anchors: ['page1', 'page2', 'page3'],
                sectionsColor: ['#41b883', '#ff5f45', '#0798ec'],
            },
        };
    },
};
</script>
