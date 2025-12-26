
import { UserData, QuizResult } from "../types";

/**
 * SERVIÇO DE INTEGRAÇÃO MAILERLITE / CRM
 * 
 * Para ligar ao MailerLite:
 * 1. Cria uma conta no Make.com (antigo Integromat).
 * 2. Cria um cenário: Webhook -> MailerLite (Create/Update Subscriber).
 * 3. Copia o URL do Webhook e cola abaixo na variável WEBHOOK_URL.
 */

export const captureLead = async (userData: UserData, result: QuizResult): Promise<boolean> => {
  // CONFIGURAÇÃO: URL do teu Webhook (Zapier, Make, ou n8n)
  const WEBHOOK_URL = ''; 

  // Preparamos os dados exatamente como o MailerLite gosta (campos personalizados)
  const payload = {
    email: userData.email,
    name: userData.name,
    fields: {
      podcast_format: result.primaryType,
      quiz_score_solo: result.scores['Podcast a solo'],
      quiz_score_interview: result.scores['Podcast de Entrevista'],
      quiz_score_mix: result.scores['Podcast Mix'],
      last_quiz_date: userData.timestamp,
      // Enviamos a primeira resposta como insight de "Dificuldade"
      main_struggle: userData.answers[5]?.answer || 'N/A' 
    },
    // Enviamos também o histórico completo para referência no CRM
    full_history: userData.answers.map(a => `${a.question}: ${a.answer}`).join(' | '),
    source: 'Lead Magnet Quiz Podcast'
  };

  // Log para debug (podes ver isto no F12 do navegador)
  console.log('--- ENVIANDO LEAD PARA MAILERLITE ---', payload);

  if (!WEBHOOK_URL) {
    console.warn('⚠️ LEAD NÃO ENVIADA: Configura o WEBHOOK_URL no ficheiro services/leadService.ts');
    return true; 
  }

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) throw new Error('Falha na resposta do servidor');
    
    return true;
  } catch (error) {
    console.error('❌ Erro ao enviar para o CRM:', error);
    return false;
  }
};
