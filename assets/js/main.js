/**
 * MakerPixel Techsystem - Script Interativo Multi-Páginas (Foco Contábil)
 * WhatsApp: 48984570272
 * Email: mauriciogoulart.deoliveira37@gmail.com
 * Especialista em Tecnologia para Escritórios de Contabilidade (Tubarão & Sul de SC)
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
     3. Widget Flutuante do WhatsApp (Foco Contábil)
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
          fullText += `💬 *Mensagem:* Olá Mauricio, gostaria de agendar uma demonstração rápida da conciliação bancária e integração com o SCI Único.\n`;
        }
        fullText += `━━━━━━━━━━━━━━━━━━━━━\n`;
        fullText += `_(Atendimento direto com o desenvolvedor em Tubarão/SC)_`;

        const encodedUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(fullText)}`;
        window.open(encodedUrl, '_blank');
        waChatWindow.classList.add('hidden');
      });
    }
  }

  /* -------------------------------------------------------------
     4. Formulário de Diagnóstico Contábil (Página de Contato & Home)
     ------------------------------------------------------------- */
  const accountingForm = document.getElementById('accounting-diagnosis-form');
  if (accountingForm) {
    accountingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('diag-name')?.value.trim() || '';
      const office = document.getElementById('diag-office')?.value.trim() || '';
      const city = document.getElementById('diag-city')?.value.trim() || '';
      const phone = document.getElementById('diag-phone')?.value.trim() || '';
      const companies = document.getElementById('diag-companies')?.value || '';
      const erp = document.getElementById('diag-erp')?.value || '';
      const mainPain = document.getElementById('diag-pain')?.value.trim() || '';

      let text = `*SOLICITAÇÃO DE DEMONSTRAÇÃO & DIAGNÓSTICO CONTÁBIL*\n`;
      text += `━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
      text += `👤 *Responsável:* ${name}\n`;
      text += `🏢 *Escritório:* ${office}\n`;
      text += `📍 *Cidade/Região:* ${city}\n`;
      if (phone) text += `📱 *Telefone/WhatsApp:* ${phone}\n`;
      text += `📊 *Empresas Atendidas:* ${companies}\n`;
      text += `💻 *Sistema Contábil Atual:* ${erp}\n`;
      text += `\n⚠️ *Maior Gargalo / Dor Hoje:*\n"${mainPain}"\n`;
      text += `━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
      text += `Olá Mauricio, preenchi o formulário no site da MakerPixel e gostaria de agendar uma demonstração prática focada na nossa rotina!`;

      const encodedUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(text)}`;
      window.open(encodedUrl, '_blank');
    });
  }

  /* -------------------------------------------------------------
     5. Destaque de Navegação Ativa
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
