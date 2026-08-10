type FolderShapeProps = {
  fill: string;
  className?: string;
};

export function FolderShape({ fill, className }: FolderShapeProps) {
  return (
    <div className={className} aria-hidden="true">
      {/* Main body — rounded top corners stay constant at any width */}
      <div
        className="absolute inset-x-[10px] top-0 bottom-0 rounded-t-[20px]"
        style={{ backgroundColor: fill }}
      />
      {/* Left foot — gentle concave curve connecting body to wider base */}
      <svg
        className="absolute left-0 bottom-0 h-[32px] w-[10px]"
        viewBox="0 0 10 32"
        fill="none"
      >
        <path d="M10 0 C10 10 6 20 0 32 L10 32 Z" fill={fill} />
      </svg>
      {/* Right foot — mirrored */}
      <svg
        className="absolute right-0 bottom-0 h-[32px] w-[10px]"
        viewBox="0 0 10 32"
        fill="none"
      >
        <path d="M0 0 C0 10 4 20 10 32 L0 32 Z" fill={fill} />
      </svg>
      {/* Overhang strip merges the tab flush into the panel below */}
      <div
        className="absolute inset-x-0 -bottom-[5px] h-[5px]"
        style={{ backgroundColor: fill }}
      />
    </div>
  );
}
