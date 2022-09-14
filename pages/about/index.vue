<template>
  <div class="wrapper">
    <section class="about-main pt-3 pt-lg-5 pb-3 pt-lg-5 pb-lg-5">
      <div class="container mt-2 mb-lg-5 px-mobile-fix">
        <div class="me-lg-4">
          <div>
            <div class="section-header py-lg-5 text-lg-center">
              <div class="mx-lg-5">
                <div class="mx-lg-5">
                  <h1 class="h1 mb-3 fw-semibold">
                    <span class="text-primary">Memberi solusi teknologi</span>
                    untuk kebutuhan supply chain yang mempermudah ekosistem
                    bisnis Indonesia berkembang.
                  </h1>
                  <div class="lead font-weight-medium" style="font-weight: 400">
                    Pengiriman untuk UMKM, Pebisnis Online, dan seluruh
                    masyarakat Indonesia.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="https://kiriminaja.com/assets/atrust/all_team.jpg"
          alt=""
          class="mt-3 img-fluid w-100"
          style="border-radius: 0.5rem"
        />
        <div class="mt-5 row g-0">
          <div class="col-lg-6">
            <!-- title -->
            <h4 class="h2 mb-lg-4 fw-semibold">Our Mission</h4>
            <div class="me-lg-5"></div>
          </div>
          <div class="col-lg-6"></div>
        </div>
      </div>
      <div class="container mt-2 mb-lg-5 px-mobile-fix"></div>
    </section>
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
@import '/assets/css/_variable.scss';

.wrapper {
  .about-main {
    .section-header {
      .mx-lg-5 {
        margin-right: 5rem !important;
        margin-left: 5rem !important;
      }
      .text-primary {
        color: $warnaJanda !important;
      }
    }
  }
}
</style>
