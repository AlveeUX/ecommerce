import { MapPin, Phone, Mail } from "lucide-react"

const information = [
  "About us",
  "Contact us",
  "Company Information",
  "Ghorer Bazar Stories",
  "Terms & Conditions",
  "Privacy Policy",
  "Careers",
]

const shopBy = [
  "Oil & Ghee",
  "Honey",
  "Dates",
  "Spices",
  "Nuts & Seeds",
  "Beverage",
  "Functional Foods",
]

const support = [
  "Support Center",
  "How to Order",
  "Order Tracking",
  "Payment",
  "Shipping",
  "FAQ",
]

const policy = [
  "Happy Return",
  "Refund Policy",
  "Exchange",
  "Cancellation",
  "Pre-Order",
  "Extra Discount",
]

const paymentItems = [
  "VISA",
  "Mastercard",
  "AMEX",
  "BRAC",
  "DBBL",
  "bKash",
  "Nagad",
  "Rocket",
  "Upay",
  "iPay",
  "MTB",
  "City",
  "AB",
  "FastCash",
]

const socialItems = ["f", "x", "◎"]

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-[1400px] px-6 pt-20">
        <div className="grid grid-cols-1 gap-12 border-b border-slate-200 pb-16 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <img
              src="/brand/002.png"
              alt="Ghorer Bazar"
              className="h-[70px] w-auto object-contain"
            />

            <p className="mt-6 max-w-[390px] text-[16px] leading-7 text-slate-600">
              Ghorer Bazar is an e-commerce platform dedicated to providing safe
              and reliable food to every home.
            </p>

            <div className="mt-8 space-y-4 text-[16px] text-slate-600">
              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>Rampura, Dhaka, Bangladesh</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>09642922922</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>contact@ghorerbazar.com</span>
              </div>
            </div>

            <div className="mt-9 flex gap-4">
              {socialItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#faf8f3] text-lg font-bold text-orange-500 transition duration-300 hover:bg-orange-500 hover:text-white"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="mt-10">
              <p className="text-[17px] font-medium text-slate-900">
                Download App on Mobile :
              </p>

              <div className="mt-5 flex gap-3">
                <div className="flex h-[42px] w-[135px] items-center justify-center rounded-md bg-slate-900 text-sm font-semibold text-white">
                  Google Play
                </div>

                <div className="flex h-[42px] w-[135px] items-center justify-center rounded-md border border-slate-200 bg-white text-sm font-semibold text-slate-900">
                  App Store
                </div>
              </div>
            </div>
          </div>

          <FooterColumn title="Information" items={information} />
          <FooterColumn title="Shop By" items={shopBy} />
          <FooterColumn title="Support" items={support} />
          <FooterColumn title="Consumer Policy" items={policy} />
        </div>

        <div className="flex flex-col gap-8 py-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-[15px] text-slate-600">
            Copyright © 2026 GhorerBazar
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <span className="mr-2 text-[15px] font-semibold text-slate-900">
              Pay With
            </span>

            {paymentItems.map((item) => (
              <div
                key={item}
                className="flex h-10 min-w-[54px] items-center justify-center rounded border border-slate-200 bg-white px-2 text-[11px] font-bold text-slate-700"
              >
                {item}
              </div>
            ))}

            <div className="ml-3 text-[12px] text-slate-500">
              Verified by{" "}
              <span className="rounded bg-blue-600 px-2 py-1 font-bold text-white">
                SSLCommerz
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  items,
}: {
  title: string
  items: string[]
}) {
  return (
    <div>
      <h3 className="mb-5 text-[18px] font-semibold text-slate-900">
        {title}
      </h3>

      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="text-[16px] text-slate-600 transition duration-300 hover:text-orange-500"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}