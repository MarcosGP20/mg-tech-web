const WHATSAPP_NUMBER = "5493517692071";
const DEFAULT_MESSAGE =
  "Hola Marcos! Vi tu página y me interesa digitalizar mi negocio. 💻 ¿ Me podrías dar más info sobre cómo trabajan y los tiempos de desarrollo?";

export function getWhatsAppUrl(message = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
