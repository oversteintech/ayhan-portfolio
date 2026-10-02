export type BrandId = "overstein" | "afterArtificial" | "afterFramework" | "superGarage" | "labs";

export type BrandStatus = "live" | "platform" | "vision" | "studio";

export interface Brand {
  id: BrandId;
  name: string;
  icon: string;
  href: string;
  /** Brand colour, used only for decorative accents (never for text). */
  accent: string;
  status: BrandStatus;
}

/**
 * Names, icons, and links come from the brands' own repositories
 * (overstein-web, afterartificial-web, afterframework, supergarage).
 */
export const brands: Record<BrandId, Brand> = {
  overstein: {
    id: "overstein",
    name: "Overstein",
    icon: "/brands/overstein.svg",
    href: "https://www.overstein.com",
    accent: "#a3acb9",
    status: "studio",
  },
  afterArtificial: {
    id: "afterArtificial",
    name: "After Artificial",
    icon: "/brands/after-artificial.svg",
    href: "https://www.afterartificial.com",
    accent: "#6d5bd0",
    status: "vision",
  },
  afterFramework: {
    id: "afterFramework",
    name: "After Framework",
    icon: "/brands/after-framework.svg",
    href: "https://www.afterframework.com",
    accent: "#38bdf8",
    status: "platform",
  },
  superGarage: {
    id: "superGarage",
    name: "Super Garage",
    icon: "/brands/super-garage.png",
    href: "https://www.afterartificial.com/products/supergarage/",
    accent: "#e0282e",
    status: "live",
  },
  labs: {
    id: "labs",
    name: "Overstein Labs",
    icon: "/brands/overstein-labs.svg",
    href: "https://www.overstein.com",
    accent: "#c4cad4",
    status: "studio",
  },
};

export const brandOrder: BrandId[] = ["overstein", "afterArtificial", "afterFramework", "superGarage", "labs"];
