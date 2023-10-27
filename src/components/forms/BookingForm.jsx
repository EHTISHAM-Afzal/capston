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
import { Calendar as CalendarIcon } from "lucide-react";
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
import { useEffect } from "react";
import { toast } from "@/components/ui/use-toast";

function onSubmit(data) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

const AvilibleTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:000"];
const formSchema = z.object({
  date: z.date(),
  time: z.enum(AvilibleTimes),
  guests: z
    .string()
    .min(1, { message: "The number of guests must be 1 to 10" })
    .max(2),
  occasion: z.enum(["birthday", "anniversary"]),
});

const BookingForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const val = form.watch("date");
  useEffect(() => {
    console.log(val);
  }, [val]);

  return (
    <section className="grids-section-width flex flex-col justify-center items-center">
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
                      disabled={[date => date < new Date().setDate(new Date().getDate()-1)]}
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
                    {AvilibleTimes &&
                      AvilibleTimes.map((time, idx) => (
                        <FormItem key={idx} className="flex items-center">
                          <FormLabel className=" flex items-center justify-center rounded-md w-full h-16 font-normal border-2 hover:bg-secondary p-2 [&:has([data-state=checked])]:border-primary ">
                            <FormControl>
                              <RadioGroupItem
                                value={time}
                                className="sr-only"
                              />
                            </FormControl>
                            <span>{time}</span>
                          </FormLabel>
                        </FormItem>
                      ))}
                    <FormDescription className="col-span-full">
                      The disabled times are already booked
                    </FormDescription>
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
                    className="w-full"
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
                      <FormLabel className=" flex items-center justify-center rounded-md w-full h-20 font-normal border-2 hover:bg-secondary p-2 [&:has([data-state=checked])]:border-primary ">
                        <FormControl>
                          <RadioGroupItem
                            value="birthday"
                            className="sr-only"
                          />
                        </FormControl>
                        <span>Birthday</span>
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center">
                      <FormLabel className=" flex items-center justify-center rounded-md w-full h-20 font-normal border-2 hover:bg-secondary p-2 [&:has([data-state=checked])]:border-primary [&:has([data-state=disabled])]:bg-red-500 ">
                        <FormControl>
                          <RadioGroupItem
                            value="anniversary"
                            className="sr-only "
                          />
                        </FormControl>
                        <span>Anniversary</span>
                      </FormLabel>
                    </FormItem>
                    <FormDescription className="col-span-full">
                      The disabled times are already booked
                    </FormDescription>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="float-right" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default BookingForm;
