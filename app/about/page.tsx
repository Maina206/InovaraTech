import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Bot, Smartphone, Search, Brain, Users, Target, Award } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const services = [
    { name: "Software & API documentation", icon: Code },
    { name: "Automation and AI implementation", icon: Bot },
    { name: "Full-stack development", icon: Smartphone },
    { name: "SEO and WordPress services", icon: Search },
    { name: "Data annotation and model training", icon: Brain },
  ]

  const values = [
    {
      title: "Innovation",
      description: "We stay at the forefront of technology trends to deliver cutting-edge solutions",
      icon: Target,
    },
    {
      title: "Precision",
      description: "Every project is executed with meticulous attention to detail and quality",
      icon: Award,
    },
    {
      title: "Client-First",
      description: "Your success drives our approach to every project and partnership",
      icon: Users,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-[#C00000]">Inovara Tech</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            A dynamic technology agency helping businesses thrive through tailored digital solutions
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Inovara Tech is a dynamic technology agency helping businesses thrive through tailored digital solutions.
              We bridge the gap between complex technology and practical business outcomes, delivering solutions that
              drive real growth and efficiency.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">What We Specialize In</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {services.map((service, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-[#C00000] rounded-lg flex items-center justify-center">
                    <service.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-800 font-medium">{service.name}</span>
                </div>
              ))}
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              As a lean, agile team, we offer personalized attention and hands-on expertise, whether you're scaling a
              product, streamlining workflows, or training cutting-edge AI models. Our approach blends innovation,
              precision, and a client-first mindset to help you succeed in the digital era.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-gray-200">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-[#C00000] rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Approach</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            We believe in building long-term partnerships with our clients. Every project begins with understanding your
            unique challenges and goals. Our agile methodology ensures transparency, flexibility, and continuous
            communication throughout the development process.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-12">
            Whether you're a startup looking to build your first product or an enterprise seeking to modernize your
            systems, we have the expertise and dedication to help you achieve your technology objectives.
          </p>

          <Button asChild size="lg" className="bg-[#C00000] hover:bg-[#A00000] text-white px-8 py-3">
            <Link href="/get-quote">Let's Work Together</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
