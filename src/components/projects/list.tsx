import { getProjInfo } from "@/lib/general_info_server";
import ProjectCard from "./card";

export async function ProjectList() {
  const projInfoDict = await getProjInfo();

  return (
    <>
      {Object.entries(projInfoDict)
        .sort((a, b) => Number(a[1].id) - Number(b[1].id))
        .map((entry) => {
          return <ProjectCard key={entry[0]} {...projInfoDict[entry[0]]} />;
        })}
    </>
  );
}
