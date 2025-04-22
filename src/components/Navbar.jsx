// src/components/Navbar.jsx
import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import MagneticDiv from './common/MagneticDiv'
import HamburgerMenu from './common/HamburgerMenu'

const bounceVariants = {
  idle: { scale: 1 },
  active: {
    scale: [1, 1.05, 1],
    transition: { duration: 0.4, ease: 'easeOut' }
  }
}

export default function Navbar({ activeTab, setActiveTab }) {
  const location = useLocation()
  const isBackPage = ['/about','/finvens','/a-qui-est-ce-numero'].includes(location.pathname)

  const workRef = useRef(null)
  const playRef = useRef(null)
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0, top: 0, width: 0, height: 0
  })

  useEffect(() => {
    if (!isBackPage) {
      const el = activeTab === 'work' ? workRef.current : playRef.current
      if (el) {
        const { offsetLeft: left, offsetTop: top, offsetWidth: width, offsetHeight: height } = el
        setIndicatorStyle({ left, top, width, height })
      }
    }
  }, [activeTab, isBackPage])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-8 left-0 w-full z-50"
    >
      <div className="max-w-283 px-2.5 mx-auto flex items-center justify-between h-[60px]">
        {isBackPage ? (
          // Back arrow on About page
          <MagneticDiv className="shadow-nav w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center">
            <Link to="/" className="text-[#5e5e63]">
              <FiArrowLeft size={28} />
            </Link>
          </MagneticDiv>
        ) : (
          // Avatar on Home/other pages
          <MagneticDiv className="shadow-nav w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center overflow-hidden">
            <img
              src="/images/me.png"
              alt="avatar"
              className="w-[38px] h-[45px] object-cover rounded-full"
            />
          </MagneticDiv>
        )}

        {!isBackPage && (
          // Switch Work / Play hidden on About
          <MagneticDiv strengthX={30} strengthY={12}  className="fixed left-1/2 -translate-x-1/2 z-[22] w-[185px] h-[60px] flex items-center justify-center p-[6px] rounded-[30px] bg-[#f6f6f6] cursor-pointer shadow-[0_9px_30px_#0000001a]">
            <motion.div
              className="absolute inset-0 bg-white rounded-full z-10 pointer-events-none"
              animate={indicatorStyle}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={indicatorStyle}
            />
            <motion.button
              ref={workRef}
              onClick={() => setActiveTab('work')}
              variants={bounceVariants}
              animate={activeTab === 'work' ? 'active' : 'idle'}
              className={`cursor-pointer pt-[14px] pb-[13px] px-[20px] text-lg leading-[1.4] z-20 transition-colors ${
                activeTab === 'work' ? 'workcolor' : 'text-gray-500'
              }`}
            >
              work
            </motion.button>
            <motion.button
              ref={playRef}
              onClick={() => setActiveTab('play')}
              variants={bounceVariants}
              animate={activeTab === 'play' ? 'active' : 'idle'}
              className={`cursor-pointer ml-2.5 pt-[14px] pb-[13px] px-[20px] text-lg leading-[1.4] z-20 transition-colors ${
                activeTab === 'play' ? 'playcolor' : 'text-gray-500'
              }`}
            >
              play
            </motion.button>
          </MagneticDiv>
        )}

        <HamburgerMenu />
      </div>
    </motion.nav>
  )
}
