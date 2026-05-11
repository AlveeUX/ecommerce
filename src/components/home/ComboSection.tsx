import { Gift, ArrowRight } from "lucide-react"

const comboProducts = [
  {
    id: "1",
    name: "EID Combo -1",
    price: 1500,
    oldPrice: 1640,
    discount: "Save 8.5%",
    image: "/products/combo/combo (6).jpg",
  },
  {
    id: "2",
    name: "EID Combo -2",
    price: 2000,
    oldPrice: 2230,
    discount: "Save 10.3%",
    image: "/products/combo/combo (10).jpg",
  },
  {
    id: "3",
    name: "EID Combo -3",
    price: 2500,
    oldPrice: 2810,
    discount: "Save 11%",
    image: "/products/combo/combo (7).jpg",
  },
  {
    id: "4",
    name: "EID Combo -4",
    price: 3000,
    oldPrice: 3390,
    discount: "Save 11.5%",
    image: "/products/combo/combo (8).jpg",
  },
  {
    id: "5",
    name: "EID Masala Combo",
    price: 3000,
    oldPrice: 3300,
    discount: "Save 9.1%",
    image: "/products/combo/combo (1).jpg",
  },
]

export default function ComboSection() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-12">
      <div className="rounded-2xl bg-[#fdf3e8] px-8 py-8">
        {/* HEADER */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-orange-500 text-white shadow-sm">
              <Gift size={20} />
            </div>

            <h2 className="text-[34px] font-bold tracking-tight text-slate-900">
              Exclusive Combo Deals
            </h2>
          </div>

          <a
            href="#"
            className="flex items-center gap-2 rounded-md bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-orange-600"
          >
            View All Combos
            <ArrowRight size={16} />
          </a>
        </div>

        {/* PRODUCTS */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-5">
          {comboProducts.map((product) => (
            <article
              key={product.id}
              className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-3 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* LEFT BADGE */}
              <span className="absolute left-0 top-0 z-20 rounded-br-md bg-emerald-500 px-2.5 py-1 text-xs font-semibold text-white shadow-sm">
                {product.discount}
              </span>

              {/* RIGHT BADGE */}
              <span className="absolute right-0 top-0 z-20 rounded-bl-md bg-orange-500 px-2.5 py-1 text-xs font-semibold text-white shadow-sm">
                Combo Offer
              </span>

              {/* IMAGE */}
              <div className="flex h-[220px] items-center justify-center overflow-hidden">
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
                    ৳{product.price.toLocaleString()}.00
                  </span>

                  <span className="text-lg text-slate-400 line-through">
                    ৳{product.oldPrice.toLocaleString()}.00
                  </span>
                </div>

                {/* BUTTON */}
                <button className="mt-5 h-11 w-full rounded-md bg-orange-500 text-sm font-semibold text-white transition duration-300 hover:bg-orange-600">
                  View Details
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}