import HeroBanner from "@/components/HeroBanner/herobanner"
import Premium from "@/sections/Premiumlisting/PremiumListing"
import Promo from "@/sections/Promo/Promo"
import PropertysCarts from "@/sections/ProductCarts/Carts"
export default function Home() {
  return (
    <div className=" bg-[#F2F3F4]">
    <HeroBanner />
    <Premium/>
    <Promo/>
    <PropertysCarts />
    </div>
  )
}
