import { motion } from "framer-motion";
import { Users, BookOpen, Brain, Lightbulb, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionLayout from "@/components/SectionLayout";
import ExpertiseCard from "@/components/ExpertiseCard";

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
      icon: Network,
      title: "Collaborative Resonance Hub",
      description: "Where diverse minds unite to create collective intelligence and breakthrough ideas",
      features: [
        "Interdisciplinary project teams",
        "Idea incubation and brainstorming sessions",
        "Collaborative research opportunities",
        "Knowledge sharing forums",
        "Discord and GitHub collaboration tools",
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
                Services
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive support for your journey of self-discovery, growth, and creative expression
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview Cards */}
      <SectionLayout>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {services.slice(0, 5).map((service, index) => (
            <ExpertiseCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features.slice(0, 3)}
              link={`#${service.id}`}
              delay={index * 0.1}
            />
          ))}
        </div>
      </SectionLayout>

      {/* Detailed Service Sections */}
      {services.map((service, index) => {
        const Icon = service.icon;
        const isEven = index % 2 === 0;
        
        return (
          <SectionLayout
            key={service.id}
            background={isEven ? "gradient" : "default"}
          >
            <div id={service.id} className="scroll-mt-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl mx-auto"
              >
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Content */}
                  <div className={`space-y-6 ${isEven ? "" : "lg:order-2"}`}>
                    <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-primary to-accent">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold">{service.title}</h2>
                    <p className="text-lg text-muted-foreground">{service.description}</p>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">What You'll Get</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-primary mt-1">✓</span>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Benefits Card */}
                  <div className={`${isEven ? "" : "lg:order-1"}`}>
                    <div className="p-8 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/50">
                      <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
                      <ul className="space-y-4">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-primary-foreground text-xs font-bold">{idx + 1}</span>
                            </div>
                            <span className="text-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <Button asChild variant="hero" className="w-full mt-8">
                        <Link to="/join">Get Started</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </SectionLayout>
        );
      })}

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
              <Link to="/join">Join Community</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/contact">Ask Questions</Link>
            </Button>
          </div>
        </motion.div>
      </SectionLayout>

      <Footer />
    </div>
  );
};

export default Services;
