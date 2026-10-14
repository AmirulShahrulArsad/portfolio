import Image from "next/image";
export function Visual({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src?: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={"visual " + className}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
        />
      ) : (
        <div className="blank-visual" role="img" aria-label={alt}>
          <span className="blank-mark" aria-hidden="true">
            IMAGE TO BE ADDED
          </span>
        </div>
      )}
    </div>
  );
}
