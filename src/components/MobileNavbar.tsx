'use client';
// import Link from 'next/link';
// import {
//   FaYoutube,
//   FaFacebook,
//   FaInstagram,
//   FaEnvelope,
//   FaSearch,
// } from 'react-icons/fa';
import { HiOutlineMenu } from 'react-icons/hi';
import {
  Sheet,
  SheetContent,
  // SheetHeader,
  // SheetTitle,
  // SheetDescription,
  // SheetHeader,
  // SheetTitle,
  // SheetClose,
  SheetTrigger,
} from '@/shadcn_data/components/ui/sheet';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuPortal,
//   DropdownMenuSeparator,
//   DropdownMenuShortcut,
//   DropdownMenuSub,
//   DropdownMenuSubContent,
//   DropdownMenuSubTrigger,
//   DropdownMenuTrigger,
// } from '@/shadcn_data/components/ui/dropdown-menu';
import { NavLinkType } from '@/lib/customTypesAndInterfaces';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from '@/shadcn_data/components/ui/accordion';
// import { cn } from '@/shadcn_data/lib/utils';
import { Dispatch, Fragment, SetStateAction, useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const SubMenu = ({
  title,
  subMenus,
  closeFunction,
}: {
  title: string;
  subMenus: NavLinkType[];
  closeFunction: Dispatch<SetStateAction<boolean>>;
}) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <Fragment>
      <button
        onClick={() => setShowMenu((prevState) => !prevState)}
        className="flex items-center text-base"
      >
        {title}&nbsp;
        <MdOutlineKeyboardArrowDown
          className={showMenu ? 'rotate-180' : undefined}
        />
      </button>
      {showMenu && (
        <ul className="flex flex-col gap-2">
          {subMenus.map((navValue, index) => {
            return (
              <li key={index}>
                <a
                  href={navValue.href}
                  className="px-2 py-1"
                  onClick={() => closeFunction(false)}
                >
                  -&nbsp;{navValue.text}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </Fragment>
  );
};

const MobileNavbar = ({
  logo,
  navLinks,
}: {
  logo: string | StaticImport;
  navLinks: NavLinkType[];
}) => {
  const [open, setIsOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setIsOpen}>
      <SheetTrigger className="text-black sm:hidden">
        <HiOutlineMenu size={25} />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="text-black flex justify-start items-start"
      >
        <div className="fixed h-16 w-full">
          <Image
            src={logo}
            alt="tellme logo"
            className="absolute bottom-5 h-full w-16"
            width={64}
            height={64}
            loading="lazy"
          />
        </div>

        <menu className="mt-16 flex flex-col gap-2">
          {navLinks.map((value, index) => {
            return (
              <li key={index}>
                {value.subMenus === undefined ? (
                  <a href={value.href} onClick={() => setIsOpen(false)}>
                    {value.text}
                  </a>
                ) : (
                  <SubMenu
                    title={value.text}
                    subMenus={value.subMenus}
                    closeFunction={setIsOpen}
                  />
                )}
              </li>
            );
          })}
        </menu>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
