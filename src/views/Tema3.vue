<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Tema 3



    Separador
    #t_3_1.titulo-segundo.color-primario(data-aos='fade-right')
      h2 3.1  Servicio y recursos para la guianza: protocolos, ciclo de servicio, estándares, recursos humanos, financieros, materiales y equipos



    Separador
    #t_3_2.titulo-segundo.color-primario(data-aos='fade-right')
      h2 3.2  Cartografía aplicada al turismo: mapas, interpretación, herramientas de orientación y levantamiento de rutas



    Separador
    #t_3_3.titulo-segundo.color-primario(data-aos='fade-right')
      h2 3.3  Plan de acción del recorrido: componentes, estructura e itinerario




</template>

<script>
export default {
  name: 'Tema3',
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
