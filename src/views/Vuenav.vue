<template>
    <transition name="slide-down">
        <nav class="navbar fixed-top navbar-expand-lg navbar-light rel-nav">
            <a class="navbar-brand navbar-brand1" href="index.html">logo</a>
            <button class="navbar-toggler" type="button">
                <span class="icon-menu"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active mx-4" target-scroll="profile">
                        <a class="nav-link px-2">Profile</a>
                    </li>
                    <li class="nav-item mx-4" target-scroll="work">
                        <a class="nav-link px-2">Work</a>
                    </li>
                    <li class="nav-item mx-4" target-scroll="contact">
                        <a class="nav-link px-2">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    </transition>
</template>
<style>
.slide-down-enter-active,
.slide-down-leave-active {
    transition: all 500ms;
    position: absolute;
}
.slide-down-enter {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
}
.slide-down-leave-active {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
}
</style>
<script>
import { TimelineLite } from 'gsap';
export default {
    name: 'Nav',
    data() {
        return {
            isMenuOpen: !1,
            scrollPostion: 0,
            tl: null,
        };
    },
    watch: {
        $route: function () {
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
    },
    mounted() {
        this.tl = new TimelineLite();
        this.tl.set('.rel-nav', {
            opacity: 1,
        });
        // window.addEventListener('resize', this.checkDevice);
        // window.addEventListener('scroll', this.scrollListen);
    },
    methods: {
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
                    var t = document.body.style;
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
                    var i = document.body.style;
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
            var e = new TimelineLite();
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
