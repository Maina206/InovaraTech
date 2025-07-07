import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Tag, Eye, MessageSquare, BarChart3, Shield, Users } from "lucide-react"
import Link from "next/link"

export default function DataAnnotationPage() {
  const benefits = [
    "Achieve 99%+ annotation accuracy with expert human annotators",
    "Reduce model training time with high-quality labeled datasets",
    "Scale annotation projects to millions of data points efficiently",
    "Ensure consistent labeling standards across large datasets",
    "Accelerate AI model development with faster data preparation",
    "Maintain data privacy and security throughout the process",
    "Support multiple data types: images, text, audio, and video",
    "Provide custom annotation schemas for specialized use cases",
  ]

  const annotationServices = [
    {
      title: "Image & Video Annotation",
      description: "Precise labeling for computer vision and video analysis models",
      icon: Eye,
      features: ["Object Detection", "Semantic Segmentation", "Keypoint Annotation", "Video Tracking"],
    },
    {
      title: "Text & NLP Annotation",
      description: "Comprehensive text labeling for natural language processing",
      icon: MessageSquare,
      features: ["Named Entity Recognition", "Sentiment Analysis", "Text Classification", "Intent Labeling"],
    },
    {
      title: "Audio Annotation",
      description: "Detailed audio labeling for speech and sound recognition systems",
      icon: BarChart3,
      features: ["Speech Transcription", "Speaker Identification", "Audio Classification", "Sound Event Detection"],
    },
    {
      title: "Custom Annotation",
      description: "Specialized annotation services for unique business requirements",
      icon: Tag,
      features: ["Custom Schemas", "Domain-specific Labels", "Multi-modal Annotation", "Quality Assurance"],
    },
  ]

  const annotationTypes = [
    "Bounding Box Annotation",
    "Polygon & Polyline",
    "Semantic Segmentation",
    "3D Point Cloud Labeling",
    "Named Entity Recognition",
    "Part-of-Speech Tagging",
    "Sentiment Classification",
    "Intent & Entity Extraction",
    "Audio Transcription",
    "Speaker Diarization",
    "Medical Image Labeling",
    "Autonomous Vehicle Data",
  ]

  const qualityMetrics = [
    "99%+ Annotation Accuracy",
    "Inter-annotator Agreement",
    "Quality Control Processes",
    "Expert Review Cycles",
    "Automated Quality Checks",
    "Continuous Training Programs",
    "Domain Expert Validation",
    "Statistical Quality Metrics",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-[#C00000] text-white">Data Annotation Services</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Professional <span className="text-[#C00000]">Data Annotation</span> Services
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Power your AI models with precisely labeled, high-quality training data. Our expert annotation team delivers
            accurate, consistent, and scalable data labeling services for computer vision, NLP, and machine learning
            projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#C00000] hover:bg-[#A00000] text-white px-8 py-3">
              <Link href="/get-quote">
                Get Your Data Annotated <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8 py-3 bg-transparent">
              <Link href="/resources/case-studies">View Annotation Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Annotation Stats */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Annotation Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our data annotation services deliver the quality and scale needed for successful AI projects
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Tag className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">99%+</div>
              <p className="text-gray-600">Annotation Accuracy</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
              <p className="text-gray-600">Expert Annotators</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">10M+</div>
              <p className="text-gray-600">Data Points Labeled</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
              <p className="text-gray-600">Data Security</p>
            </div>
          </div>
        </div>
      </section>

      {/* Annotation Services */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Data Annotation Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive annotation solutions for all types of AI and machine learning projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {annotationServices.map((service, index) => (
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
              <Badge className="mb-4 bg-blue-100 text-blue-800">Annotation Success</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Autonomous Vehicle Dataset</h2>
              <p className="text-lg text-gray-600 mb-6">
                We annotated 2 million images for an autonomous vehicle company, creating precise bounding boxes and
                semantic segmentation for 50+ object classes, achieving 99.8% accuracy and enabling safe self-driving
                capabilities.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium text-gray-900">Multi-class Object Detection:</span>
                    <p className="text-gray-600 text-sm">
                      Labeled vehicles, pedestrians, traffic signs, and road infrastructure
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium text-gray-900">Semantic Segmentation:</span>
                    <p className="text-gray-600 text-sm">
                      Pixel-level annotation for road surfaces, lane markings, and boundaries
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium text-gray-900">Quality Assurance:</span>
                    <p className="text-gray-600 text-sm">Multi-level review process with automotive domain experts</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium text-gray-900">Delivery Timeline:</span>
                    <p className="text-gray-600 text-sm">
                      Completed 2M image annotation project in 8 weeks with 24/7 operations
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-4">Project Results:</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-[#C00000]">99.8%</div>
                    <div className="text-sm text-gray-600">Annotation Accuracy</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#C00000]">2M</div>
                    <div className="text-sm text-gray-600">Images Annotated</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Annotation Types We Support</h3>
                <div className="grid grid-cols-2 gap-4">
                  {annotationTypes.map((type, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-white rounded-lg">
                      <Tag className="h-4 w-4 text-[#C00000]" />
                      <span className="text-sm text-gray-700">{type}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="font-medium text-gray-900 mb-4">Quality Assurance</h4>
                <div className="grid grid-cols-2 gap-2">
                  {qualityMetrics.map((metric, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-2 h-2 bg-[#C00000] rounded-full"></div>
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Annotation Process */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Annotation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Systematic approach ensuring consistent, high-quality data annotation at scale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-gray-200">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Tag className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Schema Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Create detailed annotation guidelines and schemas tailored to your specific use case and requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-gray-200">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-lg">Expert Annotation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Trained annotators with domain expertise label your data following strict quality guidelines.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-gray-200">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Quality Control</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Multi-level review process with automated checks and expert validation to ensure accuracy.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-gray-200">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Secure delivery of annotated datasets in your preferred format with detailed quality reports.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Professional Data Annotation?</h2>
            <p className="text-xl text-gray-600">
              Quality data annotation is the foundation of successful AI models - get it right from the start
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
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Annotate Your Data?</h2>
          <p className="text-xl text-red-100 mb-8">
            Let's create high-quality, precisely labeled datasets that power your AI models to achieve exceptional
            performance.
          </p>
          <Button asChild size="lg" variant="outline" className="bg-white text-[#C00000] hover:bg-gray-100 px-8 py-3">
            <Link href="/get-quote">
              Start Your Annotation Project <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
