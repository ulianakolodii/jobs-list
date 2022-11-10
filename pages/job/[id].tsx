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
  apiKey: string;
}> = async ({ params }) => {
  if (params) {
    const jobs = await fetchJobs();

    if (Array.isArray(jobs)) {
      const job = jobs.find((el) => el.id === params.id);
      if (job) {
        return {
          props: {
            job,
            apiKey: process.env.API_KEY || "",
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
  apiKey,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="bg-white w-full flex justify-center">
      <div className="max-w-[1200px] w-full lg:mt-14 pt-6 lg:pt-0 px-4 lg:pl-0 flex flex-col lg:flex-row lg:gap-32">
        <div className="w-full lg:w-2/3 flex flex-col">
          <section className="flex flex-col justify-between pb-2 mb-8 lg:flex-row lg:border-b">
            <h1 className="font-bold text-3xl border-b pb-3 lg:border-none lg:pb-0">
              Job Details
            </h1>
            <div className="flex flex-row gap-8 pt-6 lg:pt-0">
              <span className="flex flex-row gap-4 items-center">
                <BookmarkIcon />
                Save to my list
              </span>
              <span className="flex flex-row gap-4 items-center">
                <ShareIcon />
                Share
              </span>
            </div>
          </section>

          <div className="hidden lg:block mb-8">
            <PrimaryButton>Apply now</PrimaryButton>
          </div>
          <div className="flex gap-14 mb-2">
            <h2 className="font-bold text-2xl text-lviv max-w-[500px] w-full">
              {job.title}
            </h2>
            <div className="hidden lg:flex lg:flex-col">
              <span className="font-bold text-xl text-lviv">{job.salary}</span>
              <span className="text-lg text-lviv">Brutto, per year</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="mb-2 text-lg text-lviv opacity-30">
              Posted {dayjs().to(dayjs(job.createdAt))}
            </span>
            <div className="flex flex-col items-end w-1/3 mb-3 lg:hidden">
              <span className="text-lg text-lviv">Brutto, per year</span>
              <span className="font-bold text-xl text-lviv">{job.salary}</span>
            </div>
          </div>
          <div className="text-lg text-lviv mb-11 lg:mb-8">
            {job.description}
          </div>
          <span className="font-bold text-xl text-lviv mb-2">
            Responsibilities
          </span>
          <div className="text-lg text-lviv mb-8">{job.description}</div>
          <span className="font-bold text-xl text-lviv my-3.5 lg:mb-2">
            Compensation & Benefits:
          </span>
          <ul className="list-square pl-3.5 lg:pl-0">
            {job.benefits.map((benef) => (
              <li className="text-lg text-lviv" key={`${benef}-upper`}>
                {benef}
              </li>
            ))}
          </ul>
          <div className="flex justify-center mb-20 mt-8 lg:block">
            <PrimaryButton>Apply now</PrimaryButton>
          </div>
          <div className="block mb-14 lg:hidden">
            <section className="flex justify-between pb-4 border-b mb-6">
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
          </div>
          <section className="flex justify-between pb-4 mb-6 border-b lg:mb-2 lg:pb-2">
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
          <div className="hidden lg:block">
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
          </div>
          <Link
            href="/"
            className="hidden lg:flex items-center justify-around w-[213px] h-[50px] bg-berezovytsia text-ternopil text-xs font-semibold rounded-lg mt-24 mb-40 ml-[-60px]"
          >
            <ArrowIcon />
            RETURN TO JOB BOARD
          </Link>
        </div>
        <div className="max-w-[376px] w-full lg:w-1/3">
          <section className="flex justify-between pb-4 mb-6 mt-16 border-b lg:hidden">
            <h1 className="font-bold text-3xl">Contacts</h1>
          </section>
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
              src={`https://maps.googleapis.com/maps/api/staticmap?center=${job.location.lat},${job.location.long}&zoom=12&size=402x218&maptype=roadmap&key=${apiKey}&style=element%3Ageometry%7Ccolor%3A0x242f3e&style=element%3Alabels.text.stroke%7Ccolor%3A0x242f3e&style=element%3Alabels.text.fill%7Ccolor%3A0x746855&style=feature%3Aadministrative.locality%7Celement%3Alabels.text.fill%7Ccolor%3A0xd59563&style=feature%3Apoi%7Celement%3Alabels.text.fill%7Ccolor%3A0xd59563&style=feature%3Apoi.park%7Celement%3Ageometry%7Ccolor%3A0x263c3f&style=feature%3Apoi.park%7Celement%3Alabels.text.fill%7Ccolor%3A0x6b9a76&style=feature%3Aroad%7Celement%3Ageometry%7Ccolor%3A0x38414e&style=feature%3Aroad%7Celement%3Ageometry.stroke%7Ccolor%3A0x212a37&style=feature%3Aroad%7Celement%3Alabels.text.fill%7Ccolor%3A0x9ca5b3&style=feature%3Aroad.highway%7Celement%3Ageometry%7Ccolor%3A0x746855&style=feature%3Aroad.highway%7Celement%3Ageometry.stroke%7Ccolor%3A0x1f2835&style=feature%3Aroad.highway%7Celement%3Alabels.text.fill%7Ccolor%3A0xf3d19c&style=feature%3Atransit%7Celement%3Ageometry%7Ccolor%3A0x2f3948&style=feature%3Atransit.station%7Celement%3Alabels.text.fill%7Ccolor%3A0xd59563&style=feature%3Awater%7Celement%3Ageometry%7Ccolor%3A0x17263c&style=feature%3Awater%7Celement%3Alabels.text.fill%7Ccolor%3A0x515c6d&style=feature%3Awater%7Celement%3Alabels.text.stroke%7Ccolor%3A0x17263c`}
              alt="location"
            />
          </div>
        </div>
        <div className="flex justify-start">
          <Link
            href="/"
            className="flex items-center justify-around w-[213px] h-[50px] bg-berezovytsia text-ternopil text-xs font-semibold rounded-lg mt-24 mb-40 lg:hidden"
          >
            <ArrowIcon />
            RETURN TO JOB BOARD
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
