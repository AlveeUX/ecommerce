import Link from "next/link"
import { MapPin, User, Heart, ShoppingCart, Menu, Search } from "lucide-react"

export default function Header() {
  const navItems = [
    { label: "EID 2026" },
    { label: "Offer Zone" },
    { label: "Honey", dropdown: true },
    { label: "Oil & Ghee" },
    { label: "Dates", dropdown: true },
    { label: "Spices", dropdown: true },
    { label: "Nuts & Seeds", dropdown: true },
    { label: "Beverage", dropdown: true },
    { label: "Rice" },
    { label: "Flours & Lentils", dropdown: true },
    { label: "Certified" },
    { label: "Pickle" },
  ]

  return (
    <header className="bg-white">
      <div className="border-b">
        <div className="mx-auto flex h-[86px] max-w-[1400px] items-center justify-between px-6">
          <Link href="/" className="flex items-center">
            <img
              src="/brand/Logo.png"
              alt="Ghorer Bazar"
              className="h-[54px] w-auto object-contain"
            />
          </Link>

          <div className="mx-10 hidden h-[46px] w-[430px] items-center rounded-md bg-[#f4f4f4] px-4 md:flex">
            <input
              placeholder="Search in..."
              className="h-full flex-1 bg-transparent text-sm outline-none"
            />
            <Search size={23} className="text-slate-900" />
          </div>

          <div className="hidden items-center gap-7 text-center text-sm text-slate-950 md:flex">
            <div className="flex flex-col items-center">
              <MapPin size={24} />
              <span>Track Order</span>
            </div>

            <div className="flex flex-col items-center">
              <User size={24} />
              <span>Sign In</span>
            </div>

            <div className="flex flex-col items-center">
              <Heart size={25} />
              <span>Wishlist</span>
            </div>

            <div className="relative flex flex-col items-center">
              <span className="absolute -right-1 -top-1 rounded-full bg-orange-500 px-1.5 text-[10px] text-white">
                0
              </span>
              <ShoppingCart size={25} />
              <span>Cart</span>
            </div>

            <div className="flex flex-col items-center">
              <Menu size={27} />
              <span>More</span>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-[#00352f] text-white">
        <div className="mx-auto flex h-[46px] max-w-[1400px] items-center justify-center gap-[34px] px-6 text-[15px] font-medium">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href="#"
              className="flex items-center gap-[6px] whitespace-nowrap leading-none transition hover:text-[#ff8a00]"
            >
              <span>{item.label}</span>

              {item.dropdown && (
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="mt-[2px]"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}