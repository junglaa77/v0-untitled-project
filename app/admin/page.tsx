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
      {settings ? Object.keys(settings).map(key => (
        <div key={key} className="mb-4">
          <label className="mr-4 font-medium">{key}</label>
          <input
            value={settings[key]}
            onChange={(e) => updateSettings(key, e.target.value)}
            className="border px-2 py-1"
          />
        </div>
      )) : '讀取中...'}
    </div>
  );
}
