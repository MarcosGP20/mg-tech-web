const WHATSAPP_NUMBER = "5493517692071";
const DEFAULT_MESSAGE =
  "Hola, me interesa saber más sobre los servicios de MG Tech.";

export function getWhatsAppUrl(message = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

