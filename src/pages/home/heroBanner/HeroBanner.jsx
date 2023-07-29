import React, { useEffect, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useFetch from "../../../hooks/useFetch";
import Img from "../../../components/lazyLoadImage/Img";
import PageContainer from "../../../components/pageContainer/PageContianer";
const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
  
    const bg =
      url.backdrop +
      data?.results[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0 || event.target.textContent == 'Search') {
      navigate(`/search/${query}`);
    }
    
  };
  return (
    <div className="P-hero-banner  G-flex G-align-center">
      {!loading && (
        <div className="P-backdrop-img">
          <Img src={background} />
        </div>
      )}
      <div className="P-opacity-layer"></div>
      <PageContainer>
        <div className="P-wrapper">
          <div className="P-hero-benner-content G-flex G-flex-column G-align-center ">
            <span className="P-title">Welcome Movix.</span>
            <span className="P-sub-title">
              Millions of movies, TV Shows and people discover. Explore now.
            </span>
            <div className="P-search-input G-flex G-align-center G-justify-center ">
              <input
                type="text"
                placeholder="Search for movie or tv show...."
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
              />
              <button onClick={searchQueryHandler}>Search</button>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default HeroBanner;
