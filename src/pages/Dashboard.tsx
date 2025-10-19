import { motion } from "framer-motion";
import {
  Users,
  MessageCircle,
  Calendar,
  TrendingUp,
  Bell,
  BookOpen,
  Trophy,
  Clock,
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    { icon: Users, label: "Active Groups", value: "5", color: "from-blue-500 to-cyan-500" },
    { icon: Clock, label: "Study Hours", value: "42", color: "from-purple-500 to-pink-500" },
    { icon: Trophy, label: "Achievements", value: "12", color: "from-yellow-500 to-orange-500" },
    { icon: TrendingUp, label: "Progress", value: "87%", color: "from-green-500 to-emerald-500" },
  ];

  const upcomingSessions = [
    { title: "Math Study Group", time: "Today, 3:00 PM", members: 5, color: "from-blue-500 to-cyan-500" },
    { title: "Physics Review", time: "Tomorrow, 10:00 AM", members: 4, color: "from-purple-500 to-pink-500" },
    { title: "Chemistry Lab Prep", time: "Wed, 2:00 PM", members: 6, color: "from-green-500 to-emerald-500" },
  ];

  const notifications = [
    { message: "John joined your Math Study Group", time: "5 min ago" },
    { message: "New message in Physics Review", time: "1 hour ago" },
    { message: "You earned the 'Study Streak' badge!", time: "2 hours ago" },
  ];

  return (
    <div className="min-h-screen pt-32 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto"
      >
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 gradient-text">
            Welcome back, Student! 👋
          </h1>
          <p className="text-xl text-muted-foreground">
            Here's what's happening with your study groups today
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card glow-hover"
            >
              <div className={`inline-block p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-3`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Upcoming Sessions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 glass-card glow-hover"
          >
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Upcoming Sessions</h2>
            </div>
            <div className="space-y-4">
              {upcomingSessions.map((session, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ x: 5 }}
                  className="p-4 rounded-xl glass border border-white/10 cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${session.color}`}>
                        <BookOpen className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold">{session.title}</h3>
                        <p className="text-sm text-muted-foreground">{session.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{session.members}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Notifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card glow-hover"
          >
            <div className="flex items-center gap-3 mb-6">
              <Bell className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Notifications</h2>
            </div>
            <div className="space-y-4">
              {notifications.map((notification, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ x: 5 }}
                  className="p-3 rounded-lg glass border border-white/10 cursor-pointer"
                >
                  <p className="text-sm mb-1">{notification.message}</p>
                  <p className="text-xs text-muted-foreground">{notification.time}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            className="glass-card glow-hover text-left"
          >
            <MessageCircle className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-bold text-lg mb-1">Start a Chat</h3>
            <p className="text-sm text-muted-foreground">Message your study groups</p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            className="glass-card glow-hover text-left"
          >
            <Users className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-bold text-lg mb-1">Find Groups</h3>
            <p className="text-sm text-muted-foreground">Discover new study partners</p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            className="glass-card glow-hover text-left"
          >
            <Calendar className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-bold text-lg mb-1">Schedule Session</h3>
            <p className="text-sm text-muted-foreground">Plan your next study time</p>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
