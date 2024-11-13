"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Grid, FileText, CreditCard, Gift } from 'lucide-react'
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
    id: "track-stock",
    icon: Grid,
    title: "Track your Stock",
    description: "Track price changes seamlessly",
    image: "/_static/images/inventory-x.png?height=400&width=600",
  },
  {
    id: "realtime-updates",
    icon: FileText,
    title: "Realtime Stock Updates",
    description: "Stockcount updates in realtime ",
    image: "/_static/images/inventory-x.png?height=400&width=600",
  },
  {
    id: "seamless-payments",
    icon: CreditCard,
    title: "Seamless Payments",
    description: "Send Invoices via WhatsApp or SMS ",
    image: "/_static/images/inventory-x.png?height=400&width=600",
  },
  {
    id: "special-offers",
    icon: Gift,
    title: "Create Special offers",
    description: "Push stock to the marketplace.",
    image: "/_static/images/inventory-x.png?height=400&width=600",
  },
]

export default function Component() {
  const [selectedFeature, setSelectedFeature] = useState<Feature>(features[0])

  return (
    <section className="relative overflow-hidden bg-[#4052A3] px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-20 flex flex-col items-center text-center">
          <Button
            variant="outline"
            className="mb-8 border-white/20 text-white hover:bg-white/10"
          >
            Why Vendcliq?
          </Button>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Outsmart Your Inventory
            <br />
            Outgrow Your Competition
          </h1>
          <p className="max-w-2xl text-lg opacity-80">
            Choose Vera Africa to transform your shop management. Our system helps you
            make smarter decisions, increase profits, and stay ahead in business.
          </p>
        </div>

        {/* Feature Showcase */}
        <div className="grid gap-8 lg:grid-cols-[300px,1fr]">
          {/* Feature Selection */}
          <div className="rounded-2xl bg-[#2A3D7A] p-4">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setSelectedFeature(feature)}
                className={`flex w-full items-center gap-4 rounded-xl p-4 text-left transition-colors ${
                  selectedFeature.id === feature.id
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