import Header from "../components/layout/Header"
import HeroBanner from "../components/home/HeroBanner"
import BrandSection from "../components/home/BrandSection"
import HoneySection from "../components/home/HoneySection"
import ProductCard from "../components/product/ProductCard"
import { products } from "../data/products"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf8f3]">
      <Header />
      <HeroBanner />

      <section className="mx-auto max-w-[1400px] px-6 py-8">
        <h2 className="text-center text-3xl font-semibold text-slate-900">
          Top Selling Products
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              oldPrice={product.oldPrice}
              image={product.image}
              category={product.category}
              rating={product.rating}
              badge={product.badge}
            />
          ))}
        </div>
      </section>

      <BrandSection />
      <HoneySection />
    </main>
  )
}