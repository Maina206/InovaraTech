"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Menu,
  Code,
  Bot,
  Smartphone,
  Server,
  Puzzle,
  WorkflowIcon as Wordpress,
  Search,
  Brain,
  Database,
  FileText,
  BookOpen,
  ChevronDown,
} from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const services = [
    { name: "Software & API Documentation", href: "/services/software-documentation", icon: Code },
    { name: "Technical Writing", href: "/services/technical-writing", icon: FileText },
    { name: "Automation", href: "/services/automation", icon: Bot },
    { name: "Artificial Intelligence", href: "/services/artificial-intelligence", icon: Brain },
    { name: "Frontend (UI/UX)", href: "/services/frontend", icon: Smartphone },
    { name: "Backend", href: "/services/backend", icon: Server },
    { name: "Integration", href: "/services/integration", icon: Puzzle },
    { name: "WordPress", href: "/services/wordpress", icon: Wordpress },
    { name: "SEO", href: "/services/seo", icon: Search },
    { name: "AI Training", href: "/services/ai-training", icon: Brain },
    { name: "Data Annotation", href: "/services/data-annotation", icon: Database },
  ]

  const resources = [
    { name: "Case Studies", href: "/resources/case-studies", icon: BookOpen },
    { name: "Blog", href: "/resources/blog", icon: FileText },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-[#C00000] rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">IT</span>
          </div>
          <span className="font-bold text-xl text-gray-900">Inovara Tech</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link href="/" className="text-sm font-medium hover:text-[#C00000] transition-colors">
            Home
          </Link>

          <Link href="/about" className="text-sm font-medium hover:text-[#C00000] transition-colors">
            About
          </Link>

          {/* What We Do Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-sm font-medium hover:text-[#C00000] transition-colors">
              What We Do <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80 p-2">
              <div className="grid grid-cols-1 gap-1">
                {services.map((service) => (
                  <DropdownMenuItem key={service.name} asChild>
                    <Link
                      href={service.href}
                      className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-50 cursor-pointer"
                    >
                      <service.icon className="h-4 w-4 text-[#C00000]" />
                      <span className="text-sm">{service.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Resources Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-sm font-medium hover:text-[#C00000] transition-colors">
              Resources <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 p-2">
              <div className="grid grid-cols-1 gap-1">
                {resources.map((resource) => (
                  <DropdownMenuItem key={resource.name} asChild>
                    <Link
                      href={resource.href}
                      className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-50 cursor-pointer"
                    >
                      <resource.icon className="h-4 w-4 text-[#C00000]" />
                      <span className="text-sm">{resource.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex">
          <Button asChild className="bg-[#C00000] hover:bg-[#A00000] text-white">
            <Link href="/get-quote">Get Quote</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col space-y-4 mt-8">
              <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                Home
              </Link>
              <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                About
              </Link>

              <div className="space-y-2">
                <h3 className="text-lg font-medium text-[#C00000]">Services</h3>
                <div className="pl-4 space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2 text-sm hover:text-[#C00000] transition-colors"
                    >
                      <service.icon className="h-4 w-4 text-[#C00000]" />
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium text-[#C00000]">Resources</h3>
                <div className="pl-4 space-y-2">
                  {resources.map((resource) => (
                    <Link
                      key={resource.name}
                      href={resource.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2 text-sm hover:text-[#C00000] transition-colors"
                    >
                      <resource.icon className="h-4 w-4 text-[#C00000]" />
                      {resource.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Button asChild className="bg-[#C00000] hover:bg-[#A00000] text-white mt-6">
                <Link href="/get-quote" onClick={() => setIsOpen(false)}>
                  Get Quote
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
