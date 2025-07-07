import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Bot, Zap, Clock, DollarSign, BarChart, Workflow, Database, Mail } from "lucide-react"
import Link from "next/link"

export default function AutomationPage() {
  const benefits = [
    "Reduce operational costs by up to 60% through process automation",
    "Eliminate human errors in repetitive tasks and data processing",
    "Free up your team to focus on strategic, high-value activities",
    "Improve customer response times and service quality",
    "Scale operations without proportional increase in workforce",
    "Ensure 24/7 availability for critical business processes",
    "Maintain consistent quality and compliance standards",
    "Generate detailed analytics and performance insights",
  ]

  const automationTypes = [
    {
      title: "Business Process Automation",
      description: "Streamline workflows, approvals, and routine business operations",
      icon: Workflow,
      examples: ["Invoice processing", "Employee onboarding", "Inventory management", "Report generation"],
    },
    {
      title: "Data Processing & Integration",
      description: "Automate data collection, transformation, and synchronization across systems",
      icon: Database,
      examples: ["CRM data sync", "Financial reporting", "Customer data migration", "Analytics dashboards"],
    },
    {
      title: "Customer Communication",
      description: "Intelligent chatbots and automated customer service solutions",
      icon: Mail,
      examples: ["Support ticket routing", "Email campaigns", "Lead qualification", "Follow-up sequences"],
    },
    {
      title: "Marketing Automation",
      description: "Personalized marketing campaigns and lead nurturing workflows",
      icon: BarChart,
      examples: ["Email marketing", "Social media posting", "Lead scoring", "Campaign optimization"],
    },
  ]

  const technologies = [
    "Zapier & Make.com Integration",
    "Custom Python & Node.js Scripts",
    "RPA (Robotic Process Automation)",
    "API Integrations & Webhooks",
    "AI-Powered Chatbots",
    "Workflow Management Systems",
    "Database Automation",
    "Cloud Function Deployment",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-[#C00000] text-white">Automation Services</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Business Process <span className="text-[#C00000]">Automation</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Transform your business operations with intelligent automation solutions. Reduce costs, eliminate errors,
            and scale efficiently while your team focuses on what matters most - growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#C00000] hover:bg-[#A00000] text-white px-8 py-3">
              <Link href="/get-quote">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8 py-3 bg-transparent">
              <Link href="/resources/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Automation Advantage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See immediate impact on your bottom line with measurable ROI from day one
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">60%</div>
              <p className="text-gray-600">Average Cost Reduction</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">80%</div>
              <p className="text-gray-600">Time Savings</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
              <p className="text-gray-600">Error Reduction</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">3x</div>
              <p className="text-gray-600">Productivity Increase</p>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Types */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Automation Solutions We Deliver</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From simple task automation to complex workflow orchestration
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {automationTypes.map((type, index) => (
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
                    <h4 className="font-medium text-gray-900 mb-3">Common Use Cases:</h4>
                    {type.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-700">{example}</span>
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
              <Badge className="mb-4 bg-blue-100 text-blue-800">Success Story</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">E-commerce Order Processing Automation</h2>
              <p className="text-lg text-gray-600 mb-6">
                We automated the entire order fulfillment process for a growing e-commerce business, reducing processing
                time from 2 hours to 5 minutes per order while eliminating 99% of manual errors.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium text-gray-900">Order Processing:</span>
                    <p className="text-gray-600 text-sm">
                      Automated order validation, inventory checks, and payment processing
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium text-gray-900">Inventory Management:</span>
                    <p className="text-gray-600 text-sm">Real-time stock updates across multiple sales channels</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium text-gray-900">Customer Communication:</span>
                    <p className="text-gray-600 text-sm">
                      Automated order confirmations, shipping updates, and delivery notifications
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium text-gray-900">Analytics & Reporting:</span>
                    <p className="text-gray-600 text-sm">Real-time dashboards and automated performance reports</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-4">Results Achieved:</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-[#C00000]">96%</div>
                    <div className="text-sm text-gray-600">Faster Processing</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#C00000]">$50K</div>
                    <div className="text-sm text-gray-600">Annual Savings</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Technologies We Use</h3>
              <div className="grid grid-cols-2 gap-4">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-white rounded-lg">
                    <Bot className="h-4 w-4 text-[#C00000]" />
                    <span className="text-sm text-gray-700">{tech}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-white rounded-lg border-l-4 border-[#C00000]">
                <h4 className="font-medium text-gray-900 mb-2">Our Approach</h4>
                <p className="text-sm text-gray-600">
                  We start with a thorough analysis of your current processes, identify automation opportunities, and
                  implement solutions that integrate seamlessly with your existing systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Automation?</h2>
            <p className="text-xl text-gray-600">
              Transform your business operations and unlock unprecedented efficiency
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
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Automate Your Business?</h2>
          <p className="text-xl text-red-100 mb-8">
            Let's identify the processes that are holding your business back and automate them for maximum efficiency.
          </p>
          <Button asChild size="lg" variant="outline" className="bg-white text-[#C00000] hover:bg-gray-100 px-8 py-3">
            <Link href="/get-quote">
              Start Your Automation Journey <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
