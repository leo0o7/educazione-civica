"use client";

import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import Text from "./typography/text";
import { ModeToggle } from "./theme/mode-toggle";
import { useState } from "react";

export default function NavBar() {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border text-foreground backdrop-blur-sm bg-background/90">
      <div className="items-center px-3 py-4 m-auto lg:max-w-screen-xl md:max-w-screen-md">
        <div className="flex items-center justify-between">
          {/* NAV CONTAINER */}
          <div className="flex items-center w-full space-x-8">
            {/* LOGO */}
            <div>
              <Link href="/">
                <Text type="lg" className="font-bold">
                  Machine Learning
                </Text>
              </Link>
            </div>
            {/* NAV */}
            <div className="items-center hidden space-x-2 md:flex *:font-semibold">
              <Link
                className={`${buttonVariants({
                  variant: "link",
                })} text-secondary-foreground`}
                href="/"
              >
                Home
              </Link>
            </div>
          </div>

          {/* LEFT NAV*/}
          <div className="hidden space-x-2 md:flex">
            <ModeToggle />
            <Link
              href="/accedi"
              className={buttonVariants({
                variant: "default",
              })}
            >
              Login
            </Link>
          </div>

          {/* MOBILE ICON */}
          <div className="flex items-center md:hidden">
            {/* THEME SWITCH FOR MOBILE */}
            <div className="md:hidden me-4">
              <ModeToggle />
            </div>
            <Button
              className="mobile-menu-button"
              onClick={() => setMenu(!menu)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
      {/* MOBILE MENU */}
      <div
        className={`${
          !menu ? "hidden" : ""
        } mobile-menu p-4 space-y-2 bg-accent rounded-sm rounded-b-none`}
      >
        <div className="flex flex-col *:font-bold *:text-xl *:border *:bg-muted-foreground/20 *:rounded-sm">
          <Link
            className={`${buttonVariants({
              variant: "link",
            })}, text-secondary-foreground`}
            onClick={() => setMenu(!menu)}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`${buttonVariants({
              variant: "link",
            })} text-secondary-foreground`}
            onClick={() => setMenu(!menu)}
            href="/introduzione"
          >
            Introduzione
          </Link>
          <Link
            className={`${buttonVariants({
              variant: "link",
            })} text-secondary-foreground`}
            onClick={() => setMenu(!menu)}
            href="/storico"
          >
            Storico
          </Link>
        </div>

        <Link
          className={`${buttonVariants({
            variant: "default",
          })} text-secondary-foreground w-full`}
          onClick={() => setMenu(!menu)}
          href="/accedi"
        >
          Log In
        </Link>
      </div>
    </nav>
  );
}
