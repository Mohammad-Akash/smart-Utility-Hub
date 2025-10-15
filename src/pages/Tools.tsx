import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calculator, 
  Activity, 
  FileText, 
  Percent, 
  Key, 
  QrCode, 
  DollarSign,
  ArrowRight
} from "lucide-react";

const toolsData = [
  {
    icon: Calculator,
    title: "BMI Calculator",
    description: "Calculate your Body Mass Index and understand your health metrics with color-coded results.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    path: "/tools/bmi-calculator",
  },
  {
    icon: Activity,
    title: "Calorie Calculator",
    description: "Estimate your daily calorie needs based on age, weight, height, and activity level.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    path: "/tools/calorie-calculator",
  },
  {
    icon: FileText,
    title: "Word Counter",
    description: "Count words, characters, and estimate reading time for any text instantly.",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    path: "/tools/word-counter",
  },
  {
    icon: Percent,
    title: "Discount Calculator",
    description: "Calculate discounts and final prices to make smart shopping decisions.",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    path: "/tools/discount-calculator",
  },
  {
    icon: Key,
    title: "Password Generator",
    description: "Generate strong, secure passwords with customizable options to protect your accounts.",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    path: "/tools/password-generator",
  },
  {
    icon: QrCode,
    title: "QR Code Generator",
    description: "Create QR codes from text or URLs and download them instantly.",
    color: "text-pink-600",
    bgColor: "bg-pink-100",
    path: "/tools/qr-code-generator",
  },
  {
    icon: DollarSign,
    title: "Zakat Calculator",
    description: "Calculate your zakat obligations quickly and accurately based on Islamic principles.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    path: "/tools/zakat-calculator",
  },
];

const Tools = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Tools</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our collection of free, easy-to-use tools. Click on any tool to get started.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto animate-slide-up">
          {toolsData.map((tool, index) => (
            <Link key={index} to={tool.path}>
              <Card className="p-6 h-full hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                <div className={`w-14 h-14 ${tool.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <tool.icon className={tool.color} size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {tool.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {tool.description}
                </p>
                <Button variant="ghost" className="p-0 h-auto font-semibold text-primary group-hover:gap-2 transition-all">
                  Use Tool
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              </Card>
            </Link>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Tools;
