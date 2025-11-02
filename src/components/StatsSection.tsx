import { motion } from "framer-motion";
import { Users, FileText, Heart, Sparkles } from "lucide-react";

const stats = [
  { icon: Users, label: "Community Members", value: "4+" },
  { icon: FileText, label: "Research Projects", value: "4+" },
  { icon: Heart, label: "Lives Impacted", value: "50+" },
  { icon: Sparkles, label: "Awards", value: "2+" },
];

const StatsSection = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center p-6 rounded-2xl bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-elegant)]"
          >
            <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-primary to-accent mb-4">
              <Icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              {stat.value}
            </div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default StatsSection;
