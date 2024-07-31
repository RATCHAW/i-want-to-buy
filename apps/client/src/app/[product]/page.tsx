import { Products } from "@/components/organsims/products"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { ChevronLeftIcon, ChevronRightIcon, MessageCircle, Phone } from "lucide-react"
import Image from "next/image"

export default function ProductPage() {
  return (
    <div>
      <div className="flex justify-center items-center w-full h-1/3">
        <Card className="w-full max-w-4xl">
          <div className="relative overflow-hidden rounded-lg">
            <Carousel className="w-full ">
              <CarouselContent>
                <CarouselItem>
                  <Image
                    src="https://placehold.co/1920x1080.png"
                    alt="Product Image"
                    width={1920}
                    height={500}
                    className="object-cover w-full h-64"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src="https://placehold.co/1920x1080.png"
                    alt="Product Image"
                    width={1920}
                    height={500}
                    className="object-cover w-full h-64"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src="https://placehold.co/1920x1080.png"
                    alt="Product Image"
                    width={1920}
                    height={500}
                    className="object-cover w-full h-64"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/50 p-2 rounded-full hover:bg-background/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <ChevronLeftIcon className="w-5 h-5" />
              </CarouselPrevious>
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/50 p-2 rounded-full hover:bg-background/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <ChevronRightIcon className="w-5 h-5" />
              </CarouselNext>
            </Carousel>
          </div>
          <CardContent className="p-6 grid gap-4 divide-y divide-dashe">
            <div className="flex justify-between">
              <div>
                <h3 className="text-xl font-semibold">Cozy Knit Sweater</h3>
                <p className="text-muted-foreground">A soft and comfortable knit sweater for everyday wear.</p>
              </div>
              <div className="text-2xl font-bold">$59.99</div>
            </div>
            <div className="flex justify-between items-center pt-4 ">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                hasan
              </div>
              <div className="flex gap-2">
                <span className="bg-accent rounded-lg p-2">
                  <MessageCircle />
                </span>
                <p className="bg-accent space-x-2 rounded-lg p-2 flex">
                  <Phone />
                  <span>+212 123 456 789</span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="flex justify-center items-center w-full">
        <Products />
      </div>
    </div>
  )
}
