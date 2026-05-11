"use client"

import { useEffect, useState } from "react"

const heroBanners = [
  "/banners/Banner-left 01.jpg",
  "/banners/banner-left 02.jpeg",
  "/banners/banner-left 03.jpeg",
  "/banners/Banner-left 04.png",
]

const categories = [
  { name: "Organic", image: "/categories/Organic.png" },
  { name: "Honey", image: "/categories/Honey.png" },
  { name: "Dates", image: "/categories/Dates.png" },
  { name: "Spices", image: "/categories/Spices.png" },
  { name: "Nuts & Seeds", image: "/categories/Nuts & Seeds.png" },
  { name: "Beverage", image: "/categories/Beverage.png" },
  { name: "Rice", image: "/categories/Rice.png" },
  { name: "Flours & Lentils", image: "/categories/Flours & Lentils.png" },
  { name: "Functional Food", image: "/categories/Functional Food.png" },
]

export default function HeroBanner() {
  const [activeBanner, setActiveBanner] = useState(0)
  const [categoryStart, setCategoryStart] = useState(0)
  const [pauseHero, setPauseHero] = useState(false)
  const [pauseCategory, setPauseCategory] = useState(false)

  const duplicatedCategories = [...categories, ...categories]
  const categoryCardWidth = 164

  const nextBanner = () => {
    setActiveBanner((prev) => (prev + 1) % heroBanners.length)
  }

  const prevBanner = () => {
    setActiveBanner((prev) =>
      prev === 0 ? heroBanners.length - 1 : prev - 1
    )
  }

  const nextCategories = () => {
    setCategoryStart((prev) => (prev >= categories.length ? 1 : prev + 1))
  }

  const prevCategories = () => {
    setCategoryStart((prev) => (prev <= 0 ? categories.length - 1 : prev - 1))
  }

  useEffect(() => {
    if (pauseHero) return

    const timer = setInterval(() => {
      nextBanner()
    }, 3500)

    return () => clearInterval(timer)
  }, [pauseHero])

  useEffect(() => {
    if (pauseCategory) return

    const timer = setInterval(() => {
      nextCategories()
    }, 2200)

    return () => clearInterval(timer)
  }, [pauseCategory])

  return (
    <section className="bg-[#faf8f3]">
      <div className="mx-auto max-w-[1400px] px-6 pt-6">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[2fr_1fr]">
          <div
            className="relative overflow-hidden rounded-md"
            onMouseEnter={() => setPauseHero(true)}
            onMouseLeave={() => setPauseHero(false)}
          >
            <div className="relative h-[370px] w-full overflow-hidden">
              {heroBanners.map((banner, index) => (
                <img
                  key={banner}
                  src={banner}
                  alt="Main hero"
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
                    index === activeBanner ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={prevBanner}
              className="absolute left-3 top-1/2 flex h-14 w-10 -translate-y-1/2 items-center justify-center bg-white text-2xl text-orange-500 opacity-80 transition hover:opacity-100 hover:shadow-md"
            >
              ‹
            </button>

            <button
              onClick={nextBanner}
              className="absolute right-3 top-1/2 flex h-14 w-10 -translate-y-1/2 items-center justify-center bg-white text-2xl text-orange-500 opacity-80 transition hover:opacity-100 hover:shadow-md"
            >
              ›
            </button>

            <div className="absolute bottom-5 left-8 flex gap-2">
              {heroBanners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveBanner(index)}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    index === activeBanner ? "w-5 bg-orange-500" : "bg-white"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-md">
            <img
              src="/banners/Banner_right.png"
              alt="Promo banner"
              className="h-[370px] w-full object-cover transition duration-300 hover:scale-105"
            />
          </div>
        </div>

        <div className="my-7 text-center">
          <h2 className="text-[30px] font-bold tracking-tight text-slate-900">
            Featured Categories
          </h2>
          <div className="mx-auto mt-3 h-[3px] w-14 rounded-full bg-orange-500" />
        </div>

        <div
          className="relative overflow-hidden pb-8"
          onMouseEnter={() => setPauseCategory(true)}
          onMouseLeave={() => setPauseCategory(false)}
        >
          <button
            onClick={prevCategories}
            className="absolute left-0 top-[54px] z-20 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-2xl text-white transition hover:scale-105 hover:bg-orange-600"
          >
            ‹
          </button>

          <div className="overflow-hidden px-14">
            <div
              className="flex gap-8 transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${categoryStart * categoryCardWidth}px)`,
                width: "max-content",
              }}
            >
              {duplicatedCategories.map((category, index) => (
                <div
                  key={`${category.name}-${index}`}
                  className="group w-[132px] shrink-0 text-center"
                >
                  <div className="flex h-[132px] w-[132px] items-center justify-center rounded-2xl bg-white transition duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="h-[95px] w-[95px] object-contain transition duration-300 group-hover:scale-110"
                    />
                  </div>

                  <p className="mt-4 text-base text-slate-700 transition group-hover:text-orange-500">
                    {category.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextCategories}
            className="absolute right-0 top-[54px] z-20 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-2xl text-white transition hover:scale-105 hover:bg-orange-600"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}