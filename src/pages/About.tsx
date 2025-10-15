import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Zap, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">About Smart Utility Hub</h1>
            
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground animate-slide-up">
              <p className="text-xl leading-relaxed">
                Welcome to Smart Utility Hub — your trusted digital companion for everyday calculations and essential utilities. 
                We believe that powerful tools should be simple, accessible, and completely free for everyone.
              </p>
              
              <p>
                In today's fast-paced world, you shouldn't have to download multiple apps or sign up for countless services 
                just to calculate your BMI, generate a password, or create a QR code. That's why we built Smart Utility Hub: 
                a single, clean platform that brings together all the tools you need in one place.
              </p>
              
              <h2 className="text-3xl font-semibold text-foreground mt-12 mb-6">Our Mission</h2>
              
              <p>
                Our mission is simple: to provide fast, reliable, and secure online tools that help you accomplish everyday 
                tasks without hassle. Whether you're tracking your fitness goals, securing your accounts, or managing your 
                finances, we're here to make it easy.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 my-12">
                <div className="p-6 bg-card rounded-lg shadow-soft border border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Lightning Fast</h3>
                  <p className="text-sm">All calculations happen instantly in your browser. No waiting, no delays.</p>
                </div>
                
                <div className="p-6 bg-card rounded-lg shadow-soft border border-border">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="text-secondary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">100% Private</h3>
                  <p className="text-sm">Your data never leaves your device. Everything works locally for maximum privacy.</p>
                </div>
                
                <div className="p-6 bg-card rounded-lg shadow-soft border border-border">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                    <Heart className="text-accent-foreground" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Always Free</h3>
                  <p className="text-sm">No subscriptions, no hidden costs. Just free tools for everyone, forever.</p>
                </div>
              </div>
              
              <h2 className="text-3xl font-semibold text-foreground mt-12 mb-6">Why Choose Us?</h2>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span><strong>No Registration Required:</strong> Start using tools immediately without creating an account.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span><strong>Ad-Free Experience:</strong> Focus on what matters without annoying advertisements.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span><strong>Mobile Optimized:</strong> Works perfectly on any device, anywhere, anytime.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span><strong>Privacy First:</strong> All tools work client-side. We don't store or track your data.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span><strong>Regular Updates:</strong> We continuously add new tools based on user feedback.</span>
                </li>
              </ul>
              
              <h2 className="text-3xl font-semibold text-foreground mt-12 mb-6">Get In Touch</h2>
              
              <p>
                Have questions, suggestions, or feedback? We'd love to hear from you! Contact us at{" "}
                <a href="mailto:support@smartutilityhub.com" className="text-primary hover:underline">
                  support@smartutilityhub.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
