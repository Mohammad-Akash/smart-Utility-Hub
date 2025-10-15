import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WordCounter from "@/components/tools/WordCounter";
import { FileText } from "lucide-react";

const WordCounterPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="text-blue-600" size={32} />
            </div>
            <h1 className="text-4xl font-bold mb-4">Word Counter</h1>
            <p className="text-lg text-muted-foreground">
              Count words, characters, and estimate reading time for any text instantly.
            </p>
          </div>
          
          <div className="animate-slide-up">
            <WordCounter />
          </div>
          
          <div className="mt-12 p-6 bg-muted/30 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Perfect For</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Writers and content creators tracking word counts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Students meeting essay and assignment requirements</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Social media managers optimizing post lengths</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Anyone who needs quick text analysis</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default WordCounterPage;
