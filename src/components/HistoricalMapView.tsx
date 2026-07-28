import { useState } from 'react';
import type { HistoricalEvent } from '../types/history';
import { REGION_CONFIG } from '../data/initialEvents';
import { MapPin, ArrowRight } from 'lucide-react';

interface HistoricalMapViewProps {
  events: HistoricalEvent[];
  selectedYear: number;
  onSelectEvent: (event: HistoricalEvent) => void;
  onSelectYear: (year: number) => void;
}

export const HistoricalMapView: React.FC<HistoricalMapViewProps> = ({
  events,
  selectedYear,
  onSelectEvent,
  onSelectYear
}) => {
  const [activePin, setActivePin] = useState<HistoricalEvent | null>(null);

  // Convert Lat / Lng to SVG X, Y percentage coordinates (Equirectangular Projection)
  const latLngToPercent = (lat: number, lng: number) => {
    // Lng: -180 to +180 -> 0% to 100%
    const x = ((lng + 180) / 360) * 100;
    // Lat: +90 to -90 -> 0% to 100%
    const y = ((90 - lat) / 180) * 100;
    return { x, y };
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Map Container */}
      <div className="relative glass-panel rounded-2xl p-4 border border-slate-800 shadow-2xl overflow-hidden min-h-[480px]">
        <div className="flex items-center justify-between mb-3 px-2">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-indigo-400" />
            <h3 className="text-base font-bold text-white">Bản đồ Lịch sử Địa chính trị</h3>
          </div>
          <span className="text-xs text-slate-400 font-mono">
            Hiển thị {events.length} vị trí sự kiện toàn cầu
          </span>
        </div>

        {/* World Map SVG Projection Background */}
        <div className="relative w-full aspect-[2/1] bg-slate-950/80 rounded-xl border border-slate-800/80 overflow-hidden grid-bg">
          
          {/* Simple Stylized Continents Outlines */}
          <svg className="w-full h-full opacity-20 pointer-events-none" viewBox="0 0 1000 500">
            {/* North America */}
            <path d="M 150 100 Q 250 80 300 150 T 200 250 T 100 200 Z" fill="#94a3b8" />
            {/* South America */}
            <path d="M 280 260 Q 350 280 320 400 T 260 450 T 240 320 Z" fill="#94a3b8" />
            {/* Europe */}
            <path d="M 480 80 Q 580 70 600 150 T 520 180 T 460 120 Z" fill="#94a3b8" />
            {/* Africa */}
            <path d="M 460 190 Q 600 200 580 350 T 500 420 T 440 280 Z" fill="#94a3b8" />
            {/* Asia */}
            <path d="M 600 80 Q 880 70 900 220 T 700 280 T 580 180 Z" fill="#94a3b8" />
            {/* Australia / Oceania */}
            <path d="M 800 320 Q 920 330 880 430 T 780 400 Z" fill="#94a3b8" />
          </svg>

          {/* Equator & Prime Meridian Gridlines */}
          <div className="absolute left-0 right-0 top-1/2 h-px bg-slate-800/60 border-t border-dashed border-slate-700/40" />
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-slate-800/60 border-l border-dashed border-slate-700/40" />

          {/* Event Pins */}
          {events.map((evt) => {
            const { x, y } = latLngToPercent(evt.location.lat, evt.location.lng);
            const rConf = REGION_CONFIG[evt.region];
            const isSelected = Math.abs(evt.year - selectedYear) <= 10;

            return (
              <div
                key={evt.id}
                onClick={() => {
                  setActivePin(evt);
                  onSelectYear(evt.year);
                }}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all z-20 group ${
                  isSelected ? 'scale-125 z-30' : 'hover:scale-110'
                }`}
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                {/* Glowing Marker Dot */}
                <div 
                  className={`w-4 h-4 rounded-full border-2 border-white flex items-center justify-center shadow-lg transition-all ${
                    isSelected ? 'ring-4 ring-indigo-500/50 animate-bounce' : ''
                  }`}
                  style={{ backgroundColor: rConf.color }}
                >
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                </div>

                {/* Hover Label */}
                <div className="hidden group-hover:block absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 whitespace-nowrap bg-slate-900/90 text-white font-semibold text-[11px] px-2.5 py-1 rounded-lg border border-slate-700 shadow-xl pointer-events-none">
                  {evt.titleVi} ({evt.yearDisplay})
                </div>
              </div>
            );
          })}

          {/* Selected Pin Popover Detail */}
          {activePin && (
            <div className="absolute bottom-4 left-4 right-4 max-w-lg glass-panel p-4 rounded-2xl border border-indigo-500/40 shadow-2xl z-40 animate-in fade-in slide-in-from-bottom-4">
              <div className="flex items-center justify-between text-xs text-indigo-300 font-mono mb-1">
                <span>{activePin.countryVi} ({activePin.location.name})</span>
                <span className="bg-indigo-950 px-2 py-0.5 rounded font-bold">{activePin.yearDisplay}</span>
              </div>
              <h4 className="font-bold text-white text-sm mb-1">{activePin.titleVi}</h4>
              <p className="text-xs text-slate-300 line-clamp-2 mb-3">{activePin.summaryVi}</p>
              
              <div className="flex items-center justify-between">
                <button
                  onClick={() => onSelectEvent(activePin)}
                  className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold flex items-center gap-1 shadow-md shadow-indigo-600/30"
                >
                  Xem Hồ sơ Sự kiện Chi tiết <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setActivePin(null)}
                  className="text-xs text-slate-400 hover:text-white"
                >
                  Đóng
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
