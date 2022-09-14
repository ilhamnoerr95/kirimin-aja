<template>
  <div class="overflow-hidden iklan-download">
    <div
      class="container px-mobile-fix position-relative my-lg-4 p-lg-0 overflow-hidden"
    >
      <section class="position-relative">
        <div class="background-cover"></div>
        <div class="row position-relative">
          <div class="col-lg-6">
            <div class="mx-lg-8">
              <img
                src="https://kiriminaja.com/assets/home-2/call-to-action.png"
                class="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div class="col-lg py-5 py-lg-5">
            <h2 class="mb-2 h2 abcd mt-lg-5 mt-5 text-white me-lg-5">
              Gratis daftar dalam hitungan detik
            </h2>
            <p
              class="text-white text-opacity-50 fw-medium me-lg-5 me-5 text-opacity-50"
            >
              Semua bisa mulai kirim paket tanpa ribet. Jadikan pengalaman
              pengiriman paket lebih mudah dengan KiriminAja.
            </p>
            <div class="mt-3 mt-lg-4">
              <a
                target="_blank"
                href="https://apps.apple.com/us/app/kiriminaja/id1544207424"
                class="woodle"
              >
                <img
                  src="https://kiriminaja.com/assets/service/v2/appstore-compressed.png"
                  height="40px"
                  alt=""
                />
              </a>
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=id.tries.kiriminaja&amp;hl=in"
                class="woodle me-2"
              >
                <img
                  src="https://kiriminaja.com/assets/service/v2/googleplay-compressed.png"
                  height="40px"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IklanDaftar',
}
</script>

<style lang="scss" scoped>
.iklan-download {
  div {
    // height: 80%;

    section {
      border-radius: 0.5rem;
      background-color: #6f2fab;
      // height: 30vh;

      .background-cover {
        opacity: 0.5;
        position: absolute;
        left: 0;
        width: 100%;
        top: 0;
        filter: blur(3px px);
        -webkit-filter: blur(3px);
        height: 100%;
        background-image: url(https://kiriminaja.com/assets/home-2/banner-without-text.png);
        background-size: auto 100%;
        background-position-x: -5rem;
        background-repeat: no-repeat;
      }

      .py-5 {
        padding-top: 8rem !important;
      }
    }
  }
}
</style>
