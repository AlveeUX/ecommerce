import { ShoppingCart, Flame } from "lucide-react"

type ProductCardProps = {
  name: string
  price: number
  oldPrice?: number | null
  image: string
  category: string
  rating: number
  badge?: string | null
}

export default function ProductCard({
  name,
  price,
  oldPrice,
  image,
  badge,
}: ProductCardProps) {
  const saveAmount = oldPrice ? oldPrice - price : null

  return (
    <article className="relative flex min-h-[280px] overflow-hidden rounded-md bg-white transition hover:shadow-md">
      {badge && (
        <div className="absolute right-0 top-0 z-10 flex items-center gap-1 rounded-bl-md bg-[#ff3b30] px-3 py-1 text-xs font-semibold text-white">
          <Flame size={13} />
          {badge}
        </div>
      )}

      <div className="flex w-[44%] items-center justify-center bg-white p-6">
        <img
          src={image}
          alt={name}
          className="h-[220px] w-full object-contain transition duration-300 hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col justify-center px-8">
        <h3 className="text-[22px] font-semibold leading-snug text-slate-900">
          {name}
        </h3>

        <div className="mt-3 flex items-center gap-4">
          <span className="text-[21px] font-bold text-[#ff7a00]">
            ৳{price.toLocaleString()}
          </span>

          {oldPrice && (
            <span className="text-[18px] text-slate-400 line-through">
              ৳{oldPrice.toLocaleString()}
            </span>
          )}
        </div>

        {saveAmount && (
          <span className="mt-2 w-fit rounded-full bg-lime-400 px-3 py-1 text-xs font-semibold text-slate-900">
            Save ৳{saveAmount.toLocaleString()}
          </span>
        )}

        <div className="mt-7 flex gap-3">
          <button className="flex h-[39px] items-center gap-2 rounded-md border border-[#ff7a00] px-5 text-sm font-medium text-[#ff7a00] transition hover:bg-[#ff7a00] hover:text-white">
            <ShoppingCart size={16} />
            Add To Cart
          </button>

          <button className="flex h-[39px] items-center gap-2 rounded-md bg-[#ff7a00] px-5 text-sm font-medium text-white transition hover:bg-[#e96f00]">
            <ShoppingCart size={16} />
            Buy now
          </button>
        </div>
      </div>
    </article>
  )
}