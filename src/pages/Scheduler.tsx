import { motion } from "framer-motion";
import { Calendar, Clock, Users, Plus, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

const Scheduler = () => {
  const sessions = [
    {
      title: "Calculus Problem Solving",
      date: "Mon, Feb 19",
      time: "3:00 PM - 5:00 PM",
      group: "Advanced Calculus",
      members: 8,
      type: "video",
      gradient: "from-gray-800 to-gray-600",
    },
    {
      title: "Physics Lab Discussion",
      date: "Tue, Feb 20",
      time: "10:00 AM - 12:00 PM",
      group: "Physics Fundamentals",
      members: 12,
      type: "in-person",
      gradient: "from-gray-700 to-gray-500",
    },
    {
      title: "Chemistry Review Session",
      date: "Wed, Feb 21",
      time: "2:00 PM - 4:00 PM",
      group: "Organic Chemistry Lab",
      members: 6,
      type: "video",
      gradient: "from-gray-600 to-gray-400",
    },
    {
      title: "Code Review & Practice",
      date: "Thu, Feb 22",
      time: "6:00 PM - 8:00 PM",
      group: "Web Dev Bootcamp",
      members: 15,
      type: "video",
      gradient: "from-gray-500 to-gray-300",
    },
    {
      title: "Algorithm Practice",
      date: "Fri, Feb 23",
      time: "4:00 PM - 6:00 PM",
      group: "Data Structures & Algorithms",
      members: 10,
      type: "video",
      gradient: "from-slate-700 to-slate-500",
    },
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold mb-2 gradient-text">Study Scheduler</h1>
            <p className="text-xl text-muted-foreground">
              Manage your study sessions and stay organized
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold glow"
          >
            <Plus className="h-5 w-5" />
            Schedule Session
          </motion.button>
        </div>

        {/* Calendar View Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass-card mb-8 glow-hover"
        >
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">This Week's Schedule</h2>
          </div>
          
          <div className="grid grid-cols-7 gap-4 mb-6">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
              <motion.div
                key={day}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className={`text-center p-3 rounded-lg ${
                  index < 5
                    ? "glass border border-primary/30"
                    : "glass border border-white/10"
                }`}
              >
                <div className="text-sm text-muted-foreground mb-1">{day}</div>
                <div className="text-xl font-bold">{19 + index}</div>
                {index < 5 && (
                  <div className="mt-2 w-2 h-2 rounded-full bg-primary mx-auto" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sessions List */}
        <div className="space-y-4">
          {sessions.map((session, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02, x: 5 }}
              className="glass-card glow-hover relative overflow-hidden"
            >
              <div
                className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${session.gradient}`}
              />
              <div className="pl-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${session.gradient}`}>
                        {session.type === "video" ? (
                          <Video className="h-5 w-5 text-white" />
                        ) : (
                          <Users className="h-5 w-5 text-white" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{session.title}</h3>
                        <p className="text-sm text-muted-foreground">{session.group}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        {session.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        {session.time}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary" />
                        {session.members} members
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="glass border-primary/50 hover:border-primary">
                      View Details
                    </Button>
                    <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                      Join Session
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Scheduler;
