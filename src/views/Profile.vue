<template>
    <div id="profile" class="profile">
        <div class="item">
            <div class="row introduce">
                <section class="website flex">
                    <div class="col build">
                        <div ref="title" class="title">
                            We build <br />
                            <div class="highlighted__container">
                                <span class="highlighted__word">website</span>
                                <span class="highlighted__overlay"></span>
                                <img src="@/assets/img/underline-home.svg" alt="" class="highlighted__line" />
                            </div>
                            <br />
                            and app
                        </div>
                    </div>
                    <div class="col introduce-content">
                        <div class="ball"></div>
                        <div class="content">
                            We move fast, we break boundaries. The creative game goes for operations, marketing, communications, design, and storytelling. We
                            carefully analyse your needs, and provide expert, transparent advise.
                        </div>
                        <a class="button--default">
                            <span class="text">Contacter we</span>
                            <span class="line"></span
                        ></a>
                    </div>
                </section>
            </div>
        </div>
        <serviceTpl></serviceTpl>
    </div>
</template>
<style scoped>
.highlighted__container {
    display: inline-block;
    position: relative;
    z-index: 5;
}

.highlighted__overlay {
    background: #fff;
    height: 80%;
    position: absolute;
    right: -5%;
    top: -5%;
    width: 0;
    z-index: 3;
}

.highlighted__word {
    position: relative;
    z-index: 5;
}

.highlighted__line {
    height: 80%;
    left: -5%;
    position: absolute;
    top: -5%;
    user-select: none;
    width: 110%;
    z-index: 1;
}
.button--default {
    align-items: center;
    color: #222;
    display: flex;
    font-family: neue-haas-unica, sans-serif;
    font-size: 0.8em;
    font-weight: 600;
    letter-spacing: 1px;
    margin: 1.2rem 0;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
}

.button--default .text {
    white-space: nowrap;
}

.button--default:hover .line {
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-name: slideinout;
    animation-timing-function: cubic-bezier(0.1, 0.85, 0.35, 0.95);
}

.button--default .line {
    background: #13dead;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    flex-shrink: 0;
    height: 2px;
    margin-left: 5%;
    max-width: 96px;
    transition: clip-path 0.5s;
    width: 25%;
}

@media screen and (min-width: 320px) {
    .button--default .line {
        margin-left: 24px;
    }
}

@media screen and (min-width: 768px) {
    .button--default .line {
        max-width: unset;
        width: 96px;
    }
}
</style>
<script>
import serviceTpl from './service';
export default {
    name: 'Profile',
    components: {
        serviceTpl,
    },

    data() {
        return { trigger: null };
    },
    mounted() {
        const splitTextTimeline = new TimelineMax();
        splitTextTimeline.set(['.highlighted__overlay', '.highlighted__line'], {
            autoAlpha: 0,
        });
        const t = new SplitText('#profile .title', {
            type: 'chars, words',
            charsClass: 'chars',
        });
        const i = new SplitText('#profile .content', {
            type: 'lines',
        });
        splitTextTimeline
            .from(t.chars, 0.8, {
                opacity: 0,
                y: 400,
                scaleY: 3,
                duration: 1,
                stagger: 0.01,
                delay: 0.5,
                ease: 'power4.inOut',
            })
            .from(
                '.ball',
                0.8,
                {
                    autoAlpha: 0,
                    duration: 0.5,
                    ease: 'power4.inOut',
                },
                '<',
            )
            .set('.highlighted__overlay', {
                autoAlpha: 1,
                width: '100%',
            })
            .set(
                '.highlighted__line',
                {
                    autoAlpha: 1,
                },
                '<',
            )
            .to('.highlighted__overlay', 1, {
                width: 0,
                duration: 2,
                ease: 'power4.out',
                onComplete: function () {
                    t.revert();
                },
            })
            .from(
                i.lines,
                1.0,
                {
                    autoAlpha: 0,
                    yPercent: 125,
                    duration: 1,
                    stagger: 0.05,
                    ease: 'power4.out',
                    onComplete: function () {
                        i.revert();
                    },
                },
                '-=.9',
            )
            .from(
                '.button--default .text',
                1,
                {
                    autoAlpha: 0,
                    duration: 5 / 30,
                    ease: 'power1.inOut',
                },
                '-=0.8',
            )
            .from(
                '.button--default .line',
                1,
                {
                    width: 0,
                    duration: 10 / 30,
                    ease: 'power1.inOut',
                },
                '<',
            );
    },
};
</script>
