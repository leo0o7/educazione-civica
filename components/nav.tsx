"use client";

import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import Text from "./typography/text";
import { ModeToggle } from "./theme/mode-toggle";
import { useState } from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

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
            <div className="items-center hidden space-x-2 lg:flex *:font-semibold">
              <Link
                className={`${buttonVariants({
                  variant: "link",
                })} text-secondary-foreground`}
                href="/"
              >
                Home
              </Link>
              <Link
                className={`${buttonVariants({
                  variant: "link",
                })} text-secondary-foreground`}
                href="/introduzione"
              >
                Introduzione
              </Link>
              <Link
                className={`${buttonVariants({
                  variant: "link",
                })} text-secondary-foreground`}
                href="/metodi"
              >
                Metodi
              </Link>
              <Link
                className={`${buttonVariants({
                  variant: "link",
                })} text-secondary-foreground`}
                href="/applicazioni"
              >
                Applicazioni
              </Link>
              <Link
                className={`${buttonVariants({
                  variant: "link",
                })} text-secondary-foreground`}
                href="/english-page"
              >
                Neural Networks
              </Link>
            </div>
          </div>

          {/* LEFT NAV*/}
          <div className="hidden space-x-2 lg:flex">
            <ModeToggle />
            <Link
              href="/accedi"
              className={buttonVariants({
                variant: "default",
              })}
            >
              Accedi
            </Link>
          </div>

          {/* MOBILE ICON */}
          <div className="flex items-center lg:hidden">
            {/* THEME SWITCH FOR MOBILE */}
            <div className="lg:hidden me-4">
              <ModeToggle />
            </div>
            <Button
              className="mobile-menu-button"
              onClick={() => setMenu(!menu)}
            >
              <HamburgerMenuIcon />
            </Button>
          </div>
        </div>
      </div>
      {/* MOBILE MENU */}
      <div
        className={`${
          !menu ? "hidden" : ""
        } mobile-menu p-4 lg:hidden space-y-2 bg-accent rounded-sm rounded-b-none`}
      >
        <div className="flex flex-col *:font-bold *:text-xl *:border *:bg-muted-foreground/20 *:rounded-sm">
          <Link
            className={`${buttonVariants({
              variant: "link",
            })} text-secondary-foreground`}
            onClick={() => setMenu(false)}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`${buttonVariants({
              variant: "link",
            })} text-secondary-foreground`}
            onClick={() => setMenu(false)}
            href="/introduzione"
          >
            Introduzione
          </Link>
          <Link
            className={`${buttonVariants({
              variant: "link",
            })} text-secondary-foreground`}
            onClick={() => setMenu(false)}
            href="/metodi"
          >
            Metodi
          </Link>
          <Link
            className={`${buttonVariants({
              variant: "link",
            })} text-secondary-foreground`}
            onClick={() => setMenu(false)}
            href="/applicazioni"
          >
            Applicazioni
          </Link>
          <Link
            className={`${buttonVariants({
              variant: "link",
            })} text-secondary-foreground`}
            onClick={() => setMenu(false)}
            href="/english-page"
          >
            Neural networks
          </Link>
        </div>

        <Link
          className={`${buttonVariants({
            variant: "default",
          })} text-secondary-foreground w-full`}
          onClick={() => setMenu(false)}
          href="/accedi"
        >
          Accedi
        </Link>
      </div>
    </nav>
  );
}
