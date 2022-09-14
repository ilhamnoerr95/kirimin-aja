<template>
  <div class="wrapper">
    <AboutMain />
    <AboutBottom />
  </div>
</template>

<script>
import AboutMain from '@/components/about/AboutMain.vue'
import AboutBottom from '@/components/about/AboutBottom.vue'

export default {
  name: 'AboutPage',
  components: { AboutMain, AboutBottom },
  layout: 'main',
}
</script>

<style lang="scss">
@import '/assets/css/_global.scss';
@import '/assets/css/_variable.scss';

.wrapper {
  .lead {
    font-size: 1.2rem;
    font-weight: 300;
  }
}
</style>
