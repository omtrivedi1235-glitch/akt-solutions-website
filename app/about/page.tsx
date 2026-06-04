import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeIn, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal"
import { Users, Target, Award, Clock, CheckCircle } from "lucide-react"
import Image from "next/image"

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Every project is executed with meticulous attention to detail and adherence to specifications.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with airport authorities, contractors, and stakeholders for seamless delivery.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Our commitment to quality has earned us recognition as a trusted partner in aviation engineering.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "On-time delivery and consistent performance are the hallmarks of every AKT Solutions project.",
  },
]

const services = [
  "Design project management",
  "Planning and systems project management",
  "Procurement coordination",
  "Information management",
  "All-inclusive project control",
  "Applicable and relevant design experience",
  "Project administration",
  "Daily inspection",
  "Project documentation",
  "Submittal review/tenant permit reviews",
  "Design support",
  "Constructability reviews",
  "Value engineering",
  "Testing and commissioning systems",
  "Contractor oversight",
  "Procedures development",
  "Site investigation",
  "QA/QC",
  "Scheduling",
  "Permitting",
  "Meeting attendance/planning",
  "Construction security",
  "Document control and management",
  "Closeout support",
]

const featuredServices = [
  "Ebuilder",
  "Website development",
]

const specializations = [
  "Security Access and Surveillance",
  "CCTV Systems (IP based, analog, high res, hybrid, etc.)",
  "Automated Parking Guidance Systems",
  "Terminal Announcement Systems",
  "In-Line Baggage Systems",
  "Fire Alarm Systems",
  "Automatic Vehicle Identification Systems",
  "FID/BID/MUFID Systems",
  "Automated Secure Exit Portals",
  "Digital Recording (DVR, NVR, VMS, etc.)",
  "Anti-Backflow Systems",
  "Universal Cable Distribution Systems (MDF, IDF, etc.)",
]

const team = [
  {
    name: "Kalpesh Trivedi",
    role: "Founder & President",
    description: "25+ years of experience leading aviation infrastructure, engineering, and project management initiatives across complex operational environments, with expertise in large-scale coordination and strategic project execution.",
    image: "/kalpesh-trivedi.jpeg",
  },
  {
    name: "Daniel Drumm",
    role: "Project Manager",
    description: "30+ years of experience overseeing infrastructure, field operations, and large-scale project coordination across aviation and commercial environments.",
    image: "/daniel-drumm.png",
  },
  {
    name: "Greg Furey",
    role: "Construction Manager",
    description: "Experienced construction leader specializing in commercial, medical, and institutional projects with expertise in scheduling, site coordination, and contractor management.",
    image: "/greg-furey.png",
  },
  {
    name: "Keith McCall",
    role: "Project Manager",
    description: "30+ years of experience overseeing airport security technologies, CCTV integration, power systems, and complex field operations as an infrastructure and surveillance systems specialist.",
    image: "/keith-mccall.png",
  },
  {
    name: "Om Trivedi",
    role: "IT Systems Coordinator",
    description: "Specialization in digital systems, technical operations, and organizational support across projects.",
    image: "/om-trivedi.png",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 overflow-hidden min-h-[50vh] flex items-center">
        {/* Background Image with Blur and Red Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/about-airport.png"
            alt="Architectural floor plan and project planning"
            fill
            className="object-cover blur-[2px]"
            priority
          />
          <div className="absolute inset-0 bg-primary/40" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <FadeIn className="max-w-3xl">
            <p className="text-white font-medium tracking-wide uppercase mb-4">About Us</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Excellence for Aviation Infrastructure
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              AKT Solutions LLC specializes in project and construction management, technical consulting, 
              inspections, and construction-phase support for complex airport, commercial, and industrial 
              infrastructure developments.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal direction="left">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">What We Do</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our project management services include defining client needs, preparing bid documents, 
                bid analysis, construction review, payment certification, contract 
                administration, and warranty inspections.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Projects include new facilities, renovations, repairs, and remodeling. We specialize 
                in electrical systems, special systems, and baggage handling systems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                AKT Solutions staff has the knowledge of specialized practices and limitations 
                associated with transportation and aviation construction, bringing deep expertise to every project we undertake.


                We specialize in working with Airports, Airlines, TSA, CBP, and local authorities
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.1}>
              <div className="bg-secondary rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Specializations</h3>
              <ul className="space-y-3">
                {specializations.map((specialization) => (
                  <li key={specialization} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{specialization}</span>
                  </li>
                ))}
              </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <p className="text-primary font-medium tracking-wide uppercase mb-2">Our Services</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Comprehensive Aviation Construction Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              AKT Solutions provides a full range of services to support aviation construction projects from inception to closeout.
            </p>
          </ScrollReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" stagger={0.04}>
            {services.map((service) => (
              <StaggerItem key={service}>
                <div className="flex items-start gap-3 bg-background rounded-lg p-4 h-full">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground text-sm">{service}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <StaggerContainer
            className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:flex lg:flex-wrap lg:justify-center lg:max-w-2xl lg:mx-auto"
            stagger={0.1}
          >
            {featuredServices.map((service) => (
              <StaggerItem key={service} className="w-full lg:w-auto">
                <div className="flex items-start gap-3 bg-background rounded-lg p-4 h-full lg:min-w-[220px]">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground text-sm">{service}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <p className="text-primary font-medium tracking-wide uppercase mb-2">Our Values</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              What Drives Us Forward
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <p className="text-primary font-medium tracking-wide uppercase mb-2">Our Team</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Leadership You Can Trust
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8" stagger={0.08}>
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <div className="bg-background rounded-xl border border-border p-8 text-center hover:border-primary/30 transition-colors h-full">
                {member.image ? (
                  <div className="w-20 h-20 rounded-full mx-auto mb-6 overflow-hidden relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className={`object-cover ${
                        member.image.includes("om-trivedi")
                          ? "scale-115 object-[50%_6%]"
                          : member.image.includes("daniel-drumm")
                          ? "scale-125 object-[42%_10%]"
                          : member.image.includes("keith-mccall")
                          ? "scale-100 object-center"
                          : member.image.includes("greg-furey")
                          ? "scale-110 object-center"
                          : "scale-125"
                      }`}
                    />
                  </div>
                ) : (
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-primary">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-medium text-sm mb-4">{member.role}</p>
                <p className="text-muted-foreground">{member.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="max-w-3xl mx-auto text-center" direction="none">
            <p className="text-primary font-medium tracking-wide uppercase mb-2">Our Mission</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
              Delivering Excellence in Aviation Construction
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              To advance aviation infrastructure through innovative engineering solutions, 
              exceptional project management, and unwavering commitment to safety and quality. 
              We believe that modern airports are the gateways to global connectivity, and 
              our work directly contributes to making travel safer, more efficient, and more 
              enjoyable for millions of passengers each year.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
