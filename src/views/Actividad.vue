<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: ActividadController(:cuestionario="cuestionario") 
      // Para parrafo usar: ActividadController(:parrafo="parrafo")
      ActividadController(:cuestionario="cuestionario")
  </template>

<script>
import ActividadController from '@ecored-sena/base-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Diseño, planificación y ejecución de recorridos geoturísticos',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar los conocimientos del aprendiz sobre la gestión operativa del área de habitaciones y zonas comunes, verificando su comprensión de la estructura organizacional, los procedimientos técnicos de limpieza y arreglo, la normativa aplicable, la planeación de actividades, el manejo de suministros y activos, así como los procesos de supervisión y mantenimiento, con el fin de fortalecer las competencias requeridas para la coordinación eficiente del servicio de alojamiento. ',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: 'Un recorrido geoturístico se caracteriza principalmente por:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Evitar la interpretación del paisaje.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Centrarse únicamente en ventas de artesanías.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Divulgar el conocimiento geológico y promover la conservación del territorio.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Priorizar solo actividades recreativas sin contenido científico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto: 'Una ruta geoturística busca:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Limitar la visita solo a investigadores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reemplazar todos los demás tipos de turismo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Separar la geología de la cultura local.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Integrar geología, biodiversidad, cultura y ecología.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto: 'Un geoturista especializado o clásico se caracteriza por:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Tener alto interés por la geología y valorar explicaciones técnicas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Buscar solo descanso y entretenimiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Visitar el destino por casualidad sin interés en aprender.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Rechazar los recorridos guiados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de los siguientes corresponde a un segmento educativo del geoturismo?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Turistas que no valoran el patrimonio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Visitantes que únicamente desean alojamiento de lujo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Estudiantes, docentes e investigadores interesados en aprender.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Personas que solo buscan compras.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'Las fuentes primarias de información en turismo se obtienen mediante:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Libros y revistas únicamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Videos promocionales solamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Redes sociales sin verificación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Entrevistas, encuestas y observación directa.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: 'Una fuente secundaria de información es:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una experiencia personal no documentada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un libro, informe o artículo ya elaborado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Una conversación informal sin registro.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La observación directa del destino.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            'En la guianza turística, la idiosincrasia de una comunidad se refiere a:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El estado de las carreteras.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Las normas de tránsito del destino.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Los rasgos, costumbres y formas de actuar que la distinguen.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Los precios de los productos turísticos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: 'Los mitos y leyendas son importantes en la guianza porque:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Hacen parte de la memoria colectiva y enriquecen la interpretación del territorio.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Sustituyen completamente la información real.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se usan solo en parques temáticos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No tienen relación con el patrimonio cultural.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: 'El guion turístico es una herramienta que permite al guía:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reemplazar el plan de acción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar la interacción con el visitante.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Organizar de manera lógica lo que va a comunicar.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Improvisar toda la información del recorrido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: 'Uno de los propósitos del guion interpretativo es:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Presentar información sin contexto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evitar preguntas de los visitantes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Generar aprendizaje, emoción y actitudes responsables.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Solo vender servicios adicionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: 'Según el modelo TORA, una interpretación efectiva debe ser:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Temática, organizada, relevante y amena.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Técnica, obligatoria, rápida y autoritaria.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Tradicional, oral, repetitiva y amplia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Temporal, objetiva, rígida y académica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            'En el <em>storytelling</em> aplicado al turismo, la conexión emocional permite:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Hacer más técnico el recorrido.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar el componente cultural.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir el interés del visitante.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Fortalecer el vínculo del turista con el destino.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            'La comunicación no verbal en la guianza incluye elementos como:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente mapas y brújulas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Exclusivamente el uso de micrófonos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Gestos, postura, mirada y expresión facial.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Solo la lectura de textos.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: 'La geoconservación se enfoca principalmente en:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Proteger todos los elementos del territorio por igual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Construir infraestructura turística sin restricciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Promover únicamente la explotación minera.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Conservar geositios y elementos valiosos del patrimonio geológico.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: 'La metodología "No Dejar Rastro" busca:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reemplazar la interpretación del patrimonio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Prohibir toda visita turística.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir el impacto negativo en espacios naturales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Incrementar el uso de fogatas y residuos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: 'Un plan de acción en guianza turística sirve para:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sustituir los protocolos de seguridad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar la caracterización del usuario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Improvisar las actividades según el día.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Organizar previamente objetivos, tiempos, recursos y responsables.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: 'Un factor de riesgo ambiental en turismo puede ser:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La interpretación del patrimonio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un deslizamiento o clima extremo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La atención cordial al usuario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La señalización del sendero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: 'El plan de contingencia se diseña para:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir el tiempo de la experiencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reemplazar la función del guía.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Responder adecuadamente ante incidentes, accidentes o emergencias.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Evitar la planeación del recorrido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: 'Una técnica de manejo de grupo en la guianza es:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ignorar las características del visitante.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Explicar normas e instrucciones al inicio del recorrido.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Evitar la participación del grupo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Suspender las pausas interpretativas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto: 'La evaluación y el seguimiento en la guianza permiten:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Repetir siempre el mismo recorrido sin ajustes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar la retroalimentación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Revisar la calidad del servicio y detectar oportunidades de mejora.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Calificar solamente al turista.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
