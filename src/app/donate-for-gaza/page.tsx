import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Heart, Shield, Users, Leaf, Clock, Star, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"
import { donationLinks } from "@/data"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Donate for Gaza - Support and Make a Difference",
  description: "Contribute to humanitarian aid for Gaza. Your donation can help provide essential resources, medical aid, food, and shelter for those in need.",
  keywords: [
    "Donate for Gaza",
    "Help Gaza",
    "Gaza humanitarian aid",
    "Support Palestine",
    "Gaza relief fund",
    "Charity for Gaza",
    "Donate to Palestine",
    "Medical aid for Gaza",
    "Food aid for Gaza",
    "Emergency relief for Gaza",
    "Gaza crisis donation",
    "Nonprofit for Gaza",
    "Save Gaza",
    "Donate to Gaza now",
    "Rebuild Gaza",
    "Palestine emergency fund",
    "Fundraising for Gaza",
    "Gaza relief campaign",
    "Humanitarian support for Gaza",
    "Stand with Gaza",
    "Gaza medical assistance",
    "Education aid for Gaza",
    "Support children in Gaza",
    "Islamic charity for Gaza",
    "Zakat for Gaza",
    "Help refugees in Gaza",
    "Donate food to Gaza",
    "Water crisis in Gaza",
    "Help rebuild Palestine",
    "Charity for Palestine",
    "Palestine aid organizations",
    "Emergency Gaza support",
    "Direct donations for Gaza",
    "How to help Gaza",
    "Donate online for Gaza",
    "NGOs supporting Gaza",
    "Crisis relief for Gaza",
    "Nonprofits for Palestine",
    "Support displaced families in Gaza",
    "Essential supplies for Gaza",
    "Send help to Gaza",
    "Crowdfunding for Gaza",
    "Medical relief organizations Gaza",
    "Urgent aid for Gaza",
    "Palestine fundraising",
    "Charitable organizations for Gaza",
    "Gaza emergency donations",
    "Donate for Gaza refugees",
    "Crisis response for Gaza",
    "Ways to support Gaza",
    "Palestine charity fund",
    "Gaza rebuilding efforts",
    "Help families in Gaza",
  ],
  authors: [{ name: "M. T. H. Titumir", url: "https://mth-titumir.vercel.app/" }],
  creator: "M. T. H. Titumir",
  publisher: "M. T. H. Titumir",
  applicationName: "Donate for Gaza",
  generator: "Next.js",
  robots: "index, follow",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "https://mth-titumir.vercel.app/donate-for-gaza",
  },
};


// Impact statistics
const impactStats = [
  { icon: <Users className="h-5 w-5" />, value: "2.3M+", label: "People in need" },
  { icon: <Shield className="h-5 w-5" />, value: "100%", label: "Trusted organizations" },
  { icon: <Leaf className="h-5 w-5" />, value: "Vital", label: "Medical supplies" },
  { icon: <Clock className="h-5 w-5" />, value: "Urgent", label: "Humanitarian aid" },
]

export default function DonateForGaza() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-600 to-emerald-800 text-white">
        {/* <div className="absolute inset-0 opacity-20">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Gaza humanitarian aid"
            fill
            className="object-cover"
            priority
          />
        </div> */}
        <div className="container max-w-4xl mx-auto py-16 px-4 relative z-10">
          <Link href="/">
            <Button
              variant="outline"
              className="mb-8 bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/40 text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Card Generator
            </Button>
          </Link>

          <div className="text-center">
            <div className="inline-flex items-center justify-center mb-4">
              <Badge className="bg-red-500 text-white border-none px-3 py-1 text-xs">URGENT APPEAL</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 flex flex-col md:flex-row items-center justify-center gap-3">
              Stand With Gaza
              <Heart className="h-12 w-12 text-red-400 fill-red-500 animate-pulse" />
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-white/90">
              Your donation can save lives and provide essential humanitarian aid to families in Gaza 🇵🇸
            </p>

            {/* Disclaimer Banner */}
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 max-w-2xl mx-auto mb-8 flex items-center gap-2">
              <AlertCircle className="h-5 w-5 flex-shrink-0" />
              <p className="text-sm text-white">
                We do not collect donations directly. All donations are made through the trusted organizations listed
                below.
              </p>
            </div>

            {/* Impact Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-3xl mx-auto">
              {impactStats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            className="fill-white dark:fill-gray-900 w-full h-[60px]"
          >
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="container max-w-4xl mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Trusted Organizations Providing Aid</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These organizations are working directly on the ground to provide emergency relief, medical care, food, and
            shelter to those affected by the crisis.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {donationLinks.map((link) => (
            <Card
              key={link.name}
              className="overflow-hidden border-2 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="absolute top-0 right-0">
                <div className="bg-emerald-500 text-white text-xs px-2 py-1 rounded-bl-md">Verified</div>
              </div>

              <CardHeader className="pb-2">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                    {link.logo ? (
                      <Image
                        src={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Palestine.svg/330px-Flag_of_Palestine.svg.png"}
                        alt={link.name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    ) : (
                      <Star className="h-6 w-6 text-emerald-500" />
                    )}
                  </div>
                  <CardTitle className="text-xl">{link.name}</CardTitle>
                </div>
                <CardDescription className="text-base">{link.description}</CardDescription>
              </CardHeader>

              <CardContent className="pb-2">
                <div className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-md">
                  <p className="text-sm">
                    <span className="font-medium text-emerald-600 dark:text-emerald-400">Impact:</span> Your donation
                    provides emergency medical care, food, clean water, and shelter to families in Gaza.
                  </p>
                </div>
              </CardContent>

              <CardFooter className="pt-4">
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                    Donate Now
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Testimonial/Quote */}
        <div className="mt-16 bg-gray-50 dark:bg-gray-800/30 rounded-xl p-6 border border-gray-100 dark:border-gray-800">
          <blockquote className="text-center">
            <p className="text-lg md:text-xl italic mb-4">
              Every donation, no matter how small, can make a significant difference in the lives of those suffering in
              Gaza. Your generosity provides hope in times of darkness.
            </p>
            <footer className="text-sm text-muted-foreground">— Humanitarian Aid Worker</footer>
          </blockquote>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h3 className="text-xl font-bold mb-4 text-center">Frequently Asked Questions</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-white dark:bg-gray-800/20 p-4 rounded-lg border border-gray-100 dark:border-gray-800">
              <h4 className="font-medium mb-2">How is my donation used?</h4>
              <p className="text-sm text-muted-foreground">
                Your donation directly supports emergency relief efforts, including medical care, food, clean water, and
                shelter for families in Gaza.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800/20 p-4 rounded-lg border border-gray-100 dark:border-gray-800">
              <h4 className="font-medium mb-2">Are these organizations trustworthy?</h4>
              <p className="text-sm text-muted-foreground">
                Yes, all listed organizations are verified humanitarian aid groups with established track records of
                providing relief in conflict zones.
              </p>
            </div>
          </div>
        </div>

        {/* Prominent Disclaimer */}
        <div className="mt-12 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 rounded-lg p-5 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <h4 className="font-medium text-amber-800 dark:text-amber-300">Important Note</h4>
          </div>
          <p className="text-sm text-amber-700 dark:text-amber-300">
            This page serves as a directory of trusted organizations. We do not collect or process any donations. All
            contributions are made directly through the official websites of the listed organizations.
          </p>
        </div>
      </div>
    </div>
  )
}

