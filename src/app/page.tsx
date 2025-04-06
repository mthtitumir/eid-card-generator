/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useState, useEffect, useRef } from "react"
import { Download, Moon, EyeOff, Eye, User, UserX, Heart, ImageIcon, Palette } from "lucide-react"
import { toPng } from "html-to-image"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { backgroundImagePaths, gradients, templates, englishFonts, bengaliFonts } from "@/data"
import Footer from "@/components/shared/Footer"

export default function EidCardGenerator() {
  const [to, setTo] = useState("")
  const [from, setFrom] = useState("")
  const [background, setBackground] = useState("bg1")
  const [backgroundType, setBackgroundType] = useState<"gradient" | "image">("gradient")
  const [language, setLanguage] = useState("english")
  const [message, setMessage] = useState("")
  const [processedMessage, setProcessedMessage] = useState("")
  const [showMoons, setShowMoons] = useState(true)
  const [showRecipient, setShowRecipient] = useState(true)
  const [selectedImagePath, setSelectedImagePath] = useState("/images/moon.jpg") // Default image path
  const [fontFamily, setFontFamily] = useState(language === "english" ? "font-sans" : "font-bengali-1")
  const [isDownloading, setIsDownloading] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // Initialize with first template
  useEffect(() => {
    setMessage(templates.english[0])
    processTemplate(templates.english[0], to, from)
  }, [])

  // Process the template whenever to, from, or message changes
  useEffect(() => {
    processTemplate(message, to, from)
  }, [message, to, from, showRecipient])

  // Update selected image path when background changes
  useEffect(() => {
    if (backgroundType === "image") {
      const path = backgroundImagePaths[background as keyof typeof backgroundImagePaths]
      if (path) {
        setSelectedImagePath(path)
      }
    }
  }, [background, backgroundType])

  // Handle language change
  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage)

    // Set the first template of the selected language
    if (newLanguage === "english") {
      setMessage(templates.english[0])
      processTemplate(templates.english[0], to, from)
      setFontFamily(Object.keys(englishFonts)[0])
    } else {
      setMessage(templates.bengali[0])
      processTemplate(templates.bengali[0], to, from)
      setFontFamily(Object.keys(bengaliFonts)[0])
    }
  }

  // Handle background type change
  const handleBackgroundTypeChange = (type: "gradient" | "image") => {
    setBackgroundType(type)
    if (type === "image" && (!background.startsWith("img") || !selectedImagePath)) {
      // Set default image if switching to image mode
      setBackground("img1")
      setSelectedImagePath(backgroundImagePaths.img1)
    } else if (type === "gradient" && !background.startsWith("bg")) {
      // Set default gradient if switching to gradient mode
      setBackground("bg6")
    }
  }

  const handleTemplateChange = (template: string) => {
    setMessage(template)
  }

  const processTemplate = (template: string, toValue: string, fromValue: string) => {
    let processed = template

    // If showRecipient is false, remove the "Dear {{to}}," part and any leading newlines
    if (!showRecipient) {
      // Match "Dear {{to}}," or "প্রিয় {{to}}," or "To my dear {{to}}," or similar patterns at the beginning
      processed = processed.replace(/^(Dear|প্রিয়|To my dear).*?{{to}}.*?,\s*\n+/m, "")
      // Also remove just {{to}}, at the beginning of the message if it exists
      processed = processed.replace(/^{{to}},\s*\n+/m, "")
    } else {
      processed = processed.replace(/{{to}}/g, toValue || "___")
    }

    processed = processed.replace(/{{from}}/g, fromValue || "___")
    setProcessedMessage(processed)
  }

  const getBackgroundStyle = () => {
    if (backgroundType === "gradient") {
      return gradients[background as keyof typeof gradients] || gradients.bg1
    } else {
      return `bg-cover bg-center`
    }
  }

  const getInlineStyle = () => {
    if (backgroundType === "image" && selectedImagePath) {
      return {
        backgroundImage: `url('${selectedImagePath}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    }
    return {}
  }

  const getFontClass = () => {
    if (language === "english") {
      return englishFonts[fontFamily as keyof typeof englishFonts] || englishFonts["font-serif"]
    } else {
      return bengaliFonts[fontFamily as keyof typeof bengaliFonts] || bengaliFonts["font-bengali-1"]
    }
  }

  // Get actual font family string from class name
  const getActualFontFamily = () => {
    // For English fonts - updated to match the CSS classes with web fonts
    if (fontFamily === "font-serif") return "'Playfair Display', serif"
    if (fontFamily === "font-sans") return "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    if (fontFamily === "font-mono") return "'Courier New', monospace"
    if (fontFamily === "font-dancing-script") return "'Dancing Script', cursive"
    if (fontFamily === "font-great-vibes") return "'Great Vibes', cursive"
    if (fontFamily === "font-pacifico") return "'Pacifico', cursive"
    if (fontFamily === "font-satisfy") return "'Satisfy', cursive"
    if (fontFamily === "font-tangerine") return "'Tangerine', cursive"
    if (fontFamily === "font-lobster") return "'Lobster', cursive"
    if (fontFamily === "font-caveat") return "'Caveat', cursive"
    if (fontFamily === "font-sacramento") return "'Sacramento', cursive"
    if (fontFamily === "font-kaushan") return "'Kaushan Script', cursive"

    // For Bengali fonts
    if (fontFamily === "font-bengali-1") return "'Noto Sans Bengali', sans-serif"
    if (fontFamily === "font-bengali-2") return "'Hind Siliguri', sans-serif"
    if (fontFamily === "font-bengali-3") return "'Baloo Da 2', cursive"
    if (fontFamily === "font-bengali-4") return "'Atma', cursive"
    if (fontFamily === "font-bengali-5") return "'Mina', sans-serif"
    if (fontFamily === "font-bengali-6") return "'Galada', cursive"

    return "sans-serif" // Default fallback
  }

  const downloadCard = async () => {
    if (!cardRef.current || isDownloading) return

    setIsDownloading(true)

    try {
      // Ensure all fonts are loaded
      await document.fonts.ready     
      // Get the original card's dimensions
      const originalCard = cardRef.current
      const originalWidth = originalCard.offsetWidth
      const originalHeight = originalCard.offsetHeight

      // Use the original card directly instead of cloning
      // This ensures we capture exactly what's shown on screen
      const messageElement = originalCard.querySelector("p")

      // Store original font style
      let originalFontFamily = ""
      if (messageElement) {
        originalFontFamily = messageElement.style.fontFamily
        // Apply font family directly as inline style
        messageElement.style.fontFamily = getActualFontFamily()
      }

      // Wait for fonts to load
      await document.fonts.ready

      // Generate the image with fixed dimensions
      const dataUrl = await toPng(originalCard, {
        quality: 0.95,
        width: originalWidth,
        height: originalHeight,
        canvasWidth: originalWidth,
        canvasHeight: originalHeight,
        pixelRatio: 2,
      })

      // Restore original font style
      if (messageElement && originalFontFamily !== undefined) {
        messageElement.style.fontFamily = originalFontFamily
      }

      // Download the image
      const link = document.createElement("a")
      link.download = "eid-card.png"
      link.href = dataUrl
      link.click()
    } catch (error) {
      console.error("Error generating image:", error)
      alert("Sorry, couldn't download the card. Try using a screenshot instead.")
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <div className="container mx-auto py-4 px-4 max-w-md">
      {/* Donate Button */}
      <div className="mb-4 flex justify-center">
        <Link href="/donate-for-gaza">
          <Button
            variant="outline"
            className="bg-red-50 hover:bg-red-100 text-red-600 border-red-200 hover:border-red-300 flex items-center gap-1.5"
          >
            <Heart className="h-4 w-4 fill-red-500" />
            Donate for Gaza 🇵🇸
          </Button>
        </Link>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between gap-2 mb-4">
        <h1 className="text-2xl font-bold text-center">Get Your Eid Card</h1>
        <Moon className="h-7 w-7 text-amber-500" />
      </div>

      {/* Font, Language, and Download Controls */}
      <div className="flex items-center justify-between gap-2 mb-4">
        <div className="flex items-center gap-3">
          {/* Language Selection */}
          <div className="col-span-1 grid grid-cols-2 gap-1">
            <Button
              type="button"
              variant={language === "english" ? "default" : "outline"}
              className="rounded"
              onClick={() => handleLanguageChange("english")}
              size="icon"
            >
              EN
            </Button>
            <Button
              type="button"
              variant={language === "bengali" ? "default" : "outline"}
              className="rounded"
              onClick={() => handleLanguageChange("bengali")}
              size="icon"
            >
              BN
            </Button>
          </div>
          {/* Font Selection */}
          <div className="col-span-1">
            <Select value={fontFamily} onValueChange={setFontFamily}>
              <SelectTrigger id="font-family" className="rounded" size="default">
                <SelectValue placeholder="Font" />
              </SelectTrigger>
              <SelectContent>
                {language === "english"
                  ? Object.entries(englishFonts).map(([key, value]) => (
                      <SelectItem key={key} value={key} className={value}>
                        {key
                          .replace("font-", "")
                          .replace("-", " ")
                          .replace(/\b\w/g, (l) => l.toUpperCase())}
                      </SelectItem>
                    ))
                  : Object.entries(bengaliFonts).map(([key, value]) => (
                      <SelectItem key={key} value={key} className={value}>
                        {key.replace("font-bengali-", "Bengali ").replace("-", " ")}
                      </SelectItem>
                    ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Download Button */}
        <Button onClick={downloadCard} className="h-10 col-span-1 rounded" size="sm" disabled={isDownloading}>
          <Download className="mr-1 h-4 w-4" />
          {isDownloading ? "Processing..." : "Download"}
        </Button>
      </div>

      {/* Card Preview */}
      <div className="mb-2">
        <div
          id="eid-card"
          ref={cardRef}
          style={getInlineStyle()}
          className={`w-full aspect-[3/4] rounded-lg shadow-lg overflow-hidden flex flex-col ${getBackgroundStyle()}`}
        >
          <div className="relative flex-1 flex flex-col p-6 text-white">
            {/* Moon Icons */}
            {showMoons && (
              <>
                <div className="absolute top-4 right-4 opacity-70">
                  <Moon className="w-16 h-16 drop-shadow-md text-amber-300" />
                </div>
                <div className="absolute bottom-4 left-4 opacity-50">
                  <Moon className="w-20 h-20 drop-shadow-md text-amber-300" />
                </div>
              </>
            )}

            {/* Card Content */}
            <div className="text-center flex flex-col h-full justify-between">
              <div className="mb-4">
                <h3 className="text-2xl font-bold mb-2 drop-shadow-md">Eid Mubarak</h3>
              </div>

              <div className="flex-1 flex items-center justify-center">
                <p
                  className={`text-base leading-relaxed whitespace-pre-line drop-shadow-md bg-black/20 p-4 rounded-lg backdrop-blur-sm ${getFontClass()}`}
                >
                  {processedMessage}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Selection - Facebook Story Style */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className={`p-1 h-8 ${backgroundType === "gradient" ? "bg-muted" : ""}`}
              onClick={() => handleBackgroundTypeChange("gradient")}
            >
              <Palette className="h-4 w-4 mr-1" />
              <span className="text-xs">Colors</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={`p-1 h-8 ${backgroundType === "image" ? "bg-muted" : ""}`}
              onClick={() => handleBackgroundTypeChange("image")}
            >
              <ImageIcon className="h-4 w-4 mr-1" />
              <span className="text-xs">Images</span>
            </Button>
          </div>

          <div className="flex items-center space-x-2">
            <Switch id="show-moons" checked={showMoons} onCheckedChange={setShowMoons} />
            <Label htmlFor="show-moons" className="text-xs cursor-pointer">
              Moons
            </Label>
            {showMoons ? (
              <Eye className="h-3 w-3 text-muted-foreground" />
            ) : (
              <EyeOff className="h-3 w-3 text-muted-foreground" />
            )}
          </div>
        </div>

        {/* Background Options - Fixed horizontal scrolling */}
        <div className="overflow-x-auto p-3 flex gap-2">
          {backgroundType === "gradient"
            ? // Gradient options
              Object.entries(gradients).map(([key, value]) => (
                <button
                  key={key}
                  className={`h-14 w-14 flex-shrink-0 rounded-md ${value} ${
                    backgroundType === "gradient" && background === key ? "ring-2 ring-primary ring-offset-2" : ""
                  }`}
                  onClick={() => {
                    setBackground(key)
                  }}
                />
              ))
            : // Image options
              Object.entries(backgroundImagePaths).map(([key, path]) => (
                <div
                  key={key}
                  className={`relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-md cursor-pointer ${
                    backgroundType === "image" && background === key ? "ring-2 ring-primary ring-offset-2" : ""
                  }`}
                  onClick={() => {
                    setBackground(key)
                  }}
                >
                  <Image
                    src={path || "/placeholder.svg"}
                    alt={`Background ${key}`}
                    fill
                    sizes="56px"
                    className="object-cover"
                    priority={key === "img1"} // Priority for the first image
                  />
                </div>
              ))}
        </div>
      </div>

      {/* Card Editor */}
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <div className="flex items-center justify-between mb-1">
              <Label htmlFor="to" className="text-sm">
                To
              </Label>
              <div className="flex items-center space-x-1">
                <Switch id="show-recipient" checked={showRecipient} onCheckedChange={setShowRecipient} />
                <Label htmlFor="show-recipient" className="text-xs cursor-pointer">
                  {showRecipient ? "Hide recipient" : "Show recipient"}
                </Label>
                {showRecipient ? (
                  <UserX className="h-3 w-3 text-muted-foreground" />
                ) : (
                  <User className="h-3 w-3 text-muted-foreground" />
                )}
              </div>
            </div>
            <Input
              id="to"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="Recipient's name"
              className="h-10"
              disabled={!showRecipient}
            />
          </div>

          <div>
            <Label htmlFor="from" className="text-sm">
              From
            </Label>
            <Input
              id="from"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="Your name"
              className="h-10"
            />
          </div>
        </div>

        <div>
          <Label className="text-sm mb-1 block">Select a template</Label>
          <ScrollArea className="h-48 rounded border p-2">
            <div className="grid grid-cols-1 gap-2">
              {(language === "english" ? templates.english : templates.bengali).map((template, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="rounded h-auto py-2 px-3 justify-start text-left"
                  onClick={() => handleTemplateChange(template)}
                >
                  <span className="line-clamp-1 text-sm">{template.split("\n")[0]}</span>
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>

        <div>
          <Label htmlFor="message" className="text-sm">
            Custom Message
          </Label>
          <div className="text-xs text-muted-foreground mb-1">
            Use {`{{ to }}`} and {`{{ from }}`} as placeholders
          </div>
          <Textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={6}
            className="font-mono text-sm ring-0 outline-none"
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}