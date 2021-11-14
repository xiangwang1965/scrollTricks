<template>
    <div class="item">
        <div class="row introduce">
            <!-- <div class="col-md-8"> -->
            <div>
                <section id="services" class="services">
                    <div class="build">
                        <div class="title">Services</div>
                        <div class="service-content">We do everything you need to build, launch, optimize and grow your business.</div>
                    </div>
                    <div class="service-list">
                        <ul>
                            <li>
                                <div class="title">
                                    <div>DESIGN</div>
                                    <div class="index">01</div>
                                </div>
                                <div class="text">
                                    We move fast, we break boundaries. The creative game goes for operations, marketing, communications, design, and
                                    storytelling. We carefully analyse your needs, and provide expert, transparent advise.
                                </div>
                            </li>
                            <li>
                                <div class="title">
                                    <div>DESIGN</div>
                                    <div class="index">02</div>
                                </div>
                                <div class="text">
                                    We move fast, we break boundaries. The creative game goes for operations, marketing, communications, design, and
                                    storytelling. We carefully analyse your needs, and provide expert, transparent advise.
                                </div>
                            </li>
                            <li>
                                <div class="title">
                                    <div>DESIGN</div>
                                    <div class="index">03</div>
                                </div>
                                <div class="text">
                                    We move fast, we break boundaries. The creative game goes for operations, marketing, communications, design, and
                                    storytelling. We carefully analyse your needs, and provide expert, transparent advise.
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>
<script>
import ScrollTrigger from '@terwanerik/scrolltrigger';
export default {
    name: 'Service',
    data() {
        return { trigger: null };
    },
    mounted() {
        this.trigger = new ScrollTrigger();
        this.trigger.add('#services', {
            toggle: {
                callback: {
                    in: () => {
                        this.showHead();
                        setTimeout(() => {
                            this.appearItems();
                        }, 250);
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
    destroyed() {
        // this.appearHeadTitle.kill();
        // this.batchScroll.forEach((e) => {
        //     return e.kill();
        // });
    },
    methods: {
        showHead() {
            const t = new SplitText('#services .build .title', {
                type: 'lines,chars, words',
            });
            const i = new SplitText('#services .build .service-content', {
                type: 'lines',
            });
            this.appearHeadTitle = new TimelineMax({
                scrollTrigger: {
                    trigger: '#services .build .title',
                    start: 'top 60%',
                },
            })
                .from(t.chars, 0.5, {
                    autoAlpha: 0,
                    yPercent: 200,
                    scaleY: 3,
                    duration: 1,
                    stagger: 0.015,
                    ease: 'power4.inOut',
                })
                .from(
                    i.lines,
                    0.5,
                    {
                        autoAlpha: 0,
                        yPercent: 150,
                        duration: 20 / 30,
                        stagger: 0.05,
                        ease: 'power2.out',
                    },
                    '-=0.5',
                );
            // setTimeout(() => {
            //     this.appearHeadTitle.scrollTrigger.refresh();
            // }, 2e3);
        },
        appearItems() {
            new SplitText('.service-list .title', {
                opacity: 0,
            });
            TweenLite.set('.service-list .text', {
                opacity: 0,
                yPercent: 150,
            });

            new TimelineMax({
                scrollTrigger: {
                    trigger: '.service-list li',
                    start: 'top 70%',
                    once: true,
                },
            })
                .to('.service-list li .title', 1.0, {
                    opacity: 1,
                    duration: 1,
                    ease: 'power4.out',
                    delay: 0.5,
                    onStart: function () {
                        // e.classList.add('show');
                    },
                })
                .to('.service-list li .text', 0.5, {
                    opacity: 1,
                    yPercent: 0,
                    stagger: 0.1,
                    delay: 0.5,
                    duration: 1,
                    ease: 'power4.out',
                });
        },
    },
};
</script>
