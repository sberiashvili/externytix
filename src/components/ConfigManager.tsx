import React, { useState } from 'react';
import { Save, Upload, Download, Trash2, Plus } from 'lucide-react';

export const ConfigManager: React.FC = () => {
  const [configs, setConfigs] = useState([
    { id: 1, name: 'Default', active: true, created: '2024-01-15' },
    { id: 2, name: 'Legit', active: false, created: '2024-01-14' },
    { id: 3, name: 'Rage', active: false, created: '2024-01-13' },
    { id: 4, name: 'HvH', active: false, created: '2024-01-12' }
  ]);
  
  const [newConfigName, setNewConfigName] = useState('');
  const [showCreateForm, setShowCreateForm] = useState(false);

  const handleCreateConfig = () => {
    if (newConfigName.trim()) {
      const newConfig = {
        id: configs.length + 1,
        name: newConfigName,
        active: false,
        created: new Date().toISOString().split('T')[0]
      };
      setConfigs([...configs, newConfig]);
      setNewConfigName('');
      setShowCreateForm(false);
    }
  };

  const handleLoadConfig = (id: number) => {
    setConfigs(configs.map(config => ({
      ...config,
      active: config.id === id
    })));
  };

  const handleDeleteConfig = (id: number) => {
    if (configs.find(c => c.id === id)?.active) return; // Don't delete active config
    setConfigs(configs.filter(config => config.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-green-400">Configuration Manager</h2>
        <button
          onClick={() => setShowCreateForm(true)}
          className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-200"
        >
          <Plus className="w-4 h-4" />
          <span>New Config</span>
        </button>
      </div>

      {showCreateForm && (
        <div className="bg-gray-800/30 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-4 text-white">Create New Configuration</h3>
          <div className="flex space-x-4">
            <input
              type="text"
              value={newConfigName}
              onChange={(e) => setNewConfigName(e.target.value)}
              placeholder="Configuration name..."
              className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-green-500 focus:outline-none"
            />
            <button
              onClick={handleCreateConfig}
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              Create
            </button>
            <button
              onClick={() => setShowCreateForm(false)}
              className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Saved Configurations</h3>
          
          <div className="space-y-3">
            {configs.map((config) => (
              <div
                key={config.id}
                className={`bg-gray-800/30 rounded-lg p-4 border-2 transition-all duration-200 ${
                  config.active 
                    ? 'border-green-500 bg-green-500/10' 
                    : 'border-gray-700 hover:border-gray-600'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-white flex items-center space-x-2">
                      <span>{config.name}</span>
                      {config.active && (
                        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                          Active
                        </span>
                      )}
                    </h4>
                    <p className="text-sm text-gray-400">Created: {config.created}</p>
                  </div>
                  
                  <div className="flex space-x-2">
                    {!config.active && (
                      <button
                        onClick={() => handleLoadConfig(config.id)}
                        className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        title="Load Config"
                      >
                        <Upload className="w-4 h-4" />
                      </button>
                    )}
                    
                    <button
                      className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                      title="Export Config"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                    
                    {!config.active && (
                      <button
                        onClick={() => handleDeleteConfig(config.id)}
                        className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                        title="Delete Config"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-800/30 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Actions</h3>
            
            <div className="space-y-3">
              <button className="w-full flex items-center space-x-3 bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition-colors">
                <Save className="w-5 h-5" />
                <span>Save Current Settings</span>
              </button>
              
              <button className="w-full flex items-center space-x-3 bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors">
                <Upload className="w-5 h-5" />
                <span>Import Configuration</span>
              </button>
              
              <button className="w-full flex items-center space-x-3 bg-purple-500 text-white p-3 rounded-lg hover:bg-purple-600 transition-colors">
                <Download className="w-5 h-5" />
                <span>Export All Configs</span>
              </button>
            </div>
          </div>

          <div className="bg-gray-800/30 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4 text-white">Configuration Info</h3>
            
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Total Configs:</span>
                <span className="text-white">{configs.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Active Config:</span>
                <span className="text-green-400">
                  {configs.find(c => c.active)?.name || 'None'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Last Modified:</span>
                <span className="text-white">Just now</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Auto-save:</span>
                <span className="text-green-400">Enabled</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/30 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4 text-white">Backup Settings</h3>
            
            <div className="space-y-3">
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="rounded" defaultChecked />
                <span className="text-sm text-gray-300">Auto-backup on exit</span>
              </label>
              
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="rounded" defaultChecked />
                <span className="text-sm text-gray-300">Cloud sync</span>
              </label>
              
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="rounded" />
                <span className="text-sm text-gray-300">Encrypt configs</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};