import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageCircle, MapPin, Send, Linkedin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionLayout from "@/components/SectionLayout";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(255),
  subject: z.string().min(5, "Subject must be at least 5 characters").max(200),
  message: z.string().min(20, "Message must be at least 20 characters").max(1000),
});

const Contact = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Message Sent! ✉️",
      description: "Thank you for reaching out. We'll get back to you within 24-48 hours.",
    });
    form.reset();
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "Email Us",
      link: "mailto:deveshkumar8423gola@gmail.com"
    },
    {
      icon: MessageCircle,
      title: "Discord Community",
      content: "Open Discord",
      link: "https://discord.gg/"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      content: "Visit LinkedIn",
      link: "http://linkedin.com/company/claritybridge8423/"
    },
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
              Get in{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have questions? Want to collaborate? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <SectionLayout>
        <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            const content = info.link ? (
              <Button asChild variant="glass" className="mt-2">
                <a
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {info.content}
                </a>
              </Button>
            ) : null;

            return (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 text-center"
              >
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-primary to-accent mb-4">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">{info.title}</h3>
                {content}
              </motion.div>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm border border-border/50">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="What's this about?" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us more about your inquiry..."
                            className="min-h-40"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" variant="hero" className="w-full" size="lg">
                    Send Message <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20">
              <h3 className="text-2xl font-bold mb-4">Why Reach Out?</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">General Inquiries</h4>
                    <p className="text-sm text-muted-foreground">
                      Questions about our services or community
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Collaboration Opportunities</h4>
                    <p className="text-sm text-muted-foreground">
                      Interested in partnering or collaborating on research
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Speaking & Workshops</h4>
                    <p className="text-sm text-muted-foreground">
                      Invite Devesh for talks or workshop facilitation
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Media & Press</h4>
                    <p className="text-sm text-muted-foreground">
                      Interview requests or press inquiries
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50">
              <h3 className="text-xl font-bold mb-4">Response Time</h3>
              <p className="text-muted-foreground mb-4">
                We typically respond within <strong className="text-foreground">24-48 hours</strong> during business days. For urgent matters, please mention "URGENT" in the subject line.
              </p>
              <p className="text-sm text-muted-foreground">
                Looking to join? <a href="/join" className="text-primary hover:underline">Apply here</a> instead.
              </p>
            </div>
          </motion.div>
        </div>
      </SectionLayout>

      <Footer />
    </div>
  );
};

export default Contact;
