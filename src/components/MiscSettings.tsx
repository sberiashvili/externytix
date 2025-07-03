import React, { useState } from 'react';
import { ToggleSwitch } from './ui/ToggleSwitch';
import { Slider } from './ui/Slider';
import { Select } from './ui/Select';

export const MiscSettings: React.FC = () => {
  const [settings, setSettings] = useState({
    triggerbot: false,
    bhop: false,
    autoStrafe: false,
    noFlash: false,
    noSmoke: false,
    radarHack: true,
    fovChanger: false,
    triggerbotDelay: 50,
    fovValue: 90,
    triggerbotKey: 'mouse1'
  });

  const updateSetting = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const keyOptions = [
    { value: 'mouse1', label: 'Mouse 1 (Left Click)' },
    { value: 'mouse2', label: 'Mouse 2 (Right Click)' },
    { value: 'shift', label: 'Shift' },
    { value: 'alt', label: 'Alt' },
    { value: 'ctrl', label: 'Ctrl' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-green-400">Miscellaneous Settings</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="bg-gray-800/30 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4 text-white">Combat Features</h3>
            
            <div className="space-y-4">
              <ToggleSwitch
                checked={settings.triggerbot}
                onChange={(checked) => updateSetting('triggerbot', checked)}
                label="Triggerbot"
                description="Auto-fire when crosshair is on enemy"
              />
              
              {settings.triggerbot && (
                <>
                  <Slider
                    label="Triggerbot Delay"
                    value={settings.triggerbotDelay}
                    onChange={(value) => updateSetting('triggerbotDelay', value)}
                    min={0}
                    max={500}
                    step={10}
                    unit="ms"
                  />
                  
                  <Select
                    label="Triggerbot Key"
                    value={settings.triggerbotKey}
                    onChange={(value) => updateSetting('triggerbotKey', value)}
                    options={keyOptions}
                  />
                </>
              )}
            </div>
          </div>

          <div className="bg-gray-800/30 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4 text-white">Movement</h3>
            
            <div className="space-y-4">
              <ToggleSwitch
                checked={settings.bhop}
                onChange={(checked) => updateSetting('bhop', checked)}
                label="Bunny Hop"
                description="Automatic bunny hopping"
              />
              
              <ToggleSwitch
                checked={settings.autoStrafe}
                onChange={(checked) => updateSetting('autoStrafe', checked)}
                label="Auto Strafe"
                description="Automatic air strafing"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-800/30 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4 text-white">Visual Removals</h3>
            
            <div className="space-y-4">
              <ToggleSwitch
                checked={settings.noFlash}
                onChange={(checked) => updateSetting('noFlash', checked)}
                label="No Flash"
                description="Remove flashbang effects"
              />
              
              <ToggleSwitch
                checked={settings.noSmoke}
                onChange={(checked) => updateSetting('noSmoke', checked)}
                label="No Smoke"
                description="Remove smoke grenade effects"
              />
              
              <ToggleSwitch
                checked={settings.radarHack}
                onChange={(checked) => updateSetting('radarHack', checked)}
                label="Radar Hack"
                description="Show all enemies on radar"
              />
            </div>
          </div>

          <div className="bg-gray-800/30 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4 text-white">View Settings</h3>
            
            <div className="space-y-4">
              <ToggleSwitch
                checked={settings.fovChanger}
                onChange={(checked) => updateSetting('fovChanger', checked)}
                label="FOV Changer"
                description="Modify field of view"
              />
              
              {settings.fovChanger && (
                <Slider
                  label="FOV Value"
                  value={settings.fovValue}
                  onChange={(value) => updateSetting('fovValue', value)}
                  min={60}
                  max={140}
                  step={1}
                  unit="°"
                />
              )}
            </div>
          </div>

          <div className="bg-gray-800/30 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4 text-white">Active Features</h3>
            
            <div className="space-y-2 text-sm">
              {Object.entries(settings).map(([key, value]) => {
                if (typeof value === 'boolean' && value) {
                  return (
                    <div key={key} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-green-400 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};