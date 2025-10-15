import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

const DiscountCalculator = () => {
  const [originalPrice, setOriginalPrice] = useState("");
  const [discountPercent, setDiscountPercent] = useState("");
  const [finalPrice, setFinalPrice] = useState<number | null>(null);
  const [savedAmount, setSavedAmount] = useState<number | null>(null);

  const calculateDiscount = () => {
    const price = parseFloat(originalPrice);
    const discount = parseFloat(discountPercent);
    
    if (price > 0 && discount >= 0 && discount <= 100) {
      const saved = (price * discount) / 100;
      const final = price - saved;
      
      setSavedAmount(parseFloat(saved.toFixed(2)));
      setFinalPrice(parseFloat(final.toFixed(2)));
    }
  };

  return (
    <Card className="p-6 shadow-elevated">
      <h2 className="text-2xl font-semibold mb-6">Discount Calculator</h2>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="original-price">Original Price (€)</Label>
          <Input
            id="original-price"
            type="number"
            placeholder="100"
            value={originalPrice}
            onChange={(e) => setOriginalPrice(e.target.value)}
          />
        </div>
        
        <div>
          <Label htmlFor="discount">Discount (%)</Label>
          <Input
            id="discount"
            type="number"
            placeholder="25"
            value={discountPercent}
            onChange={(e) => setDiscountPercent(e.target.value)}
            max="100"
            min="0"
          />
        </div>
        
        <Button onClick={calculateDiscount} className="w-full bg-gradient-primary">
          Calculate Discount
        </Button>
        
        {finalPrice !== null && (
          <div className="mt-6 space-y-3 animate-fade-in">
            <div className="p-4 bg-secondary/10 rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">You Save</p>
              <p className="text-2xl font-bold text-secondary">€{savedAmount}</p>
            </div>
            
            <div className="p-4 bg-primary/10 rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">Final Price</p>
              <p className="text-3xl font-bold text-primary">€{finalPrice}</p>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default DiscountCalculator;
