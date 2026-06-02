import Link from "next/link"
import Image from "next/image"
import { Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="flex flex-col items-center text-center gap-6 sm:gap-8">
          {/* Logo & Description */}
          <div className="flex flex-col items-center justify-center">
            <Link href="/" className="inline-block mb-3">
              <Image
                src="/logo-white.png"
                alt="AKT Solutions"
                width={790}
                height={382}
                className="h-20 sm:h-24 md:h-28 w-auto mx-auto"
              />
            </Link>
            <p className="text-primary-foreground/80 max-w-sm leading-relaxed text-sm">
              Building the infrastructure of tomorrow, today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            {/* Quick Links */}
            <div className="flex flex-col items-center">
              <h3 className="text-xs font-semibold uppercase tracking-wider mb-2">Quick Links</h3>
              <ul className="space-y-1.5">
                <li>
                  <Link href="/about" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col items-center">
              <h3 className="text-xs font-semibold uppercase tracking-wider mb-2">Contact</h3>
              <ul>
                <li className="flex items-center justify-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-primary-foreground shrink-0" />
                  <a href="mailto:info@aktsolutionsllc.com" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors whitespace-nowrap">
                    info@aktsolutionsllc.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 pt-4 border-t border-primary-foreground/20">
          <p className="text-primary-foreground/60 text-xs text-center">
            &copy; {new Date().getFullYear()} AKT Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
