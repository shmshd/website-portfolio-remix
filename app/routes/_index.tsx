import type { MetaFunction } from "@remix-run/node";
import Content from "~/components/content";
import Social from "~/components/social";

export const meta: MetaFunction = () => {
  return [
    { title: "Shamshid." },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main>
      <Content title="Hi, I'm Shamshid.">
        <p className="tracing-wide mt-6 text-xl font-light leading-loose">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          commodi dolores ea ipsum iste laborum molestiae nobis saepe tenetur,
          voluptas. Facilis numquam porro quis. Dolorem eligendi est expedita
          nesciunt, quis quisquam maxime quis, repudiandae saepe vero vitae!
        </p>
      </Content>
      <Social />
    </main>
  );
}
