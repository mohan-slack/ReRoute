
import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Sparkles, Send, X, MessageSquare, Loader2 } from 'lucide-react';

interface AIAssistantProps {
  destination?: string;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ destination }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);

  const handlePlanTrip = async () => {
    if (!prompt && !destination) return;
    
    setLoading(true);
    setResponse(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const fullPrompt = destination 
        ? `I am planning a trip to ${destination}. ${prompt || 'Help me plan a premium 2-day itinerary including high-end places and recommendations.'}`
        : prompt;

      const result = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: fullPrompt,
        config: {
          systemInstruction: 'You are a luxury travel consultant for ReRoute Cabs. You provide sophisticated, helpful, and concise travel advice. Always recommend hiring a ReRoute premium cab for a seamless experience.'
        }
      });
      
      setResponse(result.text || 'Sorry, I could not generate a plan at the moment.');
    } catch (error) {
      console.error('AI Error:', error);
      setResponse('Oops! Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gray-900 text-white p-4 rounded-full shadow-2xl flex items-center gap-2 hover:bg-black transition-all group scale-100 hover:scale-105 active:scale-95 border-2 border-reroute-teal/30"
        >
          <div className="bg-reroute-teal p-1 rounded-full text-white">
            <Sparkles size={16} />
          </div>
          <span className="font-bold pr-2">ReRoute Guide</span>
        </button>
      ) : (
        <div className="bg-white w-[380px] h-[500px] rounded-3xl shadow-2xl flex flex-col border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-300">
          <div className="bg-gray-900 text-white p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-reroute-teal p-2 rounded-xl text-white">
                <Sparkles size={20} />
              </div>
              <div>
                <h4 className="font-bold">ReRoute Assistant</h4>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest">Powered by ReRoute AI</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          <div className="flex-grow p-6 overflow-y-auto space-y-4">
            {!response && !loading && (
              <div className="text-center space-y-4 py-8">
                <div className="w-16 h-16 bg-reroute-light rounded-full flex items-center justify-center mx-auto text-reroute-teal">
                   <MessageSquare size={32} />
                </div>
                <div>
                   <p className="text-gray-900 font-bold">Discover your destination</p>
                   <p className="text-sm text-gray-500">I can curate itineraries, highlight local gems, and plan your ReRoute journey.</p>
                </div>
              </div>
            )}
            
            {loading && (
              <div className="flex flex-col items-center justify-center py-12 space-y-4">
                <Loader2 className="animate-spin text-reroute-teal" size={40} />
                <p className="text-sm font-medium text-gray-500">Curating your experience...</p>
              </div>
            )}

            {response && (
              <div className="bg-gray-50 rounded-2xl p-4 text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
                {response}
              </div>
            )}
          </div>

          <div className="p-4 border-t bg-white">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder={destination ? `Ask about ${destination}...` : "Ex: Top restaurants in Mumbai"}
                className="w-full pl-4 pr-12 py-3 bg-gray-100 border-none rounded-2xl text-sm focus:ring-2 focus:ring-reroute-teal transition-all outline-none"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handlePlanTrip()}
              />
              <button 
                onClick={handlePlanTrip}
                disabled={loading}
                className="absolute right-2 bg-reroute-teal text-white p-2 rounded-xl hover:bg-teal-700 disabled:opacity-50 transition-all shadow-sm"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
