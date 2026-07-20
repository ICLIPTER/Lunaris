import { Extension } from "@codemirror/state";
import { showMinimap } from "@replit/codemirror-minimap";

const createMinimap = (): { dom: HTMLDivElement } => {
  const dom = document.createElement("div");

  dom.className = "cm-minimap";
  dom.setAttribute("aria-hidden", "true");

  return { dom };
};

export const minimap: Extension = showMinimap.compute(["doc"], () => ({
  create: createMinimap,
  displayText: "characters",
  showOverlay: "always",
}));
