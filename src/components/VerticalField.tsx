import React from 'react';

const VerticalField: React.FC = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-green-600'>
      <div className='relative w-[800px] h-[400px] bg-green-700 border-4 border-white rounded-lg'>
        {/* Rugby Field SVG (Horizontal) */}
        <svg viewBox='0 -10 50 120' className='w-full h-full'>
          {/* Field Outline */}
          <rect x='0' y='0' width='50' height='100' fill='green' stroke='white' strokeWidth='0.1' />

          {/* Dead Ball Zones */}
          <rect x='0' y='-10' width='50' height='10' fill='green' stroke='white' strokeWidth='0.1' strokeDasharray='2,2' />
          <rect x='0' y='100' width='50' height='10' fill='green' stroke='white' strokeWidth='0.1' strokeDasharray='2,2' />

          {/* Halfway Line */}
          <line x='0' y='50' x2='50' y2='50' stroke='white' strokeWidth='0.5' />

          {/* 10m Lines */}
          <line x='0' y='40' x2='50' y2='40' stroke='white' strokeWidth='0.1' strokeDasharray='2,2' />
          <line x='0' y='60' x2='50' y2='60' stroke='white' strokeWidth='0.1' strokeDasharray='2,2' />

          {/* 22m Lines */}
          <line x='0' y='22' x2='50' y2='22' stroke='white' strokeWidth='0.4' />
          <line x='0' y='78' x2='50' y2='78' stroke='white' strokeWidth='0.4' />

          {/* 5m Dotted Lineout Lines */}
          <line x='5' y='0' x2='5' y2='100' stroke='white' strokeWidth='0.1' strokeDasharray='2,2' />
          <line x='45' y='0' x2='45' y2='100' stroke='white' strokeWidth='0.1' strokeDasharray='2,2' />

          {/* 15m Dotted Lineout Lines */}
          <line x='15' y='0' x2='15' y2='100' stroke='white' strokeWidth='0.1' strokeDasharray='2,2' />
          <line x='35' y='0' x2='35' y2='100' stroke='white' strokeWidth='0.1' strokeDasharray='2,2' />

          {/* Try Lines */}
          <line x='0' y='0' x2='50' y2='0' stroke='white' strokeWidth='0.5' />
          <line x='0' y='100' x2='50' y2='100' stroke='white' strokeWidth='0.5' />

          {/* Goalpost Markers */}
          <line x='22.5' y='0' x2='22.5' y2='-3' stroke='white' strokeWidth='0.5' />
          <line x='27.5' y='0' x2='27.5' y2='-3' stroke='white' strokeWidth='0.5' />

          <line x='22.5' y='100' x2='22.5' y2='103' stroke='white' strokeWidth='0.5' />
          <line x='27.5' y='100' x2='27.5' y2='103' stroke='white' strokeWidth='0.5' />

          {/* Center Circle (Kickoff Mark) */}
          <circle cx='25' cy='50' r='0.5' fill='white' />
        </svg>
      </div>
    </div>
  );
};

export default VerticalField;
