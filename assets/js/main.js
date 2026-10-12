/**
 * MakerPixel Techsystem - Script Interativo Principal
 * WhatsApp: 48984570272
 * Email: mauriciogoulart.deoliveira37@gmail.com
 * Instagram: @makerpixeltech
 */

document.addEventListener('DOMContentLoaded', () => {
  // Inicialização de Ícones Lucide (se carregado)
  if (window.lucide) {
    window.lucide.createIcons();
  }

  /* -------------------------------------------------------------
     1. Constantes da Empresa
     ------------------------------------------------------------- */
  const WHATSAPP_NUMBER = '5548984570272';
  const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

  /* -------------------------------------------------------------
     2. Menu Mobile
     ------------------------------------------------------------- */
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Fechar menu mobile ao clicar em qualquer link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  /* -------------------------------------------------------------
     3. Widget Flutuante do WhatsApp
     ------------------------------------------------------------- */
  const waToggleBtn = document.getElementById('wa-toggle-btn');
  const waChatWindow = document.getElementById('wa-chat-window');
  const waCloseBtn = document.getElementById('wa-close-btn');
  const waSendBtn = document.getElementById('wa-send-btn');
  const waNameInput = document.getElementById('wa-client-name');
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

    // Fechar ao clicar fora da janela de chat
    document.addEventListener('click', (e) => {
      if (!waChatWindow.contains(e.target) && !waToggleBtn.contains(e.target)) {
        waChatWindow.classList.add('hidden');
      }
    });

    // Pílulas com respostas rápidas pré-definidas
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

    // Enviar mensagem pelo WhatsApp
    if (waSendBtn) {
      waSendBtn.addEventListener('click', () => {
        const name = waNameInput ? waNameInput.value.trim() : '';
        const message = waMessageInput ? waMessageInput.value.trim() : '';

        let fullText = `Olá, Mauricio (MakerPixel Techsystem)!`;
        if (name) {
          fullText += ` Meu nome é *${name}*.`;
        }
        if (message) {
          fullText += `\n\n${message}`;
        } else {
          fullText += `\n\nGostaria de solicitar um orçamento para o meu projeto!`;
        }
        fullText += `\n\n_(Vim pelo site oficial da MakerPixel)_`;

        const encodedUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(fullText)}`;
        window.open(encodedUrl, '_blank');
        waChatWindow.classList.add('hidden');
      });
    }
  }

  /* -------------------------------------------------------------
     4. Filtro de Portfólio & Cases
     ------------------------------------------------------------- */
  const filterButtons = document.querySelectorAll('.portfolio-filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('bg-cyan-500', 'text-slate-950', 'shadow-lg', 'shadow-cyan-500/25');
        b.classList.add('bg-slate-900', 'text-slate-300', 'border-slate-800');
      });
      btn.classList.add('bg-cyan-500', 'text-slate-950', 'shadow-lg', 'shadow-cyan-500/25');
      btn.classList.remove('bg-slate-900', 'text-slate-300', 'border-slate-800');

      const filter = btn.getAttribute('data-filter');

      portfolioItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filter === 'all' || category === filter || (category && category.includes(filter))) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'translateY(15px)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  /* -------------------------------------------------------------
     5. Simulador de Projetos & Orçamento Interativo
     ------------------------------------------------------------- */
  const projectTypeSelect = document.getElementById('calc-project-type');
  const featureCheckboxes = document.querySelectorAll('.calc-feature');
  const urgencySelect = document.getElementById('calc-urgency');
  const clientDescInput = document.getElementById('calc-description');
  const calcWhatsappBtn = document.getElementById('calc-send-wa');
  const summaryTypeElem = document.getElementById('summary-type');
  const summaryFeaturesElem = document.getElementById('summary-features');

  function updateCalculatorSummary() {
    if (!summaryTypeElem) return;

    const selectedTypeOption = projectTypeSelect ? projectTypeSelect.options[projectTypeSelect.selectedIndex] : null;
    const typeText = selectedTypeOption ? selectedTypeOption.text : 'Projeto Personalizado';
    summaryTypeElem.textContent = typeText;

    const selectedFeatures = [];
    featureCheckboxes.forEach(cb => {
      if (cb.checked) {
        selectedFeatures.push(cb.getAttribute('data-name') || cb.value);
      }
    });

    if (summaryFeaturesElem) {
      if (selectedFeatures.length > 0) {
        summaryFeaturesElem.innerHTML = selectedFeatures
          .map(f => `<span class="inline-block bg-cyan-950/60 border border-cyan-800/40 text-cyan-300 text-xs px-2.5 py-1 rounded-md mr-1 mb-1">✓ ${f}</span>`)
          .join('');
      } else {
        summaryFeaturesElem.innerHTML = '<span class="text-slate-400 text-xs italic">Nenhum módulo adicional selecionado</span>';
      }
    }
  }

  if (projectTypeSelect) {
    projectTypeSelect.addEventListener('change', updateCalculatorSummary);
  }

  featureCheckboxes.forEach(cb => {
    cb.addEventListener('change', updateCalculatorSummary);
  });

  if (calcWhatsappBtn) {
    calcWhatsappBtn.addEventListener('click', () => {
      const typeOption = projectTypeSelect ? projectTypeSelect.options[projectTypeSelect.selectedIndex].text : 'Projeto Sob Medida';
      const urgency = urgencySelect ? urgencySelect.options[urgencySelect.selectedIndex].text : 'Normal';
      const details = clientDescInput ? clientDescInput.value.trim() : '';

      const features = [];
      featureCheckboxes.forEach(cb => {
        if (cb.checked) {
          features.push(cb.getAttribute('data-name') || cb.value);
        }
      });

      let text = `*SOLICITAÇÃO DE ORÇAMENTO - MAKERPIXEL TECHSYSTEM*\n`;
      text += `━━━━━━━━━━━━━━━━━━━━━\n`;
      text += `🚀 *Tipo de Projeto:* ${typeOption}\n`;
      text += `⏱️ *Previsão / Urgência:* ${urgency}\n`;
      
      if (features.length > 0) {
        text += `\n📦 *Recursos & Módulos Desejados:*\n`;
        features.forEach(f => {
          text += `  • ${f}\n`;
        });
      }

      if (details) {
        text += `\n📝 *Detalhes Adicionais:*\n"${details}"\n`;
      }

      text += `━━━━━━━━━━━━━━━━━━━━━\n`;
      text += `Olá Mauricio, configurei esta proposta pelo simulador do site da MakerPixel e gostaria de saber prazos e valores para iniciarmos!`;

      const encodedUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(text)}`;
      window.open(encodedUrl, '_blank');
    });
  }

  // Inicializar o resumo do simulador
  updateCalculatorSummary();

  /* -------------------------------------------------------------
     6. Modal de Lightbox para Imagens
     ------------------------------------------------------------- */
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxClose = document.getElementById('lightbox-close');

  window.openLightbox = function(imgSrc, title, desc) {
    if (!lightboxModal || !lightboxImg) return;
    lightboxImg.src = imgSrc;
    if (lightboxTitle) lightboxTitle.textContent = title || 'Visualização do Projeto';
    if (lightboxDesc) lightboxDesc.textContent = desc || '';
    lightboxModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  };

  if (lightboxClose && lightboxModal) {
    lightboxClose.addEventListener('click', () => {
      lightboxModal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    });

    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        lightboxModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !lightboxModal.classList.contains('hidden')) {
        lightboxModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
      }
    });
  }

  /* -------------------------------------------------------------
     7. Formulário de Contato Direto
     ------------------------------------------------------------- */
  const directContactForm = document.getElementById('direct-contact-form');
  if (directContactForm) {
    directContactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value.trim();
      const contactWhats = document.getElementById('contact-phone').value.trim();
      const service = document.getElementById('contact-service').value;
      const message = document.getElementById('contact-message').value.trim();

      let text = `*NOVA MENSAGEM DO SITE (MAKERPIXEL TECH)*\n`;
      text += `👤 *Nome:* ${name}\n`;
      if (contactWhats) text += `📱 *Telefone/Whats:* ${contactWhats}\n`;
      text += `📌 *Serviço de Interesse:* ${service}\n`;
      text += `💬 *Mensagem:*\n${message}\n`;

      const encodedUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(text)}`;
      window.open(encodedUrl, '_blank');
    });
  }

  /* -------------------------------------------------------------
     8. Smooth Scroll para Links Internos
     ------------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          const navOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
});
