import Button from "@/lib/factory/button";

export default function ProjectsPageHeaderGrp() {
  return (
    <header>
      <h1 className="pt-2 pb-2">Tus's Projects</h1>
      <blockquote className="mt-2">
        I started studying Information Technology in 2020 and luckily done some fun works since
        then.
      </blockquote>
      <Button variant="theme" className="mt-4" />
    </header>
  );
}
