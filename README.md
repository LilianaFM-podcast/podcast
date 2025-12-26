# Quiz Estratégico de Podcast para Empreendedores

Este projeto é um Lead Magnet de alta conversão desenhado para ajudar empreendedores a identificar o melhor formato de podcast (Solo, Entrevista ou Mix) usando Inteligência Artificial (Gemini API).

## 🚀 Como fazer o Deploy

### Opção A: Via GitHub (Recomendado para Vercel/Netlify)
1. Crie um novo repositório no [GitHub](https://github.com/new).
2. Copie o URL do repositório (ex: `https://github.com/seu-usuario/nome-do-quiz`).
3. No seu computador, inicialize o git e suba os arquivos:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin SEU_URL_AQUI
   git push -u origin main
   ```
4. No Vercel, importe este repositório usando o URL criado.

### Opção B: Vercel CLI (Mais rápido)
1. Instale: `npm i -g vercel`
2. Execute: `vercel`
3. Siga as instruções no terminal.

## 🔑 Configuração Obrigatória
Em qualquer plataforma de deploy, você **DEVE** adicionar esta variável de ambiente:
- **Chave:** `API_KEY`
- **Valor:** (Sua chave da Google AI Studio / Gemini)

## 🌐 Integração WordPress
Para usar no WordPress, use o seguinte código no bloco HTML:
```html
<iframe 
  src="SEU_URL_DEPLOY_AQUI?transparent=true" 
  width="100%" 
  height="800px" 
  frameborder="0" 
  style="min-height: 800px; width: 100%;">
</iframe>
```

## 📧 Integração CRM (MailerLite)
Configure o URL do seu Webhook no ficheiro `services/leadService.ts`.
