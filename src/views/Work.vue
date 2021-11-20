<template>
    <div id="work" class="horizontal-section" style="height: 200vh">
        <div class="horizontal-trigger"></div>
        <div class="horizontal-sticky">
            <div id="imgBox" class="container1 is--sticky">
                <div class="sticky_top">
                    <div class="row sticky_title">Case Studies</div>
                    <div class="row sticky_top-line"></div>
                </div>
                <div class="wrapper w-dyn-list">
                    <div id="list" class="list w-dyn-items">
                        <div class="col-4 horizontal-item w-dyn-item" v-for="item in list">
                            <div class="card w-inline-block" style="width: 555px; height: 661px">
                                <img src="@/assets/case.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <div class="card-title">{{ item }}</div>
                                    <div class="sticky_top-line"></div>
                                    <div class="card-text">Hello</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
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

.container1 {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding: 60px 80px;
}
.container1.is--sticky {
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
    flex-direction: column;
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
    background-color: #000;
}

.sticky_title {
    font-family: Apercu-Bold;
    font-size: 80px;
    font-style: normal;
    font-weight: 700;
    line-height: 99px;
    letter-spacing: 0em;
    text-align: left;
    white-space: nowrap;
}

.list {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: stretch;
    -webkit-align-items: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    max-height: 700px;
}

.wrapper {
    width: 100%;
}

.horizontal-item {
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
    border: none;
}
::v-deep.card img {
    max-width: 100%;
}
.card-body {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: left;
    -webkit-align-items: left;
    -ms-flex-align: left;
    align-items: left;
    flex-direction: column;
}
::v-depp.card-title {
    font-family: Apercu-Bold;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
}
.card-text {
    font-family: Apercu-Bold;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 45px;
    letter-spacing: 0.025em;
    text-align: left;
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
            // $('.w-dyn-items').css({ 'min-width': $('.w-dyn-item').width() * 8 });
            this.trigger.add('.horizontal-trigger', {
                toggle: {
                    callback: {
                        in: () => {
                            // $('.horizontal-sticky').css({ position: 'fixed', zIndex: 1040 });
                            window.addEventListener('scroll', that.scrollListen);
                        },
                        out: () => {
                            // $('.horizontal-sticky').css({ position: 'sticky', zIndex: 1040 });
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
            let len = workTop - list;
            let itemsList = document.getElementById('list');
            itemsList.style.willChange = 'transform';
            itemsList.style.transformStyle = 'preserve-3d';
            itemsList.style.transform = 'translate3d(' + len + 'px,0,0) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
        },
    },
};
</script>
