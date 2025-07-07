import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  Code,
  Bot,
  Smartphone,
  Puzzle,
  WorkflowIcon as Wordpress,
  Brain,
  Users,
  Target,
  Shield,
  Zap,
} from "lucide-react"

export default function HomePage() {
  const services = [
    {
      title: "Software & API Documentation",
      description: "Clear, developer-friendly documentation and API references",
      icon: Code,
      href: "/services/software-documentation",
    },
    {
      title: "Automation & AI Solutions",
      description: "Streamline workflows with intelligent automation",
      icon: Bot,
      href: "/services/automation",
    },
    {
      title: "Frontend & Backend Development",
      description: "Full-stack solutions for modern applications",
      icon: Smartphone,
      href: "/services/frontend",
    },
    {
      title: "System Integration",
      description: "Seamless integration of complex systems",
      icon: Puzzle,
      href: "/services/integration",
    },
    {
      title: "WordPress & SEO",
      description: "Optimized websites that rank and convert",
      icon: Wordpress,
      href: "/services/wordpress",
    },
    {
      title: "AI Model Training & Data Annotation",
      description: "Custom AI models with precise data labeling",
      icon: Brain,
      href: "/services/ai-training",
    },
  ]

  const whyChooseUs = [
    {
      title: "Agile Approach",
      description: "Flexible methodologies that adapt to your needs",
      icon: Zap,
    },
    {
      title: "Deep Expertise",
      description: "Specialized knowledge across multiple tech domains",
      icon: Target,
    },
    {
      title: "Transparent Processes",
      description: "Clear communication and project visibility",
      icon: Shield,
    },
    {
      title: "Client-Centered Mindset",
      description: "Your success is our primary focus",
      icon: Users,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-5"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Smart, Scalable, and Reliable
            <span className="text-[#C00000] block">Technology Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Empowering businesses with cutting-edge technology, from AI automation to full-stack development
          </p>
          <Button asChild size="lg" className="bg-[#C00000] hover:bg-[#A00000] text-white px-8 py-3 text-lg">
            <Link href="/get-quote">
              Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-[#C00000]"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-[#C00000] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href={service.href}
                    className="text-[#C00000] hover:text-[#A00000] font-medium inline-flex items-center"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with a client-first approach to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#C00000] rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Trusted By</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-500 text-sm">Partner {i}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-500 mt-8">Partner logos will be displayed here</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-white">
                <CardContent className="p-6">
                  <div className="text-gray-400 mb-4">★★★★★</div>
                  <p className="text-gray-600 mb-4">
                    "Placeholder testimonial content will be added here when client feedback is available."
                  </p>
                  <div className="text-sm text-gray-500">
                    <div className="font-medium">Client Name</div>
                    <div>Company Position</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#C00000]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-red-100 mb-8">Let's discuss how we can help you achieve your technology goals</p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-white text-[#C00000] hover:bg-gray-100 px-8 py-3 text-lg"
          >
            <Link href="/get-quote">
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
