<template>
    <div class="scroll-wrapper">
        <!-- <div class="title">Case Studies</div> -->
        <div class="card">
            <img src="@/assets/case.jpg" class="card-img-top" alt="..." />
            <div class="index">01</div>
            <div class="text">Hello</div>
        </div>

        <div class="card">
            <img src="@/assets/case.jpg" class="card-img-top" alt="..." />
            <div class="index">01</div>
            <div class="text">Hello</div>
        </div>

        <div class="card">
            <img src="@/assets/case.jpg" class="card-img-top" alt="..." />
            <div class="index">01</div>
            <div class="text">Hello</div>
        </div>

        <div class="card">
            <img src="@/assets/case.jpg" class="card-img-top" alt="..." />
            <div class="index">01</div>
            <div class="text">Hello</div>
        </div>
    </div>
</template>
<style scoped>
::v-deep.scroll-wrapper {
    position: relative;
    display: flex;
    overflow-x: hidden;
}
::v-deep.card {
    display: flex;
    padding: 5px;
    /* transform: rotate(90deg); */
    width: 560px;
}
</style>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Work',
    data() {
        return {};
    },
    mounted() {
        const scrollContainer = document.querySelector('.scroll-wrapper');

        scrollContainer.addEventListener('wheel', (evt) => {
            evt.preventDefault();
            scrollContainer.style.webkitTransform = `translate3d(${evt.deltaY}px,0px,0px)`;
            //             will-change: transform;
            //     transform: translate3d(-0.3483
            // rem
            // , 0
            // px
            // , 0
            // px
            // ) scale3d(1, 1, 1) rotateX(
            // 0deg) rotateY(
            // 0deg) rotateZ(
            // 0deg) skew(
            // 0deg,
            // 0deg);
            //     transform-style: preserve-3d;
            //             scrollContainer.scrollLeft += evt.deltaY;
            //         });
            //     },
        });
    },
});
</script>
