"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Calendar, Clock, User, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getAllBlogs, type BlogPost } from "@/lib/content-store"

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [visiblePosts, setVisiblePosts] = useState(6)
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    // Load blogs from our content store
    const posts = getAllBlogs()
    setBlogPosts(posts)
  }, [])

  const categories = [
    "All",
    "Documentation",
    "Automation",
    "AI",
    "Development",
    "SEO",
    "WordPress",
    "Technical Writing",
  ]
  const popularTags = ["API", "React", "Node.js", "AI", "SEO", "Automation", "Documentation", "Best Practices"]

  // Filter posts based on category and search term
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const displayedPosts = filteredPosts.slice(0, visiblePosts)

  const handleTagClick = (tag: string) => {
    setSearchTerm(tag.toLowerCase())
    setSelectedCategory("All")
    setVisiblePosts(6) // Reset visible posts when filtering
  }

  const handleLoadMore = () => {
    setVisiblePosts((prev) => prev + 6)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Tech <span className="text-[#C00000]">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Insights, tutorials, and best practices from our team of technology experts
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search articles..."
              className="pl-10 py-3 text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === selectedCategory ? "default" : "outline"}
                  size="sm"
                  className={category === selectedCategory ? "bg-[#C00000] hover:bg-[#A00000]" : ""}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Blog Posts Grid */}
            <div className="space-y-8">
              {displayedPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3 relative h-48 md:h-auto">
                      <Image
                        src={post.image || "/placeholder.svg?height=250&width=400"}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="md:w-2/3">
                      <CardHeader>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                          <Badge variant="secondary">{post.category}</Badge>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {post.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {post.readTime}
                          </div>
                        </div>

                        <CardTitle className="text-xl group-hover:text-[#C00000] transition-colors line-clamp-2">
                          {post.title}
                        </CardTitle>

                        <CardDescription className="text-gray-600 leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </CardDescription>
                      </CardHeader>

                      <CardContent>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-xs cursor-pointer hover:bg-[#C00000] hover:text-white transition-colors"
                              onClick={() => handleTagClick(tag)}
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <User className="h-4 w-4" />
                            {post.author}
                          </div>

                          <Button asChild variant="ghost" className="text-[#C00000] hover:text-[#A00000] p-0 h-auto">
                            <Link href={`/resources/blog/${post.id}`}>
                              Read More <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Load More Button */}
            {visiblePosts < filteredPosts.length && filteredPosts.length > 0 && (
              <div className="text-center mt-12">
                <Button variant="outline" size="lg" className="px-8 bg-transparent" onClick={handleLoadMore}>
                  Load More Articles ({filteredPosts.length - visiblePosts} remaining)
                </Button>
              </div>
            )}

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-8 space-y-8">
              {/* Popular Tags */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Popular Tags</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="cursor-pointer hover:bg-[#C00000] hover:text-white transition-colors"
                        onClick={() => handleTagClick(tag)}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="bg-gray-50">
                <CardHeader>
                  <CardTitle className="text-lg">Stay Updated</CardTitle>
                  <CardDescription>Get the latest tech insights delivered to your inbox</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input placeholder="Your email address" />
                  <Button className="w-full bg-[#C00000] hover:bg-[#A00000]">Subscribe</Button>
                </CardContent>
              </Card>

              {/* Recent Posts */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recent Posts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0">
                      <Link href={`/resources/blog/${post.id}`}>
                        <h4 className="font-medium text-sm line-clamp-2 mb-2 hover:text-[#C00000] cursor-pointer transition-colors">
                          {post.title}
                        </h4>
                      </Link>
                      <div className="text-xs text-gray-500 flex items-center gap-2">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
