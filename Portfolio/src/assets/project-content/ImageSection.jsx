function ImageSection({ section }) {
  return (
    <section>
      {section.title && (
        <h2 className="text-3xl font-bold tracking-tight">
          {section.title}
        </h2>
      )}

      <img
        src={section.image}
        alt={section.alt || section.title || ""}
        className="mt-6 w-full rounded-2xl border object-cover"
      />

      {section.caption && (
        <p className="mt-3 text-sm text-muted-foreground">
          {section.caption}
        </p>
      )}
    </section>
  );
}

export { ImageSection };
