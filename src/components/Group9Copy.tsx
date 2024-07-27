import { FunctionComponent } from "react";

export type Group9CopyType = {
  className?: string;
  path3?: string;
  path?: string;
  profileViewsValue?: string;
  profileViewsCount?: string;
};

const Group9Copy: FunctionComponent<Group9CopyType> = ({
  className = "",
  path3,
  path,
  profileViewsValue,
  profileViewsCount,
}) => {
  return (
    <div
      className={`self-stretch h-[125px] relative rounded-8xs bg-darkslategray overflow-hidden shrink-0 text-right text-xs text-crimson-100 font-inter ${className}`}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs bg-darkslategray hidden" />
      <img
        className="absolute top-[92px] left-[195px] w-2 h-1 z-[1]"
        loading="lazy"
        alt=""
        src={path3}
      />
      <div className="absolute top-[26px] left-[24px] w-[200px] flex flex-col items-end justify-start">
        <div className="flex flex-col items-end justify-start gap-[40px]">
          <img
            className="w-5 h-5 relative z-[1]"
            loading="lazy"
            alt=""
            src={path}
          />
          <b className="relative inline-block min-w-[18px] z-[1]">
            {profileViewsValue}
          </b>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start mt-[-74px] text-left text-sm text-steelblue">
          <div className="flex flex-col items-start justify-start gap-[23px]">
            <b className="relative inline-block min-w-[36px] z-[1]">Likes</b>
            <b className="relative text-13xl inline-block text-white min-w-[41px] z-[1] mq450:text-lgi mq1025:text-7xl">
              {profileViewsCount}
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group9Copy;
