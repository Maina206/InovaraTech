"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, MessageCircle, Clock, CheckCircle } from "lucide-react"

export default function GetQuotePage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    message: "",
    consent: false,
  })

  const services = [
    "Software & API Documentation",
    "Technical Writing",
    "Automation",
    "Artificial Intelligence",
    "Frontend (UI/UX)",
    "Backend Development",
    "System Integration",
    "WordPress",
    "SEO (Technical + Content)",
    "AI Training (Model Training)",
    "Data Annotation",
  ]

  const handleServiceChange = (service: string, checked: boolean) => {
    if (checked) {
      setSelectedServices([...selectedServices, service])
    } else {
      setSelectedServices(selectedServices.filter((s) => s !== service))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", { ...formData, services: selectedServices })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Get a <span className="text-[#C00000]">Quote</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ready to transform your business with cutting-edge technology? Let's discuss your project and create
            something amazing together.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Tell Us About Your Project</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours with a detailed proposal.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>

                  {/* Services Selection */}
                  <div className="space-y-4">
                    <Label>Services Interested In *</Label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {services.map((service) => (
                        <div key={service} className="flex items-center space-x-2">
                          <Checkbox
                            id={service}
                            checked={selectedServices.includes(service)}
                            onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                          />
                          <Label htmlFor={service} className="text-sm font-normal cursor-pointer">
                            {service}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Description */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Message / Project Description *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                      className="min-h-[120px]"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  {/* File Upload */}
                  <div className="space-y-2">
                    <Label htmlFor="file">Upload Files (Optional)</Label>
                    <Input id="file" type="file" multiple className="cursor-pointer" />
                    <p className="text-sm text-gray-500">
                      You can upload project briefs, wireframes, or any relevant documents
                    </p>
                  </div>

                  {/* Consent */}
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
                      required
                    />
                    <Label htmlFor="consent" className="text-sm font-normal cursor-pointer">
                      I agree to the terms and privacy policy and consent to being contacted about this project *
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#C00000] hover:bg-[#A00000] text-white py-3"
                    disabled={!formData.consent || selectedServices.length === 0}
                  >
                    Send Quote Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information Sidebar */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Mail className="h-5 w-5 text-[#C00000]" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="font-medium">Email</Label>
                  <p className="text-gray-600">hello@inovaratech.com</p>
                </div>
                <div>
                  <Label className="font-medium">Response Time</Label>
                  <p className="text-gray-600 flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Usually within 24 hours
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* What Happens Next */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What Happens Next?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#C00000] text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <p className="font-medium">Initial Review</p>
                    <p className="text-sm text-gray-600">We review your requirements and prepare questions</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#C00000] text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <p className="font-medium">Discovery Call</p>
                    <p className="text-sm text-gray-600">We schedule a call to discuss your project in detail</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#C00000] text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <p className="font-medium">Proposal</p>
                    <p className="text-sm text-gray-600">We send a detailed proposal with timeline and pricing</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="font-medium text-green-800">Trusted by 50+ Businesses</span>
                </div>
                <p className="text-sm text-green-700">
                  We've successfully delivered projects across various industries and scales.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Prefer to Chat Directly?</h2>
          <p className="text-gray-300 mb-6">
            We usually respond within 24 hours. Let's build something great together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Chat
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
