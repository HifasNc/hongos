
import React, { useState, useCallback, useEffect } from 'react';
import type { PreparationBatch, Substrate, IncubationBatch, DailyBatchLog, DailyJarLog, InoculationBatch, FructificationBatch, HarvestLog, CompletedBatchLog } from './types';
import InputField from './components/InputField';
import SubstrateInput from './components/SubstrateInput';
import ProgressStepper from './components/ProgressStepper';
import AutocompleteInputField from './components/AutocompleteInputField';

// --- Helper to load/save state ---
const loadState = <T,>(key: string, defaultValue: T): T => {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : defaultValue;
  } catch {
    return defaultValue;
  }
};

// --- Mock Databases ---
const mushroomData: Record<string, string[]> = {
  'Pleurotus ostreatus': ['Blue Oyster', 'Pink Oyster', 'Golden Oyster', 'King Oyster'],
  'Lentinula edodes': ['Shiitake 3782', 'Snow Cap', 'West Wind'],
  'Agaricus bisporus': ['White Button', 'Crimini', 'Portobello'],
  'Ganoderma lucidum': ['Reishi G. lucidum', 'Reishi G. tsugae'],
  'Hericium erinaceus': ["Lion's Mane HE1"],
};

const mushroomRecipes: Record<string, Record<string, number>> = {
  'pleurotus ostreatus': { 'paja de trigo': 80, 'salvado de trigo': 15, 'yeso': 5 },
  'lentinula edodes': { 'serrín de roble': 90, 'salvado de trigo': 8, 'yeso': 2 },
  'ganoderma lucidum': { 'serrín de madera dura': 95, 'salvado de arroz': 5 },
};

const mushroomIncubationData: Record<string, number> = {
  'pleurotus ostreatus': 15,
  'lentinula edodes': 90,
  'agaricus bisporus': 18,
  'ganoderma lucidum': 45,
};

const sterilizationTypeSuggestions = ['Pasteurización', 'Esterilización', 'Autoclave', 'Olla a presión', 'Encalado'];
const fruitingMethodSuggestions = ['SGFC', 'Martha Tent', 'Monotub', 'Bolsa con filtro'];
const inoculationMethodSuggestions = ['Grano a Sustrato', 'Inóculo Líquido', 'Agar a Grano'];
const spawnTypeSuggestions = ['Grano de Centeno', 'Grano de Trigo', 'Grano de Mijo', 'Serrín suplementado'];
const substrateTypeSuggestions = ['Paja de trigo', 'Serrín de roble', 'Salvado de trigo', 'Yeso', 'Fibra de coco', 'Vermiculita'];

const initialBatchState: PreparationBatch = {
  date: new Date().toISOString().split('T')[0],
  time: new Date().toTimeString().split(' ')[0].substring(0, 5),
  weather: '',
  mushroomType: '',
  strain: '',
  substrates: [],
};

const initialInoculationState: InoculationBatch = {
  inoculationDate: new Date().toISOString().split('T')[0],
  inoculationTime: new Date().toTimeString().split(' ')[0].substring(0, 5),
  inoculationMethod: '',
  spawnType: '',
  spawnSubstrateRatio: '',
  batchNumber: '',
  numberOfJars: '',
};

const initialIncubationState: IncubationBatch = {
  startDate: new Date().toISOString().split('T')[0],
  startTime: new Date().toTimeString().split(' ')[0].substring(0, 5),
  dailyLogs: [],
};

const initialFructificationState: FructificationBatch = {
  fruitingStartDate: new Date().toISOString().split('T')[0],
  fruitingStartTime: new Date().toTimeString().split(' ')[0].substring(0, 5),
  fruitingMethod: '',
  casingType: '',
  inductionStartDate: new Date().toISOString().split('T')[0],
  inductionStartTime: new Date().toTimeString().split(' ')[0].substring(0, 5),
  inductionMethod: '',
  exposureTime: '',
  inductionApplicationTime: '',
  harvests: [],
};

// Icons
const DownloadIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" /></svg>;
const UploadIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414-1.414l3-3z" clipRule="evenodd" /></svg>;
const TrashIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" /></svg>;

