import { ShoppingCart, ArrowRight } from "lucide-react"

const organicProducts = [
  {
    id: "1",
    name: "African Organic Wild Honey 500g",
    price: 1100,
    oldPrice: 1250,
    badge: "Save 12%",
    badgeType: "save",
    image: "/products/organic/organic (1).jpg",
  },
  {
    id: "2",
    name: "USDA Organic Beetroot Powder 250g",
    price: 1000,
    oldPrice: null,
    badge: null,
    badgeType: null,
    image: "/products/organic/organic (7).jpg",
  },
  {
    id: "3",
    name: "Organic Spirulina Powder 250 gm",
    price: 1140,
    oldPrice: 1200,
    badge: "New Arrival",
    badgeType: "new",
    rightBadge: "Save 5%",
    image: "/products/organic/organic (2).jpg",
  },
  {
    id: "4",
    name: "Glarvest Organic Matcha Green Tea 100gm",
    price: 1500,
    oldPrice: null,
    badge: null,
    badgeType: null,
    image: "/products/organic/organic(10).webp",
  },
  {
    id: "5",
    name: "Ashwagandha Powder 100g Organic Certified",
    price: 600,
    oldPrice: null,
    badge: "New Arrival",
    badgeType: "new",
    image: "/products/organic/organic (6).jpg",
  },
]

export default function OrganicSection() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-14">
      <div className="mb-7 flex items-center justify-between border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-[30px] font-bold tracking-tight text-slate-900">
            Organic Certified
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

      <div className="grid grid-cols-1 gap-5 md:grid-cols-5">
        {organicProducts.map((product) => (
          <article
            key={product.id}
            className="group relative flex h-[420px] flex-col overflow-hidden rounded-md border border-slate-200 bg-white p-3 transition duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            {product.badge && (
              <span
                className={`absolute left-3 top-3 z-20 rounded px-2 py-1 text-xs font-semibold text-white ${
                  product.badgeType === "new" ? "bg-orange-500" : "bg-emerald-500"
                }`}
              >
                {product.badge}
              </span>
            )}

            {product.rightBadge && (
              <span className="absolute right-3 top-3 z-20 rounded bg-emerald-500 px-2 py-1 text-xs font-semibold text-white">
                {product.rightBadge}
              </span>
            )}

            <div className="relative z-10 flex h-[245px] items-center justify-center overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-[220px] max-w-full object-contain transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="mt-auto">
              <h3 className="min-h-[52px] text-[17px] leading-snug text-slate-800">
                {product.name}
              </h3>

              <div className="mt-2 flex items-center gap-3">
                <span className="text-lg font-bold text-orange-500">
                  ৳{product.price.toLocaleString()}
                </span>

                {product.oldPrice && (
                  <span className="text-base text-slate-400 line-through">
                    ৳{product.oldPrice.toLocaleString()}
                  </span>
                )}
              </div>

              <button className="mt-4 flex h-[40px] w-full items-center justify-center gap-2 rounded border border-orange-500 text-sm font-medium text-orange-500 transition hover:bg-orange-500 hover:text-white">
                <ShoppingCart size={16} />
                Add To Cart
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 flex justify-center gap-2">
        {[0, 1, 2, 3, 4].map((item) => (
          <span
            key={item}
            className={`rounded-full ${
              item === 0 ? "h-2 w-6 bg-orange-500" : "h-2 w-2 border border-orange-500"
            }`}
          />
        ))}
      </div>
    </section>
  )
}