import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Puzzle, Workflow, Database, Cloud, Zap, Shield } from "lucide-react"
import Link from "next/link"

export default function IntegrationPage() {
  const benefits = [
    "Eliminate data silos and create unified business intelligence",
    "Reduce manual data entry and human errors by up to 95%",
    "Improve operational efficiency with automated workflows",
    "Enable real-time data synchronization across all systems",
    "Reduce integration costs by 60% compared to custom solutions",
    "Ensure data consistency and accuracy across platforms",
    "Scale integrations easily as your business grows",
    "Maintain security and compliance across all connections",
  ]

  const integrationTypes = [
    {
      title: "API Integration",
      description: "Connect applications through robust REST and GraphQL APIs",
      icon: Puzzle,
      features: ["REST & GraphQL APIs", "Webhook Implementation", "Rate Limiting", "Error Handling"],
    },
    {
      title: "Database Integration",
      description: "Seamless data synchronization between different database systems",
      icon: Database,
      features: ["Data Migration", "Real-time Sync", "ETL Processes", "Data Validation"],
    },
    {
      title: "Cloud Integration",
      description: "Connect cloud services and on-premise systems efficiently",
      icon: Cloud,
      features: ["Multi-cloud Setup", "Hybrid Architecture", "Serverless Functions", "Auto-scaling"],
    },
    {
      title: "Workflow Automation",
      description: "Automate business processes across multiple platforms",
      icon: Workflow,
      features: ["Process Automation", "Trigger Management", "Conditional Logic", "Monitoring"],
    },
  ]

  const platforms = [
    "Salesforce & HubSpot",
    "Shopify & WooCommerce",
    "Stripe & PayPal",
    "Slack & Microsoft Teams",
    "Google Workspace",
    "AWS & Azure Services",
    "Zapier & Make.com",
    "Custom APIs",
    "ERP Systems (SAP, Oracle)",
    "CRM Platforms",
    "Marketing Tools",
    "Analytics Platforms",
  ]

  const technologies = [
    "Node.js & Python",
    "REST & GraphQL APIs",
    "Apache Kafka",
    "Redis & RabbitMQ",
    "Docker & Kubernetes",
    "AWS Lambda",
    "Webhook Management",
    "API Gateways",
    "Message Queues",
    "Data Pipelines",
    "Monitoring Tools",
    "Security Protocols",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-[#C00000] text-white">System Integration</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            System <span className="text-[#C00000]">Integration</span> Services
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Connect your business systems seamlessly with robust integration solutions. Break down data silos, automate
            workflows, and create a unified digital ecosystem that drives efficiency and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#C00000] hover:bg-[#A00000] text-white px-8 py-3">
              <Link href="/get-quote">
                Connect Your Systems <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8 py-3 bg-transparent">
              <Link href="/resources/case-studies">View Integration Examples</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Integration Impact */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Integration Advantage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See immediate improvements in efficiency and data accuracy with professional system integration
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
              <p className="text-gray-600">Reduction in Manual Work</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
              <p className="text-gray-600">Data Accuracy</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Workflow className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">60%</div>
              <p className="text-gray-600">Cost Savings</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
              <p className="text-gray-600">Automated Monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Types */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Integration Solutions We Deliver</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From simple API connections to complex enterprise integrations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {integrationTypes.map((type, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#C00000] rounded-lg flex items-center justify-center">
                      <type.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{type.title}</CardTitle>
                      <CardDescription className="text-gray-600">{type.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {type.features.map((feature, idx) => (
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
              <Badge className="mb-4 bg-blue-100 text-blue-800">Integration Success</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Multi-Platform E-commerce Integration</h2>
              <p className="text-lg text-gray-600 mb-6">
                We integrated 8 different platforms for a growing e-commerce business, creating a unified system that
                reduced manual work by 90% and improved order processing speed by 75%.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium text-gray-900">Salesforce CRM Integration:</span>
                    <p className="text-gray-600 text-sm">Real-time customer data sync across all touchpoints</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium text-gray-900">Inventory Management:</span>
                    <p className="text-gray-600 text-sm">Automated stock updates across Shopify, Amazon, and eBay</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium text-gray-900">Payment Processing:</span>
                    <p className="text-gray-600 text-sm">Unified payment gateway with Stripe and PayPal integration</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium text-gray-900">Analytics Dashboard:</span>
                    <p className="text-gray-600 text-sm">Real-time reporting combining data from all platforms</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-4">Integration Results:</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-[#C00000]">90%</div>
                    <div className="text-sm text-gray-600">Less Manual Work</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#C00000]">75%</div>
                    <div className="text-sm text-gray-600">Faster Processing</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Platforms We Integrate</h3>
                <div className="grid grid-cols-2 gap-4">
                  {platforms.map((platform, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-white rounded-lg">
                      <Puzzle className="h-4 w-4 text-[#C00000]" />
                      <span className="text-sm text-gray-700">{platform}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="font-medium text-gray-900 mb-4">Integration Technologies</h4>
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

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why System Integration Matters</h2>
            <p className="text-xl text-gray-600">
              Connected systems create exponential value beyond the sum of their parts
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
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Connect Your Systems?</h2>
          <p className="text-xl text-red-100 mb-8">
            Let's break down your data silos and create a unified, efficient digital ecosystem for your business.
          </p>
          <Button asChild size="lg" variant="outline" className="bg-white text-[#C00000] hover:bg-gray-100 px-8 py-3">
            <Link href="/get-quote">
              Start Your Integration Project <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
