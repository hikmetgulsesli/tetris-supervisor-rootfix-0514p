// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Board
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Pause, Play, RefreshCw, Settings } from "lucide-react";


export type GameBoardActionId = "button-1-1" | "button-2-2" | "restart-session-3" | "pause-4" | "restart-5";

export interface GameBoardProps {
  actions?: Partial<Record<GameBoardActionId, () => void>>;
}

export function GameBoard({ actions }: GameBoardProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-surface text-primary font-headline-md text-headline-md docked full-width top-0 border-b border-outline-variant flat no shadows flex justify-between items-center w-full px-lg py-sm h-16 z-50">
      <div className="font-headline-md text-headline-md font-semibold text-primary">
                  Tetris Supervisor Root Fix 0514p
              </div>
      <div className="flex gap-4">
      <button aria-label="settings" className="w-[44px] h-[44px] flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-DEFAULT active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#0F172A]" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      <button aria-label="help" className="w-[44px] h-[44px] flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-DEFAULT active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#0F172A]" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
      {/* SideNavBar */}
      <nav className="bg-surface-container-low text-primary font-body-base text-body-base docked left-0 h-full w-64 border-r border-outline-variant flat no shadows flex flex-col py-md z-40 hidden md:flex">
      <div className="px-4 mb-8">
      <h2 className="font-headline-md text-headline-md text-primary">System Status</h2>
      <p className="text-sm text-on-surface-variant">Supervisor Active</p>
      </div>
      <ul className="flex-1 space-y-2">
      <li>
      <a className="flex items-center h-[44px] text-primary font-bold border-l-4 border-primary pl-3 bg-surface-container-high hover:bg-surface-container-high transition-colors active:translate-x-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#161d16]" href="#">
      <Play  style={{fontVariationSettings: "'FILL' 1"}} className="mr-3" aria-hidden={true} focusable="false" />
                              Play
                          </a>
      </li>
      <li>
      <a className="flex items-center h-[44px] text-on-surface-variant pl-4 hover:bg-surface-container-high transition-colors active:translate-x-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#161d16]" href="#">
      <Circle className="mr-3" aria-hidden={true} focusable="false" />
                              Stats
                          </a>
      </li>
      <li>
      <a className="flex items-center h-[44px] text-on-surface-variant pl-4 hover:bg-surface-container-high transition-colors active:translate-x-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#161d16]" href="#">
      <Circle className="mr-3" aria-hidden={true} focusable="false" />
                              Leaderboard
                          </a>
      </li>
      <li>
      <a className="flex items-center h-[44px] text-on-surface-variant pl-4 hover:bg-surface-container-high transition-colors active:translate-x-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#161d16]" href="#">
      <Circle className="mr-3" aria-hidden={true} focusable="false" />
                              Settings
                          </a>
      </li>
      </ul>
      <div className="px-4 mt-auto">
      <button className="w-full h-[44px] bg-primary-container text-on-primary-container font-button-text text-button-text rounded-DEFAULT hover:bg-primary-fixed transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#161d16]" type="button" data-action-id="restart-session-3" onClick={actions?.["restart-session-3"]}>
                          Restart Session
                      </button>
      </div>
      </nav>
      {/* Main Game Area */}
      <main className="flex-1 flex justify-center items-center p-md relative">
      <div className="flex gap-8 items-start w-full max-w-5xl justify-center">
      {/* Left HUD */}
      <div className="hidden lg:flex flex-col gap-6 w-48 pt-8">
      <div className="bg-surface border border-outline-variant rounded-lg p-4 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-[#0F172A]">
      <h3 className="font-status-label text-status-label text-on-surface-variant mb-1 uppercase tracking-wider">Score</h3>
      <div className="font-display-score text-display-score text-primary">12,450</div>
      </div>
      <div className="bg-surface border border-outline-variant rounded-lg p-4 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-[#0F172A]">
      <h3 className="font-status-label text-status-label text-on-surface-variant mb-1 uppercase tracking-wider">Level</h3>
      <div className="font-mono-data text-mono-data text-secondary">08</div>
      </div>
      <div className="bg-surface border border-outline-variant rounded-lg p-4 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-[#0F172A]">
      <h3 className="font-status-label text-status-label text-on-surface-variant mb-1 uppercase tracking-wider">Lines</h3>
      <div className="font-mono-data text-mono-data text-secondary">82</div>
      </div>
      </div>
      {/* Center Game Board */}
      <div className="flex flex-col items-center">
      <div className="tetris-grid rounded-DEFAULT shadow-2xl relative">
      {/* Grid Background (simulated with empty cells) */}
      {/* Row 1 to 15 (mostly empty, some blocks at bottom) */}
      <div className="bg-empty col-span-10 h-full row-span-15"></div>
      {/* Row 16 */}
      <div className="bg-empty"></div><div className="bg-empty"></div><div className="bg-empty"></div><div className="bg-empty"></div><div className="bg-empty"></div><div className="bg-empty"></div><div className="bg-cyan-block block"></div><div className="bg-cyan-block block"></div><div className="bg-empty"></div><div className="bg-empty"></div>
      {/* Row 17 */}
      <div className="bg-empty"></div><div className="bg-empty"></div><div className="bg-yellow-block block"></div><div className="bg-yellow-block block"></div><div className="bg-empty"></div><div className="bg-empty"></div><div className="bg-cyan-block block"></div><div className="bg-cyan-block block"></div><div className="bg-empty"></div><div className="bg-empty"></div>
      {/* Row 18 */}
      <div className="bg-purple-block block"></div><div className="bg-empty"></div><div className="bg-yellow-block block"></div><div className="bg-yellow-block block"></div><div className="bg-red-block block"></div><div className="bg-red-block block"></div><div className="bg-empty"></div><div className="bg-empty"></div><div className="bg-green-block block"></div><div className="bg-green-block block"></div>
      {/* Row 19 */}
      <div className="bg-purple-block block"></div><div className="bg-purple-block block"></div><div className="bg-purple-block block"></div><div className="bg-blue-block block"></div><div className="bg-empty"></div><div className="bg-red-block block"></div><div className="bg-red-block block"></div><div className="bg-empty"></div><div className="bg-green-block block"></div><div className="bg-green-block block"></div>
      {/* Row 20 */}
      <div className="bg-orange-block block"></div><div className="bg-orange-block block"></div><div className="bg-orange-block block"></div><div className="bg-blue-block block"></div><div className="bg-blue-block block"></div><div className="bg-blue-block block"></div><div className="bg-empty"></div><div className="bg-empty"></div><div className="bg-orange-block block"></div><div className="bg-orange-block block"></div>
      {/* Falling Piece (T-Shape) */}
      <div className="absolute top-[20%] left-[40%] grid grid-cols-3 gap-[2px] w-[30%]">
      <div className="bg-empty"></div><div className="bg-purple-block block aspect-square"></div><div className="bg-empty"></div>
      <div className="bg-purple-block block aspect-square"></div><div className="bg-purple-block block aspect-square"></div><div className="bg-purple-block block aspect-square"></div>
      </div>
      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "10% 5%"}}></div>
      </div>
      {/* Mobile/Bottom Controls */}
      <div className="mt-8 flex gap-4 w-full max-w-[400px]">
      <button className="flex-1 h-[44px] bg-surface border border-outline-variant text-on-surface font-button-text text-button-text rounded-DEFAULT hover:bg-surface-container-high transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#0F172A]" type="button" data-action-id="pause-4" onClick={actions?.["pause-4"]}>
      <Pause className="mr-2" aria-hidden={true} focusable="false" /> Pause
                              </button>
      <button className="flex-1 h-[44px] bg-surface border border-outline-variant text-on-surface font-button-text text-button-text rounded-DEFAULT hover:bg-surface-container-high transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#0F172A]" type="button" data-action-id="restart-5" onClick={actions?.["restart-5"]}>
      <RefreshCw className="mr-2" aria-hidden={true} focusable="false" /> Restart
                              </button>
      </div>
      </div>
      {/* Right HUD */}
      <div className="hidden md:flex flex-col gap-6 w-48 pt-8">
      <div className="bg-surface border border-outline-variant rounded-lg p-4 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-[#0F172A]">
      <h3 className="font-status-label text-status-label text-on-surface-variant mb-4 uppercase tracking-wider text-center">Next</h3>
      <div className="w-24 h-24 mx-auto grid grid-cols-3 gap-[2px] items-center justify-center">
      <div className="bg-empty aspect-square"></div><div className="bg-purple-block block aspect-square"></div><div className="bg-empty aspect-square"></div>
      <div className="bg-purple-block block aspect-square"></div><div className="bg-purple-block block aspect-square"></div><div className="bg-purple-block block aspect-square"></div>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
