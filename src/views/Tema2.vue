<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Información e interpretación del territorio

    .bg3.mb-4(data-aos="fade")
      .row.justify-content-center.align-items-center
        .col-lg-5.d-none.d-lg-block
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
      h3.mb-0 Fuentes para conocer el territorio

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
      h3.mb-0 Manifestaciones culturales que enriquecen el recorrido

    AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-acento-contenido" data-aos="fade")
      .row.justify-content-around.align-items-center(titulo="Idiosincrasia")
        .col-11.col-md-11.col-lg-5
          p Hace referencia a los rasgos, costumbres, formas de pensar y maneras de actuar que distinguen a una comunidad. Conocerla permite al guía interpretar mejor las relaciones entre las personas, el territorio y la naturaleza.
        .col-11.col-md-8.col-lg-5
          img(src='@/assets/curso/temas/t2/acord1-1.png', alt='')
      .row.justify-content-around.align-items-center(titulo="Mitos y leyendas")
        .col-11.col-md-11.col-lg-5
          p Son relatos de la tradición oral que transmiten memoria, valores y significados simbólicos. En el recorrido, ayudan a conectar el paisaje con las creencias, historias y explicaciones culturales del territorio.
        .col-11.col-md-8.col-lg-5
          img(src='@/assets/curso/temas/t2/acord1-2.png', alt='')
      .row.justify-content-around.align-items-center(titulo="Tradiciones")
        .col-11.col-md-11.col-lg-5
          p Incluyen celebraciones, oficios, prácticas cotidianas, saberes comunitarios y formas de organización social. Integrarlas en la guianza permite mostrar el patrimonio vivo de la comunidad.
        .col-11.col-md-8.col-lg-5
          img(src='@/assets/curso/temas/t2/acord1-3.png', alt='')
      .row.justify-content-around.align-items-center(titulo="Gastronomía")
        .col-11.col-md-11.col-lg-5
          p Representa la relación entre la comunidad, el entorno ecológico y los recursos alimentarios. Los productos locales, las preparaciones tradicionales y los relatos sobre los alimentos fortalecen la identidad territorial.
        .col-11.col-md-8.col-lg-5
          img(src='@/assets/curso/temas/t2/acord1-4.png', alt='')
      .row.justify-content-around.align-items-center(titulo="Prácticas agroecoturísticas")
        .col-11.col-md-11.col-lg-5
          p Articulan producción agrícola, conocimientos locales, cuidado ambiental y experiencia turística. Permiten mostrar saberes campesinos, formas de vida rurales y relaciones sostenibles con la naturaleza.
        .col-11.col-md-8.col-lg-5
          img(src='@/assets/curso/temas/t2/acord1-5.png', alt='')


    Separador
    #t_2_2.titulo-segundo.color-primario(data-aos='fade-right')
      h2 2.2  Guion del recorrido e interpretación del patrimonio: relatos, diálogos, actividades, redacción y validación

    .bloque-texto-g.bg6.b-redo.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t2/5.png')})`}"
      )
      .bloque-texto-g__texto.p-4.px-lg-5
        p El guion del recorrido es una herramienta que ayuda al guía a organizar la información que compartirá con los visitantes. No se trata de escribir un texto para memorizar palabra por palabra, sino de preparar una ruta comunicativa con inicio, desarrollo, cierre, mensajes clave y actividades de interpretación. #[br] #[br]
        p.mb-0 Según González Molina et al. (2023), el guion turístico permite orientar e informar, pero también generar sensibilidad e interés frente a las particularidades del lugar. Por eso, debe construirse con un lenguaje claro, dinámico y cercano, capaz de motivar al visitante a comprender y valorar el patrimonio.

    p.mb-4 Cómo construir el guion del recorrido 

    LineaTiempoE.color-secundario.mb-4(data-aos="fade")
      .row(titulo="Paso 1")
        .col-lg-2.col-md-4.col-5.mb-3.mb-lg-0
          img(src='@/assets/curso/temas/t2/paso1-1.svg', alt='')
        .col-lg-10
          h4 Definir el propósito
          p Establecer qué se quiere lograr con el recorrido: informar, sensibilizar, educar, promover conservación o fortalecer la valoración del territorio.
      .row(titulo="Paso 2")
        .col-lg-2.col-md-4.col-5.mb-3.mb-lg-0
          img(src='@/assets/curso/temas/t2/paso1-2.svg', alt='')
        .col-lg-10
          h4 Seleccionar la información
          p Elegir datos confiables, pertinentes y adecuados para el tipo de visitante. No todo lo investigado debe incluirse en el guion.
      .row(titulo="Paso 3")
        .col-lg-2.col-md-4.col-5.mb-3.mb-lg-0
          img(src='@/assets/curso/temas/t2/paso1-3.svg', alt='')
        .col-lg-10
          h4 Organizar el recorrido
          p Definir estaciones, tiempos, mensajes principales, actividades y recursos de apoyo.
      .row(titulo="Paso 4")
        .col-lg-2.col-md-4.col-5.mb-3.mb-lg-0
          img(src='@/assets/curso/temas/t2/paso1-4.svg', alt='')
        .col-lg-10
          h4 Redactar relatos y diálogos
          p Construir mensajes claros, breves y atractivos, usando ejemplos, preguntas, comparaciones, anécdotas o metáforas.
      .row(titulo="Paso 5")
        .col-lg-2.col-md-4.col-5.mb-3.mb-lg-0
          img(src='@/assets/curso/temas/t2/paso1-5.svg', alt='')
        .col-lg-10
          h4 Validar el contenido
          p Revisar el guion con actores locales, expertos, comunidad o prestadores de servicios para evitar errores, imprecisiones o interpretaciones inadecuadas.

    .cajon.color-primario.p-4.mb-5
      p La interpretación del patrimonio permite que la información cobre sentido para el visitante. No basta con decir qué es una roca, un fósil, una montaña o una tradición; es necesario explicar por qué es importante, cómo se relaciona con el territorio y qué puede aprender el visitante a partir de ello.
      p.mb-0 En los procesos de guianza, la interpretación debe ser atractiva, sencilla y significativa. Guerra Rosado (2017), a partir de los aportes de Ham (2013), plantea que una interpretación efectiva debe tener tema, organización, relevancia y amenidad.


    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt1.svg', alt='')
      h3.mb-0 Modelo TORA para interpretar el patrimonio

    .bg4.p-4.mb-4(data-aos="fade")
      .row.justify-content-center.align-items-center
        .col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/6.svg', alt='')
        .col-lg-5
          ImagenInfografica.color-secundario
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/t2/infog.svg', alt='')
            .tarjeta.tarjeta--azul.p-3(x="87%" y="11%" numero="+")
              h5.mb-2 Amenidad
              p.mb-0 La explicación debe ser clara, cercana y agradable. El uso de ejemplos, comparaciones, preguntas y relatos facilita la comprensión.
            .tarjeta.tarjeta--azul.p-3(x="79%" y="33%" numero="+")
              h5.mb-2 Relevancia
              p.mb-0 El contenido debe conectarse con los intereses, emociones o experiencias del visitante.
            .tarjeta.tarjeta--azul.p-3(x="72%" y="55%" numero="+")
              h5.mb-2 Organización
              p.mb-0 La información debe seguir una secuencia lógica: inicio, desarrollo, cierre y mensaje principal.
            .tarjeta.tarjeta--azul.p-3(x="65%" y="77%" numero="+")
              h5.mb-2 Tema
              p.mb-0 El mensaje debe tener una idea central. Esto evita que el recorrido se convierta en una lista de datos sueltos.

    p Los relatos y diálogos ayudan a que el visitante se conecte con el lugar. Un relato puede explicar cómo se formó un paisaje, qué significado tiene una tradición o por qué un geositio debe conservarse. El diálogo, por su parte, permite hacer preguntas, escuchar opiniones y motivar la participación del grupo.
    p.mb-4 Las actividades interpretativas también cumplen un papel importante. Pueden incluir observación guiada, preguntas orientadoras, comparación de imágenes, lectura del paisaje, reconocimiento de materiales, juegos breves, ejercicios de ubicación o pequeñas reflexiones durante las paradas.

    .cajon.color-acento-contenido.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-1.col-md-3.col-5.mb-3.mb-md-0
          img(src='@/assets/curso/temas/t2/7.svg', alt='')
        .col-lg-10.col-md-9
          p.mb-0 Si el guion tiene demasiada información técnica, el visitante puede perder el interés. Si tiene poca información, la experiencia puede quedarse solo en recreación. El equilibrio está en comunicar con claridad, rigor y sentido.


    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt1.svg', alt='')
      h3.mb-0 Estrategias para redactar relatos interpretativos

    .row.justify-content-center
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/temas/t2/8.png', alt='')
      .col-lg-7
        LineaTiempoD.color-acento-botones
          p(numero="1" titulo="Usar lenguaje claro") Evitar explicaciones demasiado técnicas. Si se usa un término especializado, debe explicarse con palabras sencillas.
          p(numero="2" titulo="Contar una historia") Presentar la información como una secuencia que tenga inicio, desarrollo y cierre. Esto ayuda a que el visitante recuerde mejor el mensaje.
          p(numero="3" titulo="Conectar con la experiencia") Relacionar el contenido con lo que el visitante observa, siente o conoce. Así el aprendizaje se vuelve más cercano.
          p(numero="4" titulo="Formular preguntas") Usar preguntas breves para activar la observación y la participación del grupo.
          p(numero="5" titulo="Cerrar con una idea de conservación") Finalizar cada estación con un mensaje que invite a valorar y cuidar el patrimonio geológico, natural o cultural.


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
