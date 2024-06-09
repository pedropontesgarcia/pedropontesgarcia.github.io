export function Paragraph({ title, children, brk = false, left = false }: any) {
  var dcls =
    "w-full text-center p-16 font-sans flex flex-col items-center justify-center";
  var tcls = "text-6xl sm:text-8xl";
  var pcls = "text-lg mt-4";
  if (brk) tcls += " break-all";
  if (left) {
    (dcls += " pb-0 pt-4"), (tcls += " text-left"), (pcls += " text-left");
  }
  return (
    <div className={dcls}>
      <p className={tcls}>{title}</p>
      <p className={pcls}>{children}</p>
    </div>
  );
}
