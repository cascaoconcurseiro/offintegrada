
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { WishlistProvider } from "@/contexts/WishlistContext";
import { ProductComparisonProvider } from "@/contexts/ProductComparisonContext";
import { AuthProvider } from "@/contexts/AuthContext";
import ErrorBoundary from "@/components/ErrorBoundary";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ResellerPage from "./pages/ResellerPage";
import SizeGuidePage from "./pages/SizeGuidePage";
import FAQPage from "./pages/FAQPage";
import AccountPage from "./pages/AccountPage";
import ShopPageRoute from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CheckoutPage from "./pages/CheckoutPage";
import AdminDashboard from "./pages/AdminDashboard";
import CartModal from "@/components/CartModal";
import ProductComparison from "@/components/ProductComparison";
import ComparisonFloatingButton from "@/components/ComparisonFloatingButton";
import UrgencyScarcity from "@/components/UrgencyScarcity";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AuthProvider>
          <WishlistProvider>
            <CartProvider>
              <ProductComparisonProvider>
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/loja" element={<ShopPageRoute />} />
                    <Route path="/produto/:id" element={<ProductDetailPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route path="/revendedor" element={<ResellerPage />} />
                    <Route path="/guia-tamanhos" element={<SizeGuidePage />} />
                    <Route path="/faq" element={<FAQPage />} />
                    <Route path="/conta" element={<AccountPage />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                  <CartModal />
                  <ProductComparison />
                  <ComparisonFloatingButton />
                  <UrgencyScarcity />
                </BrowserRouter>
              </ProductComparisonProvider>
            </CartProvider>
          </WishlistProvider>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
