<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Planeación técnica y operativa del recorrido

    .bloque-texto-g.color-acento-contenido.b-redo.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t3/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4.px-lg-5
        p Planear un recorrido geoturístico exige organizar los elementos que harán posible una experiencia segura, clara y bien orientada. No basta con conocer el territorio; también se requiere prever cómo se prestará el servicio, qué recursos se utilizarán, cómo se orientará al grupo y qué instrumentos permitirán ubicar, interpretar y desarrollar la ruta. #[br] #[br]
        p.mb-0 La planeación técnica y operativa permite que el guía tome decisiones antes del recorrido. Esto evita improvisaciones, mejora la atención al visitante y facilita la coordinación con otros actores del servicio turístico.

    .cajon.color-acento-contenido.p-4
      .row.justify-content-center.align-items-center
        .col-lg-1.col-md-3.col-5.mb-3.mb-md-0
          img(src='@/assets/curso/temas/t3/2.svg', alt='')
        .col-lg-10.col-md-9
          p.mb-0 Una buena planeación permite que el recorrido sea más seguro, organizado y coherente con las necesidades del grupo visitante.


    Separador
    #t_3_1.titulo-segundo.color-primario(data-aos='fade-right')
      h2 3.1  Servicio y recursos para la guianza: protocolos, ciclo de servicio, estándares, recursos humanos, financieros, materiales y equipos

    p El servicio en la guianza turística se relaciona con la capacidad de responder de manera adecuada a las necesidades y expectativas de los visitantes. En turismo, la calidad del servicio no depende únicamente de la infraestructura o del atractivo visitado, sino también de la actitud, el trato, el conocimiento y la organización de quienes acompañan la experiencia.
    p.mb-5 Una buena atención influye en la percepción del visitante, en la imagen del destino y en la posibilidad de que la persona recomiende o quiera volver a vivir la experiencia. Por esta razón, el servicio turístico debe planearse desde antes del recorrido y mantenerse hasta el cierre de la actividad (Metz et al., 2020; Choe et al., 2023).

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt1.svg', alt='')
      h3.mb-0 Momentos clave del servicio en la guianza

    .row.justify-content-center.mb-5
      .col-lg-3.col-md-6.col-8.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/3.png', alt='')
      .col-lg-9(data-aos="fade-left")
        TabsA.color-acento-botones
          .tarjeta.bg4.p-4(titulo="Antes del recorrido")
            p Se brinda información clara sobre el servicio, horarios, punto de encuentro, recomendaciones, condiciones del recorrido y requisitos para participar.
          .tarjeta.bg4.p-4(titulo="Recepción del grupo")
            p El guía recibe a los visitantes, verifica asistencia, presenta el recorrido, genera confianza y comunica las instrucciones iniciales.
          .tarjeta.bg4.p-4(titulo="Desarrollo de la experiencia")
            p Se orienta al grupo, se comparte información, se resuelven inquietudes, se aplican protocolos y se mantiene la seguridad.
          .tarjeta.bg4.p-4(titulo="Atención a eventualidades")
            p El guía identifica necesidades o situaciones imprevistas y actúa de acuerdo con los protocolos de servicio y el plan de contingencia.
          .tarjeta.bg4.p-4(titulo="Cierre del recorrido")
            p Se finaliza la experiencia, se agradece la participación, se refuerzan mensajes clave y se recogen percepciones del visitante.

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt1.svg', alt='')
      h3.mb-0 Protocolos para la prestación del servicio

    .cajon.color-primario.p-4.mb-4
      p.mb-0 Los protocolos de servicio ayudan a ordenar la actuación del guía antes, durante y después del recorrido. Según la Norma Técnica Sectorial #[b NTS-GT 001], el guía debe brindar información, orientar al visitante, asistir eventualidades, propiciar condiciones de seguridad y conducir grupos de acuerdo con el plan establecido (Icontec, 2014).

    .row.justify-content-center.align-items-end.mb-5(data-aos="fade-down")
      .col-lg-7
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 2.
          span Requisitos del servicio de guianza turística
        .tabla-a.color-primario
          table
            thead
              tr
                th Requisito
                th ¿Qué implica para el guía?
            tbody
              tr
                td Brindar información sobre atractivos y facilidades
                td Identificar los atractivos y servicios del destino, informar de manera clara y orientar según el programa y el perfil del usuario.
              tr
                td Asistir eventualidades durante el recorrido
                td Reconocer la situación, informar al visitante, aplicar correctivos y actuar según el plan de contingencia.
              tr
                td Propiciar seguridad, comodidad e integridad
                td Explicar riesgos, aplicar normas de seguridad, revisar documentos y preparar recursos de emergencia.
              tr
                td Conducir grupos según el plan de acción
                td Recibir a los usuarios, impartir instrucciones, atender requerimientos, desarrollar actividades y resolver contingencias.
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/temas/t3/4.png', alt='')
      
    .cajon.color-acento-contenido.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-1.col-md-3.col-5.mb-3.mb-md-0
          img(src='@/assets/curso/temas/t3/5.svg', alt='')
        .col-lg-10.col-md-9
          p.mb-0 Si el guía no aplica protocolos, el recorrido puede presentar desorden, información imprecisa, atención inadecuada o dificultades para responder ante eventualidades.

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt1.svg', alt='')
      h3.mb-0 Ciclo de servicio al cliente

    p El ciclo de servicio corresponde a los momentos de contacto entre el visitante y la prestación del servicio, antes, durante y después de la experiencia. Cada momento influye en la percepción de calidad que construye el usuario (Giraldo Zuluaga, 2010).
    p.mb-5 En un recorrido geoturístico, este ciclo puede iniciar con la solicitud de información y continuar con la reserva, la recepción del grupo, las instrucciones iniciales, el desarrollo del recorrido, la atención de inquietudes y el cierre de la actividad.

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt1.svg', alt='')
      h3.mb-0 Ciclo de servicio en la guianza geoturística

    LineaTiempoE.color-secundario.mb-5(data-aos="fade")
      .row(titulo="Momento 1")
        .col-lg-2.col-md-4.col-5.mb-3.mb-lg-0
          img(src='@/assets/curso/temas/t3/paso1-1.svg', alt='')
        .col-lg-10
          h4 Información inicial
          p El visitante recibe datos sobre el recorrido, duración, nivel de dificultad, recomendaciones y condiciones del servicio.
      .row(titulo="Momento 2")
        .col-lg-2.col-md-4.col-5.mb-3.mb-lg-0
          img(src='@/assets/curso/temas/t3/paso1-2.svg', alt='')
        .col-lg-10
          h4 Reserva y confirmación
          p Se verifica la participación, se confirman horarios, costos, punto de encuentro y requerimientos especiales.
      .row(titulo="Momento 3")
        .col-lg-2.col-md-4.col-5.mb-3.mb-lg-0
          img(src='@/assets/curso/temas/t3/paso1-3.svg', alt='')
        .col-lg-10
          h4 Recepción del grupo
          p El guía saluda, presenta la actividad, verifica asistencia y entrega instrucciones de seguridad.
      .row(titulo="Momento 4")
        .col-lg-2.col-md-4.col-5.mb-3.mb-lg-0
          img(src='@/assets/curso/temas/t3/paso1-4.svg', alt='')
        .col-lg-10
          h4 Desarrollo del recorrido
          p Se orienta la experiencia, se interpretan los atractivos y se atienden preguntas o necesidades del grupo.
      .row(titulo="Momento 5")
        .col-lg-2.col-md-4.col-5.mb-3.mb-lg-0
          img(src='@/assets/curso/temas/t3/paso1-5.svg', alt='')
        .col-lg-10
          h4 Manejo de eventualidades
          p Se aplican protocolos frente a retrasos, cambios climáticos, dificultades físicas o situaciones imprevistas.
      .row(titulo="Momento 6")
        .col-lg-2.col-md-4.col-5.mb-3.mb-lg-0
          img(src='@/assets/curso/temas/t3/paso1-6.svg', alt='')
        .col-lg-10
          h4 Cierre y despedida
          p Se refuerza el mensaje principal, se agradece la participación y se recogen percepciones para mejorar el servicio.  

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt1.svg', alt='')
      h3.mb-0 Recursos para la guianza

    p.mb-4 Los recursos permiten que el recorrido se desarrolle con mayor organización, seguridad y calidad. En la guianza turística se deben prever recursos humanos, financieros, materiales y equipos.

    .row.justify-content-center.align-items-end.mb-5(data-aos="fade-down")
      .col-lg-9
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 3.
          span Recursos necesarios para la guianza turística
        .tabla-a.color-primario
          table
            thead
              tr
                th Tipo de recurso
                th Descripción
                th Ejemplos
            tbody
              tr
                td Recursos humanos
                td Personas que participan en la prestación del servicio.
                td Guía de turismo, coordinador, conductor, intérprete, personal de apoyo logístico o primeros auxilios.
              tr
                td Recursos financieros
                td Presupuesto necesario para ejecutar y sostener el recorrido.
                td Transporte, alimentación, entradas, seguros, pago de personal, materiales y equipos.
              tr
                td Recursos materiales
                td Elementos físicos que apoyan la actividad de guianza.
                td Mapas, guiones, botiquín, señalética, formatos de control, hidratación y material pedagógico.
              tr
                td Equipos
                td Herramientas o dispositivos que apoyan técnicamente el servicio.
                td Radios, GPS, linternas, binoculares, micrófonos, cámaras, tabletas o equipos de primeros auxilios.
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/t3/6.png', alt='')

    .cajon.color-acento-contenido.p-4
      .row.justify-content-center.align-items-center
        .col-lg-1.col-md-3.col-5.mb-3.mb-md-0
          img(src='@/assets/curso/temas/t3/7.svg', alt='')
        .col-lg-10.col-md-9
          p.mb-0 La calidad del recorrido depende tanto del conocimiento del guía como de la adecuada organización de los recursos disponibles.


    Separador
    #t_3_2.titulo-segundo.color-primario(data-aos='fade-right')
      h2 3.2  Cartografía aplicada al turismo: mapas, interpretación, herramientas de orientación y levantamiento de rutas

    .bloque-texto-g.bg6.b-redo.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t3/8.png')})`}"
      )
      .bloque-texto-g__texto.p-4.px-lg-5
        p La cartografía permite representar el territorio de manera gráfica para facilitar su comprensión, ubicación e interpretación. En los recorridos geoturísticos, los mapas son herramientas esenciales porque ayudan a planear rutas, ubicar atractivos, reconocer distancias, orientar al grupo y comprender las características del espacio visitado. #[br]#[br] 
        p.mb-0 Según Raisz (1985), la cartografía recopila, analiza y representa información de diferentes regiones de la Tierra mediante escalas reducidas. Esto permite visualizar de forma clara elementos del territorio que serían difíciles de comprender únicamente mediante la observación directa.

    p.mb-5 Los mapas turísticos también apoyan la interpretación del territorio, porque permiten relacionar atractivos, servicios, rutas, puntos de interés y condiciones del entorno. En el geoturismo, esta información es clave para ubicar geositios, planear desplazamientos y orientar al visitante durante la experiencia.

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt1.svg', alt='')
      h3.mb-0 Elementos de un mapa para la guianza turística

    .row.justify-content-center.mb-5
      .col-lg-3.col-md-6.col-8.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/9.png', alt='')
      .col-lg-9(data-aos="fade-left")
        TabsA.color-acento-botones
          .tarjeta.bg4.p-4(titulo="Escala")
            p Indica la relación entre la distancia representada en el mapa y la distancia real en el terreno.
          .tarjeta.bg4.p-4(titulo="Norte")
            p Permite orientar el mapa y reconocer la dirección correcta para desplazarse.
          .tarjeta.bg4.p-4(titulo="Convenciones o nomenclatura")
            p Explican el significado de símbolos, colores, líneas, carreteras, ríos, límites y otros elementos.
          .tarjeta.bg4.p-4(titulo="Curvas de nivel")
            p Representan la altura y la forma del terreno. Ayudan a identificar pendientes, montañas y cambios de relieve.
          .tarjeta.bg4.p-4(titulo="Puntos de interés")
            p Ubican atractivos turísticos, geositios, servicios, estaciones interpretativas o zonas de apoyo.
    
    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt1.svg', alt='')
      h3.mb-0 Herramientas de orientación cartográfica

    .cajon.color-primario.p-4.mb-4
      p Para orientarse durante un recorrido no basta con tener un mapa. También es necesario saber interpretarlo y, cuando sea necesario, usar herramientas como brújula, planos, sistema de posicionamiento global (GPS) o referencias naturales.
      p.mb-0 La brújula permite encontrar direcciones a partir del campo magnético terrestre. Sin embargo, puede presentar errores si se usa cerca de relojes, vehículos, líneas de alta tensión o zonas con minerales ferrosos. Por eso, debe mantenerse en posición horizontal y utilizarse lejos de elementos que alteren su funcionamiento.

    .row.justify-content-center.align-items-end.mb-5(data-aos="fade-down")
      .col-lg-9
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span Herramientas y recursos para la orientación en campo
        .tabla-a.color-primario
          table
            thead
              tr
                th Herramienta o recurso
                th Uso principal
                th Cuidado o recomendación
            tbody
              tr
                td Mapa o plano
                td Representar rutas, atractivos, distancias y elementos del territorio.
                td Revisar escala, norte, convenciones y estado de actualización.
              tr
                td Brújula
                td Identificar direcciones y rumbos durante el desplazamiento.
                td Usarla en posición horizontal y lejos de objetos que alteren el magnetismo.
              tr
                td GPS
                td Ubicar coordenadas, rutas y puntos de interés.
                td Verificar batería, señal y mapas cargados antes del recorrido.
              tr
                td Referencias naturales
                td Orientarse mediante elementos del entorno.
                td Usarlas solo como apoyo, porque pueden variar según el lugar y las condiciones.
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/t3/10.png', alt='')

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt1.svg', alt='')
      h3.mb-0 Uso conjunto del mapa y la brújula

    .bg3.mb-4(data-aos="fade")
      .row.justify-content-center.align-items-center
        .col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/11.png', alt='')
        .col-lg-7
          .p-4
            p Para desplazarse de un punto a otro en campo, el guía debe ubicar primero el punto de salida y el punto de llegada en el mapa. Luego, traza una línea entre ambos puntos y coloca la brújula sobre esa línea, orientando la dirección de avance hacia el destino.
            p.mb-0 Después, se gira el anillo de la brújula hasta hacerlo coincidir con el norte del mapa. Una vez en el terreno, se sostiene la brújula en posición horizontal y se gira el cuerpo hasta que la aguja magnética coincida con el norte marcado. En ese momento, la flecha de dirección indica el rumbo a seguir.

    .cajon.color-acento-contenido.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-1.col-md-3.col-5.mb-3.mb-md-0
          img(src='@/assets/curso/temas/t3/12.svg', alt='')
        .col-lg-10.col-md-9
          p.mb-0 Si el guía no verifica la orientación, puede conducir al grupo por una ruta equivocada, aumentar el tiempo del recorrido o exponer a los visitantes a zonas no previstas.

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt1.svg', alt='')
      h3.mb-0 Cómo orientarse con mapa y brújula

    LineaTiempoE.color-secundario(data-aos="fade")
      .row(titulo="Paso 1")
        .col-lg-2.col-md-4.col-5.mb-3.mb-lg-0
          img(src='@/assets/curso/temas/t3/paso2-1.svg', alt='')
        .col-lg-10
          h4 Ubicar los puntos
          p Identificar en el mapa el punto de salida y el punto de llegada del recorrido.
      .row(titulo="Paso 2")
        .col-lg-2.col-md-4.col-5.mb-3.mb-lg-0
          img(src='@/assets/curso/temas/t3/paso2-2.svg', alt='')
        .col-lg-10
          h4 Trazar la dirección
          p Unir ambos puntos con una línea recta para reconocer el rumbo general.
      .row(titulo="Paso 3")
        .col-lg-2.col-md-4.col-5.mb-3.mb-lg-0
          img(src='@/assets/curso/temas/t3/paso2-3.svg', alt='')
        .col-lg-10
          h4 Alinear la brújula
          p Colocar la brújula sobre la línea trazada y orientar la flecha de dirección hacia el destino.
      .row(titulo="Paso 4")
        .col-lg-2.col-md-4.col-5.mb-3.mb-lg-0
          img(src='@/assets/curso/temas/t3/paso2-4.svg', alt='')
        .col-lg-10
          h4 Ajustar el norte
          p Girar el anillo de la brújula hasta que coincida con el norte del mapa.
      .row(titulo="Paso 5")
        .col-lg-2.col-md-4.col-5.mb-3.mb-lg-0
          img(src='@/assets/curso/temas/t3/paso2-5.svg', alt='')
        .col-lg-10
          h4 Seguir el rumbo en campo
          p Sostener la brújula en posición horizontal y avanzar según la dirección indicada.


    Separador
    #t_3_3.titulo-segundo.color-primario(data-aos='fade-right')
      h2 3.3  Plan de acción del recorrido: componentes, estructura e itinerario

    p El plan de acción es una herramienta que permite organizar previamente el recorrido geoturístico. En él se definen el propósito de la actividad, los tiempos, los espacios, los recursos, las personas responsables y las acciones necesarias para desarrollar el servicio de manera ordenada.
    p.mb-4 Según González Molina et al. (2023), este instrumento facilita la articulación entre los actores o prestadores de servicios que participan en la experiencia, lo que contribuye a ofrecer una atención más integral y coordinada.

    .row.justify-content-center.align-items-end.mb-5(data-aos="fade-down")
      .col-lg-7
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 5.
          span Componentes del plan de acción del recorrido
        .tabla-a.color-primario
          table
            thead
              tr
                th Componente
                th Descripción
            tbody
              tr
                td Información base del recorrido
                td Nombre del prestador, destino, fecha, hora, lugar de salida y llegada, número de viajeros y guía responsable.
              tr
                td Caracterización del usuario
                td Segmento al que va dirigido el recorrido, considerando edades, motivaciones, hábitos de consumo o necesidades particulares.
              tr
                td Objetivo
                td Propósito de la experiencia y actividades que el visitante espera vivir durante el recorrido.
              tr
                td Paquete turístico
                td Conjunto de actividades y servicios ofrecidos al visitante con sus respectivos responsables.
              tr
                td Itinerario
                td Orden de las actividades, tiempos, paradas técnicas, desplazamientos y momentos clave de la ruta.
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/temas/t3/13.png', alt='')

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt1.svg', alt='')
      h3.mb-0 Estructura básica del plan de acción

    .row.justify-content-center.mb-4
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/temas/t3/14.png', alt='')
      .col-lg-7
        LineaTiempoD.color-acento-botones
          p(numero="1" titulo="Información base del recorrido") Permite identificar los datos generales del servicio. Incluye destino, fecha, hora, punto de salida, punto de llegada, número de visitantes y guía responsable.
          p(numero="2" titulo="Caracterización del usuario") Ayuda a reconocer a quién va dirigido el recorrido. Esta información permite ajustar lenguaje, actividades, tiempos y recomendaciones.
          p(numero="3" titulo="Objetivo del recorrido") Define qué se espera lograr con la experiencia. Puede orientarse a la interpretación, educación, recreación, conservación o valoración del patrimonio.
          p(numero="4" titulo="Servicios y responsables") Organiza las actividades, prestadores de servicios, apoyos logísticos y personas encargadas de cada momento del recorrido.
          p(numero="5" titulo="Itinerario") Establece la secuencia del recorrido, tiempos, paradas, desplazamientos, descansos y cierre de la actividad.

    .cajon.color-acento-contenido.p-4.mb-4
      p Cuando el plan de acción está bien elaborado, el guía puede anticipar necesidades, coordinar recursos, evitar improvisaciones y responder mejor a las condiciones del recorrido. Esto mejora la experiencia del visitante y fortalece la calidad del servicio turístico.
      p.mb-0 La planeación técnica y operativa integra servicio, recursos, cartografía y plan de acción. Estos elementos permiten que el recorrido geoturístico se desarrolle de manera organizada, segura y pertinente para el grupo visitante.

    p Un guía que planifica adecuadamente no solo conoce el territorio: también prevé cómo atender al grupo, qué recursos utilizar, cómo orientarse y cómo coordinar cada momento de la experiencia.



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
