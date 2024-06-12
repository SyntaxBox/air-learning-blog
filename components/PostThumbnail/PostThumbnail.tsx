import Container from "@/UI/layout/Container";
import publishDate from "@/logic/publishDate";
import { Clock } from "react-bootstrap-icons";

function PostThumbnail({
  url,
  title,
  postTime,
}: {
  url: string;
  title: string;
  postTime: Date | EpochTimeStamp;
}) {
  const style = {
    backgroundImage: `url('/${url}')`,
  };
  return (
    <Container>
      <div
        className="w-full h-[400px] overflow-hidden rounded-b-3xl mt-[-10px] bg-no-repeat bg-cover bg-center"
        style={style}
      >
        <div className="bg-gradient-to-t from-[#0000006b] via-transparent w-full h-full flex justify-end p-4 flex-col">
          <span className="flex items-center gap-3 text-lg text-gray-200">
            <Clock className="text-xl" /> {publishDate(postTime)}
          </span>
          <h1 className="text-3xl text-white">{title}</h1>
        </div>
      </div>
    </Container>
  );
}

export default PostThumbnail;
