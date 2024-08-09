import Link from "next/link";

export default function ProjectContents() {
  return (
    <div className="flex px-80 py-24 text-3xl font-semibold tracking-[.02em] justify-around">
      <div className="flex flex-col space-y-11">
        <div className="hover:underline">
          <Link href="#introduction">1. Introduction</Link>
        </div>
        <div className="hover:underline">
          <Link href="#research">2. Research</Link>
        </div>
        <div className="hover:underline">
          <Link href="#define">3. Define</Link>
        </div>
      </div>
      <div className="flex flex-col space-y-11">
        <div className="hover:underline">
          <Link href="#design">4. Design</Link>
        </div>
        <div className="hover:underline">
          <Link href="#test">5. Test</Link>
        </div>
        <div className="hover:underline">
          <Link href="#conclusion">6. Conclusion</Link>
        </div>
      </div>
    </div>
  );
}
