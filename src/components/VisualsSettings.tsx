import React, { useState } from 'react';
import { ToggleSwitch } from './ui/ToggleSwitch';
import { Slider } from './ui/Slider';
import { ColorPicker } from './ui/ColorPicker';

export const VisualsSettings: React.FC = () => {
  const [settings, setSettings] = useState({
    esp: true,
    boxes: true,
    names: true,
    health: true,
    weapons: false,
    distance: true,
    snaplines: false,
    chams: false,
    glow: true,
    boxColor: '#00ff9d',
    nameColor: '#ffffff',
    healthColor: '#ff0000',
    glowColor: '#00ff9d',
    espDistance: 500,
    boxThickness: 2,
    glowIntensity: 80
  });

  const updateSetting = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-green-400">Visual Configuration</h2>
        <ToggleSwitch
          checked={settings.esp}
          onChange={(checked) => updateSetting('esp', checked)}
          label="Master ESP"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="bg-gray-800/30 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4 text-white">ESP Features</h3>
            
            <div className="space-y-4">
              <ToggleSwitch
                checked={settings.boxes}
                onChange={(checked) => updateSetting('boxes', checked)}
                label="Player Boxes"
                description="Draw boxes around players"
              />
              
              <ToggleSwitch
                checked={settings.names}
                onChange={(checked) => updateSetting('names', checked)}
                label="Player Names"
                description="Show player names"
              />
              
              <ToggleSwitch
                checked={settings.health}
                onChange={(checked) => updateSetting('health', checked)}
                label="Health Bars"
                description="Display health information"
              />
              
              <ToggleSwitch
                checked={settings.weapons}
                onChange={(checked) => updateSetting('weapons', checked)}
                label="Weapon Names"
                description="Show equipped weapons"
              />
              
              <ToggleSwitch
                checked={settings.distance}
                onChange={(checked) => updateSetting('distance', checked)}
                label="Distance"
                description="Show distance to players"
              />
              
              <ToggleSwitch
                checked={settings.snaplines}
                onChange={(checked) => updateSetting('snaplines', checked)}
                label="Snaplines"
                description="Draw lines to players"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-800/30 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4 text-white">Advanced Visuals</h3>
            
            <div className="space-y-4">
              <ToggleSwitch
                checked={settings.chams}
                onChange={(checked) => updateSetting('chams', checked)}
                label="Chams"
                description="See players through walls"
              />
              
              <ToggleSwitch
                checked={settings.glow}
                onChange={(checked) => updateSetting('glow', checked)}
                label="Glow ESP"
                description="Add glow effect to players"
              />
              
              <Slider
                label="ESP Distance"
                value={settings.espDistance}
                onChange={(value) => updateSetting('espDistance', value)}
                min={100}
                max={2000}
                step={50}
                unit="units"
              />
              
              <Slider
                label="Box Thickness"
                value={settings.boxThickness}
                onChange={(value) => updateSetting('boxThickness', value)}
                min={1}
                max={5}
                step={1}
                unit="px"
              />
              
              <Slider
                label="Glow Intensity"
                value={settings.glowIntensity}
                onChange={(value) => updateSetting('glowIntensity', value)}
                min={0}
                max={100}
                step={5}
                unit="%"
              />
            </div>
          </div>

          <div className="bg-gray-800/30 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4 text-white">Colors</h3>
            
            <div className="space-y-4">
              <ColorPicker
                label="Box Color"
                value={settings.boxColor}
                onChange={(color) => updateSetting('boxColor', color)}
              />
              
              <ColorPicker
                label="Name Color"
                value={settings.nameColor}
                onChange={(color) => updateSetting('nameColor', color)}
              />
              
              <ColorPicker
                label="Health Color"
                value={settings.healthColor}
                onChange={(color) => updateSetting('healthColor', color)}
              />
              
              <ColorPicker
                label="Glow Color"
                value={settings.glowColor}
                onChange={(color) => updateSetting('glowColor', color)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};