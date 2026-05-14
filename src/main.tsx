import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import App from './App';
import './index.css';

// Clear potential corrupted store data from previous versions (One time)
if (!localStorage.getItem('wicht_cleanup_v3')) {
  localStorage.clear();
  localStorage.setItem('wicht_cleanup_v3', 'true');
}

gsap.registerPlugin(ScrollTrigger);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
