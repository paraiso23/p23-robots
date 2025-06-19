
import { useEffect } from 'react';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Audience from '@/components/landing/Audience';
import HowItWorks from '@/components/landing/HowItWorks';
import KeyFeatures from '@/components/landing/KeyFeatures';
import UseCases from '@/components/landing/UseCases';
import Testimonials from '@/components/landing/Testimonials';
import Pricing from '@/components/landing/Pricing';
import Cta from '@/components/landing/Cta';
import Faq from '@/components/landing/Faq';
import Footer from '@/components/landing/Footer';
import { useTheme } from '@/hooks/use-theme';

const Index = () => {
  const { setTheme } = useTheme();

  useEffect(() => {
    // Set dark theme by default on initial load
    document.documentElement.classList.add('dark');
    setTheme('dark');
  }, [setTheme]);

  return (
    <div className="bg-background text-foreground selection:bg-primary/40 selection:text-primary-foreground">
      <Header />
      <main>
        <Hero />
        <Audience />
        <HowItWorks />
        <KeyFeatures />
        <UseCases />
        <Testimonials />
        <Pricing />
        <Cta />
        <Faq />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
