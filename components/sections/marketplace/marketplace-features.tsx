import { Button } from "@/components/ui/button"
import { Copy, Store, TrendingUp } from 'lucide-react'
import Link from "next/link"

const features = [
  {
    icon: Copy,
    title: "All-in-One Solution",
    description: "Vendcliq combines everything you need—flexible loans, a trusted marketplace, and smart inventory management—in one platform. Access the funds to grow, connect with top suppliers for the best deals, and track your stock effortlessly.",
    iconBg: "bg-[#5B72EE]"
  },
  {
    icon: Store,
    title: "Built for Vendors",
    description: "Vendcliq is crafted specifically to meet the needs of Nigeria's beverage vendors. Our platform understands your challenges and provides tailored solutions, from easy credit options and real-time inventory tracking to a marketplace filled with trusted suppliers.",
    iconBg: "bg-[#F48C06]"
  },
  {
    icon: TrendingUp,
    title: "Growth-Focused",
    description: "Vendcliq provides everything you need to expand your business with confidence and ease. Manage your inventory effortlessly, restock quickly, and connect with trusted suppliers all in one convenient platform.",
    iconBg: "bg-[#29B9E7]"
  }
]

export default function Features() {
  return (
    <div className="w-full">


      {/* Features Section */}
      <section className="container mx-auto max-w-screen-xl px-4 py-24">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              <span className="text-[#4052A3]">Why Choose </span>
              <span className="text-[#F5B102]">Vendcliq?</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Choosing Vendcliq means equipping your business with the tools to succeed in a competitive market. Our
              platform offers a seamless blend of essential services tailored to the needs of Nigerian vendors.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-8 shadow-lg"
              >
                <div className={`mb-6 inline-flex rounded-full ${feature.iconBg} p-4 text-white`}>
                  <feature.icon className="size-6" />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-[#4052A3]">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Link href="https://app.vendcliq.com/signup" >
            <Button 
              size="lg"
              className="bg-[#FFC300] text-black hover:bg-[#FFC300]/90"
            >
              Sign Up Now
            </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}