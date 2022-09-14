<template>
  <div class="main-features">
    <div class="container px-mobile-fix">
      <div class="section-header py-lg-3 text-lg-center">
        <div class="mx-lg-8">
          <div class="mx-lg-8">
            <h3 class="h3 mb-3">Untuk Semua Kebutuhan Pengiriman Paketmu</h3>
          </div>
        </div>
      </div>
      <div class="row g-3 g-lg-4 mt-3">
        <div v-for="data in dataFeatures" :key="data" class="col-lg-4">
          <div class="card border-0">
            <div class="col-auto d-inline-flex col-lg-12 d-lg-block">
              <div class="with-accent px-4 py-2 mt-3">
                <div
                  class="d-inline-flex p-2 p-lg-3 full-radius bg-primary text-primary bg-opacity-10"
                ></div>
              </div>
            </div>
            <div class="col col-lg-12">
              <div class="card-body px-lg-4 pb-lg-4">
                <h4 class="card-title">
                  {{ data.sub }}
                </h4>
                <p class="m-0 text-dark text-opacity-50 fw-medium">
                  {{ data.text }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainFeatures',
  computed: {
    dataFeatures: {
      get() {
        return this.$store.state.mainFeatures.mainFeatures
      },
    },
  },
}
</script>

<style lang="scss" scoped>
@import '/assets/css/_variable.scss';

.main-features {
  .card {
    box-shadow: rgb(50 50 105 / 15%) 0 2px 5px 0, rgb(0 0 0 / 5%) 0 1px 1px 0;
    .with-accent {
      .bg-primary {
        background-color: $warnaJanda !important;
        opacity: 0.1;
      }
      &::before {
        position: absolute;
        left: -1px;
        width: 4px;
        border-radius: 0 20px 20px 0;
        top: 0;
        height: 100%;
        background: #6f2fab;
        background: var(--kj-accent, #6f2fab);
        content: '';
      }
    }
    .card-body {
      flex: 1 1 auto;
      padding: 1rem 1rem;

      .card-title {
        margin-bottom: 0.5rem;
      }
    }
  }
}
</style>
