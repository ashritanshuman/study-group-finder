import { useState, useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card } from '@/components/ui/card';
import { useAIChat } from '@/hooks/useAIChat';
import { Send, Bot, User, Trash2, Sparkles, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AIAssistant = () => {
  const { messages, isLoading, error, sendMessage, clearMessages } = useAIChat();
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage(input);
      setInput('');
    }
  };

  const suggestedPrompts = [
    { icon: "🧬", text: "Explain photosynthesis in simple terms" },
    { icon: "📐", text: "Help me study for my calculus exam" },
    { icon: "📝", text: "Give me tips for better note-taking" },
    { icon: "🌍", text: "Create a quiz about World War II" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
              <div className="relative p-3 rounded-2xl bg-gradient-to-br from-primary to-primary/80 shadow-lg">
                <Sparkles className="h-7 w-7 text-primary-foreground" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">AI Study Assistant</h1>
              <p className="text-sm text-muted-foreground">Powered by AI • Always ready to help</p>
            </div>
          </div>
          {messages.length > 0 && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={clearMessages}
                className="gap-2 hover:bg-destructive/10 hover:text-destructive hover:border-destructive/50 transition-colors"
              >
                <Trash2 className="h-4 w-4" />
                <span className="hidden sm:inline">Clear Chat</span>
              </Button>
            </motion.div>
          )}
        </motion.div>

        {/* Chat Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="flex flex-col h-[calc(100vh-280px)] min-h-[500px] border-border/50 shadow-xl overflow-hidden bg-card/50 backdrop-blur-sm">
            <ScrollArea className="flex-1 p-6" ref={scrollRef}>
              {messages.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center px-4">
                  {/* Empty State */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="relative mb-6"
                  >
                    <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-full scale-150" />
                    <div className="relative p-6 rounded-full bg-gradient-to-br from-muted to-muted/50 border border-border/50">
                      <Bot className="h-14 w-14 text-primary" />
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h2 className="text-2xl font-semibold mb-2">How can I help you study?</h2>
                    <p className="text-muted-foreground mb-8 max-w-md">
                      I can explain complex concepts, help with homework, create practice quizzes, and provide personalized study tips.
                    </p>
                  </motion.div>

                  {/* Suggested Prompts Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-xl">
                    {suggestedPrompts.map((prompt, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                      >
                        <Button
                          variant="outline"
                          className="w-full text-left justify-start h-auto py-4 px-4 group hover:bg-primary/5 hover:border-primary/30 transition-all duration-300"
                          onClick={() => {
                            setInput(prompt.text);
                            inputRef.current?.focus();
                          }}
                        >
                          <span className="text-xl mr-3 group-hover:scale-110 transition-transform">{prompt.icon}</span>
                          <span className="line-clamp-2 text-sm">{prompt.text}</span>
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <AnimatePresence mode="popLayout">
                    {messages.map((message, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                        className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        {message.role === 'assistant' && (
                          <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20 shadow-sm">
                            <Bot className="h-5 w-5 text-primary" />
                          </div>
                        )}
                        <div
                          className={`max-w-[80%] rounded-2xl px-4 py-3 shadow-sm ${
                            message.role === 'user'
                              ? 'bg-primary text-primary-foreground rounded-br-md'
                              : 'bg-muted/80 border border-border/50 rounded-bl-md'
                          }`}
                        >
                          <div className="text-sm whitespace-pre-wrap break-words leading-relaxed">
                            {message.content || (
                              <span className="flex items-center gap-2 text-muted-foreground">
                                <Loader2 className="h-4 w-4 animate-spin" />
                                Thinking...
                              </span>
                            )}
                          </div>
                        </div>
                        {message.role === 'user' && (
                          <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-sm">
                            <User className="h-5 w-5 text-primary-foreground" />
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </ScrollArea>

            {/* Error Message */}
            <AnimatePresence>
              {error && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-4 py-3 bg-destructive/10 text-destructive text-sm border-t border-destructive/20 flex items-center gap-2"
                >
                  <span className="text-destructive">⚠️</span>
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-border/50 bg-muted/30">
              <div className="flex gap-3">
                <Input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything about your studies..."
                  disabled={isLoading}
                  className="flex-1 h-12 bg-background border-border/50 focus:border-primary/50 transition-colors"
                />
                <Button 
                  type="submit" 
                  disabled={isLoading || !input.trim()}
                  className="h-12 px-5 shadow-md hover:shadow-lg transition-shadow"
                >
                  {isLoading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <Send className="h-5 w-5" />
                  )}
                </Button>
              </div>
            </form>
          </Card>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default AIAssistant;
