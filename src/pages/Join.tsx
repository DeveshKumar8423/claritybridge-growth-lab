import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Sparkles, Users, BookOpen, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionLayout from "@/components/SectionLayout";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(255),
  interests: z.array(z.string()).min(1, "Please select at least one interest"),
  reason: z.string().min(20, "Please tell us more (at least 20 characters)").max(1000),
  newsletter: z.boolean().default(true),
});

const Join = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      interests: [],
      reason: "",
      newsletter: true,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Application Submitted! 🎉",
      description: "Thank you for joining ClarityBridge. We'll be in touch soon via email.",
    });
    form.reset();
  };

  const interestOptions = [
    { id: "self-exploration", label: "Self-Exploration" },
    { id: "research", label: "Research & Protocols" },
    { id: "personality", label: "Personality Development" },
    { id: "writing", label: "Creative Writing" },
    { id: "collaboration", label: "Collaborative Projects" },
    { id: "ai-psychology", label: "AI & Psychology" },
  ];

  const benefits = [
    {
      icon: Users,
      title: "Supportive Community",
      description: "Connect with like-minded individuals on their growth journey"
    },
    {
      icon: BookOpen,
      title: "Exclusive Resources",
      description: "Access research papers, workshops, and learning materials"
    },
    {
      icon: Heart,
      title: "Personal Growth",
      description: "Structured programs to support your development"
    },
    {
      icon: Sparkles,
      title: "Collaborative Projects",
      description: "Participate in research and creative initiatives"
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
              Join Our{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Community
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Become part of a growing community dedicated to self-discovery, research, and creative expression
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <SectionLayout>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card/60 backdrop-blur-sm border border-border/50 text-center"
              >
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-primary to-accent mb-4">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Form Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm border border-border/50">
              <h2 className="text-2xl font-bold mb-6">Membership Application</h2>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
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
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="interests"
                    render={() => (
                      <FormItem>
                        <FormLabel>What interests you? (Select all that apply)</FormLabel>
                        <div className="grid grid-cols-2 gap-3 mt-2">
                          {interestOptions.map((option) => (
                            <FormField
                              key={option.id}
                              control={form.control}
                              name="interests"
                              render={({ field }) => (
                                <FormItem className="flex items-center space-x-2 space-y-0">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(option.id)}
                                      onCheckedChange={(checked) => {
                                        const value = field.value || [];
                                        if (checked) {
                                          field.onChange([...value, option.id]);
                                        } else {
                                          field.onChange(value.filter((v) => v !== option.id));
                                        }
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="text-sm font-normal cursor-pointer">
                                    {option.label}
                                  </FormLabel>
                                </FormItem>
                              )}
                            />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="reason"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Why do you want to join ClarityBridge?</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your goals, what you hope to gain, or what you'd like to contribute..."
                            className="min-h-32"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="newsletter"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <FormLabel className="text-sm font-normal cursor-pointer">
                          I'd like to receive newsletters and updates
                        </FormLabel>
                      </FormItem>
                    )}
                  />

                  <Button type="submit" variant="hero" className="w-full" size="lg">
                    Submit Application
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
              <h3 className="text-2xl font-bold mb-4">What Happens Next?</h3>
              <ol className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Application Review</h4>
                    <p className="text-sm text-muted-foreground">
                      We review your application within 2-3 business days
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Welcome Email</h4>
                    <p className="text-sm text-muted-foreground">
                      You'll receive access to our Discord, GitHub, and resources
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Onboarding</h4>
                    <p className="text-sm text-muted-foreground">
                      A brief intro call to help you get started
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Start Your Journey</h4>
                    <p className="text-sm text-muted-foreground">
                      Begin exploring, connecting, and growing with the community
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="p-8 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50">
              <h3 className="text-xl font-bold mb-4">Questions?</h3>
              <p className="text-muted-foreground mb-4">
                If you have any questions about membership or our community, feel free to reach out.
              </p>
              <Button variant="glass" className="w-full" asChild>
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </SectionLayout>

      <Footer />
    </div>
  );
};

export default Join;
