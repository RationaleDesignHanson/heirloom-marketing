export default function ProblemSolution({
  title,
  problem,
  solution,
}: {
  title: string;
  problem: { title: string; body: string; bullets?: string[] };
  solution: { title: string; body: string; bullets?: string[] };
}) {
  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-black/10 bg-white/80 p-6 shadow-sm backdrop-blur">
          <div className="text-sm font-semibold text-black/80">{problem.title}</div>
          <p className="mt-2 text-sm text-black/70">{problem.body}</p>
          {problem.bullets && problem.bullets.length > 0 && (
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-black/70">
              {problem.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}
        </div>

        <div className="rounded-2xl border border-black/10 bg-white/80 p-6 shadow-sm backdrop-blur">
          <div className="text-sm font-semibold text-black/80">{solution.title}</div>
          <p className="mt-2 text-sm text-black/70">{solution.body}</p>
          {solution.bullets && solution.bullets.length > 0 && (
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-black/70">
              {solution.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

