"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getBlogById, getAllBlogs, type BlogPost } from "@/lib/content-store"

export default function BlogPostPage() {
  const params = useParams()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const id = Number.parseInt(params.id as string)
    if (isNaN(id)) {
      setLoading(false)
      return
    }

    // Get the blog post
    const blogPost = getBlogById(id)
    setPost(blogPost)

    if (blogPost) {
      // Get related posts (same category, excluding current post)
      const allPosts = getAllBlogs()
      const related = allPosts.filter((p) => p.id !== blogPost.id && p.category === blogPost.category).slice(0, 3)
      setRelatedPosts(related)
    }

    setLoading(false)
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#C00000] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blog post...</p>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
          <Button asChild className="bg-[#C00000] hover:bg-[#A00000]">
            <Link href="/resources/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
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
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/resources/blog" className="text-[#C00000] hover:text-[#A00000]">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <Badge variant="secondary">{post.category}</Badge>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">{post.title}</h1>

          <div className="flex items-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <Card className="mb-8">
              {post.image && (
                <div className="relative h-64 md:h-80 overflow-hidden rounded-t-lg">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
              )}

              <CardContent className="p-8">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Content */}
                <div
                  className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-[#C00000] prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </CardContent>
            </Card>

            {/* Share Section */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Found this article helpful?</h3>
                    <p className="text-gray-600">Share it with your network</p>
                  </div>
                  <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-8 space-y-6">
              {/* Author Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">About the Author</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-[#C00000] rounded-full flex items-center justify-center text-white font-semibold">
                      IT
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{post.author}</h4>
                      <p className="text-sm text-gray-600">Technology Experts</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Our team of experienced developers and consultants share insights on the latest technology trends
                    and best practices.
                  </p>
                </CardContent>
              </Card>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      Related Articles
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <div key={relatedPost.id} className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0">
                        <Link href={`/resources/blog/${relatedPost.id}`}>
                          <h4 className="font-medium text-sm line-clamp-2 mb-2 hover:text-[#C00000] cursor-pointer transition-colors">
                            {relatedPost.title}
                          </h4>
                        </Link>
                        <div className="text-xs text-gray-500 flex items-center gap-2">
                          <Calendar className="h-3 w-3" />
                          {relatedPost.date}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}

              {/* CTA */}
              <Card className="bg-[#C00000] text-white">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-lg mb-2">Need Expert Help?</h3>
                  <p className="text-sm mb-4 opacity-90">
                    Let our team help you implement these solutions for your business.
                  </p>
                  <Button asChild variant="secondary" className="w-full">
                    <Link href="/get-quote">Get a Quote</Link>
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
