const tags = [
  "Fitness Centre",
  "Yoga Studio",
  "Wellness Center",
  "MMA & Boxing Hub",
  "Dance Studio",
  "Physiotherapy",
];

export default function TaglineList() {
  return (
    <div className="text-lime-400 font-bold space-y-1">
      {tags.map((t) => (
        <p key={t}>{t}</p>
      ))}
    </div>
  );
}
