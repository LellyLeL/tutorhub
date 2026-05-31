"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface NavbarProps {
  onTutorsClick?: () => void;
  onHomeClick?: () => void;
}

export default function Navbar({ onTutorsClick, onHomeClick }: NavbarProps) {
  return (
    <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            {onHomeClick ? (
              <button
                onClick={onHomeClick}
                className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
              >
                TutorHub
              </button>
            ) : (
              <Link
                href="/"
                className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
              >
                TutorHub
              </Link>
            )}
          </div>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  onClick={onTutorsClick}
                  className="text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 cursor-pointer"
                >
                  Find Tutors
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/about" className="text-gray-700 hover:text-blue-600 transition-colors px-3 py-2">
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors px-3 py-2">
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-4">
            <Button variant="outline">
              <a href="/login">Sign In</a>
            </Button>
            <Button>
              <a href="/signup">Get Started</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
