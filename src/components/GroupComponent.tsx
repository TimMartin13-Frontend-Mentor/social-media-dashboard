import { FunctionComponent } from "react";

export type GroupComponentType = {
  className?: string;
  path?: string;
  pageViewsValue?: string;
  pageViews?: string;
  pageViewsCount?: string;
  path3?: string;
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
  path,
  pageViewsValue,
  pageViews,
  pageViewsCount,
  path3,
}) => {
  return (
    <div
      className={`self-stretch h-[125px] relative rounded-8xs bg-darkslategray overflow-hidden shrink-0 text-right text-xs text-mediumseagreen font-inter ${className}`}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs bg-darkslategray hidden" />
      <div className="absolute top-[26px] left-[24px] w-[200px] flex flex-col items-end justify-start">
        <div className="flex flex-col items-end justify-start gap-[40px]">
          <img
            className="w-5 h-5 relative z-[1]"
            loading="lazy"
            alt=""
            src={path}
          />
          <b className="relative inline-block min-w-[19px] z-[1]">
            {pageViewsValue}
          </b>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start mt-[-74px] text-left text-sm text-steelblue">
          <div className="flex flex-col items-start justify-start gap-[23px]">
            <b className="relative inline-block min-w-[80px] z-[1]">
              {pageViews}
            </b>
            <b className="relative text-13xl inline-block text-white min-w-[41px] z-[1] mq450:text-lgi mq1025:text-7xl">
              {pageViewsCount}
            </b>
          </div>
        </div>
      </div>
      <img
        className="absolute top-[92px] left-[195px] w-2 h-1 z-[1]"
        loading="lazy"
        alt=""
        src={path3}
      />
    </div>
  );
};

export default GroupComponent;
