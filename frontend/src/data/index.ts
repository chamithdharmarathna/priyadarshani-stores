// Define types directly in the data file
export type NavLink = {
  label: string;
  href: string;
};

export type Service = {
  icon: string;
  title: string;
  desc: string;
};

export type Product = {
  label: string;
  icon: string;
};

// Then use them
export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "home" },
  { label: "About Us", href: "about" },
  { label: "Our Services", href: "services" },
  { label: "Products", href: "products" },
  { label: "Gallery", href: "gallery" },
  { label: "Contact Us", href: "contact" },
];

export const SERVICES: Service[] = [
  {
    icon: "🛒",
    title: "Fresh Products",
    desc: "We guarantee the quality and freshness of our products.",
  },
  {
    icon: "💲",
    title: "Reasonable Prices",
    desc: "We offer best value for your money.",
  },
  {
    icon: "😊",
    title: "Friendly Service",
    desc: "We are always ready to assist you.",
  },
];

export const PRODUCTS: Product[] = [
  { label: "Grains", icon: "🌾" },
  { label: "Dairy", icon: "🥛" },
  { label: "Essentials", icon: "🛍️" },
  { label: "Household", icon: "🏠" },
];