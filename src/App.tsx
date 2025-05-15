import './App.css'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './providers/theme-provider'
import { LanguageProvider } from './contexts/language-context'
import { DefaultLayout } from './components/layouts/default-layout'
import { CategoriesSection } from './components/categories-section'
import { AboutSection } from './components/about-section'
import { TestimonialsSection } from './components/testimonials-section-new'
import { NewsletterSection } from './components/newsletter-section'
import { ContactSection } from './components/contact-section'
import { ProductDetailPage } from './components/product-detail-page'
import { HeroSection } from './components/hero-section'
import { CategoryPage } from './components/category-page'
import { ProjectsPage } from './components/projects-page'

function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection isHomepage={true} className="bg-white" />
      <AboutSection className="bg-gradient-to-br from-[#176c91]/5 to-[#ea252b]/5" />
      <TestimonialsSection />
      <NewsletterSection />
      <ContactSection />
    </>
  )
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <DefaultLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:categoryId" element={<CategoryPage />} />
            <Route path="/product/:productId" element={<ProductDetailPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </DefaultLayout>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
