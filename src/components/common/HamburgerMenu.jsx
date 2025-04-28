// src/components/animation/HamburgerMenu.jsx
import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MagneticDiv from './MagneticDiv'
import { Link, useLocation } from 'react-router-dom'

const MENU_ITEMS = [
  { label: 'Accueil',  to: '/',      iconSrc: '/icons/home.svg' },
  { label: 'À propos', to: '/about', iconSrc: '/icons/about.svg' },
]

const menuVariants = {
  hidden: { opacity: 0, x: 20, y: -20 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.25, ease: 'easeOut' }
  },
  exit: {
    opacity: 0,
    x: 20,
    y: -20,
    transition: { duration: 0.2, ease: 'easeIn' }
  }
}

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef   = useRef(null)
  const buttonRef = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative z-50 ">
      {/* Burger magnétique */}
      <div className="inline-block">
        <button
          ref={buttonRef}
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(o => !o)}
          className="w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center shadow-btn-nav focus:outline-none cursor-pointer"
        >
          <div className="relative w-[24px] h-[20px]">
            <span
              className={`absolute left-0 w-full h-[2px] bg-[#5e5e63] rounded transition-all duration-300 ease-in-out origin-center ${
                isOpen ? 'top-[9px] rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute left-0 w-full h-[2px] bg-[#5e5e63] rounded transition-opacity duration-200 ease-in-out ${
                isOpen ? 'opacity-0' : 'top-[9px]'
              }`}
            />
            <span
              className={`absolute left-0 w-full h-[2px] bg-[#5e5e63] rounded transition-all duration-300 ease-in-out origin-center ${
                isOpen ? 'top-[9px] -rotate-45' : 'top-[18px]'
              }`}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            ref={menuRef}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-[70px] right-0 w-60 p-[9px] bg-white rounded-2xl shadow-lg flex flex-col"
          >
            {MENU_ITEMS.map(({ label, to, iconSrc }) => {
              const isActive = pathname === to
              return (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 p-[15px] rounded-[9px]
                    transition-colors leading-tight hover:bg-[#f8f8f8] ${
                      isActive
                        ? 'text-gray-900 font-semibold'
                        : 'text-[#a8a8a9]'
                    }`}
                >
                  <img src={iconSrc} alt={label} className="w-[24px] h-[24px]" />
                  <span className="text-[16px]">{label}</span>
                </Link>
              )
            })}
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  )
}
