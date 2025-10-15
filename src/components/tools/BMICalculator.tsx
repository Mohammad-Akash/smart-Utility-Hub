import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    const h = parseFloat(height) / 100; // convert cm to m
    const w = parseFloat(weight);
    
    if (h > 0 && w > 0) {
      const bmiValue = w / (h * h);
      setBmi(parseFloat(bmiValue.toFixed(1)));
      
      if (bmiValue < 18.5) {
        setCategory("Underweight");
      } else if (bmiValue < 25) {
        setCategory("Normal weight");
      } else if (bmiValue < 30) {
        setCategory("Overweight");
      } else {
        setCategory("Obese");
      }
    }
  };

  const getBMIColor = () => {
    if (!bmi) return "";
    if (bmi < 18.5) return "text-blue-600";
    if (bmi < 25) return "text-secondary";
    if (bmi < 30) return "text-yellow-600";
    return "text-destructive";
  };

  return (
    <Card className="p-6 shadow-elevated">
      <h2 className="text-2xl font-semibold mb-6">BMI Calculator</h2>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="height">Height (cm)</Label>
          <Input
            id="height"
            type="number"
            placeholder="175"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        
        <div>
          <Label htmlFor="weight">Weight (kg)</Label>
          <Input
            id="weight"
            type="number"
            placeholder="70"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        
        <Button onClick={calculateBMI} className="w-full bg-gradient-primary">
          Calculate BMI
        </Button>
        
        {bmi && (
          <div className="mt-6 p-4 bg-accent rounded-lg text-center animate-fade-in">
            <p className="text-sm text-muted-foreground mb-2">Your BMI</p>
            <p className={`text-4xl font-bold ${getBMIColor()}`}>{bmi}</p>
            <p className={`text-lg font-medium mt-2 ${getBMIColor()}`}>{category}</p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default BMICalculator;
