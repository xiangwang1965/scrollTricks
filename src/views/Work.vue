<template>
    <section id="work" class="horizontal-section" style="height: 200vh">
        <div class="horizontal-trigger"></div>
        <div class="horizontal-sticky">
            <div id="imgBox" class="container is--sticky">
                <div class="wrapper w-dyn-list">
                    <div class="list w-dyn-items">
                        <div class="horizontal-item w-dyn-item" v-for="item in list">
                            <div class="card w-inline-block">
                                <div class="card_top">
                                    <div class="index">{{ item }}</div>
                                    <div class="text">Hello</div>
                                </div>
                                <img src="@/assets/case.jpg" class="card_img" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.horizontal-section {
    position: relative;
    width: 100%;
}

.horizontal-trigger {
    position: absolute;
    left: 0%;
    top: 0%;
    right: 0%;
    bottom: auto;
}
.horizontal-trigger {
    height: calc(100% - 100vh);
}

.container {
    width: 100%;
    max-width: 1440px;
    margin-right: auto;
    margin-left: auto;
    padding: 60px 80px;
}
.container.is--sticky {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    min-height: 100vh;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
}

.horizontal-sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 0px;
    overflow: hidden;
    width: 100%;
}

.sticky_top {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    padding-bottom: 2.5em;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}

.sticky_top-line {
    width: 100%;
    height: 2px;
    background-color: rgba(92, 49, 255, 0.32);
}

.sticky_title {
    padding-right: 1em;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    white-space: nowrap;
}

.list {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: stretch;
    -webkit-align-items: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
}

.wrapper {
    width: 100%;
}

.horizontal-item {
    width: 34%;
    padding-right: 20px;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
}
.w-inline-block {
    max-width: 100%;
    display: inline-block;
}
::v-deep.card {
    width: 100%;
    padding: 42px 42px 0px;
    border-style: solid;
    border-width: 2px;
    border-color: rgba(92, 49, 255, 0.32);
    border-radius: 20px;
    background-color: rgba(92, 49, 255, 0.04);
}
::v-deep.card img {
    vertical-align: middle;
    max-width: 100%;
}
.card_top {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}

.card_icon {
    width: 3em;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
}

.card_img {
    display: block;
    width: 250px;
    height: 400px;
    margin: 5.6em auto -6.7em;
    -o-object-fit: contain;
    object-fit: contain;
}

.scrolling_img {
    width: 80px;
    margin-top: 5.4em;
}
</style>
<script>
import ScrollTrigger from '@terwanerik/scrolltrigger';
export default {
    name: 'Work',
    data() {
        return {
            list: [1, 2, 3, 4, 5, 6, 7, 8],
            trigger: null,
        };
    },
    mounted() {
        let that = this;
        this.trigger = new ScrollTrigger();
        this.$nextTick(() => {
            const scrollContainer = $('#work');

            scrollContainer.css({ 'min-height': $('.w-dyn-item').width() * 8 });

            this.trigger.add('.horizontal-trigger', {
                toggle: {
                    callback: {
                        in: () => {
                            $('.horizontal-sticky').css({ position: 'fixed', zIndex: 1040 });
                            window.addEventListener('scroll', that.scrollListen);
                        },
                        out: () => {
                            $('.horizontal-sticky').css({ position: 'sticky', zIndex: 1040 });
                            window.removeEventListener('scroll', that.scrollListen);
                        },
                        scroll: {
                            // The amount of ms the scroll loop should keep triggering after the
                            // scrolling has stopped. This is sometimes nice for canvas
                            // animations.
                            sustain: 200,
                            // Window|HTMLDocument|HTMLElement to check for scroll events
                            element: $('.horizontal-trigger'),
                            // Add a callback when the user has scrolled, keeps on triggering for
                            // as long as the sustain is set to do
                            callback: () => {
                                console.log('abc');
                                //     this.scrollPostion = position.y;
                                // const workTop = $('.horizontal-sticky').offset().top;
                                // const list = document.querySelector('.list');
                                // console.log(workTop);
                                // if (workTop < 0) {
                                //     let len = position.y - Number(workTop);
                                //     // evt.preventDefault();
                                //     // $('.scroll-wrapper').css({ position: 'absolute' });
                                //     list.style = `transform: translate3d(${workTop}px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);will-change: transform;transform-style: preserve-3d;`;
                                // }
                                // });
                            },
                            // Callback when the user started scrolling
                            start: () => {},
                            // Callback when the user stopped scrolling
                            stop: () => {},
                            // Callback when the user changes direction in scrolling
                            directionChange: () => {},
                        },
                    },
                },
            });
        });
    },
    beforeDestroy() {
        this.trigger.kill();
        this.trigger = null;
    },
    methods: {
        scrollListen() {
            const workTop = $('.horizontal-trigger').offset().top;

            const list = $('.horizontal-sticky').offset().top;
            console.log(workTop, list);
            let len = list - Number(window.scrollY);
            document.querySelector(
                '.horizontal-sticky',
            ).style = `transform: translate3d(${len}px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);will-change: transform;transform-style: preserve-3d;position:fixed;z-index:1040`;
        },
    },
};
</script>
