interface AccentTitleProps {
  text: string;
  /** Substring of `text` set in the italic serif. Ignored if it is not found. */
  accent?: string;
}

/** Sans headline with one phrase set in the italic editorial serif. */
export function AccentTitle({ text, accent }: AccentTitleProps) {
  const start = accent ? text.lastIndexOf(accent) : -1;
  if (!accent || start === -1) return <>{text}</>;

  return (
    <>
      {text.slice(0, start)}
      <span className="accent">{accent}</span>
      {text.slice(start + accent.length)}
    </>
  );
}
