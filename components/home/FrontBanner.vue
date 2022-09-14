<!-- Please remove this file from your project -->
<template>
  <header class="front-banner position-relative pt-5 pb-3 overflow-hidden">
    <div class="container px-mobile-fix">
      <div
        id="carouselExampleCaptions"
        class="carousel slide mb-5"
        data-bs-ride="carousel"
      >
        <!-- CAROUSEL INNER -->
        <div class="carousel-inner">
          <div
            v-for="(data, index) in getDataBanner"
            :key="index"
            :class="index === 0 ? 'carousel-item active' : 'carousel-item'"
            data-bs-interval="5000"
          >
            <div class="row align-items-center">
              <div class="col-5 order-lg-0">
                <div class="ms-4">
                  <div class="mx-4">
                    <img :src="data.avatar" class="d-block w-100" alt="..." />
                  </div>
                </div>
              </div>
              <div class="col-7 order-lg-1">
                <!-- <div class="me-lg-5 mt-5 mt-lg-5"> -->
                <div
                  class="text-start me-lg-5 mt-5 mt-lg-5"
                  style="color: black"
                >
                  <span
                    class="px-3 py-2 fw-medium bg-warning"
                    style="
                      color: orange;
                      border-radius: 5rem;
                      outline: rgb(204, 38, 67) solid 1px;
                      --bs-bg-opacity: 0.1;
                    "
                    >#{{ data.id }} Info</span
                  >
                  <h2 class="h2 me-lg-5 mt-2 mt-lg-3">{{ data.title }}</h2>
                  <p class="lead">
                    {{ data.text }}
                  </p>
                  <div class="divider mt-4"></div>
                  <div class="mt-3 mt-lg-4">
                    <div class="row">
                      <div class="col-lg-auto pb-3">
                        <a
                          href="https://kiriminaja.com/sayembara-umkm-ceritakanbrandmu"
                          class="btn btn-lg btn-primary w-100 full-radius"
                          >Selengkapnya</a
                        >
                      </div>
                    </div>
                  </div>
                  <!-- </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- CAROUSEL INDICATORS -->
        <ol class="carousel-indicators position-relative mt-5">
          <div v-for="(data, index) in getDataBanner" :key="index">
            <li
              data-bs-target="#carouselExampleCaptions"
              :data-bs-slide-to="index"
              :class="[index === 0 ? 'active' : '', 'mx-2']"
            ></li>
          </div>
        </ol>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'FrontBanner',
  computed: {
    getDataBanner: {
      get() {
        return this.$store.state.dummy.frontBanner
      },
    },
  },
  mounted() {
    this.$store.dispatch('dummy/getDataBanner')
  },
}
</script>

<style lang="scss">
@import '/assets/css/_global.scss';

.front-banner {
  .carousel {
    .carousel-inner {
      .btn-primary {
        background-color: #6f2fab !important;
      }
    }
  }
  .carousel-indicators {
    li {
      background-color: #869791 !important;
      width: 10px;
      height: 10px;
      border-radius: 100%;
      &:hover {
        background-color: #d6d6d6 !important;
      }
    }
    // .active {
    //   background-color: black !important;
    // }
  }
}
</style>
