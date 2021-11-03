<template>
    <div class="profile" id="profile">
        <div class="item">
            <div class="row introduce">
                <!-- <div class="col-md-8"> -->
                <div>
                    <section class="website flex">
                        <div class="build">
                            <div class="title" ref="title">
                                We build <br />
                                website <br />
                                and app.
                            </div>
                        </div>
                        <div class="introduce-content">
                            <div class="ball"></div>
                            <div class="content">
                                We move fast, we break boundaries. The creative game goes for operations, marketing, communications, design, and storytelling.
                                We carefully analyse your needs, and provide expert, transparent advise.
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>

        <div class="item">
            <div class="row introduce">
                <!-- <div class="col-md-8"> -->
                <div>
                    <section class="services">
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
    </div>
</template>
<script>
import { defineComponent } from 'vue';
import { TimelineLite, Back, Elastic, Expo } from 'gsap';
export default defineComponent({
    name: 'Profile',
    data() {
        return {};
    },
    mounted() {
        const { title } = this.$refs;
        const timeline = new TimelineLite();
        timeline.set(['.highlighted__overlay', '.highlighted__line'], {
            autoAlpha: 0,
        });
        // const t = new SplitText('.title', {
        //     type: 'chars, words',
        //     charsClass: 'chars',
        // });
        // const i = new SplitText('.hero__content .p--large', {
        //     type: 'lines',
        // });
        // const s = new SplitText('.hero__content .p--medium', {
        //     type: 'lines',
        // });
    },
});
</script>
