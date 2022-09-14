<template>
  <section class="explore py-5 py-lg-7 mb-6">
    <div class="container px-mobile-fix">
      <!-- HEADER -->
      <div>
        <div class="section-header py-lg-5 text-lg-center">
          <div class="mx-lg-8">
            <div class="mx-lg-8">
              <h3 class="h3 mb-3">Kirim Paket Makin Singkat</h3>
              <div class="lead font-weight-medium" style="font-weight: 400">
                Masih kurang? Yuk explore sekarang biar ngga penasaran
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- body -->
      <div class="row my-4">
        <div class="col-lg-7">
          <img
            src="https://kiriminaja.com/assets/banner-home-2.png"
            alt=""
            class="img-fluid"
          />
        </div>
        <div class="col-lg">
          <ul class="list-check mt-3 mb-4 me-lg-2">
            <li v-for="data in dataExplore" :key="data.id">
              <span class="mr-2 position-relative">
                <img
                  class=""
                  src="https://kiriminaja.com/assets/home-2/shape.svg"
              /></span>
              {{ data.text }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ExpoloreBarang',
  computed: {
    dataExplore: {
      get() {
        return this.$store.state.mainFeatures.trackingData
      },
    },
  },
}
</script>

<style lang="scss" scoped>
@import '/assets/css/_global.scss';

.explore {
  @include list-check(#fff, 2px solid rgba(0, 0, 0, 0.125));
}
</style>
