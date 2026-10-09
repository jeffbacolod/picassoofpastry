import PastryBox from './PastryBox';

// Real photo when available, otherwise the burgundy box artwork.
export default function ProductVisual({ product, tone, glow, aspect = 'aspect-[3/4]', variant = 'single' }) {
  if (product?.image) {
    return (
      <img
        src={product.image}
        alt={product.name}
        className={`w-full ${aspect} object-cover`}
        loading="lazy"
      />
    );
  }
  return <PastryBox tone={tone} glow={glow} label={product?.name} variant={variant} className={`w-full ${aspect} block`} />;
}
