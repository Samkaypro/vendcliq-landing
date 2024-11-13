import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function Gettoknowus() {
  return (
    <section className="container mx-auto px-4 py-5">
      <div className="flex flex-col items-center text-center">
        <Button
          variant="outline"
          className="mb-12 border-[#D9D9D9] text-[#4052A3]"
        >
          <Link href="#">Get To Know Us</Link>
        </Button>

        <div className="mb-16 max-w-3xl">
          <h1 className="mb-6 text-3xl font-bold leading-tight md:text-5xl lg:text-5xl" style={{ color: '#4052A3' }}>
          Why do you need
            <br />
            Real-Time Tracking
          </h1>
          <p className="text-lg text-muted-foreground">
          Join smart shop owners across Nigeria who use Vendcliq to track goods, get stock easily, and grow their business. Our clever system helps you sell more and worry less.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
  <Card className="min-h-[300px] max-w-sm justify-between overflow-hidden" style={{ backgroundColor: '#E3E9FA' }}>
    <CardContent className="p-6 text-left">
      <div className="mb-4" style={{ paddingTop: '15px' }}>
        <h3 className="text-2xl font-semibold" style={{ color: '#4052A3' }}>
        Real-Time Tracking
        </h3>
        <p className="mb-4 text-sm" style={{ color: '#4052A3' }}>
        Stay in control of your inventory with Vendcliq&apos;s real-time tracking feature. Instantly view your stock levels and receive automatic alerts when supplies are running low, so you can reorder at the right time and avoid stockouts. Our instant stock review gives you a quick summary of current inventory, helping you make informed decisions on what to restock and when.
        </p>
      </div>
      <Link
        href="#"
        className="text-[#4052A3] hover:underline"
      >
        Get Started
      </Link>
    </CardContent>
  </Card>

  <Card className="min-h-[300px] max-w-sm overflow-hidden" style={{ backgroundColor: '#E3E9FA' }}>
    <CardContent className="p-6 text-left">
      <div className="mb-4" style={{ paddingTop: '15px' }}>
        <h3 className="text-2xl font-semibold" style={{ color: '#4052A3' }}>
        AI Prediction
        </h3>
        <p className="mb-4 text-sm" style={{ color: '#4052A3' }}>
        Vendcliq&apos;s AI-driven predictions take the guesswork out of inventory management and market positioning. Our intelligent system analyzes your stock patterns and market trends to provide smart restocking alerts, helping you stay ahead of demand and avoid costly stockouts. Beyond inventory, our AI insights keep you informed on the latest market shifts, seasonal demands, and popular product trends.
        </p>
      </div>
      <Link
        href="#"
        className="text-[#4052A3] hover:underline"
      >
        Get Started
      </Link>
    </CardContent>
  </Card>

  <Card className="min-h-[300px] max-w-sm overflow-hidden" style={{ backgroundColor: '#E3E9FA' }}>
    <CardContent className="p-6 text-left">
      <div className="mb-4" style={{ paddingTop: '15px' }}>
        <h3 className="text-2xl font-semibold" style={{ color: '#4052A3' }}>
        Loss Prevention
        </h3>
        <p className="mb-4 text-sm" style={{ color: '#4052A3' }}>
        Vendcliq&apos;s loss prevention features are designed to protect your business by helping you track inventory closely, detect discrepancies, and minimize waste. With real-time monitoring and detailed reports, you can quickly spot unusual patterns that may indicate theft or loss, enabling you to act swiftly.
        </p>
      </div>
      <Link
        href="#"
        className="text-[#4052A3] hover:underline"
      >
        Get Started
      </Link>
    </CardContent>
  </Card>
</div>

      </div>
    </section>
  )
}
