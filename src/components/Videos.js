import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";
import { useHref } from "react-router-dom";

const Videos = ({ videos, direction }) => {
  const href = useHref();
  const hrefChannel = href.includes("channel");

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && !hrefChannel && (
            <ChannelCard channelDetail={item} />
          )}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
