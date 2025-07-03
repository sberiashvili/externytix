import React from 'react';

interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (color: string) => void;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({
  label,
  value,
  onChange
}) => {
  const presetColors = [
    '#00ff9d', '#ff0000', '#00ff00', '#0000ff',
    '#ffff00', '#ff00ff', '#00ffff', '#ffffff',
    '#ff8000', '#8000ff', '#ff0080', '#80ff00'
  ];

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-white">{label}</label>
      
      <div className="flex items-center space-x-3">
        <div
          className="w-8 h-8 rounded-lg border-2 border-gray-600 cursor-pointer"
          style={{ backgroundColor: value }}
          onClick={() => {
            const input = document.createElement('input');
            input.type = 'color';
            input.value = value;
            input.onchange = (e) => onChange((e.target as HTMLInputElement).value);
            input.click();
          }}
        />
        
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 bg-gray-700 text-white px-3 py-1 rounded text-sm border border-gray-600 focus:border-green-500 focus:outline-none"
        />
      </div>
      
      <div className="grid grid-cols-6 gap-2 mt-2">
        {presetColors.map((color) => (
          <button
            key={color}
            onClick={() => onChange(color)}
            className={`w-6 h-6 rounded border-2 transition-all duration-200 ${
              value === color ? 'border-white scale-110' : 'border-gray-600 hover:border-gray-400'
            }`}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
};