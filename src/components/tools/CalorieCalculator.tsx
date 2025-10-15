import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CalorieCalculator = () => {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("male");
  const [activity, setActivity] = useState("moderate");
  const [calories, setCalories] = useState<number | null>(null);

  const calculateCalories = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);
    
    if (w > 0 && h > 0 && a > 0) {
      // Mifflin-St Jeor Equation
      let bmr;
      if (gender === "male") {
        bmr = 10 * w + 6.25 * h - 5 * a + 5;
      } else {
        bmr = 10 * w + 6.25 * h - 5 * a - 161;
      }
      
      // Activity multiplier
      const multipliers: { [key: string]: number } = {
        sedentary: 1.2,
        light: 1.375,
        moderate: 1.55,
        active: 1.725,
        veryActive: 1.9,
      };
      
      const dailyCalories = bmr * multipliers[activity];
      setCalories(Math.round(dailyCalories));
    }
  };

  return (
    <Card className="p-6 shadow-elevated">
      <h2 className="text-2xl font-semibold mb-6">Calorie Calculator</h2>
      
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="age">Age</Label>
            <Input
              id="age"
              type="number"
              placeholder="25"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          
          <div>
            <Label htmlFor="gender">Gender</Label>
            <Select value={gender} onValueChange={setGender}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="calc-weight">Weight (kg)</Label>
            <Input
              id="calc-weight"
              type="number"
              placeholder="70"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          
          <div>
            <Label htmlFor="calc-height">Height (cm)</Label>
            <Input
              id="calc-height"
              type="number"
              placeholder="175"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
        </div>
        
        <div>
          <Label htmlFor="activity">Activity Level</Label>
          <Select value={activity} onValueChange={setActivity}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sedentary">Sedentary (little/no exercise)</SelectItem>
              <SelectItem value="light">Light (1-3 days/week)</SelectItem>
              <SelectItem value="moderate">Moderate (3-5 days/week)</SelectItem>
              <SelectItem value="active">Active (6-7 days/week)</SelectItem>
              <SelectItem value="veryActive">Very Active (athlete)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <Button onClick={calculateCalories} className="w-full bg-gradient-primary">
          Calculate Calories
        </Button>
        
        {calories && (
          <div className="mt-6 p-4 bg-accent rounded-lg text-center animate-fade-in">
            <p className="text-sm text-muted-foreground mb-2">Daily Calorie Needs</p>
            <p className="text-4xl font-bold text-primary">{calories}</p>
            <p className="text-sm text-muted-foreground mt-2">calories per day</p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default CalorieCalculator;
