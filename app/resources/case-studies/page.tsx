"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getAllCaseStudies, type CaseStudy } from "@/lib/content-store"

export default function CaseStudiesPage() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([])

  useEffect(() => {
    // Load case studies from our content store
    const studies = getAllCaseStudies()
    setCaseStudies(studies)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Case <span className="text-[#C00000]">Studies</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Real projects, real results. Explore how we've helped businesses transform their technology landscape.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {caseStudies.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No case studies available yet.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <Card key={study.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={study.image || "/placeholder.svg?height=300&width=500"}
                      alt={study.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-white/90 text-gray-800">
                        {study.category}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {study.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {study.readTime}
                      </div>
                    </div>

                    <CardTitle className="text-xl group-hover:text-[#C00000] transition-colors">
                      {study.title}
                    </CardTitle>

                    <CardDescription className="text-gray-600 leading-relaxed">{study.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button asChild variant="ghost" className="text-[#C00000] hover:text-[#A00000] p-0 h-auto">
                      <Link href={`/resources/case-studies/${study.id}`}>
                        Read Full Case Study <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's discuss how we can help you achieve similar results for your business.
          </p>
          <Button asChild size="lg" className="bg-[#C00000] hover:bg-[#A00000] text-white px-8 py-3">
            <Link href="/get-quote">
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
