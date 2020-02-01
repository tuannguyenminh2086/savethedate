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
  metaInfo: {
    // Children can override the title.
    title: 'TUNA LOVE SEA',
    // Result: My Page Title ← My Site
    // If a child changes the title to "My Other Page Title",
    // it will become: My Other Page Title ← My Site
    titleTemplate: '%s ← Save the date',
    // Define meta tags here.
    meta: [
      {name: 'description', content: 'We are getting married'},
      // OpenGraph data (Most widely used)
      {property: 'og:title', content: 'Save the date ← TunaloveSea'},
      {property: 'og:site_name', content: 'TunaloveSea'},
      // The list of types is available here: http://ogp.me/#types
      {property: 'og:type', content: 'website'},
      // Should the the same as your canonical link, see below.
      {property: 'og:url', content: 'https://tunalovesea.com/'},
      {property: 'og:image', content: 'https://tunalovesea.com/img/thumbnail.jpg'},
      // Often the same as your meta description, but not always.
      {property: 'og:description', content: 'We are getting married.'},
      // Twitter card
      {name: 'twitter:card', content: 'summary'},
      {name: 'twitter:site', content: 'https://tunalovesea.com/'},
      {name: 'twitter:title', content: 'Save the date ← TunaloveSea'},
      {name: 'twitter:description', content: 'We are getting married.'},
      // Your twitter handle, if you have one.
      {name: 'twitter:creator', content: '@tuannguyenminh'},
      {name: 'twitter:image:src', content: 'https://tunalovesea.com/img/thumbnail.jpg'},
      // Google / Schema.org markup:
      {itemprop: 'name', content: 'Save the date ← TunaloveSea'},
      {itemprop: 'description', content: 'We are getting married.'},
      {itemprop: 'image', content: 'https://tunalovesea.com/img/thumbnail.jpg'}
    ]
  }
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
