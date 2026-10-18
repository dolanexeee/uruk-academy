/* The katex package ships the mhchem extension without TypeScript
   declarations for its contrib path; it is imported purely for its
   side effect (registering \ce with the bundled KaTeX instance). */
declare module 'katex/dist/contrib/mhchem';
