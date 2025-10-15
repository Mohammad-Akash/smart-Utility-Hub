import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Download } from "lucide-react";

const QRCodeGenerator = () => {
  const [inputText, setInputText] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  const generateQR = () => {
    if (inputText.trim()) {
      // Using a free QR code API
      const encoded = encodeURIComponent(inputText);
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encoded}`;
      setQrCodeUrl(url);
    }
  };

  const downloadQR = () => {
    if (qrCodeUrl) {
      const link = document.createElement("a");
      link.href = qrCodeUrl;
      link.download = "qrcode.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <Card className="p-6 shadow-elevated">
      <h2 className="text-2xl font-semibold mb-6">QR Code Generator</h2>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="qr-text">Enter text or URL</Label>
          <Input
            id="qr-text"
            type="text"
            placeholder="https://example.com"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>
        
        <Button onClick={generateQR} className="w-full bg-gradient-primary">
          Generate QR Code
        </Button>
        
        {qrCodeUrl && (
          <div className="mt-6 space-y-4 animate-fade-in">
            <div className="flex justify-center p-4 bg-muted rounded-lg">
              <img src={qrCodeUrl} alt="QR Code" className="w-64 h-64" />
            </div>
            
            <Button onClick={downloadQR} variant="outline" className="w-full">
              <Download className="mr-2 h-4 w-4" />
              Download QR Code
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default QRCodeGenerator;
