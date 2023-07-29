import React, { useState } from "react";

import Carousel from "../../../components/carousel/Carousel";
import PageContainer from "../../../components/pageContainer/PageContianer";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";

import useFetch from "../../../hooks/useFetch";

const Popular = () => {
    const [endpoint, setEndpoint] = useState("movie");

    const { data, loading } = useFetch(`/${endpoint}/popular`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv");
    };

    return (
        <div className="P-carousel-section">
            <PageContainer>
                <div className="G-flex G-align-center G-justify-between P-carousel-tools">
                <span className="P-carousel-title">What's Popular</span>
                <SwitchTabs
                    data={["Movies", "TV Shows"]}
                    onTabChange={onTabChange}
                />
                </div>
            </PageContainer>
            <Carousel
                data={data?.results}
                loading={loading}
                endpoint={endpoint}
            />
        </div>
    );
};

export default Popular;