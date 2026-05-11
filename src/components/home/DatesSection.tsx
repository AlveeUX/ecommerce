import { ShoppingCart, ArrowRight } from "lucide-react"

const dateProducts = [
  {
    id: "1",
    name: "Egyptian Medjool Large 1kg",
    price: 1980,
    oldPrice: 2200,
    discount: "Save 10%",
    image: "/products/dates/004.jpg",
  },
  {
    id: "2",
    name: "Ajwa Premium Dates 1kg (Jumbo)",
    price: 2250,
    oldPrice: 2500,
    discount: "Save 10%",
    image: "/products/dates/001.webp",
  },
  {
    id: "3",
    name: "Safawi/kalmi Dates (A Grade) 1kg",
    price: 1170,
    oldPrice: 1300,
    discount: "Save 10%",
    image: "/products/dates/006.jpg",
  },
  {
    id: "4",
    name: "Ajwa Premium Dates 500g (Jumbo)",
    price: 1250,
    oldPrice: null,
    discount: null,
    image: "/products/dates/002.webp",
  },
  {
    id: "5",
    name: "Ajwa Premium Dates 500g (Large)",
    price: 1100,
    oldPrice: null,
    discount: null,
    image: "/products/dates/005.webp",
  },
]

export default function DatesSection() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-14">
      {/* HEADER */}
      <div className="mb-7 flex items-center justify-between border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-[30px] font-bold tracking-tight text-slate-900">
            Premium Dates
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

      {/* GRID */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-5">
        {dateProducts.map((product) => (
          <article
            key={product.id}
            className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-3 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* BADGE */}
            {product.discount && (
              <span className="absolute left-0 top-0 z-20 rounded-br-md bg-emerald-500 px-2.5 py-1 text-xs font-semibold text-white shadow-sm">
                {product.discount}
              </span>
            )}

            {/* IMAGE */}
            <div className="relative flex h-[220px] items-center justify-center overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-[190px] max-w-full object-contain transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* CONTENT */}
            <div className="mt-3">
              <h3 className="min-h-[56px] text-[20px] font-semibold leading-snug text-slate-800">
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

              {/* BUTTON */}
              <button className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-md bg-orange-500 text-sm font-semibold text-white transition duration-300 hover:bg-orange-600">
                <ShoppingCart size={18} />
                Add To Cart
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}