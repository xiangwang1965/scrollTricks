<template>
    <div class="contact page" id="contact">
        <section class="concept">
            <div class="title">
                FROM CONCEPT <br />
                TO CONVERSION
            </div>
            <div class="text">
                We move fast, we break boundaries. The creative game goes for operations, marketing, communications, design, and storytelling. We carefully
                analyse your needs, and provide expert, transparent advise.
            </div>
        </section>

        <div class="container-fluid box">
            <section class="footer">
                <img src="@/assets/img1.png" alt="" class="img1" />
                <img src="@/assets/img2.png" alt="" class="img2" />
                <img src="@/assets/img3.png" alt="" class="img3" />
                <ul>
                    <li>
                        <div class="index">drop a pin</div>
                        <div class="text">Shing Yip Industrial Building, Kwun Tong</div>
                    </li>
                    <li>
                        <div class="index">get in touch</div>
                        <div class="text">
                            <span>admin@bento-works.com</span>
                            <span>(852) 60517208</span>
                        </div>
                    </li>
                    <li>
                        <div class="index">socials</div>
                        <div class="text">
                            <span>Instagram</span>
                            <span>LinkedIn</span>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    </div>
</template>
<script>
import ScrollTrigger from '@terwanerik/scrolltrigger';

export default {
    name: 'Contact',
    data() {
        return { trigger: null };
    },
    methods: {
        appearContent() {
            let that = this;
            let t = new SplitText('.concept .title', {
                type: 'chars, words',
            });
            let i = new SplitText('.concept .text', {
                type: 'lines',
            });
            this.appearHeadTitle = new TimelineMax()
                .from(t.chars, 0.8, { opacity: 0, scale: 0, y: 80, rotationX: 180, transformOrigin: '0% 50% -50', ease: Back.easeOut }, '-=0.8')
                .from(i.lines, 0.5, { x: 100, autoAlpha: 0 }, 0.2);
        },
    },
    mounted: function () {
        this.trigger = new ScrollTrigger();

        this.trigger.add('#contact', {
            toggle: {
                callback: {
                    in: () => {
                        this.appearContent();
                    },
                    out: () => {
                        // same as the data-scroll-hideCallback
                        console.log('Invisible');
                    },
                },
            },
        });
    },
    unmounted() {
        this.appearHeadTitle.kill();
    },
    beforeDestroy() {
        this.trigger.kill();
        this.trigger = null;
    },
};
</script>
