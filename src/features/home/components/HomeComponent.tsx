import { IHome } from '@/features/home/types';

const HomeComponent = () => {
  const x: IHome = { name: 'arfat' };
  console.log(x);
  return <div>HomeComponent</div>;
};

export default HomeComponent;
