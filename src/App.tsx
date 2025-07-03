import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { StatusPanel } from './components/StatusPanel';
import { AimbotSettings } from './components/AimbotSettings';
import { VisualsSettings } from './components/VisualsSettings';
import { MiscSettings } from './components/MiscSettings';
import { ConfigManager } from './components/ConfigManager';

function App() {
  const [activeTab, setActiveTab] = useState('aimbot');
  const [isConnected, setIsConnected] = useState(false);
  const [gameStatus, setGameStatus] = useState('Not Detected');

  useEffect(() => {
    // Simulate connection status
    const interval = setInterval(() => {
      setIsConnected(Math.random() > 0.3);
      setGameStatus(isConnected ? 'CS:GO Detected' : 'Not Detected');
    }, 3000);

    return () => clearInterval(interval);
  }, [isConnected]);

  const tabs = [
    { id: 'aimbot', label: 'Aimbot', icon: '🎯' },
    { id: 'visuals', label: 'Visuals', icon: '👁️' },
    { id: 'misc', label: 'Misc', icon: '⚙️' },
    { id: 'config', label: 'Config', icon: '💾' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'aimbot':
        return <AimbotSettings />;
      case 'visuals':
        return <VisualsSettings />;
      case 'misc':
        return <MiscSettings />;
      case 'config':
        return <ConfigManager />;
      default:
        return <AimbotSettings />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 cyber-grid">
      <div className="container mx-auto px-4 py-6">
        <Header isConnected={isConnected} gameStatus={gameStatus} />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
          <div className="lg:col-span-1">
            <StatusPanel isConnected={isConnected} gameStatus={gameStatus} />
          </div>
          
          <div className="lg:col-span-3">
            <div className="glass-effect rounded-xl p-6">
              {/* Tab Navigation */}
              <div className="flex space-x-1 mb-6 bg-gray-800/50 rounded-lg p-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-md transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white neon-glow'
                        : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                    }`}
                  >
                    <span className="text-lg">{tab.icon}</span>
                    <span className="font-medium">{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="min-h-[500px]">
                {renderTabContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;