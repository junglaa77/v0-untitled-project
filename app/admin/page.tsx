'use client';
import { useEffect, useState } from 'react';

export default function AdminPage() {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchSettings = async () => {
    const res = await fetch('/api/settings');
    const data = await res.json();
    setSettings(data);
    setLoading(false);
  };

  const updateSetting = async (key, value) => {
    const res = await fetch('/api/settings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ [key]: value })
    });
    const updated = await res.json();
    setSettings(updated);
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  if (loading) return <p className="p-4">讀取設定中...</p>;

  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">🧠 小章魚 /admin 控制面板</h1>
      {Object.keys(settings).map((key) => (
        <div key={key} className="flex justify-between items-center border-b py-2">
          <span>{key}</span>
          {typeof settings[key] === 'boolean' ? (
            <button
              onClick={() => updateSetting(key, !settings[key])}
              className={`px-3 py-1 rounded ${
                settings[key] ? 'bg-green-500' : 'bg-gray-400'
              } text-white`}
            >
              {settings[key] ? '啟用中' : '已關閉'}
            </button>
          ) : (
            <input
              className="border px-2 py-1"
              defaultValue={settings[key]}
              onBlur={(e) => updateSetting(key, e.target.value)}
            />
          )}
        </div>
      ))}
    </main>
  );
}