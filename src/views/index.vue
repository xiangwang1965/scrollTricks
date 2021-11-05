<template>
    <div id="indexBox"></div>
</template>
<style>
.animateBall {
    width: 100px;
    height: 100px;
    background: red;
    position: absolute;
    border-radius: 10px;
    transform: rotate(30deg);
}
#indexBox {
    position: relative;
    width: 100vw;
    height: 100vh;
}
</style>
<script>
export default {
    name: 'Profile',
    data() {
        return {
            rafId: '',
            list: [`rgb(228,216,214)`, `rgb(217,165,164)`, `rgb(185,210,197)`],
            maxX: '0',
            maxY: '0',
            box: null,
        };
    },
    mounted() {
        const container = $('#indexBox');

        if (container) {
            this.run(container);
        }
        // mounted的时候监听滚轮事件，对应的方法为methods中handleScroll
        // window.addEventListener('mousewheel', this.handleScroll, false);
    },
    unmounted() {
        // window.removeEventListener('mousewheel', this.handleScroll);
    },
    methods: {
        handleScroll(e) {
            // 用来判断滚轮是向上滑动还是向下
            const direction = e.deltaY > 0 ? 'down' : 'up';
            // console.log(direction)
            const arrList = this.navList;
            // 鼠标滚轮向下或后
            if (direction == 'down') {
                //     if (this.changeActive < arrList.length - 1) {
                //         this.changeActive = this.changeActive + 1;
                // 跟随着选项卡而切换，以changeActive作为下标实现路由的path的读取
                this.$router.push({ name: 'Home' });
            }
            // } else {
            //     //向上或前
            //     if (this.changeActive > 0) {
            //         this.changeActive = this.changeActive - 1;
            //         this.$router.push({
            //             path: arrList[this.changeActive].path,
            //         });
            //     }
            // }
        },
        run(container) {
            // 定义速度
            let speed;
            // 创建出num个div
            for (let i = 0; i < 3; i++) {
                const div = $("<div class='animateBall'></div>").appendTo(container)[0];
                // [2,11) 随机速度
                speed = Math.floor(Math.random() * 9 + 2);
                // 自定义属性保存值
                div.speedX = Math.floor(Math.random() * 9 + 3);
                div.speedY = Math.floor(Math.random() * 9 + 4);
                // 将div放置到body中
            }

            // 获取元素
            this.box = document.getElementsByClassName('animateBall');
            // 获取文档可视区域的宽高
            this.maxX = document.documentElement.clientWidth - this.box[0].offsetWidth;
            this.maxY = document.documentElement.clientHeight - this.box[0].offsetHeight;
            // 自适应窗口
            window.onresize = () => {
                this.maxX = document.documentElement.clientWidth - this.box[0].offsetWidth;
                this.maxY = document.documentElement.clientHeight - this.box[0].offsetHeight;
            };
            this.play();
        },
        play() {
            TweenMax.staggerTo(
                '.animateBall',
                1,
                {
                    cycle: {
                        // an array of values
                        backgroundColor: this.list,
                        // function that returns a value
                        y: function (index, target) {
                            // console.log(index, target)  <div class="box"></div>
                            // index represents index of tween in the array of targets
                            return index * 20;
                        },
                        x: function (index, target) {
                            return index * 20;
                        },
                    },
                },
                1,
            );
            // for (let i = 0; i < 3; i++) {
            //     // 获取
            //     const ball = box[i];
            //     if (!ball) {
            //         break;
            //     }
            //     const startTop = ball && ball.offsetTop;
            //     const startLift = ball && ball.offsetLeft;
            //     // startTop都为零；
            //     let top = startTop + ball.speedY;
            //     let left = startLift + ball.speedX;
            //     ball.style.background = this.list[i];
            //     // 判断小球是否出左右边界
            //     if (left <= 0 || left >= this.maxX) {
            //         // 改变方向
            //         ball.speedX = -ball.speedX;
            //         // 判断
            //         if (left <= 0) {
            //             left = 0;
            //         } else if (left >= this.maxX) {
            //             left = this.maxX;
            //         }
            //     }
            //     // 判断小球是否出上下边界
            //     if (top <= 0 || top >= this.maxY) {
            //         // 改变方向；
            //         ball.speedY = -ball.speedY;
            //         // ball.style.background = randomColor();
            //         // 判断
            //         if (top <= 0) {
            //             top = 0;
            //         } else if (top >= this.maxY) {
            //             top = this.maxY;
            //         }
            //     }
            //     ball.style.top = top + 'px';
            //     ball.style.left = left + 'px';
            // }
            // // 执行动画帧
            // this.rafId = requestAnimationFrame(this.play);
        },
        jump() {
            // if (this.rafId) {
            //     cancelAnimationFrame(this.rafId);
            // }
            this.$router.push({ name: 'Profile' });
        },
    },
};
</script>
