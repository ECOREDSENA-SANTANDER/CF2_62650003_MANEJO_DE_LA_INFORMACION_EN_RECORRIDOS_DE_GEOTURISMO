<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p La planificación y ejecución de recorridos geoturísticos requiere integrar el conocimiento del territorio, la caracterización de los visitantes, la organización del servicio y la gestión responsable de los recursos. A través del diseño del recorrido, el uso de fuentes confiables, la construcción del guion interpretativo, la cartografía, el plan de acción y la gestión de riesgos, el guía fortalece su capacidad para orientar experiencias seguras, educativas y significativas. Asimismo, el manejo de grupo, la técnica narrativa, la comunicación no verbal, la geoconservación y la evaluación del servicio permiten que el recorrido no solo informe, sino que motive la participación, promueva el respeto por el patrimonio geológico y contribuya a la mejora continua de la actividad turística.  

    .row.justify-content-center
      .col-lg-12.mb-5.p-4
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual titulado “Diseño, planificación y ejecución de recorridos geoturísticos”. Presenta seis bloques principales: diseño del recorrido geoturístico; información e interpretación del territorio; planeación técnica y operativa del recorrido; riesgos y contingencias; ejecución e interpretación del recorrido geoturístico; y geoconservación, evaluación y mejora del recorrido. Cada bloque incluye palabras clave asociadas, como recorrido geoturístico, perfil de usuario, fuentes de información, cultura, protocolos, cartografía, factores de riesgo, contingencia, manejo de grupo, interpretación, geoconservación y evaluación. El mapa muestra la relación entre la planeación, ejecución, seguridad, conservación y mejora continua de los recorridos geoturísticos.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
