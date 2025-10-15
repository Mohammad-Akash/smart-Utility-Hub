import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Tools from "./pages/Tools";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import BMICalculatorPage from "./pages/tools/BMICalculatorPage";
import CalorieCalculatorPage from "./pages/tools/CalorieCalculatorPage";
import WordCounterPage from "./pages/tools/WordCounterPage";
import DiscountCalculatorPage from "./pages/tools/DiscountCalculatorPage";
import PasswordGeneratorPage from "./pages/tools/PasswordGeneratorPage";
import QRCodeGeneratorPage from "./pages/tools/QRCodeGeneratorPage";
import ZakatCalculatorPage from "./pages/tools/ZakatCalculatorPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/tools/bmi-calculator" element={<BMICalculatorPage />} />
          <Route path="/tools/calorie-calculator" element={<CalorieCalculatorPage />} />
          <Route path="/tools/word-counter" element={<WordCounterPage />} />
          <Route path="/tools/discount-calculator" element={<DiscountCalculatorPage />} />
          <Route path="/tools/password-generator" element={<PasswordGeneratorPage />} />
          <Route path="/tools/qr-code-generator" element={<QRCodeGeneratorPage />} />
          <Route path="/tools/zakat-calculator" element={<ZakatCalculatorPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
