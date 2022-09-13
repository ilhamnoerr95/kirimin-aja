<template>
  <footer>
    <button @click="setTheme">UBAH TEMA</button>
  </footer>
</template>

<script>
export default {
  name: 'FooterDefault',
  methods: {
    setTheme() {
      if (this.$store.state.dummy.bodyTheme) {
        this.$store.commit('dummy/changeTheme', false)
      } else {
        this.$store.commit('dummy/changeTheme', true)
      }
    },
  },
}
</script>
