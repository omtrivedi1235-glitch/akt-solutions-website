import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects | AKT Solutions Portfolio",
  description:
    "Explore AKT Solutions' portfolio of aviation, infrastructure, and construction management projects.",
}

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
