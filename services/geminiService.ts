
import { GoogleGenAI } from "@google/genai";
import { PodcastType, QuizResult, UserData } from "../types";

export const generatePodcastStrategy = async (result: QuizResult, userData: UserData): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `
    Aja como um estrategista de podcasting de elite e mentor de negócios para empreendedores de alto nível.
    O utilizador ${userData.name} acaba de descobrir que o seu formato ideal é: ${result.primaryType}.
    
    TAREFA: Gere um Relatório Estratégico com 3 secções claras.

    ### SECÇÃO 1: Análise de Poder (Porquê ${result.primaryType}?)
    Diga ao ${userData.name} porque é que este formato é a sua melhor "arma" de vendas agora. Use termos como "autoridade", "posicionamento" e "conversão de leads".

    ### SECÇÃO 2: O Caminho Longo (O Plano de 30 Dias)
    Descreva brevemente o que ele teria de fazer sozinho:
    - Semana 1: Estruturação da Metodologia do Podcast.
    - Semana 2: Setup técnico e Design Visual.
    - Semana 3: Gravação dos 3 episódios pilares.
    - Semana 4: Lançamento e Estratégia de Leads.
    *Aviso: Este plano exige cerca de 20-30 horas de trabalho manual e tentativa-erro.*

    ### SECÇÃO 3: A Via Rápida (Desafio Desenha o Teu Podcast de Negócio em 7 Dias)
    Aqui está o teu CTA (Call to Action) principal. 
    Vende o "Desafio Desenha o Teu Podcast de Negócio em 7 Dias" como a solução para:
    1. Não cometer erros técnicos básicos.
    2. Alinhar o Podcast com o seu produto ou serviço desde o minuto zero.
    3. Ter um design estratégico pronto em 1 semana em vez de 1 mês.

    Termine com uma frase poderosa de encorajamento que o faça sentir que o "Desafio Desenha o Teu Podcast de Negócio em 7 Dias" é o ÚNICO passo lógico a seguir.

    REGRAS:
    - Língua: Português de Portugal.
    - Tom: Mentor de elite, assertivo, magnético.
    - Use Markdown.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text || "Erro ao carregar a estratégia. Mas o teu caminho é o " + result.primaryType + "!";
  } catch (error) {
    console.error("Error generating strategy:", error);
    return "O teu formato ideal é " + result.primaryType + ". Prepara-te para transformar a tua voz em lucro.";
  }
};
