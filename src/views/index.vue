<template>
    <section class="fixed-top logo" id="indexBox">
        <div class="index-content">
            <div class="index-txt">
                <h3>bento works</h3>
                <div class="txt">Simplifying digital complexity</div>
            </div>
        </div>
    </section>
</template>
<style>
@media screen and (min-width: 768px) {
    #box1 {
        position: absolute;
        left: 1097px;
        top: -38px;
        background: #e1cac7;
        transform: rotate(-27.81deg);
        width: 194px;
        height: 193px;
        border-radius: 18px;
    }
    #box2 {
        position: absolute;
        left: 103px;
        top: 237px;
        background: #8cbea3;
        transform: rotate(39.49deg);
        height: 545px;
        width: 193px;
        border-radius: 20px; /* Vector */
    }

    #box3 {
        position: absolute;
        left: 1784.48px;
        top: 509px;
        background: #cb654f;
        transform: rotate(29.25deg);
        width: 308px;
        height: 308px;
        border-radius: 34px;
    }
}
</style>
<script>
export default {
    name: 'Index',
    data() {
        return {
            rafId: '',
            maxX: '0',
            maxY: '0',
            box: null,
            boxList: [],
        };
    },
    mounted() {
        const container = document.getElementById('indexBox');

        if (container) {
            this.run(container);
        }
        // mounted的时候监听滚轮事件，对应的方法为methods中handleScroll
        window.addEventListener('mousewheel', this.handleScroll, false);
    },
    unmounted() {
        window.removeEventListener('mousewheel', this.handleScroll);
    },
    methods: {
        handleScroll(e) {
            // 用来判断滚轮是向上滑动还是向下
            const direction = e.deltaY > 0 ? 'down' : 'up';
            const arrList = this.navList;
            // 鼠标滚轮向下或后
            if (direction == 'down') {
                // 跟随着选项卡而切换，以changeActive作为下标实现路由的path的读取
                this.$router.push({ name: 'Profile' });
            }
        },
        run(container) {
            const list = ['box1', 'box2', 'box3'];
            // 定义速度
            let speed;
            // 创建出num个div
            for (let i = 0; i < 3; i++) {
                // [2,11) 随机速度
                speed = Math.floor(Math.random() * 9 + 2);
                const div = document.createElement('div');
                div.id = list[i];
                // 自定义属性保存值
                div.speedX = Math.floor(Math.random() * 12 + 3);
                div.speedY = Math.floor(Math.random() * 12 + 4);
                div.maxX = document.documentElement.clientWidth - div.offsetWidth;
                div.maxY = document.documentElement.clientHeight - div.offsetHeight;

                container.appendChild(div);
                // 将div放置到body中
                this.boxList[i] = div;
            }
            // 自适应窗口
            window.onresize = () => {
                for (let i = 0; i < 3; i++) {
                    this.boxList[i].maxX = document.documentElement.clientWidth - this.boxList[i].offsetWidth;
                    this.boxList[i].maxY = document.documentElement.clientHeight - this.boxList[i].offsetHeight;
                }
            };
            this.play();
        },
        play() {
            for (let i = 0; i < this.boxList.length; i++) {
                const ball = this.boxList[i];
                // startTop都为零；
                let top = ball.offsetTop + ball.speedY;
                let left = ball.offsetLeft + ball.speedX;
                // 判断小球是否出左右边界
                if (left <= 0 || left >= ball.maxX) {
                    // 改变方向
                    ball.speedX = -ball.speedX;
                    // 判断
                    if (left <= 0) {
                        left = 0;
                    } else if (left >= ball.maxX) {
                        left = ball.maxX;
                    }
                }
                // 判断小球是否出上下边界
                if (top <= 0 || top >= ball.maxY) {
                    // 改变方向；
                    ball.speedY = -ball.speedY;
                    // 判断
                    if (top <= 0) {
                        top = 0;
                    } else if (top >= ball.maxY) {
                        top = ball.maxY;
                    }
                }
                ball.style.top = top + 'px';
                ball.style.left = left + 'px';
            }
            // 执行动画帧
            requestAnimationFrame(this.play);
        },
        jump() {
            if (this.rafId) {
                cancelAnimationFrame(this.rafId);
            }
            this.$router.push({ name: 'Profile' });
        },
    },
};
</script>
