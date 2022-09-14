<template>
  <div>
    <FrontBanner />
    <CekBarang />
    <EkspedisiList />
    <div class="py-1 py-lg-5"></div>
    <!-- BANNER IKLAN -->
    <section>
      <div class="container px-mobile-fix">
        <a
          href="https://kiriminaja.com/pesta-pora"
          target="_blank"
          class="d-block"
        >
          <img
            src="https://kiriminaja.com/assets/home-2/pesta-pora-new.png"
            alt=""
            class="img-fluid w-100 main-radius elevation-super-2"
          />
        </a>
      </div>
    </section>
    <div class="py-1 py-lg-5"></div>
    <MainFeatures />
    <ExploreBarang />
    <!-- <IklanDownload /> -->
  </div>
</template>

<script>
import FrontBanner from '~/components/home/FrontBanner.vue'
import EkspedisiList from '@/components/home/EkspedisiList.vue'
import CekBarang from '@/components/home/CekBarang.vue'
import MainFeatures from '@/components/home/MainFeatures.vue'
import ExploreBarang from '@/components/home/ExploreBarang.vue'
// import IklanDownload from '@/components/home/IklanDaftar.vue'

export default {
  name: 'IndexPage',
  components: {
    FrontBanner,
    EkspedisiList,
    CekBarang,
    MainFeatures,
    ExploreBarang,
    // IklanDownload,
  },
  layout: 'main',
}
</script>
