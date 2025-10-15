import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Calculator, 
  Activity, 
  FileText, 
  Percent, 
  Key, 
  QrCode, 
  DollarSign,
  Zap,
  Shield,
  Users,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const toolCards = [
  {
    icon: Calculator,
    title: "BMI Calculator",
    description: "Calculate your Body Mass Index and understand your health metrics.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    path: "/tools/bmi-calculator",
  },
  {
    icon: Activity,
    title: "Calorie Calculator",
    description: "Estimate your daily calorie needs based on your lifestyle.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    path: "/tools/calorie-calculator",
  },
  {
    icon: FileText,
    title: "Word Counter",
    description: "Count words, characters, and estimate reading time instantly.",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    path: "/tools/word-counter",
  },
  {
    icon: Percent,
    title: "Discount Calculator",
    description: "Calculate discounts and final prices for smart shopping.",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    path: "/tools/discount-calculator",
  },
  {
    icon: Key,
    title: "Password Generator",
    description: "Generate strong, secure passwords to protect your accounts.",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    path: "/tools/password-generator",
  },
  {
    icon: QrCode,
    title: "QR Code Generator",
    description: "Create QR codes from text or URLs in seconds.",
    color: "text-pink-600",
    bgColor: "bg-pink-100",
    path: "/tools/qr-code-generator",
  },
  {
    icon: DollarSign,
    title: "Zakat Calculator",
    description: "Calculate your zakat obligations quickly and accurately.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    path: "/tools/zakat-calculator",
  },
];

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "All tools work instantly in your browser with no delays.",
  },
  {
    icon: Shield,
    title: "100% Private",
    description: "Your data never leaves your device. Complete privacy guaranteed.",
  },
  {
    icon: Users,
    title: "No Sign-Up Required",
    description: "Start using tools immediately without creating an account.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 py-20 md:py-32 relative">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Smart Tools for Everyday Life
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                From BMI to QR codes — everything you need in one clean, privacy-first dashboard. Fast, free, and ad-free.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-lg">
                  <Link to="/tools">
                    Start Using Tools
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Tools Preview */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">All Your Essential Tools</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our collection of powerful, easy-to-use utilities designed to make your daily tasks effortless.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
            {toolCards.map((tool, index) => (
              <Link key={index} to={tool.path}>
                <Card 
                  className="p-6 h-full hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                >
                  <div className={`w-12 h-12 ${tool.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <tool.icon className={tool.color} size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{tool.title}</h3>
                  <p className="text-muted-foreground">{tool.description}</p>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90">
              <Link to="/tools">
                View All Tools
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Smart Utility Hub?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're committed to providing the best online tools experience with your privacy and convenience in mind.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto animate-slide-up">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="text-primary-foreground" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <div className="max-w-3xl mx-auto mt-16">
              <Card className="p-8 shadow-elevated">
                <h3 className="text-2xl font-semibold mb-6 text-center">Additional Benefits</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-secondary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-medium">Ad-Free Experience</p>
                      <p className="text-sm text-muted-foreground">No annoying ads or distractions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-secondary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-medium">Always Free</p>
                      <p className="text-sm text-muted-foreground">All tools free forever, no premium tiers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-secondary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-medium">Mobile Friendly</p>
                      <p className="text-sm text-muted-foreground">Works perfectly on all devices</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-secondary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-medium">Secure & Private</p>
                      <p className="text-sm text-muted-foreground">Client-side processing only</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Thousands</h2>
            <p className="text-lg text-muted-foreground">See what our users have to say</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto animate-slide-up">
            <Card className="p-6 shadow-soft">
              <div className="flex items-center gap-1 mb-4 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "Finally, a tool site that doesn't bombard me with ads! The BMI and calorie calculators are spot on. Love it!"
              </p>
              <p className="font-semibold">Sarah M.</p>
              <p className="text-sm text-muted-foreground">Fitness Enthusiast</p>
            </Card>
            
            <Card className="p-6 shadow-soft">
              <div className="flex items-center gap-1 mb-4 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "The password generator is amazing! I use it for all my client projects. Clean interface and super fast."
              </p>
              <p className="font-semibold">Michael R.</p>
              <p className="text-sm text-muted-foreground">Web Developer</p>
            </Card>
            
            <Card className="p-6 shadow-soft">
              <div className="flex items-center gap-1 mb-4 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "Simple, effective, and respects my privacy. The zakat calculator helped me fulfill my religious obligations easily."
              </p>
              <p className="font-semibold">Ahmed K.</p>
              <p className="text-sm text-muted-foreground">Business Owner</p>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Ready to Simplify Your Life?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto animate-fade-in">
              Join thousands of users who trust Smart Utility Hub for their daily calculations and utilities.
            </p>
            <Button asChild size="lg" variant="secondary" className="animate-slide-up">
              <Link to="/tools">
                Get Started Now
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
