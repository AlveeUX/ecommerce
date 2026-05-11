export default function MidBannerSection() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-12">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="group overflow-hidden rounded-[24px]">
          <img
            src="/banners/mid/MidBannerSection%2001.png"
            alt="Dates Banner"
            className="h-[410px] w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        <div className="group overflow-hidden rounded-[24px]">
          <img
            src="/banners/mid/MidBannerSection%2002.png"
            alt="Honey Banner"
            className="h-[410px] w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  )
}