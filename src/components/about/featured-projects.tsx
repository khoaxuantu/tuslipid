import { getProjInfo } from "@/lib/general_info_server";
import Link from "next/link";
import ProjectCard from "../projects/card";
import { ProjectProps } from "../projects/types";

const FeaturedProjectCount = 4;

export default async function FeaturedProjects() {
  const featuredProj = await getFeaturedProj(FeaturedProjectCount);

  return (
    <section id="featured-projects">
      <aside>
        <h2>About my contributions</h2>
        <blockquote>
          <i>
            I have done quite many interesting works. Here I want to show you
            some of my featured projects.
            <br />
            <br />
            To learn more about my other works, let's go there
            <br />
            <span>
              ---{"> "}
              <Link href="/projects">
                <span>All Projects</span>
              </Link>
            </span>
          </i>
        </blockquote>
      </aside>
      <div className="content">
        {featuredProj.map((proj) => {
          return <ProjectCard key={proj.id} {...proj} />;
        })}
      </div>
    </section>
  );
}

async function getFeaturedProj(amount: number) {
  const projInfoDict = await getProjInfo();

  return Object.entries(projInfoDict)
    .sort((a, b) => Number(a[1].id) - Number(b[1].id))
    .reduce<ProjectProps[]>((key_list, proj) => {
      if (key_list.length >= amount) return key_list;
      key_list.push({ ...proj[1], imageURL: undefined });
      return key_list;
    }, []);
}
