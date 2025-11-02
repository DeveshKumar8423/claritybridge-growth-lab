import { motion } from "framer-motion";
import { Heart, Target, Eye, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionLayout from "@/components/SectionLayout";

const About = () => {
  const collaboratorImages = Object.values(
    import.meta.glob("@/assets/collaborators/*.{png,jpg,jpeg,svg}", {
      eager: true,
      import: "default",
    }) as Record<string, string>
  ) as string[];
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We believe in creating a safe, supportive environment where everyone feels heard and valued.",
    },
    {
      icon: Target,
      title: "Evidence-Based",
      description: "Our approaches are grounded in scientific research and proven psychological methodologies.",
    },
    {
      icon: Eye,
      title: "Holistic View",
      description: "We see the whole person - integrating mind, creativity, and personal context.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We're committed to delivering the highest quality guidance and research support.",
    },
  ];

  const timeline = [
    {
      year: "2023 Aug – Dec",
      title: "Journey of Self-Exploration",
      description: "Deep personal exploration and journaling to build inner clarity.",
    },
    {
      year: "2024 Jan",
      title: "Course on Counselling",
      description: "Formal training to strengthen counselling foundations.",
    },
    {
      year: "2024 Jul – Aug",
      title: "Personality & Applied Psychology",
      description: "Courses in Personality Development and Diploma in Modern Applied Psychology.",
    },
    {
      year: "2024 Sep",
      title: "Joined Life Fundies",
      description: "Began community-focused learning and collaboration at Life Fundies.",
    },
    {
      year: "2025 Jun",
      title: "Research & Protocol Design",
      description: "Collaborative resonance with Dartmouth College; research internship at IIT Kharagpur; developed the Self-Exploration Protocol.",
    },
    {
      year: "2025 Jul",
      title: "Advanced Personality Studies",
      description: "Completed courses on personality transformation and dark psychology.",
    },
    {
      year: "2025 Aug",
      title: "University of Illinois (Urbana-Champaign)",
      description: "Joined as a psycho-social intern to further applied learning.",
    },
    {
      year: "2025 Sep",
      title: "Atmashakti Community Intern",
      description: "Designed mental health protocol as a community intern.",
    },
    {
      year: "2025 Oct",
      title: "ClarityBridge Foundations",
      description: "Laid the foundations and started ClarityBridge as a movement.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              About{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ClarityBridge
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A journey from curiosity to clarity, from isolation to community, from theory to transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* My Story */}
      <SectionLayout background="gradient">
        <div id="my-story" className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">My Story</h2>
            <div className="prose prose-lg max-w-none space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                I'm <strong className="text-foreground">Devesh Kumar Gola</strong>, a psychologist, researcher, and seeker driven by one question —
                <em> “What is the meaning and purpose of my life?”</em>
              </p>
              <p className="leading-relaxed">
                That question led me from self-reflection to system design — from studying psychology to creating frameworks that make inner clarity accessible to all. Through my work at IIT Kharagpur, UIUC, and Dartmouth, and as the Co-Founder of Life Fundies, I’ve explored how belief systems, emotions, and hope shape human potential.
              </p>
              <p className="leading-relaxed">
                To turn insight into impact, I designed the Self-Exploration Protocol, Atmashakti Mental Health Protocol, and Life Fundies Volunteer Engagement Protocol — structured pathways for self-growth, emotional resilience, and community well-being.
              </p>
              <p className="leading-relaxed">
                ClarityBridge emerged from these experiences — a movement where psychology meets creativity, research meets reflection, and people rediscover meaning through connection and self-understanding.
              </p>
            </div>
          </motion.div>
        </div>
      </SectionLayout>

      {/* Mission & Vision */}
      <SectionLayout>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-primary-foreground" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To democratize psychological growth by creating accessible, evidence-based resources and a supportive community where everyone can explore their inner world, develop their potential, and contribute to collective human understanding.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/5 border border-accent/20"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-primary-foreground" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              A world where understanding ourselves is as natural as breathing. Where psychology, creativity, and technology converge to unlock human potential. Where every person has the tools, community, and courage to explore who they truly are.
            </p>
          </motion.div>
        </div>
      </SectionLayout>

      {/* Core Values */}
      <SectionLayout background="gradient">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold"
          >
            Our Core Values
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 text-center"
              >
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-primary to-accent mb-4">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </SectionLayout>

      {/* Our Collaborators */}
      <SectionLayout>
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-center mb-8"
          >
            Our Collaborators
          </motion.h2>

          <div className="overflow-hidden">
            <div className="grid grid-cols-5 gap-6 items-center">
              {(collaboratorImages.slice(0, 5)).map((src, idx) => (
                <div key={idx} className="flex justify-center">
                  <img
                    src={src as unknown as string}
                    alt={`Collaborator ${idx + 1}`}
                    className="h-20 sm:h-24 md:h-28 object-contain opacity-80 hover:opacity-100 transition-opacity"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionLayout>

      {/* Timeline */}
      <SectionLayout>
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold mb-12 text-center"
          >
            Our Journey
          </motion.h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

            {/* Timeline Items */}
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-20"
                >
                  <div className="absolute left-4 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center border-4 border-background">
                    <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                  </div>
                  <div className="p-6 rounded-xl bg-card/60 backdrop-blur-sm border border-border/50">
                    <div className="text-sm font-semibold text-primary mb-1">{item.year}</div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionLayout>

      <Footer />
    </div>
  );
};

export default About;
