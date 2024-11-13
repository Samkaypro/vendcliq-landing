import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { CreditCard, BookOpen, Store } from 'lucide-react'

const resources = [
    {
        title: "Earn Rewards for Every",
        description: "Get bonuses on every 5 friends/business partners who sign up and use Vendcliq Loans. Share the benefits and earn while you grow.",
        image: "/_static/images/loan-reward.png?height=400&width=600",
        // icon: Store,
        link: "#",
        bgColor: "bg-white",
        textColor: "text-gray-800",
        imagePosition: "left"
      },
]

export default function LoansReward() {
  return (
    <div className="w-full ">
       
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
                <h2 className="text-3xl font-bold text-[#4052A3] lg:text-4xl">
                  {resource.title} <br></br><span className="text-[#F8BD00]" >Referral!</span>
                </h2>
                <p className="text-lg opacity-90">
                  {resource.description}
                </p>
                <Button 
            size="lg"
            className="bg-[#FFC300] text-black hover:bg-[#FFC300]/90"
          >
            Get Started Now!
          </Button>
              </div>

              {/* Image */}
              <div className={`relative ${
                resource.imagePosition === 'right' ? 'lg:order-last' : 'lg:order-first'
              }`}>
                <div className="relative">
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