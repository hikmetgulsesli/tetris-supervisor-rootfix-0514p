// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Main Menu
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Play, Settings } from "lucide-react";


export type MainMenuActionId = "button-1-1" | "button-2-2" | "restart-session-3" | "start-new-game-4" | "resume-5" | "controls-help-6";

export interface MainMenuProps {
  actions?: Partial<Record<MainMenuActionId, () => void>>;
}

export function MainMenu({ actions }: MainMenuProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-surface text-primary border-b border-outline-variant flex justify-between items-center w-full px-lg py-sm h-16 z-50 fixed top-0 w-full">
      <div className="flex items-center gap-sm">
      <span className="font-headline-md text-headline-md font-semibold text-primary">Tetris Supervisor Root Fix 0514p</span>
      </div>
      <div className="flex items-center gap-md">
      <button aria-label="Settings" className="w-[44px] h-[44px] flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors rounded active:scale-95 transition-transform focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Settings  data-icon="settings" aria-hidden={true} focusable="false" />
      </button>
      <button aria-label="Help" className="w-[44px] h-[44px] flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors rounded active:scale-95 transition-transform focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle  data-icon="help" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      <div className="flex flex-1 mt-16 overflow-hidden">
      {/* SideNavBar */}
      <nav className="bg-surface-container-low border-r border-outline-variant fixed left-0 top-16 bottom-0 flex flex-col py-md z-40 h-full w-64 hidden md:flex">
      <div className="px-md pb-lg mb-md border-b border-outline-variant">
      <div className="flex items-center gap-sm mb-xs">
      <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
      <span className="font-status-label text-status-label text-on-surface">System Status</span>
      </div>
      <span className="font-body-base text-body-base text-on-surface-variant text-sm">Supervisor Active</span>
      </div>
      <div className="flex-1 flex flex-col gap-sm px-sm">
      {/* Active Nav Item */}
      <a className="flex items-center gap-md h-[44px] rounded text-primary font-bold border-l-4 border-primary pl-3 hover:bg-surface-container-high transition-colors active:translate-x-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container-low" href="#">
      <Play  data-icon="play_arrow" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <span className="font-button-text text-button-text">Play</span>
      </a>
      {/* Inactive Nav Items */}
      <a className="flex items-center gap-md h-[44px] rounded text-on-surface-variant pl-4 hover:bg-surface-container-high transition-colors active:translate-x-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container-low" href="#">
      <Circle  data-icon="analytics" aria-hidden={true} focusable="false" />
      <span className="font-button-text text-button-text">Stats</span>
      </a>
      <a className="flex items-center gap-md h-[44px] rounded text-on-surface-variant pl-4 hover:bg-surface-container-high transition-colors active:translate-x-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container-low" href="#">
      <Circle  data-icon="leaderboard" aria-hidden={true} focusable="false" />
      <span className="font-button-text text-button-text">Leaderboard</span>
      </a>
      <a className="flex items-center gap-md h-[44px] rounded text-on-surface-variant pl-4 hover:bg-surface-container-high transition-colors active:translate-x-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container-low" href="#">
      <Circle  data-icon="tune" aria-hidden={true} focusable="false" />
      <span className="font-button-text text-button-text">Settings</span>
      </a>
      </div>
      <div className="px-md mt-auto pt-md border-t border-outline-variant">
      <button className="w-full h-[44px] flex items-center justify-center gap-sm text-on-surface bg-surface border border-outline rounded hover:bg-surface-container-high transition-colors font-button-text text-button-text focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container-low" type="button" data-action-id="restart-session-3" onClick={actions?.["restart-session-3"]}>
      <Circle  data-icon="restart_alt" aria-hidden={true} focusable="false" />
                          Restart Session
                      </button>
      </div>
      </nav>
      {/* Main Content Canvas */}
      <main className="flex-1 flex flex-col items-center justify-center md:ml-64 p-lg relative overflow-hidden">
      {/* Subtle Background Grid Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{backgroundImage: "radial-gradient(circle at 1px 1px, #dce5d9 1px, transparent 0)", backgroundSize: "40px 40px"}}></div>
      <div className="max-w-2xl w-full flex flex-col items-center space-y-xl z-10">
      {/* Hero Branding */}
      <div className="text-center space-y-sm mb-xl">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-surface-container-high border border-outline-variant mb-md shadow-[0_0_30px_rgba(34,197,94,0.1)]">
      <Circle  data-icon="terminal" className="text-4xl text-primary" aria-hidden={true} focusable="false" />
      </div>
      <h1 className="font-display-score text-display-score text-on-surface tracking-tight">
                              Tetris Supervisor
                          </h1>
      <p className="font-mono-data text-mono-data text-primary opacity-80 uppercase tracking-widest">
                              Root Fix 0514p
                          </p>
      </div>
      {/* Action Menu */}
      <div className="w-full max-w-sm flex flex-col gap-md">
      <button className="w-full min-h-[56px] flex items-center justify-center bg-primary-container text-on-primary-container font-button-text text-button-text rounded-lg hover:bg-primary-fixed transition-colors shadow-[0_0_15px_rgba(34,197,94,0.2)] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4 focus:ring-offset-background active:scale-[0.98]" type="button" data-action-id="start-new-game-4" onClick={actions?.["start-new-game-4"]}>
                              START NEW GAME
                          </button>
      <button className="w-full min-h-[56px] flex items-center justify-center bg-surface border border-primary text-primary font-button-text text-button-text rounded-lg hover:bg-surface-container-high transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4 focus:ring-offset-background active:scale-[0.98]" type="button" data-action-id="resume-5" onClick={actions?.["resume-5"]}>
                              RESUME
                          </button>
      <button className="w-full min-h-[56px] flex items-center justify-center bg-surface border border-outline text-on-surface font-button-text text-button-text rounded-lg hover:bg-surface-container-high transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4 focus:ring-offset-background active:scale-[0.98]" type="button" data-action-id="controls-help-6" onClick={actions?.["controls-help-6"]}>
                              CONTROLS HELP
                          </button>
      </div>
      <div className="mt-xl pt-lg border-t border-outline-variant w-full max-w-sm text-center">
      <p className="font-status-label text-status-label text-on-surface-variant uppercase">System Ready // Awaiting Input</p>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
