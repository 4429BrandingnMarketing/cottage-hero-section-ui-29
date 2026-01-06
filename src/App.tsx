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

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
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
            <Route path="/divisions/fashion" element={<Fashion />} />
            <Route path="/divisions/blog" element={<Blog />} />
            <Route path="/divisions/marketing" element={<Marketing />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
