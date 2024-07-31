import Image from "next/image"
import Link from "next/link"

export const Product = () => {
  return (
    <div className="relative overflow-hidden transition-transform w-64 duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
      <Link href="#" className="absolute inset-0 z-10">
        <span className="sr-only">View</span>
      </Link>
      <Image
        src="https://placehold.co/600.png"
        alt="Product"
        width={500}
        height={400}
        className="object-cover w-full h-64"
      />
      <div className="p-4 bg-background">
        <h3 className="text-xl font-bold">Acme Circles T-Shirtffffff</h3>
        <div className="flex justify-between items-center">
          {/* <p className="text-sm text-muted-foreground">60% cotton, 40% polyester</p> */}
          <p className="text-lg font-semibold">$49.99</p>
        </div>
      </div>
    </div>
  )
}
