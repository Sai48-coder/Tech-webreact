import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainlayout from './componet/layout/Mainlayout';
import Homepage from './componet/page/Homepage';
import Shoppage from './componet/page/Shoppage';
import Productdetail from './componet/Card/Productdetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<Homepage />} />
          <Route path="shop" element={<Shoppage />} />
          <Route path="product/:id" element={<Productdetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;