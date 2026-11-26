/**
 * Configuração Geral da MakerPixel Techsystem
 * Altere a Razão Social, CNPJ, dados de contato e flags de recursos aqui em um único lugar.
 */
const SITE_CONFIG = {
  razaoSocial: "MAURICIO GOULART DE OLIVEIRA",
  nomeFantasia: "MakerPixel Techsystem Contábil",
  cnpj: "59.218.563/0001-01",
  emailContato: "contato@makerpixeltech.com.br",
  whatsappNumero: "5548984570272",
  whatsappFormatado: "(48) 98457-0272",
  // Controle de ativação do botão "Entrar" no menu superior
  // Mude para true quando o app https://app.makerpixeltech.com.br estiver no ar
  mostrarBotaoEntrar: false,
  urlApp: "https://app.makerpixeltech.com.br"
};

if (typeof window !== 'undefined') {
  window.SITE_CONFIG = SITE_CONFIG;
}
