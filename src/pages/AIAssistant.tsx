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
    "Explain photosynthesis in simple terms",
    "Help me study for my calculus exam",
    "Give me tips for better note-taking",
    "Create a quiz about World War II",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        
        <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-primary/10">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">AI Study Assistant</h1>
                <p className="text-sm text-muted-foreground">Your personal AI tutor</p>
              </div>
            </div>
            {messages.length > 0 && (
              <Button variant="outline" size="sm" onClick={clearMessages}>
                <Trash2 className="h-4 w-4 mr-2" />
                Clear Chat
              </Button>
            )}
          </div>

          <Card className="flex flex-col h-[calc(100vh-280px)] min-h-[500px]">
            <ScrollArea className="flex-1 p-4" ref={scrollRef}>
              {messages.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-8">
                  <div className="p-4 rounded-full bg-primary/10 mb-4">
                    <Bot className="h-12 w-12 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold mb-2">How can I help you study?</h2>
                  <p className="text-muted-foreground mb-6 max-w-md">
                    I can explain concepts, help with homework, create quizzes, and provide study tips.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-lg">
                    {suggestedPrompts.map((prompt, i) => (
                      <Button
                        key={i}
                        variant="outline"
                        className="text-left justify-start h-auto py-3 px-4"
                        onClick={() => {
                          setInput(prompt);
                          inputRef.current?.focus();
                        }}
                      >
                        <span className="line-clamp-2 text-sm">{prompt}</span>
                      </Button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <AnimatePresence mode="popLayout">
                    {messages.map((message, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        {message.role === 'assistant' && (
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <Bot className="h-4 w-4 text-primary" />
                          </div>
                        )}
                        <div
                          className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                            message.role === 'user'
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted'
                          }`}
                        >
                          <div className="text-sm whitespace-pre-wrap break-words prose prose-sm dark:prose-invert max-w-none">
                            {message.content || (
                              <span className="flex items-center gap-2">
                                <Loader2 className="h-4 w-4 animate-spin" />
                                Thinking...
                              </span>
                            )}
                          </div>
                        </div>
                        {message.role === 'user' && (
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                            <User className="h-4 w-4 text-primary-foreground" />
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </ScrollArea>

            {error && (
              <div className="px-4 py-2 bg-destructive/10 text-destructive text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything about your studies..."
                  disabled={isLoading}
                  className="flex-1"
                />
                <Button type="submit" disabled={isLoading || !input.trim()}>
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </form>
          </Card>
        </main>

        <Footer />
      </div>
  );
};

export default AIAssistant;
