import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import ReviewCard from "../cards/ReviewCard"
const TestimonialsSection = () => {
  return (
    <div className="flex flex-col justify-center px-3 pt-6">
          <p className="px-6 text-4xl font-bold font-markazi-text  tracking-wider">Testimonials</p>
          {/* Review Cards */}
          <ScrollArea className=" h-fit w-full overflow-hidden flex items-center">
          <div className="flex w-max p-4">
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
  )
}

export default TestimonialsSection