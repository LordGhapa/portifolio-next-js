import AllProjects from "@/components/AllProjects";
import { getAllProjects } from "@/lib/apis";

export default async function Projetos() {
  const data = await getAllProjects();

  return (
    <>
      <AllProjects data={data} />
    </>
  );
}
