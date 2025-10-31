import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionLayoutProps {
  children: ReactNode;
  className?: string;
  background?: "default" | "gradient" | "muted";
}

const SectionLayout = ({ children, className = "", background = "default" }: SectionLayoutProps) => {
  const backgroundStyles = {
    default: "",
    gradient: "bg-gradient-to-br from-primary/5 via-accent/5 to-background",
    muted: "bg-muted/30",
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`py-16 sm:py-20 lg:py-24 ${backgroundStyles[background]} ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </motion.section>
  );
};

export default SectionLayout;
