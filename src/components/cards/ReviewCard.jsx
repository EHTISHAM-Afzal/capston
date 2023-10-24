/* eslint-disable react/prop-types */
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StarFilledIcon } from "@radix-ui/react-icons";


const Stars = ({ count }) => {
  return (
    <>
      {Array(count)
        .fill()
        .map((_, i) => (
          <StarFilledIcon key={i} />
        ))}
    </>
  );
};

const ReviewCard = () => {
  return (
    <Card className="w-48 h-48 py-1 space-y-4 hover:shadow-lg m-2 dark:hover:shadow-secondary ">
      <CardContent className="space-y-5">
        <span className="w-full pt-2 px-3 space-x-2 flex flex-row justify-center items-center ">
          <Stars count={5} />
        </span>
        <div className="w-full flex flex-row justify-start space-x-2 items-center">
          <Avatar>
            <AvatarImage
              alt="reviewer"
              src="https://avatars.githubusercontent.com/u/106005092?s=96&v=4"
            />
            <AvatarFallback>IA</AvatarFallback>
          </Avatar>
          <div className="flex flex-col justify-center text-start">
            <CardTitle className="font-karla tracking-wide">Ihtisham</CardTitle>
            <CardDescription className="font-karla">
              Little Lemon
            </CardDescription>
          </div>
        </div>
        <CardDescription className="text-xs font-karla ">
          “Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!”
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
