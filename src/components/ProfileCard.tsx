import { FunctionComponent } from "react";
import GroupComponent1 from "./GroupComponent1";

export type ProfileCardType = {
  className?: string;
};

const ProfileCard: FunctionComponent<ProfileCardType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full mt-[-108px] text-left text-xs text-steelblue font-inter ${className}`}
    >
      <div className="w-[1110px] flex flex-row flex-wrap items-start justify-center gap-[30px] max-w-full z-[1]">
        <GroupComponent1
          path="/path.svg"
          nathanf="@nathanf"
          followerAbbreviation="1987"
          followers="Followers"
          path3="/path-3.svg"
          today="12 Today"
        />
        <div className="flex-1 flex flex-row items-start justify-start min-w-[235px] max-w-[255px]">
          <div className="flex-1 rounded-8xs bg-darkslategray overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-6 gap-[29.5px]">
            <div className="self-stretch h-[216px] relative rounded-8xs bg-darkslategray hidden" />
            <div className="self-stretch h-1 relative bg-cornflowerblue z-[2]" />
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px]">
              <div className="overflow-hidden flex flex-row items-start justify-start pt-0 px-0 pb-[0.7px] gap-[8px] z-[3]">
                <img
                  className="h-[16.3px] w-5 relative min-h-[16px] shrink-0"
                  loading="lazy"
                  alt=""
                  src="/path-1.svg"
                />
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <b className="relative inline-block min-w-[59px] shrink-0">
                    @nathanf
                  </b>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end py-0 px-[60px] text-center text-37xl text-white mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="flex-1 flex flex-col items-start justify-start gap-[25px]">
                <div className="self-stretch h-[72px] overflow-hidden shrink-0 flex flex-col items-end justify-start pt-0 px-[5px] pb-6 box-border gap-[9px] z-[3]">
                  <b className="mr-[-5.5px] w-[136px] relative tracking-[-2px] leading-[48px] inline-block shrink-0 mq450:text-15xl mq450:leading-[29px] mq1025:text-26xl mq1025:leading-[38px]">
                    1044
                  </b>
                  <div className="relative text-xs tracking-[5px] uppercase text-steelblue inline-block min-w-[118px] shrink-0">
                    Followers
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-0 px-[34px] text-left text-xs text-mediumseagreen">
                  <div className="flex flex-row items-start justify-start gap-[4px]">
                    <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                      <img
                        className="w-2 h-1 relative z-[3]"
                        loading="lazy"
                        alt=""
                        src="/path-3.svg"
                      />
                    </div>
                    <b className="relative inline-block min-w-[55px] z-[3]">
                      99 Today
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-row items-start justify-start min-w-[235px] max-w-[255px]">
          <div className="flex-1 rounded-8xs bg-darkslategray overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-6 gap-[27px]">
            <div className="self-stretch h-[216px] relative rounded-8xs bg-darkslategray hidden" />
            <div className="self-stretch h-1 relative [background:linear-gradient(225deg,_#df4896,_#ee877d_50.91%,_#fdc366)] z-[2]" />
            <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[72px] pl-[74px] mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="flex flex-row items-start justify-start gap-[8px]">
                <img
                  className="h-5 w-5 relative min-h-[20px] z-[3]"
                  loading="lazy"
                  alt=""
                  src="/shape.svg"
                />
                <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                  <b className="relative inline-block min-w-[81px] z-[3]">
                    @realnathanf
                  </b>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[68px] pl-[69px] text-center text-37xl text-white mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="h-[72px] overflow-hidden flex flex-col items-start justify-start pt-0 px-[3px] pb-6 box-border gap-[9px] z-[3]">
                <div className="flex flex-row items-start justify-start py-0 pr-3.5 pl-[13px]">
                  <b className="w-[84px] relative tracking-[-2px] leading-[48px] inline-block min-w-[84px] shrink-0 mq450:text-15xl mq450:leading-[29px] mq1025:text-26xl mq1025:leading-[38px]">
                    11k
                  </b>
                </div>
                <div className="relative text-xs tracking-[5px] uppercase text-steelblue inline-block min-w-[118px] shrink-0">
                  Followers
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-mediumseagreen">
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                  <img
                    className="w-2 h-1 relative z-[3]"
                    loading="lazy"
                    alt=""
                    src="/path-3.svg"
                  />
                </div>
                <b className="relative inline-block min-w-[69px] z-[3]">
                  1099 Today
                </b>
              </div>
            </div>
          </div>
        </div>
        <GroupComponent1
          path="/shape-1.svg"
          nathanf="Nathan F."
          followerAbbreviation="8239"
          followers="SUBSCRIBERS"
          path3="/path-3-3.svg"
          today="144 Today"
        />
      </div>
    </div>
  );
};

export default ProfileCard;
