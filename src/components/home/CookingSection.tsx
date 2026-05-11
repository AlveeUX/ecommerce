"use client"

import { useEffect, useRef, useState } from "react"
import { ShoppingCart, ArrowRight } from "lucide-react"

const cookingProducts = [
  {
    id: "1",
    name: "Gura Masala Combo (Mini Pack)",
    price: 950,
    oldPrice: 995,
    discount: "Save 4%",
    image: "/products/cooking/cooking (6).jpg",
  },
  {
    id: "2",
    name: "Rice Flour (Chaler Gura) 2kg",
    price: 200,
    oldPrice: null,
    discount: null,
    image: "/products/cooking/cooking.jpg",
  },
  {
    id: "3",
    name: "Gawa Ghee 500gm",
    price: 850,
    oldPrice: 900,
    discount: "Save 8%",
    image: "/products/cooking/cooking (4).jpg",
  },
  {
    id: "4",
    name: "Laal Atta 2kg",
    price: 200,
    oldPrice: null,
    discount: null,
    image: "/products/cooking/cooking (1).jpg",
  },
  {
    id: "5",
    name: "Deshi Mustard Oil 2 liter",
    price: 620,
    oldPrice: null,
    discount: null,
    image: "/products/cooking/cooking (3).jpg",
  },
]

export default function CookingSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const [paused, setPaused] = useState(false)

  const duplicatedProducts = [
    ...cookingProducts,
    ...cookingProducts,
    ...cookingProducts,
  ]

  const CARD_WIDTH = 292

  const scrollNext = () => {
    const el = scrollRef.current
    if (!el) return

    const maxScroll = el.scrollWidth / 3

    if (el.scrollLeft >= maxScroll * 2) {
      el.scrollTo({ left: maxScroll, behavior: "auto" })
    }

    el.scrollBy({ left: CARD_WIDTH, behavior: "smooth" })
  }

  const scrollPrev = () => {
    const el = scrollRef.current
    if (!el) return

    const maxScroll = el.scrollWidth / 3

    if (el.scrollLeft <= 0) {
      el.scrollTo({ left: maxScroll, behavior: "auto" })
    }

    el.scrollBy({ left: -CARD_WIDTH, behavior: "smooth" })
  }

  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollLeft = el.scrollWidth / 3
  }, [])

  useEffect(() => {
    if (paused) return

    const interval = setInterval(() => {
      scrollNext()
    }, 2800)

    return () => clearInterval(interval)
  }, [paused])

  return (
    <section
      className="mx-auto max-w-[1400px] px-6 py-14"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mb-7 flex items-center justify-between border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-[30px] font-bold tracking-tight text-slate-900">
            Cooking Essentials
          </h2>

          <div className="mt-3 h-[3px] w-14 rounded-full bg-orange-500" />
        </div>

        <a
          href="#"
          className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-orange-500 transition hover:text-orange-600"
        >
          View All Items
          <ArrowRight size={18} />
        </a>
      </div>

      <div className="relative">
        <button
          onClick={scrollPrev}
          className="absolute -left-5 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-orange-500 text-[28px] text-white shadow-lg transition hover:scale-105 hover:bg-orange-600"
        >
          ‹
        </button>

        <button
          onClick={scrollNext}
          className="absolute -right-5 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-orange-500 text-[28px] text-white shadow-lg transition hover:scale-105 hover:bg-orange-600"
        >
          ›
        </button>

        <div ref={scrollRef} className="scrollbar-hide overflow-hidden">
          <div className="flex gap-5">
            {duplicatedProducts.map((product, index) => (
              <article
                key={`${product.id}-${index}`}
                className="group relative flex h-[430px] w-[272px] shrink-0 flex-col overflow-hidden rounded-lg border border-slate-200 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {product.discount && (
                  <span className="absolute right-4 top-4 z-20 rounded-md bg-emerald-500 px-2.5 py-1 text-xs font-semibold text-white shadow-sm">
                    {product.discount}
                  </span>
                )}

                <div className="relative z-10 flex h-[240px] items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-[220px] max-w-full object-contain transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="mt-auto">
                  <h3 className="min-h-[54px] text-[19px] leading-snug text-slate-800">
                    {product.name}
                  </h3>

                  <div className="mt-3 flex items-center gap-3">
                    <span className="text-[28px] font-bold text-orange-500">
                      ৳{product.price.toLocaleString()}
                    </span>

                    {product.oldPrice && (
                      <span className="text-lg text-slate-400 line-through">
                        ৳{product.oldPrice.toLocaleString()}
                      </span>
                    )}
                  </div>

                  <button className="mt-5 flex h-[46px] w-full items-center justify-center gap-2 rounded-md border border-orange-500 text-sm font-semibold text-orange-500 transition duration-300 hover:bg-orange-500 hover:text-white">
                    <ShoppingCart size={18} />
                    Add To Cart
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {[0, 1, 2, 3, 4].map((item) => (
            <span
              key={item}
              className={`rounded-full transition-all duration-300 ${
                item === 0
                  ? "h-2 w-6 bg-orange-500"
                  : "h-2 w-2 border border-orange-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}