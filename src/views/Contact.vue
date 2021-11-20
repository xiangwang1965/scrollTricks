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
            let i = new SplitText('.concept .text', {
                type: 'chars',
            });
            this.appearHeadTitle = new TimelineLite();

            this.appearHeadTitle
                .from('.concept .title', 1.5, {
                    left: 100,
                    opacity: 0,
                })
                .staggerFrom(i.chars, 0.5, { opacity: 0, rotation: 90, scale: 0, x: 20, y: 60, ease: Back.easeOut }, 0.05);
        },
    },
    mounted() {
        let tl = new TimelineLite();
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
    beforeDestroy() {
        this.trigger.kill();
        this.trigger = null;
    },
};
</script>
