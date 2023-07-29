import React, { useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import PageContainer from "../pageContainer/PageContianer";
import Img from "../lazyLoadImage/Img";
import PosterFallback from "../../assets/images/no-poster.png";
import CircleRating from "../circleRating/CircleRating";

import "./style.scss";
import Genres from "../genres/Genres";

const Carousel = ({ data, loading, endpoint , title }) => {
  const carouselContainer = useRef();
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();

  const navigation = (dir) => {
    const container = carouselContainer.current;
    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const skItem = () => {
    return (
      <div className="P-skeleton-item">
        <div className="P-poster-block skeleton"></div>
        <div className="P-text-block ">
          <div className="P-title skeleton"></div>
          <div className="P-date skeleton"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="P-carousel">
      <PageContainer>
        {title && <div className="P-carousel-title">{title}</div>}
        <BsFillArrowLeftCircleFill
          className="carouselLeftNav arrow"
          onClick={() => navigation("left")}
        />
        <BsFillArrowRightCircleFill
          className="carouselRighttNav arrow"
          onClick={() => navigation("right")}
        />
        {!loading ? (
          <div className="P-carousel-items" ref={carouselContainer}>
            {data?.map((item) => {
              const posterUrl = item.poster_path
                ? url.poster + item.poster_path
                : PosterFallback;
              return (
                <div
                  key={item.id}
                  className="P-carousel-item"
                  onClick={() => navigate(`/${item.media_type || endpoint}/${item.id}`)}
                >
                  <div className="P-poster-block">
                    <Img src={posterUrl} />
                    <div className="P-rating-block">
                      <CircleRating rating={item.vote_average.toFixed(1)} />
                    </div>
                    <Genres data={item.genre_ids.slice(0, 2)} />
                  </div>
                  <div className="P-text-block">
                    <span className="P-title">{item.title || item.name}</span>
                    <span className="P-date">
                      {dayjs(item.release_Date).format("MMM D, YYYY")}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="P-loading-seleton">
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
          </div>
        )}
      </PageContainer>
    </div>
  );
};

export default Carousel;
