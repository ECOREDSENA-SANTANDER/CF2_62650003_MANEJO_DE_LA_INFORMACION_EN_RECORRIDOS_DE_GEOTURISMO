<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Geoconservación, evaluación y mejora del recorrido

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t6/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p La geoconservación, la evaluación y la mejora continua permiten que el recorrido geoturístico no se limite a una visita guiada, sino que se convierta en una experiencia responsable con el territorio. En este proceso, el guía debe promover el cuidado del patrimonio geológico, orientar comportamientos adecuados en los visitantes y revisar la calidad del servicio prestado. #[br] #[br]
        p.mb-0 Estos elementos son fundamentales porque un recorrido bien ejecutado no termina cuando finaliza la ruta. También requiere analizar qué ocurrió, qué aprendieron los visitantes, qué aspectos funcionaron y qué se debe mejorar para futuras experiencias.

    .cajon.color-acento-contenido.p-4(data-aos="fade")
      .row.justify-content-center.align-items-center
        .col-lg-1.col-md-3.col-5.mb-3.mb-md-0
          img(src='@/assets/curso/temas/t6/2.svg', alt='')
        .col-lg-10.col-md-9
          p.mb-0 El geoturismo responsable interpreta el territorio, promueve su conservación y mejora continuamente la experiencia del visitante.


    Separador
    #t_6_1.titulo-segundo.color-primario(data-aos='fade-right')
      h2 6.1  Geoconservación: medidas de preservación, estrategias, acciones y principios de No Dejar Rastro

    .cajon.color-acento-botones.bg3.p-4.mb-4
      p La geoconservación se entiende como el conjunto de acciones, estrategias y programas orientados a proteger y mantener el patrimonio geológico. Para lograrlo, primero es necesario reconocer cuáles elementos tienen valor, cómo se formaron, qué tan frágiles son y qué amenazas pueden afectarlos en el presente o en el futuro (Carcavilla et al., 2014; Brilha, 2015).
      p.mb-0 No se trata solo de “cuidar piedras” o paisajes. La geoconservación implica comprender por qué ciertos lugares son importantes para la ciencia, la educación, la cultura, el paisaje y la memoria natural del territorio.
    
    p.mb-4 Los lugares con valor geológico especial se conocen como geositios. Estos pueden requerir procesos de inventario, valoración, conservación, puesta en valor y monitoreo continuo, con el fin de proteger su importancia científica, educativa y patrimonial (Brilha, 2015; Henriques et al., 2011).

    .cajon.color-acento-contenido.p-4.mb-5(data-aos="fade")
      .row.justify-content-center.align-items-center
        .col-lg-1.col-md-3.col-5.mb-3.mb-md-0
          img(src='@/assets/curso/temas/t6/3.svg', alt='')
        .col-lg-10.col-md-9
          p.mb-0 No todos los elementos de la geodiversidad requieren el mismo nivel de protección. La prioridad se centra en aquellos lugares con valor especial por su importancia científica, educativa, paisajística o patrimonial.

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt1.svg', alt='')
      h3.mb-0 Ruta de la geoconservación

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-acento-contenido" data-aos="fade")
      .row.justify-content-around.align-items-center(titulo="Identificar")
        .col-11.col-md-11.col-lg-5
          p Reconocer los elementos geológicos de valor presentes en el territorio, como formaciones rocosas, fósiles, geoformas, paisajes o geositios.
        .col-11.col-md-8.col-lg-5
          img(src='@/assets/curso/temas/t6/acord1-1.png', alt='')
      .row.justify-content-around.align-items-center(titulo="Valorar")
        .col-11.col-md-11.col-lg-5
          p Analizar la importancia científica, educativa, cultural, paisajística o turística del elemento geológico.
        .col-11.col-md-8.col-lg-5
          img(src='@/assets/curso/temas/t6/acord1-2.png', alt='')
      .row.justify-content-around.align-items-center(titulo="Proteger")
        .col-11.col-md-11.col-lg-5
          p Definir medidas para evitar daños, extracción de materiales, deterioro del lugar o usos inadecuados.
        .col-11.col-md-8.col-lg-5
          img(src='@/assets/curso/temas/t6/acord1-3.png', alt='')
      .row.justify-content-around.align-items-center(titulo="Interpretar")
        .col-11.col-md-11.col-lg-5
          p Explicar al visitante el valor del geositio mediante mensajes claros, recursos educativos y actividades responsables.
        .col-11.col-md-8.col-lg-5
          img(src='@/assets/curso/temas/t6/acord1-4.png', alt='')
      .row.justify-content-around.align-items-center(titulo="Monitorear")
        .col-11.col-md-11.col-lg-5
          p Revisar periódicamente el estado del lugar para identificar cambios, impactos o necesidades de mejora.
        .col-11.col-md-8.col-lg-5
          img(src='@/assets/curso/temas/t6/acord1-5.png', alt='')


    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt1.svg', alt='')
      h3.mb-0 ¿Conservar siempre significa evitar el cambio?

    .bloque-texto-g.bg6.b-redo.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t6/4.png')})`}"
      )
      .bloque-texto-g__texto.p-4.px-lg-5
        p En geoconservación, no siempre se busca detener los procesos naturales. Algunos paisajes geológicos se forman gracias a dinámicas como la erosión, el transporte de sedimentos o la acción del agua y del viento. #[br] #[br]
        p.mb-0 Por ejemplo, en el Desierto de la Tatacoa, la erosión ha dado origen a cárcavas, mesas, estoraques y otras formas del relieve que hacen único este paisaje. Aunque estas geoformas muestran desgaste del terreno, intervenirlas de manera inadecuada podría alterar su valor escénico y geológico (Dill et al., 2020).

    p Para la guianza turística, este aspecto es muy importante. El guía debe explicar que algunos procesos naturales no son daños, sino parte de la historia geológica del territorio.

    .cajon.color-acento-contenido.p-4.mb-5(data-aos="fade")
      .row.justify-content-center.align-items-center
        .col-lg-1.col-md-3.col-5.mb-3.mb-md-0
          img(src='@/assets/curso/temas/t6/5-1.svg', alt='')
        .col-lg-10.col-md-9
          p.mb-0 No todo cambio en el paisaje debe entenderse como deterioro. Algunos procesos naturales hacen parte del valor geológico del lugar y deben ser explicados al visitante.

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt1.svg', alt='')
      h3.mb-0 Metodología No Dejar Rastro

    p La metodología No Dejar Rastro, ofrece orientaciones prácticas para reducir los impactos negativos durante actividades en espacios naturales. Sus principios ayudan a que los visitantes actúen de manera responsable en senderos, áreas protegidas, parques, geoparques y otros entornos al aire libre.
    p.mb-5 Esta metodología es útil para la guianza porque permite convertir la conservación en acciones concretas y fáciles de aplicar durante el recorrido.

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt1.svg', alt='')
      h3.mb-0 7 principios de No Dejar Rastro

    SlyderF.mb-5(columnas="col-lg-4 col-md-6")
      .tarjeta.bg3.p-4
        .row.justify-content-center.mb-3
          .col-6.col-md-7.col-lg-6
            img(src='@/assets/curso/temas/t6/tarj1-1.svg' alt='')
        h4.text-center Planifique y prepare su viaje con anticipación
        p.mb-0 Antes de iniciar el recorrido, se deben revisar condiciones del lugar, clima, duración, dificultad, normas del área y necesidades del grupo. Una mala preparación puede generar improvisación, riesgos o impactos innecesarios.
      .tarjeta.bg3.p-4
        .row.justify-content-center.mb-3
          .col-6.col-md-7.col-lg-6
            img(src='@/assets/curso/temas/t6/tarj1-2.svg' alt='')
        h4.text-center Viaje y acampe en superficies resistentes
        p El desplazamiento debe realizarse por senderos, caminos autorizados o zonas definidas. Salirse de la ruta puede afectar vegetación, suelos frágiles o áreas sensibles.
      .tarjeta.bg3.p-4
        .row.justify-content-center.mb-3
          .col-6.col-md-7.col-lg-6
            img(src='@/assets/curso/temas/t6/tarj1-3.svg' alt='')
        h4.text-center Disponga adecuadamente los residuos
        p Todo residuo generado durante la experiencia debe recogerse y llevarse hasta un lugar adecuado. Dejar basura afecta el paisaje, la fauna, el suelo y la experiencia de otros visitantes.
      .tarjeta.bg3.p-4
        .row.justify-content-center.mb-3
          .col-6.col-md-7.col-lg-6
            img(src='@/assets/curso/temas/t6/tarj1-4.svg' alt='')
        h4.text-center Respete lo que encuentre
        p No se deben extraer rocas, fósiles, plantas, piezas arqueológicas ni elementos naturales o culturales. Estos recursos hacen parte del patrimonio del territorio.
      .tarjeta.bg3.p-4
        .row.justify-content-center.mb-3
          .col-6.col-md-7.col-lg-6
            img(src='@/assets/curso/temas/t6/tarj1-5.svg' alt='')
        h4.text-center Minimice el impacto de fogatas
        p Cuando las fogatas no son permitidas o no son necesarias, deben evitarse. El uso inadecuado del fuego puede generar incendios, pérdida de cobertura vegetal o deterioro del suelo.
      .tarjeta.bg3.p-4
        .row.justify-content-center.mb-3
          .col-6.col-md-7.col-lg-6
            img(src='@/assets/curso/temas/t6/tarj1-6.svg' alt='')
        h4.text-center Respete la vida silvestre
        p Los animales deben observarse a distancia, sin alimentarlos, perseguirlos o alterar su comportamiento. La presencia humana debe generar el menor impacto posible.
      .tarjeta.bg3.p-4
        .row.justify-content-center.mb-3
          .col-6.col-md-7.col-lg-6
            img(src='@/assets/curso/temas/t6/tarj1-7.svg' alt='')
        h4.text-center Sea considerado con otros visitantes y comunidades
        p El recorrido debe realizarse con respeto por otras personas, comunidades locales, normas del territorio, niveles de ruido y actividades que se desarrollen en el lugar.

    .bg-color-acento-contenido.mb-5(data-aos="fade-down")
      img(src='@/assets/curso/temas/t6/podcast.png', alt='')
      .p-4
        .bg-white.tarjeta.p-4
          TarjetaAudio.color-acento-botones.mb-4(
            texto="Pódcast: ¿Cómo disfrutar un recorrido geoturístico sin dejar huella en el territorio?"
            :audio="require('@/assets/componentes/audios/Podcast_CF2_62650003.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
          p.mb-0.px-lg-4 Para reflexionar sobre la importancia de disfrutar los recorridos geoturísticos sin afectar el patrimonio geológico, natural y cultural del territorio, se recomienda escuchar el recurso de audio “¿Cómo disfrutar un recorrido geoturístico sin dejar huella en el territorio?”. Este pódcast explica, mediante ejemplos prácticos, cómo los principios de No Deje Rastro que ayudan al guía a orientar comportamientos responsables antes, durante y después del recorrido.

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt1.svg', alt='')
      h3.mb-0 Aplicación en la guianza geoturística

    p El guía debe integrar la geoconservación en todas las etapas del recorrido. Antes de iniciar, puede explicar las normas de comportamiento; durante la actividad, debe recordar la importancia de no extraer materiales ni salirse de los senderos; y al finalizar, puede reforzar el mensaje de cuidado del patrimonio geológico.

    .cajon.color-acento-contenido.p-4
      .row.justify-content-center.align-items-center
        .col-lg-1.col-md-3.col-5.mb-3.mb-md-0
          img(src='@/assets/curso/temas/t6/5.svg', alt='')
        .col-lg-10.col-md-9
          p.mb-0 La conservación no se logra solo con normas. También se fortalece cuando el visitante comprende el valor del lugar y entiende las consecuencias de sus acciones.


    Separador
    #t_6_2.titulo-segundo.color-primario(data-aos='fade-right')
      h2 6.2  Evaluación y seguimiento: técnicas, instrumentos y oportunidades de mejora

    .bg3.p-4.mb-5
      p La evaluación y el seguimiento permiten revisar cómo se desarrolló el servicio de guianza, si se cumplieron los objetivos del recorrido y qué aspectos deben mantenerse, corregirse o fortalecerse.
      p Evaluar no significa únicamente “calificar” una actividad. En guianza turística, implica analizar la experiencia del visitante, la calidad de la información brindada, el cumplimiento del itinerario, la seguridad, la atención al grupo y la organización general del servicio.
      p.mb-0 El seguimiento, por su parte, permite hacer control antes, durante y después del recorrido. Su propósito es verificar que lo planeado se cumpla y que la experiencia se mantenga dentro de condiciones adecuadas de calidad, seguridad y sostenibilidad.

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt1.svg', alt='')
      h3.mb-0 Técnicas para evaluar la guianza turística
    
    LineaTiempoE.color-secundario.mb-4(data-aos="fade")
      .row(titulo="Item 1")
        .col-lg-2.col-md-4.col-5.mb-3.mb-lg-0
          img(src='@/assets/curso/temas/t6/paso1-1.svg', alt='')
        .col-lg-10
          h4 Observación directa
          p Consiste en revisar lo que sucede durante el recorrido. Permite identificar puntualidad, participación del grupo, nivel de atención, desplazamiento seguro, manejo del lenguaje, cumplimiento del itinerario y reacción de los visitantes.
      .row(titulo="Item 2")
        .col-lg-2.col-md-4.col-5.mb-3.mb-lg-0
          img(src='@/assets/curso/temas/t6/paso1-2.svg', alt='')
        .col-lg-10
          h4 Retroalimentación del visitante
          p Se basa en escuchar la opinión del turista sobre el servicio recibido. Puede recogerse al final del recorrido mediante conversación breve, encuesta o preguntas abiertas.
      .row(titulo="Item 3")
        .col-lg-2.col-md-4.col-5.mb-3.mb-lg-0
          img(src='@/assets/curso/temas/t6/paso1-3.svg', alt='')
        .col-lg-10
          h4 Autoevaluación del guía
          p Permite que el guía revise su propio desempeño. Aquí analiza si logró los objetivos, comunicó bien la información, manejó el grupo y resolvió imprevistos.
      .row(titulo="Item 4")
        .col-lg-2.col-md-4.col-5.mb-3.mb-lg-0
          img(src='@/assets/curso/temas/t6/paso1-4.svg', alt='')
        .col-lg-10
          h4 Coevaluación o evaluación entre pares
          p Se realiza cuando otro guía, instructor o compañero observa el recorrido y aporta comentarios sobre el desempeño.
      .row(titulo="Item 5")
        .col-lg-2.col-md-4.col-5.mb-3.mb-lg-0
          img(src='@/assets/curso/temas/t6/paso1-5.svg', alt='')
        .col-lg-10
          h4 Verificación del cumplimiento del plan
          p Compara lo planeado con lo ejecutado. Revisa itinerario, recursos, protocolos de seguridad, tiempos y respuesta frente al perfil del grupo.

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt1.svg', alt='')
      h3.mb-0 Instrumentos para recoger información

    .bg11.p-4.mb-5
      p.mb-0.text-center Para que la evaluación sea útil, debe apoyarse en instrumentos sencillos que permitan registrar información y tomar decisiones de mejora.

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt1.svg', alt='')
      h3.mb-0 Instrumentos de evaluación del recorrido

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-3.col-md-6.mb-3
        .tarjeta--boton.bg1.color-botones.h-100.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-md-6.col-5
              img(src='@/assets/curso/temas/t6/tarj2-1.svg', alt='')
          h4.text-center Lista de chequeo
          p Permite verificar si se cumplieron aspectos definidos previamente, como puntualidad, presentación del guía, recursos utilizados, cumplimiento del itinerario, control del grupo y aplicación de protocolos.
      .col-lg-3.col-md-6.mb-3
        .tarjeta--boton.bg1.color-botones.h-100.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-md-6.col-5
              img(src='@/assets/curso/temas/t6/tarj2-2.svg', alt='')
          h4.text-center Encuesta de satisfacción
          p Recoge la percepción del visitante sobre organización, atención, contenido, seguridad, amabilidad y satisfacción general con el recorrido.
      .col-lg-3.col-md-6.mb-3
        .tarjeta--boton.bg1.color-botones.h-100.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-md-6.col-5
              img(src='@/assets/curso/temas/t6/tarj2-3.svg', alt='')
          h4.text-center Formato de observación
          p Registra de manera estructurada lo ocurrido durante la actividad. Puede ser diligenciado por un instructor, guía de apoyo o compañero.
      .col-lg-3.col-md-6.mb-3
        .tarjeta--boton.bg1.color-botones.h-100.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-md-6.col-5
              img(src='@/assets/curso/temas/t6/tarj2-4.svg', alt='')
          h4.text-center Diario o bitácora de campo
          p Permite consignar número de visitantes, incidentes, logros, dificultades, preguntas frecuentes, condiciones climáticas, cambios de ruta y aprendizajes para futuras salidas.

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt1.svg', alt='')
      h3.mb-0 Oportunidades de mejora

    p.mb-5 La evaluación y el seguimiento permiten identificar qué aspectos del recorrido pueden fortalecerse. Estas oportunidades no deben verse como fallas, sino como insumos para mejorar la calidad del servicio.

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt1.svg', alt='')
      h3.mb-0 ¿Qué se puede mejorar después del recorrido?

    .row.justify-content-center.mb-4
      .col-lg-3.col-md-6.col-8.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t6/6.png', alt='')
      .col-lg-9(data-aos="fade-left")
        TabsA.color-acento-botones
          .tarjeta.bg4.p-4(titulo="Comunicación del guía")
            p Si la explicación fue muy técnica, extensa o poco clara, se puede ajustar el lenguaje, reorganizar el relato y usar recursos interpretativos más adecuados.
          .tarjeta.bg4.p-4(titulo="Manejo del grupo")
            p Si hubo desorden, retrasos o pérdida de atención, se pueden reforzar instrucciones previas, liderazgo, control de tiempos y organización de paradas.
          .tarjeta.bg4.p-4(titulo="Seguridad y prevención")
            p Si faltaron recomendaciones, señalización o respuesta ante contingencias, se deben revisar los protocolos y fortalecer la preparación operativa.
          .tarjeta.bg4.p-4(titulo="Adaptación al visitante")
            p Si el recorrido no conectó con el grupo, se pueden ajustar contenidos, ritmo, duración, recursos y metodología según el perfil del usuario.
          .tarjeta.bg4.p-4(titulo="Organización del itinerario")
            p Si los tiempos no fueron adecuados o las paradas no funcionaron, se puede reorganizar la secuencia del recorrido para futuras experiencias.

    .cajon.color-acento-contenido.p-4.mb-4(data-aos="fade")
      .row.justify-content-center.align-items-center
        .col-lg-1.col-md-3.col-5.mb-3.mb-md-0
          img(src='@/assets/curso/temas/t6/7.svg', alt='')
        .col-lg-10.col-md-9
          p.mb-0 Un recorrido mejora cuando el guía escucha, observa, registra y ajusta. La calidad del servicio no depende solo de hacer bien una salida, sino de aprender de cada experiencia.
    
    .bg3.p-4(data-aos="fade")
      p La geoconservación, la evaluación y el seguimiento fortalecen el sentido responsable del recorrido geoturístico. La primera permite proteger el patrimonio geológico y promover comportamientos adecuados en los visitantes; la segunda ayuda a revisar la calidad del servicio y reconocer oportunidades de mejora.
      p.mb-0 Cuando el guía interpreta el territorio con responsabilidad, aplica principios de conservación y evalúa su desempeño, contribuye a una experiencia más segura, educativa, sostenible y coherente con el valor del lugar visitado.

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
    mostrarIndicadorTarjetaAudio: true,
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
