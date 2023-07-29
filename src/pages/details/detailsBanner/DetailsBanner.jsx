import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import dayjs, { Dayjs } from "dayjs";
import "./style.scss";

import useFetch from "../../../hooks/useFetch";
import PageContainer from "../../../components/pageContainer/PageContianer";
import Genres from "../../../components/genres/Genres";
import CircleRating from "../../../components/circleRating/CircleRating";
import Img from "../../../components/lazyLoadImage/Img";
import PosterFallback from "../../../assets/images/no-poster.png";
import PlayBtn from "./PlayBtn";
import VideoPopup from "../../../components/videoPopup/VideoPopup";

const DetailsBanner = ({ video, crew }) => {
    const [show , setShow] = useState(false)
    const [videoId , setVideoId] = useState(null)
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`);

  const { url } = useSelector((state) => state.home);
  const _genres = data?.genres?.map((g) => g.id);

  const director = crew?.filter((f) => f.job === "Director");
  const writer = crew?.filter((f) => f.job === 'Screenplay'|| f.job === 'Story' || f.job === 'Writer')

  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  return (
    <div className="P-details-banner">
      {!loading ? (
        <>
          {!!data && (
            <React.Fragment>
              <div>
                <div className="P-backdrop-img">
                  <img src={url.backdrop + data?.backdrop_path} />
                </div>
              </div>
              <div className="P-opacity-layer"></div>
              <PageContainer>
                <div className="P-content G-flex">
                  <div className="left">
                    {data.poster_path ? (
                      <Img
                        className="poster-img"
                        src={url.backdrop + data.poster_path}
                      />
                    ) : (
                      <Img className="poster-img" src={PosterFallback} />
                    )}
                  </div>
                  <div className="right">
                    <div className="P-title">
                      {`${data.name || data.title} (${dayjs(
                        data?.release_date
                      ).format("YYYY")})`}
                    </div>
                    <div className="P-sub-title">{data.tagline}</div>
                    <Genres data={_genres} />

                    <div className="row">
                      <CircleRating rating={data.vote_average.toFixed(1)} />
                      <div className="P-play-btn" onClick={() => {
                        setShow(true)
                        setVideoId(video.key)
                      }}>
                        <PlayBtn />
                        <span className="P-text">Watch Trailer</span>
                      </div>
                    </div>
                    <div className="P-overview">
                      <h6 className="P-heading">Overview</h6>
                      <p className="P-description">{data.overview}</p>
                    </div>
                    <div className="P-info">
                      {data.status && (
                        <div className="P-info-item">
                          <span className="P-text bold">Status: {""}</span>
                          <span className="P-text">{data.status}</span>
                        </div>
                      )}
                      {data.release_date && (
                        <div className="P-info-item">
                          <span className="P-text bold">
                            Release Date: {""}
                          </span>
                          <span className="P-text">
                            {dayjs(data.release_date).format("MMM D, YYYY")}
                          </span>
                        </div>
                      )}
                      {data.runtime && (
                        <div className="P-info-item">
                          <span className="P-text bold">Runtime: {""}</span>
                          <span className="P-text">
                            {toHoursAndMinutes(data.runtime)}
                          </span>
                        </div>
                      )}
                    </div>
                    {director?.length > 0 && (
                        <div className="P-info">
                            <span className="P-text bold">
                                Director:{' '}
                            </span>
                            <span className="P-text">
                                {director?.map((d,i)=>{
                                    return <span key={i}>
                                            {d.name}
                                            {director.length -1 !== i && ", "}
                                    </span>
                                })}
                            </span>
                        </div>
                    )}
                    {writer?.length > 0 && (
                        <div className="P-info">
                            <span className="P-text bold">
                                Writer:{' '}
                            </span>
                            <span className="P-text">
                                {writer?.map((d,i)=>{
                                    return <span key={i}>
                                            {d.name}
                                            {writer.length -1 !== i && ", "}
                                    </span>
                                })}
                            </span>
                        </div>
                    )}
                    {data?.created_by?.length > 0 && (
                        <div className="P-info">
                            <span className="P-text bold">
                                Creator:{' '}
                            </span>
                            <span className="P-text">
                                {data?.created_by?.map((d,i)=>{
                                    return <span key={i}>
                                            {d.name}
                                            {data?.created_by.length -1 !== i && ", "}
                                    </span>
                                })}
                            </span>
                        </div>
                    )}
                  </div>
                </div>
                <VideoPopup show={show} setShow={setShow} videoId={videoId} setVideoId={setVideoId}/>
              </PageContainer>
            </React.Fragment>
          )}
        </>
      ) : (
        <div className="P-details-banner-skeleton">
          <PageContainer>
            <div className="left skeleton"></div>
            <div className="right">
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
            </div>
          </PageContainer>
        </div>
      )}
    </div>
  );
};

export default DetailsBanner;
