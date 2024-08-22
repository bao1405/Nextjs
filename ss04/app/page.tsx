import React from 'react';
import Link from 'next/link';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './product-detail/page';
export default function page() {
  return (
    <div>
      đây là trang chủ
      <Link href='/contact'></Link>
      <BrowserRouter>
      <Routes>
        <Route path="/product-detail/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}
