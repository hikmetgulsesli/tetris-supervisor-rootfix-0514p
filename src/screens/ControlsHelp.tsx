// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Controls Help
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowLeft, Circle, MousePointerClick } from "lucide-react";


export type ControlsHelpActionId = "back-to-menu-1";

export interface ControlsHelpProps {
  actions?: Partial<Record<ControlsHelpActionId, () => void>>;
}

export function ControlsHelp({ actions }: ControlsHelpProps) {
  return (
    <>
      <div className="w-full max-w-2xl bg-surface-container rounded-xl border border-outline-variant p-xl shadow-lg relative overflow-hidden flex flex-col gap-lg">
      <div className="flex items-center justify-between border-b border-outline-variant pb-md">
      <h1 className="font-headline-md text-headline-md text-primary">Controls Help</h1>
      <Circle className="text-primary text-3xl" aria-hidden={true} focusable="false" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
      <section className="flex flex-col gap-md">
      <h2 className="font-status-label text-status-label text-on-surface-variant uppercase tracking-wider flex items-center gap-sm">
      <Circle className="text-xl" aria-hidden={true} focusable="false" />
                          Keyboard Controls
                      </h2>
      <ul className="flex flex-col gap-sm">
      <li className="flex items-center justify-between bg-surface-container-highest p-sm rounded border border-outline-variant">
      <span className="font-mono-data text-mono-data text-on-surface">Arrow Keys</span>
      <span className="font-body-base text-body-base text-on-surface-variant">Move/Rotate</span>
      </li>
      <li className="flex items-center justify-between bg-surface-container-highest p-sm rounded border border-outline-variant">
      <span className="font-mono-data text-mono-data text-on-surface">Space</span>
      <span className="font-body-base text-body-base text-on-surface-variant">Hard Drop</span>
      </li>
      <li className="flex items-center justify-between bg-surface-container-highest p-sm rounded border border-outline-variant">
      <span className="font-mono-data text-mono-data text-on-surface">P</span>
      <span className="font-body-base text-body-base text-on-surface-variant">Pause</span>
      </li>
      <li className="flex items-center justify-between bg-surface-container-highest p-sm rounded border border-outline-variant">
      <span className="font-mono-data text-mono-data text-on-surface">R</span>
      <span className="font-body-base text-body-base text-on-surface-variant">Restart</span>
      </li>
      </ul>
      </section>
      <section className="flex flex-col gap-md">
      <h2 className="font-status-label text-status-label text-on-surface-variant uppercase tracking-wider flex items-center gap-sm">
      <MousePointerClick className="text-xl" aria-hidden={true} focusable="false" />
                          Touch Controls
                      </h2>
      <ul className="flex flex-col gap-sm">
      <li className="flex items-center justify-between bg-surface-container-highest p-sm rounded border border-outline-variant">
      <span className="font-mono-data text-mono-data text-on-surface">Tap</span>
      <span className="font-body-base text-body-base text-on-surface-variant">Rotate</span>
      </li>
      <li className="flex items-center justify-between bg-surface-container-highest p-sm rounded border border-outline-variant">
      <span className="font-mono-data text-mono-data text-on-surface">Swipe L/R</span>
      <span className="font-body-base text-body-base text-on-surface-variant">Move</span>
      </li>
      <li className="flex items-center justify-between bg-surface-container-highest p-sm rounded border border-outline-variant">
      <span className="font-mono-data text-mono-data text-on-surface">Swipe Down</span>
      <span className="font-body-base text-body-base text-on-surface-variant">Soft Drop</span>
      </li>
      </ul>
      </section>
      </div>
      <div className="mt-md pt-lg border-t border-outline-variant flex justify-center">
      <button className="min-h-[44px] px-xl py-sm bg-surface text-on-surface font-button-text text-button-text border border-outline-variant rounded hover:bg-surface-container-highest focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface transition-colors flex items-center gap-sm" type="button" data-action-id="back-to-menu-1" onClick={actions?.["back-to-menu-1"]}>
      <ArrowLeft className="text-lg" aria-hidden={true} focusable="false" />
                      BACK TO MENU
                  </button>
      </div>
      </div>
    </>
  );
}
