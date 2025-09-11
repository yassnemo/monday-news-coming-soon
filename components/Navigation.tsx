"use client"

import React from 'react'
import { StaggeredMenu } from './StaggeredMenu'

interface NavigationProps {
  currentPage: 'home' | 'support' | 'contact'
}

export const Navigation: React.FC<NavigationProps> = ({ currentPage }) => {
  const menuItems = [
    {
      label: 'Home',
      ariaLabel: 'Go to Home page',
      link: '/'
    },
    {
      label: 'Support',
      ariaLabel: 'Go to Support page',
      link: '/support'
    },
    {
      label: 'Contact',
      ariaLabel: 'Go to Contact page',
      link: '/contact'
    }
  ]

  const socialItems = [
    {
      label: 'LinkedIn',
      link: 'https://linkedin.com/yassine-erradouani'
    },
    {
      label: 'GitHub',
      link: 'https://github.com/yassnemo'
    },
    {
      label: 'Twitter',
      link: 'https://twitter.com/erradouanii'
    },
    {
      label: 'Website',
      link: 'https://yerradouani.me'
    }
  ]

  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 pointer-events-none">
      <div className="w-full h-full [&_.staggered-menu-wrapper]:pointer-events-auto">
        <StaggeredMenu
          position="right"
          colors={['#3644ed', '#5227FF', '#B19EEF']}
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          logoUrl="/logo-light.png"
          menuButtonColor="#ffffff"
          openMenuButtonColor="#000000"
          accentColor="#3644ed"
          changeMenuColorOnOpen={true}
        />
      </div>
    </div>
  )
}
