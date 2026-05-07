<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Tema 2

    .bg3.mb-4(data-aos="fade")
      .row.justify-content-center.align-items-center
        .col-lg-5
          img(src='@/assets/curso/temas/t2/1.png', alt='')
        .col-lg-7
          .p-4
            img.w-95x.mb-3(src='@/assets/curso/temas/t2/2.svg', alt='')
            p La información es la base para construir un recorrido geoturístico claro, responsable y significativo. Antes de orientar a un grupo, el guía necesita investigar el territorio, reconocer sus características naturales y culturales, seleccionar datos confiables y transformar esa información en mensajes comprensibles para los visitantes.
            p.mb-0 Interpretar el territorio no significa repetir datos de memoria. Implica relacionar el paisaje, el patrimonio geológico, la cultura local, las historias, las prácticas comunitarias y las experiencias del visitante. Así, el recorrido se convierte en una oportunidad para aprender, valorar y conservar el lugar visitado.

    .cajon.color-acento-contenido.p-4(data-aos="fade")
      .row.justify-content-center.align-items-center
        .col-lg-1.col-md-3.col-5.mb-3.mb-md-0
          img(src='@/assets/curso/temas/t2/3.svg', alt='')
        .col-lg-10.col-md-9
          p.mb-0 Un buen recorrido geoturístico no solo informa: ayuda a comprender el territorio y genera conexión entre el visitante, el paisaje y la comunidad.
    

    Separador
    #t_2_1.titulo-segundo.color-primario(data-aos='fade-right')
      h2 2.1 Fuentes de información y manifestaciones culturales del territorio

    p Para preparar un recorrido geoturístico, el guía debe apoyarse en información confiable, pertinente y actualizada. Esta información permite comprender el destino, reconocer sus recursos, identificar su valor patrimonial y organizar una experiencia de guianza más clara y segura.
    p.mb-4 De acuerdo con Álvaro et al. (2020), la elaboración del guion turístico requiere consultar diferentes fuentes de información. Las fuentes primarias aportan datos obtenidos directamente en el territorio, mientras que las fuentes secundarias reúnen información ya elaborada en documentos, libros, informes, estadísticas o materiales especializados.

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt1.svg', alt='')
      h2.mb-0 Fuentes para conocer el territorio

    TabsA.color-acento-botones.mb-4(data-aos="fade-down")
      .tarjeta.bg4.p-4(titulo="Fuentes primarias")
        p Son datos obtenidos directamente en el lugar o con los actores del territorio. Incluyen entrevistas a habitantes, conversaciones con prestadores de servicios, encuestas a visitantes, observación directa, recorridos exploratorios y registros de campo. Estas fuentes ayudan a reconocer información viva, actual y contextualizada.
      .tarjeta.bg4.p-4(titulo="Fuentes secundarias")
        p Son documentos o materiales ya elaborados por otras personas o instituciones. Pueden ser libros, artículos, informes técnicos, estadísticas, mapas, inventarios turísticos, páginas oficiales, planes de desarrollo, investigaciones académicas y documentos normativos. Sirven para sustentar la información con mayor rigor.
      .tarjeta.bg4.p-4(titulo="Investigación documental")
        p Consiste en revisar, comparar y analizar información escrita, audiovisual o sonora sobre un tema específico. Bernal Torres (2010) señala que este tipo de investigación permite identificar relaciones, diferencias, avances y el estado del conocimiento disponible.
      .tarjeta.bg4.p-4(titulo="Verificación de la información")
        p El guía debe contrastar los datos antes de usarlos en el recorrido. Si comparte información desactualizada, incompleta o imprecisa, puede afectar la credibilidad del servicio y generar una interpretación equivocada del territorio.
    
    p Las manifestaciones culturales también son fuentes valiosas para comprender el territorio. A través de ellas se reconocen las formas de vida, las memorias, las tradiciones y los saberes que las comunidades han construido en relación con su entorno.
    
    .bg5.mb-5(data-aos="fade")
      .row.justify-content-center.align-items-center
        .col-lg-5
          img(src='@/assets/curso/temas/t2/4.png', alt='')
        .col-lg-7
          .p-4.text-white
            p.mb-0 En Colombia, el Ministerio de las Culturas, las Artes y los Saberes reconoce que el patrimonio cultural inmaterial está conformado por tradiciones vivas, conocimientos, prácticas y expresiones que fortalecen la identidad de los grupos humanos. Por eso, en la guianza turística, estas manifestaciones no deben presentarse como datos aislados, sino como elementos que ayudan a comprender la historia, los valores y la vida cotidiana de las comunidades anfitrionas.

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt1.svg', alt='')
      h2.mb-0 Manifestaciones culturales que enriquecen el recorrido

      


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
