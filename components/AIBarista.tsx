import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, User, Coffee } from 'lucide-react';
import { ChatMessage, LoadingState } from '../types';
import { getBaristaRecommendation } from '../services/geminiService';

export const AIBarista: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: 'いらっしゃいませ。喫茶 涼月（りつき）のマスターです。今の気分をおっしゃっていただければ、おすすめの一品をご提案いたしますよ。',
      timestamp: Date.now()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loadingState]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || loadingState === LoadingState.LOADING) return;

    const userMsg: ChatMessage = {
      role: 'user',
      text: inputValue.trim(),
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setLoadingState(LoadingState.LOADING);

    try {
      const responseText = await getBaristaRecommendation(userMsg.text);
      
      const modelMsg: ChatMessage = {
        role: 'model',
        text: responseText,
        timestamp: Date.now()
      };
      
      setMessages(prev => [...prev, modelMsg]);
      setLoadingState(LoadingState.SUCCESS);
    } catch (error) {
      setMessages(prev => [...prev, {
        role: 'model',
        text: '申し訳ございません。少し声が聞き取りにくかったようです。もう一度お願いできますでしょうか。',
        timestamp: Date.now()
      }]);
      setLoadingState(LoadingState.ERROR);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center p-3 bg-accent/20 rounded-full mb-4">
          <Sparkles className="text-accent-dark" size={24} color="#b45309" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-coffee-dark mb-4">AIマスターのおすすめ</h2>
        <p className="text-coffee-light">
          「眠気覚ましに一杯」「少し小腹が空いた」など、<br className="md:hidden"/>気軽にお声がけください。<br />
          あなたにぴったりのメニューを、マスターが選びます。
        </p>
      </div>

      <div className="bg-paper border border-coffee-light/20 rounded-2xl shadow-xl overflow-hidden flex flex-col h-[500px] md:h-[600px]">
        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
          {messages.map((msg, index) => (
            <div 
              key={index} 
              className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center shadow-sm ${
                msg.role === 'user' ? 'bg-coffee-light text-white' : 'bg-coffee-dark text-accent'
              }`}>
                {msg.role === 'user' ? <User size={20} /> : <Coffee size={20} />}
              </div>
              
              <div className={`max-w-[80%] md:max-w-[70%] p-4 rounded-2xl shadow-sm text-sm md:text-base leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-white text-coffee-dark rounded-tr-none' 
                  : 'bg-coffee-dark text-paper rounded-tl-none border border-coffee-med'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          
          {loadingState === LoadingState.LOADING && (
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-coffee-dark text-accent flex items-center justify-center shadow-sm">
                <Coffee size={20} />
              </div>
              <div className="bg-coffee-dark text-paper rounded-2xl rounded-tl-none p-4 shadow-sm flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-accent rounded-full animate-bounce delay-100"></span>
                <span className="w-2 h-2 bg-accent rounded-full animate-bounce delay-200"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="bg-white p-4 md:p-6 border-t border-coffee-light/20">
          <div className="flex gap-2 relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="例：甘いものが食べたいです"
              className="flex-1 bg-paper border-2 border-transparent focus:border-coffee-light/50 focus:bg-white rounded-full px-6 py-3 outline-none transition-all placeholder-coffee-light/50 text-coffee-dark"
              disabled={loadingState === LoadingState.LOADING}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || loadingState === LoadingState.LOADING}
              className={`p-3 rounded-full transition-all duration-300 transform ${
                !inputValue.trim() || loadingState === LoadingState.LOADING
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed scale-90' 
                  : 'bg-coffee-dark text-white hover:bg-accent hover:text-coffee-dark shadow-md scale-100'
              }`}
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};