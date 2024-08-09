import { title } from "process"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Juskinbo' World",
  description: "A Frontend Developer's Home",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Friends",
      href: "/friends",
    },
  ],
  links: [
    {
      title: "gitHub",
      href: "https://github.com/Juskinbo",
    },
    {
      title: "twitter",
      href: "https://x.com/Juskinbo0326",
    },
    {
      title: "mail",
      href: "mailto:juskinbo@outlook.com",
    },
  ],
}
