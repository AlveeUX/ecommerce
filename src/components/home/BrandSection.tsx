"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"

const brands = [
  { name: "Glarvest", logo: "/brand/001.png" },
  { name: "Ghorer Bazar", logo: "/brand/002.png" },
  { name: "Khejur", logo: "/brand/003.png" },
  { name: "Honey Raj", logo: "/brand/004.png" },
  { name: "Shooti", logo: "/brand/005.png" },
]

export default function BrandSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const visibleCount = 4
  const cardWidth = 312
  const duplicatedBrands = [...brands, ...brands]

  const nextSlide = () => {
    setActiveIndex((prev) => (prev >= brands.length ? 1 : prev + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev <= 0 ? brands.length - 1 : prev - 1))
  }

  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      nextSlide()
    }, 2500)

    return () => clearInterval(timer)
  }, [isPaused])

  return (
    <section className="mx-auto max-w-[1400px] px-6 pb-12">
      <div className="mb-5 flex items-center justify-between border-b border-slate-200 pb-3">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Our Brands</h2>
          <div className="mt-3 h-[3px] w-12 rounded-full bg-orange-500" />
        </div>

        <Link
          href="#"
          className="flex items-center gap-2 text-sm font-medium uppercase text-orange-500 hover:text-orange-600"
        >
          See All
          <ArrowRight size={18} />
        </Link>
      </div>

      <div
        className="overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="flex gap-6 transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${activeIndex * cardWidth}px)`,
            width: "max-content",
          }}
        >
          {duplicatedBrands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex h-[88px] w-[288px] shrink-0 items-center justify-center rounded-md border border-slate-200 bg-white transition hover:shadow-md"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-[52px] max-w-[170px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex justify-center gap-2">
        {brands.slice(0, 2).map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2 w-2 rounded-full transition ${
              index === activeIndex % 2
                ? "bg-orange-500"
                : "border border-orange-500"
            }`}
          />
        ))}
      </div>
    </section>
  )
}