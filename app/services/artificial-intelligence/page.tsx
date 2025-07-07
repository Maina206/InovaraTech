import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Brain, Cpu, Eye, MessageSquare, BarChart3, Shield, Zap, Target } from "lucide-react"
import Link from "next/link"

export default function ArtificialIntelligencePage() {
  const benefits = [
    "Increase operational efficiency by up to 40% with intelligent automation",
    "Make data-driven decisions with predictive analytics and insights",
    "Enhance customer experience through personalized AI interactions",
    "Reduce costs while improving accuracy in complex processes",
    "Scale your business intelligence without proportional resource increase",
    "Stay competitive with cutting-edge AI technology implementation",
    "Automate complex decision-making processes with machine learning",
    "Generate actionable insights from unstructured data sources",
  ]

  const aiServices = [
    {
      title: "Machine Learning Solutions",
      description: "Custom ML models for prediction, classification, and pattern recognition",
      icon: Brain,
      capabilities: ["Predictive Analytics", "Recommendation Systems", "Fraud Detection", "Demand Forecasting"],
    },
    {
      title: "Natural Language Processing",
      description: "Advanced text analysis, sentiment analysis, and language understanding",
      icon: MessageSquare,
      capabilities: [
        "Chatbots & Virtual Assistants",
        "Document Analysis",
        "Sentiment Analysis",
        "Language Translation",
      ],
    },
    {
      title: "Computer Vision",
      description: "Image and video analysis for automated visual recognition and processing",
      icon: Eye,
      capabilities: ["Object Detection", "Quality Control", "Medical Imaging", "Security Monitoring"],
    },
    {
      title: "AI Strategy & Consulting",
      description: "Strategic planning and roadmap development for AI implementation",
      icon: Target,
      capabilities: ["AI Readiness Assessment", "Technology Selection", "Implementation Planning", "ROI Analysis"],
    },
  ]

  const industries = [
    {
      name: "Healthcare",
      applications: ["Medical diagnosis assistance", "Drug discovery", "Patient monitoring", "Treatment optimization"],
    },
    {
      name: "Finance",
      applications: ["Risk assessment", "Algorithmic trading", "Fraud detection", "Credit scoring"],
    },
    {
      name: "Retail & E-commerce",
      applications: [
        "Personalized recommendations",
        "Inventory optimization",
        "Price optimization",
        "Customer segmentation",
      ],
    },
    {
      name: "Manufacturing",
      applications: ["Predictive maintenance", "Quality control", "Supply chain optimization", "Process automation"],
    },
  ]

  const technologies = [
    "TensorFlow & PyTorch",
    "OpenAI GPT Integration",
    "Scikit-learn & Pandas",
    "Computer Vision (OpenCV)",
    "Natural Language Toolkit",
    "Cloud AI Services (AWS, GCP, Azure)",
    "MLOps & Model Deployment",
    "Custom Neural Networks",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-[#C00000] text-white">AI Solutions</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Artificial Intelligence <span className="text-[#C00000]">Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Harness the power of artificial intelligence to transform your business operations, enhance decision-making,
            and unlock new opportunities for growth. From machine learning to computer vision, we deliver AI solutions
            that drive real business value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#C00000] hover:bg-[#A00000] text-white px-8 py-3">
              <Link href="/get-quote">
                Explore AI Solutions <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8 py-3 bg-transparent">
              <Link href="/resources/case-studies">View AI Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* AI Impact Stats */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The AI Advantage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Businesses implementing AI solutions see transformative results across key metrics
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">40%</div>
              <p className="text-gray-600">Efficiency Increase</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">85%</div>
              <p className="text-gray-600">Accuracy Improvement</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">60%</div>
              <p className="text-gray-600">Risk Reduction</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
              <p className="text-gray-600">Automated Operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our AI Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions tailored to your specific business needs and objectives
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {aiServices.map((service, index) => (
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
                    <h4 className="font-medium text-gray-900 mb-3">Key Capabilities:</h4>
                    {service.capabilities.map((capability, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-700">{capability}</span>
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
              <Badge className="mb-4 bg-blue-100 text-blue-800">AI Success Story</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Predictive Maintenance for Manufacturing</h2>
              <p className="text-lg text-gray-600 mb-6">
                We developed a machine learning system that predicts equipment failures 2-3 weeks in advance, reducing
                unplanned downtime by 75% and maintenance costs by $2M annually for a manufacturing client.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium text-gray-900">Data Integration:</span>
                    <p className="text-gray-600 text-sm">Connected 500+ sensors across 50 production lines</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium text-gray-900">ML Model Development:</span>
                    <p className="text-gray-600 text-sm">
                      Custom algorithms for anomaly detection and failure prediction
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium text-gray-900">Real-time Monitoring:</span>
                    <p className="text-gray-600 text-sm">24/7 automated monitoring with instant alert system</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium text-gray-900">Dashboard & Analytics:</span>
                    <p className="text-gray-600 text-sm">
                      Executive dashboards with predictive insights and recommendations
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-4">Measurable Results:</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-[#C00000]">75%</div>
                    <div className="text-sm text-gray-600">Downtime Reduction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#C00000]">$2M</div>
                    <div className="text-sm text-gray-600">Annual Savings</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">AI Technologies We Use</h3>
                <div className="grid grid-cols-2 gap-4">
                  {technologies.map((tech, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-white rounded-lg">
                      <Brain className="h-4 w-4 text-[#C00000]" />
                      <span className="text-sm text-gray-700">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="font-medium text-gray-900 mb-4">Our AI Development Process</h4>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-[#C00000] text-white rounded-full flex items-center justify-center text-xs font-bold">
                      1
                    </div>
                    <span className="text-sm text-gray-700">Data Assessment & Strategy</span>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-[#C00000] text-white rounded-full flex items-center justify-center text-xs font-bold">
                      2
                    </div>
                    <span className="text-sm text-gray-700">Model Development & Training</span>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-[#C00000] text-white rounded-full flex items-center justify-center text-xs font-bold">
                      3
                    </div>
                    <span className="text-sm text-gray-700">Testing & Validation</span>
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

      {/* Industry Applications */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI Across Industries</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver industry-specific AI solutions that address unique challenges and opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl text-[#C00000]">{industry.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {industry.applications.map((app, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-700">{app}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose AI for Your Business?</h2>
            <p className="text-xl text-gray-600">
              Artificial intelligence isn't just the future—it's the competitive advantage your business needs today
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
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Embrace AI?</h2>
          <p className="text-xl text-red-100 mb-8">
            Let's explore how artificial intelligence can transform your business operations and drive unprecedented
            growth.
          </p>
          <Button asChild size="lg" variant="outline" className="bg-white text-[#C00000] hover:bg-gray-100 px-8 py-3">
            <Link href="/get-quote">
              Start Your AI Journey <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
