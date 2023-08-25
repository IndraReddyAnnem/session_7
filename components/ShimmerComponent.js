import React from "react";
import { Shimmer as ReactShimmer } from "react-shimmer";

const ShimmerComponent = () => {
    return (
        <div className="restaurant-list">
            <div className="shimmer-card">
                <ReactShimmer width={100} height={100} />
            </div>
        </div>
    );
};

export default ShimmerComponent;





