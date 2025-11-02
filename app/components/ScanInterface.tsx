'use client';

import { useState } from 'react';
import { Play, Zap, Settings } from 'lucide-react';

export default function ScanInterface() {
  const [targetUrl, setTargetUrl] = useState('');
  const [scanMode, setScanMode] = useState<'standard' | 'speed'>('standard');
  const [isScanning, setIsScanning] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleScan = () => {
    setIsScanning(true);
    setProgress(0);

    // Simulate scan progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Configure Vulnerability Scan</h2>

        {/* Target URL */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Target API URL
          </label>
          <input
            type="text"
            value={targetUrl}
            onChange={(e) => setTargetUrl(e.target.value)}
            placeholder="https://api.example.com"
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
          />
        </div>

        {/* Scan Mode */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-300 mb-3">
            Detection Mode
          </label>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setScanMode('standard')}
              className={`p-4 rounded-lg border-2 transition-all ${
                scanMode === 'standard'
                  ? 'border-orange-500 bg-orange-500/10'
                  : 'border-gray-700 bg-gray-900 hover:border-gray-600'
              }`}
            >
              <div className="flex items-center space-x-3 mb-2">
                <Settings className="h-5 w-5 text-orange-400" />
                <span className="font-semibold text-white">Standard Mode</span>
              </div>
              <p className="text-sm text-gray-400">98% accuracy, thorough analysis</p>
            </button>

            <button
              onClick={() => setScanMode('speed')}
              className={`p-4 rounded-lg border-2 transition-all ${
                scanMode === 'speed'
                  ? 'border-orange-500 bg-orange-500/10'
                  : 'border-gray-700 bg-gray-900 hover:border-gray-600'
              }`}
            >
              <div className="flex items-center space-x-3 mb-2">
                <Zap className="h-5 w-5 text-yellow-400" />
                <span className="font-semibold text-white">Speed Mode</span>
              </div>
              <p className="text-sm text-gray-400">80% confidence, rapid detection</p>
            </button>
          </div>
        </div>

        {/* Vulnerability Types */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-300 mb-3">
            Target Vulnerabilities
          </label>
          <div className="space-y-2">
            <label className="flex items-center space-x-3 p-3 bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-850">
              <input type="checkbox" defaultChecked className="form-checkbox h-5 w-5 text-orange-500 rounded border-gray-600" />
              <div>
                <div className="text-white font-medium">IDOR (Insecure Direct Object References)</div>
                <div className="text-sm text-gray-400">Average bounty: €1.5K • Growing fastest</div>
              </div>
            </label>
            <label className="flex items-center space-x-3 p-3 bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-850">
              <input type="checkbox" defaultChecked className="form-checkbox h-5 w-5 text-orange-500 rounded border-gray-600" />
              <div>
                <div className="text-white font-medium">Authentication Bypass</div>
                <div className="text-sm text-gray-400">High-value targets • Low competition</div>
              </div>
            </label>
          </div>
        </div>

        {/* Scan Progress */}
        {isScanning && (
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Scanning...</span>
              <span>{progress}%</span>
            </div>
            <div className="h-2 bg-gray-900 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Start Scan Button */}
        <button
          onClick={handleScan}
          disabled={!targetUrl || isScanning}
          className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center space-x-2"
        >
          <Play className="h-5 w-5" />
          <span>{isScanning ? 'Scanning...' : 'Start Vulnerability Scan'}</span>
        </button>
      </div>

      {/* Info Panel */}
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
        <h3 className="font-semibold text-blue-400 mb-2">Why IDOR & Auth Bypass?</h3>
        <ul className="text-sm text-gray-300 space-y-2">
          <li>• IDOR vulnerabilities growing fastest on major platforms (+45% on HackerOne)</li>
          <li>• 85% of bounties are for web APIs</li>
          <li>• Average IDOR payout: €1.5K with low competition</li>
          <li>• Speed is critical - first submission wins, duplicates earn €0</li>
          <li>• Content-based detection: 98% accuracy, &lt;2% false positives</li>
        </ul>
      </div>
    </div>
  );
}
