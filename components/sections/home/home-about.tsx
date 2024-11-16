import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { CreditCard, BookOpen, Store } from 'lucide-react'

const resources = [
    {
        title: "MarketPlace",
        description: "Connect with a wide network of trusted suppliers, offering you access to high-quality products and materials at competitive prices. Whether you’re looking for bulk supplies or specific items, our platform makes it easy to discover and connect with reliable vendors who can meet your business needs. ",
        image: "/_static/images/home-market.png?height=400&width=600",
        icon: Store,
        link: "/marketplace",
        bgColor: "bg-white",
        textColor: "text-gray-800",
        imagePosition: "left"
      },
  {
    title: "Loans",
    description: "Our loan service provides businesses with access to up to 50 million naira in credit, enabling you to secure the funding necessary for growth and expansion. With flexible repayment terms and small, manageable installments that align with your business cash flow, designed to support your needs without any financial strain.",
    image: "/_static/images/home-loan.png?height=400&width=600",
    icon: CreditCard,
    link: "/loan",
    bgColor: "bg-[#4052A3]",
    textColor: "text-white",
    imagePosition: "right"
  },
  {
    title: "Inventory Management",
    description: "Our Inventory management empowers you to track your stock in real-time, ensuring that you always have the right products available when you need them. By monitoring your inventory levels, you can prevent stockouts and reduce the risk of overstocking, which helps to optimize your cash flow and storage costs.",
    image: "/_static/images/home-inventory.png?height=400&width=600",
    icon: BookOpen,
    link: "/inventory",
    bgColor: "bg-white",
    textColor: "text-gray-800",
    imagePosition: "left"
  }
]

export default function About() {
  return (
    <div className="w-full ">
        <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <Link href="https://app.vendcliq.com/signup">
          <Button
            variant="outline"
            className="mb-12 border-[#4052A3] text-[#4052A3] hover:bg-[#4052A3]/10"
          >
            Ready to grow? Sign Up Today
          </Button>
          </Link>

          <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            <span className="text-[#4052A3]">One Platform,</span>
            <br />
            <span className="text-[#4052A3]">Endless </span>
            <span className="text-[#FFC300]">Possibilities:</span>
          </h2>
          
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Welcome to Vendcliq, a platform dedicated to helping Nigerian beverage vendors grow faster and smarter. From
            credit access to AI-powered inventory management, we give you everything you need to succeed in one place.
          </p>
        </div>
      </section>
      {resources.map((resource, index) => (
        <section
          key={index}
          className={`${resource.bgColor} ${resource.textColor}`}
        >
          <div className="container mx-auto max-w-screen-xl px-4 py-24">
            <div className={`grid gap-12 lg:grid-cols-2 lg:items-center ${
              resource.imagePosition === 'right' ? '' : 'lg:grid-flow-col-dense'
            }`}>
              {/* Content */}
              <div className="space-y-6">
                <div className="inline-flex">
                  <resource.icon className="size-8" />
                </div>
                <h2 className="text-3xl font-bold lg:text-4xl">
                  {resource.title}
                </h2>
                <p className="text-lg opacity-90">
                  {resource.description}
                </p>
                <Link 
                  href={resource.link}
                  className={`inline-flex items-center space-x-2 ${
                    resource.bgColor === 'bg-white' ? 'text-[#4052A3]' : 'text-white'
                  } hover:opacity-90`}
                >
                  <span>Learn more</span>
                  <span className="text-xl">→</span>
                </Link>
              </div>

              {/* Image */}
              <div className={`relative px-2 ${
                resource.imagePosition === 'right' ? 'lg:order-last' : 'lg:order-first'
              }`}>
                <div className="relative">
                  {/* Yellow accent rectangle */}
                  <div 
                    className="absolute -left-4 -top-4 size-[215px] rounded-[30px]"
                    style={{ backgroundColor: '#FFC300' }}
                  />
                  {/* Blue accent rectangle */}
                  <div 
                    className="absolute -bottom-4 -right-4 size-[215px] rounded-[30px]"
                    style={{ backgroundColor: '#E3E9FA' }}
                  />
                  {/* Main image */}
                  <div className="relative overflow-hidden rounded-3xl bg-white">
                    <Image
                      src={resource.image}
                      alt={resource.title}
                      width={600}
                      height={400}
                      className="size-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}