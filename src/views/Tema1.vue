<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Diseño del recorrido geoturístico
      
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t1/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Diseñar un recorrido geoturístico implica planear una experiencia turística que permita interpretar el territorio desde su valor geológico, natural, cultural y educativo. No se trata solo de seleccionar lugares para visitar, sino de estructurar una ruta con propósito, en la que el visitante comprenda los procesos que dieron origen al paisaje, reconozca la importancia del patrimonio geológico y participe en actividades que favorezcan su conservación. #[br] #[br]
        p.mb-0 Los recorridos geoturísticos, también llamados georutas o itinerarios científicos, facilitan la divulgación del conocimiento geológico y promueven su aprovechamiento responsable. Para ello, la información debe comunicarse de manera clara y comprensible, mediante recursos audiovisuales, actividades interactivas, señalización o estrategias de interpretación adaptadas al tipo de visitante, sin perder rigurosidad técnica (Martín, 2013).

    p En este proceso, la comunicación del conocimiento geológico es fundamental, porque articula el turismo tradicional con el geoturismo y permite que los visitantes comprendan el origen, valor, fragilidad y relación de los geositios con otros componentes del territorio. Por esta razón, cada geositio, geomorfositio o atractivo de interés geológico puede acompañarse de descripciones breves, recursos interpretativos y modelos sencillos de explicación, ajustados al medio y al público objetivo (Carcavilla, 2012).
    p.mb-4 Las modalidades del recorrido geoturístico varían según el propósito de la visita, el público, el tiempo disponible y las condiciones del territorio. Pueden incluir rutas guiadas, geosenderos, itinerarios autoguiados, salidas de campo, visitas a geositios, talleres, exposiciones, recorridos educativos y actividades apoyadas en recursos audiovisuales o interactivos. Estas modalidades hacen que los geoparques y territorios con valor geológico funcionen como espacios de aprendizaje, sensibilización y recreación.

    .cajon.color-acento-contenido.p-4.mb-5(data-aos="fade")
      p Según la UNESCO (2021), los productos geoturísticos pueden ser materiales o inmateriales y surgir de la cultura, las tradiciones, el patrimonio natural, el arte y otros valores vivos de las comunidades locales. Por ello, el geoturismo no se limita a explicar rocas, fósiles o formas del relieve, sino que integra identidad territorial, participación comunitaria, biodiversidad y valoración del patrimonio natural y cultural.
      p.mb-0 Los objetivos de un recorrido geoturístico se orientan a divulgar el conocimiento geológico, valorar el geopatrimonio, sensibilizar sobre la conservación del entorno, fortalecer la identidad territorial, fomentar el aprendizaje en campo y diversificar la oferta turística. En este sentido, las rutas geoturísticas son herramientas fundamentales para interpretar y difundir el valor del geopatrimonio y de la geodiversidad (Dóniz-Páez & Quintero Alonso, 2016; Meléndez-Hevia et al., 2011).

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt1.svg', alt='')
      h2.mb-0 Actividades que enriquecen la experiencia geoturística

    p.mb-1 El geoturismo integra actividades que permiten aprender, observar, interpretar y disfrutar el territorio de manera activa. Estas experiencias combinan recreación y educación geológica, favoreciendo procesos de aprendizaje en contextos formales, no formales e informales, y acercando a diferentes públicos al conocimiento del paisaje y del patrimonio geológico (Damas Mollá et al., 2024; Fernández-Martínez et al., 2014; Schilling, 2019).
    p.mb-4 Entre las actividades más representativas se encuentran:

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-3.col-md-6.mb-3
        .tarjeta--boton.bg1.color-botones.h-100.p-4
          .row.justify-content-center.mb-3
            .col-lg-7.col-md-6.col-5
              img(src='@/assets/curso/temas/t1/tarj1-1.svg', alt='')
          h4.text-center Exploración del territorio
          p.text-center Observación de formaciones geológicas, interpretación de fósiles, caminatas por geosenderos y salidas de campo.
      .col-lg-3.col-md-6.mb-3
        .tarjeta--boton.bg1.color-botones.h-100.p-4
          .row.justify-content-center.mb-3
            .col-lg-7.col-md-6.col-5
              img(src='@/assets/curso/temas/t1/tarj1-2.svg', alt='')
          h4.text-center Experiencias de aprendizaje
          p.text-center Talleres temáticos, exposiciones, conferencias y uso de materiales audiovisuales.
      .col-lg-3.col-md-6.mb-3
        .tarjeta--boton.bg1.color-botones.h-100.p-4
          .row.justify-content-center.mb-3
            .col-lg-7.col-md-6.col-5
              img(src='@/assets/curso/temas/t1/tarj1-3.svg', alt='')
          h4.text-center Actividades de apreciación del entorno
          p.text-center Fotografía del paisaje y aviturismo.
      .col-lg-3.col-md-6.mb-3
        .tarjeta--boton.bg1.color-botones.h-100.p-4
          .row.justify-content-center.mb-3
            .col-lg-7.col-md-6.col-5
              img(src='@/assets/curso/temas/t1/tarj1-4.svg', alt='')
          h4.text-center Acciones de interpretación guiada
          p.text-center Recorridos orientados que facilitan la comprensión del valor geológico, natural y cultural del lugar.
  
  
    Separador
    #t_1_1.titulo-segundo.color-primario(data-aos='fade-right')
      h2 1.1  Perfil de usuario en el geoturismo: tipologías, características, segmentos e importancia para la guianza turística

    .bloque-texto-g.color-acento-contenido.b-redo.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t1/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4.px-lg-5
        p.mb-0 Conocer el perfil del usuario es fundamental para planear recorridos geoturísticos pertinentes, seguros y significativos. Cada visitante llega al territorio con intereses, conocimientos previos, motivaciones y expectativas diferentes; por ello, el guía debe adaptar el lenguaje, las actividades, el ritmo del recorrido y los recursos de interpretación. #[br] #[br]
        p.mb-0 En geoturismo, los visitantes pueden interesarse por el paisaje, las rocas, los fósiles, las montañas, los volcanes, las cuevas y otros elementos del patrimonio geológico. Sin embargo, no todos se acercan al territorio con la misma motivación: algunos buscan conocimiento técnico, otros desean recreación, contacto con la naturaleza, experiencias culturales o aprendizaje guiado (Dowling & Newsome, 2018).

    .cajon.color-acento-contenido.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-1.col-md-3.col-5.mb-3.mb-md-0
          img(src='@/assets/curso/temas/t1/3.svg', alt='')
        .col-lg-10.col-md-9
          p.mb-0 Conocer el perfil del usuario permite que el recorrido no sea igual para todos, sino que responda a las características, intereses y expectativas del grupo visitante.

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt1.svg', alt='')
      h2.mb-0 Tipos de usuarios del geoturismo

    p.mb-4 El perfil del visitante geoturístico es diverso. Algunos usuarios buscan explicaciones técnicas y científicas, mientras que otros prefieren experiencias recreativas, culturales o vivenciales. Por esta razón, el guía de turismo debe identificar el tipo de visitante que acompaña, para ajustar la forma de comunicar la información y seleccionar estrategias acordes con las necesidades del grupo.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-9
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 1.
          span Tipos de usuarios del geoturismo
        .tabla-a.color-primario
          table
            thead
              tr
                th Tipo de usuario
                th Características del usuario
                th Recomendación para la guianza
            tbody
              tr
                td Geoturista especializado
                td Tiene conocimientos previos y busca información técnica precisa sobre geología, fósiles, rocas o procesos naturales.
                td Usar información precisa, datos verificables, lenguaje técnico explicado y referencias científicas.
              tr
                td Geoturista recreativo
                td Busca disfrutar el paisaje, caminar, tomar fotografías y vivir una experiencia agradable.
                td Explicar con lenguaje sencillo, usar ejemplos cotidianos y equilibrar el aprendizaje con el disfrute.
              tr
                td Geoturista cultural
                td Se interesa por relatos locales, tradiciones, gastronomía y formas de vida de la comunidad.
                td Relacionar el patrimonio geológico con la cultura, la historia y las prácticas del territorio.
              tr
                td Geoturista de naturaleza
                td Valora la biodiversidad, el paisaje, la conservación y el contacto con el entorno natural.
                td Resaltar la relación entre geología, ecosistemas, paisaje y prácticas de conservación.
              tr
                td Geoturista ocasional
                td Participa por curiosidad o como parte de una visita general al destino.
                td Despertar su interés mediante relatos breves, preguntas, comparaciones y actividades participativas.
              tr
                td Visitante educativo
                td Participa en salidas académicas, talleres o experiencias de aprendizaje guiado.
                td Organizar los contenidos por niveles, usar actividades didácticas y reforzar los conceptos clave durante el recorrido.
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/t1/4.png', alt='')


    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt1.svg', alt='')
      h2.mb-0 Características frecuentes del usuario geoturístico

    p El usuario del geoturismo suele valorar experiencias auténticas, educativas y conectadas con el territorio. También puede mostrar interés por la conservación, la cultura local y la comprensión del paisaje.
    p.mb-4 Las actividades más representativas se encuentran:

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-lg-4.col-md-6.mb-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/tarj2-1.svg' alt='')
          .tarjeta.bg2.w-100
            .p-4
              h4.text-center Interés por aprender
              p.text-center Quiere comprender el origen del paisaje y los elementos geológicos del territorio.
      .col-lg-4.col-md-6.mb-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/tarj2-2.svg' alt='')
          .tarjeta.bg2.w-100
            .p-4
              h4.text-center Valoración de la autenticidad
              p.text-center Prefiere experiencias conectadas con la realidad natural y cultural del destino.
      .col-lg-4.col-md-6.mb-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/tarj2-3.svg' alt='')
          .tarjeta.bg2.w-100
            .p-4
              h4.text-center Sensibilidad ambiental
              p.text-center Reconoce la importancia de cuidar el patrimonio geológico y natural.
      .col-lg-6.col-md-6.mb-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/tarj2-4.svg' alt='')
          .tarjeta.bg2.w-100
            .p-4
              h4.text-center Participación activa
              p.text-center Disfruta observar, preguntar, caminar, explorar y relacionar lo aprendido con la experiencia.
      .col-lg-6.col-md-6.mb-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/tarj2-5.svg' alt='')
          .tarjeta.bg2.w-100
            .p-4
              h4.text-center Interés cultural
              p.text-center Puede valorar relatos, tradiciones, gastronomía y prácticas de la comunidad local.

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt1.svg', alt='')
      h2.mb-0 Segmentos del usuario del geoturismo

    .bg3.mb-4(data-aos="fade")
      .row.justify-content-center.align-items-center
        .col-lg-5
          img(src='@/assets/curso/temas/t1/5.png', alt='')
        .col-lg-7
          .p-4
            p Desde la segmentación turística, los visitantes pueden agruparse según los beneficios que esperan obtener del recorrido. Asrat et al. (2022) identifican segmentos como visitantes amantes de la actividad y la naturaleza, amantes de la cultura, amantes de la naturaleza y la cultura, y personas que buscan una experiencia completa.
            p.mb-0 Esto demuestra que el geoturismo no atrae solo a personas interesadas en la geología. También convoca a quienes buscan recreación, aprendizaje, contacto con la naturaleza, experiencias culturales y conexión con el territorio. Por esta razón, el guía de turismo debe reconocer la diversidad de intereses y motivaciones de los visitantes, para adaptar la información, las actividades y la forma de comunicar el valor del patrimonio geológico y natural del destino.    

    .cajon.color-acento-contenido.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-1.col-md-3.col-5.mb-3.mb-md-0
          img(src='@/assets/curso/temas/t1/6.svg', alt='')
        .col-lg-10.col-md-9
          p.mb-0 El geoturismo combina ciencia, paisaje, cultura y experiencia. Por eso, el guía debe reconocer qué motiva al visitante y adaptar la guianza según sus intereses.


    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt1.svg', alt='')
      h2.mb-0 Importancia para la guianza turística

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t1/7.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para el guía de turismo, reconocer estos perfiles es clave porque facilita la toma de decisiones antes y durante el recorrido. No es lo mismo orientar a un grupo de estudiantes, una familia, turistas extranjeros, investigadores, adultos mayores o visitantes locales. Cada público requiere una mediación diferente en cuanto al lenguaje, la profundidad de la información, el ritmo de la caminata, las actividades de participación, las recomendaciones de seguridad y los recursos de apoyo. #[br]#[br]
        p.mb-0 Además, conocer el comportamiento, los gustos, las actitudes y las preferencias de los viajeros permite diseñar experiencias más acordes con las características de cada usuario. Según González Molina et al. (2023), al momento de planear la guianza es importante considerar variables geográficas, demográficas, motivacionales y de hábitos de consumo, ya que dentro de un mismo destino pueden coincidir distintos tipos de visitantes, cada uno con intereses particulares.


    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt1.svg', alt='')
      h2.mb-0 Decisiones del guía según el perfil del usuario

    .row.justify-content-center.mb-4
      .col-lg-3.col-md-6.col-8.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/8.png', alt='')
      .col-lg-9(data-aos="fade-left")
        TabsA.color-acento-botones
          .tarjeta.bg4.p-4(titulo="Antes del recorrido")
            p Identificar edad, procedencia, intereses, condición física y expectativas del grupo.
          .tarjeta.bg4.p-4(titulo="Durante el recorrido")
            p Ajustar lenguaje, ritmo, ejemplos, actividades y tiempos de descanso.
          .tarjeta.bg4.p-4(titulo="En la interpretación")
            p Relacionar el patrimonio geológico con temas cercanos al visitante.
          .tarjeta.bg4.p-4(titulo="Al cierre")
            p Recoger percepciones, resolver dudas y reforzar el mensaje de conservación.

    p El perfil de usuario es un insumo clave para diseñar y orientar recorridos geoturísticos. Cuando el guía reconoce las características del grupo, puede ofrecer una experiencia más pertinente, educativa y responsable, en la que el visitante comprenda el valor del patrimonio geológico y participe en su conservación.



</template>

<script>
export default {
  name: 'Tema1',
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
