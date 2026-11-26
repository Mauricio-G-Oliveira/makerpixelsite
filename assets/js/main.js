/**
 * MakerPixel Techsystem - Script Interativo Multi-Páginas (Foco Contábil / NotaSync)
 * WhatsApp: 48984570272
 * Email: contato@makerpixeltech.com.br
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
     1.1 Configuração Central do Programa Piloto & Planos
     (Altere datas e limites aqui facilmente)
     ------------------------------------------------------------- */
  window.PILOTO_CONFIG = {
    status: 'Inscrições abertas para o programa piloto',
    previsaoInicio: '1º trimestre de 2027',
    badgeTexto: 'Inscrições abertas para o programa piloto • Início previsto: 1º trimestre de 2027'
  };

  window.PLANOS_CENTRAL_CONTABIL = {
    essencial: {
      nome: 'Essencial',
      descricao: 'Para contadores autônomos e pequenos escritórios que buscam segurança inicial.',
      usuarios: 'Até 2 usuários',
      empresas: 'Até 30 empresas atendidas',
      armazenamento: 'Histórico de 13 meses',
      modulos: 'Todos os módulos da Central Contábil inclusos',
      preco: 'Definido no fim do piloto'
    },
    escritorio: {
      nome: 'Escritório',
      destaque: true,
      descricao: 'A melhor escolha para escritórios contábeis em crescimento na rotina fiscal.',
      usuarios: 'Até 5 usuários',
      empresas: 'Até 80 empresas atendidas',
      armazenamento: 'Histórico de 13 meses',
      modulos: 'Todos os módulos da Central Contábil inclusos',
      preco: 'Definido no fim do piloto'
    },
    escritorioPlus: {
      nome: 'Escritório+',
      descricao: 'Para bancas contábeis de médio e grande porte com alto volume diário de NFC-e.',
      usuarios: 'Usuários ilimitados',
      empresas: 'Mais de 80 empresas atendidas',
      armazenamento: 'Histórico estendido personalizável',
      modulos: 'Todos os módulos da Central Contábil inclusos',
      preco: 'Sob consulta'
    }
  };

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

      const privacyCheck = document.getElementById('diag-privacy');
      if (privacyCheck && !privacyCheck.checked) {
        alert('Por favor, confirme que leu e concorda com a Política de Privacidade.');
        privacyCheck.focus();
        return;
      }

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
     6. Destaque de Navegação Ativa, Ano Dinâmico & Dados Corporativos
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

  // Ano dinâmico
  const currentYear = new Date().getFullYear();
  document.querySelectorAll('.footer-current-year').forEach(el => {
    el.textContent = currentYear;
  });

  // Aplicação dos dados corporativos centralizados (SITE_CONFIG)
  if (window.SITE_CONFIG) {
    if (window.SITE_CONFIG.razaoSocial) {
      document.querySelectorAll('.footer-legal-razao').forEach(el => {
        el.textContent = window.SITE_CONFIG.razaoSocial;
      });
    }
    if (window.SITE_CONFIG.cnpj) {
      document.querySelectorAll('.footer-legal-cnpj').forEach(el => {
        el.textContent = window.SITE_CONFIG.cnpj;
      });
    }

    // Controle do botão "Entrar" (preparado / oculto por padrão)
    const loginBtns = document.querySelectorAll('.btn-nav-login');
    loginBtns.forEach(btn => {
      if (window.SITE_CONFIG.mostrarBotaoEntrar) {
        btn.classList.remove('hidden');
      } else {
        btn.classList.add('hidden');
      }
      if (window.SITE_CONFIG.urlApp) {
        btn.setAttribute('href', window.SITE_CONFIG.urlApp);
      }
    });
  }
});
