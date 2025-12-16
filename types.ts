export interface Product {
  id: string;
  title: string;
  category: Category;
  price: number;
  short_desc: string;
  long_desc: string;
  specs: Record<string, string>;
  images: string[];
  stock: number;
  tags: string[];
  meta_title: string;
  meta_description: string;
  sku: string;
}

export enum Category {
  Lighting = 'Lighting',
  Fans = 'Fans',
  Wires = 'Wires',
  Switches = 'Switches',
  Accessories = 'Accessories'
}

export interface NavItem {
  label: string;
  path: string;
}