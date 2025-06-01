"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, PlusCircle, Trash2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const pollFormSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters").max(100, "Title must be at most 100 characters"),
  description: z.string().min(10, "Description must be at least 10 characters").max(1000, "Description must be at most 1000 characters"),
  options: z.array(z.object({
    value: z.string().min(1, "Option cannot be empty").max(100, "Option must be at most 100 characters")
  })).min(2, "At least two options are required"),
  endDate: z.string().refine((date) => !isNaN(new Date(date).valueOf()), "Invalid date format"),
});

type PollFormValues = z.infer<typeof pollFormSchema>;

export default function CreatePollPage() {
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);

  const form = useForm<PollFormValues>({
    resolver: zodResolver(pollFormSchema),
    defaultValues: {
      title: "",
      description: "",
      options: [{ value: "" }, { value: "" }],
      endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // Default to 7 days from now
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "options",
  });

  const onSubmit = async (data: PollFormValues) => {
    setSubmissionStatus("Submitting...");
    console.log("Poll Data:", data);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSubmissionStatus("Poll created successfully! (Simulated)");
    form.reset(); 
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="outline" asChild className="mb-6">
        <Link href="/polls"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Polls</Link>
      </Button>

      <Card className="max-w-2xl mx-auto shadow-xl">
        <CardHeader>
          <CardTitle className="font-headline text-3xl">Create a New Poll</CardTitle>
          <CardDescription>Fill out the details below to submit your proposal to the community.</CardDescription>
        </CardHeader>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="title" className="font-semibold">Poll Title</Label>
              <Input id="title" {...form.register("title")} placeholder="E.g., Funding for New Initiative" className="mt-1"/>
              {form.formState.errors.title && <p className="text-sm text-destructive mt-1">{form.formState.errors.title.message}</p>}
            </div>

            <div>
              <Label htmlFor="description" className="font-semibold">Description</Label>
              <Textarea id="description" {...form.register("description")} placeholder="Provide a detailed explanation of your poll..." className="mt-1 min-h-[120px]" />
              {form.formState.errors.description && <p className="text-sm text-destructive mt-1">{form.formState.errors.description.message}</p>}
            </div>

            <div>
              <Label className="font-semibold">Voting Options</Label>
              <div className="space-y-3 mt-1">
                {fields.map((field, index) => (
                  <div key={field.id} className="flex items-center gap-2">
                    <Input
                      {...form.register(`options.${index}.value`)}
                      placeholder={`Option ${index + 1}`}
                    />
                    {fields.length > 2 && (
                       <Button type="button" variant="ghost" size="icon" onClick={() => remove(index)} aria-label="Remove option">
                         <Trash2 className="h-4 w-4 text-destructive" />
                       </Button>
                    )}
                  </div>
                ))}
                {form.formState.errors.options && <p className="text-sm text-destructive mt-1">{form.formState.errors.options.message || form.formState.errors.options.root?.message}</p>}
                 {fields.map((_, index) => form.formState.errors.options?.[index]?.value && (
                    <p key={`err-${index}`} className="text-sm text-destructive mt-1">{form.formState.errors.options?.[index]?.value?.message}</p>
                ))}

                <Button type="button" variant="outline" onClick={() => append({ value: "" })} className="w-full">
                  <PlusCircle className="mr-2 h-4 w-4" /> Add Option
                </Button>
              </div>
            </div>
            
            <div>
              <Label htmlFor="endDate" className="font-semibold">Poll End Date</Label>
              <Input id="endDate" type="date" {...form.register("endDate")} className="mt-1"/>
              {form.formState.errors.endDate && <p className="text-sm text-destructive mt-1">{form.formState.errors.endDate.message}</p>}
            </div>

            {submissionStatus && (
              <p className={`text-sm ${submissionStatus.includes("successfully") ? "text-green-600" : "text-muted-foreground"}`}>{submissionStatus}</p>
            )}

          </CardContent>
          <CardFooter>
            <Button type="submit" size="lg" className="w-full font-semibold" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? "Submitting..." : "Create Poll"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
