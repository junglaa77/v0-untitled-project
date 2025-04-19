'use client';
import { useState, useEffect } from 'react';

export default function AdminPage() {
  const [settings, setSettings] = useState(null);
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (password === 'Tako') setAuthenticated(true);
  }, [password]);

  const fetchSettings = async () => {
    const res = await fetch('/api/settings');
    const data = await res.json();
    setSettings(data);
  };

  const updateSettings = async (key, value) => {
    await fetch('/api/settings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ key, value }),
    });
    fetchSettings();
  };

  useEffect(() => {
    if (authenticated) fetchSettings();
  }, [authenticated]);

  if (!authenticated) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-xl mb-4">請輸入密碼以繼續</h2>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2" />
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Tako 控制面板</h1>
      {settings ? (
        <>
          {['music', 'ai', 'weather', 'quake'].map((key) => (
            <div key={key} className="mb-4 flex items-center gap-4">
              <label className="capitalize w-20">{key}</label>
              <input
                type="checkbox"
                checked={settings[key]}
                onChange={(e) => updateSettings(key, e.target.checked)}
              />
            </div>
          ))}
          <div className="mb-4 flex items-center gap-4">
            <label className="w-20">location</label>
            <input
              className="border px-2 py-1"
              value={settings.location}
              onChange={(e) => updateSettings('location', e.target.value)}
            />
          </div>
        </>
      ) : '讀取中...'}
    </div>
  );
}
