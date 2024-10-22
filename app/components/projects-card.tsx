const CategoryBadge = (props: { title: string }) => {
  return (
    <span className="absolute z-10 ml-1 mt-1 bg-background/40 px-3 py-1 lowercase text-foreground/60">
      {props.title}
    </span>
  );
};

export default function ProjectsCard(props: {
  category: string;
  darkThumbUrl: string;
  lightThumbUrl: string;
  name: string;
  slug: string;
}) {
  return (
    <a
      className="relative aspect-[4/3] bg-stone-200 dark:bg-stone-700"
      href={`/project/${props.slug}`}
    >
      <CategoryBadge title={props.category} />
      <img
        alt={props.name}
        className="aspect-[4/3] w-full object-cover"
        // src={colorMode() === 'dark' ? props.darkThumbUrl : props.lightThumbUrl}
      />
      <div className="absolute bottom-0 z-10 w-full px-3 py-1">
        <h2 className="text-lg text-foreground">{props.name}</h2>
      </div>
    </a>
  );
}
