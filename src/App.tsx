import './App.css'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './providers/theme-provider'
import { DefaultLayout } from './components/layouts/default-layout'
import { FeaturedProducts } from './components/featured-products'
import { CategoriesSection } from './components/categories-section'
import { AboutSection } from './components/about-section'
import { TestimonialsSection } from './components/testimonials-section'
import { NewsletterSection } from './components/newsletter-section'
import { ContactSection } from './components/contact-section'
import { CartDrawer } from './components/cart/cart-drawer'
import { ProductDetailPage } from './components/product-detail-page'
import { HeroSection } from './components/hero-section'

function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <CategoriesSection />
      <AboutSection className="bg-muted/30" />
      <TestimonialsSection />
      <NewsletterSection />
      <ContactSection />
    </>
  )
}

function App() {
  return (
    <ThemeProvider>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
        </Routes>
        <CartDrawer />
      </DefaultLayout>
    </ThemeProvider>
  )
}

export default App
