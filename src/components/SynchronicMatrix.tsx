import { useMemo } from 'react';
import type { HistoricalEvent, Region } from '../types/history';
import { REGION_CONFIG } from '../data/initialEvents';
import { Sparkles, ShieldCheck, ArrowRight, Globe } from 'lucide-react';

interface SynchronicMatrixProps {
  selectedYear: number;
  events: HistoricalEvent[];
  onSelectEvent: (event: HistoricalEvent) => void;
  onSelectYear: (year: number) => void;
}

export const SynchronicMatrix: React.FC<SynchronicMatrixProps> = ({
  selectedYear,
  events,
  onSelectEvent,
  onSelectYear
}) => {
  // Determine window tolerance based on era scale
  const timeWindow = Math.abs(selectedYear) > 1000 ? 50 : Math.abs(selectedYear) > 500 ? 25 : 10;

  // Group parallel events by region
  const regionalParallelMap = useMemo(() => {
    const map: Record<Region, HistoricalEvent[]> = {
      asia: [],
      europe: [],
      'middle-east': [],
      americas: [],
      africa: [],
      oceania: []
    };

    events.forEach(evt => {
      if (Math.abs(evt.year - selectedYear) <= timeWindow) {
        map[evt.region].push(evt);
      }
    });

    return map;
  }, [selectedYear, events, timeWindow]);

  return (
    <div className="flex flex-col gap-6">
      {/* Banner / Header for Parallel View */}
      <div className="glass-panel p-5 rounded-2xl border border-indigo-500/30 bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-indigo-600/30 border border-indigo-400/40 flex items-center justify-center text-indigo-300 shadow-inner">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-white">
                Góc nhìn Lịch sử Song song (Synchronic Parallel Matrix)
              </h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                ±{timeWindow} năm
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-0.5">
              Những biến động chính trị, văn hóa, khoa học diễn ra <strong>đồng thời</strong> trên các châu lục xung quanh năm{' '}
              <strong className="text-amber-400 font-mono">
                {selectedYear < 0 ? `${Math.abs(selectedYear)} TCN` : `${selectedYear} SCN`}
              </strong>
            </p>
          </div>
        </div>

        {/* Quick Year Shift Controls */}
        <div className="flex items-center gap-2 text-xs font-mono">
          <button
            onClick={() => onSelectYear(selectedYear - 50)}
            className="px-3 py-1.5 rounded-xl glass-card text-slate-300 hover:text-white border border-slate-700"
          >
            ← -50 năm
          </button>
          <button
            onClick={() => onSelectYear(selectedYear - 10)}
            className="px-3 py-1.5 rounded-xl glass-card text-slate-300 hover:text-white border border-slate-700"
          >
            -10 năm
          </button>
          <span className="px-3 py-1.5 rounded-xl bg-indigo-600 text-white font-bold">
            {selectedYear < 0 ? `${Math.abs(selectedYear)} TCN` : `${selectedYear} SCN`}
          </span>
          <button
            onClick={() => onSelectYear(selectedYear + 10)}
            className="px-3 py-1.5 rounded-xl glass-card text-slate-300 hover:text-white border border-slate-700"
          >
            +10 năm
          </button>
          <button
            onClick={() => onSelectYear(selectedYear + 50)}
            className="px-3 py-1.5 rounded-xl glass-card text-slate-300 hover:text-white border border-slate-700"
          >
            +50 năm →
          </button>
        </div>
      </div>

      {/* 6-Region Parallel Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {(Object.keys(REGION_CONFIG) as Region[]).map((rKey) => {
          const rConf = REGION_CONFIG[rKey];
          const parallelEvts = regionalParallelMap[rKey];

          return (
            <div
              key={rKey}
              className="glass-panel rounded-2xl p-4 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all shadow-xl"
            >
              <div>
                {/* Region Card Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full shadow-sm" style={{ backgroundColor: rConf.color }} />
                    <h3 className="font-bold text-slate-100 text-sm">{rConf.nameVi}</h3>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-900 text-slate-400 border border-slate-800">
                    {parallelEvts.length} sự kiện đồng thời
                  </span>
                </div>

                {/* List of Parallel Events in Region */}
                {parallelEvts.length > 0 ? (
                  <div className="flex flex-col gap-3">
                    {parallelEvts.map((evt) => (
                      <div
                        key={evt.id}
                        onClick={() => onSelectEvent(evt)}
                        className="glass-card p-3.5 rounded-xl cursor-pointer hover:border-indigo-500/50 transition-all group"
                      >
                        <div className="flex items-center justify-between text-[11px] mb-1">
                          <span className="font-semibold text-slate-300">{evt.countryVi}</span>
                          <span className="font-mono text-indigo-300 font-bold bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-800/40">
                            {evt.yearDisplay}
                          </span>
                        </div>
                        <h4 className="font-bold text-white text-sm group-hover:text-indigo-300 transition-colors mb-1">
                          {evt.titleVi}
                        </h4>
                        <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-2">
                          {evt.summaryVi}
                        </p>
                        
                        <div className="flex items-center justify-between pt-2 border-t border-slate-800/60 text-[10px]">
                          <span className="text-emerald-400 flex items-center gap-1">
                            <ShieldCheck className="w-3 h-3" /> Kiểm định: {evt.verification.confidence}%
                          </span>
                          <span className="text-indigo-400 font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                            Xem thêm <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-8 px-4 text-center border border-dashed border-slate-800 rounded-xl bg-slate-950/30">
                    <Globe className="w-8 h-8 text-slate-600 mx-auto mb-2 opacity-50" />
                    <p className="text-xs text-slate-400">
                      Không có sự kiện ghi nhận trực tiếp trong khoảng ±{timeWindow} năm tại {rConf.nameVi}.
                    </p>
                    <button
                      onClick={() => onSelectYear(selectedYear)}
                      className="mt-3 text-[11px] text-indigo-400 hover:text-indigo-300 font-medium"
                    >
                      Dùng tính năng Tự động Nạp để tìm thêm dữ liệu →
                    </button>
                  </div>
                )}
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};
