import type { HistoricalEvent } from '../types/history';
import { REGION_CONFIG } from '../data/initialEvents';
import { X, ShieldCheck, Users, BookOpen, Link, Sparkles, Award } from 'lucide-react';

interface EventDetailModalProps {
  event: HistoricalEvent | null;
  onClose: () => void;
  allEvents: HistoricalEvent[];
  onSelectEvent: (event: HistoricalEvent) => void;
}

export const EventDetailModal: React.FC<EventDetailModalProps> = ({
  event,
  onClose,
  allEvents,
  onSelectEvent
}) => {
  if (!event) return null;

  const rConf = REGION_CONFIG[event.region];

  // Find parallel events matching IDs
  const parallelEvents = allEvents.filter(e => 
    event.parallelConnections.includes(e.id) || (e.id !== event.id && Math.abs(e.year - event.year) <= 10)
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
      <div 
        className="glass-panel w-full max-w-3xl rounded-3xl border border-slate-700 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800 flex items-start justify-between gap-4 bg-gradient-to-r from-slate-900 via-slate-900/90 to-indigo-950/40">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${rConf.badgeBg}`}>
                {rConf.nameVi}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                {event.yearDisplay}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                {event.countryVi}
              </span>
            </div>
            <h2 className="text-2xl font-black text-white tracking-tight">{event.titleVi}</h2>
            <p className="text-xs text-slate-400 font-mono italic">{event.title}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Scrollable */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-200">
          
          {/* Verification Badge Bar */}
          <div className="glass-card p-4 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm flex items-center gap-1.5">
                  Kiểm định Lịch sử Chuẩn hóa (Verified Standard)
                </h4>
                <p className="text-xs text-slate-300">
                  Dữ liệu được đối chiếu với các nguồn chính sử & tài liệu peer-reviewed.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="flex flex-col items-end min-w-[100px]">
                <span className="text-xs text-slate-400 font-mono">Độ tin cậy:</span>
                <span className="text-lg font-black text-emerald-400 font-mono">{event.verification.confidence}%</span>
              </div>
              <div className="w-24 h-2 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full" 
                  style={{ width: `${event.verification.confidence}%` }} 
                />
              </div>
            </div>
          </div>

          {/* Detailed Narrative Description */}
          <div>
            <h3 className="text-sm font-bold text-indigo-300 uppercase tracking-wider mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> Chi tiết Bối cảnh Lịch sử
            </h3>
            <p className="text-slate-200 leading-relaxed text-sm bg-slate-900/60 p-4 rounded-2xl border border-slate-800 whitespace-pre-line">
              {event.fullDescriptionVi || event.fullDescription}
            </p>
          </div>

          {/* Key Figures & Global Impact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Key Figures */}
            <div className="glass-card p-4 rounded-2xl border border-slate-800">
              <h4 className="font-bold text-slate-200 text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Users className="w-4 h-4 text-purple-400" /> Nhân vật Lịch sử Trọng yếu
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {event.keyFigures.map((fig, idx) => (
                  <span 
                    key={idx}
                    className="px-2.5 py-1 bg-purple-500/10 text-purple-300 border border-purple-500/30 rounded-lg text-xs font-semibold"
                  >
                    {fig}
                  </span>
                ))}
              </div>
            </div>

            {/* Global Impact Score */}
            <div className="glass-card p-4 rounded-2xl border border-slate-800">
              <h4 className="font-bold text-slate-200 text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-400" /> Tác động Toàn cầu (Global Impact)
              </h4>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-amber-400 font-mono">{event.globalImpactScore}/10</span>
                <div className="flex gap-1">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-sm ${
                        i < event.globalImpactScore ? 'bg-amber-400' : 'bg-slate-800'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Parallel Connections Matrix */}
          <div>
            <h3 className="text-sm font-bold text-indigo-300 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" /> Sự kiện Xảy ra Đồng thời trên Thế giới (Parallel Events)
            </h3>
            
            {parallelEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {parallelEvents.map((pe) => {
                  const pConf = REGION_CONFIG[pe.region];
                  return (
                    <div
                      key={pe.id}
                      onClick={() => onSelectEvent(pe)}
                      className="glass-card p-3 rounded-xl cursor-pointer hover:border-indigo-500/50 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between text-[11px] mb-1">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${pConf.badgeBg}`}>
                            {pConf.nameVi}
                          </span>
                          <span className="font-mono text-indigo-300 font-bold">{pe.yearDisplay}</span>
                        </div>
                        <h4 className="font-bold text-white text-xs mb-1">{pe.titleVi}</h4>
                        <p className="text-[11px] text-slate-300 line-clamp-2">{pe.summaryVi}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-xs text-slate-400 italic">Không tìm thấy sự kiện liên kết trực tiếp.</p>
            )}
          </div>

          {/* Verified Sources */}
          <div className="pt-4 border-t border-slate-800 text-xs">
            <h4 className="font-bold text-slate-400 mb-2 flex items-center gap-1.5">
              <Link className="w-3.5 h-3.5" /> Nguồn Kiểm định & Trích dẫn Chính thức:
            </h4>
            <ul className="list-disc list-inside space-y-1 text-slate-400 font-mono text-[11px]">
              {event.verification.sources.map((src, i) => (
                <li key={i}>{src}</li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};
