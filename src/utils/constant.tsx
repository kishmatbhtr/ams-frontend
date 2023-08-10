import getConfig from 'next/config';
const config = getConfig();
console.log(config);

console.log(config.publicRuntimeConfig);
console.log(process.env.NEXT_PUBLIC_URL)
export const HOST = `${process.env.NEXT_PUBLIC_URL}`;


