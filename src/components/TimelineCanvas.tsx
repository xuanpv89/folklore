import { useState, useRef } from 'react';
import type { HistoricalEvent, Region } from '../types/history';
import { REGION_CONFIG } from '../data/initialEvents';
import { ShieldCheck, ZoomIn, ZoomOut, RotateCcw, Crosshair, Sparkles, ArrowRight } from 'lucide-react';

interface TimelineCanvasProps {
  events: HistoricalEvent[];
  selectedYear: number;
  onSelectYear: (year: number) => void;
  onSelectEvent: (event: HistoricalEvent) => void;
  selectedRegion: Region | null;
}

export const TimelineCanvas: React.FC<TimelineCanvasProps> = ({
  events,
  selectedYear,
  onSelectYear,
  onSelectEvent,
  selectedRegion
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [hoverYear, setHoverYear] = useState<number | null>(null);
  const [crosshairX, setCrosshairX] = useState<number | null>(null);

  // Time range calculation (-3000 to +2026)
  const minYear = -3000;
  const maxYear = 2026;
  const totalSpan = maxYear - minYear;

  // Convert year to percentage X position (0 to 100%)
  const yearToPercent = (year: number) => {
    return Math.max(0, Math.min(100, ((year - minYear) / totalSpan) * 100));
  };

  // Convert percentage X to year
  const percentToYear = (pct: number) => {
    return Math.round(minYear + (pct / 100) * totalSpan);
  };

  // Mouse move handler over timeline canvas
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pct = Math.max(0, Math.min(1, x / rect.width)) * 100;
    const calculatedYear = percentToYear(pct);
    setHoverYear(calculatedYear);
    setCrosshairX(x);
  };

  const handleMouseLeave = () => {
    setHoverYear(null);
    setCrosshairX(null);
  };

  // Click on canvas to lock selected year
  const handleCanvasClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pct = Math.max(0, Math.min(1, x / rect.width)) * 100;
    const clickedYear = percentToYear(pct);
    onSelectYear(clickedYear);
  };

  // Quick anchor year presets
  const ANCHOR_MILESTONES = [
    { year: -2560, label: '2560 TCN - Giza & Sông Ấn' },
    { year: -500, label: '500 TCN - Khổng Tử & Athens' },
    { year: 544, label: '544 SCN - Lý Nam Đế (Vạn Xuân)' },
    { year: 938, label: '938 SCN - Ngô Quyền (Bạch Đằng)' },
    { year: 1288, label: '1288 SCN - Trần Hưng Đạo' },
    { year: 1789, label: '1789 SCN - Quang Trung Kỷ Dậu' },
    { year: 1945, label: '1945 SCN - Bác Hồ & UN' }
  ];

  // Group events by region
  const regionsList = (Object.keys(REGION_CONFIG) as Region[]).filter(
    r => selectedRegion === null || selectedRegion === r
  );

  // Selected year position percentage
  const selectedPct = yearToPercent(selectedYear);

  return (
    <div className="flex flex-col gap-4">
      {/* Top Controls & Preset Anchors */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900/80 p-3 rounded-2xl border border-slate-800">
        <div className="flex items-center gap-2 overflow-x-auto text-xs">
          <span className="text-slate-400 font-medium flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Mốc Lịch sử Nổi bật:
          </span>
          {ANCHOR_MILESTONES.map((m) => (
            <button
              key={m.year}
              onClick={() => onSelectYear(m.year)}
              className={`px-2.5 py-1 rounded-lg font-semibold transition-all whitespace-nowrap border ${
                selectedYear === m.year
                  ? 'bg-indigo-600 text-white border-indigo-400 shadow-md shadow-indigo-500/30'
                  : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>

        {/* Zoom Level Controls */}
        <div className="flex items-center gap-1 bg-slate-950 px-2 py-1 rounded-xl border border-slate-800 text-xs">
          <span className="text-slate-400 font-mono mr-1">Tỷ lệ: {zoomLevel}x</span>
          <button
            onClick={() => setZoomLevel(prev => Math.min(2.5, prev + 0.25))}
            className="p-1 text-slate-300 hover:text-white hover:bg-slate-800 rounded"
            title="Phóng to"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={() => setZoomLevel(prev => Math.max(0.75, prev - 0.25))}
            className="p-1 text-slate-300 hover:text-white hover:bg-slate-800 rounded"
            title="Thu nhỏ"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <button
            onClick={() => setZoomLevel(1)}
            className="p-1 text-slate-300 hover:text-white hover:bg-slate-800 rounded"
            title="Đặt lại"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Interactive Swimlane Canvas */}
      <div className="relative glass-panel rounded-2xl p-4 border border-slate-800 shadow-2xl overflow-x-auto">
        <div 
          className="min-w-[900px] relative transition-all duration-300"
          style={{ width: `${zoomLevel * 100}%` }}
        >
          
          {/* Time Axis Ruler Header */}
          <div className="relative h-10 border-b border-slate-800 mb-2 flex items-end font-mono text-[11px] text-slate-400 select-none">
            {[-3000, -2000, -1000, 0, 500, 1000, 1500, 1750, 1900, 2026].map((tickYear) => {
              const pct = yearToPercent(tickYear);
              return (
                <div
                  key={tickYear}
                  className="absolute bottom-0 flex flex-col items-center transform -translate-x-1/2"
                  style={{ left: `${pct}%` }}
                >
                  <span className="text-[10px] font-medium text-slate-400">
                    {tickYear < 0 ? `${Math.abs(tickYear)} TCN` : tickYear === 0 ? 'CN' : `${tickYear} SCN`}
                  </span>
                  <div className="w-px h-2.5 bg-slate-700 mt-1" />
                </div>
              );
            })}
          </div>

          {/* Interactive Canvas Grid */}
          <div
            ref={containerRef}
            onClick={handleCanvasClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative grid-bg cursor-crosshair rounded-xl overflow-hidden py-3 border border-slate-800/60"
          >

            {/* Hover Cursor Line */}
            {crosshairX !== null && hoverYear !== null && (
              <div
                className="absolute top-0 bottom-0 pointer-events-none z-20 border-l border-amber-400/60 border-dashed"
                style={{ left: `${crosshairX}px` }}
              >
                <div className="bg-amber-500/90 text-slate-950 font-mono text-[10px] font-bold px-2 py-0.5 rounded shadow-lg transform -translate-x-1/2 -translate-y-6">
                  {hoverYear < 0 ? `${Math.abs(hoverYear)} TCN` : `${hoverYear} SCN`} (Click để chọn)
                </div>
              </div>
            )}

            {/* Selected Locked Year Vertical Indicator Line */}
            <div
              className="absolute top-0 bottom-0 pointer-events-none z-30 crosshair-line border-l-2 border-indigo-500"
              style={{ left: `${selectedPct}%` }}
            >
              <div className="bg-indigo-600 text-white font-mono text-xs font-bold px-2.5 py-1 rounded-full shadow-lg shadow-indigo-600/40 transform -translate-x-1/2 -translate-y-3 flex items-center gap-1 border border-indigo-300">
                <Crosshair className="w-3 h-3 animate-spin" />
                <span>{selectedYear < 0 ? `${Math.abs(selectedYear)} TCN` : `${selectedYear} SCN`}</span>
              </div>
            </div>

            {/* Regional Swimlanes */}
            <div className="flex flex-col gap-4">
              {regionsList.map((rKey) => {
                const rConf = REGION_CONFIG[rKey];
                const regionEvents = events.filter(e => e.region === rKey);

                return (
                  <div key={rKey} className="relative group">
                    
                    {/* Region Lane Header */}
                    <div className="flex items-center gap-2 mb-1.5 px-2">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: rConf.color }} />
                      <span className="text-xs font-bold text-slate-200 tracking-wide">{rConf.nameVi}</span>
                      <span className="text-[10px] text-slate-500 font-mono">({regionEvents.length} sự kiện)</span>
                    </div>

                    {/* Lane Track Horizontal Line */}
                    <div className="relative h-16 bg-slate-900/60 rounded-xl border border-slate-800/80 flex items-center px-2 hover:bg-slate-900/90 transition-all">
                      <div className="absolute left-0 right-0 h-0.5 bg-slate-800/90" />

                      {/* Event Nodes in Lane */}
                      {regionEvents.map((evt) => {
                        const pct = yearToPercent(evt.year);
                        const isSelected = Math.abs(evt.year - selectedYear) <= 5;

                        return (
                          <div
                            key={evt.id}
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectEvent(evt);
                              onSelectYear(evt.year);
                            }}
                            className={`absolute transform -translate-x-1/2 transition-all cursor-pointer z-10 group/card ${
                              isSelected ? 'scale-110 z-20' : 'hover:scale-105'
                            }`}
                            style={{ left: `${pct}%` }}
                          >
                            <div className={`px-2.5 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1.5 border shadow-lg transition-all ${
                              isSelected
                                ? 'bg-indigo-600 text-white border-indigo-300 ring-2 ring-indigo-400/50 shadow-indigo-500/30'
                                : 'glass-card text-slate-200 border-slate-700 hover:border-slate-500'
                            }`}>
                              <span 
                                className="w-2 h-2 rounded-full shrink-0" 
                                style={{ backgroundColor: rConf.color }} 
                              />
                              <span className="font-semibold truncate max-w-[140px] text-[11px]">
                                {evt.titleVi}
                              </span>
                              <span className="text-[9px] opacity-75 font-mono">
                                ({evt.yearDisplay})
                              </span>
                              <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
                            </div>

                            {/* Hover Tooltip Card */}
                            <div className="hidden group-hover/card:block absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 p-3 rounded-xl glass-panel border border-slate-700 shadow-2xl z-50 text-xs">
                              <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono mb-1">
                                <span>{evt.countryVi}</span>
                                <span className="text-indigo-300 font-bold">{evt.yearDisplay}</span>
                              </div>
                              <h4 className="font-bold text-slate-100 mb-1">{evt.titleVi}</h4>
                              <p className="text-slate-300 text-[11px] leading-relaxed line-clamp-2">{evt.summaryVi}</p>
                              <div className="mt-2 flex items-center justify-between text-[10px]">
                                <span className="text-emerald-400 flex items-center gap-1">
                                  <ShieldCheck className="w-3 h-3" /> Tin cậy: {evt.verification.confidence}%
                                </span>
                                <span className="text-indigo-400 font-medium flex items-center gap-0.5">
                                  Chi tiết <ArrowRight className="w-3 h-3" />
                                </span>
                              </div>
                            </div>

                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
