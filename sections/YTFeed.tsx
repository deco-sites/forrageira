export interface Video {
  url: string;
  title?: string;
}

export interface FeedProps {
  videos: Video[];
}

export default function YTFeed(props: FeedProps) {
  return (
    <div>
      {props.videos.map((video) => (
        <iframe
          width="560"
          height="315"
          src={video.url}
          title={video.title ?? "YouTube video"}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        >
        </iframe>
      ))}
    </div>
  );
}
