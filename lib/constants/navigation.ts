import { MapPin, Sparkles, Home, Key, Shield, Box, Sun, Brush } from "lucide-react";
import { type NavigationItem } from "@/lib/types/navigation";

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    type: "location",
    title: "Sydney",
    icon: MapPin,
    current: {
      name: "Sydney",
      image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9",
      description: "Currently serving Sydney and surrounding areas",
    },
    upcoming: [
      {
        name: "Melbourne",
        image: "https://images.unsplash.com/photo-1514395462725-fb4566210144",
        description: "Coming soon to Melbourne",
      },
      {
        name: "Brisbane",
        image: "https://images.unsplash.com/photo-1536179247184-595913ca4a28",
        description: "Coming soon to Brisbane",
      },
    ],
  },
  {
    type: "dropdown",
    title: "Services",
    items: [
      {
        title: "Standard Clean",
        description: "Regular cleaning to keep your home fresh and welcoming",
        href: "/marketing/services/standard-clean",
        icon: Home,
      },
      {
        title: "Deep Clean",
        description: "Thorough cleaning for those hard-to-reach spots",
        href: "/marketing/services/deep-clean",
        icon: Sparkles,
      },
      {
        title: "End of Lease",
        description: "Get your full bond back with our detailed cleaning",
        href: "/marketing/services/end-of-lease",
        icon: Key,
      },
      {
        title: "Bond Clean",
        description: "Guaranteed bond return with our comprehensive clean",
        href: "/marketing/services/bond-clean",
        icon: Shield,
      },
      {
        title: "Move In/Out",
        description: "Fresh start or clean finish for your move",
        href: "/marketing/services/move-clean",
        icon: Box,
      },
      {
        title: "Spring Clean",
        description: "Seasonal refresh for your entire home",
        href: "/marketing/services/spring-clean",
        icon: Sun,
      },
    ],
  },
  {
    type: "dropdown",
    title: "Cleaning Tips",
    items: [
      {
        title: "Kitchen Cleaning",
        description: "Professional tips for a spotless kitchen",
        href: "/marketing/tips/kitchen",
        icon: Brush,
      },
      {
        title: "Bathroom Deep Clean",
        description: "Step-by-step guide for sparkling bathrooms",
        href: "/marketing/tips/bathroom",
        icon: Sparkles,
      },
      {
        title: "Eco-Friendly Methods",
        description: "Natural cleaning solutions for a greener home",
        href: "/marketing/tips/eco-friendly",
        icon: Sun,
      },
      {
        title: "Stain Removal Guide",
        description: "Expert tricks for tough stains",
        href: "/marketing/tips/stain-removal",
        icon: Shield,
      },
      {
        title: "Weekly Schedule",
        description: "Maintain a clean home with our proven routine",
        href: "/marketing/tips/cleaning-schedule",
        icon: Home,
      },
      {
        title: "Pro Secrets",
        description: "Industry insights from our top cleaners",
        href: "/marketing/tips/pro-secrets",
        icon: Sparkles,
      },
    ],
  },
  {
    type: "link",
    title: "About",
    href: "/marketing/about",
  },
  {
    type: "link",
    title: "Cleaning Jobs",
    href: "/marketing/cleaning-jobs",
  },
];

export const FOOTER_LINKS = {
  company: [
    { title: "About", href: "/marketing/about" },
    { title: "Service Areas", href: "/marketing/locations" },
    { title: "Contact", href: "/marketing/contact" },
    { title: "Blog", href: "/marketing/blog" },
  ],
  services: [
    { title: "Standard Clean", href: "/marketing/services/standard-clean" },
    { title: "Deep Clean", href: "/marketing/services/deep-clean" },
    { title: "End of Lease", href: "/marketing/services/end-of-lease" },
    { title: "Bond Clean", href: "/marketing/services/bond-clean" },
  ],
  support: [
    { title: "FAQs", href: "/marketing/faqs" },
    { title: "Pricing", href: "/marketing/pricing" },
    { title: "Terms of Service", href: "/marketing/terms" },
    { title: "Privacy Policy", href: "/marketing/privacy" },
  ],
  locations: [
    { title: "Sydney CBD", href: "/marketing/locations/sydney-cbd" },
    { title: "Inner West", href: "/marketing/locations/inner-west" },
    { title: "Eastern Suburbs", href: "/marketing/locations/eastern-suburbs" },
    { title: "North Shore", href: "/marketing/locations/north-shore" },
  ],
};