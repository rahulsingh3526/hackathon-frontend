import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import ReviewedHackathon from "@/components/reviewed-hackathon";
import { useRouter } from "next/navigation";
import Link from "next/link";
import CompletedHackathon from "@/components/completed-hackathon";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  return (
    <div className="h-full">
      <div className="flex w-full">
        <div className="w-2/3">
          <Tabs defaultValue="completed">
            <div className="flex items-center p-2 m-2 space-x-3 justify-between">
              <div className="flex justify-center items-center space-x-3 ">
                {" "}
                <p>Work History</p>
                <Separator orientation="vertical" className="h-6 w-[1.5px]" />
                <TabsList>
                  {" "}
                  <TabsTrigger value="completed">Completed</TabsTrigger>{" "}
                  <TabsTrigger value="reviewed">Reviewed</TabsTrigger>
                </TabsList>
              </div>

              <div className="flex justify-center items-center space-x-3">
                <Separator orientation="vertical" className="h-6 w-[1.5px]" />
                <p>Filter</p>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Design" textValue="1">
                      Design
                    </SelectItem>
                    <SelectItem value="Frontend">Frontend</SelectItem>
                    <SelectItem value="Backend">Backend</SelectItem>
                    <SelectItem value="Blockchain">Blockchain</SelectItem>
                    <SelectItem value="Content">Content</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Separator />

            <TabsContent value="completed" className="w-full">
              <CompletedHackathon />
            </TabsContent>

            <TabsContent value="reviewed">
              <ReviewedHackathon />
            </TabsContent>
          </Tabs>
        </div>
        <div className="w-1/3 p-5">
          <input
            type="text"
            placeholder="Search Bounties, Profiles, and more..."
            className="w-full bg-[#F1F5F9] border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow duration-300 shadow-md hover:shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
