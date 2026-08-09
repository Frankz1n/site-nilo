export type Brand = {
  name: string;
  logo?: string;
};

/** Marcas do carrossel — logos em /public/brands */
export const brands: Brand[] = [
  { name: 'JBL', logo: '/brands/jbl.svg' },
  { name: 'Coca-Cola', logo: '/brands/coca-cola.svg' },
  { name: 'Aramis', logo: '/brands/aramis.svg' },
  { name: 'bibi', logo: '/brands/bibi.svg' },
  { name: 'Piccadilly', logo: '/brands/piccadilly.svg' },
  { name: 'Jimo', logo: '/brands/jimo.svg' },
  { name: 'Panvel', logo: '/brands/panvel.svg' },
  { name: 'Vidora', logo: '/brands/vidora.svg' },
  { name: 'Via Marte', logo: '/brands/via-marte.svg' },
  { name: 'Luz da Lua', logo: '/brands/luz-da-lua.svg' },
  { name: 'bebecê', logo: '/brands/bebece.svg' },
  { name: 'Vibra', logo: '/brands/vibra.png' },
  { name: 'Lubrax', logo: '/brands/lubrax.png' },
  { name: 'Wendt', logo: '/brands/wendt.svg' },
];
