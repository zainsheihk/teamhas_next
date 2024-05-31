import Footer from "@/components/Common/Footer";
import { HomeSection } from "@/components/Home/HomeSection";

export default function Home() {
  return (
    <main>
      <HomeSection />
      <Footer isVirtualization={true} />
    </main>
  );
}
