
import React, { useState, useEffect, useCallback } from 'react';
import type { 
  PreparationBatch, 
  Substrate, 
  InoculationBatch, 
  DailyBatchLog, 
  DailyJarLog, 
  IncubationBatch, 
  FructificationBatch, 
  HarvestLog, 
  CompletedBatchLog 
} from './types';
import InputField from './components/InputField';
import SubstrateInput from './components/SubstrateInput';
import ProgressStepper from './components/ProgressStepper';
import AutocompleteInputField from './components/AutocompleteInputField';

// Funciones para manejo de estado persistente
const loadState = <T,>(key: string, defaultValue: T): T => {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : defaultValue;
  } catch {
    return defaultValue;
  }
};

const mushroomData: Record<string, string[]> = {
  'Pleurotus ostreatus': ['Blue Oyster', 'Pink Oyster', 'Golden Oyster', 'King Oyster'],
  'Lentinula edodes': ['Shiitake 3782', 'Snow Cap', 'West Wind'],
  'Agaricus bisporus': ['White Button', 'Crimini', 'Portobello'],
  'Ganoderma lucidum': ['Reishi G. lucidum', 'Reishi G. tsugae'],
  'Hericium erinaceus': ["Lion's Mane HE1"],
};

const INITIAL_PREP = (): PreparationBatch => ({
  date: new Date().toISOString().split('T')[0],
  time: new Date().toTimeString().split(' ')[0].substring(0, 5),
  weather: '',
  mushroomType: '',
  strain: '',
  substrates: [],
});

const INITIAL_INOC = (): InoculationBatch => ({
  inoculationDate: new Date().toISOString().split('T')[0],
  inoculationTime: new Date().toTimeString().split(' ')[0].substring(0, 5),
  inoculationMethod: '',
  spawnType: '',
  spawnSubstrateRatio: '',
  batchNumber: '',
  numberOfJars: '',
});

const INITIAL_INCUB = (): IncubationBatch => ({
  startDate: new Date().toISOString().split('T')[0],
  startTime: new Date().toTimeString().split(' ')[0].substring(0, 5),
  dailyLogs: [],
});

const INITIAL_FRUC = (): FructificationBatch => ({
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
});

