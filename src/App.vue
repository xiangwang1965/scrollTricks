<template>
    <div class="container-fluid">
        <nav class="navbar fixed-top navbar-expand-lg navbar-light rel-nav">
            <a class="navbar-brand navbar-brand1" href="index.html">logo</a>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="icon-menu"></span>
            </button>
            <div id="navbarSupportedContent" class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                    <li v-for="item in tabList" class="nav-item mx-4" :id="item.name" :class="{ active: item.active }" @click="go(`${item.name}`)">
                        <a class="nav-link px-2">{{ item.name }}</a>
                    </li>
                </ul>
            </div>
        </nav>
        <vtransition></vtransition>
        <router-view></router-view>
    </div>
</template>
<style scoped>
::v-deep.nav-link {
    font-family: Apercu-Bold;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 31px;
    text-align: center;
    color: #000000;
}
</style>
<script>
import vtransition from '@/views/transition.vue';
export default {
    data() {
        return {
            tabList: [
                {
                    name: 'Profile',
                    active: false,
                },
                {
                    name: 'Work',
                    active: false,
                },
                {
                    name: 'Contact',
                    active: false,
                },
            ],
        };
    },
    components: {
        vtransition,
    },
    watch: {
        $route: {
            handler(n, o) {
                this.tabList.forEach((item) => {
                    if (item.name === n.name) {
                        item.active = true;
                    } else {
                        item.active = false;
                    }
                });
            },
            deep: true,
        },
    },
    mounted() {
        this.tabList.forEach((item) => {
            if (item.name === this.$route.name) {
                item.active = true;
            } else {
                item.active = false;
            }
        });
    },
    methods: {
        go(name) {
            this.$router.push({ name: name });
        },
    },
};
</script>
