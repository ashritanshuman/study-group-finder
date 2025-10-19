import { motion } from "framer-motion";
import { useState } from "react";
import { User, Mail, BookOpen, Target, Edit2, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const stats = [
    { label: "Study Hours", value: "142", icon: "⏰" },
    { label: "Groups Joined", value: "5", icon: "👥" },
    { label: "Achievements", value: "12", icon: "🏆" },
    { label: "Current Streak", value: "21", icon: "🔥" },
  ];

  const interests = ["Mathematics", "Physics", "Computer Science", "Chemistry", "Biology"];
  const badges = ["🥇 Top Learner", "🔥 21 Day Streak", "👑 Group Leader", "⭐ Rising Star"];

  return (
    <div className="min-h-screen pt-32 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto max-w-5xl"
      >
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass-card mb-8 glow-hover relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-r from-primary to-secondary" />
          <div className="relative pt-20 pb-8">
            <div className="flex flex-col md:flex-row items-center md:items-end gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative group cursor-pointer"
              >
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                  <div className="w-full h-full rounded-full glass flex items-center justify-center text-4xl">
                    👤
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 p-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <Camera className="h-4 w-4 text-white" />
                </div>
              </motion.div>

              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl font-bold mb-2">John Doe</h1>
                <p className="text-lg text-muted-foreground mb-4">
                  Passionate learner • Computer Science Student • Study Group Enthusiast
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {badges.map((badge, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className="px-3 py-1 rounded-full glass border border-primary/30 text-sm"
                    >
                      {badge}
                    </motion.span>
                  ))}
                </div>
              </div>

              <Button
                onClick={() => setIsEditing(!isEditing)}
                variant="outline"
                className="glass border-primary/50 hover:border-primary"
              >
                <Edit2 className="h-4 w-4 mr-2" />
                {isEditing ? "Cancel" : "Edit Profile"}
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card text-center glow-hover"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Profile Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="glass-card glow-hover"
          >
            <h2 className="text-2xl font-bold mb-6">Profile Information</h2>
            <div className="space-y-4">
              <div>
                <label className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <User className="h-4 w-4" />
                  Full Name
                </label>
                <Input
                  disabled={!isEditing}
                  defaultValue="John Doe"
                  className="bg-transparent border-white/10"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Mail className="h-4 w-4" />
                  Email
                </label>
                <Input
                  disabled={!isEditing}
                  defaultValue="john.doe@example.com"
                  className="bg-transparent border-white/10"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <BookOpen className="h-4 w-4" />
                  Bio
                </label>
                <Textarea
                  disabled={!isEditing}
                  defaultValue="Passionate about learning and helping others succeed. Looking for study groups in STEM subjects."
                  className="bg-transparent border-white/10 min-h-[100px]"
                />
              </div>
              {isEditing && (
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  Save Changes
                </Button>
              )}
            </div>
          </motion.div>

          {/* Interests & Goals */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-card glow-hover">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-primary" />
                Academic Interests
              </h2>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.05, duration: 0.4 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-white cursor-pointer"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="glass-card glow-hover">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Target className="h-6 w-6 text-primary" />
                Learning Goals
              </h2>
              <ul className="space-y-3">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Master Advanced Calculus concepts</span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span>Complete Physics certification</span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0, duration: 0.6 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>Build 5 web development projects</span>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
