import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Chatbotbtn() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="fixed ml-[92%] mt-[35%] w-16 h-16 rounded-[100px] hover:cursor-pointer text-3xl border-1 border-black  z-50 bg-orange-200"
        >
          🤖
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>LearnSpace ChatBot</SheetTitle>
          <SheetDescription>
            We have added a chatbot for helping you and answering to your
            questions.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4 items-center justify-center flex">
          <div className="grid grid-cols-4 items-center gap-4">
            <Textarea className="w-80" placeholder="Type your message here." />
          </div>
          <Button type="submit">Submit</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
