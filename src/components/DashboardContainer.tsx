import { FunctionComponent } from "react";

export type DashboardContainerType = {
  className?: string;
};

const DashboardContainer: FunctionComponent<DashboardContainerType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch rounded-t-none rounded-b-xl bg-gray-100 flex flex-row items-start justify-center pt-9 px-5 pb-[154px] box-border gap-[13px] max-w-full text-center text-9xl text-white font-inter mq1100:flex-wrap ${className}`}
    >
      <div className="h-[244px] w-[1440px] relative rounded-t-none rounded-b-xl bg-gray-100 hidden max-w-full" />
      <div className="w-[964px] flex flex-col items-start justify-start py-0 pr-[633px] pl-0 box-border gap-[3px] max-w-full mq750:pr-[158px] mq750:box-border mq1025:pr-[316px] mq1025:box-border">
        <h1 className="m-0 self-stretch relative text-inherit font-bold font-inherit z-[1] mq450:text-3xl">
          Social Media Dashboard
        </h1>
        <div className="flex flex-row items-start justify-start py-0 px-px text-left text-sm text-steelblue">
          <b className="relative z-[1]">Total Followers: 23,004</b>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0 text-right text-sm text-steelblue">
        <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[75px] z-[1]">
          Dark Mode
        </a>
      </div>
      <div className="flex flex-col items-start justify-start pt-[13px] px-0 pb-0">
        <div className="w-12 h-6 relative rounded-xl [background:linear-gradient(225deg,_#40db82,_#388fe8)] z-[1]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl [background:linear-gradient(225deg,_#40db82,_#388fe8)] hidden" />
          <div className="absolute h-3/4 w-[37.5%] top-[12.5%] right-[56.25%] bottom-[12.5%] left-[6.25%] rounded-[50%] bg-darkslategray z-[1]" />
        </div>
      </div>
    </div>
  );
};

export default DashboardContainer;
