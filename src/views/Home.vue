<template>
    <div>
        <VueNav></VueNav>
        <Profile> </Profile>
        <Work></Work>
        <Contact></Contact>
    </div>
</template>
<script>
import VueNav from './Vuenav.vue';
import Profile from './Profile.vue';
import Work from './Work.vue';
import Contact from './Contact.vue';
export default {
    name: 'Main',
    components: {
        VueNav,
        Profile,
        Work,
        Contact,
    },
    data() {
        return {};
    },
    // beforeRouteEnter(to, from, next) {
    // next();
    // TweenLite.set('#initalShape', {
    //     morphSVG: '#initalShape',
    // });
    // .set('.transition', {
    //     bottom: 'unset',
    //     top: 0,
    // });
    // .set('.bounce_bottom', {
    //     height: 'auto',
    //     overflow: 'hidden',
    // })
    // .to('.transition', {
    //     height: '0vh',
    //     duration: 1,
    //     ease: 'power3.out',
    // })
    // .to(
    //     '#svgA path',
    //     {
    //         duration: 0.5,
    //         morphSVG: '#svgB path',
    //         scaleY: 0,
    //         ease: 'back.out(1.7)',
    //     },
    //     '-=0.75',
    // )
    // .set('.bounce_bottom', {
    //     height: 0,
    //     overflow: 'hidden',
    // })
    // .set('#svgA path', {
    //     morphSVG: '#svgA path',
    //     scaleY: 1,
    //     delay: 0.75,
    // });
    // },
    // beforeRouteLeave(to, from, next) {
    // this.leave(next);
    // },
    methods: {
        leave(e) {
            let tl = new TimelineLite();
            tl.set('.transition', {
                bottom: 0,
                height: 'auto',
                top: 'unset',
            })
                .set('.bounce_top', {
                    height: 'auto',
                })
                .set('#initalShape', {
                    scaleY: 0,
                    transformOrigin: 'bottom bottom',
                })
                .set('#shapeContainer', {
                    height: window.innerHeight,
                })
                .to('#initalShape', {
                    scaleY: 0.5,
                    ease: 'expo.out',
                    duration: 0.25,
                })
                .to(
                    '#initalShape',
                    {
                        duration: 0.5,
                        morphSVG: '#finalShape',
                        ease: 'back.out(1.7)',
                    },
                    '-=0.15',
                )
                .to(
                    '.transition',
                    {
                        height: '100vh',
                        duration: 1,
                        ease: 'power1.out',
                        onComplete: e,
                    },
                    '-=.5',
                )
                .set('.bounce_top', {
                    height: 0,
                    overflow: 'hidden',
                });
        },
        enter() {
            let tl = new TimelineLite();
            tl.set('.transition', {
                bottom: 'unset',
                delay: 0.25,
                top: 0,
            })
                .set('.bounce_bottom', {
                    height: 'auto',
                    overflow: 'hidden',
                })
                .to('.transition', {
                    height: '0vh',
                    duration: 1,
                    ease: 'power3.out',
                })
                .to(
                    '#svgA path',
                    {
                        duration: 0.5,
                        morphSVG: '#svgB path',
                        scaleY: 0,
                        ease: 'back.out(1.7)',
                    },
                    '-=0.75',
                )
                .set('.bounce_bottom', {
                    height: 0,
                    overflow: 'hidden',
                })
                .set('#svgA path', {
                    morphSVG: '#svgA path',
                    scaleY: 1,
                    delay: 0.75,
                });
        },
    },
};
</script>
