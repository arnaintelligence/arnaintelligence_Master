import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import LearningIntelligence from "./pages/services/LearningIntelligence";
import LearnTechAI from "./pages/services/LearnTechAI";
import ExperienceDesign from "./pages/services/ExperienceDesign";
import IntelligenceEngine from "./pages/IntelligenceEngine";
import Products from "./pages/Products";
import Insights from "./pages/Insights";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import GlobiculumPreview from "./pages/GlobiculumPreview";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/learning-intelligence" element={<LearningIntelligence />} />
          <Route path="/services/learntech-ai" element={<LearnTechAI />} />
          <Route path="/services/experience-design" element={<ExperienceDesign />} />
          <Route path="/intelligence-engine" element={<IntelligenceEngine />} />
          <Route path="/products" element={<Products />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/globiculum-preview" element={<GlobiculumPreview />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
