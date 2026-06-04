<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-4 Los recorridos geoturísticos permiten descubrir el territorio desde una mirada diferente: no solo como un lugar para visitar, sino como un espacio que conserva la memoria de la Tierra, el paisaje, la cultura y las formas de vida de las comunidades. Por ello, diseñar y orientar este tipo de experiencias requiere reconocer el valor del patrimonio geológico, comprender las características de los visitantes y planear cada momento del recorrido con sentido educativo, seguridad y responsabilidad.
    
    .bloque-texto-g.color-acento-contenido.b-redo.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/intro/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4.px-lg-5
        p.mb-0 Este componente formativo aborda la planificación y ejecución de recorridos geoturísticos a partir de una mirada integral del servicio. Para ello, se parte del reconocimiento del recorrido, el perfil del usuario, la información del territorio y la construcción del guion interpretativo, hasta llegar a la organización de recursos, la cartografía, el plan de acción, la gestión de riesgos y las contingencias. De esta manera, el aprendiz podrá comprender cómo se estructura una experiencia turística coherente con el contexto y las necesidades del grupo. #[br] #[br] Además, se enfatiza la importancia de la evaluación y el seguimiento como parte esencial del servicio, para fortalecer la calidad de la experiencia y contribuir a una práctica geoturística responsable, educativa y sostenible.
        p.mb-0 Asimismo, se profundiza en la orientación del recorrido mediante estrategias de manejo de grupo, técnicas narrativas, comunicación no verbal y acciones de geoconservación. Estos elementos permiten que la experiencia no se limite a informar, sino que motive la participación, la interpretación del patrimonio y el respeto por el entorno. En este sentido, la formación aporta herramientas para desarrollar recorridos seguros, organizados y significativos.

    .cajon.color-primario.p-4.mb-4
      p.mb-0 Finalmente, el componente invita a valorar la evaluación y el seguimiento como parte esencial del servicio turístico. Analizar lo ocurrido durante el recorrido, reconocer oportunidades de mejora y proponer ajustes permite fortalecer la calidad de la experiencia y contribuir a una práctica geoturística responsable, educativa y sostenible.

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/gDh0DUNfD3Q?si=bgI4v4tZ4VB1dbpy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Diseño, planificación y ejecución de recorridos geoturísticos 


</template>

<script>
export default {
  name: 'Introduccion',
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
