<template>
  <section class="about-main pt-3 pt-lg-5 pb-3 pt-lg-5 pb-lg-5">
    <div class="container mt-2 mb-lg-5 px-mobile-fix">
      <div class="me-lg-4">
        <div>
          <div class="section-header py-lg-5 text-lg-center">
            <div class="mx-lg-5">
              <div class="mx-lg-5">
                <h1 class="h1 mb-3 fw-semibold">
                  <span class="text-primary">Memberi solusi teknologi</span>
                  untuk kebutuhan supply chain yang mempermudah ekosistem bisnis
                  Indonesia berkembang.
                </h1>
                <div class="lead font-weight-medium" style="font-weight: 400">
                  Pengiriman untuk UMKM, Pebisnis Online, dan seluruh masyarakat
                  Indonesia.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- IMGE -->
      <img
        src="https://kiriminaja.com/assets/atrust/all_team.jpg"
        alt=""
        class="mt-3 img-fluid w-100"
        style="border-radius: 0.5rem"
      />
      <div class="mission mt-5 row g-0">
        <div class="col-lg-6">
          <!-- title -->
          <h4 class="h2 mb-lg-4 fw-semibold">Our Mission</h4>
          <div class="me-lg-5">
            <ul class="list-check">
              <li v-for="data in dataMission" :key="data.id">
                {{ data.text }}
              </li>
            </ul>
          </div>
        </div>
        <!-- ABOUT KIRIMIN AJA -->
        <div class="col-lg-6">
          <p class="lead">
            <span class="text-primary-light fw-medium">KiriminAja</span>
            sebuah platform yang memberikan kemudahan untuk pengiriman paket dan
            menemukan ekspedisi sesuai kebutuhan masyarakat, dengan metode
            pengiriman COD dan Non-COD yang dikembangkan oleh PT Selalu Siap
            Solusi.
          </p>
          <p class="lead">
            <span class="fw-medium">KiriminAja</span> memberikan solusi untuk
            UMKM, pebisnis online, serta seluruh masyarakat Indonesia yang ingin
            melakukan pengiriman paket.
          </p>
          <p class="lead">
            <span class="fw-medium">KiriminAja</span> menawarkan:
          </p>
          <ul class="lead">
            <li>
              Kemudahan pengiriman paket dengan pilihan berbagai ekspedisi.
            </li>
            <li>
              Adanya layanan pengiriman COD (Cash On Delivery) dengan pencairan
              dana harian dan sistem pengambilan paket dirumah oleh ekspedisi.
            </li>
            <li>
              Layanan pengiriman paket non-cod dengan sistem pengambilan paket
              dirumah oleh ekspedisi.
            </li>
            <li>
              Platform yang dapat membantu pebisnis online mengendalikan dan
              mengelola bisnisnya dengan lebih baik.
            </li>
          </ul>
          <p class="lead">
            Dengan layanan dan inovasi yang ditawarkan, KiriminAja memiliki
            komitmen untuk berkontribusi pada perekonomian Indonesia, dengan
            cara memberikan solusi serta kemudahan bagi para pebisnis online
            supaya bisnisnya terus berkembang.
          </p>
        </div>
      </div>
    </div>
    <!-- STAKEHOLDER -->
    <div class="container mt-2 mb-lg-5 px-mobile-fix">
      <div class="me-lg-5">
        <h4 class="h2 text-center mb-lg-5">Our Teams</h4>
        <div class="row">
          <div
            v-for="(data, index) in getUserData"
            :key="index"
            class="col-6 col-md-4 mb-4 col-centered"
          >
            <img
              :src="data.avatar"
              class="img-fluid w-100 mb-2"
              style="border-radius: 0.5rem"
            />
            <h5 class="mt-2 mb-0">
              <b>{{ data.name }}</b>
            </h5>
            <p>{{ data.Jabatan }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutMain',
  computed: {
    dataMission() {
      return this.$store.state.mainFeatures.ourMission
    },
    getUserData: {
      get() {
        return this.$store.state.dummy.user
      },
    },
  },
  mounted() {
    this.$store.dispatch('dummy/getDataUser')
  },
}
</script>

<style lang="scss">
@import '/assets/css/_global.scss';
@import '/assets/css/_variable.scss';

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
  .section-bottom {
    .full-radius {
      border-radius: 5rem !important;
    }
  }
  .mission {
    @include list-check(#eee4f8, 2px solid #6f2fab);
  }
}
</style>
