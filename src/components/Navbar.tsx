"use client";

import { useState } from "react";
import { MapPinned, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const navItems = [
  { title: "Events", href: "/" },
  { title: "Culture", href: "/about" },
  { title: "Family Fun", href: "/services" },
  { title: "Stickball", href: "/portfolio" },
  { title: "Pageant", href: "/contact" },
  { title: "Competitions", href: "/blog" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black bg-gradient-to-r from-stone-900 via-stone-700 to-stone-950 text-white">
      <div className="container flex h-16 items-center justify-between mx-auto px-4">
        <div className="flex items-center gap-2">
          <a href="/" className="font-bold text-xl flex items-center gap-4">
            <img
              src="/astro-app/navlogo.webp"
              alt="Logo"
              className="h-12 w-12"
            />
            <span className="hidden lg:flex">Choctaw Indian Fair</span>
          </a>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>
                  <img
                    src="/astro-app/navlogo.webp"
                    alt="Logo"
                    className="h-12 w-12 mb-2"
                  />
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-6 mx-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium transition-colors text-white hover:text-muted"
                    onClick={() => setOpen(false)}
                  >
                    {item.title}
                  </a>
                ))}
                <div className="flex flex-col gap-2 mt-4">
                  <Button variant="outline" onClick={() => setOpen(false)}>
                    Fair Map
                  </Button>
                  <Button onClick={() => setOpen(false)}>Buy Tickets</Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <a href={item.href}>
                    <Button variant={"ghost"}>{item.title}</Button>
                  </a>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <a href="/fair-map">
                  <Button variant="ghost">
                    <MapPinned className="h-12 w-12" />
                  </Button>
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center gap-2">
            <Button variant="secondary">Buy Tickets</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
