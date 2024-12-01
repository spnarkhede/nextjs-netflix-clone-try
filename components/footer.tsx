"use client"

import Link from "next/link"
import { Netflix } from "@/components/icons/netflix"

const footerLinks = [
  { title: "FAQ", href: "/help/faq" },
  { title: "Cancel Membership", href: "/account/cancel" },
  { title: "Help Center", href: "/help" },
  { title: "Account", href: "/account" },
  { title: "Media Center", href: "/media" },
  { title: "Investor Relations", href: "/investors" },
  { title: "Jobs", href: "/jobs" },
  { title: "Netflix Shop", href: "/shop" },
  { title: "Redeem Gift Cards", href: "/redeem" },
  { title: "Buy Gift Cards", href: "/gift-cards" },
  { title: "Ways to Watch", href: "/devices" },
  { title: "Terms of Use", href: "/terms" },
  { title: "Privacy", href: "/privacy" },
  { title: "Cookie Preferences", href: "/cookies" },
  { title: "Impressum", href: "/impressum" },
  { title: "Contact Us", href: "/contact" },
  { title: "Speed Test", href: "/speedtest" },
  { title: "Legal Guarantee", href: "/legal/guarantee" },
  { title: "Legal Notices", href: "/legal/notices" },
  { title: "Only on Netflix", href: "/only-on-netflix" },
  { title: "Ad Choices", href: "/ads" },
]

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="space-y-8">
          <div className="flex items-center space-x-2">
            <Netflix className="h-8 w-auto text-red-600" />
            <span className="text-sm text-muted-foreground">Germany</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </div>

          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Questions? Contact us.
            </p>
            <div className="flex items-center space-x-4">
              <select
                className="bg-transparent border rounded px-2 py-1 text-sm text-muted-foreground"
                defaultValue="en"
              >
                <option value="en">English</option>
                <option value="de">Deutsch</option>
              </select>
            </div>
            <p className="text-xs text-muted-foreground">Netflix Germany</p>
          </div>
        </div>
      </div>
    </footer>
  )
}