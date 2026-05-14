// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Over
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Play, Settings } from "lucide-react";


export type GameOverActionId = "button-1-1" | "button-2-2" | "restart-session-3" | "play-again-4" | "main-menu-5";

export interface GameOverProps {
  actions?: Partial<Record<GameOverActionId, () => void>>;
}

export function GameOver({ actions }: GameOverProps) {
  return (
    <>
      {/* Background UI Mockup (Behind Overlay) */}
      {/* TopAppBar (Mobile) */}
      <header className="flex justify-between items-center w-full px-lg py-sm h-16 z-50 bg-surface border-b border-outline-variant md:hidden fixed top-0">
      <div className="font-headline-md text-headline-md font-semibold text-primary">Tetris Supervisor Root Fix 0514p</div>
      <div className="flex items-center gap-sm">
      <button className="w-[44px] h-[44px] flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors rounded" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      <button className="w-[44px] h-[44px] flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors rounded" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* SideNavBar (Desktop) */}
      <nav className="hidden md:flex flex-col py-md z-40 bg-surface-container-low border-r border-outline-variant fixed left-0 top-0 bottom-0 w-64">
      <div className="px-md mb-xl">
      <div className="font-headline-md text-headline-md text-primary mb-sm">System Status</div>
      <div className="font-status-label text-status-label text-on-surface-variant">Supervisor Active</div>
      </div>
      <div className="flex-1 flex flex-col gap-xs">
      <a className="flex items-center h-[44px] text-primary font-bold border-l-4 border-primary pl-3 hover:bg-surface-container-high transition-colors active:translate-x-1 transition-colors" href="#">
      <Play  style={{fontVariationSettings: "'FILL' 1"}} className="mr-sm" aria-hidden={true} focusable="false" />
      <span className="font-body-base text-body-base">Play</span>
      </a>
      <a className="flex items-center h-[44px] text-on-surface-variant pl-4 hover:bg-surface-container-high transition-colors active:translate-x-1 transition-colors" href="#">
      <Circle className="mr-sm" aria-hidden={true} focusable="false" />
      <span className="font-body-base text-body-base">Stats</span>
      </a>
      <a className="flex items-center h-[44px] text-on-surface-variant pl-4 hover:bg-surface-container-high transition-colors active:translate-x-1 transition-colors" href="#">
      <Circle className="mr-sm" aria-hidden={true} focusable="false" />
      <span className="font-body-base text-body-base">Leaderboard</span>
      </a>
      <a className="flex items-center h-[44px] text-on-surface-variant pl-4 hover:bg-surface-container-high transition-colors active:translate-x-1 transition-colors" href="#">
      <Circle className="mr-sm" aria-hidden={true} focusable="false" />
      <span className="font-body-base text-body-base">Settings</span>
      </a>
      </div>
      <div className="px-md mt-auto">
      <button className="w-full h-[44px] bg-primary text-on-primary font-button-text text-button-text rounded flex items-center justify-center hover:bg-primary-fixed-dim transition-colors" type="button" data-action-id="restart-session-3" onClick={actions?.["restart-session-3"]}>
                      Restart Session
                  </button>
      </div>
      </nav>
      {/* Main Game Canvas Mock */}
      <main className="flex-1 flex items-center justify-center md:ml-64 mt-16 md:mt-0 p-lg opacity-30 blur-sm pointer-events-none">
      <div className="w-full max-w-[300px] aspect-[1/2] bg-[#111827] border border-[#334155] rounded-DEFAULT p-board-gutter flex flex-col">
      {/* Simulated grid lines */}
      <div className="flex-1 border-b border-surface-variant opacity-50"></div>
      <div className="flex-1 border-b border-surface-variant opacity-50"></div>
      <div className="flex-1 border-b border-surface-variant opacity-50"></div>
      {/* ... more lines omitted for brevity ... */}
      <div className="flex-1"></div>
      </div>
      </main>
      {/* Game Over Overlay */}
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-md p-md md:pl-64">
      <div className="w-full max-w-md bg-surface border border-outline-variant rounded-xl p-xl shadow-2xl flex flex-col items-center animate-fade-in-up">
      {/* Header */}
      <h1 className="font-display-score text-display-score text-error mb-xl tracking-wider text-center drop-shadow-md">
                      GAME OVER
                  </h1>
      {/* Stats Container (Bento/Card Style) */}
      <div className="w-full flex flex-col gap-sm mb-xl">
      {/* Stat Row: Final Score */}
      <div className="flex items-center justify-between p-md bg-surface-container-low border border-outline-variant rounded-lg">
      <span className="font-status-label text-status-label text-on-surface-variant uppercase tracking-widest">FINAL SCORE</span>
      <span className="font-mono-data text-mono-data text-primary">45,800</span>
      </div>
      {/* Secondary Stats Grid */}
      <div className="grid grid-cols-2 gap-sm w-full">
      <div className="flex flex-col items-center justify-center p-md bg-surface-container-low border border-outline-variant rounded-lg">
      <span className="font-status-label text-status-label text-on-surface-variant uppercase tracking-widest mb-xs text-center">LEVEL REACHED</span>
      <span className="font-mono-data text-mono-data text-on-surface">12</span>
      </div>
      <div className="flex flex-col items-center justify-center p-md bg-surface-container-low border border-outline-variant rounded-lg">
      <span className="font-status-label text-status-label text-on-surface-variant uppercase tracking-widest mb-xs text-center">LINES CLEARED</span>
      <span className="font-mono-data text-mono-data text-on-surface">134</span>
      </div>
      </div>
      </div>
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-md w-full">
      <button className="flex-1 h-[44px] flex items-center justify-center bg-primary text-on-primary font-button-text text-button-text rounded-DEFAULT hover:bg-primary-fixed-dim transition-colors outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background" type="button" data-action-id="play-again-4" onClick={actions?.["play-again-4"]}>
                          PLAY AGAIN
                      </button>
      <button className="flex-1 h-[44px] flex items-center justify-center bg-surface border border-outline text-on-surface font-button-text text-button-text rounded-DEFAULT hover:bg-surface-container-high transition-colors outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background" type="button" data-action-id="main-menu-5" onClick={actions?.["main-menu-5"]}>
                          MAIN MENU
                      </button>
      </div>
      </div>
      </div>
    </>
  );
}
