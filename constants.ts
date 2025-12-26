
import { Question, PodcastType } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Como te sentes a falar sobre ti, o teu negócio ou a tua área/mercado de atuação?",
    options: [
      { id: 'a', text: "Super confortável, adoro partilhar as minhas ideias e visões sozinho.", weights: { [PodcastType.SOLO]: 3, [PodcastType.MIX]: 2, [PodcastType.INTERVIEW]: 0 } },
      { id: 'b', text: "Prefiro ter alguém para trocar ideias e tornar a conversa mais fluida.", weights: { [PodcastType.SOLO]: 0, [PodcastType.MIX]: 1, [PodcastType.INTERVIEW]: 3 } },
      { id: 'c', text: "Consigo fazê-lo, mas sinto que o meu brilho aparece mais a questionar outros.", weights: { [PodcastType.SOLO]: 0, [PodcastType.MIX]: 1, [PodcastType.INTERVIEW]: 3 } },
      { id: 'd', text: "Gosto de desafiar o status quo e provocar reflexão profunda no ouvinte.", weights: { [PodcastType.SOLO]: 3, [PodcastType.MIX]: 1, [PodcastType.INTERVIEW]: 0 } },
      { id: 'e', text: "Sinto-me um facilitador: gosto de traduzir conceitos complexos em linguagem simples.", weights: { [PodcastType.SOLO]: 2, [PodcastType.MIX]: 3, [PodcastType.INTERVIEW]: 1 } }
    ]
  },
  {
    id: 2,
    text: "Qual é o teu principal objetivo estratégico com o podcast?",
    options: [
      { id: 'a', text: "Posicionar-me como a maior autoridade e especialista no meu nicho.", weights: { [PodcastType.SOLO]: 3, [PodcastType.MIX]: 1, [PodcastType.INTERVIEW]: 0 } },
      { id: 'b', text: "Fazer networking com outros líderes e abrir portas para parcerias de alto nível.", weights: { [PodcastType.SOLO]: 0, [PodcastType.MIX]: 1, [PodcastType.INTERVIEW]: 3 } },
      { id: 'c', text: "Criar uma comunidade forte e diversificada em torno da visão da minha marca.", weights: { [PodcastType.SOLO]: 1, [PodcastType.MIX]: 3, [PodcastType.INTERVIEW]: 1 } },
      { id: 'd', text: "Criar um repositório de conhecimento recorrente para os meus clientes atuais.", weights: { [PodcastType.SOLO]: 3, [PodcastType.MIX]: 1, [PodcastType.INTERVIEW]: 0 } },
      { id: 'e', text: "Humanizar o meu negócio e mostrar os bastidores da tomada de decisão.", weights: { [PodcastType.SOLO]: 1, [PodcastType.MIX]: 3, [PodcastType.INTERVIEW]: 1 } }
    ]
  },
  {
    id: 3,
    text: "Quanto tempo semanal tens para gerir a logística do podcast?",
    options: [
      { id: 'a', text: "Muito pouco. Quero algo que eu grave e publique rapidamente sem depender de agendas.", weights: { [PodcastType.SOLO]: 3, [PodcastType.MIX]: 1, [PodcastType.INTERVIEW]: 0 } },
      { id: 'b', text: "Tenho tempo para agendar convidados e preparar entrevistas de qualidade.", weights: { [PodcastType.SOLO]: 0, [PodcastType.MIX]: 1, [PodcastType.INTERVIEW]: 3 } },
      { id: 'c', text: "O tempo necessário para alternar entre aulas rápidas e conversas profundas.", weights: { [PodcastType.SOLO]: 1, [PodcastType.MIX]: 3, [PodcastType.INTERVIEW]: 1 } },
      { id: 'd', text: "Tenho equipa para a logística, o meu foco é apenas estar presente e gravar.", weights: { [PodcastType.SOLO]: 1, [PodcastType.MIX]: 2, [PodcastType.INTERVIEW]: 3 } },
      { id: 'e', text: "Prefiro blocos intensos de gravação (batching) uma vez por mês.", weights: { [PodcastType.SOLO]: 3, [PodcastType.MIX]: 2, [PodcastType.INTERVIEW]: 1 } }
    ]
  },
  {
    id: 4,
    text: "Que tipo de conteúdo gostas mais de consumir?",
    options: [
      { id: 'a', text: "Conversas profundas e sem pressa entre duas mentes brilhantes.", weights: { [PodcastType.INTERVIEW]: 3, [PodcastType.MIX]: 2, [PodcastType.SOLO]: 0 } },
      { id: 'b', text: "Conteúdo prático, direto ao ponto e com ensinamentos claros.", weights: { [PodcastType.SOLO]: 3, [PodcastType.MIX]: 1, [PodcastType.INTERVIEW]: 0 } },
      { id: 'c', text: "Histórias reais, trajetórias de sucesso e bastidores de negócios.", weights: { [PodcastType.INTERVIEW]: 2, [PodcastType.MIX]: 3, [PodcastType.SOLO]: 1 } },
      { id: 'd', text: "Opinião forte, análise de mercado e pensamento crítico.", weights: { [PodcastType.SOLO]: 3, [PodcastType.MIX]: 2, [PodcastType.INTERVIEW]: 1 } },
      { id: 'e', text: "Depende do dia, consumo formatos variados para aprender coisas diferentes.", weights: { [PodcastType.MIX]: 3, [PodcastType.INTERVIEW]: 1, [PodcastType.SOLO]: 1 } }
    ]
  },
  {
    id: 5,
    text: "Como imaginas o papel do podcast na jornada de compra do teu cliente?",
    options: [
      { id: 'a', text: "Nutrição: quero que os ouvintes comprem a minha autoridade e metodologia.", weights: { [PodcastType.SOLO]: 3, [PodcastType.MIX]: 1, [PodcastType.INTERVIEW]: 0 } },
      { id: 'b', text: "Prospecção: quero atrair parceiros e clientes via conexões de alto nível.", weights: { [PodcastType.SOLO]: 0, [PodcastType.MIX]: 1, [PodcastType.INTERVIEW]: 3 } },
      { id: 'c', text: "Híbrido: quero educar o mercado e ao mesmo tempo validar a minha marca com convidados.", weights: { [PodcastType.SOLO]: 1, [PodcastType.MIX]: 3, [PodcastType.INTERVIEW]: 1 } },
      { id: 'd', text: "Retenção: quero manter os meus clientes atuais inspirados e leais à marca.", weights: { [PodcastType.SOLO]: 1, [PodcastType.MIX]: 3, [PodcastType.INTERVIEW]: 0 } },
      { id: 'e', text: "Quebra de Objeções: usar o podcast para responder às dúvidas que impedem a venda.", weights: { [PodcastType.SOLO]: 3, [PodcastType.MIX]: 2, [PodcastType.INTERVIEW]: 0 } }
    ]
  },
  {
    id: 6,
    text: "O que mais te bloqueia neste momento?",
    options: [
      { id: 'a', text: "Não saber o que dizer em todos os episódios (medo da folha em branco).", weights: { [PodcastType.SOLO]: 0, [PodcastType.MIX]: 1, [PodcastType.INTERVIEW]: 3 } },
      { id: 'b', text: "Medo de não parecer profissional ou técnico o suficiente.", weights: { [PodcastType.SOLO]: 3, [PodcastType.MIX]: 2, [PodcastType.INTERVIEW]: 1 } },
      { id: 'c', text: "Falta de clareza sobre qual o formato que melhor escala o meu negócio.", weights: { [PodcastType.SOLO]: 1, [PodcastType.MIX]: 3, [PodcastType.INTERVIEW]: 1 } },
      { id: 'd', text: "Inconstância: começo os projetos com garra mas depois perco o fôlego.", weights: { [PodcastType.SOLO]: 1, [PodcastType.MIX]: 2, [PodcastType.INTERVIEW]: 3 } },
      { id: 'e', text: "Falta de feedback: tenho medo de falar para o vazio sem saber se é relevante.", weights: { [PodcastType.INTERVIEW]: 3, [PodcastType.MIX]: 1, [PodcastType.SOLO]: 0 } }
    ]
  },
  {
    id: 7,
    text: "Quando comunicas o teu negócio hoje, sentes que:",
    options: [
      { id: 'a', text: "Tens muito para dizer, mas sai tudo solto e sem ordem lógica.", weights: { [PodcastType.SOLO]: 3, [PodcastType.MIX]: 2, [PodcastType.INTERVIEW]: 0 } },
      { id: 'b', text: "Repetes sempre as mesmas ideias e precisas de novos estímulos.", weights: { [PodcastType.SOLO]: 0, [PodcastType.MIX]: 1, [PodcastType.INTERVIEW]: 3 } },
      { id: 'c', text: "Falas muito, mas não sentes o devido reconhecimento do mercado.", weights: { [PodcastType.SOLO]: 3, [PodcastType.MIX]: 1, [PodcastType.INTERVIEW]: 0 } },
      { id: 'd', text: "Produzes conteúdo, mas sem uma estratégia de conversão por trás.", weights: { [PodcastType.SOLO]: 1, [PodcastType.MIX]: 3, [PodcastType.INTERVIEW]: 1 } },
      { id: 'e', text: "Ainda estás muito invisível no teu mercado e precisas de tração.", weights: { [PodcastType.SOLO]: 0, [PodcastType.MIX]: 2, [PodcastType.INTERVIEW]: 3 } }
    ]
  },
  {
    id: 8,
    text: "Qual destas frases se aproxima mais da tua realidade?",
    options: [
      { id: 'a', text: "Sei muito, mas ainda não sei como comunicar isso de forma magnética.", weights: { [PodcastType.SOLO]: 3, [PodcastType.MIX]: 2, [PodcastType.INTERVIEW]: 0 } },
      { id: 'b', text: "Já tentei várias estratégias de marketing, mas nada 'pegou' a sério.", weights: { [PodcastType.SOLO]: 1, [PodcastType.MIX]: 3, [PodcastType.INTERVIEW]: 1 } },
      { id: 'c', text: "Quero autoridade real, não apenas exposição vazia nas redes sociais.", weights: { [PodcastType.SOLO]: 3, [PodcastType.MIX]: 1, [PodcastType.INTERVIEW]: 0 } },
      { id: 'd', text: "Estou cansado de depender apenas do algoritmo do Instagram/LinkedIn.", weights: { [PodcastType.SOLO]: 3, [PodcastType.MIX]: 2, [PodcastType.INTERVIEW]: 1 } },
      { id: 'e', text: "Ainda estou a ganhar coragem e estrutura para começar a minha voz pública.", weights: { [PodcastType.SOLO]: 1, [PodcastType.MIX]: 2, [PodcastType.INTERVIEW]: 2 } }
    ]
  },
  {
    id: 9,
    text: "Se começasses um podcast amanhã, o que te daria mais confiança?",
    options: [
      { id: 'a', text: "Ter um guião claro e estruturado para seguir sem me perder.", weights: { [PodcastType.SOLO]: 3, [PodcastType.MIX]: 2, [PodcastType.INTERVIEW]: 1 } },
      { id: 'b', text: "Saber exactamente para quem estou a falar e quais os problemas que resolvo.", weights: { [PodcastType.SOLO]: 2, [PodcastType.MIX]: 2, [PodcastType.INTERVIEW]: 2 } },
      { id: 'c', text: "Ter uma estrutura simples que não me tome horas de edição e planeamento.", weights: { [PodcastType.SOLO]: 3, [PodcastType.MIX]: 1, [PodcastType.INTERVIEW]: 1 } },
      { id: 'd', text: "Saber que cada minuto gravado tem uma intenção estratégica de negócio.", weights: { [PodcastType.SOLO]: 1, [PodcastType.MIX]: 3, [PodcastType.INTERVIEW]: 2 } },
      { id: 'e', text: "Ter acompanhamento e saber que não estou a fazer isto 'às cegas'.", weights: { [PodcastType.SOLO]: 1, [PodcastType.MIX]: 3, [PodcastType.INTERVIEW]: 2 } }
    ]
  },
  {
    id: 10,
    text: "O que esperas que um podcast traga para ti em 6 meses?",
    options: [
      { id: 'a', text: "Reconhecimento como a principal referência na minha área.", weights: { [PodcastType.SOLO]: 3, [PodcastType.MIX]: 1, [PodcastType.INTERVIEW]: 0 } },
      { id: 'b', text: "Um fluxo constante de leads muito mais qualificadas e prontas para comprar.", weights: { [PodcastType.SOLO]: 2, [PodcastType.MIX]: 3, [PodcastType.INTERVIEW]: 1 } },
      { id: 'c', text: "Maior organização interna e clareza sobre o meu próprio método de trabalho.", weights: { [PodcastType.SOLO]: 3, [PodcastType.MIX]: 1, [PodcastType.INTERVIEW]: 0 } },
      { id: 'd', text: "Uma confiança inabalável na minha comunicação e oratória.", weights: { [PodcastType.SOLO]: 3, [PodcastType.MIX]: 1, [PodcastType.INTERVIEW]: 1 } },
      { id: 'e', text: "Finalmente sair da invisibilidade e ser convidado para palcos e projetos.", weights: { [PodcastType.SOLO]: 0, [PodcastType.MIX]: 2, [PodcastType.INTERVIEW]: 3 } }
    ]
  }
];

export const PODCAST_DESCRIPTIONS = {
  [PodcastType.SOLO]: "Este é o formato para quem quer ser a 'Autoridade de Referência'. Sem ruído, apenas tu e a tua metodologia a criar desejo imediato nos teus serviços.",
  [PodcastType.INTERVIEW]: "A ferramenta máxima de networking. Tu não apenas crias conteúdo, tu constróis pontes de ouro com outros líderes e herdas a confiança da audiência deles.",
  [PodcastType.MIX]: "A estratégia completa. Alternas entre o teu brilho a solo (venda direta e autoridade) e o ar fresco de convidados (novos públicos e dinamismo)."
};
