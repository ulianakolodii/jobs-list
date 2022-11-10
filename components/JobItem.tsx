import Link from "next/link";
import { Job } from "../api/jobs";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import StarIcon from "!svg-react-loader!../icons/star.svg";
import PinIcon from "!svg-react-loader!../icons/pin.svg";
import BookmarkIcon from "!svg-react-loader!../icons/bookmark.svg";

const JobItem = ({ id, title, name, address, pictures }: Job) => {
  return (
    <div className="bg-odesa max-w-7xl w-full shadow-md rounded-3xl flex px-4 py-3.5 sm:bg-white sm:py-6">
      <div>
        <img
          className="max-w-none w-16 h-16 rounded-full mt-11 mr-5 sm:mt-0"
          src={pictures[0]}
          alt={title}
        />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center mb-3 sm:hidden">
          <div className="flex gap-px">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
          <span className="text-mukachevo text-sm font-light">
            Posted {dayjs().to(dayjs(job.createdAt))}
          </span>
        </div>
        <Link
          href={`/job/${id}`}
          className="overflow-hidden text-lviv my-2 text-lg leading-6 mb-1 sm:font-bold"
        >
          {name}
        </Link>
        <div className="overflow-hidden text-mukachevo font-light mb-2">
          {title}
        </div>
        <div className="flex items-center gap-2 mb-3">
          <PinIcon />
          <div className="text-mukachevo font-light">{address}</div>
        </div>
      </div>
      <div className="sm:flex sm:visible gap-8 hidden">
        <div className="flex gap-px items-center">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
        <div className="flex flex-col justify-between items-end">
          <BookmarkIcon className="mr-2" />
          <span className="text-mukachevo text-sm font-light">
            Posted 2 days ago
          </span>
        </div>
      </div>
    </div>
  );
};

export default JobItem;
