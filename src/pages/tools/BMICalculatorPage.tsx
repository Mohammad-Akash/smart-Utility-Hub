import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BMICalculator from "@/components/tools/BMICalculator";
import { Calculator } from "lucide-react";

const BMICalculatorPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calculator className="text-primary" size={32} />
            </div>
            <h1 className="text-4xl font-bold mb-4">BMI Calculator</h1>
            <p className="text-lg text-muted-foreground">
              Calculate your Body Mass Index and understand your health metrics instantly.
            </p>
          </div>
          
          <div className="animate-slide-up">
            <BMICalculator />
          </div>
          
          <div className="mt-12 p-6 bg-muted/30 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">About BMI</h2>
            <p className="text-muted-foreground mb-4">
              Body Mass Index (BMI) is a measure of body fat based on height and weight. It's a useful 
              screening tool to categorize your weight status.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><strong>Underweight:</strong> BMI below 18.5</p>
              <p><strong>Normal weight:</strong> BMI 18.5 - 24.9</p>
              <p><strong>Overweight:</strong> BMI 25 - 29.9</p>
              <p><strong>Obese:</strong> BMI 30 or above</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BMICalculatorPage;
