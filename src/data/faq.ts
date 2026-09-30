/**
 * Preguntas frecuentes — SPEC §20.
 * Estas son preguntas reales que surgen del análisis de la audiencia
 * (corralones, constructoras, arquitectos, maestros, particulares).
 */

export interface FaqItem {
  q: string;
  a: string;
  pending?: boolean;
}

export const faq: FaqItem[] = [
  {
    q: '¿Qué ladrillo usar para una pared exterior?',
    a: 'Para cerramientos exteriores se recomienda generalmente un ladrillo hueco de 12 o 18 cm, según el nivel de aislación y resistencia deseado. Para muros que soportan cargas estructurales se utiliza ladrillo portante. Confirmá la elección con tu constructor o con nuestro equipo técnico.',
  },
  {
    q: '¿Cuántos ladrillos necesito por metro cuadrado?',
    a: 'Depende del modelo: el rendimiento se calcula según el espesor del ladrillo y el tipo de pared. Cuando valides el modelo y las dimensiones de tu obra, podemos ayudarte con el cálculo. Próximamente publicaremos una calculadora.',
    pending: true,
  },
  {
    q: '¿Qué diferencia hay entre ladrillo portante y de cerramiento?',
    a: 'El ladrillo portante está diseñado para resistir las cargas de la estructura; el de cerramiento sólo cierra el muro, cuya estructura la sostienen columnas y vigas. Por eso se eligen según el cálculo del profesional.',
  },
  {
    q: '¿Cuántos ladrillos trae un pallet?',
    a: 'La cantidad varía según el modelo. Una vez validado el catálogo, esta información estará disponible en cada ficha técnica.',
    pending: true,
  },
  {
    q: '¿Cómo almacenar ladrillos correctamente?',
    a: 'Los pallets deben apoyarse sobre superficie firme y nivelada, protegidos de la lluvia y la humedad. Evitá apilar más de la cantidad indicada por el fabricante y respetá las recomendaciones de la ficha técnica.',
  },
  {
    q: '¿Cómo solicito un presupuesto?',
    a: 'Podés escribirnos por WhatsApp al +54 3743 476985 o completar el formulario de la página de Contacto indicando producto, cantidad y localidad. Te respondemos a la brevedad.',
  },
  {
    q: '¿Dónde puedo comprar Cerámica Puerto Rico?',
    a: 'Directamente en nuestra planta de Puerto Rico, Misiones. Próximamente publicaremos la lista completa de distribuidores habilitados en la sección correspondiente.',
    pending: true,
  },
  {
    q: '¿Hacen entregas? ¿Qué zonas atienden?',
    a: 'Coordinamos entregas en Misiones y provincias vecinas (Corrientes, Chaco, Formosa). Consultá por tu localidad y volumen por WhatsApp.',
  },
];

export default faq;
