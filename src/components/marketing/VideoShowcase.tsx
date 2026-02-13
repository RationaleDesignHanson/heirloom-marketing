import PhoneDemo from "./PhoneDemo";

export default function VideoShowcase({
  title,
  subtitle,
  demo,
}: {
  title: string;
  subtitle?: string;
  demo: { video: string; poster: string; alt: string; aspect: "16:9" | "9:16" };
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="mt-2 max-w-lg text-sm text-black/70">{subtitle}</p>
      )}
      <div className="mt-8">
        <PhoneDemo demo={demo} />
      </div>
    </div>
  );
}
