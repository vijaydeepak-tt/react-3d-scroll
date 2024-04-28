import { lazy } from 'react';

const Scene = lazy(() => import('./components/Scene'));

function App() {
  return (
    <main className='h-full'>
      <Scene />
    </main>
  );
}

export default App;
