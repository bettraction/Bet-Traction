import { Routes, Route } from 'react-router-dom';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b border-gray-200 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">BT</span>
          </div>
          <span className="text-xl font-bold text-gray-900">BetTraction</span>
        </div>
        <ConnectButton />
      </nav>
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
