import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Building2, Shield, HardHat, CheckCircle2, Award } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeIn, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal"

const services = [
  {
    icon: Building2,
    title: "Terminal Development",
    description: "Comprehensive planning and management of terminal expansion and modernization projects.",
  },
  {
    icon: Shield,
    title: "Technology & Security Systems",
    description: "IT infrastructure, security systems, transportation, and integrated technology solutions for airport operations.",
  },
  {
    icon: HardHat,
    title: "Construction Management",
    description: "Full-service construction oversight ensuring on-time, on-budget project delivery.",
  },
]

const stats = [
  { value: "10+", label: "Projects" },
  { value: "$100M+", label: "Projects Managed" },
  { value: "100%", label: "Client Satisfaction" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image with Blur and Red Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/hero-airport.png"
            alt="Airport background"
            fill
            className="object-cover blur-[1px]"
            priority
          />
          <div className="absolute inset-0 bg-primary/40" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <FadeIn className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className="text-balance">Building the Future of</span>{" "}
              <span className="text-primary-foreground">Aviation Infrastructure</span>
            </h1>
            <p className="text-lg text-white/90 mb-8 max-w-2xl leading-relaxed">
              AKT Solutions delivers project and construction management services 
              at Philadelphia International Airport, ensuring world-class infrastructure 
              for one of the nation&apos;s busiest airports.
            </p>
            <FadeIn delay={0.2} className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                View Our Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-white/50 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
              >
                Get in Touch
              </Link>
            </FadeIn>
          </FadeIn>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 lg:gap-x-24" stagger={0.15}>
            {stats.map((stat) => (
              <StaggerItem key={stat.label} className="text-center min-w-[140px]">
                <div className="text-5xl sm:text-6xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-base text-primary-foreground/80 uppercase tracking-wide">
                  {stat.label}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <p className="text-primary font-medium tracking-wide uppercase mb-2">Our Services</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Comprehensive Airport Solutions
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <div className="bg-card p-8 rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <p className="text-primary font-medium tracking-wide uppercase mb-2">Why AKT Solutions</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Trusted Partner for Airport Infrastructure
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                With extensive experience at Philadelphia International Airport, 
                AKT Solutions has established itself as the premier project 
                management firm for aviation infrastructure.
              </p>
              <StaggerContainer className="space-y-4" stagger={0.08}>
                {[
                  "FAA-compliant project delivery",
                  "24/7 operational coordination",
                  "Minimized disruption to airport operations",
                  "Local expertise with national standards",
                ].map((item) => (
                  <StaggerItem key={item}>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.15}>
              <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-6 w-6 text-primary" />
                <span className="text-primary font-semibold uppercase tracking-wide text-sm">Latest News</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                CMAA Project of the Year Award Winner
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                AKT Solutions is proud to announce that we have won the CMAA Mid-Atlantic Chapter 
                Project of the Year Award in the Technology &amp; Innovation category for our 
                Philadelphia International Airport Terminal D &amp; E Secure Exit Lanes Upgrade Project, 
                in collaboration with Michael Baker International.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image 
                    src="/cmaa-award-1.png" 
                    alt="AKT Solutions team receiving CMAA Project of the Year Award" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image 
                    src="/cmaa-award-2.png" 
                    alt="AKT Solutions and Michael Baker International team at CMAA Awards ceremony" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" direction="none">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how AKT Solutions can help bring your engineering and technology 
            infrastructure project to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            Contact Us Today
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  )
}
