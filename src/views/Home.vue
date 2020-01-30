<template>
  <div class="home container is-fluid">
    <div class="content is-relative">
      <save-the-date @onCompleteStep1Handle="onCompleteStep1Handle" />
      <transition name="fade" appear mode="out-in">
        <wedding-name v-if="step1" ref="name" />
      </transition>
      <transition name="fade" appear mode="out-in">
        <wedding-when v-if="step2" class="is-paddingless" ref="when" />
      </transition>
      <transition name="fade" appear mode="out-in">
        <moments v-if="step3" ref="moments" />
      </transition>
    </div>
    <div class="decors is-relative">
      <decor-left />
      <decor-right />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { TimelineMax, TweenMax, Power4 } from 'gsap';
export default {
  name: 'home',
  components: {
    SaveTheDate: () => import('@/components/savethedate'),
    WeddingName: () => import('@/components/name'),
    WeddingWhen: () => import('@/components/date'),
    DecorLeft: () => import('@/components/decors/left'),
    DecorRight: () => import('@/components/decors/right'),
    Moments: () => import('@/components/moments')
  },
  data() {
    return {
      step1: false,
      step2: false,
      step3: false
    }
  },
  methods: {
    onCompleteStep1Handle() {
      let tl = new TimelineMax();
      TweenMax.set(this.$refs.name, { opacity: 0 })
      TweenMax.set(this.$refs.when, { opacity: 0, y: 100 })
      TweenMax.set(this.$refs.moments, { opacity: 0, y: 100 })
      // set tweenmax
      tl.to(this.$refs.name, 0.2, { opacity: 1, onComplete: () => { this.step1 = true } })
        .to(this.$refs.when, 1, { opacity: 1, y: 0, delay: 2, ease: Power4.easeOut, onComplete: () => { this.step2 = true } })
        .to(this.$refs.moments, 1, { opacity: 1, y: 0, ease: Power4.easeOut, onComplete: () => { this.step3 = true } })
    }
  },
}
</script>
<style lang="scss">
.content {
  z-index: 1;
  min-height: 100%;
}
.decors{
  z-index: 0;
  .decor {
    position: fixed
  }
}
.home {
  padding: 0;
  margin: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: all .5s ease-in-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0; 
  transform: translateY(200px)
}
</style>
