import React from 'react';
import { Shield, Zap } from 'lucide-react';

interface HeaderProps {
  isConnected: boolean;
  gameStatus: string;
}

export const Header: React.FC<HeaderProps> = ({ isConnected, gameStatus }) => {
  return (
    <div className="glass-effect rounded-xl p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg neon-glow">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold neon-text">EXTERNYTIX</h1>
              <p className="text-gray-400">Advanced CS:GO Enhancement Suite</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full status-indicator ${
              isConnected ? 'bg-green-500' : 'bg-red-500'
            }`}></div>
            <span className="text-sm font-medium">{gameStatus}</span>
          </div>
          
          <div className="flex items-center space-x-2 bg-gray-800/50 rounded-lg px-4 py-2">
            <Zap className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-medium">v2.1.0</span>
          </div>
        </div>
      </div>
    </div>
  );
};