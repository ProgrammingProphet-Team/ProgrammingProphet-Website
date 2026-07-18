import React, { Suspense } from 'react';
import { Hero } from '../components/Hero';
import { SectionDivider } from '../components/SectionDivider';
import { Projects } from '../components/Projects';
import { ProjectCTA } from '../components/ProjectCTA';

const Metrics = React.lazy(() => import('../components/Metrics').then(module => ({ default: module.Metrics })));
const Credibility = React.lazy(() => import('../components/Credibility').then(module => ({ default: module.Credibility })));
// const DashboardPreview = React.lazy(() => import('../components/DashboardPreview').then(module => ({ default: module.DashboardPreview })));
const Features = React.lazy(() => import('../components/Features').then(module => ({ default: module.Features })));
const Services = React.lazy(() => import('../components/Services').then(module => ({ default: module.Services })));
// const About = React.lazy(() => import('../components/About').then(module => ({ default: module.About })));
// const Timeline = React.lazy(() => import('../components/Timeline').then(module => ({ default: module.Timeline })));

const Roadmap = React.lazy(() => import('../components/Roadmap').then(module => ({ default: module.Roadmap })));
const TechStack = React.lazy(() => import('../components/TechStack').then(module => ({ default: module.TechStack })));
const Testimonials = React.lazy(() => import('../components/Testimonials').then(module => ({ default: module.Testimonials })));
const LiveUpdates = React.lazy(() => import('../components/LiveUpdates').then(module => ({ default: module.LiveUpdates })));
const FAQ = React.lazy(() => import('../components/FAQ').then(module => ({ default: module.FAQ })));
const Contact = React.lazy(() => import('../components/Contact').then(module => ({ default: module.Contact })));

// Loading fallback
const SectionLoader = () => (
  <div className="w-full h-32 flex items-center justify-center ">
    <div className="w-8 h-8 rounded-full border-2 border-blue-500 border-t-transparent animate-spin"></div>
  </div>
);

export const Home = () => {
  return (
    <main >
      
      <Hero />
      <Suspense fallback={<SectionLoader />}>
        <Credibility />

        {/* <Metrics /> */}
        {/* <SectionDivider type="glowing-line" /> */}
        {/* 
        <div className="hidden md:block">
          <DashboardPreview />
        </div>
        <SectionDivider type="wave" /> 
        */}
        <Features />
        {/* <SectionDivider type="glowing-line" /> */}

        <TechStack />

        <Services />
        {/* <About /> */}
        {/* <Timeline /> */}

        <div className='bg-gradient-to-br from-[#001d3d] to-[#f1f2f2]'>
          {/* <div className='bg-gradient-to-br from-[#0A0F1E] to-[#f1f2f2]'> */}


          <Projects />
          <ProjectCTA />
          <Roadmap />
        </div>



        {/* <SectionDivider type="glowing-line" /> */}


        <Testimonials />
        {/* <SectionDivider type="glowing-line" /> */}
        {/* <div className='bg-gradient-to-br from-[#001d3d] to-[#f1f2f2]'>
        <LiveUpdates />

        </div> */}
          <SectionDivider type="glowing-line" />
          <FAQ />


        {/* <SectionDivider type="glowing-line" /> */}
        {/* <Contact /> */}
      </Suspense>
    </main>
  );
};
