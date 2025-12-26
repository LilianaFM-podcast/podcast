
import React from 'react';
import { Question, Option } from '../types';
import { QUESTIONS } from '../constants';

interface QuizCardProps {
  question: Question;
  onSelect: (option: Option) => void;
  progress: number;
}

const QuizCard: React.FC<QuizCardProps> = ({ question, onSelect, progress }) => {
  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-800 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-bold text-[#fada46] uppercase tracking-widest">
            Questão {question.id} de {QUESTIONS.length}
          </span>
          <span className="text-xs font-bold text-zinc-500">{Math.round(progress)}%</span>
        </div>
        <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#fada46] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white leading-tight">
        {question.text}
      </h2>

      <div className="space-y-4">
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() => onSelect(option)}
            className="w-full text-left p-5 bg-zinc-800/40 hover:bg-zinc-800 border border-zinc-700 hover:border-[#fada46] rounded-xl transition-all duration-200 group flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-full bg-black border border-zinc-700 flex items-center justify-center text-[#fada46] group-hover:bg-[#fada46] group-hover:text-black transition-colors font-bold uppercase shrink-0">
              {option.id}
            </div>
            <span className="text-lg text-zinc-300 group-hover:text-white font-medium">
              {option.text}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizCard;
