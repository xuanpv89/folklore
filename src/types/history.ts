export type Region = 'asia' | 'europe' | 'middle-east' | 'americas' | 'africa' | 'oceania';

export type Category = 'politics' | 'war' | 'science' | 'culture' | 'religion' | 'economy';

export interface VerificationInfo {
  status: 'verified' | 'multi-source' | 'primary-record' | 'peer-reviewed';
  confidence: number; // 0 to 100
  sources: string[];
  lastVerifiedAt: string;
}

export interface LocationGeo {
  lat: number;
  lng: number;
  name: string;
}

export interface HistoricalEvent {
  id: string;
  title: string;
  titleVi: string;
  year: number; // Negative for BCE, positive for CE
  yearDisplay: string; // e.g. "544 SCN", "250 TCN"
  endYear?: number;
  region: Region;
  country: string;
  countryVi: string;
  location: LocationGeo;
  category: Category;
  summary: string;
  summaryVi: string;
  fullDescription: string;
  fullDescriptionVi: string;
  keyFigures: string[];
  globalImpactScore: number; // 1 to 10 scale
  verification: VerificationInfo;
  parallelConnections: string[]; // Related parallel event IDs
  tags: string[];
}

export interface SynchronicSnapshot {
  targetYear: number;
  targetYearDisplay: string;
  timeWindowYears: number; // e.g. ±5 years
  regionalEvents: Record<Region, HistoricalEvent[]>;
  totalEventsCount: number;
}

export type ViewMode = 'timeline' | 'matrix' | 'map' | 'comparison';

export interface EraFilter {
  id: string;
  label: string;
  labelVi: string;
  startYear: number;
  endYear: number;
}
