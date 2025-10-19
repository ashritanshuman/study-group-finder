import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Paperclip, Smile, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Chat = () => {
  const [message, setMessage] = useState("");

  const groups = [
    { name: "Advanced Calculus", active: true, unread: 3 },
    { name: "Physics Fundamentals", active: false, unread: 0 },
    { name: "Organic Chemistry Lab", active: false, unread: 1 },
    { name: "Web Dev Bootcamp", active: false, unread: 5 },
  ];

  const messages = [
    { sender: "John Doe", text: "Hey everyone! Ready for today's study session?", time: "10:30 AM", isOwn: false },
    { sender: "You", text: "Yes! I've prepared the topics we discussed yesterday.", time: "10:32 AM", isOwn: true },
    { sender: "Sarah Smith", text: "Great! Can someone share the practice problems?", time: "10:33 AM", isOwn: false },
    { sender: "You", text: "Sure, I'll upload them in a minute.", time: "10:35 AM", isOwn: true },
    { sender: "Mike Johnson", text: "Thanks! Looking forward to it 📚", time: "10:36 AM", isOwn: false },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen pt-32 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">Messages</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Groups Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1 glass-card glow-hover"
          >
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Your Groups
            </h2>
            <div className="space-y-2">
              {groups.map((group, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ x: 5 }}
                  className={`p-3 rounded-lg cursor-pointer transition-colors ${
                    group.active
                      ? "bg-primary/20 border border-primary/50"
                      : "glass border border-white/10 hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`font-medium ${group.active ? "text-primary" : ""}`}>
                      {group.name}
                    </span>
                    {group.unread > 0 && (
                      <span className="px-2 py-0.5 rounded-full bg-primary text-white text-xs font-bold">
                        {group.unread}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Chat Area */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 glass-card glow-hover flex flex-col h-[600px]"
          >
            {/* Chat Header */}
            <div className="pb-4 border-b border-white/10">
              <h2 className="text-2xl font-bold">Advanced Calculus Study</h2>
              <p className="text-sm text-muted-foreground">8 members • 5 online</p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto py-6 space-y-4">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className={`flex ${msg.isOwn ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[70%] ${msg.isOwn ? "items-end" : "items-start"} flex flex-col gap-1`}>
                    {!msg.isOwn && (
                      <span className="text-xs text-muted-foreground font-medium">{msg.sender}</span>
                    )}
                    <div
                      className={`px-4 py-3 rounded-2xl ${
                        msg.isOwn
                          ? "bg-gradient-to-r from-primary to-secondary text-white"
                          : "glass border border-white/10"
                      }`}
                    >
                      <p>{msg.text}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{msg.time}</span>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2"
              >
                <div className="glass border border-white/10 px-4 py-3 rounded-2xl">
                  <div className="flex gap-1">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
                      className="w-2 h-2 rounded-full bg-primary"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
                      className="w-2 h-2 rounded-full bg-primary"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
                      className="w-2 h-2 rounded-full bg-primary"
                    />
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">Sarah is typing...</span>
              </motion.div>
            </div>

            {/* Message Input */}
            <div className="pt-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Paperclip className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Smile className="h-5 w-5" />
                </Button>
                <Input
                  type="text"
                  placeholder="Type a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1 bg-transparent border-white/10 focus:border-primary"
                />
                <Button
                  onClick={handleSendMessage}
                  className="rounded-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                  size="icon"
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Chat;
