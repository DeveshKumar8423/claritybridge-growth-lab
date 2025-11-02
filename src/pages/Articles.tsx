import { motion } from "framer-motion";
import { Clock, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionLayout from "@/components/SectionLayout";
import { useState, useMemo } from "react";

const Articles = () => {
  const featured = {
    title: "10-Point Self-Exploration Protocol",
    excerpt: `The 10-Point Self-Exploration Protocol is a roadmap for self-understanding, moving you from "autopilot" to intentional living. It covers identifying your Value System, Broader Life Planning, gaining Clarity by analyzing past Strategies and Lessons, and organizing priorities with a Mind Replica. The protocol assesses where you stand on Maslow's Hierarchy, pinpoints "Death Valleys" (setbacks), and emphasizes evolving your Character and Skill Set while adapting to external systems. This ongoing journey provides a lens for continual growth.`,
    author: "ClarityBridge",
    readTime: "",
    url: "https://drive.google.com/file/d/14QCxUEL1fmld6ysJFUKSvV0NYYqoWDR6/view?usp=sharing",
  } as const;

  const globExact = import.meta.glob("@/assets/selfexploration.{png,jpg,jpeg,svg}", {
    eager: true,
    import: "default",
  }) as Record<string, string>;
  const globAlt = import.meta.glob("@/assets/self-exploration*.{png,jpg,jpeg,svg}", {
    eager: true,
    import: "default",
  }) as Record<string, string>;
  const selfExplorationImage = (Object.values(globExact)[0] || Object.values(globAlt)[0]) as string | undefined;

  const articles = [
    {
      title: "Self Exploration — Morals, Ethics and Values",
      excerpt: "Foundations of self-exploration through morals, beliefs, values, culture, and environment.",
      category: "Creative Writing",
      author: "Devesh Kumar Gola",
      date: "Oct 1, 2025",
      readTime: "2 min read",
      url: "https://medium.com/@devesh8423/self-exploration-morals-ethics-and-values-c2e4e26ccd40",
    },
    {
      title: "The Harder Truth #1",
      excerpt: "Choose the harder right over the easier wrong—build strength, voice, and purpose.",
      category: "Personality Development",
      author: "Devesh Kumar Gola",
      date: "Sep 29, 2025",
      readTime: "2 min read",
      url: "https://medium.com/@devesh8423/the-harder-truth-1-79ba0621015f",
    },
    {
      title: "Self Exploration — Reality of Life",
      excerpt: "On discovering the reality of life and self—towards meaning and clarity.",
      category: "Creative Writing",
      author: "Devesh Kumar Gola",
      date: "Sep 15, 2025",
      readTime: "2 min read",
      url: "https://medium.com/@devesh8423/self-exploration-reality-of-life-64945b9eef60",
    },
  ];

  const categories = ["All", "Psychology", "AI & Research", "Creative Writing", "Personality Development", "Research"];

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const filteredArticles = useMemo(() => {
    if (selectedCategory === "All") return articles;
    return articles.filter((a) => a.category === selectedCategory);
  }, [articles, selectedCategory]);

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
              Articles &{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Insights
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Exploring psychology, creativity, research, and the human experience through writing
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <SectionLayout>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-primary to-accent text-primary-foreground"
                  : "bg-card/60 border border-border/50 hover:border-primary/50 hover:bg-card/80"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Card className="overflow-hidden bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
            <div className="p-6 md:p-8">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold mb-4 w-fit">
                  Featured
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  {featured.title}
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{featured.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{featured.readTime}</span>
                  </div>
                </div>
                <Button variant="hero" asChild>
                  <a href={featured.url} target="_blank" rel="noopener noreferrer">
                    Read Full Protocol <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
          </Card>
        </motion.div>

        {/* Article Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-elegant)] group">
                <CardHeader>
                  <div className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold mb-3 w-fit">
                    {article.category}
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-base line-clamp-3">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                    <span>{article.date}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="glass" className="w-full group-hover:border-primary/50" asChild>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                      Read on Medium <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionLayout>

      {/* Newsletter CTA */}
      <SectionLayout background="gradient">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center space-y-6 p-12 rounded-3xl bg-gradient-to-br from-primary via-accent to-primary"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground">
            Never Miss an Article
          </h2>
          <p className="text-lg text-primary-foreground/90">
            Join our community to receive new articles, research insights, and creative writing directly in your inbox.
          </p>
          <Button asChild variant="secondary" size="lg" className="mt-4">
            <a href="https://medium.com/@devesh8423" target="_blank" rel="noopener noreferrer">Subscribe Now</a>
          </Button>
        </motion.div>
      </SectionLayout>

      <Footer />
    </div>
  );
};

export default Articles;
