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
