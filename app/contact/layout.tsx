import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact AKT Solutions",
  description:
    "Contact AKT Solutions for engineering, project management, and construction management services.",
}

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
