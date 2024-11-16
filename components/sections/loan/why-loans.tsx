"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Grid, FileText, CreditCard } from 'lucide-react'
import Image from "next/image"

interface Feature {
  id: string
  icon: React.ElementType
  title: string
  description: string
  image: string
}

const features: Feature[] = [
  {
    id: "hassle-free-application",
    icon: Grid,
    title: "Hassle-Free Application",
    description: "Get approved fast and access funds quickly.",
    image: "/_static/images/inventory-x.png?height=400&width=600",
  },
  {
    id: "flexible-repayment",
    icon: FileText,
    title: "Flexible Repayment",
    description: "Pay back in small amounts that fit your budget.",
    image: "/_static/images/inventory-x.png?height=400&width=600",
  },
  {
    id: "boost-your-business",
    icon: CreditCard,
    title: "Boost Your Business",
    description: "Use the funds for inventory, new locations, or scaling operations.",
    image: "/_static/images/inventory-x.png?height=400&width=600",
  },
]

export default function WhyLoans() {
  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedFeatureIndex((prevIndex) => (prevIndex + 1) % features.length)
    }, 2500)

    return () => clearInterval(interval) // Cleanup on unmount
  }, [])

  const selectedFeature = features[selectedFeatureIndex]

  return (
    <section className="relative overflow-hidden bg-[#4052A3] px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-20 flex flex-col items-center text-center">
          <Button
            variant="outline"
            className="mb-8 border-white/20 text-white hover:bg-white/10"
          >
            Why Vendcliq Loans?
          </Button>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Why Choose Vendcliq Loans?
          </h1>
          <p className="max-w-2xl text-lg opacity-80">
            Our loan service provides businesses with access to up to 50 million naira in credit,
            enabling you to secure the funding necessary for growth and expansion. With flexible
            repayment terms and small, manageable installments that align with your business cash flow.
          </p>
        </div>

        {/* Feature Showcase */}
        <div className="grid gap-8 lg:grid-cols-[300px,1fr]">
          {/* Feature Selection */}
          <div className="rounded-2xl bg-[#2A3D7A] p-4">
            {features.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => setSelectedFeatureIndex(index)}
                className={`flex w-full items-center gap-4 rounded-xl p-4 text-left transition-colors ${
                  selectedFeatureIndex === index
                    ? "bg-[#4052A3]"
                    : "hover:bg-[#4052A3]/50"
                }`}
              >
                <feature.icon className="size-5" />
                <div>
                  <div className="font-medium">{feature.title}</div>
                  <div className="text-sm opacity-80">{feature.description}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Feature Content */}
          <div className="rounded-2xl bg-[#2A3D7A] p-8">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold">{selectedFeature.title}</h2>
              <Button variant="secondary">Get Started</Button>
            </div>
            <div className="relative aspect-video w-full overflow-hidden rounded-xl">
              <Image
                src={selectedFeature.image}
                alt={selectedFeature.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
