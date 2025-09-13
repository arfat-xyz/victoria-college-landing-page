import HeroSection from '@/features/home/components/HeroSection';
import NavComponent from '@/features/home/components/NavComponent';
import TabSection from '@/features/home/components/TabSection';
import TestimonialsSection from '@/features/home/components/TestimonialsSection';

const HomeComponent = () => {
  return (
    <div className="mx-auto w-full text-white lg:w-6/7">
      <NavComponent />
      <HeroSection />
      <TabSection />
      <TestimonialsSection />
    </div>
  );
};

export default HomeComponent;
