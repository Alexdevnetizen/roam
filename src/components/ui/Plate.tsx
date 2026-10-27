import { useState, type CSSProperties } from "react";
import { cn } from "../../lib/cn";

type PlateProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  /**
   * Overrides the source aspect ratio, e.g. "16 / 9". Pass "none" to let
   * responsive CSS classes own the ratio instead.
   */
  ratio?: string;
  /** Gentle scale on hover-capable devices only. */
  zoom?: boolean;
  priority?: boolean;
  sizes?: string;
  style?: CSSProperties;
};

export function Plate({
  src,
  alt,
  width,
  height,
  className,
  ratio,
  zoom = false,
  priority = false,
  sizes = "100vw",
  style,
}: PlateProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={cn("plate", zoom && "plate--zoom", className)}
      style={{
        ...(ratio === "none" ? null : { aspectRatio: ratio ?? `${width} / ${height}` }),
        ...style,
      }}
    >
      {failed ? (
        <div className="plate__fallback">
          <span className="t-label">Image unavailable</span>
          <span className="t-small max-w-[34ch]">{alt}</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
