<template>
  <section class="cek-barang">
    <div class="container">
      <div class="card border-0 elevation-4 mx-auto">
        <form class="position-relative p-4">
          <div class="row">
            <div class="col-lg">
              <div class="form-group mb-3 mb-lg-0">
                <label for="thru" class="form-label required">From</label>
                <div class="form-group mb-3 mb-lg-0">
                  <input
                    id="weight"
                    type="text"
                    min="1"
                    max="3"
                    placeholder="Kelurahan Asal"
                    name="weight"
                    required=""
                    class="form-control"
                  />
                </div>
              </div>
            </div>
            <div class="col-lg">
              <div class="form-group mb-3 mb-lg-0">
                <label for="thru" class="form-label required"
                  >Destination</label
                >
                <div class="form-group mb-3 mb-lg-0">
                  <input
                    id="weight"
                    type="text"
                    min="1"
                    placeholder="Kelurahan Tujuan"
                    name="weight"
                    required=""
                    class="form-control"
                  />
                </div>
              </div>
            </div>
            <div class="col-lg">
              <div class="form-group mb-3 mb-lg-0">
                <label for="weight" class="form-label required"
                  >Berat (Gram)</label
                >
                <input
                  id="weight"
                  type="number"
                  min="1"
                  placeholder="1000"
                  name="weight"
                  required=""
                  class="form-control"
                />
              </div>
            </div>
          </div>
          <!-- BUTTON -->
          <button id="cari" class="btn btn-primary btn-lg" type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="10" cy="10" r="7"></circle>
              <line x1="21" y1="21" x2="15" y2="15"></line>
            </svg>
            <span class="d-lg-none">Cek Tarif</span>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CekBarang',
}
</script>

<style lang="scss">
@import '/assets/css/_variable.scss';

.cek-barang {
  .card {
    box-shadow: rgb(50 50 105 / 15%) 0 2px 5px 0, rgb(0 0 0 / 5%) 0 1px 1px 0;
    .form-label.required {
      &::after {
        content: '*';
        margin-left: 2px;
        color: #dc3545;
      }
    }
    .form-control {
      padding: 0.15rem 0;
      background: transparent !important;
      border: none;
      box-shadow: none !important;
      outline: none !important;
      font-weight: 500;
    }
    .btn {
      position: absolute;
      right: 1.75rem;
      bottom: 1.85rem;
      padding: 0.55rem 0.75rem;
    }
    .btn-primary {
      background-color: $warnaJanda;
    }
  }
}
</style>
