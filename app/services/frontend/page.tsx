import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Smartphone, Palette, Zap, Monitor, Code } from "lucide-react"
import Link from "next/link"

export default function FrontendPage() {
  const benefits = [
    "Increase user engagement with intuitive, responsive interfaces",
    "Improve conversion rates through optimized user experience design",
    "Reduce development time with reusable component libraries",
    "Ensure cross-browser compatibility and mobile responsiveness",
    "Enhance brand perception with modern, professional designs",
    "Boost performance with optimized code and best practices",
    "Future-proof applications with scalable architecture",
    "Improve accessibility compliance for broader user reach",
  ]

  const services = [
    {
      title: "UI/UX Design",
      description: "User-centered design that combines aesthetics with functionality",
      icon: Palette,
      features: ["User Research & Personas", "Wireframing & Prototyping", "Visual Design Systems", "Usability Testing"],
    },
    {
      title: "React Development",
      description: "Modern React applications with hooks, context, and best practices",
      icon: Code,
      features: ["Component Architecture", "State Management", "Performance Optimization", "Testing Integration"],
    },
    {
      title: "Responsive Design",
      description: "Mobile-first designs that work perfectly on all devices",
      icon: Smartphone,
      features: ["Mobile Optimization", "Progressive Web Apps", "Cross-browser Testing", "Performance Tuning"],
    },
    {
      title: "Performance Optimization",
      description: "Lightning-fast applications that keep users engaged",
      icon: Zap,
      features: ["Code Splitting", "Lazy Loading", "Bundle Optimization", "Core Web Vitals"],
    },
  ]

  const technologies = [
    "React & Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Styled Components",
    "Framer Motion",
    "React Query/SWR",
    "Zustand/Redux",
    "Storybook",
    "Jest & Testing Library",
    "Webpack & Vite",
    "Figma & Adobe XD",
    "Progressive Web Apps",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-[#C00000] text-white">Frontend Development</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Frontend Development & <span className="text-[#C00000]">UI/UX Design</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Create stunning, high-performance user interfaces that engage your audience and drive conversions. From
            concept to deployment, we build modern web applications that users love to interact with.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#C00000] hover:bg-[#A00000] text-white px-8 py-3">
              <Link href="/get-quote">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8 py-3 bg-transparent">
              <Link href="/resources/case-studies">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Frontend Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end frontend solutions that combine beautiful design with powerful functionality
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#C00000] rounded-lg flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="text-gray-600">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800">Success Story</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">SaaS Dashboard Redesign</h2>
              <p className="text-lg text-gray-600 mb-6">
                We completely redesigned a complex SaaS dashboard, improving user satisfaction by 85% and reducing
                support tickets by 60% through intuitive UI/UX design and modern React architecture.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium text-gray-900">User Research:</span>
                    <p className="text-gray-600 text-sm">
                      Conducted interviews with 100+ users to identify pain points
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium text-gray-900">Design System:</span>
                    <p className="text-gray-600 text-sm">Created comprehensive component library and style guide</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium text-gray-900">Performance:</span>
                    <p className="text-gray-600 text-sm">Achieved 90+ Lighthouse scores across all metrics</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium text-gray-900">Accessibility:</span>
                    <p className="text-gray-600 text-sm">WCAG 2.1 AA compliance for inclusive user experience</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border">
                <h3 className="font-semibold text-gray-900 mb-4">Results Achieved:</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-[#C00000]">85%</div>
                    <div className="text-sm text-gray-600">User Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#C00000]">60%</div>
                    <div className="text-sm text-gray-600">Fewer Support Tickets</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Technologies We Use</h3>
                <div className="grid grid-cols-2 gap-4">
                  {technologies.map((tech, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <Monitor className="h-4 w-4 text-[#C00000]" />
                      <span className="text-sm text-gray-700">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-4">Our Development Process</h4>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-[#C00000] text-white rounded-full flex items-center justify-center text-xs font-bold">
                      1
                    </div>
                    <span className="text-sm text-gray-700">Discovery & User Research</span>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-[#C00000] text-white rounded-full flex items-center justify-center text-xs font-bold">
                      2
                    </div>
                    <span className="text-sm text-gray-700">Design & Prototyping</span>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-[#C00000] text-white rounded-full flex items-center justify-center text-xs font-bold">
                      3
                    </div>
                    <span className="text-sm text-gray-700">Development & Testing</span>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-[#C00000] text-white rounded-full flex items-center justify-center text-xs font-bold">
                      4
                    </div>
                    <span className="text-sm text-gray-700">Launch & Optimization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Invest in Professional Frontend Development?</h2>
            <p className="text-xl text-gray-600">
              Great frontend development is the difference between users who stay and users who leave
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-[#C00000] flex-shrink-0 mt-1" />
                <span className="text-gray-800 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#C00000]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Create Amazing User Experiences?</h2>
          <p className="text-xl text-red-100 mb-8">
            Let's build frontend solutions that not only look great but perform exceptionally and drive real business
            results.
          </p>
          <Button asChild size="lg" variant="outline" className="bg-white text-[#C00000] hover:bg-gray-100 px-8 py-3">
            <Link href="/get-quote">
              Start Your Frontend Project <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
