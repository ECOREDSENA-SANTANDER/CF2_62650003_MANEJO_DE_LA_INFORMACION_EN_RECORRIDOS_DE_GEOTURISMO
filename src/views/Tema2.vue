<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Tema 2


    Separador
    #t_2_1.titulo-segundo.color-primario(data-aos='fade-right')
      h2 2.1 Fuentes de información y manifestaciones culturales del territorio



    Separador
    #t_2_2.titulo-segundo.color-primario(data-aos='fade-right')
      h2 2.2  Guion del recorrido e interpretación del patrimonio: relatos, diálogos, actividades, redacción y validación


    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt1.svg', alt='')
      h2.mb-0 





    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt1.svg', alt='')
      h2.mb-0 


</template>

<script>
export default {
  name: 'Tema2',
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
