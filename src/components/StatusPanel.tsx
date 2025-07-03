import React from 'react';
import { Activity, Target, Eye, Settings } from 'lucide-react';

interface StatusPanelProps {
  isConnected: boolean;
  gameStatus: string;
}

export const StatusPanel: React.FC<StatusPanelProps> = ({ isConnected, gameStatus }) => {
  const stats = [
    { label: 'Aimbot Status', value: isConnected ? 'Active' : 'Inactive', icon: Target, color: isConnected ? 'text-green-500' : 'text-red-500' },
    { label: 'ESP Status', value: 'Ready', icon: Eye, color: 'text-blue-500' },
    { label: 'Triggerbot', value: 'Disabled', icon: Activity, color: 'text-gray-500' },
    { label: 'Config', value: 'Default', icon: Settings, color: 'text-purple-500' }
  ];

  return (
    <div className="space-y-4">
      <div className="glass-effect rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4 text-green-400">System Status</h2>
        
        <div className="space-y-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
              <div className="flex items-center space-x-3">
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
                <span className="text-sm font-medium text-gray-300">{stat.label}</span>
              </div>
              <span className={`text-sm font-semibold ${stat.color}`}>{stat.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="glass-effect rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4 text-green-400">Performance</h2>
        
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-300">CPU Usage</span>
              <span className="text-green-400">12%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{ width: '12%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-300">Memory</span>
              <span className="text-blue-400">45MB</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{ width: '25%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-300">FPS Impact</span>
              <span className="text-yellow-400">~2 FPS</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full" style={{ width: '8%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};