<template>
  <div>
    <h1 class="coba">{{ counter }}</h1>
    <button @click="increment">add</button>
  </div>
</template>

<script>
// import { useStore } from '@nuxtjs/composition-api'

export default {
  name: 'AboutPage',
  layout: 'main',

  data() {
    return {
      count: 1,
    }
  },
  computed: {
    counter() {
      return this.$store.state.dummy.counter
    },
  },
  mounted() {
    this.$store.dispatch('dummy/getDataUser')
  },
  methods: {
    increment() {
      this.$store.commit('dummy/increment')
    },

    // increments() {
    //   this.count++
    // },
  },
}
</script>

<style lang="scss">
@import '/assets/css/_global.scss';

.coba {
  @include varBebas(red);
}
</style>
