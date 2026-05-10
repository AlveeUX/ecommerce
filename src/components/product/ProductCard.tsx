type ProductCardProps = {
  name: string
  price: number
  oldPrice?: number
  image: string
  category: string
  rating: number
}

export default function ProductCard({
  name,
  price,
  oldPrice,
  image,
  category,
  rating,
}: ProductCardProps) {
  return (
    <div className="rounded-2xl border bg-white p-4 shadow-sm transition hover:shadow-md">
      <div className="aspect-square overflow-hidden rounded-xl bg-gray-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-500">{category}</p>

        <h3 className="mt-1 line-clamp-2 text-base font-semibold">
          {name}
        </h3>

        <div className="mt-2 flex items-center gap-2">
          <span className="text-lg font-bold text-black">
            ৳{price}
          </span>

          {oldPrice && (
            <span className="text-sm text-gray-400 line-through">
              ৳{oldPrice}
            </span>
          )}
        </div>

        <p className="mt-1 text-sm text-yellow-500">
          ★ {rating}
        </p>

        <button className="mt-4 w-full rounded-xl bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-800">
          Add to Cart
        </button>
      </div>
    </div>
  )
}