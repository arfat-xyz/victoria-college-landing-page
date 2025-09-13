import Campuses from '@/features/home/components/Campuses';
import HeroSection from '@/features/home/components/HeroSection';
import NavComponent from '@/features/home/components/NavComponent';
import PartnerSection from '@/features/home/components/PartnerSection';
import StudentTestimonials from '@/features/home/components/StudentTestimonials';
import TabSection from '@/features/home/components/TabSection';
import TestimonialsSection from '@/features/home/components/TestimonialsSection';

const HomeComponent = () => {
  return (
    <div className="text-white">
      <div className="mx-auto w-full lg:w-6/7">
        <NavComponent />
        <HeroSection />
        <TabSection />
        <TestimonialsSection />
      </div>
      <Campuses />
      <PartnerSection />
      <StudentTestimonials />
    </div>
  );
};

export default HomeComponent;
