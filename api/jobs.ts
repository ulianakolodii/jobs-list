export type Job = {
  id: string;
  name: string;
  email: string;
  phone: string;
  title: string;
  salary: string;
  address: string;
  benefits: Array<string>;
  location: Record<"lat" | "long", number>;
  pictures: Array<string>;
  createdAt: string;
  updatedAt: string;
  description: string;
  employment_type: Array<string>;
};

export const fetchJobs = async () => {
  const res = await fetch(
    "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu"
  );
  const jobs: Array<Job> | { error: string } = await res.json();
  return jobs;
};
