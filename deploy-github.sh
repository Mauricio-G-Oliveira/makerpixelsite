#!/bin/bash
# ==============================================================================
# Script de Publicação Automática no GitHub - MakerPixel Techsystem
# ==============================================================================

echo "🚀 Iniciando publicação do site MakerPixel Techsystem no GitHub..."
echo "📂 Repositório de destino: https://github.com/Mauricio-G-Oliveira/makerpixelsite.git"
echo ""

# Garante que as alterações locais estão commitadas
git add .
git commit -m "update: Atualizações do site MakerPixel Techsystem" 2>/dev/null || true

# Envia para a branch main no GitHub
echo "📤 Enviando arquivos para o GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Sucesso! O código foi publicado no seu GitHub."
    echo ""
    echo "👉 Para ativar o GitHub Pages:"
    echo "1. Acesse: https://github.com/Mauricio-G-Oliveira/makerpixelsite/settings/pages"
    echo "2. Em 'Branch', selecione 'main' e a pasta '/(root)'"
    echo "3. Clique em 'Save'"
    echo "4. O site estará disponível em: https://mauricio-g-oliveira.github.io/makerpixelsite/"
else
    echo ""
    echo "⚠️ Se o envio falhou:"
    echo "1. Certifique-se de que o repositório 'makerpixelsite' foi criado na sua conta do GitHub em: https://github.com/new"
    echo "2. Se você estiver autenticando via SSH ou token pessoal, o git solicitará suas credenciais."
fi
