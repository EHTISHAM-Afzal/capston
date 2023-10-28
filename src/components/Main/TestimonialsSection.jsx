import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import ReviewCard from "../cards/ReviewCard"
const TestimonialsSection = () => {
  return (
    <div className="grids-section-width flex flex-col items-center justify-center py-4 space-y-4  ">
          <p className=" text-3xl font-bold font-markazi-text text-[36] tracking-wider">Testimonials</p>
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



{/* <div className="flex flex-wrap justify-center items-center ">
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </div> */}