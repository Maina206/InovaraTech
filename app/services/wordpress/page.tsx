import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Globe, Zap, Shield, Smartphone, Search, Palette } from "lucide-react"
import Link from "next/link"

export default function WordPressPage() {
  const benefits = [
    "Increase website speed by up to 300% with performance optimization",
    "Improve search rankings with technical SEO implementation",
    "Reduce security vulnerabilities with hardening and monitoring",
    "Scale to handle 10x more traffic without performance degradation",
    "Streamline content management with custom workflows",
    "Enhance user experience with responsive, mobile-first design",
    "Reduce maintenance costs with automated updates and backups",
    "Boost conversions with optimized landing pages and CTAs",
  ]

  const services = [
    {
      title: "Custom WordPress Development",
      description: "Tailored WordPress solutions built for your specific business needs",
      icon: Globe,
      features: ["Custom Themes", "Plugin Development", "API Integration", "Database Optimization"],
    },
    {
      title: "Performance Optimization",
      description: "Lightning-fast WordPress sites that rank higher and convert better",
      icon: Zap,
      features: ["Speed Optimization", "Caching Setup", "Image Optimization", "CDN Configuration"],
    },
    {
      title: "Security & Maintenance",
      description: "Comprehensive security hardening and ongoing maintenance services",
      icon: Shield,
      features: ["Security Audits", "Malware Removal", "Automated Backups", "Update Management"],
    },
    {
      title: "Mobile & Responsive Design",
      description: "Mobile-first WordPress designs that work perfectly on all devices",
      icon: Smartphone,
      features: ["Responsive Themes", "Mobile Optimization", "Touch-friendly UI", "Cross-browser Testing"],
    },
  ]

  const wordpressFeatures = [
    "Custom Theme Development",
    "WooCommerce E-commerce",
    "Membership Sites",
    "Multi-site Management",
    "Custom Post Types",
    "Advanced Custom Fields",
    "Page Builders (Elementor, Gutenberg)",
    "Plugin Development",
    "API Integrations",
    "Performance Optimization",
    "Security Hardening",
    "SEO Optimization",
  ]

  const technologies = [
    "WordPress Core",
    "PHP & MySQL",
    "Custom Themes",
    "WooCommerce",
    "Elementor Pro",
    "Advanced Custom Fields",
    "WP Rocket",
    "Yoast SEO",
    "Wordfence Security",
    "WP CLI",
    "Git Version Control",
    "Staging Environments",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-[#C00000] text-white">WordPress Development</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Professional <span className="text-[#C00000]">WordPress</span> Development
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Transform your WordPress website into a high-performance, secure, and scalable digital platform. From custom
            development to optimization, we make WordPress work harder for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#C00000] hover:bg-[#A00000] text-white px-8 py-3">
              <Link href="/get-quote">
                Optimize My WordPress Site <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8 py-3 bg-transparent">
              <Link href="/resources/case-studies">View WordPress Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* WordPress Stats */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">WordPress Performance That Delivers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our WordPress optimizations deliver measurable improvements in speed, security, and search rankings
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">300%</div>
              <p className="text-gray-600">Speed Improvement</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">150%</div>
              <p className="text-gray-600">SEO Traffic Increase</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">99.9%</div>
              <p className="text-gray-600">Uptime Guarantee</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
              <p className="text-gray-600">Mobile Responsive</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our WordPress Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive WordPress solutions that cover every aspect of your website
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
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800">WordPress Success</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">E-commerce Site Transformation</h2>
              <p className="text-lg text-gray-600 mb-6">
                We transformed a slow, outdated WordPress e-commerce site into a high-performance platform that
                increased conversions by 180% and reduced bounce rate by 65%.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium text-gray-900">Performance Optimization:</span>
                    <p className="text-gray-600 text-sm">Reduced page load time from 8 seconds to under 2 seconds</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium text-gray-900">Custom WooCommerce Development:</span>
                    <p className="text-gray-600 text-sm">Built custom checkout flow and product configurator</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium text-gray-900">Mobile Optimization:</span>
                    <p className="text-gray-600 text-sm">Responsive design with mobile-first approach</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium text-gray-900">SEO Implementation:</span>
                    <p className="text-gray-600 text-sm">Technical SEO optimization and content structure</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-4">Transformation Results:</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-[#C00000]">180%</div>
                    <div className="text-sm text-gray-600">Conversion Increase</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#C00000]">65%</div>
                    <div className="text-sm text-gray-600">Lower Bounce Rate</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">WordPress Capabilities</h3>
                <div className="grid grid-cols-2 gap-4">
                  {wordpressFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-white rounded-lg">
                      <Palette className="h-4 w-4 text-[#C00000]" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="font-medium text-gray-900 mb-4">WordPress Tech Stack</h4>
                <div className="grid grid-cols-2 gap-2">
                  {technologies.map((tech, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-2 h-2 bg-[#C00000] rounded-full"></div>
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WordPress vs Custom */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose WordPress?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              WordPress powers 40% of the web for good reasons - flexibility, scalability, and cost-effectiveness
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-gray-200">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Flexibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Thousands of themes and plugins available. Customize everything to match your brand and requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-gray-200">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  With proper optimization, WordPress can be as fast as any custom solution while being easier to
                  maintain.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-gray-200">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Regular security updates and a vast ecosystem of security plugins keep your site protected.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Benefits of Professional WordPress Development</h2>
            <p className="text-xl text-gray-600">
              Expert WordPress development delivers results that generic themes and plugins simply can't match
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
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Supercharge Your WordPress Site?</h2>
          <p className="text-xl text-red-100 mb-8">
            Let's transform your WordPress website into a high-performance, secure, and conversion-optimized platform.
          </p>
          <Button asChild size="lg" variant="outline" className="bg-white text-[#C00000] hover:bg-gray-100 px-8 py-3">
            <Link href="/get-quote">
              Start Your WordPress Project <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
