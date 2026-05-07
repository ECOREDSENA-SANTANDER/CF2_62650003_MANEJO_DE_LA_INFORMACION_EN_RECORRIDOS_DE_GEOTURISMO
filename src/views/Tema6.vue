<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Tema 6



    Separador
    #t_6_1.titulo-segundo.color-primario(data-aos='fade-right')
      h2 6.1  Geoconservación: medidas de preservación, estrategias, acciones y principios de No Dejar Rastro



    Separador
    #t_6_2.titulo-segundo.color-primario(data-aos='fade-right')
      h2 6.2  Evaluación y seguimiento: técnicas, instrumentos y oportunidades de mejora




</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
