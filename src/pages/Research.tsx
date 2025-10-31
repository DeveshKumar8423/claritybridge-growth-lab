import { motion } from "framer-motion";
import { Github, MessageCircle, BookOpen, Users, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionLayout from "@/components/SectionLayout";

const Research = () => {
  const projects = [
    {
      title: "AI & Mental Health Assessment",
      status: "Active",
      description: "Developing machine learning models to assist in early detection of mental health concerns",
      collaborators: 8,
      progress: 65
    },
    {
      title: "Personality Trait Prediction",
      status: "Active",
      description: "Research on predicting personality traits from behavioral data and linguistic patterns",
      collaborators: 5,
      progress: 40
    },
    {
      title: "Creative Writing Therapy",
      status: "Planning",
      description: "Exploring the therapeutic benefits of structured creative writing interventions",
      collaborators: 3,
      progress: 15
    },
    {
      title: "Collaborative Intelligence Study",
      status: "Recruiting",
      description: "Investigating how group dynamics enhance problem-solving and creativity",
      collaborators: 12,
      progress: 30
    }
  ];

  const researchAreas = [
    {
      icon: BookOpen,
      title: "Psychology Research",
      description: "Clinical psychology, personality studies, and behavioral science"
    },
    {
      icon: Zap,
      title: "AI Applications",
      description: "Machine learning for mental health, NLP for psychological analysis"
    },
    {
      icon: Users,
      title: "Community Studies",
      description: "Social dynamics, group therapy effectiveness, peer support research"
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
              Research &{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Collaboration Lab
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join our open research community where curiosity meets rigor, and collaboration drives discovery
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <SectionLayout>
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            How Collaboration Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            We use modern tools to make research accessible and collaborative
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/50"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-3">Discord Community</h3>
            <p className="text-muted-foreground mb-4">
              Real-time discussions, research channels, resource sharing, and peer support. Connect with fellow researchers and get instant feedback.
            </p>
            <Button variant="glass" className="w-full" asChild>
              <a href="https://discord.gg/claritybridge" target="_blank" rel="noopener noreferrer">
                Join Discord
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/50"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4">
              <Github className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-3">GitHub Repository</h3>
            <p className="text-muted-foreground mb-4">
              Version-controlled research, open-source code, collaborative projects, and transparent methodology. Contribute and learn from others.
            </p>
            <Button variant="glass" className="w-full" asChild>
              <a href="https://github.com/claritybridge-lab" target="_blank" rel="noopener noreferrer">
                View GitHub
              </a>
            </Button>
          </motion.div>
        </div>
      </SectionLayout>

      {/* Research Areas */}
      <SectionLayout background="gradient">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold"
          >
            Our Research Focus Areas
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {researchAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card/60 backdrop-blur-sm border border-border/50 text-center"
              >
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-primary to-accent mb-4">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{area.title}</h3>
                <p className="text-sm text-muted-foreground">{area.description}</p>
              </motion.div>
            );
          })}
        </div>
      </SectionLayout>

      {/* Active Projects */}
      <SectionLayout>
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            Active Research Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Join an ongoing project or propose your own research idea
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === "Active" ? "bg-green-500/20 text-green-600 dark:text-green-400" :
                      project.status === "Recruiting" ? "bg-blue-500/20 text-blue-600 dark:text-blue-400" :
                      "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400"
                    }`}>
                      {project.status}
                    </span>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{project.collaborators}</span>
                    </div>
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-semibold">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="glass" className="w-full" asChild>
                    <Link to="/join">Join This Project</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
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
          <Target className="w-16 h-16 text-primary-foreground mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground">
            Have a Research Idea?
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            We're always looking for innovative research proposals. Share your idea and find collaborators to bring it to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild variant="secondary" size="lg">
              <Link to="/join">Propose a Project</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </motion.div>
      </SectionLayout>

      <Footer />
    </div>
  );
};

export default Research;
