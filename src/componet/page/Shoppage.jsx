import React, { useState } from 'react'
import { ProductData } from "../data/Productdata";
import ProductCard from '../Card/ProductCard';
import Herortwo from '../home/Herortwo';

function Shoppage() {
  const [product, setproduct] = useState(ProductData || []);
  const [selectbrand, setselectbrand] = useState("");
  const [selectcategory, setselectcategory] = useState("");

  const filterproduct = product.filter((item) => {
    const Brand = selectbrand === "" || item.brand === selectbrand;
    const Category = selectcategory === "" || item.category === selectcategory;

    return Brand && Category;
  });

  return (
    <div className='w-full min-h-screen bg-slate-950 text-white'>
      
      {/* 1. Full-width Hero Section */}
      <div className='w-full'>
        <Herortwo />
      </div>

      {/* 2. Main Content Container (Shop Grid & Filters) */}
      <div className='max-w-7xl mx-auto px-4 py-8'>
        <select
          value={selectbrand}
          onChange={(e) => setselectbrand(e.target.value)}
          className="p-2 bg-slate-800 text-white rounded border border-slate-700 mb-6"
        >
          <option value="">ALL</option>
          <option value="ASUS">ASUS</option>
          <option value="Lenovo">Lenovo</option>
          <option value="MSI">MSI</option>
          <option value="Razer">Razer</option>
          <option value="Acer">Acer</option>
          <option value="Dell">Dell</option>
          <option value="Gigabyte">Gigabyte</option>
          <option value="HP">HP</option>
        </select>

        

        <div className='mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {filterproduct.map((data) => (
            <ProductCard 
              key={data.id} 
              item={data} 
              product={data} 
              data={data} 
              {...data} 
            />
          ))}
        </div>
      </div>

    </div>
  );
}

export default Shoppage;