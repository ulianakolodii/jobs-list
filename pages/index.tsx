import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Job, fetchJobs } from "../api/jobs";
import JobItem from "../components/JobItem";

export const getServerSideProps: GetServerSideProps<{
  jobs: Array<Job>;
}> = async () => {
  const jobs = await fetchJobs();
  if (Array.isArray(jobs)) {
    return {
      props: {
        jobs,
      },
    };
  }
  throw new Error(jobs.error);
};

const Home = ({
  jobs,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="bg-rivne w-full flex flex-col items-center gap-2 p-2">
      {jobs && jobs.map((job) => <JobItem key={job.id} {...job} />)}
    </div>
  );
};

export default Home;
