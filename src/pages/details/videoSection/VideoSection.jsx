import React, { useState } from "react";
import "./style.scss";
import PageContainer from "../../../components/pageContainer/PageContianer";
import VideoPopup from "../../../components/videoPopup/VideoPopup";
import Img from "../../../components/lazyLoadImage/Img";
import PlayBtn from "../detailsBanner/PlayBtn";
const VideoSection = ({ data, loading }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const loadingSkeleton = () => {
    return (
      <div className="skItem">
        <div className="thumb skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };

  return (
    <div className="P-video-section">
      <PageContainer>
        <div className="P-section-heading">Official Videos</div>
        {!loading ? (
          <div className="P-videos G-flex">
            {data?.results?.map((video) => {
              return (
                <div
                  key={video.id}
                  className="P-video-item"
                  onClick={() => {
                    setVideoId(video.key);
                    setShow(true);
                  }}
                >
                    <div className="P-video-thumbnail">
                        <Img src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}/>
                        <PlayBtn/>
                    </div>
                    <div className="P-video-title">
                        {video.name}
                    </div>
                </div>
              );
            })}{" "}
          </div>
        ) : (
          <div className="videoSkeleton">
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
          </div>
        )}
      </PageContainer>
      <VideoPopup
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
      />
    </div>
  );
};

export default VideoSection;
