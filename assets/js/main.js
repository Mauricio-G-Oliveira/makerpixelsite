/**
 * MakerPixel Techsystem - Script Interativo Multi-Páginas (Foco Contábil / NotaSync)
 * WhatsApp: 48984570272
 * Email: mauriciogoulart.deoliveira37@gmail.com
 * Especialista em Tecnologia para Escritórios de Contabilidade (Santa Catarina)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Inicialização de Ícones Lucide
  if (window.lucide) {
    window.lucide.createIcons();
  }

  /* -------------------------------------------------------------
     1. Constantes da Empresa
     ------------------------------------------------------------- */
  const WHATSAPP_NUMBER = '5548984570272';
  const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

  /* -------------------------------------------------------------
     2. Menu Mobile Responsivo
     ------------------------------------------------------------- */
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  /* -------------------------------------------------------------
     3. Widget Flutuante do WhatsApp (Foco NotaSync)
     ------------------------------------------------------------- */
  const waToggleBtn = document.getElementById('wa-toggle-btn');
  const waChatWindow = document.getElementById('wa-chat-window');
  const waCloseBtn = document.getElementById('wa-close-btn');
  const waSendBtn = document.getElementById('wa-send-btn');
  const waNameInput = document.getElementById('wa-client-name');
  const waOfficeInput = document.getElementById('wa-client-office');
  const waMessageInput = document.getElementById('wa-client-message');
  const waPresets = document.querySelectorAll('.wa-preset-pill');

  if (waToggleBtn && waChatWindow) {
    waToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      waChatWindow.classList.toggle('hidden');
      if (!waChatWindow.classList.contains('hidden') && waNameInput) {
        waNameInput.focus();
      }
    });

    if (waCloseBtn) {
      waCloseBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        waChatWindow.classList.add('hidden');
      });
    }

    // Fechar ao clicar fora
    document.addEventListener('click', (e) => {
      if (!waChatWindow.contains(e.target) && !waToggleBtn.contains(e.target)) {
        waChatWindow.classList.add('hidden');
      }
    });

    // Pílulas com assuntos rápidos para contadores
    waPresets.forEach(preset => {
      preset.addEventListener('click', () => {
        const text = preset.getAttribute('data-text');
        if (waMessageInput) {
          waMessageInput.value = text;
          waPresets.forEach(p => p.classList.remove('bg-cyan-500/20', 'border-cyan-400', 'text-white'));
          preset.classList.add('bg-cyan-500/20', 'border-cyan-400', 'text-white');
        }
      });
    });

    // Envio pelo WhatsApp
    if (waSendBtn) {
      waSendBtn.addEventListener('click', () => {
        const name = waNameInput ? waNameInput.value.trim() : '';
        const office = waOfficeInput ? waOfficeInput.value.trim() : '';
        const message = waMessageInput ? waMessageInput.value.trim() : '';

        let fullText = `*CONTATO VIA SITE - MAKERPIXEL CONTÁBIL*\n`;
        fullText += `━━━━━━━━━━━━━━━━━━━━━\n`;
        if (name) fullText += `👤 *Nome:* ${name}\n`;
        if (office) fullText += `🏢 *Escritório:* ${office}\n`;
        if (message) {
          fullText += `💬 *Mensagem / Dúvida:*\n${message}\n`;
        } else {
          fullText += `💬 *Mensagem:* Olá Mauricio, gostaria de saber mais sobre o NotaSync (captura automática de NFC-e na SEF/SC) e o programa piloto!\n`;
        }
        fullText += `━━━━━━━━━━━━━━━━━━━━━\n`;
        fullText += `_(Atendimento direto com o desenvolvedor em Santa Catarina)_`;

        const encodedUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(fullText)}`;
        window.open(encodedUrl, '_blank');
        waChatWindow.classList.add('hidden');
      });
    }
  }

  /* -------------------------------------------------------------
     4. Campo Condicional do Formulário Piloto ("Outro")
     ------------------------------------------------------------- */
  const howDownloadSelect = document.getElementById('diag-how-download');
  const howDownloadOtherInput = document.getElementById('diag-how-download-other');

  if (howDownloadSelect && howDownloadOtherInput) {
    howDownloadSelect.addEventListener('change', () => {
      if (howDownloadSelect.value === 'Outro') {
        howDownloadOtherInput.classList.remove('hidden');
        howDownloadOtherInput.focus();
      } else {
        howDownloadOtherInput.classList.add('hidden');
        howDownloadOtherInput.value = '';
      }
    });
  }

  /* -------------------------------------------------------------
     5. Formulário do Programa Piloto NotaSync (#pilot-form)
     ------------------------------------------------------------- */
  const pilotForm = document.getElementById('pilot-form') || document.getElementById('accounting-diagnosis-form');
  if (pilotForm) {
    pilotForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('diag-name')?.value.trim() || '';
      const office = document.getElementById('diag-office')?.value.trim() || '';
      const city = document.getElementById('diag-city')?.value.trim() || '';
      const phone = document.getElementById('diag-phone')?.value.trim() || '';
      const companies = document.getElementById('diag-companies')?.value || '';
      const erp = document.getElementById('diag-erp')?.value.trim() || '';
      const howDownload = document.getElementById('diag-how-download')?.value || '';
      const howDownloadOther = document.getElementById('diag-how-download-other')?.value.trim() || '';
      const mainPain = document.getElementById('diag-pain')?.value.trim() || '';

      const downloadMethodStr = (howDownload === 'Outro' && howDownloadOther) 
        ? `Outro (${howDownloadOther})` 
        : (howDownload || 'Não especificado');

      let text = `*INSCRIÇÃO NO PROGRAMA PILOTO - NOTASYNC (SEF/SC)*\n`;
      text += `━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
      text += `👤 *Responsável:* ${name}\n`;
      text += `🏢 *Escritório:* ${office}\n`;
      text += `📍 *Cidade / UF:* ${city}\n`;
      if (phone) text += `📱 *Telefone / WhatsApp:* ${phone}\n`;
      text += `📊 *Empresas Atendidas:* ${companies}\n`;
      text += `💻 *Sistema Contábil Atual:* ${erp || 'Não informado'}\n`;
      text += `📥 *Como baixa NFC-e hoje:* ${downloadMethodStr}\n`;
      if (mainPain) {
        text += `\n⚠️ *Maior Gargalo / Dor Hoje:*\n"${mainPain}"\n`;
      }
      text += `━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
      text += `Olá Mauricio! Preenchi o formulário no site da MakerPixel e gostaria de participar do piloto para captura de NFC-e na SEF/SC.`;

      const encodedUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(text)}`;
      window.open(encodedUrl, '_blank');
    });
  }

  /* -------------------------------------------------------------
     6. Destaque de Navegação Ativa
     ------------------------------------------------------------- */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a, #mobile-menu a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('text-cyan-400', 'font-bold');
      link.classList.remove('text-slate-300');
    }
  });
});
