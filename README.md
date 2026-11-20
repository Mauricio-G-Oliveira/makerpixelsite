# 🚀 MakerPixel Techsystem Contábil — Website Oficial

Portal oficial da **MakerPixel Techsystem**, especializado em tecnologia e engenharia de software para **escritórios de contabilidade** em Santa Catarina e em todo o Brasil.

Fundada e desenvolvida por **Mauricio Goulart de Oliveira**.

> *"Os XMLs das NFC-e dos seus clientes, todo dia, direto da SEF/SC. Menos tempo cobrando documento, mais tempo para a contabilidade consultiva."*

---

## 🌐 Site Online no GitHub Pages

O site está publicado e ativo em produção:
👉 **[https://mauricio-g-oliveira.github.io/makerpixelsite/](https://mauricio-g-oliveira.github.io/makerpixelsite/)**

---

## ⚡ Carro-Chefe: NotaSync (SEF/SC)

O **NotaSync** resolve um dos gargalos diários mais desgastantes do setor fiscal:
- **Download automático de madrugada** diretamente dos servidores da Secretaria de Estado da Fazenda de Santa Catarina (SEF/SC).
- **Modelo 65 (NFC-e)**: Baixa os XMLs autorizados e eventos de cancelamento de todas as empresas do escritório.
- **Usa o certificado digital A1 do próprio contador**: Desde que vinculado no SAT da SEF/SC, dispensa coletar certificados de clientes do Simples Nacional ou MEIs.
- **Sem intermediários caros**: Elimina plataformas pagas por CNPJ consultado e rotinas manuais de download no portal estadual.
- **Status atual**: *Programa Piloto com vagas limitadas para acompanhamento técnico próximo.*

---

## 🏛️ Arquitetura Multi-Páginas

Estrutura corporativa multi-páginas com navegação fluida e padronizada:

- **[`index.html`](index.html)**: Apresentação do NotaSync, vídeo da Central Contábil, painel mock de monitoramento SEF/SC, roadmap transparente e formulário de inscrição no piloto.
- **[`modulos.html`](modulos.html)**: Detalhamento de cada frente de produto com status honesto (Piloto, Em desenvolvimento, Em breve, Sob medida).
- **[`como-funciona.html`](como-funciona.html)**: Passo a passo da captura noturna na SEF/SC, vídeo demonstrativo da Central Contábil e FAQ técnico detalhado.
- **[`seguranca.html`](seguranca.html)**: Arquitetura de proteção do certificado A1 (criptografia em repouso com chave assimétrica, sem armazenamento de senha em texto puro, escopo restrito à SEF/SC, trilha de auditoria e conformidade estrita com a LGPD).
- **[`sobre.html`](sobre.html)**: Trajetória profissional de Mauricio Goulart como desenvolvedor de software focado no mercado contábil catarinense, filosofia técnica e contato direto.
- **[`contato.html`](contato.html)**: Inscrição detalhada no piloto do NotaSync e canal direto de WhatsApp.
- **[`outros-projetos.html`](outros-projetos.html)**: Projetos paralelos e portfólio de engenharia de software.

---

## 🛠️ Status dos Módulos

| Módulo | Escopo | Status Real |
| :--- | :--- | :--- |
| **NotaSync (NFC-e mod. 65)** | Download automático noturno na SEF/SC via certificado do contador | **Programa Piloto (Vagas Limitadas)** |
| **NF-e e CT-e (mod. 55 e 57)** | Captura nacional via webservices SEFAZ | **Em Desenvolvimento** |
| **Controle de Vencimentos** | Alvarás, certidões negativas (CNDs) e certificados digitais | **Em Breve** |
| **Controle de Entregas por Setor** | Checklist operacional por setor (Fiscal, Contábil, Pessoal) | **Em Breve** |
| **Ferramentas Fiscais & Reforma** | Auditoria e conferência preparatória para IBS/CBS | **Em Breve** |
| **Sistemas Sob Medida** | Automações e rotinas personalizadas para o escritório | **Sob Medida** |

---

## 🌟 Principais Projetos de Engenharia de Maurício Oliveira

Seguindo a visão integrada de engenharia de software:

1. **📊 [Central Contábil by MakerPixel](https://github.com/Mauricio-G-Oliveira/makerpixel-central-contabil)** *(Carro-Chefe Contábil)*
   - **Foco:** Plataforma de produtividade e gestão fiscal-contábil, automação de rotinas e integração de documentos fiscais.
   - **Links:** [Website Oficial](https://mauricio-g-oliveira.github.io/makerpixelsite/) • [Repositório](https://github.com/Mauricio-G-Oliveira/makerpixel-central-contabil)

2. **🏦 [Fintech Core Ledger & Instant Payment Engine](https://github.com/Mauricio-G-Oliveira/fintech-core-ledger)**
   - **Foco:** Motor transacional bancário de liquidação instantânea por partidas dobradas, concorrência livre de deadlocks (`SELECT FOR UPDATE` determinístico) e garantia de idempotência (UUIDv7).
   - **Links:** [Simulador Online](https://mauricio-g-oliveira.github.io/fintech-core-ledger/) • [Repositório](https://github.com/Mauricio-G-Oliveira/fintech-core-ledger)

3. **🎛️ [StageFlow Platform • Ecosystem Full-Stack Cloud](https://github.com/Mauricio-G-Oliveira/stageflow)**
   - **Foco:** Ecossistema em nuvem para gestão de bandas musicais, repertório, propostas comerciais em PDF e eventos ao vivo.
   - **Links:** [Aplicação PWA](https://mauricio-g-oliveira.github.io/stageflow/) • [Repositório Frontend](https://github.com/Mauricio-G-Oliveira/stageflow) • [Repositório Backend](https://github.com/Mauricio-G-Oliveira/stageflow-backend)

---

## 📞 Canais Oficiais de Contato

- **WhatsApp Direto**: [(48) 98457-0272](https://wa.me/5548984570272) *(Atendimento direto com o desenvolvedor, sem intermediários)*
- **E-mail**: [mauriciogoulart.deoliveira37@gmail.com](mailto:mauriciogoulart.deoliveira37@gmail.com)
- **Base Operacional**: Santa Catarina • Atendimento para todo o Brasil

---

## 🔄 Como Atualizar o Site

Para enviar atualizações para o GitHub Pages:

```bash
git add .
git commit -m "feat: atualizacoes no portal contabil"
git push
```

---

© 2026 MakerPixel Techsystem. Desenvolvido por Mauricio Goulart de Oliveira.
