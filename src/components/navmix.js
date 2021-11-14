import BetterScroll from 'better-scroll';
export default {
    name: 'nav',
    data () {
        return {
            isMenuOpen: !1,
            scrollPostion: 0,
            tl: null,
            scroll: '',
            scroll1: ''
        };
    },
    watch: {
        $route: {
            handler (n, o) {
                this.changeMenu(n);
                let e = document.body.style;
                e.removeProperty("overflow"),
                    e.removeProperty("position"),
                    e.removeProperty("top"),
                    e.removeProperty("width"),
                    window.scrollTo(0, this.scrollPosition)
            },
            deep: true,
        },
    },
    mounted () {
        this.tl = new TimelineMax({ paused: false });
        // window.addEventListener("resize", this.checkDevice),
        window.addEventListener("scroll", this.scrollListen)


        // // window.addEventListener('resize', this.checkDevice);



        this.changeMenu(this.$route);
        // window.addEventListener('scroll', this.scrollListen);
    },
    methods: {
        changeMenu (n) {
            if (n.name !== 'Index') {
                this.tl.to($('.rel-nav'), 0.5, {
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                }).to('.navbar-collapse  .nav-item', 0.5, {
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out'
                })
                //  this.scroll.scrollToElement(`#${n.name.toLocaleLowerCase()}`, 300, true, true);
            } else {
                this.tl.to($('.rel-nav'), 0.5, {
                    opacity: 0,
                    duration: 1,
                    ease: 'power3.out',
                }).to('.navbar-collapse  .nav-item', 0.5, {
                    opacity: 0,
                    duration: 1,
                    ease: 'power3.out',
                }).to('.navbar-collapse', 0.5, {
                    height: 0,
                    duration: 1,
                    ease: 'power3.out',
                });
            }
        },

        toggleMenu: function () {
            const e = this;
            if (!this.tl.isActive())
                if (((this.isMenuOpen = !this.isMenuOpen), this.isMenuOpen)) {
                    this.tl
                        .fromTo(
                            '.navbar__menu',
                            {
                                height: 0,
                            },
                            {
                                height: '100vh',
                                duration: 0.5,
                                ease: 'power4.out',
                                onStart: function () {
                                    e.isMenuOpen && e.$refs.menu.classList.add('isOpen');
                                },
                            },
                        )
                        .to('.navbar__menu .navbar__menu-link', {
                            opacity: 1,
                            duration: 0.5,
                            stagger: 0.05,
                        }),
                        (this.scrollPosition = window.pageYOffset);
                    const t = document.body.style;
                    (t.overflow = 'hidden'), (t.position = 'fixed'), (t.top = -window.pageYOffset + 'px'), (t.width = '100%');
                } else {
                    this.tl
                        .fromTo(
                            '.navbar__menu .navbar__menu-link',
                            {
                                opacity: 0.5,
                            },
                            {
                                opacity: 0,
                                duration: 0.5,
                                stagger: 0.05,
                            },
                        )
                        .fromTo(
                            '.navbar__menu',
                            {
                                height: '100vh',
                            },
                            {
                                height: 0,
                                onComplete: function () {
                                    e.isMenuOpen || e.$refs.menu.classList.remove('isOpen');
                                },
                            },
                        );
                    const i = document.body.style;
                    i.removeProperty('overflow');
                    i.removeProperty('position');
                    i.removeProperty('top');
                    i.removeProperty('width');
                }
        },
        checkDevice: function () {
            this.isMobile || this.isTablet
                ? this.isMenuOpen
                    ? r.ZP.set('.navbar__menu .navbar__menu-link', {
                        scale: 1,
                        opacity: 1,
                    })
                    : r.ZP.set('.navbar__menu .navbar__menu-link', {
                        scale: 1,
                        opacity: 0,
                    })
                : ((this.isMenuOpen = !1),
                    document.querySelector('.navbar').classList.remove('isOpen'),
                    r.ZP.set('.navbar__menu  .navbar__menu-link', {
                        opacity: 1,
                    }),
                    r.ZP.set('.navbar__menu', {
                        height: 0,
                    }));
        },
        scrollListen () {

            if (this.scrollPostion < window.window.pageYOffset && window.window.pageYOffset > 0) {

                this.tl.to('.navbar-brand', 0.5, {
                    opacity: 0,
                    duration: 1,
                    ease: 'power3.out',
                }).to('.navbar-toggler', 0.5, {
                    opacity: 0,
                    duration: 1,
                    ease: 'power3.out',
                })
                    .to(
                        '#navbarSupportedContent .nav-item',
                        0.5,
                        {
                            scale: 0,
                            stagger: 0.05,
                            duration: 1,
                            transformOrigin: '0% 100%',
                            ease: 'power3.out',
                        },
                        '<',
                    );
            } else {
                this.tl.to('.navbar-brand', 0.5, {
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                })
                    .to('.navbar-toggler', 0.5, {
                        opacity: 1,
                        duration: 1,
                        ease: 'power3.out',
                    })
                    .to(
                        '#navbarSupportedContent .nav-item',
                        0.5,
                        {
                            scale: 1,
                            stagger: 0.05,
                            duration: 1,
                            transformOrigin: '0% 100%',
                            ease: 'power3.out',
                        },
                        '<',
                    );
            }
            this.scrollPostion = window.scrollY;
        },
    },
    destroyed () {
        // window.removeEventListener("resize", this.checkDevice),
        window.removeEventListener("scroll", this.scrollListen)
    }
};