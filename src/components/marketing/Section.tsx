export default function Section({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl py-14 sm:py-16">{children}</div>
    </section>
  );
}
