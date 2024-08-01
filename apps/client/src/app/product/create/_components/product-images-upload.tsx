"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileUploader } from "@/components/ui/file-uploader"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Textarea } from "@/components/ui/textarea"
import { PhoneInput } from "@/components/ui/phone-input"
import { z } from "zod"
import { createProductSchema } from "@iwtb/schemas"
import { Button } from "@/components/ui/button"

export default function ProductImagesUpload() {
  const form = useForm<z.infer<typeof createProductSchema>>({
    resolver: zodResolver(createProductSchema),
    defaultValues: {
      title: "",
      description: "",
      phoneNumber: "",
      images: [],
      price: 0,
    },
  })

  return (
    <Card className="overflow-hidden md:w-96">
      <CardHeader>
        <CardTitle>Product Details</CardTitle>
        <CardDescription>Enter product details</CardDescription>
      </CardHeader>
      <CardContent className="p-6 ">
        <Form {...form}>
          <form className="grid gap-4 h-full">
            <FileUploader />
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} id="description" className="min-h-32" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <PhoneInput {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button>Save</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
