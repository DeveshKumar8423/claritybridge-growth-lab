import { motion } from "framer-motion";
import { Clock, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionLayout from "@/components/SectionLayout";

const Articles = () => {
  const articles = [
    {
      title: "The Psychology of Self-Discovery: A Journey Within",
      excerpt: "Exploring the neuroscience and psychology behind self-awareness and how understanding ourselves can transform our lives...",
      category: "Psychology",
      author: "Devesh Kumar Gola",
      date: "March 15, 2024",
      readTime: "8 min read",
      slug: "psychology-of-self-discovery"
    },
    {
      title: "AI and Mental Health: Opportunities and Ethical Considerations",
      excerpt: "Examining how artificial intelligence is revolutionizing mental health care while addressing important ethical concerns...",
      category: "AI & Research",
      author: "Devesh Kumar Gola",
      date: "March 10, 2024",
      readTime: "10 min read",
      slug: "ai-mental-health"
    },
    {
      title: "The Power of Creative Writing in Emotional Healing",
      excerpt: "How putting pen to paper can help us process trauma, understand emotions, and find our authentic voice...",
      category: "Creative Writing",
      author: "Devesh Kumar Gola",
      date: "March 5, 2024",
      readTime: "6 min read",
      slug: "creative-writing-healing"
    },
    {
      title: "Building Personality: The Science Behind Behavioral Change",
      excerpt: "Understanding the mechanisms of personality development and how we can intentionally shape who we become...",
      category: "Personality Development",
      author: "Devesh Kumar Gola",
      date: "February 28, 2024",
      readTime: "12 min read",
      slug: "personality-behavioral-change"
    },
    {
      title: "Collaborative Intelligence: When Minds Unite",
      excerpt: "Research insights on how group dynamics and diverse perspectives enhance problem-solving and creativity...",
      category: "Research",
      author: "Devesh Kumar Gola",
      date: "February 20, 2024",
      readTime: "9 min read",
      slug: "collaborative-intelligence"
    },
    {
      title: "Mindfulness in the Digital Age: Finding Presence",
      excerpt: "Practical strategies for cultivating mindfulness and authentic presence in an increasingly digital world...",
      category: "Psychology",
      author: "Devesh Kumar Gola",
      date: "February 15, 2024",
      readTime: "7 min read",
      slug: "mindfulness-digital-age"
    }
  ];

  const categories = ["All", "Psychology", "AI & Research", "Creative Writing", "Personality Development", "Research"];

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
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                category === "All"
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
            <div className="grid md:grid-cols-2 gap-6">
              <div className="h-64 md:h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-6xl">🧠</div>
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold mb-4 w-fit">
                  Featured
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  {articles[0].title}
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {articles[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{articles[0].author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{articles[0].readTime}</span>
                  </div>
                </div>
                <Button variant="hero" asChild>
                  <Link to={`/articles/${articles[0].slug}`}>
                    Read Full Article <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Article Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.slice(1).map((article, index) => (
            <motion.div
              key={article.slug}
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
                    <Link to={`/articles/${article.slug}`}>
                      Read More <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
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
            <Link to="/join">Subscribe Now</Link>
          </Button>
        </motion.div>
      </SectionLayout>

      <Footer />
    </div>
  );
};

export default Articles;
