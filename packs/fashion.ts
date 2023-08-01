import { DecoManifest } from "$live/mod.ts";
import manifest from "deco-sites/fashion/live.gen.ts";

export const name = "deco-sites/fashion";

export default function Fashion(_props: unknown): DecoManifest {
  return manifest as unknown as DecoManifest;
}
