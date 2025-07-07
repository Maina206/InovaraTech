import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Brain, Database, Target, BarChart3, Cpu, Zap } from "lucide-react"
import Link from "next/link"

export default function AITrainingPage() {
  const benefits = [
    "Achieve 95%+ model accuracy with high-quality training data",
    "Reduce model training time by 60% with optimized pipelines",
    "Lower operational costs through efficient resource utilization",
    "Ensure ethical AI with bias detection and mitigation",
    "Scale AI models to handle millions of predictions per day",
    "Maintain model performance with continuous monitoring",
    "Accelerate time-to-market for AI-powered products",
    "Comply with AI governance and regulatory requirements",
  ]

  const trainingServices = [
    {
      title: "Custom Model Development",
      description: "Build AI models tailored to your specific business requirements",
      icon: Brain,
      features: [
        "Model Architecture Design",
        "Training Pipeline Setup",
        "Hyperparameter Tuning",
        "Performance Optimization",
      ],
    },
    {
      title: "Data Preparation & Engineering",
      description: "Transform raw data into high-quality training datasets",
      icon: Database,
      features: ["Data Cleaning", "Feature Engineering", "Data Augmentation", "Quality Validation"],
    },
    {
      title: "Model Fine-tuning",
      description: "Optimize pre-trained models for your specific use cases",
      icon: Target,
      features: ["Transfer Learning", "Domain Adaptation", "Few-shot Learning", "Model Compression"],
    },
    {
      title: "MLOps & Deployment",
      description: "Deploy and monitor AI models in production environments",
      icon: Cpu,
      features: ["Model Deployment", "A/B Testing", "Performance Monitoring", "Automated Retraining"],
    },
  ]

  const modelTypes = [
    "Computer Vision Models",
    "Natural Language Processing",
    "Recommendation Systems",
    "Predictive Analytics",
    "Time Series Forecasting",
    "Anomaly Detection",
    "Classification Models",
    "Regression Models",
    "Clustering Algorithms",
    "Reinforcement Learning",
    "Generative AI Models",
    "Multi-modal AI Systems",
  ]

  const technologies = [
    "TensorFlow & PyTorch",
    "Hugging Face Transformers",
    "Scikit-learn & XGBoost",
    "CUDA & GPU Computing",
    "Docker & Kubernetes",
    "MLflow & Weights & Biases",
    "Apache Airflow",
    "AWS SageMaker",
    "Google Cloud AI",
    "Azure Machine Learning",
    "ONNX & TensorRT",
    "Custom Training Frameworks",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-[#C00000] text-white">AI Model Training</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            AI Model <span className="text-[#C00000]">Training</span> & Development
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Build powerful, accurate AI models that solve real business problems. From data preparation to deployment,
            we create custom machine learning solutions that deliver measurable results and competitive advantages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#C00000] hover:bg-[#A00000] text-white px-8 py-3">
              <Link href="/get-quote">
                Train Your AI Model <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8 py-3 bg-transparent">
              <Link href="/resources/case-studies">View AI Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* AI Training Stats */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI Training Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI models deliver superior performance with industry-leading accuracy and efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">95%+</div>
              <p className="text-gray-600">Model Accuracy</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">60%</div>
              <p className="text-gray-600">Faster Training</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">10M+</div>
              <p className="text-gray-600">Predictions/Day</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <p className="text-gray-600">Models Deployed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Services */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI Training Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end AI model development from concept to production deployment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {trainingServices.map((service, index) => (
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
              <Badge className="mb-4 bg-blue-100 text-blue-800">AI Training Success</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Medical Imaging AI Model</h2>
              <p className="text-lg text-gray-600 mb-6">
                We developed a computer vision model for medical imaging that achieved 97% accuracy in detecting
                anomalies, reducing diagnosis time by 80% and improving patient outcomes.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium text-gray-900">Data Collection:</span>
                    <p className="text-gray-600 text-sm">
                      Curated and annotated 100,000+ medical images with expert validation
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium text-gray-900">Model Architecture:</span>
                    <p className="text-gray-600 text-sm">
                      Custom CNN architecture optimized for medical imaging analysis
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium text-gray-900">Training Pipeline:</span>
                    <p className="text-gray-600 text-sm">
                      Implemented distributed training with GPU clusters for faster convergence
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <span className="font-medium text-gray-900">Validation & Testing:</span>
                    <p className="text-gray-600 text-sm">
                      Rigorous testing with independent datasets and clinical validation
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-4">Model Performance:</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-[#C00000]">97%</div>
                    <div className="text-sm text-gray-600">Detection Accuracy</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#C00000]">80%</div>
                    <div className="text-sm text-gray-600">Faster Diagnosis</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">AI Model Types We Train</h3>
                <div className="grid grid-cols-2 gap-4">
                  {modelTypes.map((model, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-white rounded-lg">
                      <Brain className="h-4 w-4 text-[#C00000]" />
                      <span className="text-sm text-gray-700">{model}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="font-medium text-gray-900 mb-4">Training Technologies</h4>
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

      {/* Training Process */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our AI Training Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Systematic approach to building high-performance AI models
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-gray-200">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Data Preparation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Collect, clean, and prepare high-quality training datasets with proper validation and augmentation.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-gray-200">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-lg">Model Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Design optimal model architecture and select appropriate algorithms for your specific use case.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-gray-200">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Training & Tuning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Train models with optimized hyperparameters and implement advanced techniques for best performance.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-gray-200">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Deployment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Deploy models to production with monitoring, scaling, and continuous improvement capabilities.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Professional AI Model Training Matters</h2>
            <p className="text-xl text-gray-600">
              Expert AI training delivers models that perform reliably in real-world conditions
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
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your AI Model?</h2>
          <p className="text-xl text-red-100 mb-8">
            Let's create custom AI models that solve your specific business challenges and deliver measurable results.
          </p>
          <Button asChild size="lg" variant="outline" className="bg-white text-[#C00000] hover:bg-gray-100 px-8 py-3">
            <Link href="/get-quote">
              Start Your AI Training Project <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
