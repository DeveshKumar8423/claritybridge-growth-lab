import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ExpertiseCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  link: string;
  delay?: number;
}

const ExpertiseCard = ({ icon: Icon, title, description, features, link, delay = 0 }: ExpertiseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="h-full bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-elegant)] group">
        <CardHeader>
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:shadow-[var(--shadow-glow)] transition-all duration-300">
            <Icon className="w-6 h-6 text-primary-foreground" />
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-primary mt-0.5">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        
      </Card>
    </motion.div>
  );
};

export default ExpertiseCard;
