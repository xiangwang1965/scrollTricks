<template>
    <div class="contact" id="contact">
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
import { defineComponent } from 'vue';
import { TimelineLite } from 'gsap';
export default defineComponent({
    name: 'Contact',
    data() {
        return {};
    },
    methods: {
        scrollTop() {
            l().polyfill(),
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
        },
        appearContent() {
            let that = this;
            let t = new n.C('.contact h2', {
                type: 'lines, chars, words',
            });
            let i = new n.C('.contact .contact__info_text', {
                type: 'lines',
            });
            this.appearHeadTitle = new TimelineLite({
                scrollTrigger: {
                    trigger: '.contact',
                    start: 'top 60%',
                },
            });
            this.appearHeadTitle
                .set('.contact__footer-link', {
                    transformOrigin: '0% 100%',
                })
                .from(t.chars, {
                    autoAlpha: 0,
                    yPercent: 200,
                    scaleY: 3,
                    duration: 1,
                    stagger: 0.015,
                    ease: 'power4.inOut',
                    onComplete: function () {
                        t.revert();
                    },
                })
                .from(i.lines, {
                    autoAlpha: 0,
                    yPercent: 150,
                    duration: 1,
                    stagger: 0.02,
                    ease: 'power4.out',
                    onComplete: function () {
                        i.revert();
                    },
                })
                .from(
                    '.contact__info a, .contact__info p, .contact__info_link',
                    {
                        autoAlpha: 0,
                        yPercent: 150,
                        duration: 1,
                        stagger: 0.02,
                        ease: 'power4.out',
                    },
                    '<',
                )
                .from('.contact__footer-logo', {
                    autoAlpha: 0,
                    duration: 1,
                    ease: 'power4.out',
                })
                .from(
                    '.contact__footer-link',
                    {
                        autoAlpha: 0,
                        scale: 0,
                        duration: 1,
                        stagger: 0.02,
                        clearProps: !0,
                        ease: 'power4.out',
                    },
                    '<',
                ),
                setTimeout(() => {
                    that.appearHeadTitle.scrollTrigger.refresh();
                }, 1e3);
        },
        openMap() {
            // -1 != navigator.platform.indexOf('iPhone') || -1 != navigator.platform.indexOf('iPad') || -1 != navigator.platform.indexOf('iPod')
            //     ? window.open(
            //           'maps://maps.apple.com/?address=29%20Rue%20Royale,%2069001%20Lyon,%20France&ll=45.770244,4.837288&q=29%20Rue%20Royale&_ext=EiYpcY46KwTiRkAxRqGyB8pSE0A572NghyrjRkBBOAlYBfpfE0BQBA%3D%3D',
            //       )
            //     : window.open(
            //           'https://www.google.fr/maps/place/29+Rue+Royale,+69001+Lyon/@45.7702697,4.8352369,17z/data=!3m1!4b1!4m5!3m4!1s0x47f4eafbbd3e9b5b:0x5cccb8be26471915!8m2!3d45.770266!4d4.8374256',
            //       );
        },
    },
    mounted: function () {
        // this.appearContent();
    },
    unmounted() {
        this.appearHeadTitle.kill();
    },
});
</script>
