
import React from 'react';
import { QuizResult, PodcastType } from '../types';
import { PODCAST_DESCRIPTIONS } from '../constants';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface ResultViewProps {
  result: QuizResult;
}

const ResultView: React.FC<ResultViewProps> = ({ result }) => {
  const chartData = [
    { name: 'A Solo', score: result.scores[PodcastType.SOLO] },
    { name: 'Entrevista', score: result.scores[PodcastType.INTERVIEW] },
    { name: 'Mix', score: result.scores[PodcastType.MIX] },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-12 animate-in fade-in duration-1000 pb-20">
      {/* Header Result Card */}
      <div className="bg-zinc-900 p-10 md:p-16 rounded-[2.5rem] border border-zinc-800 shadow-2xl text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#fada46] via-[#fada46] to-transparent"></div>
        
        <div className="inline-block px-4 py-1 bg-[#fada46]/10 rounded-full text-[#fada46] text-xs font-black tracking-[0.3em] uppercase mb-6">
          Análise de Perfil Concluída
        </div>
        
        <h2 className="text-5xl md:text-7xl font-black mb-8 text-white uppercase tracking-tighter leading-none">
          {result.primaryType}
        </h2>
        
        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed font-medium mb-12">
          {PODCAST_DESCRIPTIONS[result.primaryType]}
        </p>

        <div className="bg-black/40 p-8 rounded-3xl border border-zinc-800/50">
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-8">Nível de Afinidade</p>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis 
                  dataKey="name" 
                  stroke="#52525b" 
                  fontSize={11} 
                  tickLine={false} 
                  axisLine={false} 
                  dy={10}
                />
                <YAxis hide />
                <Tooltip 
                  cursor={{fill: 'rgba(250, 218, 70, 0.05)'}}
                  contentStyle={{ backgroundColor: '#18181b', border: '1px solid #3f3f46', borderRadius: '16px', padding: '12px' }}
                />
                <Bar dataKey="score" radius={[8, 8, 0, 0]} barSize={60}>
                  {chartData.map((entry, index) => {
                    const isMatch = result.primaryType.toLowerCase().includes(entry.name.toLowerCase());
                    return (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={isMatch ? '#fada46' : '#27272a'} 
                        className="transition-all duration-500"
                      />
                    );
                  })}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* AI Advice Section */}
      {result.aiAdvice && (
        <div className="bg-zinc-900 rounded-[2.5rem] border border-zinc-800 shadow-xl overflow-hidden">
          <div className="p-8 md:p-12 border-b border-zinc-800 bg-zinc-800/20 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-black">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.993 7.993 0 0111 5c.442 0 .874.036 1.294.105A2.001 2.001 0 0114 7v5a2 2 0 01-1.706 1.981A8.01 8.01 0 0011 14c-.442 0-.874-.036-1.294-.105A2.001 2.001 0 018 12V7a2 2 0 011.706-1.981z" />
                  <path d="M10 15a3 3 0 100-6 3 3 0 000 6z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-black text-white m-0 tracking-tight uppercase">Plano Estratégico Personalizado</h3>
                <p className="text-zinc-500 text-sm font-bold m-0 uppercase tracking-widest">Masterplan para o Teu Negócio</p>
              </div>
            </div>
          </div>
          <div className="p-8 md:p-12 prose prose-invert prose-zinc max-w-none prose-headings:text-white prose-headings:font-black prose-headings:uppercase prose-strong:text-[#fada46] prose-li:text-zinc-300">
            <div className="text-zinc-300 leading-relaxed whitespace-pre-wrap font-medium text-lg">
              {result.aiAdvice}
            </div>
          </div>
        </div>
      )}

      {/* NEW: Challenge CTA Section */}
      <div className="bg-[#fada46] p-10 md:p-16 rounded-[2.5rem] text-black text-center relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
          <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 20 20">
            <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
          </svg>
        </div>

        <h3 className="text-sm font-black uppercase tracking-[0.3em] mb-4">A Via Rápida para o Ar</h3>
        <h2 className="text-4xl md:text-5xl font-black mb-6 leading-none uppercase tracking-tighter">
          Desenha o Teu Podcast de Negócio em <span className="underline decoration-4 underline-offset-8">7 Dias</span>
        </h2>
        <p className="text-xl font-bold max-w-2xl mx-auto mb-10 opacity-80 leading-snug">
          Não percas 30 dias a tentar descobrir tudo sozinho. No desafio, desenhamos juntos a tua estratégia, o teu funil de vendas e o teu lançamento em tempo recorde.
        </p>
        
        <button 
          onClick={() => window.open('https://teulink.com/desafio-7-dias', '_blank')}
          className="bg-black text-white px-12 py-6 rounded-2xl font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center gap-4 mx-auto uppercase tracking-wider"
        >
          Aceitar o Desafio
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-6 items-center justify-center pt-10 no-print pb-12">
        <button 
          onClick={() => window.location.reload()}
          className="group px-10 py-5 bg-zinc-800 hover:bg-zinc-700 text-white font-black rounded-2xl transition-all flex items-center gap-3 uppercase text-sm tracking-widest border border-zinc-700"
        >
          Refazer Quiz
        </button>
        <button 
          onClick={() => window.print()}
          className="group px-12 py-5 bg-zinc-100 hover:bg-white text-black font-black rounded-2xl shadow-xl transition-all flex items-center gap-3 uppercase text-sm tracking-widest"
        >
          Guardar PDF do Plano
        </button>
      </div>
    </div>
  );
};

export default ResultView;
