// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Pause Overlay
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Play, RefreshCw, Settings } from "lucide-react";


export type PauseOverlayActionId = "resume-1" | "restart-2" | "quit-to-menu-3";

export interface PauseOverlayProps {
  actions?: Partial<Record<PauseOverlayActionId, () => void>>;
}

export function PauseOverlay({ actions }: PauseOverlayProps) {
  return (
    <>
      {/* Top App Bar - Suppressed for task/overlay intent, but rendering structural placeholder to simulate context */}
      <header className="bg-surface border-b border-outline-variant flex justify-between items-center w-full px-lg py-sm h-16 z-10 opacity-30 blur-sm pointer-events-none absolute top-0 left-0 w-full">
      <div className="font-headline-md text-headline-md font-semibold text-primary">
                  Tetris Supervisor Root Fix 0514p
              </div>
      <div className="flex gap-md text-on-surface-variant">
      <Settings aria-hidden={true} focusable="false" />
      <Circle aria-hidden={true} focusable="false" />
      </div>
      </header>
      {/* Side Nav - Suppressed for task/overlay intent, structural placeholder */}
      <aside className="fixed left-0 top-16 bottom-0 bg-surface-container-low border-r border-outline-variant w-64 py-md z-10 opacity-30 blur-sm pointer-events-none hidden md:flex flex-col">
      <div className="px-lg pb-md mb-md border-b border-outline-variant">
      <div className="font-headline-md text-headline-md text-primary mb-xs">System Status</div>
      <div className="font-status-label text-status-label text-on-surface-variant uppercase">Supervisor Active</div>
      </div>
      <nav className="flex-1 flex flex-col gap-sm">
      {/* Simplified representation for background context */}
      <div className="flex items-center gap-sm py-sm text-on-surface-variant pl-4">
      <Play aria-hidden={true} focusable="false" />
      <span>Play</span>
      </div>
      <div className="flex items-center gap-sm py-sm text-on-surface-variant pl-4">
      <Circle aria-hidden={true} focusable="false" />
      <span>Stats</span>
      </div>
      </nav>
      </aside>
      {/* Simulated Game Canvas (Blurred Background) */}
      <main className="flex-1 flex justify-center items-center h-full w-full relative z-0 opacity-50 blur-md pointer-events-none" style={{paddingTop: "64px", paddingLeft: "256px"}}>
      <div className="board-container border-2 w-[300px] h-[600px] rounded flex justify-center items-center relative overflow-hidden">
      {/* Simulated Grid Lines */}
      <div className="absolute inset-0 opacity-10" style={{backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)", backgroundSize: "30px 30px"}}></div>
      {/* Simulated Active Piece Glow */}
      <div className="absolute bottom-10 left-20 w-[60px] h-[30px] bg-primary rounded-sm opacity-80 shadow-[0_0_15px_rgba(34,197,94,0.6)]"></div>
      </div>
      </main>
      {/* PAUSE OVERLAY (The actual content of this screen) */}
      <div className="absolute inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-xl">
      {/* Header */}
      <h1 className="font-display-score text-display-score text-on-surface tracking-wider uppercase mb-lg" style={{textShadow: "0 0 20px rgba(220,229,217,0.2)"}}>
                      Paused
                  </h1>
      {/* Menu Options container */}
      <div className="flex flex-col gap-md w-64">
      {/* Active 'RESUME' Button */}
      <button className="bg-primary-container text-on-primary-container font-button-text text-button-text h-[44px] rounded flex items-center justify-center w-full uppercase tracking-widest border-2 border-primary ring-2 ring-primary ring-offset-2 ring-offset-background hover:bg-primary-fixed-dim transition-colors shadow-[0_0_15px_rgba(34,197,94,0.3)]" type="button" data-action-id="resume-1" onClick={actions?.["resume-1"]}>
      <Play  style={{fontVariationSettings: "'FILL' 1"}} className="mr-sm" aria-hidden={true} focusable="false" />
                          Resume
                      </button>
      {/* 'RESTART' Button */}
      <button className="bg-surface text-on-surface font-button-text text-button-text h-[44px] rounded border border-outline hover:bg-surface-container-high transition-colors flex items-center justify-center w-full uppercase tracking-widest" type="button" data-action-id="restart-2" onClick={actions?.["restart-2"]}>
      <RefreshCw className="mr-sm" aria-hidden={true} focusable="false" />
                          Restart
                      </button>
      {/* 'QUIT TO MENU' Button */}
      <button className="bg-surface text-on-surface font-button-text text-button-text h-[44px] rounded border border-outline hover:bg-surface-container-high transition-colors flex items-center justify-center w-full uppercase tracking-widest mt-sm" type="button" data-action-id="quit-to-menu-3" onClick={actions?.["quit-to-menu-3"]}>
      <Circle className="mr-sm" aria-hidden={true} focusable="false" />
                          Quit to Menu
                      </button>
      </div>
      </div>
      </div>
    </>
  );
}
