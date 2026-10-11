function FeatureGridSection({ section }) {
  return (
    <section>
      <h2 className="text-3xl font-bold tracking-tight">
        {section.title}
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {section.items?.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border bg-card p-6"
          >
            <h3 className="text-xl font-semibold">
              {item.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {item.description}
            </p>

            {item.levels && (
              <div className="mt-5 space-y-2">
                {item.levels.map((level, levelIndex) => (
                  <div
                    key={levelIndex}
                    className="rounded-lg bg-muted px-3 py-2 text-sm"
                  >
                    {level}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export { FeatureGridSection };