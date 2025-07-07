"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, Users, Building, Timer, CheckCircle, Quote } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getCaseStudyById, getAllCaseStudies, type CaseStudy } from "@/lib/content-store"

export default function CaseStudyPage() {
  const params = useParams()
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null)
  const [relatedStudies, setRelatedStudies] = useState<CaseStudy[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const id = Number.parseInt(params.id as string)
    if (isNaN(id)) {
      setLoading(false)
      return
    }

    // Get the case study
    const study = getCaseStudyById(id)
    setCaseStudy(study)

    if (study) {
      // Get related case studies (same category, excluding current study)
      const allStudies = getAllCaseStudies()
      const related = allStudies.filter((s) => s.id !== study.id && s.category === study.category).slice(0, 2)
      setRelatedStudies(related)
    }

    setLoading(false)
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#C00000] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading case study...</p>
        </div>
      </div>
    )
  }

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Case Study Not Found</h1>
          <p className="text-gray-600 mb-8">The case study you're looking for doesn't exist or has been removed.</p>
          <Button asChild className="bg-[#C00000] hover:bg-[#A00000]">
            <Link href="/resources/case-studies">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Case Studies
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/resources/case-studies" className="text-[#C00000] hover:text-[#A00000]">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <Badge variant="secondary">{caseStudy.category}</Badge>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-2 leading-tight">{caseStudy.title}</h1>
          <p className="text-xl text-gray-600 mb-6">{caseStudy.subtitle}</p>

          <div className="flex flex-wrap items-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <Building className="h-4 w-4" />
              <span>{caseStudy.client}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{caseStudy.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{caseStudy.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Hero Image */}
            {caseStudy.image && (
              <Card className="mb-8 overflow-hidden">
                <div className="relative h-64 md:h-80">
                  <Image
                    src={caseStudy.image || "/placeholder.svg"}
                    alt={caseStudy.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </Card>
            )}

            {/* Project Overview */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Project Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">{caseStudy.description}</p>

                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Building className="h-6 w-6 text-[#C00000] mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Industry</p>
                    <p className="font-semibold">{caseStudy.industry}</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Timer className="h-6 w-6 text-[#C00000] mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Duration</p>
                    <p className="font-semibold">{caseStudy.projectDuration}</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Users className="h-6 w-6 text-[#C00000] mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Team Size</p>
                    <p className="font-semibold">{caseStudy.teamSize}</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-[#C00000] mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Status</p>
                    <p className="font-semibold">Completed</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Challenge */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-red-600">The Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  className="prose prose-lg max-w-none prose-p:text-gray-700 prose-ul:text-gray-700 prose-strong:text-gray-900"
                  dangerouslySetInnerHTML={{ __html: caseStudy.challenge.replace(/\n/g, "<br>") }}
                />
              </CardContent>
            </Card>

            {/* Solution */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-green-600">Our Solution</CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  className="prose prose-lg max-w-none prose-p:text-gray-700 prose-ul:text-gray-700 prose-strong:text-gray-900"
                  dangerouslySetInnerHTML={{ __html: caseStudy.solution.replace(/\n/g, "<br>") }}
                />
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">Results & Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {caseStudy.results.map((result, index) => (
                    <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
                      <div className="text-3xl font-bold text-[#C00000] mb-2">{result.value}</div>
                      <div className="font-semibold text-gray-900 mb-1">{result.metric}</div>
                      <div className="text-sm text-gray-600">{result.description}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Technologies */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Technologies Used</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline" className="px-3 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Testimonial */}
            {caseStudy.testimonial.quote && (
              <Card className="mb-8 bg-gradient-to-r from-[#C00000] to-[#A00000] text-white">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 mb-4 opacity-80" />
                  <blockquote className="text-lg italic mb-4">"{caseStudy.testimonial.quote}"</blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white font-semibold">
                      {caseStudy.testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold">{caseStudy.testimonial.author}</div>
                      <div className="text-sm opacity-90">{caseStudy.testimonial.position}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-8 space-y-6">
              {/* Tags */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Project Tags</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Related Case Studies */}
              {relatedStudies.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Related Case Studies</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {relatedStudies.map((study) => (
                      <div key={study.id} className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0">
                        <Link href={`/resources/case-studies/${study.id}`}>
                          <h4 className="font-medium text-sm line-clamp-2 mb-2 hover:text-[#C00000] cursor-pointer transition-colors">
                            {study.title}
                          </h4>
                        </Link>
                        <p className="text-xs text-gray-600 mb-2 line-clamp-2">{study.description}</p>
                        <div className="text-xs text-gray-500 flex items-center gap-2">
                          <Calendar className="h-3 w-3" />
                          {study.date}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}

              {/* CTA */}
              <Card className="bg-[#C00000] text-white">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-lg mb-2">Ready for Similar Results?</h3>
                  <p className="text-sm mb-4 opacity-90">
                    Let's discuss how we can help transform your business with our proven solutions.
                  </p>
                  <Button asChild variant="secondary" className="w-full">
                    <Link href="/get-quote">Start Your Project</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
