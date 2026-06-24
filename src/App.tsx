import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import RedVisionMusic from "./pages/RedVisionMusic";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Music from "./pages/divisions/Music";
import TV from "./pages/divisions/TV";
import Radio from "./pages/divisions/Radio";
import AI from "./pages/divisions/AI";
import Fashion from "./pages/divisions/Fashion";
import Blog from "./pages/divisions/Blog";
import Marketing from "./pages/divisions/Marketing";
import Technology from "./pages/divisions/Technology";
import University from "./pages/divisions/University";
import Agency from "./pages/divisions/Agency";
import Scripts from "./pages/divisions/Scripts";
import Merch from "./pages/divisions/Merch";
import PivotBook from "./pages/PivotBook";
import PivotTourSystem from "./pages/PivotTourSystem";
import AIServices from "./pages/divisions/AIServices";
import AIPricing from "./pages/divisions/AIPricing";
import AIConsulting from "./pages/divisions/AIConsulting";
import TragicMulatto from "./pages/divisions/TragicMulatto";
import ScriptsPage from "./pages/divisions/Scripts";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/music" element={<RedVisionMusic />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/divisions/music" element={<Music />} />
            <Route path="/divisions/tv" element={<TV />} />
            <Route path="/divisions/radio" element={<Radio />} />
            <Route path="/divisions/ai" element={<AI />} />
            <Route path="/divisions/ai/services" element={<AIServices />} />
            <Route path="/divisions/ai/pricing" element={<AIPricing />} />
            <Route path="/divisions/ai/consulting" element={<AIConsulting />} />
            <Route path="/divisions/fashion" element={<Fashion />} />
            <Route path="/divisions/blog" element={<Blog />} />
            <Route path="/divisions/marketing" element={<Marketing />} />
            <Route path="/divisions/technology" element={<Technology />} />
            <Route path="/divisions/university" element={<University />} />
            <Route path="/divisions/agency" element={<Agency />} />
            <Route path="/divisions/scripts" element={<Scripts />} />
            <Route path="/divisions/merch" element={<Merch />} />
            <Route path="/pivot-book" element={<PivotBook />} />
            <Route path="/pivot-tour" element={<PivotTourSystem />} />
            <Route path="/divisions/tragic-mulatto" element={<TragicMulatto />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
