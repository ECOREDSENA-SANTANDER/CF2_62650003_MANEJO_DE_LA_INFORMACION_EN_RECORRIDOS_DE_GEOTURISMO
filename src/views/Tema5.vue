<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Tema 5



    Separador
    #t_5_1.titulo-segundo.color-primario(data-aos='fade-right')
      h2 5.1  Manejo de grupo: técnicas, estrategias y participación de los usuarios



    Separador
    #t_5_2.titulo-segundo.color-primario(data-aos='fade-right')
      h2 5.2  Técnica narrativa y comunicación no verbal: persuasión, elementos comunicativos y experiencia interpretativa




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
