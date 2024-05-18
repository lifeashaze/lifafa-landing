export function TeamCardTab({ text }: { text: string }) {
  return (
    <div className="relative z-10 max-w-max py-1 px-3 bg-background-dark border-2 rounded-md border-primary">
      <p className="text-white text-center">{text}</p>
    </div>
  );
}
