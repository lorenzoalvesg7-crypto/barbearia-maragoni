export const siteData = {
  name: "Barbearia Marangoni",
  slogan: "Ter estilo é uma questão de escolha.",
  description:
    "Do corte tradicional ao moderno, do infantil ao adulto. Uma barbearia completa para homens de atitude.",
  about:
    "Na Barbearia Marangoni, estilo e personalidade caminham juntos. Nossa equipe oferece cortes tradicionais e modernos, sempre buscando um atendimento de qualidade e uma experiência diferenciada para nossos clientes.",
  rating: 4.8,
  reviewsCount: 128,
  phone: "(35) 98855-9938",
  whatsappNumber: "5535988559938",
  whatsappMessage: "Olá! Gostaria de agendar um horário na Barbearia Marangoni.",
  address: {
    street: "Av. Dr. José Justiniano dos Réis, 1047 - Sion",
    city: "Varginha - MG",
    zip: "37048-002",
    full: "Av. Dr. José Justiniano dos Réis, 1047 - Sion, Varginha - MG, 37048-002",
  },
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Av.+Dr.+José+Justiniano+dos+Réis,+1047+-+Sion,+Varginha+-+MG,+37048-002&output=embed",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Av.+Dr.+José+Justiniano+dos+Réis,+1047+-+Sion,+Varginha+-+MG,+37048-002",
  social: {
    instagram: "",
    facebook: "",
  },
  // Editável: atualize os horários conforme necessário
  hours: [
    { day: "Segunda-feira", time: "Fechado" },
    { day: "Terça-feira", time: "09:00 - 19:00" },
    { day: "Quarta-feira", time: "09:00 - 19:00" },
    { day: "Quinta-feira", time: "09:00 - 19:00" },
    { day: "Sexta-feira", time: "09:00 - 19:00" },
    { day: "Sábado", time: "08:00 - 17:00" },
    { day: "Domingo", time: "Fechado" },
  ],
};

export const services = [
  {
    title: "Corte Masculino",
    description:
      "Cortes precisos adaptados ao seu estilo, com acabamento de qualidade e atendimento de primeira.",
    icon: "scissors",
  },
  {
    title: "Corte Infantil",
    description:
      "Atendimento especial para os pequenos, com paciência e cuidado para uma experiência divertida.",
    icon: "baby",
  },
  {
    title: "Cortes Modernos",
    description:
      "Estilos contemporâneos, fades, texturas e tendências atuais para quem busca diferencial.",
    icon: "sparkles",
  },
  {
    title: "Cortes Tradicionais",
    description:
      "Os clássicos que nunca saem de moda, executados com técnica e precisão de barbearia.",
    icon: "crown",
  },
  {
    title: "Barba",
    description:
      "Modelagem, aparamento e toalha quente para uma barba alinhada e bem cuidada.",
    icon: "razor",
  },
  {
    title: "Serviços para Homens",
    description:
      "Pigmentação, sobrancelha e outros cuidados completos para o homem moderno.",
    icon: "user",
  },
];

export const reviews = [
  {
    name: "Cliente Marangoni",
    text: "Bom atendimento, ótimo ambiente show de bola.",
    rating: 5,
  },
  {
    name: "Mãe Satisfeita",
    text: "Muito satisfeita com os cortes do meu filho e do marido!",
    rating: 5,
  },
  {
    name: "Cliente Antigo",
    text: "Já sou cliente há muito tempo! Sempre muito bem atendido!",
    rating: 5,
  },
];

export const galleryImages = [
  {
    url: "https://images.pexels.com/photos/4625626/pexels-photo-4625626.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Corte masculino moderno na Barbearia Marangoni",
    category: "Cortes",
  },
  {
    url: "https://images.pexels.com/photos/7195803/pexels-photo-7195803.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Ambiente da barbearia Marangoni",
    category: "Ambiente",
  },
  {
    url: "https://images.pexels.com/photos/9992820/pexels-photo-9992820.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Barba sendo modelada na barbearia",
    category: "Barba",
  },
  {
    url: "https://images.pexels.com/photos/19664861/pexels-photo-19664861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Corte infantil na Barbearia Marangoni",
    category: "Infantil",
  },
  {
    url: "https://images.pexels.com/photos/7447151/pexels-photo-7447151.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Corte degradê preciso na barbearia",
    category: "Cortes",
  },
  {
    url: "https://images.pexels.com/photos/7518736/pexels-photo-7518736.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Barbeiro atendendo cliente na Barbearia Marangoni",
    category: "Equipe",
  },
  {
    url: "https://images.pexels.com/photos/3998427/pexels-photo-3998427.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Modelagem de barba com toalha quente",
    category: "Barba",
  },
  {
    url: "https://images.pexels.com/photos/13058812/pexels-photo-13058812.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Interior da barbearia Marangoni",
    category: "Ambiente",
  },
];

export const heroImage =
  "https://images.pexels.com/photos/9146943/pexels-photo-9146943.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";

export const aboutImage =
  "https://images.pexels.com/photos/7518734/pexels-photo-7518734.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";

export function getWhatsAppLink(message?: string): string {
  const msg = message || siteData.whatsappMessage;
  return `https://wa.me/${siteData.whatsappNumber}?text=${encodeURIComponent(msg)}`;
}
