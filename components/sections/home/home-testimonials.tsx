import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Play } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  image: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Adeyemi Jackson, Distributor",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    quote: "This incredible company has been an absolute game-changer for me. With each infusion of funds, I find myself effortlessly navigating the marketplace, securing an array of goods at just the right quantity and price. It's like having a personal guide through the network of shopping, ensuring every purchase is not just a transaction, but a triumph."
  },
  {
    id: 2,
    name: "Nneka Okafor, Retailer",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    quote: "Your service has been an invaluable asset to my business endeavours. Your unwavering presence and prompt responses to my needs have been instrumental in navigating various situations. Thank you for being a steadfast partner in my journey towards success."
  },
  {
    id: 3,
    name: "Frankly Enterprises, Store Owner",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    quote: "vendcliq has been instrumental in enabling me to keep my inventory well-stocked, ensuring that I can consistently meet the demands of my valued customers."
  }
]

export default function Hometestimonials() {
  return (
    <section className="container mx-auto max-w-screen-xl px-4 py-24">
         <div className="container">
       <section className="py-16 text-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            <span className="text-[#4052A3]">See How </span>
            <span className="text-[#FFC300]">Vendcliq</span>
            <span className="text-[#4052A3]"> is Helping Vendors Thrive</span>
          </h1>
          <h2 className="mb-6 text-3xl font-bold text-[#4052A3] md:text-4xl lg:text-5xl">
            Real Results, Real Stories
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            See How Vendcliq is Helping Vendors Thrive
          </p>
        </div>
      </section>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="border-none bg-[#E3E9FA]"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <h3 className="font-semibold text-[#4052A3]">
                    {testimonial.name}
                  </h3>
                </div>
                <p className="mb-4 text-muted-foreground">
                  {testimonial.quote}
                </p>
                {/* <button className="flex items-center gap-2 text-sm text-[#4052A3] hover:opacity-80">
                  <span>Hear Their Stories</span>
                  <div className="flex items-center gap-2">
                    <Play className="size-3 fill-current" />
                    <svg
                      viewBox="0 0 100 20"
                      className="h-3 w-20"
                    >
                      <path
                        d="M0 10 Q25 5, 50 10 T100 10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </button> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}