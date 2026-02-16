import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Calculator,
  FileText,
  Building2,
  Briefcase,
  GraduationCap,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

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

const services = [
  {
    icon: Calculator,
    title: "Accounting Services",
    desc: "Comprehensive bookkeeping, financial statement preparation, payroll management, and accounting system implementation to keep your business finances organized and compliant.",
    color: "primary" as const,
  },
  {
    icon: FileText,
    title: "IRS Services",
    desc: "Expert representation before tax authorities, IRS audit support, tax resolution, and compliance management to protect your business interests.",
    color: "secondary" as const,
  },
  {
    icon: Building2,
    title: "Taxation & Tax Services",
    desc: "Strategic tax planning, corporate and personal tax compliance, VAT management, transfer pricing, and tax advisory to optimize your tax position.",
    color: "primary" as const,
  },
  {
    icon: Briefcase,
    title: "Management Consultancy",
    desc: "Business process optimization, organizational restructuring, risk management, and strategic advisory to drive operational efficiency and growth.",
    color: "secondary" as const,
  },
  {
    icon: TrendingUp,
    title: "Financial Advisory Services",
    desc: "Financial due diligence, business valuation, merger and acquisition support, and investment advisory for informed business decisions.",
    color: "primary" as const,
  },
  {
    icon: GraduationCap,
    title: "Training & Development",
    desc: "Professional development programs, accounting standards training, tax compliance workshops, and leadership development for your team.",
    color: "secondary" as const,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-card/50" />
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedCard>
          <div className="text-center mb-16">
            <span className="text-primary font-semibold uppercase tracking-widest text-sm">What We Offer</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We are passionate and dedicated to providing comprehensive financial services tailored to your business needs.
            </p>
          </div>
        </AnimatedCard>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimatedCard key={service.title} delay={0.1 + i * 0.08}>
              <motion.div
                className="glass-card p-8 h-full group cursor-pointer relative overflow-hidden"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`absolute top-0 left-0 w-full h-0.5 ${service.color === "primary" ? "bg-primary" : "bg-secondary"} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                
                <div className={`p-4 rounded-xl ${service.color === "primary" ? "bg-primary/10" : "bg-secondary/10"} inline-block mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-8 h-8 ${service.color === "primary" ? "text-primary" : "text-secondary"}`} />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{service.desc}</p>
                
                <div className={`flex items-center gap-2 ${service.color === "primary" ? "text-primary" : "text-secondary"} font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
