import Link from "next/link"
import { Mail, Linkedin, Twitter, Github } from "lucide-react"

export default function Footer() {
  const services = [
    { name: "Software Documentation", href: "/services/software-documentation" },
    { name: "AI Solutions", href: "/services/artificial-intelligence" },
    { name: "Full-Stack Development", href: "/services/frontend" },
    { name: "SEO Services", href: "/services/seo" },
  ]

  const resources = [
    { name: "Case Studies", href: "/resources/case-studies" },
    { name: "Blog", href: "/resources/blog" },
    { name: "About Us", href: "/about" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#C00000] rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">IT</span>
              </div>
              <span className="font-bold text-xl">Inovara Tech</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Smart, scalable, and reliable technology solutions for modern businesses.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-[#C00000] transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#C00000] transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#C00000] transition-colors">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link href={resource.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-[#C00000]" />
                <span className="text-gray-400">hello@inovaratech.com</span>
              </div>
              <p className="text-gray-400 text-sm">We usually respond within 24 hours</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 Inovara Tech. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
