"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Standard with ads",
    price: "4.99",
    features: [
      "Video and sound quality: Good",
      "Resolution: 1080p (Full HD)",
      "Supported devices: TV, computer, mobile phone, tablet",
      "Devices your household can watch at the same time: 2",
      "Download devices: 2",
      "Ads: Less than you might think"
    ],
  },
  {
    name: "Standard",
    price: "13.99",
    features: [
      "Video and sound quality: Good",
      "Resolution: 1080p (Full HD)",
      "Supported devices: TV, computer, mobile phone, tablet",
      "Devices your household can watch at the same time: 2",
      "Download devices: 2",
      "Ads: No ads"
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "19.99",
    features: [
      "Video and sound quality: Best",
      "Resolution: 4K (Ultra HD) + HDR",
      "Spatial audio (immersive sound)",
      "Supported devices: TV, computer, mobile phone, tablet",
      "Devices your household can watch at the same time: 4",
      "Download devices: 6",
      "Ads: No ads"
    ],
  },
]

export default function Subscription() {
  return (
    <div className="min-h-screen py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Choose the plan that's right for you</h1>
          <p className="text-muted-foreground text-lg">
            Watch all you want. Recommendations just for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`p-6 space-y-6 relative ${
                plan.popular ? 'border-primary ring-2 ring-primary' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="flex items-baseline gap-x-1">
                  <span className="text-3xl font-bold">€{plan.price}</span>
                  <span className="text-sm text-muted-foreground">/month</span>
                </div>
              </div>

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-x-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full" 
                variant={plan.popular ? "default" : "outline"}
                asChild
              >
                <Link href="/profile">Choose Plan</Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}