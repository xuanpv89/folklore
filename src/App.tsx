import { useState, useMemo } from 'react';
import type { HistoricalEvent, ViewMode, Region } from './types/history';
import { INITIAL_EVENTS, ERAS } from './data/initialEvents';
import { Header } from './components/Header';
import { TimelineCanvas } from './components/TimelineCanvas';
import { SynchronicMatrix } from './components/SynchronicMatrix';
import { HistoricalMapView } from './components/HistoricalMapView';
import { EventDetailModal } from './components/EventDetailModal';
import { DataIngestModal } from './components/DataIngestModal';
import { ShieldCheck } from 'lucide-react';

export function App() {
  const [events, setEvents] = useState<HistoricalEvent[]>(INITIAL_EVENTS);
  const [selectedYear, setSelectedYear] = useState<number>(544); // Default to Ly Nam De Van Xuan era
  const [selectedEra, setSelectedEra] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<ViewMode>('timeline');
  const [activeEventModal, setActiveEventModal] = useState<HistoricalEvent | null>(null);
  const [isIngestModalOpen, setIsIngestModalOpen] = useState<boolean>(false);

  // Filter events based on user selections
  const filteredEvents = useMemo(() => {
    return events.filter((evt) => {
      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesQuery = 
          evt.titleVi.toLowerCase().includes(q) ||
          evt.title.toLowerCase().includes(q) ||
          evt.countryVi.toLowerCase().includes(q) ||
          evt.summaryVi.toLowerCase().includes(q) ||
          evt.keyFigures.some(f => f.toLowerCase().includes(q)) ||
          evt.yearDisplay.toLowerCase().includes(q);
        if (!matchesQuery) return false;
      }

      // Era filter
      if (selectedEra) {
        const eraConfig = ERAS.find(e => e.id === selectedEra);
        if (eraConfig) {
          if (evt.year < eraConfig.startYear || evt.year > eraConfig.endYear) {
            return false;
          }
        }
      }

      // Region filter
      if (selectedRegion) {
        if (evt.region !== selectedRegion) return false;
      }

      return true;
    });
  }, [events, searchQuery, selectedEra, selectedRegion]);

  const handleAddEvent = (newEvent: HistoricalEvent) => {
    setEvents(prev => [newEvent, ...prev]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
      {/* Header Bar */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedEra={selectedEra}
        setSelectedEra={setSelectedEra}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        viewMode={viewMode}
        setViewMode={setViewMode}
        onOpenIngestModal={() => setIsIngestModalOpen(true)}
        selectedYear={selectedYear}
        totalEventsCount={filteredEvents.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6 space-y-6">
        
        {/* Dynamic View Rendering */}
        {viewMode === 'timeline' && (
          <div className="space-y-6">
            <TimelineCanvas
              events={filteredEvents}
              selectedYear={selectedYear}
              onSelectYear={setSelectedYear}
              onSelectEvent={setActiveEventModal}
              selectedRegion={selectedRegion}
            />

            {/* Embedded Parallel Matrix Below Timeline for Seamless Synchronic Browsing */}
            <SynchronicMatrix
              selectedYear={selectedYear}
              events={events}
              onSelectEvent={setActiveEventModal}
              onSelectYear={setSelectedYear}
            />
          </div>
        )}

        {viewMode === 'matrix' && (
          <SynchronicMatrix
            selectedYear={selectedYear}
            events={events}
            onSelectEvent={setActiveEventModal}
            onSelectYear={setSelectedYear}
          />
        )}

        {viewMode === 'map' && (
          <HistoricalMapView
            events={filteredEvents}
            selectedYear={selectedYear}
            onSelectEvent={setActiveEventModal}
            onSelectYear={setSelectedYear}
          />
        )}

      </main>

      {/* Footer */}
      <footer className="glass-panel border-t border-slate-800/80 mt-12 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-xs">
              F
            </div>
            <span className="font-bold text-slate-200">Folklore App</span>
            <span>• Nền tảng Lịch sử Thế giới Đa chiều & Đồng thời</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" /> Data Verified
            </span>
            <span className="text-slate-500">|</span>
            <a 
              href="https://github.com/xuanpv89/folklore" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg> github.com/xuanpv89/folklore
            </a>
          </div>
        </div>
      </footer>

      {/* Event Detail Modal */}
      <EventDetailModal
        event={activeEventModal}
        onClose={() => setActiveEventModal(null)}
        allEvents={events}
        onSelectEvent={setActiveEventModal}
      />

      {/* Auto-Ingest Data Modal */}
      <DataIngestModal
        isOpen={isIngestModalOpen}
        onClose={() => setIsIngestModalOpen(false)}
        onAddEvent={handleAddEvent}
      />

    </div>
  );
}

export default App;
