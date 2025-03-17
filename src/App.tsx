import './App.css';
import HorizontalField from './components/HorizontalField';

function App() {
  return (
    <div className='flex flex-col justify-center items-center h-screen space-y-8 bg-green-600'>
      <h1 className='text-white text-3xl font-bold'>Rugby Field Viewer</h1>

      <HorizontalField />
    </div>
  );
}

export default App;
