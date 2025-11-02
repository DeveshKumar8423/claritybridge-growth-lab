import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionLayout from "@/components/SectionLayout";

const FAQs = () => {
  const faqs = [
    {
      q: "What is ClarityBridge?",
      a: "ClarityBridge is a psychology and personal-growth lab where creativity, research, and community come together to explore human potential.",
    },
    {
      q: "Who is ClarityBridge for?",
      a: "For seekers, learners, and creators interested in self-exploration, research-backed growth, and meaningful collaboration.",
    },
    {
      q: "How can I join the community?",
      a: "Click Join Community to join our Discord and follow the onboarding steps.",
    },
    {
      q: "What kind of work do you do?",
      a: "We design self-exploration protocols, run collaborative research, and build creative and community-driven initiatives.",
    },
    {
      q: "Do you offer 1:1 guidance?",
      a: "We focus on structured programs and community support; limited 1:1 guidance may be available during specific initiatives.",
    },
    {
      q: "Are there any prerequisites to join?",
      a: "No. A willingness to learn, reflect, and collaborate is enough.",
    },
    {
      q: "Is participation free?",
      a: "Community access is free. Specific programs or workshops may have separate requirements announced in advance.",
    },
    {
      q: "How do I contribute to research projects?",
      a: "Watch our Discord for calls for collaboration and research updates, then apply to join relevant projects.",
    },
    {
      q: "Where can I ask questions?",
      a: "Use the FAQs page for quick answers and the Contact page or Discord for detailed queries.",
    },
    {
      q: "How can I stay updated?",
      a: "Join Discord and enable notifications; we also share updates on the site and community channels.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">FAQs</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              अक्सर पूछे जाने वाले सवाल
            </p>
          </motion.div>
        </div>
      </section>

      <SectionLayout>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="p-6 rounded-xl bg-card/60 backdrop-blur-sm border border-border/50"
            >
              <h3 className="text-lg font-semibold mb-2">{f.q}</h3>
              <p className="text-muted-foreground">{f.a}</p>
            </motion.div>
          ))}
        </div>
      </SectionLayout>

      <Footer />
    </div>
  );
};

export default FAQs;


