import './App.css'
import React, { useState, useEffect } from 'react'
import Sidebar from './components/sidebar'
import Content from './content'
import Button from './components/button';
import FAB from './components/fab';

import hamburger from './icons/Navigation-Filled.svg?react'
import sun from './icons/Weather-Sunny-Outline.svg?react'
import moon from './icons/Weather-Moon-Outline.svg?react'

function App() {
  const [selectedPage, setSelectedPage] = useState('introduction');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);
  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  const toggleSidebar = () => setSidebarOpen(prev => !prev);

  return (
    <div className="w-full flex-1 min-h-screen bg-neutral-bg">
      <nav className="w-full h-min bg-brand-primary-bg border-b border-brand-primary-regular shadow-sm flex gap-4 items-center px-4 py-4 sticky top-0 z-50">
        <div className="w-full max-w-7xl mx-auto flex items-center gap-4 justify-start">
        <FAB //sidebar toggle button
          size="sm"
          variant="gradient"
          style="primary"
          shape="rounded"
          iconSize="sm"
          className="lg:hidden"
          icon={hamburger}
          onClick={toggleSidebar}
          >
            {/* this button has not text label, only left icon */}
        </FAB>
        <img src="DezineCrafts.svg" alt="Dezine Crafts Logo" className="w-8 h-8 sm:w-12 sm:h-12"></img>
        <h1 className="w-full text-body-md sm:text-body-xxl font-semibold text-brand-primary-default">DezineCrafts - Ultimate UI Kit</h1>
        <Button //theme toggle button
          size="sm"
          variant="outline"
          style="primary"
          shape="pill"
          iconSize="sm"
          iconLeft={theme === 'dark' ? sun: moon}
          onClick={toggleTheme}
        >
          {theme === 'dark' ? 'Go Bright': 'Go Dark'}
        </Button>
        </div>
      </nav>
      <div className="w-full flex gap-0 min-h-full max-w-7xl mx-auto relative">
          {/* Backdrop overlay: only visible when sidebar is open on mobile */}
          {sidebarOpen && (
            <div className="fixed w-full inset-0 bg-black/30 z-10 lg:hidden"
            onClick={() => setSidebarOpen(false)}
            ></div>
          )}
          {/* Sidebar block: show if open on mobile, always show on large screens */}
          <div className={`fixed lg:sticky top-[54px] sm:top-[80px] z-30 self-start left-0 h-[calc(100vh-54px)] sm:h-[calc(100vh-80px)] w-60 shrink-0 bg-neutral-tertiary border-r border-neutral-regular transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:block`}
          >
            {/*Sidebar imported from /components/sidebar.jsx*/}
            <Sidebar onSelect={(id) => {
              setSelectedPage(id);
              setSidebarOpen(false);
            }} 
            />
          </div>
          <div className="w-full p-6">
            {/*Main Content imported from /components/content.jsx*/}
            <Content selectedPage={selectedPage} />
          </div>
      </div>
    </div>
  )
}

export default App