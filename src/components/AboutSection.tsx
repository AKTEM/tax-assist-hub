import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Target,
  Eye,
  Heart,
  Compass,
  Lightbulb,
  Shield,
  TrendingUp,
  Users,
  Award,
  Lock,
  CheckCircle,
  BarChart3,
  PieChart,
  ArrowUpRight,
} from "lucide-react";
import aboutPerson from "@/assets/about-person.png";

const AnimatedCard = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const coreValues = [
  { icon: Shield, title: "Integrity", desc: "We behave professionally and with the highest ethical standards." },
  { icon: Award, title: "Excellence", desc: "We deliver the highest quality service in everything we do." },
  { icon: Lock, title: "Confidentiality", desc: "We protect clients' information with strict confidential discipline." },
  { icon: TrendingUp, title: "Innovation", desc: "We are dynamic and innovative, reacting with up-to-date solutions." },
  { icon: Users, title: "Client Focus", desc: "Understanding our clients and their needs is our top priority." },
  { icon: CheckCircle, title: "Quality", desc: "Quality is REST Assured — we drive continuous improvement." },
];

const approachItems = [
  "We understand our clients and their needs",
  "We make it easy for our clients to get things right",
  "We recognize our privileged access to information and protect it",
  "We behave professionally and with integrity",
  "We take pride in helping our clients to succeed",
  "We develop the skills and tools needed to do our jobs well",
  "We drive continuous improvement in everything we do",
];

const stats = [
  { value: "100+", label: "Clients Served", icon: Users },
  { value: "15+", label: "Years Experience", icon: BarChart3 },
  { value: "98%", label: "Client Satisfaction", icon: PieChart },
  { value: "50+", label: "Professionals", icon: Award },
];

const AboutSection = () => {
  const sectionRef = useRef(null);

  return (
    <section id="about" className="py-20 md:py-28 relative" ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* Hero About: Text + Stats LEFT, Image RIGHT */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left side */}
          <AnimatedCard>
            <div>
              <span className="text-primary font-semibold uppercase tracking-widest text-sm">Who We Are</span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6">
                About <span className="text-primary">Tax Assist Solutions</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Tax Assist Solutions is a firm of young and dynamic Chartered Accountants focused on providing Accounting, Financial and advisory services to companies in various sectors of the economy. We leverage on our smart approach to delivering quality services as our clients appreciate our professional competence and ability to understand and satisfy the needs of all stakeholders.
              </p>

              {/* 2x2 Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    className="glass-card p-5 text-center group hover:border-secondary/50 transition-all duration-500"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <stat.icon className="w-7 h-7 text-secondary mx-auto mb-2 group-hover:text-primary transition-colors" />
                    <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-muted-foreground text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedCard>

          {/* Right side - Image */}
          <AnimatedCard delay={0.2}>
            <div className="flex justify-center lg:justify-end">
              <img
                src={aboutPerson}
                alt="Tax professional with charts"
                className="max-h-[550px] w-auto object-contain drop-shadow-2xl"
              />
            </div>
          </AnimatedCard>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <AnimatedCard delay={0.15}>
            <motion.div
              className="glass-card p-8 h-full relative overflow-hidden group"
              whileHover={{ scale: 1.01 }}
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/15">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To continuously add value to our clients to be highly competitive within the industry they operate.
              </p>
              <ArrowUpRight className="absolute bottom-4 right-4 w-6 h-6 text-primary/30 group-hover:text-primary transition-colors" />
            </motion.div>
          </AnimatedCard>

          <AnimatedCard delay={0.2}>
            <motion.div
              className="glass-card p-8 h-full relative overflow-hidden group"
              whileHover={{ scale: 1.01 }}
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-secondary" />
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-secondary/15">
                  <Eye className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To be the leading indigenous Accounting Services firm in Africa and beyond.
              </p>
              <ArrowUpRight className="absolute bottom-4 right-4 w-6 h-6 text-secondary/30 group-hover:text-secondary transition-colors" />
            </motion.div>
          </AnimatedCard>
        </div>

        {/* Philosophy */}
        <AnimatedCard delay={0.25}>
          <div className="glass-card p-8 md:p-12 mb-20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-primary/15">
                <Lightbulb className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">Our Philosophy</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              The objective of the firm is to render the highest quality service to our clients. We are dynamic and innovative; hence we react spontaneously with up-to-date information to our clients' needs. The firm is built on a high level balance between responsiveness to the need of the clients and the highest professional standard of independence and objectivity.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              A major characteristic of the firm lies in the nature of our relationship with the clients. Partners and professional staff particularly place emphasis on maintaining independence and objectivity while at the same time building a cardinal understanding of clients' problems and getting involved in their solution.
            </p>
          </div>
        </AnimatedCard>

        {/* Core Values */}
        <AnimatedCard delay={0.1}>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Heart className="w-6 h-6 text-primary" />
              <span className="text-primary font-semibold uppercase tracking-widest text-sm">What Drives Us</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">Core Values</h3>
          </div>
        </AnimatedCard>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {coreValues.map((val, i) => (
            <AnimatedCard key={val.title} delay={0.1 + i * 0.08}>
              <motion.div
                className="glass-card p-6 group hover:border-secondary/40 transition-all duration-500 h-full"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="p-3 rounded-lg bg-secondary/10 inline-block mb-4 group-hover:bg-secondary/20 transition-colors">
                  <val.icon className="w-6 h-6 text-secondary" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">{val.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{val.desc}</p>
              </motion.div>
            </AnimatedCard>
          ))}
        </div>

        {/* Our Approach */}
        <AnimatedCard delay={0.1}>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Compass className="w-6 h-6 text-secondary" />
              <span className="text-secondary font-semibold uppercase tracking-widest text-sm">How We Work</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">Our Approach</h3>
          </div>
        </AnimatedCard>

        <div className="grid md:grid-cols-2 gap-4">
          {approachItems.map((item, i) => (
            <AnimatedCard key={i} delay={0.1 + i * 0.06}>
              <motion.div
                className="flex items-start gap-4 glass-card p-5 group hover:border-secondary/40 transition-all"
                whileHover={{ x: 5 }}
              >
                <div className="mt-1 p-1.5 rounded-full bg-secondary/15 shrink-0">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                </div>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors">{item}</p>
              </motion.div>
            </AnimatedCard>
          ))}
        </div>

        <AnimatedCard delay={0.5}>
          <div className="text-center mt-8">
            <p className="text-2xl font-bold text-primary">Quality is REST Assured.</p>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
};

export default AboutSection;
