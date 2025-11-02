import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Users, Lightbulb, BookOpen, Network } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionLayout from "@/components/SectionLayout";
import StatsSection from "@/components/StatsSection";
import ExpertiseCard from "@/components/ExpertiseCard";
import heroImage from "/lablogo.png";

const Home = () => {
  const expertiseAreas = [
    {
      icon: Users,
      title: "Self-Exploration Community",
      description: "A safe space for deep personal discovery and growth",
      features: [
        "Guided self-reflection exercises",
        "Peer support groups",
        "Personal growth tracking",
        "Expert-led workshops"
      ],
      link: "/services#self-exploration",
    },
    {
      icon: BookOpen,
      title: "Research Protocol Creation",
      description: "Design rigorous psychological research methodologies",
      features: [
        "Custom research design",
        "Statistical analysis support",
        "Ethics consultation",
        "Publication guidance"
      ],
      link: "/services#research",
    },
    {
      icon: Brain,
      title: "Personality Development",
      description: "Science-based approaches to personal transformation",
      features: [
        "Evidence-based assessments",
        "Customized development plans",
        "Behavioral coaching",
        "Progress monitoring"
      ],
      link: "/services#personality",
    },
    {
      icon: Lightbulb,
      title: "Creative Writing Lab",
      description: "Express yourself through the art of words",
      features: [
        "Writing workshops",
        "Creative feedback sessions",
        "Publishing opportunities",
        "Community showcase"
      ],
      link: "/services#writing",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/80" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
                Bridge the Gap Between{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                  Mind & Potential
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Welcome to ClarityBridge Psychology Lab - where psychology, creativity, and research unite to unlock human potential through collaborative exploration.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button asChild variant="hero" size="lg" className="text-base px-8">
                <a href="http://linkedin.com/company/claritybridge8423/" target="_blank" rel="noopener noreferrer">
                  Join Our Community <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button asChild variant="glass" size="lg" className="text-base px-8">
                <Link to="/services">Explore Work</Link>
              </Button>
            </motion.div>

            
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <SectionLayout background="gradient">
        <StatsSection />
      </SectionLayout>

      {/* About Preview */}
      <SectionLayout>
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              A Space for Growth & Discovery
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              ClarityBridge was born from a passion for understanding the human mind and fostering collective growth. As a psychologist, AI researcher, and creative writer, I've created a space where science meets creativity, where research meets practice, and where individuals come together to explore the depths of human potential.
            </p>
            <Button asChild variant="outline" size="lg" className="mt-8">
              <Link to="/about#my-story">Learn My Story <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </motion.div>
        </div>
      </SectionLayout>

      {/* Expertise Areas */}
      <SectionLayout background="gradient">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
          >
            What We Offer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Explore our diverse range of services designed to support your journey of self-discovery and growth
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {expertiseAreas.map((area, index) => (
            <ExpertiseCard key={area.title} {...area} delay={index * 0.1} />
          ))}
        </div>
      </SectionLayout>

      {/* CTA Section */}
      <SectionLayout>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-accent to-primary p-12 sm:p-16 text-center"
        >
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-lg text-primary-foreground/90">
              Join a community of seekers, thinkers, and creators dedicated to understanding themselves and each other.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button asChild variant="secondary" size="lg" className="text-base px-8">
                <a href="https://discord.gg/2frExN4j" target="_blank" rel="noopener noreferrer">Join Community</a>
              </Button>
              <Button asChild size="lg" className="text-base px-8 bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
        </motion.div>
      </SectionLayout>

      <Footer />
    </div>
  );
};

export default Home;
