import React, { useState } from "react";
import PageContainer from "../../../components/pageContainer/PageContianer";
import "./style.scss";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";
const Trending = () => {
  const [endpoint, setEndpoint] = useState("day");
  const { data, loading } = useFetch(`/trending/all/${endpoint}`);
  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };
  return (
    <div className="P-carousel-section">
      <PageContainer>
        <div className="G-flex G-justify-between G-align-center P-carousel-tools">
          <h3 className="P-carousel-title">Trending</h3>
          <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
        </div>
      </PageContainer>
      <Carousel data={data?.results} loading={loading}/>
    </div>
  );
};

export default Trending;
