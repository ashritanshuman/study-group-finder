import { motion } from "framer-motion";
import { useState } from "react";
import { Search, Plus, Users, BookOpen, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Groups = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const groups = [
    {
      name: "Advanced Calculus Study",
      subject: "Mathematics",
      members: 8,
      difficulty: "Advanced",
      type: "Online",
      status: "Active",
      description: "Focused on calculus II and III topics with weekly problem-solving sessions.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Physics Fundamentals",
      subject: "Physics",
      members: 12,
      difficulty: "Intermediate",
      type: "Hybrid",
      status: "Active",
      description: "Covering mechanics, thermodynamics, and electromagnetism.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Organic Chemistry Lab",
      subject: "Chemistry",
      members: 6,
      difficulty: "Advanced",
      type: "In-Person",
      status: "Active",
      description: "Hands-on lab work and reaction mechanism discussions.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      name: "Web Development Bootcamp",
      subject: "Computer Science",
      members: 15,
      difficulty: "Beginner",
      type: "Online",
      status: "Active",
      description: "Learning React, Node.js, and full-stack development together.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      name: "Data Structures & Algorithms",
      subject: "Computer Science",
      members: 10,
      difficulty: "Intermediate",
      type: "Online",
      status: "Active",
      description: "Preparing for technical interviews and competitive programming.",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      name: "Biology & Anatomy Study",
      subject: "Biology",
      members: 9,
      difficulty: "Intermediate",
      type: "Hybrid",
      status: "Active",
      description: "Medical students preparing for exams together.",
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  const filteredGroups = groups.filter((group) =>
    group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    group.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-32 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2 gradient-text">Study Groups</h1>
            <p className="text-xl text-muted-foreground">
              Find and join groups that match your interests
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold glow"
          >
            <Plus className="h-5 w-5" />
            Create Group
          </motion.button>
        </div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass-card mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search groups by name or subject..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-6 bg-transparent border-white/10 focus:border-primary text-lg"
            />
          </div>
        </motion.div>

        {/* Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="glass-card group cursor-pointer glow-hover relative overflow-hidden"
            >
              <div
                className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${group.gradient}`}
              />
              <div className="mt-2">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${group.gradient}`}>
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium glass border border-primary/30">
                    {group.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {group.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {group.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{group.subject}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{group.members} members</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{group.type}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2 py-1 rounded-md text-xs glass border border-white/10">
                    {group.difficulty}
                  </span>
                </div>

                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  Join Group
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Groups;
