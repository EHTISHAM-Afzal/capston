import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ReviewCard = () => {
  return (
    <Card className="w-48 h-48 py-1 space-y-4 hover:shadow-lg m-2">
      <CardContent className="space-y-5">
        <p className="w-full py-1 px-3 ">⭐⭐⭐⭐⭐</p>
        <div className="w-full flex flex-row justify-start space-x-2 items-center">
          <Avatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/106005092?s=96&v=4" />
            <AvatarFallback>IA</AvatarFallback>
          </Avatar>
          <div className="flex flex-col justify-center text-start">
            <CardTitle className="font-karla">John Doe</CardTitle>
            <CardDescription className="font-karla">
              Little Lemon
            </CardDescription>
          </div>
        </div>
        <CardDescription className="text-xs font-karla text-[#6E6F6E]">
          “Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!”
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
