import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

const ZakatCalculator = () => {
  const [cash, setCash] = useState("");
  const [gold, setGold] = useState("");
  const [silver, setSilver] = useState("");
  const [investments, setInvestments] = useState("");
  const [zakatAmount, setZakatAmount] = useState<number | null>(null);

  const calculateZakat = () => {
    const totalWealth =
      parseFloat(cash || "0") +
      parseFloat(gold || "0") +
      parseFloat(silver || "0") +
      parseFloat(investments || "0");
    
    // Zakat is 2.5% of total eligible wealth
    const zakat = totalWealth * 0.025;
    setZakatAmount(parseFloat(zakat.toFixed(2)));
  };

  return (
    <Card className="p-6 shadow-elevated">
      <h2 className="text-2xl font-semibold mb-6">Zakat Calculator</h2>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="cash">Cash & Savings (€)</Label>
          <Input
            id="cash"
            type="number"
            placeholder="10000"
            value={cash}
            onChange={(e) => setCash(e.target.value)}
          />
        </div>
        
        <div>
          <Label htmlFor="gold">Gold Value (€)</Label>
          <Input
            id="gold"
            type="number"
            placeholder="5000"
            value={gold}
            onChange={(e) => setGold(e.target.value)}
          />
        </div>
        
        <div>
          <Label htmlFor="silver">Silver Value (€)</Label>
          <Input
            id="silver"
            type="number"
            placeholder="2000"
            value={silver}
            onChange={(e) => setSilver(e.target.value)}
          />
        </div>
        
        <div>
          <Label htmlFor="investments">Investments & Assets (€)</Label>
          <Input
            id="investments"
            type="number"
            placeholder="15000"
            value={investments}
            onChange={(e) => setInvestments(e.target.value)}
          />
        </div>
        
        <Button onClick={calculateZakat} className="w-full bg-gradient-primary">
          Calculate Zakat
        </Button>
        
        {zakatAmount !== null && (
          <div className="mt-6 p-6 bg-secondary/10 rounded-lg text-center animate-fade-in">
            <p className="text-sm text-muted-foreground mb-2">Your Zakat Amount (2.5%)</p>
            <p className="text-4xl font-bold text-secondary">€{zakatAmount}</p>
            <p className="text-sm text-muted-foreground mt-4">
              This is the minimum amount you should give as Zakat this year.
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ZakatCalculator;
