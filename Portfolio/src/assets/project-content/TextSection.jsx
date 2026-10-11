function TextSection({ section }) {
  return (
    <section>
      <h2 className="text-3xl font-bold tracking-tight">
        {section.title}
      </h2>

      {section.image && (
        <img
          src={section.image}
          alt={section.title}
          className="mt-6 w-full rounded-2xl border object-cover"
        />
      )}

      <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground">
        {section.paragraphs?.map((paragraph, index) => (
          <p key={index}>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}

export { TextSection };