import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { SmoothScroll } from './components/SmoothScroll';
import { ScrollToTopButton } from './components/ScrollToTopButton';
// import { ChatAssistant } from './components/ChatAssistant';

const Footer = React.lazy(() => import('./components/Footer').then(module => ({ default: module.Footer })));

// Pages
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';

import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { JobsList } from './pages/JobsList';
import { JobDescription } from './pages/JobDescription';
import { JobApplication } from './pages/JobApplication';
import { ContactUs } from './pages/ContactUs';
import { Careers } from './components/Careers';
import { NotFound } from './pages/NotFound';


function App() {
  return (
    <ThemeProvider>
      <SmoothScroll>
        <div className="min-h-screen bg-transparent text-slate-900 dark:text-white transition-colors duration-500 overflow-hidden font-sans">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            {/* <Route path="/projects" element={<AllProjects />} /> */}
            {/* <Route path="/project/:id" element={<ProjectDetails />} /> */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/jobs" element={<JobsList />} />
            <Route path="/jobs/:id" element={<JobDescription />} />
            <Route path="/jobs/:id/apply" element={<JobApplication />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
          <ScrollToTopButton />
          {/* <ChatAssistant /> */}
        </div>
      </SmoothScroll>
    </ThemeProvider>
  );
}

export default App;
