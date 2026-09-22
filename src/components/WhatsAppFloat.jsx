import { business, buildWhatsAppLink } from "../data/site";

export default function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={buildWhatsAppLink(business.whatsappMessage, business.whatsapp)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Consultar por WhatsApp"
    >
      <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.1c-.24.68-1.4 1.32-1.93 1.4-.5.08-1.09.11-1.76-.11-.4-.13-.92-.3-1.58-.6-2.79-1.2-4.6-4-4.74-4.19-.14-.19-1.13-1.5-1.13-2.86 0-1.36.71-2.03.97-2.3.24-.27.53-.34.71-.34h.5c.16 0 .38-.03.58.44.24.57.79 1.97.86 2.11.07.14.11.31.02.5-.09.18-.14.29-.28.45-.14.16-.29.36-.42.48-.14.14-.28.29-.13.57.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.16-.19.68-.79.86-1.06.18-.27.35-.22.6-.13.24.09 1.55.73 1.81.87.27.13.44.2.51.31.07.13.07.7-.17 1.36Z" />
      </svg>
    </a>
  );
}
