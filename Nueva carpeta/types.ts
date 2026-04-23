
export interface Substrate {
  id: string;
  type: string;
  dryWeight: string;
  nutrients: string;
  combinationPercentage: string;
  hydrationTime: string;
  sterilizationType: string;
  sterilizationHours: string;
  sterilizationMinutes: string;
}

export interface PreparationBatch {
  date: string;
  time: string;
  weather: string;
  mushroomType: string;
  strain: string;
  substrates: Substrate[];
}

export interface InoculationBatch {
  inoculationDate: string;
  inoculationTime: string;
  inoculationMethod: string;
  spawnType: string;
  spawnSubstrateRatio: string;
  batchNumber: string;
  numberOfJars: string;
}

export interface DailyJarLog {
  jarNumber: number;
  contamination: 'yes' | 'no';
  contaminationType: string;
  discarded: boolean;
  statusOk: boolean;
}

export interface DailyBatchLog {
  id: string;
  date: string;
  temperature: string;
  humidity: string;
  jarLogs: DailyJarLog[];
}

export interface IncubationBatch {
  startDate: string;
  startTime: string;
  dailyLogs: DailyBatchLog[];
}

export interface HarvestLog {
  id: string;
  harvestDate: string;
  flushNumber: string;
  batchNumber: string;
  jarNumber: string;
  weight: string;
  qualityNotes: string;
}

export interface FructificationBatch {
  fruitingStartDate: string;
  fruitingStartTime: string;
  fruitingMethod: string;
  casingType: string;
  inductionStartDate: string;
  inductionStartTime: string;
  inductionMethod: string;
  exposureTime: string;
  inductionApplicationTime: string;
  harvests: HarvestLog[];
}

export interface CompletedBatchLog {
  id: string;
  completedAt: string;
  preparation: PreparationBatch;
  inoculation: InoculationBatch;
  incubation: IncubationBatch;
  fructification: FructificationBatch;
}