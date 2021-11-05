<template>
    <div>
        <nav class="navbar fixed-top navbar-expand-lg navbar-light rel-nav">
            <a class="navbar-brand navbar-brand1" href="index.html">logo</a>
            <button class="navbar-toggler" type="button">
                <span class="icon-menu"></span>
            </button>
            <div id="navbarSupportedContent" class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                    <li v-for="item in tabList" class="nav-item mx-4" :class="{ active: item.active }" @click="go(`${item.name}`)">
                        <a class="nav-link px-2">{{ item.name }}</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="transition">
            <div class="transition__overlay">
                <div class="bounce_top">
                    <svg
                        id="shapeContainer"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        preserveAspectRatio="none"
                        height="234px"
                        viewBox="0 0 1170 234"
                        xml:space="preserve"
                        style="overflow: visible"
                    >
                        <path id="initalShape" d="M1170,234H0l0,0C0,234,200,0,585,0S1170,234,1170,234L1170,234z" class="transitionPath"></path>
                    </svg>
                    <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        preserveAspectRatio="none"
                        height="234px"
                        viewBox="0 0 1170 234"
                        xml:space="preserve"
                        style="overflow: visible; display: none"
                    >
                        <path id="finalShape" d="M1170,234H0V0c0,0,200,0,585,0s585,0,585,0V234z" class="transitionPath"></path>
                    </svg>
                </div>
                <div class="bounce_bottom">
                    <svg id="svgA" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 390" preserveAspectRatio="none">
                        <path d="M1200,260S1017.2,390,600,390,0,260,0,260V0H1200Z" class="transitionPath"></path>
                    </svg>
                    <svg id="svgB" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 260" preserveAspectRatio="none" style="display: none">
                        <path d="M1200,260S1017.2,130,600,130,0,260,0,260V0H1200Z" class="transitionPath"></path>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.transition {
    bottom: 0;
    height: 0;
    left: 0;
    position: fixed;
    width: 100%;
    z-index: 999;
}

.transition__overlay {
    background: #13dead;
    height: 100%;
    position: relative;
    width: 100%;
}

.transition .bounce_top {
    bottom: 90%;
    display: block;
    height: 0;
    left: 0;
    overflow: hidden;
    position: absolute;
    width: 101%;
}

.transition .transitionPath {
    fill: #13dead;
}

.transition #shapeContainer {
    display: block;
    overflow: visible;
    width: 100%;
}

.transition .bounce_bottom {
    display: block;
    height: 0;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 90%;
    width: 101%;
}

.transition #svgA {
    display: block;
    overflow: visible;
    width: 100%;
}

.transition #svgB {
    display: none;
}
</style>
<script>
export default {
    name: 'Nav',
    data() {
        return {
            isMenuOpen: !1,
            scrollPostion: 0,
            tl: null,
            tabList: [
                {
                    name: 'Profile',
                    active: false,
                },
                {
                    name: 'Work',
                    active: false,
                },
                {
                    name: 'Contact',
                    active: false,
                },
            ],
        };
    },
    watch: {
        $route: {
            handler(n, o) {
                this.tabList.forEach((item) => {
                    if (item.name === n.name) {
                        item.active = true;
                    } else {
                        item.active = false;
                    }
                });
                // if (this.isMenuOpen) {
                //     (this.isMenuOpen = !1),
                //         document.querySelector('.navbar').classList.remove('isOpen'),
                //         gsap.set('.navbar__menu  .navbar__menu-link', {
                //             opacity: 1,
                //         }),
                //         gsap.set('.navbar__menu', {
                //             height: 0,
                //         });
                //     const e = document.body.style;
                //     e.removeProperty('overflow'),
                //         e.removeProperty('position'),
                //         e.removeProperty('top'),
                //         e.removeProperty('width'),
                //         window.scrollTo(0, this.scrollPosition);
                // }
            },
            deep: true,
        },
    },
    mounted() {
        TweenMax.set('.rel-nav', {
            opacity: 1,
        });
        this.tabList.forEach((item) => {
            if (item.name === this.$route.name) {
                item.active = true;
            } else {
                item.active = false;
            }
        });
        // window.addEventListener('resize', this.checkDevice);
        // window.addEventListener('scroll', this.scrollListen);
    },
    methods: {
        go(name) {
            this.$router.push({ name: name });
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
                                opacity: 1,
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
                    i.removeProperty('overflow'),
                        i.removeProperty('position'),
                        i.removeProperty('top'),
                        i.removeProperty('width'),
                        window.scrollTo(0, this.scrollPosition);
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
        scrollListen: function () {
            const e = new TimelineLite();
            this.scrollPostion < window.scrollY && window.scrollY > 0
                ? this.isMobile || this.isTablet
                    ? this.isMenuOpen ||
                      e
                          .to('.navbar__logo', {
                              opacity: 0,
                              duration: 1,
                              ease: 'power3.out',
                          })
                          .to(
                              '.navbar_mobile-button',
                              {
                                  opacity: 0,
                                  duration: 1,
                                  ease: 'power3.out',
                              },
                              '<',
                          )
                    : e
                          .to('.navbar__logo', {
                              opacity: 0,
                              duration: 1,
                              ease: 'power3.out',
                          })
                          .to(
                              '.navbar__menu .navbar__menu-link',
                              {
                                  scale: 0,
                                  stagger: 0.05,
                                  duration: 1,
                                  transformOrigin: '0% 100%',
                                  ease: 'power3.out',
                              },
                              '<',
                          )
                : this.isMobile || this.isTablet
                ? e
                      .to('.navbar__logo', {
                          opacity: 1,
                          duration: 1,
                          ease: 'power3.out',
                      })
                      .to(
                          '.navbar_mobile-button',
                          {
                              opacity: 1,
                              duration: 1,
                              ease: 'power3.out',
                          },
                          '<',
                      )
                : e
                      .to('.navbar__logo', {
                          opacity: 1,
                          duration: 1,
                          ease: 'power3.out',
                      })
                      .to(
                          '.navbar__menu .navbar__menu-link',
                          {
                              scale: 1,
                              stagger: 0.05,
                              duration: 1,
                              transformOrigin: '0% 100%',
                              ease: 'power3.out',
                          },
                          '<',
                      ),
                (this.scrollPostion = window.scrollY);
        },
    },
    unmounted() {
        // window.removeEventListener('resize', this.checkDevice);
        window.removeEventListener('scroll', this.scrollListen);
    },
};
</script>
