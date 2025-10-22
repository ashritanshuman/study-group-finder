import { motion } from "framer-motion";
import { Trophy, Star, TrendingUp, Award } from "lucide-react";

const Leaderboard = () => {
  const topLearners = [
    { rank: 1, name: "Alice Johnson", points: 2850, badge: "🥇", streak: 42, gradient: "from-gray-800 to-gray-600" },
    { rank: 2, name: "Bob Smith", points: 2650, badge: "🥈", streak: 38, gradient: "from-gray-700 to-gray-500" },
    { rank: 3, name: "Carol Williams", points: 2480, badge: "🥉", streak: 35, gradient: "from-gray-600 to-gray-400" },
    { rank: 4, name: "David Brown", points: 2320, badge: "🏆", streak: 30, gradient: "from-gray-500 to-gray-300" },
    { rank: 5, name: "Emma Davis", points: 2180, badge: "⭐", streak: 28, gradient: "from-slate-700 to-slate-500" },
    { rank: 6, name: "Frank Miller", points: 2050, badge: "⭐", streak: 25, gradient: "from-zinc-700 to-zinc-500" },
    { rank: 7, name: "Grace Wilson", points: 1920, badge: "⭐", streak: 22, gradient: "from-stone-700 to-stone-500" },
    { rank: 8, name: "Henry Moore", points: 1800, badge: "⭐", streak: 20, gradient: "from-neutral-700 to-neutral-500" },
  ];

  const achievements = [
    { title: "Study Streak", description: "7 days in a row", icon: "🔥", color: "from-gray-800 to-gray-600" },
    { title: "Group Leader", description: "5 groups created", icon: "👑", color: "from-gray-700 to-gray-500" },
    { title: "Helpful Hand", description: "50+ answers", icon: "🤝", color: "from-gray-600 to-gray-400" },
    { title: "Rising Star", description: "Top 10 this week", icon: "⭐", color: "from-slate-700 to-slate-500" },
  ];

  return (
    <div className="min-h-screen pt-32 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">🏆 Leaderboard</h1>
          <p className="text-xl text-muted-foreground">
            Top learners and achievers in our community
          </p>
        </div>

        {/* Your Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            Your Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card text-center glow-hover"
              >
                <div className={`inline-block p-4 rounded-xl bg-gradient-to-br ${achievement.color} mb-3`}>
                  <span className="text-3xl">{achievement.icon}</span>
                </div>
                <h3 className="font-bold mb-1">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Top 3 Podium */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-12"
        >
          <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto items-end">
            {/* 2nd Place */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-card text-center glow-hover relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${topLearners[1].gradient}`} />
              <div className="text-5xl mb-2 mt-2">🥈</div>
              <div className="text-6xl font-bold mb-2 gradient-text">2</div>
              <h3 className="font-bold text-lg mb-1">{topLearners[1].name}</h3>
              <div className="text-2xl font-bold text-primary mb-1">{topLearners[1].points}</div>
              <p className="text-xs text-muted-foreground">points</p>
              <div className="mt-3 pt-3 border-t border-white/10">
                <div className="text-sm text-muted-foreground">🔥 {topLearners[1].streak} day streak</div>
              </div>
            </motion.div>

            {/* 1st Place */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-card text-center glow relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${topLearners[0].gradient}`} />
              <div className="text-6xl mb-2 mt-2">🥇</div>
              <div className="text-7xl font-bold mb-2 gradient-text">1</div>
              <h3 className="font-bold text-xl mb-1">{topLearners[0].name}</h3>
              <div className="text-3xl font-bold text-primary mb-1">{topLearners[0].points}</div>
              <p className="text-sm text-muted-foreground">points</p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="text-sm text-muted-foreground">🔥 {topLearners[0].streak} day streak</div>
              </div>
            </motion.div>

            {/* 3rd Place */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-card text-center glow-hover relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${topLearners[2].gradient}`} />
              <div className="text-5xl mb-2 mt-2">🥉</div>
              <div className="text-6xl font-bold mb-2 gradient-text">3</div>
              <h3 className="font-bold text-lg mb-1">{topLearners[2].name}</h3>
              <div className="text-2xl font-bold text-primary mb-1">{topLearners[2].points}</div>
              <p className="text-xs text-muted-foreground">points</p>
              <div className="mt-3 pt-3 border-t border-white/10">
                <div className="text-sm text-muted-foreground">🔥 {topLearners[2].streak} day streak</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Rest of Leaderboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-6">Top Learners</h2>
          <div className="space-y-3">
            {topLearners.slice(3).map((learner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (index + 3) * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="glass-card glow-hover flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${learner.gradient} flex items-center justify-center font-bold text-white text-xl`}>
                    {learner.rank}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{learner.name}</h3>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-primary" />
                        {learner.points} pts
                      </span>
                      <span>🔥 {learner.streak} days</span>
                    </div>
                  </div>
                </div>
                <div className="text-3xl">{learner.badge}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Leaderboard;
