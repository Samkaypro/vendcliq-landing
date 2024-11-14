"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Clock, Users } from 'lucide-react'
import Image from "next/image"

interface Feature {
  id: string
  icon: React.ElementType
  title: string
  description: string
}

const features: Feature[] = [
  {
    id: "verified-vendors",
    icon: ShoppingBag,
    title: "Verified Vendors",
    description: "Buy confidently from trusted sellers",
  },
  {
    id: "real-time-bidding",
    icon: Clock,
    title: "Real-Time Bidding",
    description: "Get the best prices through real-time bidding",
  },
  {
    id: "grow-your-network",
    icon: Users,
    title: "Grow Your Network",
    description: "Connect with other vendors, suppliers, and buyers",
  },
]

export default function MarketplaceSection() {
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
            Why Vendcliq Marketplace?
          </Button>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Unlock the Power of <span className="text-[#FFC300]">Vendcliq</span>
            <br />Marketplace
          </h1>
          <p className="max-w-3xl text-lg opacity-80">
            Discover unbeatable deals, reliable suppliers, and tools to keep your business stocked and
            competitive. Access trusted suppliers, exclusive deals, and live bidding—all designed to help your
            business thrive
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
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-white p-4 text-black">
                <h3 className="mb-2 font-semibold">God&apos;s way Store Bid (5km from you)</h3>
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-sm text-gray-500">
                      <th>Items</th>
                      <th>QTY</th>
                      <th>Amount</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2, 3, 4].map((_, index) => (
                      <tr key={index}>
                        <td>Coca-Cola</td>
                        <td>40</td>
                        <td>4000</td>
                        <td>...</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="mt-4 font-semibold">Total: 4,000,000</div>
                <Button className="mt-4 w-full bg-[#FFC300] text-black hover:bg-[#FFC300]/90">
                  Make Payment
                </Button>
              </div>
              <div className="rounded-lg bg-white p-4 text-black">
                <h3 className="mb-2 font-semibold">Other Bids</h3>
                <div className="space-y-2">
                  {[
                    { name: "Gods way Store", amount: "50,000" },
                    { name: "Shalom Store", amount: "35,000" },
                    { name: "Leadway Store", amount: "45,840" },
                  ].map((store, index) => (
                    <div key={index} className="flex items-center justify-between rounded-lg bg-gray-100 p-2">
                      <div className="flex items-center gap-2">
                        <div className="size-8 rounded-full bg-gray-300"></div>
                        <div>
                          <div className="font-medium">{store.name}</div>
                          <div className="text-sm text-gray-500">Qty: 50 | Exp: 27th Nov, 2024</div>
                        </div>
                      </div>
                      <div className="font-semibold">₦{store.amount}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}