import React, { useState } from 'react';
import { ToggleSwitch } from './ui/ToggleSwitch';
import { Slider } from './ui/Slider';
import { Select } from './ui/Select';

export const AimbotSettings: React.FC = () => {
  const [settings, setSettings] = useState({
    enabled: true,
    fov: 5,
    smoothing: 5,
    targetBone: 'head',
    aimKey: 'mouse1',
    rcs: true,
    autoShoot: false,
    visibilityCheck: true
  });

  const updateSetting = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const targetBoneOptions = [
    { value: 'head', label: 'Head' },
    { value: 'neck', label: 'Neck' },
    { value: 'chest', label: 'Chest' },
    { value: 'stomach', label: 'Stomach' }
  ];

  const aimKeyOptions = [
    { value: 'mouse1', label: 'Mouse 1 (Left Click)' },
    { value: 'mouse2', label: 'Mouse 2 (Right Click)' },
    { value: 'shift', label: 'Shift' },
    { value: 'alt', label: 'Alt' },
    { value: 'ctrl', label: 'Ctrl' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-green-400">Aimbot Configuration</h2>
        <ToggleSwitch
          checked={settings.enabled}
          onChange={(checked) => updateSetting('enabled', checked)}
          label="Master Enable"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="bg-gray-800/30 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4 text-white">Targeting</h3>
            
            <div className="space-y-4">
              <Slider
                label="FOV Limit"
                value={settings.fov}
                onChange={(value) => updateSetting('fov', value)}
                min={1}
                max={180}
                step={1}
                unit="°"
              />
              
              <Select
                label="Target Bone"
                value={settings.targetBone}
                onChange={(value) => updateSetting('targetBone', value)}
                options={targetBoneOptions}
              />
              
              <ToggleSwitch
                checked={settings.visibilityCheck}
                onChange={(checked) => updateSetting('visibilityCheck', checked)}
                label="Visibility Check"
                description="Only target visible enemies"
              />
            </div>
          </div>

          <div className="bg-gray-800/30 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4 text-white">Behavior</h3>
            
            <div className="space-y-4">
              <ToggleSwitch
                checked={settings.autoShoot}
                onChange={(checked) => updateSetting('autoShoot', checked)}
                label="Auto Shoot"
                description="Automatically fire when on target"
              />
              
              <Select
                label="Aim Key"
                value={settings.aimKey}
                onChange={(value) => updateSetting('aimKey', value)}
                options={aimKeyOptions}
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-800/30 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4 text-white">Smoothing & RCS</h3>
            
            <div className="space-y-4">
              <Slider
                label="Aim Smoothing"
                value={settings.smoothing}
                onChange={(value) => updateSetting('smoothing', value)}
                min={1}
                max={20}
                step={0.1}
                unit="x"
              />
              
              <ToggleSwitch
                checked={settings.rcs}
                onChange={(checked) => updateSetting('rcs', checked)}
                label="Recoil Control System"
                description="Compensate for weapon recoil"
              />
            </div>
          </div>

          <div className="bg-gray-800/30 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4 text-white">Current Values</h3>
            
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Status:</span>
                <span className={settings.enabled ? 'text-green-400' : 'text-red-400'}>
                  {settings.enabled ? 'Enabled' : 'Disabled'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">FOV:</span>
                <span className="text-white">{settings.fov}°</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Smoothing:</span>
                <span className="text-white">{settings.smoothing}x</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Target:</span>
                <span className="text-white capitalize">{settings.targetBone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Aim Key:</span>
                <span className="text-white">{aimKeyOptions.find(opt => opt.value === settings.aimKey)?.label}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};