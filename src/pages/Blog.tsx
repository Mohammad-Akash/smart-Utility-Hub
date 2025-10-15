import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Online Security Tips for 2025",
    excerpt: "Protect your digital life with these practical security measures that everyone should follow in the modern age.",
    date: "2025-02-15",
    readTime: "5 min read",
    category: "Security",
    author: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Understanding BMI: What Your Numbers Really Mean",
    excerpt: "Learn how to interpret your BMI results and what they mean for your overall health journey and fitness goals.",
    date: "2025-02-10",
    readTime: "4 min read",
    category: "Health",
    author: "Dr. Michael Chen",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=400&fit=crop",
  },
  {
    id: 3,
    title: "The Ultimate Guide to Password Security",
    excerpt: "Everything you need to know about creating and managing strong passwords in the digital age to stay safe online.",
    date: "2025-02-05",
    readTime: "7 min read",
    category: "Security",
    author: "Alex Martinez",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Calorie Counting: Science vs. Myths",
    excerpt: "Separating fact from fiction when it comes to calories, metabolism, and effective weight management strategies.",
    date: "2025-01-28",
    readTime: "6 min read",
    category: "Health",
    author: "Emma Wilson",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop",
  },
  {
    id: 5,
    title: "QR Codes in 2025: Creative Uses and Applications",
    excerpt: "Discover innovative ways businesses and individuals are using QR codes today for marketing and communication.",
    date: "2025-01-20",
    readTime: "5 min read",
    category: "Technology",
    author: "David Kumar",
    image: "https://images.unsplash.com/photo-1617802690658-1173a812650d?w=800&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Productivity Tools That Actually Work",
    excerpt: "Cut through the noise and discover which online tools genuinely boost productivity and save time in your daily routine.",
    date: "2025-01-15",
    readTime: "6 min read",
    category: "Productivity",
    author: "Lisa Thompson",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=400&fit=crop",
  },
];

const categories = ["All", "Security", "Health", "Technology", "Productivity"];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-background py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
              <p className="text-xl text-muted-foreground">
                Insights, tips, and guides to help you make the most of our tools and improve your digital life.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </section>

        {/* Featured Post */}
        <section className="container mx-auto px-4 pb-12">
          <Card className="overflow-hidden shadow-elevated hover:shadow-xl transition-shadow cursor-pointer group max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <Badge className="absolute top-4 left-4 bg-primary">Featured</Badge>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <Badge variant="outline" className="w-fit mb-3">{blogPosts[0].category}</Badge>
                <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {blogPosts[0].title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <User size={16} />
                    {blogPosts[0].author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={16} />
                    {new Date(blogPosts[0].date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={16} />
                    {blogPosts[0].readTime}
                  </span>
                </div>
                <button className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  Read Article
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </Card>
        </section>
        
        {/* Blog Grid */}
        <section className="container mx-auto px-4 pb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <Badge variant="outline" className="mb-3">{post.category}</Badge>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground border-t pt-4">
                    <span className="flex items-center gap-1">
                      <User size={14} />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-gradient-primary py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">Stay Updated</h2>
            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest articles, tips, and tool updates delivered to your inbox.
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-secondary"
              />
              <button className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
