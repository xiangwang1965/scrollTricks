export default {
    beforeRouteEnter (to, from, next) {
        next();
        // TweenMax.set('#initalShape', {
        //     visibility: 'visible'
        // });
        // const Timeline = new TimelineMax({ paused: false });
        // TweenMax.set('.transition', {
        //     bottom: 'unset',
        //     top: 0
        // });
        // TweenMax.set('.bounce_bottom', {
        //     height: 'auto',
        //     overflow: 'hidden'
        // });
        // Timeline.to('.transition', 0.5, {
        //     height: '0vh',
        //     duration: 1,
        //     ease: 'power3.out'
        // }).to('#svgA path', 0.4, {
        //     duration: .5,
        //     morphSVG: '#svgB path',
        //     scaleY: 0,
        //     ease: 'back.out(1.7)'
        // }, '-=0.75');
        // TweenMax.set('.bounce_bottom', {
        //     height: 0,
        //     overflow: 'hidden'
        // });
        // TweenMax.set('#svgA path', {
        //     visibility: 'visible',
        //     scaleY: 1,
        //     delay: .75
        // });
        const Timeline = new TimelineMax({ paused: false });
        Timeline.set('.transition', {
            bottom: 'unset',
            delay: .25,
            top: 0
        }).set('.bounce_bottom', {
            height: 'auto',
            overflow: 'hidden'
        }).to('.transition', 0.3, {
            height: '0vh',
            duration: 1,
            ease: 'power3.out'
        }).to('#svgA path', 0.3, {
            duration: .5,
            morphSVG: '#svgB path',
            scaleY: 0,
            ease: 'back.out(1.7)'
        }, '-=0.75').set('.bounce_bottom', {
            height: 0,
            overflow: 'hidden'
        }).set('#svgA path', {
            morphSVG: '#svgA path',
            scaleY: 1,
            delay: .75
        });
    },
    beforeRouteLeave (to, from, next) {
        // next();
        this.leave(next);
    },
    methods: {
        leave: function (e) {
            const Timeline = new TimelineMax({
                delay: 0.1,
                paused: false,
                onComplete () {
                    e();
                },
            });
            Timeline.set('.transition', {
                bottom: 0,
                height: 'auto',
                top: 'unset'
            }).set('.bounce_top', {
                height: 'auto'
            }).set('#initalShape', {
                scaleY: 0,
                transformOrigin: 'bottom bottom'
            }).set('#shapeContainer', {
                height: window.innerHeight
            }).to('#initalShape', 0.4, {
                scaleY: .5,
                ease: 'expo.out',
                duration: .25
            }).to('#initalShape', 0.4, {
                duration: .5,
                morphSVG: '#finalShape',
                ease: 'back.out(1.7)'
            }, '-=0.15').to('.transition', 0.4, {
                height: '100vh',
                duration: 1,
                ease: 'power1.out'
            }, '-=.5').set('.bounce_top', {
                height: 0,
                overflow: 'hidden'
            });

        },
        enter () {
            const Timeline = new TimelineMax({ paused: false });
            Timeline.set('.transition', {
                bottom: 'unset',
                delay: .25,
                top: 0
            }).set('.bounce_bottom', {
                height: 'auto',
                overflow: 'hidden'
            }).to('.transition', 0.3, {
                height: '0vh',
                duration: 1,
                ease: 'power3.out'
            }).to('#svgA path', 0.3, {
                duration: .5,
                morphSVG: '#svgB path',
                scaleY: 0,
                ease: 'back.out(1.7)'
            }, '-=0.75');
            TweenMax.set('.bounce_bottom', {
                height: 0,
                overflow: 'hidden'
            });
            TweenMax.set('#svgA path', {
                morphSVG: '#svgA path',
                scaleY: 1,
                delay: .75
            });
        }
    }
};