import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Server, Database, Shield, Zap, Cloud, Code } from "lucide-react"
import Link from "next/link"

export default function BackendPage() {
  const benefits = [
    "Scale to millions of users with robust, high-performance architecture",
    "Ensure 99.9% uptime with reliable, fault-tolerant systems",
    "Protect sensitive data with enterprise-grade security measures",
    "Reduce operational costs through efficient resource utilization",
    "Enable rapid feature development with well-structured APIs",
    "Maintain data integrity with ACID-compliant database design",
    "Support global users with distributed, low-latency infrastructure",
    "Simplify maintenance with clean, documented, testable code",
  ]

  const services = [
    {
      title: "API Development",
      description: "RESTful and GraphQL APIs that power modern applications",
      icon: Code,
      features: ["REST & GraphQL APIs", "API Documentation", "Rate Limiting & Throttling", "Versioning Strategy"],
    },
    {
      title: "Database Design",
      description: "Optimized database architecture for performance and scalability",
      icon: Database,
      features: ["Schema Design", "Query Optimization", "Data Migration", "Backup & Recovery"],
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable, secure cloud deployments on AWS, GCP, or Azure",
      icon: Cloud,
      features: ["Auto-scaling", "Load Balancing", "CDN Integration", "Monitoring & Alerts"],
    },
    {
      title: "Security & Compliance",
      description: "Enterprise-grade security with industry compliance standards",
      icon: Shield,
      features: ["Authentication & Authorization", "Data Encryption", "GDPR/HIPAA Compliance", "Security Audits"],
    },
  ]

  const technologies = [
    "Node.js & Express",
    "Python & Django/FastAPI",
    "PostgreSQL & MongoDB",
    "Redis & Elasticsearch",
    "Docker & Kubernetes",
    "AWS/GCP/Azure",
    "GraphQL & REST APIs",
    "Microservices Architecture",
    "CI/CD Pipelines",
    "Monitoring & Logging",
    "Message Queues",
    "Serverless Functions",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-[#C00000] text-white">Backend Development</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Backend Development & <span className="text-[#C00000]">Cloud Infrastructure</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Build the foundation of your digital success with scalable, secure, and high-performance backend systems.
            From APIs to databases, we create the invisible infrastructure that powers exceptional user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#C00000] hover:bg-[#A00000] text-white px-8 py-3">
              <Link href="/get-quote">
                Build Your Backend <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8 py-3 bg-transparent">
              <Link href="/resources/case-studies">View Architecture Examples</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Performance That Scales</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our backend solutions are built to handle growth from day one
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">99.9%</div>
              <p className="text-gray-600">Uptime Guarantee</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">&lt;100ms</div>
              <p className="text-gray-600">API Response Time</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">10M+</div>
              <p className="text-gray-600">Requests/Day</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
              <p className="text-gray-600">Security Compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Backend Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive backend solutions that form the backbone of successful applications
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
              <Badge className="mb-4 bg-blue-100 text-blue-800">Architecture Success</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Fintech Platform Scaling</h2>
              <p className="text-lg text-gray-600 mb-6">
                We architected and built a high-frequency trading platform that processes over 1 million transactions
                per day with sub-50ms latency, handling $100M+ in daily trading volume.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium text-gray-900">Microservices Architecture:</span>
                    <p className="text-gray-600 text-sm">
                      Distributed system with 15+ microservices for maximum scalability
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium text-gray-900">Real-time Processing:</span>
                    <p className="text-gray-600 text-sm">Event-driven architecture with Redis and message queues</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium text-gray-900">Security & Compliance:</span>
                    <p className="text-gray-600 text-sm">SOC 2 Type II compliance with end-to-end encryption</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium text-gray-900">Auto-scaling Infrastructure:</span>
                    <p className="text-gray-600 text-sm">
                      Kubernetes deployment with automatic scaling based on demand
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-4">Performance Metrics:</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-[#C00000]">1M+</div>
                    <div className="text-sm text-gray-600">Daily Transactions</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#C00000]">45ms</div>
                    <div className="text-sm text-gray-600">Average Latency</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Backend Technologies</h3>
                <div className="grid grid-cols-2 gap-4">
                  {technologies.map((tech, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-white rounded-lg">
                      <Server className="h-4 w-4 text-[#C00000]" />
                      <span className="text-sm text-gray-700">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="font-medium text-gray-900 mb-4">Our Architecture Approach</h4>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-[#C00000] text-white rounded-full flex items-center justify-center text-xs font-bold">
                      1
                    </div>
                    <span className="text-sm text-gray-700">Requirements Analysis & Planning</span>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-[#C00000] text-white rounded-full flex items-center justify-center text-xs font-bold">
                      2
                    </div>
                    <span className="text-sm text-gray-700">System Design & Architecture</span>
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
                    <span className="text-sm text-gray-700">Deployment & Monitoring</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Professional Backend Development Matters</h2>
            <p className="text-xl text-gray-600">
              Your backend is the foundation that determines whether your application succeeds or fails at scale
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg">
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
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Scalable Backend Systems?</h2>
          <p className="text-xl text-red-100 mb-8">
            Let's architect backend solutions that grow with your business and provide the reliability your users
            expect.
          </p>
          <Button asChild size="lg" variant="outline" className="bg-white text-[#C00000] hover:bg-gray-100 px-8 py-3">
            <Link href="/get-quote">
              Start Your Backend Project <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
