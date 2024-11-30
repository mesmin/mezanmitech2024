// src/components/Layout.tsx
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Newsletter from './Newsletter';

export default function Layout() {
  return (
    <div className="min-h-screen">
      <Header />
      <Outlet />
      <Newsletter />
      <Footer />
    </div>
  );
}