import { getProject } from "~/lib/server";
import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader({ params }: LoaderFunctionArgs) {
  const { slug } = params;
  return await getProject(slug);
}

export default function Project() {
  const projectDetails = useLoaderData<typeof loader>();
  return (
    <div>
      {projectDetails.map((project) => project.name)}
      <br />
      {projectDetails.map((project) => project.description)}
    </div>
  );
}
