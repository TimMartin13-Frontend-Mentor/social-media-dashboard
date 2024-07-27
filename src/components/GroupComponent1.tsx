import { FunctionComponent } from "react";

export type GroupComponent1Type = {
  className?: string;
  path?: string;
  nathanf?: string;
  followerAbbreviation?: string;
  followers?: string;
  path3?: string;
  today?: string;
};

const GroupComponent1: FunctionComponent<GroupComponent1Type> = ({
  className = "",
  path,
  nathanf,
  followerAbbreviation,
  followers,
  path3,
  today,
}) => {
  return (
    <div
      className={`flex-1 flex flex-row items-start justify-start min-w-[235px] max-w-[255px] text-left text-xs text-steelblue font-inter ${className}`}
    >
      <div className="flex-1 rounded-8xs bg-darkslategray overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-6 gap-[27px]">
        <div className="self-stretch h-[216px] relative rounded-8xs bg-darkslategray hidden" />
        <div className="self-stretch h-1 relative bg-dodgerblue z-[2]" />
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px]">
          <div className="overflow-hidden flex flex-row items-start justify-start gap-[8px] z-[3]">
            <img
              className="h-5 w-5 relative min-h-[20px] shrink-0"
              loading="lazy"
              alt=""
              src={path}
            />
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <b className="relative inline-block min-w-[59px] shrink-0">
                {nathanf}
              </b>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-16 text-center text-37xl text-white mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="h-[72px] overflow-hidden flex flex-col items-end justify-start pt-0 px-px pb-6 box-border gap-[9px] z-[3]">
            <b className="mr-[-2px] w-[129px] relative tracking-[-2px] leading-[48px] inline-block min-w-[129px] shrink-0 mq450:text-15xl mq450:leading-[29px] mq1025:text-26xl mq1025:leading-[38px]">
              {followerAbbreviation}
            </b>
            <div className="relative text-xs tracking-[5px] uppercase text-steelblue inline-block min-w-[118px] shrink-0">
              {followers}
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[22px] pl-5 text-mediumseagreen">
          <div className="flex flex-row items-start justify-start gap-[4px]">
            <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
              <img
                className="w-2 h-1 relative z-[3]"
                loading="lazy"
                alt=""
                src={path3}
              />
            </div>
            <b className="relative inline-block min-w-[53px] z-[3]">{today}</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent1;
