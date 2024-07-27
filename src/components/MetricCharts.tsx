import { FunctionComponent } from "react";
import GroupComponent from "./GroupComponent";
import Group9Copy1 from "./Group9Copy1";
import Group9Copy from "./Group9Copy";

export type MetricChartsType = {
  className?: string;
};

const MetricCharts: FunctionComponent<MetricChartsType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row flex-wrap items-start justify-center gap-[30px] text-right text-xs text-mediumseagreen font-inter ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[235px] max-w-[255px]">
        <GroupComponent
          path="/path.svg"
          pageViewsValue="3%"
          pageViews="Page Views"
          pageViewsCount="87"
          path3="/path-3.svg"
        />
        <Group9Copy1
          retweets="Retweets"
          likesCount="117"
          totalViewsPlaceholder="303%"
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[235px] max-w-[255px] text-crimson-100">
        <Group9Copy
          path3="/path-3-3.svg"
          path="/path.svg"
          profileViewsValue="2%"
          profileViewsCount="52"
        />
        <Group9Copy1
          retweets="Likes"
          likesCount="507"
          totalViewsPlaceholder="553%"
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[235px] max-w-[255px]">
        <Group9Copy
          path3="/path-3.svg"
          path="/shape.svg"
          profileViewsValue="2257%"
          profileViewsCount="5462"
        />
        <Group9Copy
          path3="/path-3-3.svg"
          path="/shape-1.svg"
          profileViewsValue="19%"
          profileViewsCount="107"
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[235px] max-w-[255px]">
        <GroupComponent
          path="/shape.svg"
          pageViewsValue="1375%"
          pageViews="Profile Views"
          pageViewsCount="52k"
          path3="/path-3.svg"
        />
        <GroupComponent
          path="/shape-1.svg"
          pageViewsValue="12%"
          pageViews="Total Views"
          pageViewsCount="1407"
          path3="/path-3-3.svg"
        />
      </div>
    </div>
  );
};

export default MetricCharts;
