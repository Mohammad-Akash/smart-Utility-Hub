import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const WordCounter = () => {
  const [text, setText] = useState("");

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const charCount = text.length;
  const charCountNoSpaces = text.replace(/\s/g, "").length;
  const readingTime = Math.ceil(wordCount / 200); // Average reading speed

  return (
    <Card className="p-6 shadow-elevated">
      <h2 className="text-2xl font-semibold mb-6">Word Counter</h2>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="text-input">Enter your text</Label>
          <Textarea
            id="text-input"
            placeholder="Start typing or paste your text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="min-h-[200px]"
          />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-accent rounded-lg text-center">
            <p className="text-2xl font-bold text-primary">{wordCount}</p>
            <p className="text-sm text-muted-foreground">Words</p>
          </div>
          
          <div className="p-4 bg-accent rounded-lg text-center">
            <p className="text-2xl font-bold text-primary">{charCount}</p>
            <p className="text-sm text-muted-foreground">Characters</p>
          </div>
          
          <div className="p-4 bg-accent rounded-lg text-center">
            <p className="text-2xl font-bold text-primary">{charCountNoSpaces}</p>
            <p className="text-sm text-muted-foreground">No Spaces</p>
          </div>
          
          <div className="p-4 bg-accent rounded-lg text-center">
            <p className="text-2xl font-bold text-primary">{readingTime}</p>
            <p className="text-sm text-muted-foreground">Min Read</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default WordCounter;
