/* eslint-disable @typescript-eslint/no-explicit-any */
import { type NextPage } from "next";
import { useEffect, useState } from "react";

interface LoadingVideosProps {
  setLoading: any;
}

const LoadVideos: NextPage<LoadingVideosProps> = ({ setLoading }) => {
  const [finishedLoading, setFinishedLoading] = useState(0);

  useEffect(() => {
    console.log("logged", finishedLoading);

    if (finishedLoading === 3) {
      setLoading(false);
    }
  }, [finishedLoading, setLoading]);

  return (
    <>
      {/* BG Video and Stars (hidden on mobile) */}
      <div className="absolute top-[50px] left-0 right-0 z-0 hidden  h-[calc(100vh-100px)] items-center justify-center saturate-[1.4] md:flex">
        <video
          className="h-full"
          src={"videos/landingshot.mp4"}
          onCanPlayThrough={() => {
            setFinishedLoading((c) => c + 1);
          }}
        >
          your browser does not support the video tag.
        </video>
        <video
          className="h-full"
          src={"/videos/landingloop.mp4"}
          onCanPlayThrough={() => {
            setFinishedLoading((c) => c + 1);
            console.log("test");
          }}
        >
          your browser does not support the video tag.
        </video>

        <video
          className="h-full"
          src={"/videos/landingshotmobile.mp4"}
          onCanPlayThrough={() => {
            setFinishedLoading((c) => c + 1);
          }}
        >
          your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export default LoadVideos;
