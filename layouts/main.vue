<template>
  <div :class="[theme ? 'white-theme' : 'dark-theme', '']">
    <Header />
    <Nuxt />
    <IklanDownload />

    <Footer />
  </div>
</template>

<script>
import Header from '../pages/Header.vue'
import Footer from '../pages/Footer.vue'
import IklanDownload from '@/components/home/IklanDaftar.vue'

export default {
  name: 'HomePage',
  components: { Header, Footer, IklanDownload },
  computed: {
    theme: {
      get() {
        return this.$store.state.dummy.bodyTheme
      },
    },
  },
}
</script>
