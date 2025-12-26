
import React, { useState, useEffect } from 'react';
import { QUESTIONS } from './constants';
import { Option, QuizResult, UserData, PodcastType, UserAnswer } from './types';
import QuizCard from './components/QuizCard';
import ResultView from './components/ResultView';
import { generatePodcastStrategy } from './services/geminiService';
import { captureLead } from './services/leadService';

const App: React.FC = () => {
  const [step, setStep] = useState<'intro' | 'quiz' | 'lead' | 'loading' | 'results'>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isTransparent, setIsTransparent] = useState(false);
  const [scores, setScores] = useState<Record<PodcastType, number>>({
    [PodcastType.SOLO]: 0,
    [PodcastType.INTERVIEW]: 0,
    [PodcastType.MIX]: 0,
  });
  const [selectedAnswers, setSelectedAnswers] = useState<UserAnswer[]>([]);
  const [userData, setUserData] = useState({ name: '', email: '' });
  const [result, setResult] = useState<QuizResult | null>(null);

  // Detetar se deve ser transparente para WordPress
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('transparent') === 'true') {
      setIsTransparent(true);
      document.body.classList.add('is-transparent');
    }
  }, []);

  const startQuiz = () => {
    setStep('quiz');
  };

  const handleAnswer = (option: Option) => {
    const currentQuestion = QUESTIONS[currentQuestionIndex];
    const newAnswer: UserAnswer = {
      question: currentQuestion.text,
      answer: option.text
    };
    setSelectedAnswers([...selectedAnswers, newAnswer]);

    const newScores = { ...scores };
    Object.keys(option.weights).forEach((type) => {
      newScores[type as PodcastType] += option.weights[type as PodcastType];
    });
    setScores(newScores);

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setStep('lead');
    }
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userData.name && userData.email) {
      processFinalResults();
    }
  };

  const processFinalResults = async () => {
    setStep('loading');
    
    let maxScore = -1;
    let primaryType = PodcastType.MIX;
    
    (Object.entries(scores) as [PodcastType, number][]).forEach(([type, score]) => {
      if (score > maxScore) {
        maxScore = score;
        primaryType = type;
      }
    });

    const initialResult: QuizResult = {
      primaryType,
      scores: scores,
    };

    const finalUserData: UserData = {
      ...userData,
      answers: selectedAnswers,
      timestamp: new Date().toISOString()
    };

    try {
      await captureLead(finalUserData, initialResult);
      const aiAdvice = await generatePodcastStrategy(initialResult, finalUserData);
      setResult({ ...initialResult, aiAdvice });
    } catch (err) {
      setResult(initialResult);
    } finally {
      setStep('results');
    }
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-4 md:p-8 ${isTransparent ? 'bg-transparent' : 'bg-black'} text-white transition-colors duration-500`}>
      {/* Subtle Ambient Background - Só aparece se não for transparente */}
      {!isTransparent && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#fada46]/5 blur-[150px] rounded-full"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#fada46]/5 blur-[150px] rounded-full"></div>
        </div>
      )}

      <main className="w-full relative z-10 max-w-5xl mx-auto">
        {step === 'intro' && (
          <div className="text-center space-y-8 animate-in fade-in zoom-in duration-700">
            <div className="inline-block px-4 py-1.5 bg-[#fada46]/10 border border-[#fada46]/20 rounded-full text-[#fada46] font-bold text-sm tracking-widest uppercase mb-4">
              Quiz exclusivo para empreendedores
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-tight tracking-tighter uppercase">
              O Teu <span className="text-[#fada46]">Podcast</span> de Negócio.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Descobre em segundos qual o formato que vai escalar a tua autoridade e vendas.
            </p>
            <div className="pt-8">
              <button
                onClick={startQuiz}
                className="group relative px-12 py-6 bg-[#fada46] hover:bg-[#e6c83e] text-black font-black text-xl rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-[#fada46]/20"
              >
                DESCOBRIR AGORA
              </button>
            </div>
          </div>
        )}

        {step === 'quiz' && (
          <QuizCard
            question={QUESTIONS[currentQuestionIndex]}
            progress={((currentQuestionIndex) / QUESTIONS.length) * 100}
            onSelect={handleAnswer}
          />
        )}

        {step === 'lead' && (
          <div className="max-w-lg mx-auto bg-zinc-900 p-8 md:p-12 rounded-3xl border border-zinc-800 shadow-2xl animate-in fade-in slide-in-from-bottom-8">
            <div className="text-[#fada46] text-center mb-4">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-black text-white mb-2 text-center uppercase">Análise Concluída!</h2>
            <p className="text-zinc-400 text-center mb-8 font-medium">
              Introduz os teus dados para desbloquear o teu <span className="text-white">Relatório Estratégico</span>.
            </p>
            <form onSubmit={handleLeadSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-black text-zinc-500 mb-2 uppercase tracking-widest">Nome</label>
                <input
                  required
                  type="text"
                  placeholder="Teu nome"
                  className="w-full px-5 py-4 bg-black border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-[#fada46] transition-all placeholder:text-zinc-700"
                  value={userData.name}
                  onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-xs font-black text-zinc-500 mb-2 uppercase tracking-widest">Email Profissional</label>
                <input
                  required
                  type="email"
                  placeholder="teuemail@exemplo.com"
                  className="w-full px-5 py-4 bg-black border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-[#fada46] transition-all placeholder:text-zinc-700"
                  value={userData.email}
                  onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                />
              </div>
              <button
                type="submit"
                className="w-full py-5 bg-[#fada46] hover:bg-[#e6c83e] text-black font-black text-lg rounded-xl transition-all shadow-lg uppercase"
              >
                Ver Meu Resultado
              </button>
            </form>
          </div>
        )}

        {step === 'loading' && (
          <div className="text-center space-y-8 animate-pulse">
            <div className="relative inline-block">
              <div className="w-24 h-24 border-4 border-[#fada46] border-t-transparent rounded-full animate-spin"></div>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-black text-white uppercase tracking-tighter">A Criar o Teu Plano...</h2>
              <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs">O nosso Mentor IA está a personalizar o teu relatório</p>
            </div>
          </div>
        )}

        {step === 'results' && result && (
          <ResultView result={result} />
        )}
      </main>

      {!isTransparent && (
        <footer className="mt-auto pt-16 pb-8 text-zinc-700 text-[10px] font-black w-full text-center uppercase tracking-[0.2em] no-print">
          &copy; {new Date().getFullYear()} PODCAST STRATEGY LAB // BRANDING BY FADA46
        </footer>
      )}
    </div>
  );
};

export default App;