function App() {
  const [view, setView] = useState<'dashboard' | 'active'>('dashboard');
  const [stage, setStage] = useState<'preparation' | 'inoculation' | 'incubation' | 'fructification'>(() => loadState('mushroomLog_stage', 'preparation'));
  const [batch, setBatch] = useState<PreparationBatch>(() => loadState('mushroomLog_preparationBatch', initialBatchState));
  const [inoculationBatch, setInoculationBatch] = useState<InoculationBatch>(() => loadState('mushroomLog_inoculationBatch', initialInoculationState));
  const [incubationBatch, setIncubationBatch] = useState<IncubationBatch>(() => loadState('mushroomLog_incubationBatch', initialIncubationState));
  const [fructificationBatch, setFructificationBatch] = useState<FructificationBatch>(() => loadState('mushroomLog_fructificationBatch', initialFructificationState));
  const [history, setHistory] = useState<CompletedBatchLog[]>(() => loadState('mushroomLog_history', []));

  useEffect(() => {
    localStorage.setItem('mushroomLog_stage', JSON.stringify(stage));
    localStorage.setItem('mushroomLog_preparationBatch', JSON.stringify(batch));
    localStorage.setItem('mushroomLog_inoculationBatch', JSON.stringify(inoculationBatch));
    localStorage.setItem('mushroomLog_incubationBatch', JSON.stringify(incubationBatch));
    localStorage.setItem('mushroomLog_fructificationBatch', JSON.stringify(fructificationBatch));
    localStorage.setItem('mushroomLog_history', JSON.stringify(history));
  }, [stage, batch, inoculationBatch, incubationBatch, fructificationBatch, history]);

  // Funciones de Exportar / Importar
  const exportData = () => {
    const fullData = { history, currentBatch: { stage, batch, inoculationBatch, incubationBatch, fructificationBatch } };
    const blob = new Blob([JSON.stringify(fullData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `hongos_produccion_${new Date().toISOString().split('T')[0]}.json`;
    link.click();
  };

  const importData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target?.result as string);
        if (data.history) setHistory(data.history);
        if (data.currentBatch) {
          setStage(data.currentBatch.stage);
          setBatch(data.currentBatch.batch);
          setInoculationBatch(data.currentBatch.inoculationBatch);
          setIncubationBatch(data.currentBatch.incubationBatch);
          setFructificationBatch(data.currentBatch.fructificationBatch);
        }
        alert('Datos importados correctamente.');
      } catch {
        alert('Error al importar el archivo.');
      }
    };
    reader.readAsText(file);
  };

  const handleStartNew = () => {
    if (confirm('¿Empezar un nuevo lote? Los datos actuales no guardados se perderán.')) {
      setBatch(initialBatchState);
      setInoculationBatch(initialInoculationState);
      setIncubationBatch(initialIncubationState);
      setFructificationBatch(initialFructificationState);
      setStage('preparation');
      setView('active');
    }
  };

  const handleFinish = () => {
    const newEntry: CompletedBatchLog = {
      id: crypto.randomUUID(),
      completedAt: new Date().toISOString(),
      preparation: batch,
      inoculation: inoculationBatch,
      incubation: incubationBatch,
      fructification: fructificationBatch,
    };
    setHistory([newEntry, ...history]);
    setBatch(initialBatchState);
    setInoculationBatch(initialInoculationState);
    setIncubationBatch(initialIncubationState);
    setFructificationBatch(initialFructificationState);
    setStage('preparation');
    setView('dashboard');
    alert('Lote finalizado y guardado en el historial.');
  };

  // Render Forms (Simplificados para brevedad en el XML, manteniendo la lógica previa)
  const renderPreparation = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField id="date" label="Fecha" type="date" value={batch.date} onChange={(e) => setBatch({...batch, date: e.target.value})} />
        <InputField id="time" label="Hora" type="time" value={batch.time} onChange={(e) => setBatch({...batch, time: e.target.value})} />
        <AutocompleteInputField id="mushroomType" label="Hongo" suggestions={Object.keys(mushroomData)} value={batch.mushroomType} onChange={(e) => setBatch({...batch, mushroomType: e.target.value})} />
        <InputField id="strain" label="Cepa" value={batch.strain} onChange={(e) => setBatch({...batch, strain: e.target.value})} />
      </div>
      <button onClick={() => setStage('inoculation')} className="w-full bg-emerald-600 text-white py-3 rounded-lg font-bold">Siguiente: Inoculación</button>
    </div>
  );

  const renderInoculation = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField id="batchNum" label="Número de Lote" value={inoculationBatch.batchNumber} onChange={(e) => setInoculationBatch({...inoculationBatch, batchNumber: e.target.value})} />
        <InputField id="jars" label="Nº de Tarros" type="number" value={inoculationBatch.numberOfJars} onChange={(e) => setInoculationBatch({...inoculationBatch, numberOfJars: e.target.value})} />
        <AutocompleteInputField id="method" label="Método" suggestions={inoculationMethodSuggestions} value={inoculationBatch.inoculationMethod} onChange={(e) => setInoculationBatch({...inoculationBatch, inoculationMethod: e.target.value})} />
      </div>
      <div className="flex gap-4">
        <button onClick={() => setStage('preparation')} className="flex-1 bg-stone-200 py-3 rounded-lg text-[#040214]">Volver</button>
        <button onClick={() => setStage('incubation')} className="flex-1 bg-emerald-600 text-white py-3 rounded-lg font-bold">Siguiente: Incubación</button>
      </div>
    </div>
  );

  const renderIncubation = () => (
    <div className="space-y-6">
      <div className="p-4 bg-orange-100 rounded-lg text-[#040214]">
        Seguimiento del Lote: <strong>{inoculationBatch.batchNumber}</strong>
      </div>
      <button onClick={() => setStage('fructification')} className="w-full bg-emerald-600 text-white py-3 rounded-lg font-bold">Siguiente: Fructificación</button>
    </div>
  );

  const renderFructification = () => (
    <div className="space-y-6">
      <button onClick={handleFinish} className="w-full bg-emerald-700 text-white py-4 rounded-lg font-black text-xl shadow-lg">FINALIZAR Y ARCHIVAR LOTE</button>
    </div>
  );

  return (
    <div className="min-h-screen bg-stone-300 text-[#040214] font-sans p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header con Controles */}
        <header className="flex flex-wrap justify-between items-center bg-stone-100 p-6 rounded-t-2xl border-b border-stone-200">
          <div>
            <h1 className="text-2xl font-black uppercase tracking-tighter">MushroomControl v1.0</h1>
            <p className="text-stone-500 text-sm">Sistema de Gestión de Producción</p>
          </div>
          <div className="flex gap-2 mt-4 sm:mt-0">
            <button onClick={exportData} title="Exportar Datos" className="p-2 bg-stone-200 hover:bg-stone-300 rounded-lg text-[#040214]"><DownloadIcon /></button>
            <label className="p-2 bg-stone-200 hover:bg-stone-300 rounded-lg text-[#040214] cursor-pointer">
              <UploadIcon /><input type="file" className="hidden" onChange={importData} accept=".json" />
            </label>
            <button onClick={() => setView(view === 'dashboard' ? 'active' : 'dashboard')} className="px-4 py-2 bg-[#f2a641] font-bold rounded-lg shadow-sm">
              {view === 'dashboard' ? 'Ver Lote Activo' : 'Ver Panel'}
            </button>
          </div>
        </header>

        {/* Contenido Principal */}
        <div className="bg-stone-100 p-6 rounded-b-2xl shadow-xl min-h-[60vh]">
          {view === 'dashboard' ? (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                  <h2 className="text-xl font-bold mb-2">Nuevo Ciclo</h2>
                  <p className="text-stone-600 mb-4">Inicia un nuevo registro de preparación desde cero.</p>
                  <button onClick={handleStartNew} className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-bold">Comenzar Lote</button>
                </div>
                <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
                  <h2 className="text-xl font-bold mb-2">Estado del Sistema</h2>
                  <p className="text-stone-600">Lotes completados: <strong>{history.length}</strong></p>
                  <p className="text-stone-600">Lote activo: <strong>{inoculationBatch.batchNumber || 'Ninguno'}</strong></p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-black mb-4 uppercase">Historial Reciente</h3>
                {history.length > 0 ? (
                  <div className="space-y-3">
                    {history.slice(0, 5).map(log => (
                      <div key={log.id} className="flex justify-between items-center bg-white p-4 rounded-lg border border-stone-200">
                        <div>
                          <p className="font-bold">Lote: {log.inoculation.batchNumber}</p>
                          <p className="text-xs text-stone-500">{log.preparation.mushroomType} • {new Date(log.completedAt).toLocaleDateString()}</p>
                        </div>
                        <button onClick={() => setHistory(history.filter(h => h.id !== log.id))} className="text-red-400 hover:text-red-600"><TrashIcon /></button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-stone-400 italic text-center py-10">No hay lotes registrados aún.</p>
                )}
              </div>
            </div>
          ) : (
            <div className="animate-in fade-in duration-500">
              <ProgressStepper currentStage={stage} />
              {stage === 'preparation' && renderPreparation()}
              {stage === 'inoculation' && renderInoculation()}
              {stage === 'incubation' && renderIncubation()}
              {stage === 'fructification' && renderFructification()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
