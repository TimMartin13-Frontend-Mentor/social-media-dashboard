import { FunctionComponent } from 'react';
import DashboardContainer from '../components/DashboardContainer';
import ProfileCard from '../components/ProfileCard';
import MetricCharts from '../components/MetricCharts';

const Home: FunctionComponent = () => {
  return (
    <div className='w-full relative bg-gray-200 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[75px] box-border gap-[46px] leading-[normal] tracking-[normal] mq750:gap-[23px]'>
      <section className='self-stretch flex flex-col items-start justify-start max-w-full'>
        <DashboardContainer />
        <ProfileCard />
      </section>
      <section className='self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-[24px] text-white font-inter'>
        <div className='w-[1110px] flex flex-col items-start justify-start gap-[24px] max-w-full'>
          <h1 className='m-0 relative text-inherit font-bold font-inherit mq450:text-lgi'>
            Overview - Today
          </h1>
          <MetricCharts />
        </div>
      </section>
    </div>
  );
};

export default Home;
