import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CalorieCalculator from "@/components/tools/CalorieCalculator";
import { Activity } from "lucide-react";

const CalorieCalculatorPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Activity className="text-secondary" size={32} />
            </div>
            <h1 className="text-4xl font-bold mb-4">Calorie Calculator</h1>
            <p className="text-lg text-muted-foreground">
              Estimate your daily calorie needs based on your age, weight, height, and activity level.
            </p>
          </div>
          
          <div className="animate-slide-up">
            <CalorieCalculator />
          </div>
          
          <div className="mt-12 p-6 bg-muted/30 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Understanding Your Calorie Needs</h2>
            <p className="text-muted-foreground mb-4">
              This calculator uses the Mifflin-St Jeor equation, one of the most accurate methods to estimate 
              your daily calorie requirements based on your basal metabolic rate (BMR) and activity level.
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> This is an estimate. Individual metabolism varies. Consult a healthcare 
              professional for personalized nutrition advice.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CalorieCalculatorPage;
