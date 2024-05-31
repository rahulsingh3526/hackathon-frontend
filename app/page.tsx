import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import ReviewedHackathon from "@/components/reviewed-hackathon";
import { useRouter } from "next/navigation";
import Link from "next/link";
import CompletedHackathon from "@/components/completed-hackathon";

export default function Home() {
  return (
    <div className="h-full">
      <p>hello</p>

      <div>
        <Tabs defaultValue="completed" className="w-2/3">
          <div className="flex items-center">
            <p>Work History</p>
            <Separator orientation="vertical" className="h-6 w-[1.5px]" />

            <TabsList>
              {" "}
              <TabsTrigger value="completed">Completed</TabsTrigger>{" "}
              <TabsTrigger value="reviewed">Reviewed</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="completed" className="w-full">
            <CompletedHackathon />
          </TabsContent>

          <TabsContent value="reviewed">
            <ReviewedHackathon />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
