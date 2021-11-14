<template>
    <div>
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
        <div class="transition">
            <div class="transition__overlay">
                <div class="bounce_top">
                    <svg
                        id="shapeContainer"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        preserveAspectRatio="none"
                        height="234px"
                        viewBox="0 0 1170 234"
                        xml:space="preserve"
                        style="overflow: visible"
                    >
                        <path id="initalShape" d="M1170,234H0l0,0C0,234,200,0,585,0S1170,234,1170,234L1170,234z" class="transitionPath"></path>
                    </svg>
                    <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        preserveAspectRatio="none"
                        height="234px"
                        viewBox="0 0 1170 234"
                        xml:space="preserve"
                        style="overflow: visible; display: none"
                    >
                        <path id="finalShape" d="M1170,234H0V0c0,0,200,0,585,0s585,0,585,0V234z" class="transitionPath"></path>
                    </svg>
                </div>
                <div class="bounce_bottom">
                    <svg id="svgA" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 390" preserveAspectRatio="none">
                        <path d="M1200,260S1017.2,390,600,390,0,260,0,260V0H1200Z" class="transitionPath"></path>
                    </svg>
                    <svg id="svgB" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 260" preserveAspectRatio="none" style="display: none">
                        <path d="M1200,260S1017.2,130,600,130,0,260,0,260V0H1200Z" class="transitionPath"></path>
                    </svg>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<style>
.transition {
    bottom: 0;
    height: 0;
    left: 0;
    position: fixed;
    width: 100%;
    z-index: 999;
}

.transition__overlay {
    background: #13dead;
    height: 100%;
    position: relative;
    width: 100%;
}

.transition .bounce_top {
    bottom: 90%;
    display: block;
    height: 0;
    left: 0;
    overflow: hidden;
    position: absolute;
    width: 101%;
}

.transition .transitionPath {
    fill: #13dead;
}

.transition #shapeContainer {
    display: block;
    overflow: visible;
    width: 100%;
}

.transition .bounce_bottom {
    display: block;
    height: 0;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 90%;
    width: 101%;
}

.transition #svgA {
    display: block;
    overflow: visible;
    width: 100%;
}

.transition #svgB {
    display: none;
}
</style>
<script>
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
