<template>
  <!-- <header> -->
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container">
      <NuxtLink class="navbar-brand" to="/">
        <img src="~/assets/images/svg-logo-primary.svg" width="145" />
      </NuxtLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        id="navbarSupportedContent"
        class="collapse navbar-collapse mt-4 mt-lg-0 fw-medium"
      >
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <NuxtLink class="nav-link" aria-current="page" to="/"
              >Beranda</NuxtLink
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Kabar</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Layanan
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <a class="dropdown-item" href="#">Something else here</a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Cek Ongkir</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Lacak</a>
          </li>
          <li class="nav-item">
            <div class="vertical-spacer"></div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Daftar</a>
          </li>
          <li id="try-now" class="nav-item d-lg-flex align-items-center ml-3">
            <a
              href="https://dashboard.kiriminaja.com/v3/mbr20/login"
              class="btn full-radius py-2 px-4 btn-primary text-white"
              >Masuk</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- </header> -->
</template>

<script>
export default {
  name: 'HeaderDefault',
}
</script>

<style lang="scss" scoped>
@import '/assets/css/_variable.scss';

.navbar {
  // position: fixed;
  z-index: 99999;
  .nav-item {
    .nav-link {
      padding: 1.25rem 1.15rem;
      color: rgb(0, 0, 0);
      &:hover {
        color: rgba(0, 0, 0, 0.5);
      }
    }
    .vertical-spacer {
      margin: 1.25rem 1rem;
      width: 2px;
      height: calc(100% - 2.5rem);
      background: currentColor;
      opacity: 0.5;
    }
    .btn-primary {
      background-color: $warnaJanda;
      border-color: $warnaJanda;
      border-radius: 5rem;
      &:hover {
        background-color: rgba(111, 47, 171, 0.9);
      }
    }
  }
}
</style>
