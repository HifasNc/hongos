
import React from 'react';

// Checkmark Icon for completed steps
const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

// Stage Icons
const MushroomIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 2a6 6 0 00-6 6v1.25a.75.75 0 00.75.75h10.5a.75.75 0 00.75-.75V8a6 6 0 00-6-6zM3.25 11.5a.75.75 0 01.75-.75h12a.75.75 0 010 1.5H4a.75.75 0 01-.75-.75zM6 14a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zM14 14a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1z" />
    </svg>
);

const BeakerIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
      <path d="M4 3a.75.75 0 00-1.5 0v1.5A1.75 1.75 0 004.25 6.25V15.5A2.5 2.5 0 006.75 18h6.5a2.5 2.5 0 002.5-2.5V6.25A1.75 1.75 0 0017.25 4.5V3a.75.75 0 00-1.5 0v1.5a.25.25 0 01-.25.25H4.5a.25.25 0 01-.25-.25V3z"/>
      <path d="M4.5 7a.5.5 0 01.5-.5h10a.5.5 0 010 1H5a.5.5 0 01-.5-.5z" />
    </svg>
);

const CalendarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.75 3a.75.75 0 01.75.75V4h7V3.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V3.75A.75.75 0 015.75 3zM4.5 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75z" clipRule="evenodd" />
    </svg>
);

const HarvestIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
      <path d="M15.5 2.5a3 3 0 00-1.782 5.396V15.5a2 2 0 01-2 2h-3.436a2 2 0 01-2-2V7.896A3 3 0 104.5 2.5h11zM6 6.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm8.5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
);

interface ProgressStepperProps {
  currentStage: 'preparation' | 'inoculation' | 'incubation' | 'fructification';
}

const STAGES: ProgressStepperProps['currentStage'][] = ['preparation', 'inoculation', 'incubation', 'fructification'];
const STAGE_LABELS: Record<ProgressStepperProps['currentStage'], string> = {
  preparation: 'Preparación',
  inoculation: 'Inoculación',
  incubation: 'Incubación',
  fructification: 'Fructificación',
};

const STAGE_ICONS: Record<ProgressStepperProps['currentStage'], React.FC<{ className?: string }>> = {
  preparation: MushroomIcon,
  inoculation: BeakerIcon,
  incubation: CalendarIcon,
  fructification: HarvestIcon,
};

const ProgressStepper: React.FC<ProgressStepperProps> = ({ currentStage }) => {
  const currentStageIndex = STAGES.indexOf(currentStage);

  return (
    <nav aria-label="Progress" className="mb-8">
      <ol role="list" className="flex items-center">
        {STAGES.map((stage, stageIdx) => {
          const isCompleted = stageIdx < currentStageIndex;
          const isCurrent = stageIdx === currentStageIndex;
          const StageIcon = STAGE_ICONS[stage];
          
          return (
            <li key={stage} className={`relative ${stageIdx !== STAGES.length - 1 ? 'flex-1' : ''}`}>
              <div className="flex items-center text-sm font-medium">
                {/* Circle */}
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                    isCompleted ? 'bg-emerald-600' : isCurrent ? 'border-2 border-orange-600 bg-white' : 'border-2 border-stone-300 bg-white'
                  }`}
                >
                  {isCompleted ? (
                    <CheckIcon className="h-6 w-6 text-white" />
                  ) : isCurrent ? (
                    <span className="text-orange-600">{stageIdx + 1}</span>
                  ) : (
                    <span className="text-stone-500">{stageIdx + 1}</span>
                  )}
                </span>
                {/* Label */}
                <span className={`ml-4 hidden md:flex items-center ${isCurrent ? 'text-orange-600 font-semibold' : isCompleted ? 'text-stone-900' : 'text-stone-500'}`}>
                  <StageIcon className="h-5 w-5 mr-2 shrink-0" />
                  {STAGE_LABELS[stage]}
                </span>
              </div>

              {/* Connector */}
              {stageIdx !== STAGES.length - 1 ? (
                <div 
                  className={`absolute left-5 top-1/2 -ml-px mt-0.5 h-0.5 w-full ${isCompleted ? 'bg-emerald-600' : 'bg-stone-300'}`} 
                  aria-hidden="true"
                />
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default ProgressStepper;
