import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import HomePage from '@/pages/HomePage';
import AdminLayout from '@/components/admin/layout/AdminLayout';
import AdminLogin from '@/pages/admin/AdminLogin';
import AdminDashboard from '@/pages/admin/AdminDashboard';
import AdminProducts from '@/pages/admin/AdminProducts';
import AdminCategories from '@/pages/admin/AdminCategories';
import AdminOffers from '@/pages/admin/AdminOffers';
import AdminOrders from '@/pages/admin/AdminOrders';
import AdminReviews from '@/pages/admin/AdminReviews';
import AdminHeroEditor from '@/pages/admin/AdminHeroEditor';
import AdminBanners from '@/pages/admin/AdminBanners';
import AdminNotifications from '@/pages/admin/AdminNotifications';
import AdminAnalytics from '@/pages/admin/AdminAnalytics';
import AdminSEO from '@/pages/admin/AdminSEO';
import AdminSettings from '@/pages/admin/AdminSettings';

export default function App() {
  return (
    <ReactLenis root>
      <Router basename="/test-wicht">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="categories" element={<AdminCategories />} />
            <Route path="offers" element={<AdminOffers />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="reviews" element={<AdminReviews />} />
            <Route path="hero" element={<AdminHeroEditor />} />
            <Route path="banners" element={<AdminBanners />} />
            <Route path="notifications" element={<AdminNotifications />} />
            <Route path="analytics" element={<AdminAnalytics />} />
            <Route path="seo" element={<AdminSEO />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>
        </Routes>
      </Router>
    </ReactLenis>
  );
}
