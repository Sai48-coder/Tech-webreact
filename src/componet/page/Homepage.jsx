import { useProduct } from "../../context/ProductContext";
import ProductCard from "../Card/ProductCard";
import { ProductData } from "../data/ProductData";
import Feature from "../home/Feature";
import Herosection from "../home/Herosection";

function Homepage() {
  const { product } = useProduct();

  const flashsale = ProductData.filter((item) => item.flashsale === true).slice(
    0,
    4,
  );
  const bestseller = ProductData.filter(
    (item) => item.bestseller === true,
  ).slice(0, 4);

  return (
    <div>
      <Herosection />

      {/* Flash Seller Section */}
      <div className="bg-[#5c5f65] py-8 px-4 mt-1">
        <div className="m-auto mt-3 max-w-7xl">
          <h2 className="text-2xl font-bold text-white mb-4">Flash Sales</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {flashsale.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Best Seller Section */}
      <div className="bg-[#d1533a] py-8 px-4 mt-1">
        <div className="m-auto mt-3 max-w-7xl">
          <h2 className="text-2xl font-bold text-white mb-4">Best Sellers</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {bestseller.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-1">
        <Feature />
      </div>
    </div>
  );
}

export default Homepage;
