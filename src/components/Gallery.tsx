"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import type { Project } from "@/data/projects";
export function ProjectGallery({ images }: { images: Project["gallery"] }) {
  const [index, setIndex] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    const handle = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setIndex((n) => (n + 1) % images.length);
      if (e.key === "ArrowLeft")
        setIndex((n) => (n - 1 + images.length) % images.length);
    };
    d.addEventListener("keydown", handle);
    return () => d.removeEventListener("keydown", handle);
  }, [images.length]);
  return (
    <>
      <div className="gallery-grid">
        {images.map((im, i) => (
          <figure key={i}>
            <button
              className="gallery-button"
              aria-label={"Enlarge: " + im.caption}
              onClick={() => {
                setIndex(i);
                dialog.current?.showModal();
                closeButton.current?.focus();
              }}
            >
              <Image src={im.src} alt={im.alt} width={900} height={540} />
              <Expand size={20} />
            </button>
            <figcaption>{im.caption}</figcaption>
          </figure>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="lightbox"
        aria-label="Project image viewer"
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current?.close();
        }}
      >
        <div className="lightbox-inner">
          <button
            ref={closeButton}
            className="lightbox-close"
            aria-label="Close image viewer"
            onClick={() => dialog.current?.close()}
          >
            <X />
          </button>
          <Image
            src={images[index].src}
            alt={images[index].alt}
            width={1350}
            height={810}
          />
          <div className="lightbox-controls">
            <button
              aria-label="Previous image"
              onClick={() =>
                setIndex((index - 1 + images.length) % images.length)
              }
            >
              <ChevronLeft />
            </button>
            <p aria-live="polite">
              {images[index].caption} · {index + 1}/{images.length}
            </p>
            <button
              aria-label="Next image"
              onClick={() => setIndex((index + 1) % images.length)}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
