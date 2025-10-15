import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Online Security Tips for 2025",
    excerpt: "Protect your digital life with these practical security measures that everyone should follow.",
    date: "2025-02-15",
    readTime: "5 min read",
    category: "Security",
  },
  {
    id: 2,
    title: "Understanding BMI: What Your Numbers Really Mean",
    excerpt: "Learn how to interpret your BMI results and what they mean for your health journey.",
    date: "2025-02-10",
    readTime: "4 min read",
    category: "Health",
  },
  {
    id: 3,
    title: "The Ultimate Guide to Password Security",
    excerpt: "Everything you need to know about creating and managing strong passwords in the digital age.",
    date: "2025-02-05",
    readTime: "7 min read",
    category: "Security",
  },
  {
    id: 4,
    title: "Calorie Counting: Science vs. Myths",
    excerpt: "Separating fact from fiction when it comes to calories and weight management.",
    date: "2025-01-28",
    readTime: "6 min read",
    category: "Health",
  },
  {
    id: 5,
    title: "QR Codes in 2025: Creative Uses and Applications",
    excerpt: "Discover innovative ways businesses and individuals are using QR codes today.",
    date: "2025-01-20",
    readTime: "5 min read",
    category: "Technology",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights, tips, and guides to help you make the most of our tools and improve your digital life.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto space-y-6 animate-slide-up">
            {blogPosts.map((post) => (
              <Card key={post.id} className="p-6 shadow-soft hover:shadow-elevated transition-shadow cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl font-semibold mb-2 hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-muted-foreground">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
