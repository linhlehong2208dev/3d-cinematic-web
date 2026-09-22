import type { Config } from 'tailwindcss';
const config: Config = { content:['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}','./data/**/*.{ts,tsx}'], theme:{extend:{fontFamily:{sans:['Arial','Helvetica','sans-serif'],display:['Times New Roman','Times','serif']},colors:{brand:{gold:'#D4AF37',dark:'#0A0A0B',muted:'#B9B1A3'}}}},plugins:[]};
export default config;
