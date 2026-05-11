<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Gestión de riesgos y contingencias

    .bloque-texto-g.bloque-texto-g--inverso.bg6.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t4/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p La gestión de riesgos en un recorrido geoturístico permite anticipar situaciones que pueden afectar la seguridad, la calidad del servicio y la experiencia del visitante. En este tipo de recorridos, el guía no solo interpreta el patrimonio geológico y cultural, sino que también debe identificar posibles amenazas, prevenir incidentes y actuar de manera organizada cuando se presenten eventualidades. #[br] #[br]
        p.mb-0 En turismo, la seguridad se relaciona con la posibilidad de que el visitante disfrute la experiencia y regrese a su lugar de origen sin afectar su bienestar ni su integridad (Jiménez García & Pérez Delgado, 2018). Por esta razón, planear el recorrido implica reconocer los riesgos del entorno, preparar medidas preventivas y contar con protocolos claros de actuación.

    .cajon.color-acento-contenido.p-4(data-aos="fade")
      .row.justify-content-center.align-items-center
        .col-lg-1.col-md-3.col-5.mb-3.mb-md-0
          img(src='@/assets/curso/temas/t4/2.svg', alt='')
        .col-lg-10.col-md-9
          p.mb-0 Un recorrido seguro no es aquel donde nunca puede pasar nada, sino aquel en el que el guía identifica riesgos, prepara respuestas y sabe cómo actuar ante una situación imprevista.


    Separador
    #t_4_1.titulo-segundo.color-primario(data-aos='fade-right')
      h2 4.1  Factores de riesgo, medidas preventivas, correctivas y protocolos de seguridad

    .bloque-texto-g.bg6.b-redo.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t4/3.png')})`}"
      )
      .bloque-texto-g__texto.p-4.px-lg-5
        p El riesgo turístico puede entenderse como la posibilidad de que ocurra una situación que afecte el desarrollo normal del recorrido, la seguridad del visitante, la operación del servicio o la imagen del destino. Estos riesgos pueden estar asociados al ambiente, las condiciones sociales, la economía, la tecnología, la salud o la infraestructura del lugar. #[br] #[br]
        p.mb-0 La seguridad turística reúne condiciones y medidas orientadas a proteger la vida, la salud y el bienestar físico, psicológico y económico de los turistas, prestadores de servicios y comunidades receptoras. Por ello, debe gestionarse como un proceso permanente que exige organización, responsabilidades claras, procedimientos definidos y recursos disponibles para responder de manera oportuna.

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt1.svg', alt='')
      h3.mb-0 Tipos de riesgos en el recorrido geoturístico

    .row.justify-content-center.mb-5
      .col-lg-3.col-md-6.col-8.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t4/4.png', alt='')
      .col-lg-9(data-aos="fade-left")
        TabsA.color-acento-botones
          .tarjeta.bg4.p-4(titulo="Riesgo ambiental")
            p Incluye virus, plagas, animales, vegetación, clima extremo, desastres naturales, contaminación por residuos o condiciones ambientales que pueden afectar el recorrido.
          .tarjeta.bg4.p-4(titulo="Riesgo social")
            p Puede relacionarse con inseguridad ciudadana, robos, accidentes viales, conflictos sociales, cobros informales, rumores o condiciones inseguras en la cadena de valor turística.
          .tarjeta.bg4.p-4(titulo="Riesgo político")
            p Se asocia con conflictos políticos, fallas de gobernanza o situaciones de orden público que pueden limitar el desplazamiento o afectar la operación turística. 
          .tarjeta.bg4.p-4(titulo="Riesgo económico")
            p Incluye situaciones como aumento de costos, desempleo, reducción de vuelos, crisis económica o dificultades que impactan la prestación del servicio.
          .tarjeta.bg4.p-4(titulo="Riesgo tecnológico")
            p Comprende fallas en infraestructura, problemas energéticos, riesgos informáticos, plataformas no autorizadas o dificultades en los sistemas de comunicación.

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt1.svg', alt='')
      h3.mb-0 Factores de riesgo en el sector turístico

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-lg-4.col-md-6.mb-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t4/tarj1-1.svg' alt='')
          .tarjeta.bg2.w-100
            .p-4
              h4.text-center Ambiental
              p.text-center Virus, plagas, clima extremo, desastres naturales, contaminación por basuras y desechos.
      .col-lg-4.col-md-6.mb-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t4/tarj1-2.svg' alt='')
          .tarjeta.bg2.w-100
            .p-4
              h4.text-center Social
              p.text-center Inseguridad, robos, accidentes viales, rumores en redes, servicios de salud ineficientes o condiciones laborales inseguras.
      .col-lg-4.col-md-6.mb-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t4/tarj1-3.svg' alt='')
          .tarjeta.bg2.w-100
            .p-4
              h4.text-center Político
              p.text-center Conflictos políticos, fallas en la gobernanza o situaciones de orden público.
      .col-lg-6.col-md-6.mb-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t4/tarj1-4.svg' alt='')
          .tarjeta.bg2.w-100
            .p-4
              h4.text-center Económico
              p.text-center Recesión económica, desempleo, reducción de vuelos o incremento de costos.
      .col-lg-6.col-md-6.mb-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t4/tarj1-5.svg' alt='')
          .tarjeta.bg2.w-100
            .p-4
              h4.text-center Tecnológico
              p.text-center Fallas energéticas, riesgos informáticos, plataformas turísticas ilícitas o problemas de infraestructura.

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt1.svg', alt='')
      h3.mb-0 Medidas preventivas y correctivas

    .cajon.color-primario.p-4.mb-4
      p Las medidas preventivas se aplican antes o durante el recorrido para reducir la probabilidad de que ocurra una situación de riesgo. En cambio, las medidas correctivas se aplican cuando la situación ya se presentó y se requiere actuar para controlar sus efectos.
      p.mb-0 En la guianza turística, estas medidas permiten proteger al grupo, mantener la organización del recorrido y evitar que una dificultad menor se convierta en una emergencia.

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt1.svg', alt='')
      h3.mb-0 Diferencia clave

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.bg3.p-5
        .row.justify-content-center.mb-4
          .col-6.col-lg-3
            img(src='@/assets/curso/temas/t4/tarj2-1.svg', alt='')
        h4.text-center Medida preventiva
        p Se aplica para evitar que ocurra el problema.
        p.mb-0 Ejemplo: revisar el estado del clima antes de iniciar una caminata.
      .col-md.tarjeta.bg7.p-5
        .row.justify-content-center.mb-4
          .col-6.col-lg-3
            img(src='@/assets/curso/temas/t4/tarj2-2.svg', alt='')
        h4.text-center Medida correctiva
        p Se aplica cuando el problema ya ocurrió.
        p.mb-0 Ejemplo: cambiar la ruta porque se presentó un deslizamiento o una vía cerrada.

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt1.svg', alt='')
      h3.mb-0 Protocolos de seguridad

    .bg3.mb-5(data-aos="fade")
      .row.justify-content-center.align-items-center
        .col-lg-5
          img(src='@/assets/curso/temas/t4/5.png', alt='')
        .col-lg-7
          .p-4
            p Un protocolo de seguridad es un conjunto de pasos, orientaciones o normas que ayudan al guía a actuar de manera organizada. En la guianza turística, estos protocolos permiten anticiparse a posibles riesgos, orientar al grupo y responder ante situaciones que puedan afectar el recorrido.
            p Según González Molina et al. (2023), los protocolos establecen las acciones que deben realizarse de acuerdo con el análisis previo de las condiciones en las que se desarrollan los servicios turísticos.

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt1.svg', alt='')
      h3.mb-0 Elementos para elaborar protocolos de seguridad

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-acento-contenido" data-aos="fade")
      .row.justify-content-around.align-items-center(titulo="Orden público")
        .col-11.col-md-11.col-lg-5
          p Consultar con autoridades o actores locales si existe alguna situación que impida el desplazamiento o el desarrollo del recorrido.
        .col-11.col-md-8.col-lg-5
          img(src='@/assets/curso/temas/t4/acord1-1.png', alt='')
      .row.justify-content-around.align-items-center(titulo="Accesibilidad")
        .col-11.col-md-11.col-lg-5
          p Verificar el estado de vías, senderos, trochas o rutas alternas antes del desplazamiento.
        .col-11.col-md-8.col-lg-5
          img(src='@/assets/curso/temas/t4/acord1-2.png', alt='')
      .row.justify-content-around.align-items-center(titulo="Condiciones ambientales")
        .col-11.col-md-11.col-lg-5
          p Revisar clima, lluvias, temperatura, visibilidad o condiciones que puedan poner en riesgo al grupo.
        .col-11.col-md-8.col-lg-5
          img(src='@/assets/curso/temas/t4/acord1-3.png', alt='')
      .row.justify-content-around.align-items-center(titulo="Verificación de equipos")
        .col-11.col-md-11.col-lg-5
          p Revisar botiquín, elementos de seguridad, equipos especializados y estado de funcionamiento.
        .col-11.col-md-8.col-lg-5
          img(src='@/assets/curso/temas/t4/acord1-4.png', alt='')
      .row.justify-content-around.align-items-center(titulo="Asistencia médica")
        .col-11.col-md-11.col-lg-5
          p Identificar centros de salud cercanos, capacidad de respuesta y contactos de emergencia.
        .col-11.col-md-8.col-lg-5
          img(src='@/assets/curso/temas/t4/acord1-5.png', alt='')

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt1.svg', alt='')
      h3.mb-0 Antes de iniciar el recorrido

    .row.justify-content-center
      .col-lg-3.col-md-6.col-8.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t4/6.png', alt='')
      .col-lg-9(data-aos="fade-left")
        TabsA.color-acento-botones
          .tarjeta.bg4.p-4(titulo="Orden público")
            p Verificar si existen condiciones sociales o de seguridad que puedan afectar el desplazamiento del grupo. Esta revisión evita ingresar a zonas con restricciones, conflictos o alertas locales.
          .tarjeta.bg4.p-4(titulo="Accesibilidad")
            p Consultar el estado de las vías, senderos o rutas de acceso. Si hay derrumbes, cierres o mantenimiento, el guía debe activar rutas alternas o ajustar el plan.
          .tarjeta.bg4.p-4(titulo="Condiciones ambientales")
            p Revisar el clima antes y durante el recorrido. Lluvias fuertes, altas temperaturas o baja visibilidad pueden modificar la experiencia y aumentar el riesgo.
          .tarjeta.bg4.p-4(titulo="Equipos y botiquín")
            p Inspeccionar los elementos necesarios antes de iniciar. Un botiquín incompleto, radios descargados o equipos en mal estado pueden dificultar la respuesta ante una emergencia.
          .tarjeta.bg4.p-4(titulo="Atención médica cercana")
            p Identificar los centros de salud, niveles de atención y contactos de emergencia. Esta información es clave en caso de accidente, picadura, fractura, alergia o afectación de salud.


    Separador
    #t_4_2.titulo-segundo.color-primario(data-aos='fade-right')
      h2 4.2  Plan de contingencia: conceptos, componentes, estructura y respuesta ante eventualidades

    .bloque-texto-g.color-acento-botones.b-redo.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t4/7.png')})`}"
      )
      .bloque-texto-g__texto.p-4.px-lg-5
        p El plan de contingencia es una herramienta que orienta la actuación del guía frente a situaciones imprevistas. Su propósito es reducir los riesgos, proteger la vida de los visitantes y del equipo de trabajo, y facilitar una respuesta organizada ante incidentes, accidentes o emergencias. #[br] #[br]
        p.mb-0 Este plan debe elaborarse a partir de una evaluación de riesgos. Es decir, antes de iniciar el recorrido, el guía y los prestadores de servicios deben identificar qué situaciones podrían ocurrir, qué tan probables son, qué consecuencias tendrían y qué acciones se deben aplicar para responder de manera oportuna (González Molina et al., 2023).

    .row.justify-content-center.align-items-end.mb-5(data-aos="fade-down")
      .col-lg-9
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 6.
          span Conceptos básicos para la respuesta ante eventualidades
        .tabla-a.color-primario
          table
            thead
              tr
                th Concepto
                th Descripción
                th Ejemplo
            tbody
              tr
                td Contingencia
                td Posibilidad de que ocurra una eventualidad imprevista.
                td Se presenta un derrumbe en la vía y se retrasa el recorrido.
              tr
                td Accidente
                td Suceso no deseado que causa lesión o afectación a una persona o grupo.
                td Un visitante sufre una quemadura o una caída con lesión.
              tr
                td Incidente
                td Suceso que pudo convertirse en accidente, pero no generó lesión.
                td Un turista casi cae por caminar sobre una superficie resbalosa.
              tr
                td Emergencia
                td Situación imprevista que requiere atención inmediata.
                td Una fuga de gas obliga a evacuar un restaurante o punto de atención.
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/t4/8.png', alt='')

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt1.svg', alt='')
      h3.mb-0 Tipos de riesgos que pueden activar el plan de contingencia

    p.mb-5 Durante un recorrido turístico pueden presentarse eventos naturales, civiles, biológicos, sanitarios u otros sucesos que afecten la seguridad del grupo o el desarrollo del servicio.

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt1.svg', alt='')
      h3.mb-0 Eventos que pueden afectar el recorrido

    .row.justify-content-center.mb-5
      .col-lg-3.col-md-6.col-8.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t4/9.png', alt='')
      .col-lg-9(data-aos="fade-left")
        TabsA.color-acento-botones
          .tarjeta.bg4.p-4(titulo="Fenómenos naturales")
            p Incluyen huracanes, inundaciones, avalanchas, sequías, tormentas, heladas, sismos, deslizamientos, incendios forestales o erupciones volcánicas. Estos eventos pueden obligar a suspender, modificar o evacuar el recorrido.
          .tarjeta.bg4.p-4(titulo="Fenómenos civiles")
            p Comprenden desorden público, robos, secuestros, estafas, consumo de estupefacientes, abuso infantil o situaciones de inseguridad. Estos riesgos requieren coordinación con autoridades y aplicación de protocolos.
          .tarjeta.bg4.p-4(titulo="Fenómenos biológicos y sanitarios")
            p Incluyen intoxicaciones, contagios, infecciones, mordeduras, picaduras, alergias, quemaduras, deshidratación o epidemias. El guía debe conocer el estado de salud del grupo y contar con botiquín y contactos médicos.
          .tarjeta.bg4.p-4(titulo="Otros eventos")
            p Pueden presentarse incendios en instalaciones, aglomeraciones, descargas eléctricas, accidentes viales, pérdida de turistas, pérdida de documentos o incumplimiento de servicios contratados.

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt1.svg', alt='')
      h3.mb-0 Etapas del plan de contingencia

    p.mb-4 El plan de contingencia no se limita a actuar cuando ocurre la emergencia. También incluye preparación previa y ejercicios de simulación que permiten verificar la capacidad de respuesta del equipo.

    .tarjeta--container.row.mb-5(data-aos="fade")
      .col-md.tarjeta.bg8.p-4.p-lg-5
        .row.justify-content-center.mb-4
          .col-4.col-md-7.col-lg-5
            img(src='@/assets/curso/temas/t4/tarj3-1.svg', alt='')
        h4.text-center Prevención / preparación
        p Identificar las posibles situaciones de emergencia que pueden presentarse durante la guianza turística.
      .col-md.tarjeta.bg4.p-4.p-lg-5
        .row.justify-content-center.mb-4
          .col-4.col-md-7.col-lg-5
            img(src='@/assets/curso/temas/t4/tarj3-2.svg', alt='')
        h4.text-center Simulacros
        p Realizar simulacros para practicar la activación del plan y verificar la capacidad de respuesta.
      .col-md.tarjeta.bg2.p-4.p-lg-5
        .row.justify-content-center.mb-4
          .col-4.col-md-7.col-lg-5
            img(src='@/assets/curso/temas/t4/tarj3-3.svg', alt='')
        h4.text-center Ejecución
        p Aplicar la mejor respuesta posible frente a las emergencias que surjan durante la actividad turística.

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt1.svg', alt='')
      h3.mb-0 Cómo responder ante una eventualidad

    LineaTiempoE.color-secundario.mb-5(data-aos="fade")
      .row(titulo="Paso 1")
        .col-lg-2.col-md-4.col-5.mb-3.mb-lg-0
          img(src='@/assets/curso/temas/t4/paso1-1.svg', alt='')
        .col-lg-10
          h4 Mantener la calma y asegurar al grupo
          p El guía debe controlar la situación, evitar el pánico y ubicar al grupo en un lugar seguro.
      .row(titulo="Paso 2")
        .col-lg-2.col-md-4.col-5.mb-3.mb-lg-0
          img(src='@/assets/curso/temas/t4/paso1-2.svg', alt='')
        .col-lg-10
          h4 Identificar qué ocurrió
          p Diferenciar si se trata de una contingencia, incidente, accidente o emergencia para activar la respuesta adecuada.
      .row(titulo="Paso 3")
        .col-lg-2.col-md-4.col-5.mb-3.mb-lg-0
          img(src='@/assets/curso/temas/t4/paso1-3.svg', alt='')
        .col-lg-10
          h4 Aplicar el protocolo correspondiente
          p Seguir las acciones previstas en el plan de contingencia, según el tipo de evento y las condiciones del recorrido.
      .row(titulo="Paso 4")
        .col-lg-2.col-md-4.col-5.mb-3.mb-lg-0
          img(src='@/assets/curso/temas/t4/paso1-4.svg', alt='')
        .col-lg-10
          h4 Comunicar y pedir apoyo
          p Contactar guías de apoyo, prestadores de servicios, autoridades, organismos de emergencia o asistencia médica, según corresponda.
      .row(titulo="Paso 5")
        .col-lg-2.col-md-4.col-5.mb-3.mb-lg-0
          img(src='@/assets/curso/temas/t4/paso1-5.svg', alt='')
        .col-lg-10
          h4 Registrar y reportar la situación
          p Documentar lo ocurrido, informar a las entidades correspondientes y analizar la situación para mejorar futuros recorridos.

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt1.svg', alt='')
      h3.mb-0 Recomendaciones para aplicar el plan de contingencia
    
    p Antes de iniciar cualquier recorrido, el guía debe socializar las normas básicas de seguridad y las acciones que se deben seguir en caso de una situación imprevista. También debe conocer el estado de salud y la condición física de los viajeros, preferiblemente mediante una ficha de caracterización.
    p.mb-4 Durante la actividad, es necesario contar con medios de comunicación disponibles, como celulares o radios con baterías de repuesto, y tener a la mano los contactos de organismos de seguridad y emergencia.

    .row.justify-content-center.mb-4
      .col-lg-8(data-aos="fade-right")
        .tarjeta.bg9.p-4.px-lg-5.h-100.d-flex.flex-column.justify-content-center
          p También es importante evitar acciones que impliquen riesgos innecesarios. El guía debe proteger su propia integridad y la del grupo, promover el autocuidado, revisar el estado físico de los participantes y recordar recomendaciones como hidratación, uso de protector solar y vestimenta adecuada.
          p.mb-0 Por último, el guía debe mantener actualizada su certificación en primeros auxilios y disponer de un botiquín completo, con los elementos necesarios para atender de manera oportuna cualquier eventualidad.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t4/10.png', alt='')

    .cajon.color-acento-contenido.p-4.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-1.col-md-3.col-5.mb-3.mb-md-0
          img(src='@/assets/curso/temas/t4/11.svg', alt='')
        .col-lg-10.col-md-9
          p.mb-0 El plan de contingencia no elimina todos los riesgos, pero permite responder mejor cuando estos se presentan.

    .bg3.p-4
      p La gestión de riesgos y contingencias permite que el recorrido geoturístico se desarrolle con mayor seguridad, organización y responsabilidad. Identificar factores de riesgo, aplicar medidas preventivas y correctivas, seguir protocolos y contar con un plan de contingencia fortalece la calidad del servicio y protege a los visitantes, al guía y a la comunidad anfitriona.
      p.mb-0 En una experiencia geoturística, la seguridad también comunica profesionalismo. Por eso, el guía debe prepararse antes del recorrido, actuar con criterio durante la actividad y evaluar cada situación para mejorar continuamente la prestación del servicio.




</template>

<script>
export default {
  name: 'Tema4',
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