function App() {
  const [view, setView] = useState<'dashboard' | 'active'>(() => loadState('mushroom_view', 'dashboard'));
  const [stage, setStage] = useState<'preparation' | 'inoculation' | 'incubation' | 'fructification'>(() => loadState('mushroom_stage', 'preparation'));
  
  const [prepBatch, setPrepBatch] = useState<PreparationBatch>(() => loadState('mushroom_prep', INITIAL_PREP()));
  const [inocBatch, setInocBatch] = useState<InoculationBatch>(() => loadState('mushroom_inoc', INITIAL_INOC()));
  const [incBatch, setIncBatch] = useState<IncubationBatch>(() => loadState('mushroom_inc', INITIAL_INCUB()));
  const [fruBatch, setFruBatch] = useState<FructificationBatch>(() => loadState('mushroom_fru', INITIAL_FRUC()));
  const [history, setHistory] = useState<CompletedBatchLog[]>(() => loadState('mushroom_history', []));

  useEffect(() => {
    localStorage.setItem('mushroom_view', JSON.stringify(view));
    localStorage.setItem('mushroom_stage', JSON.stringify(stage));
    localStorage.setItem('mushroom_prep', JSON.stringify(prepBatch));
    localStorage.setItem('mushroom_inoc', JSON.stringify(inocBatch));
    localStorage.setItem('mushroom_inc', JSON.stringify(incBatch));
    localStorage.setItem('mushroom_fru', JSON.stringify(fruBatch));
    localStorage.setItem('mushroom_history', JSON.stringify(history));
  }, [view, stage, prepBatch, inocBatch, incBatch, fruBatch, history]);

  const resetBatch = () => {
    if (confirm('¿Estás seguro de que quieres iniciar un NUEVO lote? Se borrarán los datos del lote actual que no ha sido finalizado.')) {
      setPrepBatch(INITIAL_PREP());
      setInocBatch(INITIAL_INOC());
      setIncBatch(INITIAL_INCUB());
      setFruBatch(INITIAL_FRUC());
      setStage('preparation');
      setView('active');
    }
  };

  const archiveBatch = () => {
    const completed: CompletedBatchLog = {
      id: crypto.randomUUID(),
      completedAt: new Date().toISOString(),
      preparation: prepBatch,
      inoculation: inocBatch,
      incubation: incBatch,
      fructification: fruBatch
    };
    setHistory([completed, ...history]);
    // Limpiar lote actual
    setPrepBatch(INITIAL_PREP());
    setInocBatch(INITIAL_INOC());
    setIncBatch(INITIAL_INCUB());
    setFruBatch(INITIAL_FRUC());
    setStage('preparation');
    setView('dashboard');
    alert('¡Lote guardado en el historial con éxito!');
  };

  const addSubstrate = () => {
    const newSub: Substrate = {
      id: crypto.randomUUID(),
      type: '',
      dryWeight: '',
      nutrients: '',
      combinationPercentage: '0',
      hydrationTime: '',
      sterilizationType: '',
      sterilizationHours: '',
      sterilizationMinutes: '',
    };
    setPrepBatch({ ...prepBatch, substrates: [...prepBatch.substrates, newSub] });
  };

  const updateSubstrate = (index: number, field: keyof Substrate, value: string) => {
    const newSubstrates = [...prepBatch.substrates];
    newSubstrates[index] = { ...newSubstrates[index], [field]: value };
    setPrepBatch({ ...prepBatch, substrates: newSubstrates });
  };

  const removeSubstrate = (index: number) => {
    setPrepBatch({ ...prepBatch, substrates: prepBatch.substrates.filter((_, i) => i !== index) });
  };

  // Vistas de Etapa
  const renderPreparation = () => (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField id="date" label="Fecha" type="date" value={prepBatch.date} onChange={(e) => setPrepBatch({...prepBatch, date: e.target.value})} />
        <InputField id="time" label="Hora" type="time" value={prepBatch.time} onChange={(e) => setPrepBatch({...prepBatch, time: e.target.value})} />
        <AutocompleteInputField id="mushroom" label="Hongo" suggestions={Object.keys(mushroomData)} value={prepBatch.mushroomType} onChange={(e) => setPrepBatch({...prepBatch, mushroomType: e.target.value})} />
        <InputField id="strain" label="Cepa" value={prepBatch.strain} onChange={(e) => setPrepBatch({...prepBatch, strain: e.target.value})} placeholder="Ej: Cepa-33" />
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-black uppercase text-stone-800">Sustratos</h2>
          <button onClick={addSubstrate} className="bg-[#f2a641] px-4 py-2 rounded-xl font-bold flex items-center gap-2 shadow-sm border-2 border-[#040214]/10 hover:bg-[#d98b2c]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" /></svg>
            Añadir Sustrato
          </button>
        </div>
        {prepBatch.substrates.length > 0 ? (
          prepBatch.substrates.map((s, i) => (
            <SubstrateInput 
              key={s.id} 
              substrate={s} 
              index={i} 
              onUpdate={updateSubstrate} 
              onRemove={removeSubstrate}
              substrateTypeSuggestions={['Paja', 'Serrín', 'Fibra de Coco', 'Vermiculita', 'Yeso']}
              sterilizationTypeSuggestions={['Autoclave', 'Pasteurización', 'Olla a Presión']}
            />
          ))
        ) : (
          <div className="p-10 border-2 border-dashed border-stone-300 rounded-2xl text-center text-stone-400 font-bold italic">
            No hay sustratos añadidos. Pulsa el botón para empezar.
          </div>
        )}
      </div>

      <button onClick={() => setStage('inoculation')} className="w-full bg-emerald-600 text-white py-5 rounded-2xl font-black text-xl shadow-lg hover:bg-emerald-700 transition-all uppercase tracking-widest">
        Continuar a Inoculación
      </button>
    </div>
  );

  const renderInoculation = () => (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField id="bn" label="ID del Lote" value={inocBatch.batchNumber} onChange={(e) => setInocBatch({...inocBatch, batchNumber: e.target.value})} placeholder="Ej: LOTE-001" />
        <InputField id="nj" label="Nº de Unidades" type="number" value={inocBatch.numberOfJars} onChange={(e) => setInocBatch({...inocBatch, numberOfJars: e.target.value})} />
        <AutocompleteInputField id="im" label="Método" suggestions={['Grano a Sustrato', 'Inóculo Líquido']} value={inocBatch.inoculationMethod} onChange={(e) => setInocBatch({...inocBatch, inoculationMethod: e.target.value})} />
        <InputField id="ratio" label="Ratio Inóculo" value={inocBatch.spawnSubstrateRatio} onChange={(e) => setInocBatch({...inocBatch, spawnSubstrateRatio: e.target.value})} placeholder="Ej: 1:5" />
      </div>
      <div className="flex gap-4">
        <button onClick={() => setStage('preparation')} className="flex-1 bg-stone-400 text-white py-4 rounded-xl font-bold uppercase">Volver</button>
        <button onClick={() => setStage('incubation')} className="flex-2 bg-emerald-600 text-white py-4 rounded-xl font-black uppercase shadow-lg">Siguiente: Incubación</button>
      </div>
    </div>
  );

  const renderIncubation = () => (
    <div className="space-y-8">
      <div className="bg-orange-50 border-2 border-orange-200 p-6 rounded-2xl">
        <h3 className="text-orange-800 font-black uppercase text-center">Lote en Proceso de Incubación</h3>
        <p className="text-orange-600 text-center text-sm font-bold">Lote: {inocBatch.batchNumber || 'Sin ID'}</p>
      </div>
      <div className="flex gap-4">
        <button onClick={() => setStage('inoculation')} className="flex-1 bg-stone-400 text-white py-4 rounded-xl font-bold uppercase">Volver</button>
        <button onClick={() => setStage('fructification')} className="flex-2 bg-emerald-600 text-white py-4 rounded-xl font-black uppercase shadow-lg">Siguiente: Fructificación</button>
      </div>
    </div>
  );

  const renderFructification = () => (
    <div className="space-y-8 text-center">
      <h2 className="text-2xl font-black uppercase text-stone-700">Etapa Final de Cosecha</h2>
      <button onClick={archiveBatch} className="w-full bg-emerald-700 text-white py-8 rounded-3xl font-black text-3xl shadow-2xl hover:bg-emerald-800 transition-all uppercase tracking-tighter">
        Finalizar Lote Completo
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-stone-200 text-[#040214] font-sans p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Cabecera Estilo App */}
        <header className="flex justify-between items-center mb-10 bg-[#040214] p-6 rounded-3xl shadow-xl text-white">
          <div>
            <h1 className="text-2xl font-black tracking-tight leading-none">MUSHROOM LOG</h1>
            <p className="text-emerald-400 text-[10px] font-bold tracking-[0.2em] uppercase">Control de Producción</p>
          </div>
          <button 
            onClick={() => setView(view === 'dashboard' ? 'active' : 'dashboard')}
            className="bg-[#f2a641] text-[#040214] px-5 py-2 rounded-xl font-black text-xs uppercase shadow-lg hover:scale-105 transition-transform"
          >
            {view === 'dashboard' ? 'Ver Lote Activo' : 'Panel de Control'}
          </button>
        </header>

        {view === 'dashboard' ? (
          <div className="space-y-8 animate-in fade-in duration-500">
            {/* Tarjeta de Acción Principal */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border-4 border-[#040214]/5 text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
              </div>
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">¿Nuevo Cultivo?</h2>
              <p className="text-stone-500 font-medium mb-8">Comienza un nuevo registro desde la etapa de preparación.</p>
              <button 
                onClick={resetBatch}
                className="w-full bg-emerald-600 text-white py-5 rounded-2xl font-black text-xl uppercase shadow-xl hover:bg-emerald-700 transition-all"
              >
                Iniciar Nuevo Lote
              </button>
            </div>

            {/* Listado de Historial */}
            <div>
              <h3 className="text-lg font-black uppercase text-stone-500 mb-4 px-4">Historial Reciente ({history.length})</h3>
              {history.length > 0 ? (
                <div className="grid grid-cols-1 gap-4">
                  {history.map(item => (
                    <div key={item.id} className="bg-white/70 p-5 rounded-2xl border border-stone-300 flex justify-between items-center backdrop-blur-sm">
                      <div>
                        <p className="font-black text-lg">Lote: {item.inoculation.batchNumber || 'S/N'}</p>
                        <p className="text-xs text-stone-500 font-bold uppercase">{item.preparation.mushroomType} • {new Date(item.completedAt).toLocaleDateString()}</p>
                      </div>
                      <button onClick={() => setHistory(history.filter(h => h.id !== item.id))} className="text-red-400 hover:text-red-600 p-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" /></svg>
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-10 bg-white/30 rounded-3xl border-2 border-dashed border-stone-300 text-center italic text-stone-400 font-bold">
                  El historial está vacío.
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="bg-stone-100 p-6 md:p-10 rounded-[3rem] shadow-2xl border-4 border-white animate-in slide-in-from-bottom duration-500">
            <ProgressStepper currentStage={stage} />
            <div className="mt-12">
              {stage === 'preparation' && renderPreparation()}
              {stage === 'inoculation' && renderInoculation()}
              {stage === 'incubation' && renderIncubation()}
              {stage === 'fructification' && renderFructification()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
