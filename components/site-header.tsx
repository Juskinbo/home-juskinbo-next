import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/60">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            {siteConfig.links.map((link) => {
              const Temp = Icons[link.title as keyof typeof Icons]
              return (
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  key={link.title}
                >
                  <div
                    className={buttonVariants({
                      size: "icon",
                      variant: "ghost",
                    })}
                  >
                    <Temp className="size-5" />
                    <span className="sr-only">{link.title}</span>
                  </div>
                </Link>
              )
            })}
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
