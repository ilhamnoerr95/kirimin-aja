<template>
  <div :class="[theme ? 'white-theme' : 'dark-theme', '']">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '../pages/Header.vue'
import Footer from '../pages/Footer.vue'

export default {
  name: 'HomePage',
  components: { Header, Footer },
  computed: {
    theme: {
      get() {
        return this.$store.state.dummy.bodyTheme
      },
    },
  },
}
</script>
