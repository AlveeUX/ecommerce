"use client"

import { useEffect, useState } from "react"
import { ShoppingCart, ArrowRight } from "lucide-react"

const honeyProducts = [
  {
    id: "1",
    name: "Sundarban Honey 1kg",
    price: 2200,
    oldPrice: 2500,
    discount: "Save 12%",
    image: "/products/honey/A14zf1767418585.jpg",
  },
  {
    id: "2",
    name: "African Organic Wild Honey 500g",
    price: 1100,
    oldPrice: 1250,
    discount: "Save 12%",
    image: "/products/honey/g7QxJ1775107164.jpg",
  },
  {
    id: "3",
    name: "Black Seed Honey 500g",
    price: 720,
    oldPrice: 800,
    discount: "Save 10%",
    image: "/products/honey/JdeWI1767418564.jpg",
  },
  {
    id: "4",
    name: "Natural Honeycomb - 1kg",
    price: 2250,
    oldPrice: 2500,
    discount: "Save 10%",
    image: "/products/honey/8ZFYk1767532058.jpg",
  },
  {
    id: "5",
    name: "Lychee Flower Honey 500g",
    price: 500,
    oldPrice: 600,
    discount: "Save 17%",
    image: "/products/honey/TtgOl1767418640.jpg",
  },
  {
    id: "6",
    name: "Raw Honey 500g",
    price: 900,
    oldPrice: 1000,
    discount: "Save 10%",
    image: "/products/honey/CvT2N1767414529.jpg",
  },
]

export default function HoneySection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const cardWidth = 292
  const duplicatedProducts = [...honeyProducts, ...honeyProducts]

  const nextSlide = () => {
    setActiveIndex((prev) => (prev >= honeyProducts.length ? 1 : prev + 1))
  }

  useEffect(() => {
    if (paused) return

    const timer = setInterval(() => {
      nextSlide()
    }, 2800)

    return () => clearInterval(timer)
  }, [paused])

  return (
    <section
      className="mx-auto max-w-[1400px] px-6 pb-14"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mb-7 flex items-center justify-between border-b border-slate-200 pb-3">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            All Natural Honey
          </h2>
          <div className="mt-3 h-[3px] w-12 rounded-full bg-orange-500" />
        </div>

        <a
          href="#"
          className="flex items-center gap-2 text-sm font-medium uppercase text-orange-500 hover:text-orange-600"
        >
          View All Items
          <ArrowRight size={18} />
        </a>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex gap-5 transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${activeIndex * cardWidth}px)`,
            width: "max-content",
          }}
        >
          {duplicatedProducts.map((product, index) => (
            <article
              key={`${product.id}-${index}`}
              className="relative flex h-[420px] w-[272px] shrink-0 flex-col rounded-md border border-slate-200 bg-white p-3 transition hover:shadow-md"
            >
              <span className="absolute right-4 top-4 rounded bg-emerald-500 px-2 py-1 text-xs font-semibold text-white">
                {product.discount}
              </span>

              <div className="flex h-[245px] items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-[220px] max-w-full object-contain transition duration-300 hover:scale-105"
                />
              </div>

              <div className="mt-auto">
                <h3 className="min-h-[48px] text-[17px] leading-snug text-slate-800">
                  {product.name}
                </h3>

                <div className="mt-2 flex items-center gap-3">
                  <span className="text-lg font-bold text-orange-500">
                    ৳{product.price.toLocaleString()}
                  </span>
                  <span className="text-base text-slate-400 line-through">
                    ৳{product.oldPrice.toLocaleString()}
                  </span>
                </div>

                <button className="mt-4 flex h-[40px] w-full items-center justify-center gap-2 rounded border border-orange-500 text-sm font-medium text-orange-500 transition hover:bg-orange-500 hover:text-white">
                  <ShoppingCart size={16} />
                  Add To Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-7 flex justify-center gap-2">
        {honeyProducts.slice(0, 5).map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2 rounded-full transition-all ${
              activeIndex % 5 === index
                ? "w-5 bg-orange-500"
                : "w-2 border border-orange-500"
            }`}
          />
        ))}
      </div>
    </section>
  )
}