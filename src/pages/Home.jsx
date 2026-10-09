import useScrollReveal from '../hooks/useScrollReveal';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import LaunchCountdown from '../components/LaunchCountdown';
import Collection from '../components/Collection';
import FullBleedProduct from '../components/FullBleedProduct';
import CollectionGrid from '../components/CollectionGrid';
import Heirloom from '../components/Heirloom';
import Quote from '../components/Quote';
import Maison from '../components/Maison';
import Philosophy from '../components/Philosophy';
import Founder from '../components/Founder';
import OrderSection from '../components/OrderSection';
import FloatingOrder from '../components/FloatingOrder';

export default function Home() {
  useScrollReveal();

  return (
    <main>
      {/* 1. Hero */}
      <Hero />
      {/* 2. Marquee */}
      <Marquee />
      {/* 3. Countdown — 11.03.26 */}
      <LaunchCountdown />
      {/* 4. Paskuhan — the launch season, 3 creations */}
      <Collection season="paskuhan" id="collections" />
      {/* 5. Mama's Brazo — dark spotlight */}
      <FullBleedProduct />
      {/* 6. Fiesta / Tag-init / Tag-ulan */}
      <CollectionGrid />
      {/* 7. Heirloom — Banana + Ube cheesecake */}
      <Heirloom />
      {/* 8. Quote */}
      <Quote />
      {/* 9. Origin story */}
      <Maison />
      {/* 10. Philosophy + P.A.S.T.R.Y. */}
      <Philosophy />
      {/* 11. Letter from the chefs */}
      <Founder />
      {/* 12. Order + newsletter */}
      <OrderSection />
      <FloatingOrder />
    </main>
  );
}
