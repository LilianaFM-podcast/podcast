
export enum PodcastType {
  SOLO = 'Podcast a solo',
  INTERVIEW = 'Podcast de Entrevista',
  MIX = 'Podcast Mix'
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export interface Option {
  id: string;
  text: string;
  weights: {
    [key in PodcastType]: number;
  };
}

export interface QuizResult {
  primaryType: PodcastType;
  scores: Record<PodcastType, number>;
  aiAdvice?: string;
}

export interface UserAnswer {
  question: string;
  answer: string;
}

export interface UserData {
  name: string;
  email: string;
  answers: UserAnswer[];
  timestamp: string;
}
