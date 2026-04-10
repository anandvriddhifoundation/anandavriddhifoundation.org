'use client';
import React, { useState } from 'react';
// import { Popover } from '@headlessui/react'
import { Menu } from '@headlessui/react';
import { NavLinkType } from '@/lib/customTypesAndInterfaces';
import Link from 'next/link';
import { cn } from '@/shadcn_data/lib/utils';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const DesktopNavDropdown = ({
  navLinkText,
  className,
  navLinks,
}: {
  navLinkText: string;
  className?: string;
  navLinks: NavLinkType[];
}) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <Menu>
      <Menu.Button
        className={className}
        onClick={() => setShowMenu((prevState) => !prevState)}
      >
        {navLinkText}&nbsp;
        <MdOutlineKeyboardArrowDown
          className={showMenu ? 'rotate-180' : undefined}
        />
      </Menu.Button>
      <Menu.Items className="absolute flex flex-col z-50 bg-gray-100 rounded-lg gap-2 shadow-lg">
        {/* <ul> */}
        {navLinks.map((navValue, index) => {
          return (
            <Menu.Item key={index}>
              <Link
                href={navValue.href}
                className={cn('px-2 py-1', index !== 0 && 'border-t-1')}
              >
                {navValue.text}
              </Link>
            </Menu.Item>
          );
        })}
        {/* </ul> */}
      </Menu.Items>
    </Menu>
  );
};

export default DesktopNavDropdown;
