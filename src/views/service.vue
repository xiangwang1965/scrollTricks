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
export default {
    name: 'Service',
    data() {
        return {};
    },
    mounted() {
        this.showHead();
        setTimeout(() => {
            this.appearItems();
        }, 250);
    },
    unmounted() {
        this.appearHeadTitle.kill();
        this.batchScroll.forEach((e) => {
            return e.kill();
        });
    },
    methods: {
        showHead() {
            const t = new SplitText('#services .title', {
                type: 'lines,chars, words',
            });
            const i = new SplitText('#services .service-content', {
                type: 'lines',
            });
            this.appearHeadTitle = new TimelineLite({
                scrollTrigger: {
                    trigger: '#services .build',
                    start: 'top 60%',
                },
            });
            this.appearHeadTitle.from(t.chars, 0.5, {
                autoAlpha: 0,
                yPercent: 200,
                scaleY: 3,
                duration: 1,
                stagger: 0.015,
                ease: 'power4.inOut',
            });
            this.appearHeadTitle.from(
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
            setTimeout(() => {
                this.appearHeadTitle.scrollTrigger.refresh();
            }, 2e3);
        },
        appearItems() {
            new SplitText('.service-list .title', {
                opacity: 0,
            });
            TweenLite.set('.service-list .text', {
                opacity: 0,
                yPercent: 150,
            });
            const tl = new TimelineLite();
            this.batchScroll = h.i.batch('.service-list li', {
                onEnter(e) {
                    e.forEach((e) => {
                        tl.to(e.querySelector('.service-list .title'), 1.0, {
                            opacity: 1,
                            duration: 1,
                            ease: 'power4.out',
                            delay: 0.5,
                            onStart: function () {
                                e.classList.add('show');
                            },
                        });
                        tl.to(e.querySelectorAll('.service-list .text'), 0.5, {
                            opacity: 1,
                            yPercent: 0,
                            stagger: 0.1,
                            delay: 0.5,
                            duration: 1,
                            ease: 'power4.out',
                        });
                    });
                },
                start: 'top 70%',
                once: !0,
            });
        },
    },
};
</script>
