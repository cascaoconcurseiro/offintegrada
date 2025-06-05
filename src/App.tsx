
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ResellerPage from "./pages/ResellerPage";
import SizeGuidePage from "./pages/SizeGuidePage";
import FAQPage from "./pages/FAQPage";
import AccountPage from "./pages/AccountPage";
import ShopPageRoute from "./pages/ShopPage";
import CheckoutPage from "./pages/CheckoutPage";
import CartModal from "@/components/CartModal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/loja" element={<ShopPageRoute />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/revendedor" element={<ResellerPage />} />
            <Route path="/guia-tamanhos" element={<SizeGuidePage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/conta" element={<AccountPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CartModal />
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
