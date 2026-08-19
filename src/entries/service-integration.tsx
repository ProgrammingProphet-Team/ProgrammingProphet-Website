import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '../context/ThemeContext';
import { Navbar } from '../components/Navbar';
import { SmoothScroll } from '../components/SmoothScroll';
import { ScrollToTopButton } from '../components/ScrollToTopButton';
import { Footer } from '../components/Footer';
import { SystemIntegration } from '../pages/services/SystemIntegration';
import '../index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <SmoothScroll>
        <div className="min-h-screen bg-transparent text-slate-900 dark:text-white transition-colors duration-500 overflow-hidden font-sans">
          <Navbar />
          <SystemIntegration />
          <Footer />
          <div className='hidden lg:block'>
            <ScrollToTopButton />
          </div>
        </div>
      </SmoothScroll>
    </ThemeProvider>
  </StrictMode>,
);
