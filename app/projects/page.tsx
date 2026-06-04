"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeIn, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal"
import { ArrowRight, Calendar, DollarSign } from "lucide-react"

const projects = [
  {
    title: "Automated Parking Guidance & CCTV Systems: Phase 1",
    category: "Technology & Security",
    status: "Completed",
    year: "2025",
    value: "$15M",
    description: "AKT Solutions provided planning, programming, and PM/CM services for the deployment of new Automated Parking Guidance (APGS) & CCTV Systems for 4,400 parking spots in three garages (AE, AW, and B), including all required infrastructure.",
    image: "/parking-guidance.png",
    highlights: [
      "1,200 camera-based sensors installed",
      "122 aisle directional signs & 4 monument signs",
      "260 new cameras for operation monitoring",
    ],
  },
  {
    title: "Automated Secure Exit Lane Portals Upgrades: Phase 1",
    category: "Technology & Security",
    status: "Completed",
    year: "2025",
    value: "$10M",
    description: "AKT Solutions provided planning, programming, and PM/CM services for the exit lane upgrade, including eight new Dormakaba unmanned exit lanes at Terminal D and E with complete area renovations.",
    image: "/exit-lanes.png",
    highlights: [
      "8 new automated exit lanes (4 per terminal)",
      "New terrazzo flooring, ceiling, and lighting",
      "CCTV and access control system integration",
    ],
  },
  {
    title: "Multi-User Flight Information Display (MUFIDS) Upgrades: Phase 1",
    category: "Terminal Systems",
    status: "Completed",
    year: "2026",
    value: "$10M",
    description: "AKT Solutions provided planning, programming, and PM/CM services for the installation of new DVLED video wall systems across Terminal AW through E ticket lobbies, including signs over ticket counters and video walls at exit lanes and CBP areas.",
    image: "/mufids-phase-1.png",
    highlights: [
      "5 ticket lobby video wall systems",
      "DVLED signs over ticket counters",
      "Video walls at Terminal D & E exit lanes",
    ],
  },
  {
    title: "Automated Parking Guidance & CCTV Systems: Phase 2",
    category: "Technology & Security",
    status: "In Progress",
    year: "2028",
    value: "TBD",
    description: "AKT Solutions provides planning, programming, and PM/CM services for Phase 2 Automated Parking Guidance (APG) and CCTV Systems. TKH is deploying APGs and CCTV systems for 7,200+ parking spaces across Parking Garages C through F.",
    image: "/parking-guidance-phase-2.png",
    highlights: [
      "New camera deployment in Parking Garages C, D, E, and F",
      "APG systems for 7,200+ parking spaces",
      "Expanded guidance and monitoring across four parking garages",
    ],
  },
  {
    title: "PHL Automated Exit Lane Program: Phase 2",
    category: "Technology & Security",
    status: "In Planning",
    year: "2029",
    value: "TBD",
    description: "AKT Solutions will provide planning, programming, and PM/CM services for Phase 2 of the automated exit lane program covering Terminal A-East and F with new exit lane installations.",
    image: "/phl-exit-lane-phase-2.png",
    highlights: [
      "Terminal A-East new exit lanes",
      "Terminal F new exit lanes",
      "Construction phase upcoming",
    ],
  },
  {
    title: "Multi-User Flight Information Display (MUFIDS) Upgrades: Phase 2",
    category: "Terminal Systems",
    status: "In Progress",
    year: "2027",
    value: "TBD",
    description: "AKT Solutions provides planning, programming, and PM/CM services for Phase 2 MUFIDS upgrades, expanding DVLED display systems across additional terminal areas and operational zones at PHL.",
    image: "/mufids-phase-2.png",
    highlights: [
      "Expand digital display systems",
      "Additional DVLED signage deployment",
      "Integration with existing Phase 1 infrastructure",
    ],
  },
  {
    title: "Video Surveillance System (VSS) Upgrade Program: Phase 2B",
    category: "Technology & Security",
    status: "In Progress",
    year: "2027",
    value: "TBD",
    description: "AKT Solutions provides planning, programming, and PM/CM services for Phase 2B surveillance upgrades, deploying new camera systems across Terminals D and E.",
    image: "/vss-project.png",
    highlights: [
      "900 new cameras in Terminals D & E",
      "Terminal surveillance infrastructure upgrades",
      "Integration with existing VSS program systems",
    ],
  },
  {
    title: "Video Surveillance System (VSS) Upgrade Program: Phase 3",
    category: "Technology & Security",
    status: "In Planning",
    year: "2030",
    value: "TBD",
    description: "AKT Solutions will provide planning, programming, and PM/CM services for Phase 3 surveillance upgrades across Terminals B, C, and F, with new systems currently in design.",
    image: "/vss-phase-2b.png",
    highlights: [
      "New surveillance systems in Terminals B, C, and F",
      "Systems design and planning underway",
      "Expansion of airport-wide video coverage",
    ],
  },
]

const stats = [
  { value: "10+", label: "Active Projects" },
  { value: "$100M+", label: "Projects Managed" },
  { value: "100%", label: "Client Satisfaction" },
]

const statuses = ["All", "Completed", "In Progress", "In Planning"]

export default function ProjectsPage() {
  const [selectedStatus, setSelectedStatus] = useState("All")
  
  const filteredProjects = selectedStatus === "All" 
    ? projects 
    : projects.filter(project => project.status === selectedStatus)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 overflow-hidden min-h-[50vh] flex items-center">
        {/* Background Image with Blur and Red Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/projects-airport.png"
            alt="Network infrastructure and cabling systems"
            fill
            className="object-cover blur-[2px]"
            priority
          />
          <div className="absolute inset-0 bg-primary/40" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-36 sm:pb-40 md:pb-44 relative z-10 w-full">
          <FadeIn className="max-w-3xl">
            <p className="text-white font-medium tracking-wide uppercase mb-4">Our Projects</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Transforming Infrastructure
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
            From video surveillance upgrades to secure exit lane systems, explore our portfolio of successful projects. Each project reflects our commitment to innovation, quality, and operational excellence. We deliver solutions that enhance security, efficiency, and long-term performance.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Stats Bar */}
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

      {/* Projects Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Status Filter */}
          <ScrollReveal className="flex flex-wrap gap-3 mb-12 justify-center">
            {statuses.map((status) => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  status === selectedStatus
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-primary/10"
                }`}
              >
                {status}
              </button>
            ))}
          </ScrollReveal>

          {/* Projects */}
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" stagger={0.08} key={selectedStatus}>
            {filteredProjects.map((project) => (
              <StaggerItem key={project.title}>
                <div className="bg-card rounded-xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300 group h-full">
                <div className="h-48 bg-secondary flex items-center justify-center relative overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className={`object-cover ${project.image.includes("vss") ? "object-[50%_30%]" : "object-center"}`}
                    />
                  ) : (
                    <span className="text-6xl font-bold text-primary/20">{project.category.charAt(0)}</span>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-primary uppercase tracking-wide">
                      {project.category}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      project.status === "Completed" 
                        ? "bg-green-100 text-green-800" 
                        : project.status === "In Planning"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-amber-100 text-amber-800"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {project.year}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      {project.value}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2 text-sm text-foreground">
                        <ArrowRight className="h-3 w-3 text-primary shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary">
        <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" direction="none">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how AKT Solutions can help bring your infrastructure 
            project to life with our proven expertise.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            Start a Conversation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  )
}
