import Link from "next/link";
import Card from "../../lib/factory/cardBase";
import { getProjInfo } from "@/lib/general_info_server";
import { IProjCardProps } from "@/lib/type/card";

export async function AboutProject() {
  const FEATURE_PROJ_NUMBER = 4;
  const featuredProj = await getFeaturedProj(FEATURE_PROJ_NUMBER);

  return (
    <section className="mb-5 row">
      <div className="col-4 pe-5 pt-2 pb-3">
        <h2 className="pb-2">
          What I <span>have built</span>
        </h2>
        <blockquote className="pt-3 pe-2 pb-2">
          Here are only my featured projects. Let's navigate to my full list here{" "}
          <span>
            ---{"> "}
            <Link href="/projects">
              <span>All Projects</span>
            </Link>
          </span>
        </blockquote>
      </div>
      <div className="about-l-wrapper__proj col-8">
        {featuredProj.map((proj) => {
          return <Card key={proj.id} isFeatured={true} {...proj} />;
        })}
      </div>
    </section>
  );
}

async function getFeaturedProj(amount: number) {
  const projInfoDict = await getProjInfo();

  return Object.entries(projInfoDict)
    .sort(compareProj)
    .reduce<IProjCardProps[]>((key_list: IProjCardProps[], proj: [string, IProjCardProps]) => {
      if (key_list.length >= amount) return key_list;
      key_list.push(proj[1]);
      return key_list;
    }, []);
}

export async function ProjectsList() {
  const projInfoDict = await getProjInfo();

  return (
    <>
      {Object.entries(projInfoDict)
        .sort(compareProj)
        .map((entry) => {
          return <Card key={entry[0]} {...projInfoDict[entry[0]]} />;
        })}
    </>
  );
}

function compareProj(a: [string, IProjCardProps], b: [string, IProjCardProps]) {
  return (a[1].id as number) - (b[1].id as number);
}
