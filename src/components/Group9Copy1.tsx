import { FunctionComponent } from "react";

export type Group9Copy1Type = {
  className?: string;
  retweets?: string;
  likesCount?: string;
  totalViewsPlaceholder?: string;
};

const Group9Copy1: FunctionComponent<Group9Copy1Type> = ({
  className = "",
  retweets,
  likesCount,
  totalViewsPlaceholder,
}) => {
  return (
    <div
      className={`self-stretch h-[125px] relative rounded-8xs bg-darkslategray overflow-hidden shrink-0 text-left text-sm text-steelblue font-inter ${className}`}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs bg-darkslategray hidden" />
      <div className="absolute top-[27px] left-[24px] w-[200px] h-[79px] flex flex-col items-end justify-start">
        <div className="self-stretch flex flex-row items-start justify-start">
          <div className="flex flex-col items-start justify-start gap-[23px]">
            <b className="relative inline-block min-w-[65px] z-[1]">
              {retweets}
            </b>
            <b className="relative text-13xl inline-block text-white min-w-[51px] z-[1] mq450:text-lgi mq1025:text-7xl">
              {likesCount}
            </b>
          </div>
        </div>
        <div className="flex flex-col items-end justify-start gap-[41.7px] mt-[-78px] text-right text-xs text-mediumseagreen">
          <img
            className="w-5 h-[16.3px] relative z-[1]"
            loading="lazy"
            alt=""
            src="/path-1.svg"
          />
          <b className="relative inline-block min-w-[35px] z-[1]">
            {totalViewsPlaceholder}
          </b>
        </div>
      </div>
      <img
        className="absolute top-[92px] left-[178px] w-2 h-1 z-[1]"
        loading="lazy"
        alt=""
        src="/path-3.svg"
      />
    </div>
  );
};

export default Group9Copy1;
