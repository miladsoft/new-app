import './App.css'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './providers/theme-provider'
import { DefaultLayout } from './components/layouts/default-layout'
import { CategoriesSection } from './components/categories-section'
import { AboutSection } from './components/about-section'
import { TestimonialsSection } from './components/testimonials-section'
import { NewsletterSection } from './components/newsletter-section'
import { ContactSection } from './components/contact-section'
import { ProductDetailPage } from './components/product-detail-page'
import { HeroSection } from './components/hero-section'
import { CategoryPage } from './components/category-page'

function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection isHomepage={true} className="bg-background" />
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
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
        </Routes>
      </DefaultLayout>
    </ThemeProvider>
  )
}

export default App
