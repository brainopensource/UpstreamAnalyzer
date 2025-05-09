'use client'

export default function ElectronTitleBar() {
  return (
    <div
      data-electron-titlebar
      className="w-full h-8 bg-black z-50 flex items-center px-4"
      style={{ WebkitAppRegion: 'drag' } as any}
    >
      <div className="flex gap-2 ml-auto" style={{ WebkitAppRegion: 'no-drag' } as any}>
        <button
          aria-label="Minimize"
          className="w-3 h-3 rounded-full bg-[#27c93f] hover:brightness-110 transition"
          onClick={() => (window as any).electronAPI?.minimizeWindow?.()}
        />
        <button
          aria-label="Maximize"
          className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:brightness-110 transition"
          onClick={() => (window as any).electronAPI?.maximizeWindow?.()}
        />
        <button
          aria-label="Close"
          className="w-3 h-3 rounded-full bg-[#ff5f56] hover:brightness-110 transition"
          onClick={() => (window as any).electronAPI?.closeWindow?.()}
        />
      </div>
    </div>
  );
} 