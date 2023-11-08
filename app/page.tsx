import ResumePreview from "./ResumePreview";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const email = "test@gmail.com";

  return (
    <main className="flex justify-between w-full h-full">
      {/* Display for large screens (1024px and above) */}
      <div className="hidden xl:flex h-screen w-full overflow-hidden">
        <div className="w-1/2">
          <div className="h-full w-full"> Editor</div>
        </div>
        <Separator className="m-0 sm:hidden" orientation="vertical" />
        <div className="w-1/2 py-6 bg-gray-200" id="root">
          <ResumePreview resumeId="default" email={email} />
        </div>
      </div>
    </main>
  );
}
