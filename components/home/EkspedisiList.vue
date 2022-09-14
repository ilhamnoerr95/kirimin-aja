<template>
  <section class="ekspedisi-list">
    <div class="container px-mobile-fix">
      <div class="mt-4">
        <div
          id="carouselExampleInterval"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div style="width: 113px; margin-right: 50px">
              <div
                v-for="(data, index) in dataEkspedisi"
                :key="index"
                :class="index === 0 ? 'carousel-item active' : 'carousel-item'"
                data-bs-interval="2000"
              >
                <div class="p-4 mb-3 mb-lg-0 col-lg text-center">
                  <img
                    :src="data.image"
                    class="d-flex w-100"
                    alt="..."
                    height="40px"
                    style="max-height: 40px; width: auto"
                  />
                </div>
              </div>
            </div>
            <!-- <div class="carousel-item active" data-bs-interval="2000">
              <img
                src="http://loremflickr.com/640/480/business"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img
                src="http://loremflickr.com/640/480/business"
                class="d-block w-100"
                alt="..."
              />
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EkspedisiList',
  computed: {
    dataEkspedisi: {
      get() {
        return this.$store.state.dummy.ekspedisi
      },
    },
  },
  mounted() {
    this.$store.dispatch('dummy/getDataEkspedisi')
  },
  method: {},
}
</script>
