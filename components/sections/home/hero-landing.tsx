import landingPreview from "@/public/_static/images/landing-preview.png"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroLanding() {
  return (
    <div className="relative min-h-screen max-w-screen-xl overflow-hidden bg-white">
      <div className="container relative mx-auto grid min-h-screen gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center">
        {/* Left Column with Grid Background */}
        <div className="relative space-y-8">
          {/* Grid Background - only behind the text content */}
          <div 
            className="absolute inset-0 -z-10" 
            style={{
              backgroundImage: `
                linear-gradient(to right, #E5E7EB 1px, transparent 1px),
                linear-gradient(to bottom, #E5E7EB 1px, transparent 1px)
              `,
              backgroundSize: '4rem 4rem'
            }}
          />

          {/* Accent Circles */}
          <div className="absolute -left-4 -top-4 size-8 rounded-full bg-[#4052A3]" />
          <div className="absolute right-12 top-12 size-8 rounded-full bg-[#FFC300]" />

          <div className="space-y-6">
            <h1 className="text-5xl font-bold leading-tight lg:text-6xl">
              <span className="relative inline-block">
                Your Partner for
                <span className="absolute inset-0 -z-10 translate-y-2 rounded-2xl bg-[#E3E9FA]" />
              </span>
              <br />
              <span className="relative inline-block text-[#4052A3]">
                Growth in the
                <br />
                Beverage Business
                <span className="absolute inset-0 -z-10 translate-y-2 rounded-2xl bg-[#E3E9FA]" />
              </span>
            </h1>
            
            <div className="relative inline-block">
              <h2 className="text-2xl font-semibold text-[#4052A3] lg:text-3xl">
                Stock. Connect. Grow.
              </h2>
              <span className="absolute inset-0 -z-10 translate-y-2 rounded-lg bg-[#E3E9FA]" />
            </div>
          </div>

          <p className="max-w-xl text-lg text-muted-foreground">
            Vendcliq is your one-stop platform for credit, trusted suppliers, and inventory
            tools to help your business thrive. Access tools, financing, and insights that
            empower you to reach new heights.
          </p>

          <Button 
            size="lg"
            className="bg-[#FFC300] text-black hover:bg-[#FFC300]/90"
          >
            Get Started with Vendcliq
          </Button>
        </div>

        {/* Right Column with Dashboard Preview */}
        <div className="relative">
          {/* Dots Pattern SVG */}
          <svg
            className="absolute inset-0 size-full"
            viewBox="0 0 833 625"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Generated circles pattern */}
            {Array.from({ length: 70 }).map((_, i) => (
              <circle
                key={i}
                cx={8 + (i % 10) * 82}
                cy={123 + Math.floor(i / 10) * 82}
                r="6.93097"
                transform={`rotate(-8.81526 ${8 + (i % 10) * 82} ${123 + Math.floor(i / 10) * 82})`}
                fill="#DCE2EE"
              />
            ))}
          </svg>

          {/* Accent Circles */}
          <div className="absolute -bottom-4 right-4 size-8 rounded-full bg-[#4052A3]" />
          <div className="absolute bottom-32 left-12 size-8 rounded-full bg-[#FFC300]" />

          {/* Dashboard Preview */}
          <div className="relative shadow-2xl">
            <Image
              src={landingPreview}
              alt="Vendcliq Dashboard"
              width={600}
              height={600}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}