<template>
  <div class="about-bottom py-5 mb-5 position-relative bg-light">
    <div class="container px-mobile-fix my-5">
      <div class="row">
        <div class="col-lg-6">
          <h4 class="h1 fw-bold">Anda adalah kami selanjutnya?</h4>
          <p class="lead">
            Jika anda memiliki passion tinggi dan menyukai tantangan. Mari
            berkontribusi kepada bangsa dengan membantu UMKM dan pebisnis online
            tumbuh.
          </p>
          <a
            href="https://kiriminaja.com/careers"
            class="btn btn-lg full-radius"
            >Berkarir di KiriminAja</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutBottom',
}
</script>

<style lang="scss">
@import '/assets/css/_variable.scss';

.about-bottom {
  .full-radius {
    border-radius: 5rem;
    background-color: $warnaJanda;
    color: white;
    font-size: 1.15rem;
    padding: 0.55rem 1.5rem;
  }
}
</style>
