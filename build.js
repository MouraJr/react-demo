import { serve } from "esbuild";

serve(
  {
    port: 4000,
    servedir: "./public",
  },
  {
    entryPoints: ["./client/index.jsx"],
    bundle: true,
    outfile: "./public/bundle.js",
  }
).catch((err) => {
  console.log(err);
  process.exit(1);
});
