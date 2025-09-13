import HeroSection from '@/features/home/components/HeroSection';
import NavComponent from '@/features/home/components/NavComponent';

const HomeComponent = () => {
  return (
    <div className="mx-auto w-full bg-red-700 text-white lg:w-6/7">
      <NavComponent />
      <HeroSection />
    </div>
  );
};

export default HomeComponent;
