import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { RadioGroup } from "@radix-ui/react-radio-group";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import {
  useBookTableMutation,
  useGetAvailableTimesOnDateQuery,
} from "@/src/features/BookingTables/BookingTableSlice";
import { ToastAction } from "@/components/ui/toast";
import Spinner from "../smallComp/Spinner";
import { useEffect } from "react";

const formSchema = z.object({
  date: z.date(),
  time: z.string({
    required_error:
      "If there is no availible tablse please choose another date or see another time",
  }),
  guests: z
    .string()
    .min(1, { message: "The number of guests must be 1 to 10" })
    .max(2),
  occasion: z.enum(["Birthday", "Anniversary"]),
});

const BookingForm = () => {
  const [bookTable, { isLoading: isSubmitting }] = useBookTableMutation();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      guests: "",
    },
  });

  const selectedDate = form.watch("date");
  const isoDate = selectedDate?.toISOString();
  const {
    refetch,
    data: AvailibleTimes,
    isLoading: isTimesLoading,
    error: timesError,
  } = useGetAvailableTimesOnDateQuery(isoDate);

  useEffect(() => {
    if (isoDate) {
      refetch(isoDate);
    }
  }, [isoDate]);

  function onSubmit(data) {
    bookTable(data)
      .unwrap()
      .then((res) => {
        form.reset();
        // trigger alert dialog
        toast({
          title: "Reservation completed",
          description: `On ${format(new Date(res.date), "PPPP")} time ${
            res.time
          }:00 ${
            Number(res.time) < 3 ? "PM" : "AM"
          } with the number of guests ${res.guests} in occassion of ${
            res.occasion
          }`,
        });
      })
      .catch((err) => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: `Reservation cannot complete ${
            err.status ? `due to ${err.status}` : ""
          } please try again and make sure you'r providing correct information `,
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      });
  }

  return (
    <section className="grids-section-width flex flex-col justify-center items-center mb-16">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 px-8 w-full md:w-[80%] lg:w-[60%]"
        >
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={[
                        (date) =>
                          date < new Date().setDate(new Date().getDate() - 1),
                      ]}
                      initialFocus
                      footer={<span>The date must be in future</span>}
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>Please select the date .</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem className="space-y-3 w-full">
                <FormLabel>Select Time</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="grid grid-cols-3 grid-flow-dense gap-4 "
                  >
                    {AvailibleTimes && !timesError ? (
                      AvailibleTimes.map((time, idx) => (
                        <FormItem key={idx} className="flex items-center">
                          <FormLabel className=" flex items-center justify-center rounded-md w-full h-16 font-normal border-2 hover:bg-secondary p-2 [&:has([data-state=checked])]:border-primary ">
                            <FormControl>
                              <RadioGroupItem
                                value={time}
                                className="sr-only"
                              />
                            </FormControl>
                            <span className="text-lg">
                              {time}:00 {Number(time) < 3 ? "PM" : "AM"}
                            </span>
                          </FormLabel>
                        </FormItem>
                      ))
                    ) : (
                      <span className="col-span-full rounded-md h-16 font-normal border-2 hover:bg-secondary flex items-center justify-center">
                        {isTimesLoading ? (
                          <Spinner />
                        ) : timesError ? (
                          <span>{timesError.data} </span>
                        ) : (
                          <span>No Availible Times</span>
                        )}
                      </span>
                    )}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="guests"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Guests</FormLabel>
                <FormControl>
                  <Input
                    onChange={field.onChange}
                    value={field.value}
                    type="number"
                    min={1}
                    max={10}
                    placeholder="No of guests"
                    {...field}
                  />
                </FormControl>

                <FormDescription>
                  The number of guests are from 1 to 10
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="occasion"
            render={({ field }) => (
              <FormItem className="space-y-3 w-full">
                <FormLabel>Select Time</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="grid grid-cols-2 grid-flow-dense gap-4 w-full"
                  >
                    <FormItem className="flex items-center">
                      <FormLabel className=" flex items-center justify-center rounded-md w-full h-20 font-normal border-2 hover:bg-secondary p-2 [&:has([data-state=checked])]:border-primary">
                        <FormControl>
                          <RadioGroupItem
                            value="Birthday"
                            className="sr-only"
                          />
                        </FormControl>
                        <span className="text-lg">Birthday</span>
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center">
                      <FormLabel className=" flex items-center justify-center rounded-md w-full h-20 font-normal border-2 hover:bg-secondary p-2 [&:has([data-state=checked])]:border-primary [&:has([data-state=disabled])]:bg-red-500 ">
                        <FormControl>
                          <RadioGroupItem
                            value="Anniversary"
                            className="sr-only "
                          />
                        </FormControl>
                        <span className="text-lg">Anniversary</span>
                      </FormLabel>
                    </FormItem>
                    <FormDescription className="col-span-full">
                      Select Occasion
                    </FormDescription>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            disabled={isSubmitting}
            className="w-full gap-2 "
            type="submit"
          >
            Submit {isSubmitting && <Loader2 className="animate-spin" />}
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default BookingForm;
