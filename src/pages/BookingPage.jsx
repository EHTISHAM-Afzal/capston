import { Separator } from "@radix-ui/react-separator";
import BookingForm from "../forms/BookingForm";

const BookingPage = () => {
  return (
    <div className="grids items-center justify-center ">
      <h1 className="col-span-full text-center dark:text-primary tracking-wider font-bold py-8 scroll-m-20 text-4xl font-markazi-text lg:text-5xl">
        Reserve your table
      </h1>
      <Separator className="grids-section-width" />
      <BookingForm />
    </div>
  );
};

export default BookingPage;
