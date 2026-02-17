import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingIcons from "@/components/FloatingIcons";
import {
  Calculator,
  FileText,
  Building2,
  Briefcase,
  TrendingUp,
  GraduationCap,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";
import serviceAccounting from "@/assets/service-accounting.jpg";
import serviceIrs from "@/assets/service-irs.jpg";
import serviceTaxation from "@/assets/service-taxation.jpg";
import serviceConsultancy from "@/assets/service-consultancy.jpg";
import serviceAdvisory from "@/assets/service-advisory.jpg";
import serviceTraining from "@/assets/service-training.jpg";

const serviceData: Record<string, {
  title: string;
  icon: typeof Calculator;
  image: string;
  description: string;
  points: string[];
}> = {
  accounting: {
    title: "Accounting Services",
    icon: Calculator,
    image: serviceAccounting,
    description:
      "Our comprehensive accounting services are designed to keep your business finances organized, compliant, and optimized for growth. We provide end-to-end financial management solutions tailored to your specific industry and business size.",
    points: [
      "Comprehensive bookkeeping and financial record management",
      "Financial statement preparation and analysis",
      "Payroll management and processing",
      "Accounting system implementation and optimization",
      "Budgeting and financial forecasting",
      "Regulatory compliance and reporting",
    ],
  },
  irs: {
    title: "IRS Services",
    icon: FileText,
    image: serviceIrs,
    description:
      "Our IRS services provide expert representation and support when dealing with tax authorities. We protect your business interests with comprehensive audit support, tax resolution, and compliance management.",
    points: [
      "Expert representation before tax authorities",
      "IRS audit support and defense",
      "Tax resolution and dispute settlement",
      "Compliance management and monitoring",
      "Penalty abatement and relief negotiations",
      "Proactive audit risk assessment",
    ],
  },
  taxation: {
    title: "Taxation & Tax Services",
    icon: Building2,
    image: serviceTaxation,
    description:
      "Strategic tax planning and compliance services to optimize your tax position. Our team ensures you meet all obligations while taking advantage of every legitimate opportunity to minimize your tax burden.",
    points: [
      "Strategic corporate and personal tax planning",
      "VAT management and compliance",
      "Transfer pricing advisory",
      "Tax compliance and filing",
      "International tax structuring",
      "Tax incentive identification and application",
    ],
  },
  consultancy: {
    title: "Management Consultancy",
    icon: Briefcase,
    image: serviceConsultancy,
    description:
      "Our management consultancy services help organizations optimize their operations, restructure for efficiency, and develop strategies for sustainable growth. We bring practical solutions backed by deep industry expertise.",
    points: [
      "Business process optimization",
      "Organizational restructuring and design",
      "Risk management and mitigation",
      "Strategic planning and advisory",
      "Performance management systems",
      "Change management and implementation",
    ],
  },
  advisory: {
    title: "Financial Advisory Services",
    icon: TrendingUp,
    image: serviceAdvisory,
    description:
      "Our financial advisory services provide the insights and analysis needed for critical business decisions. From mergers and acquisitions to business valuations, we deliver actionable intelligence.",
    points: [
      "Financial due diligence",
      "Business valuation and appraisal",
      "Merger and acquisition advisory",
      "Investment analysis and advisory",
      "Capital raising and structuring",
      "Financial restructuring support",
    ],
  },
  training: {
    title: "Training & Development",
    icon: GraduationCap,
    image: serviceTraining,
    description:
      "We offer professional development programs designed to build capacity within your organization. Our training covers accounting standards, tax compliance, leadership, and more.",
    points: [
      "Professional development programs",
      "Accounting standards training (IFRS, GAAP)",
      "Tax compliance workshops",
      "Leadership and management development",
      "Financial literacy programs",
      "Custom corporate training solutions",
    ],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? serviceData[slug] : null;

  if (!service) {
    return (
      <div className="min-h-screen relative">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Service Not Found</h1>
          <Link to="/services" className="text-primary hover:underline">Back to Services</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen relative">
      <FloatingIcons />
      <Header />

      {/* Hero Banner */}
      <section className="relative h-[50vh] overflow-hidden">
        <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Link to="/services" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-4 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Services
              </Link>
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-xl bg-primary">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">{service.title}</h1>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">{service.description}</p>

            <h2 className="text-2xl font-bold text-foreground mb-8">What We Offer</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {service.points.map((point, i) => (
                <motion.div
                  key={i}
                  className="glass-card p-5 flex items-start gap-3 group hover:border-primary/40 transition-all"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  whileHover={{ x: 5 }}
                >
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">{point}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/contact"
                className="bg-primary px-8 py-3 rounded-md font-semibold text-primary-foreground hover:opacity-90 transition-opacity inline-block"
              >
                Get a Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
