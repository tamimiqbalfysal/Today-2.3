import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import Products from '@/components/landing/products';
import Testimonials from '@/components/landing/testimonials';
import AiHeadlineTool from '@/components/landing/ai-headline-tool';
import ContactSection from '@/components/landing/contact-section';
import Footer from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Products />
        <Testimonials />
        <AiHeadlineTool />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
