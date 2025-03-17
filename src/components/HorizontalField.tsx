import React from 'react';

const HorizontalField: React.FC = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-green-600'>
      <div className='relative w-[800px] h-[400px] bg-green-700 border-4 border-white rounded-lg'>
        {/* Rugby Field SVG */}
        <svg viewBox='-10 0 120 50' className='w-full h-full'>
          {/* Field Outline */}
          <rect x='0' y='0' width='100' height='50' fill='green' stroke='white' strokeWidth='0.1' />

          {/* Dead Ball Zones */}
          <rect x='-10' y='0' width='10' height='50' fill='green' stroke='white' strokeWidth='0.1' />
          <rect x='100' y='0' width='10' height='50' fill='green' stroke='white' strokeWidth='0.1' />

          {/* Halfway Line */}
          <line x1='50' y1='0' x2='50' y2='50' stroke='white' strokeWidth='0.5' />

          {/* 10m Lines */}
          <line x1='40' y1='0' x2='40' y2='50' stroke='white' strokeWidth='0.1' strokeDasharray='2,2' />
          <line x1='60' y1='0' x2='60' y2='50' stroke='white' strokeWidth='0.1' strokeDasharray='2,2' />

          {/* 22m Lines */}
          <line x1='22' y1='0' x2='22' y2='50' stroke='white' strokeWidth='0.4' />
          <line x1='78' y1='0' x2='78' y2='50' stroke='white' strokeWidth='0.4' />

          {/* 5m Dotted Lineout Lines */}
          <line x1='0' y1='5' x2='100' y2='5' stroke='white' strokeWidth='0.1' strokeDasharray='2,2' />
          <line x1='0' y1='45' x2='100' y2='45' stroke='white' strokeWidth='0.1' strokeDasharray='2,2' />

          {/* 15m Dotted Lineout Lines */}
          <line x1='0' y1='15' x2='100' y2='15' stroke='white' strokeWidth='0.1' strokeDasharray='2,2' />
          <line x1='0' y1='35' x2='100' y2='35' stroke='white' strokeWidth='0.1' strokeDasharray='2,2' />

          {/* Try Lines */}
          <line x1='0' y1='0' x2='0' y2='50' stroke='white' strokeWidth='0.5' />
          <line x1='100' y1='0' x2='100' y2='50' stroke='white' strokeWidth='0.5' />

          {/* Goalpost Markers */}
          <line x1='0' y1='22.5' x2='-3' y2='22.5' stroke='white' strokeWidth='0.5' />
          <line x1='0' y1='27.5' x2='-3' y2='27.5' stroke='white' strokeWidth='0.5' />

          <line x1='100' y1='22.5' x2='103' y2='22.5' stroke='white' strokeWidth='0.5' />
          <line x1='100' y1='27.5' x2='103' y2='27.5' stroke='white' strokeWidth='0.5' />

          {/* Center Circle (Kickoff Mark) */}
          <circle cx='50' cy='25' r='0.5' fill='white' />
        </svg>
      </div>
    </div>
  );
};

export default HorizontalField;
