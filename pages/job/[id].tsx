import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Job, fetchJobs } from "../../api/jobs";
import PrimaryButton from "../../components/PrimaryButton";
import PrimaryTag from "../../components/PrimaryTag";
import WarningTag from "../../components/WarningTag";
import BookmarkIcon from "!svg-react-loader!../../icons/bookmark.svg";
import ShareIcon from "!svg-react-loader!../../icons/share.svg";
import PinIcon from "!svg-react-loader!../../icons/pin.svg";
import ArrowIcon from "!svg-react-loader!../../icons/arrow.svg";

dayjs.extend(relativeTime);

export const getServerSideProps: GetServerSideProps<{
  job: Job;
}> = async ({ params }) => {
  if (params) {
    const jobs = await fetchJobs();

    if (Array.isArray(jobs)) {
      const job = jobs.find((el) => el.id === params.id);
      if (job) {
        return {
          props: {
            job,
          },
        };
      }
    } else {
      throw new Error(jobs.error);
    }
  }
  throw new Error("Job is not found!");
};

const Job = ({
  job,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="bg-white w-full flex justify-center">
      <div className="w-[1200px] mt-14 flex gap-32">
        <div className="w-2/3 flex flex-col">
          <section className="flex justify-between pb-2 border-b mb-8">
            <h1 className="font-bold text-3xl">Job Details</h1>
            <div className="flex gap-8">
              <span className="flex gap-4 items-center">
                <BookmarkIcon />
                Save to my list
              </span>
              <span className="flex gap-4 items-center">
                <ShareIcon />
                Share
              </span>
            </div>
          </section>

          <div className="mb-8">
            <PrimaryButton>Apply now</PrimaryButton>
          </div>
          <div className="flex gap-14 mb-2">
            <h2 className="font-bold text-2xl text-lviv">{job.title}</h2>
            <div className="flex flex-col w-1/3">
              <span className="font-bold text-xl text-lviv">{job.salary}</span>
              <span className="text-lg text-lviv">Brutto, per year</span>
            </div>
          </div>
          <span className="mb-2 text-lg text-lviv opacity-30">
            Posted {dayjs().to(dayjs(job.createdAt))}
          </span>
          <div className="text-lg text-lviv mb-8">{job.description}</div>
          <span className="font-bold text-xl text-lviv mb-2">
            Responsibilities
          </span>
          <div className="text-lg text-lviv mb-8">{job.description}</div>
          <span className="font-bold text-xl text-lviv mb-2">
            Compensation & Benefits:
          </span>
          <ul className="list-square">
            {job.benefits.map((benef) => (
              <li className="text-lg text-lviv mb-8" key={`${benef}-upper`}>
                {benef}
              </li>
            ))}
          </ul>
          <div className="mb-20">
            <PrimaryButton>Apply now</PrimaryButton>
          </div>
          <section className="flex justify-between pb-2 border-b mb-2">
            <h1 className="font-bold text-3xl">Additional info</h1>
          </section>
          <span className="text-lg text-lviv mb-2">Employment type</span>
          <div className="flex gap-4">
            {job.employment_type.map((type) => (
              <PrimaryTag key={type}>{type}</PrimaryTag>
            ))}
          </div>
          <span className="text-lg text-lviv mt-6 mb-2">Benefits</span>
          <div className="flex gap-4">
            {job.benefits.map((benef) => (
              <WarningTag key={benef}>{benef}</WarningTag>
            ))}
          </div>
          <section className="flex justify-between pb-2 border-b mb-8">
            <h1 className="font-bold text-3xl mt-28">Attached images</h1>
          </section>
          <div className="flex gap-2">
            {job.pictures.map((pic) => (
              <div
                key={pic}
                className="w-[200px] h-[116px] bg-cover rounded-lg"
                style={{ background: `url(${pic})` }}
              ></div>
            ))}
          </div>
          <Link
            href="/"
            className="flex items-center justify-around w-[213px] h-[50px] bg-berezovytsia text-ternopil text-xs font-semibold rounded-lg mt-24 mb-40 ml-[-60px]"
          >
            <ArrowIcon />
            RETURN TO JOB BOARD
          </Link>
        </div>
        <div className="w-1/3">
          <div className="rounded-lg overflow-hidden bg-kyiv relative before:absolute before:content-[''] before:w-[273px] before:h-[273px] before:left-[-20%] before:top-[-20px] before:rounded-full before:bg-svalava">
            <div className="flex py-8 px-14 flex-col relative">
              <h2 className="font-bold text-xl text-white">Department name.</h2>
              <h2 className="font-bold text-xl text-white">{job.name}</h2>
              <span className="flex items-center gap-2 text-white mt-2">
                <PinIcon />
                {job.address}
              </span>
              <span className="flex text-white mt-2">{job.phone}</span>
              <span className="flex text-white mt-0">{job.email}</span>
            </div>
            <img
              className="relative"
              src="https://via.placeholder.com/402x218"
              alt="temp"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
