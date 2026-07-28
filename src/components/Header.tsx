import { 
  Globe, 
  Search, 
  Sparkles, 
  Calendar, 
  Grid, 
  Map as MapIcon, 
  Layers, 
  DatabasePlus
} from 'lucide-react';
import type { ViewMode, Region } from '../types/history';
import { ERAS, REGION_CONFIG } from '../data/initialEvents';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedEra: string | null;
  setSelectedEra: (eraId: string | null) => void;
  selectedRegion: Region | null;
  setSelectedRegion: (region: Region | null) => void;
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  onOpenIngestModal: () => void;
  selectedYear: number;
  totalEventsCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  setSearchQuery,
  selectedEra,
  setSelectedEra,
  selectedRegion,
  setSelectedRegion,
  viewMode,
  setViewMode,
  onOpenIngestModal,
  selectedYear,
  totalEventsCount
}) => {
  return (
    <header className="sticky top-0 z-40 glass-panel border-b border-slate-800 px-4 py-3 shadow-xl backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col gap-3">
        {/* Top Row: Logo, Search, View Switcher & Action */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Logo Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/30 ring-1 ring-white/20">
              <Globe className="w-6 h-6 text-white animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-indigo-300">
                  Folklore
                </h1>
                <span className="px-2 py-0.5 text-[10px] font-semibold bg-indigo-500/20 text-indigo-300 rounded-full border border-indigo-500/30">
                  v1.7 Parallel Engine
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium">
                Lịch sử Thế giới Đa chiều • Synchronic Timeline
              </p>
            </div>
          </div>

          {/* Search Input Bar */}
          <div className="relative flex-1 max-w-md w-full">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Tìm kiếm sự kiện, nhân vật, quốc gia (vd: Lý Nam Đế, 1789, Bastille)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900/80 border border-slate-700/80 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')} 
                className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>

          {/* View Modes Switcher */}
          <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setViewMode('timeline')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                viewMode === 'timeline'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
              title="Khung thời gian đa luồng song song"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Luồng Đa chiều</span>
            </button>

            <button
              onClick={() => setViewMode('matrix')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                viewMode === 'matrix'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
              title="Ma trận so sánh sự kiện diễn ra đồng thời"
            >
              <Grid className="w-3.5 h-3.5" />
              <span>Ma trận Song song</span>
            </button>

            <button
              onClick={() => setViewMode('map')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                viewMode === 'map'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
              title="Bản đồ sự kiện toàn cầu"
            >
              <MapIcon className="w-3.5 h-3.5" />
              <span>Bản đồ Lịch sử</span>
            </button>
          </div>

          {/* Ingest Live Data Button */}
          <button
            onClick={onOpenIngestModal}
            className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-xl text-xs font-semibold shadow-lg shadow-emerald-600/20 transition-all border border-emerald-400/30"
          >
            <DatabasePlus className="w-4 h-4" />
            <span>Tự động Nạp & Kiểm định</span>
          </button>
        </div>

        {/* Bottom Row: Era Filters & Region Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800/80 text-xs">
          
          {/* Era Selector Pills */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 max-w-full">
            <span className="text-slate-400 font-semibold flex items-center gap-1 mr-1">
              <Calendar className="w-3.5 h-3.5 text-indigo-400" /> Kỷ nguyên:
            </span>

            <button
              onClick={() => setSelectedEra(null)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all ${
                selectedEra === null
                  ? 'bg-slate-700 text-white border border-slate-500'
                  : 'bg-slate-900/60 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              Tất cả thời kỳ
            </button>

            {ERAS.map((era) => (
              <button
                key={era.id}
                onClick={() => setSelectedEra(selectedEra === era.id ? null : era.id)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-medium whitespace-nowrap transition-all ${
                  selectedEra === era.id
                    ? 'bg-indigo-600/80 text-white border border-indigo-400 shadow-sm'
                    : 'bg-slate-900/60 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {era.labelVi}
              </button>
            ))}
          </div>

          {/* Region Badges Filter & Active Status */}
          <div className="flex items-center gap-2 overflow-x-auto">
            <span className="text-slate-400 font-semibold mr-1">Khu vực:</span>
            <button
              onClick={() => setSelectedRegion(null)}
              className={`px-2 py-0.5 rounded-full text-[10px] font-medium transition-all ${
                selectedRegion === null
                  ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40'
                  : 'bg-slate-800/60 text-slate-400 hover:text-slate-200'
              }`}
            >
              Toàn cầu (6 châu)
            </button>

            {(Object.keys(REGION_CONFIG) as Region[]).map((rKey) => {
              const rConf = REGION_CONFIG[rKey];
              const isSelected = selectedRegion === rKey;
              return (
                <button
                  key={rKey}
                  onClick={() => setSelectedRegion(isSelected ? null : rKey)}
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold flex items-center gap-1 border transition-all ${
                    isSelected ? rConf.badgeBg + ' ring-1 ring-white/20' : 'bg-slate-900/40 text-slate-400 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: rConf.color }} />
                  {rConf.nameVi}
                </button>
              );
            })}
          </div>

          {/* Target Year Indicator */}
          <div className="flex items-center gap-2 text-indigo-300 font-mono text-xs bg-indigo-950/60 px-3 py-1 rounded-lg border border-indigo-800/50">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '4s' }} />
            <span>Năm đang chọn: <strong>{selectedYear < 0 ? `${Math.abs(selectedYear)} TCN` : `${selectedYear} SCN`}</strong></span>
            <span className="text-[10px] text-slate-400 font-sans">({totalEventsCount} sự kiện)</span>
          </div>

        </div>
      </div>
    </header>
  );
};
