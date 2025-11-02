import { motion } from "framer-motion";
import { Users, BookOpen, Brain, Lightbulb, Network, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionLayout from "@/components/SectionLayout";

const Services = () => {
  const services = [
    {
      id: "self-exploration",
      icon: Users,
      title: "Self-Exploration Community",
      description: "A supportive space for deep personal discovery and authentic growth",
      features: [
        "Weekly guided self-reflection sessions",
        "Peer support groups for shared experiences",
        "Personal growth tracking tools and journals",
        "Monthly expert-led workshops on self-awareness",
        "Safe space for vulnerability and growth",
        "Community challenges and activities"
      ],
      benefits: [
        "Develop deeper self-understanding",
        "Connect with like-minded individuals",
        "Build resilience and emotional intelligence",
        "Create meaningful life changes"
      ]
    },
    {
      id: "research",
      icon: BookOpen,
      title: "Research Protocol Creation",
      description: "Design and implement rigorous psychological research methodologies",
      features: [
        "Custom research design consultation",
        "Statistical analysis and interpretation",
        "Ethics review and IRB preparation",
        "Participant recruitment strategies",
        "Data collection and management tools",
        "Publication and presentation guidance"
      ],
      benefits: [
        "Produce high-quality research",
        "Contribute to scientific knowledge",
        "Develop research expertise",
        "Build academic credentials"
      ]
    },
    {
      id: "personality",
      icon: Brain,
      title: "Personality Development",
      description: "Evidence-based approaches to sustainable personal transformation",
      features: [
        "Comprehensive personality assessments (Big Five, MBTI)",
        "Customized development roadmaps",
        "One-on-one behavioral coaching",
        "Habit formation and tracking systems",
        "Progress monitoring and adjustments",
        "Skills workshops (communication, leadership, etc.)"
      ],
      benefits: [
        "Understand your unique personality",
        "Build desired traits and behaviors",
        "Improve relationships and communication",
        "Achieve personal and professional goals"
      ]
    },
    {
      id: "writing",
      icon: Lightbulb,
      title: "Creative Writing Lab",
      description: "Express yourself and heal through the transformative art of writing",
      features: [
        "Weekly writing prompts and exercises",
        "Peer review and constructive feedback",
        "Genre-specific workshops (poetry, memoir, fiction)",
        "Writing for healing and self-expression",
        "Publishing opportunities in our anthology",
        "Author spotlight and community showcase"
      ],
      benefits: [
        "Develop your unique voice",
        "Process emotions through writing",
        "Build confidence as a writer",
        "Share your stories with the world"
      ]
    },
    {
      id: "collaboration",
      icon: MessageCircle,
      title: "Collaborative Resonance Hub",
      description: "Where diverse minds unite to create collective intelligence and breakthrough ideas",
      features: [
        "Interdisciplinary project teams",
        "Idea incubation and brainstorming sessions",
        "Community collaboration opportunities",
        "Knowledge sharing forums",
        "Discord community discussions",
        "Monthly innovation challenges"
      ],
      benefits: [
        "Amplify your ideas through collaboration",
        "Learn from diverse perspectives",
        "Contribute to meaningful projects",
        "Build lasting professional relationships"
      ]
    }
  ];

  const workItems = [
    {
      icon: Users,
      title: "Self-Exploration Community",
      description: "A safe space for deep personal discovery and growth",
      features: [
        "Guided self-reflection exercises",
        "Peer support groups",
        "Personal growth tracking",
        "Expert-led workshops",
      ],
    },
    {
      icon: BookOpen,
      title: "Research Protocol Creation",
      description: "Design rigorous psychological research methodologies",
      features: [
        "Custom research design",
        "Statistical analysis support",
        "Ethics consultation",
        "Publication guidance",
      ],
    },
    {
      icon: Brain,
      title: "Personality Development",
      description: "Science-based approaches to personal transformation",
      features: [
        "Evidence-based assessments",
        "Customized development plans",
        "Behavioral coaching",
        "Progress monitoring",
      ],
    },
    {
      icon: Lightbulb,
      title: "Creative Writing Lab",
      description: "Express yourself through the art of words",
      features: [
        "Writing workshops",
        "Creative feedback sessions",
        "Publishing opportunities",
        "Community showcase",
      ],
    },
  ] as const;

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Our{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Work
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive support for your journey of self-discovery, growth, and creative expression
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Work - Five Boxes (placeholders) */}
      <SectionLayout>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {workItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-primary to-accent">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </SectionLayout>

      {/* CTA Section */}
      <SectionLayout background="gradient">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-6 p-12 rounded-3xl bg-gradient-to-br from-primary via-accent to-primary"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Join hundreds of individuals who are already exploring, growing, and creating together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild variant="secondary" size="lg">
              <a href="https://discord.gg/2frExN4j" target="_blank" rel="noopener noreferrer">Join Community</a>
            </Button>
            <Button asChild size="lg" className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30">
              <Link to="/faqs">Ask Questions</Link>
            </Button>
          </div>
        </motion.div>
      </SectionLayout>

      <Footer />
    </div>
  );
};

export default Services;
