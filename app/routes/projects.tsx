import Content from "~/components/content";
import ProjectsCard from "~/components/projects-card";
import Skeleton from "~/components/ui/skeleton";
import { getProjects } from "~/lib/server";
import { Suspense } from "react";
import { useLoaderData } from "@remix-run/react";

const Loading = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:gap-8">
      {[...Array(6)].map((i) => (
        <div key={i}>
          <Skeleton className="absolute z-10 ml-1 mt-1 aspect-[4/3] h-8 w-24 px-3 py-1" />
          <Skeleton className="aspect-[4/3]" />
        </div>
      ))}
    </div>
  );
};

export async function loader() {
  return await getProjects()
}

export default function Projects() {
  const projects = useLoaderData<typeof loader>();
  return (
    <main>
      <Content title="Things I have made">
        <Suspense fallback={<Loading />}>
          <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:gap-8">
            {projects.map((project, i) => {
              const { category, name, slug } = project;
              const darkThumbUrl = "https://via.placeholder.com/345x280/334155";
              const lightThumbUrl =
                "https://via.placeholder.com/345x280/f1f5f9";
              return (
                <ProjectsCard
                  key={i}
                  category={category.name}
                  darkThumbUrl={darkThumbUrl}
                  lightThumbUrl={lightThumbUrl}
                  name={name}
                  slug={slug}
                />
              );
            })}
          </div>
        </Suspense>
      </Content>
    </main>
  );
}
