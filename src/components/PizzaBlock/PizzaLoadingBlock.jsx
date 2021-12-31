import React from "react";
import ContentLoader from "react-content-loader"


export const PizzaLoadingBlock = () => {
    return (
        <ContentLoader
            className="pizza-block"
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="132" cy="132" r="132" />
            <rect x="0" y="273" rx="4" ry="4" width="280" height="25" />
            <rect x="0" y="319" rx="6" ry="6" width="280" height="84" />
            <rect x="0" y="420" rx="4" ry="4" width="91" height="31" />
            <rect x="137" y="413" rx="25" ry="25" width="140" height="43" />
        </ContentLoader>
    )
}