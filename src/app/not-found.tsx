import { Button } from "@/components/Shared";
export default function NotFound() {
  return (
    <section className="container page-section">
      <p className="eyebrow">404 / PAGE NOT FOUND</p>
      <h1 className="page-title">
        A different
        <br />
        <span className="serif">direction.</span>
      </h1>
      <p className="page-intro">This page could not be found.</p>
      <Button href="/work">Explore My Work</Button>
    </section>
  );
}
