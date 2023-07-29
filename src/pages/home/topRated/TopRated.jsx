import React, { useState } from "react";

import Carousel from "../../../components/carousel/Carousel";
import PageContianer from "../../../components/pageContainer/PageContianer";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";

import useFetch from "../../../hooks/useFetch";

const TopRated = () => {
  const [endpoint, setEndpoint] = useState("movie");

  const { data, loading } = useFetch(`/${endpoint}/top_rated`);

  const onTabChange = (tab) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  };

  return (
    <div className="P-carousel-section">
      <PageContianer>
        <div className="G-flex G-align-center G-justify-between P-carousel-tools">
          <span className="P-carousel-title">Top Rated</span>
          <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
        </div>
      </PageContianer>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
    </div>
  );
};

export default TopRated;
