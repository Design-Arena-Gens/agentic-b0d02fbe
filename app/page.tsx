'use client';

import { useState } from 'react';
import { Target, Shield, Zap, TrendingUp, AlertTriangle, CheckCircle, Clock, DollarSign } from 'lucide-react';
import ScanInterface from './components/ScanInterface';
import StatsCard from './components/StatsCard';
import VulnerabilityList from './components/VulnerabilityList';
import MetricsChart from './components/MetricsChart';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'scan' | 'results'>('dashboard');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="border-b border-gray-700 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-red-500 to-orange-500 p-2 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">AI Bug Bounty Hunter</h1>
                <p className="text-sm text-gray-400">IDOR & Auth Bypass Detection Framework</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                98% Accuracy
              </div>
              <div className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                &lt;2% False Positives
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b border-gray-700 bg-gray-900/30">
        <div className="container mx-auto px-6">
          <div className="flex space-x-8">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: TrendingUp },
              { id: 'scan', label: 'Start Scan', icon: Target },
              { id: 'results', label: 'Results', icon: CheckCircle },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 px-4 py-4 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-orange-500 text-orange-400'
                    : 'border-transparent text-gray-400 hover:text-gray-300'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatsCard
                title="Total Scans"
                value="1,247"
                icon={Target}
                trend="+12%"
                trendUp={true}
                color="blue"
              />
              <StatsCard
                title="Vulnerabilities Found"
                value="89"
                icon={AlertTriangle}
                trend="+8%"
                trendUp={true}
                color="red"
              />
              <StatsCard
                title="Avg. Response Time"
                value="2.3s"
                icon={Clock}
                trend="-15%"
                trendUp={true}
                color="green"
              />
              <StatsCard
                title="Estimated Bounty"
                value="€133.5K"
                icon={DollarSign}
                trend="+24%"
                trendUp={true}
                color="orange"
              />
            </div>

            {/* Framework Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-orange-400" />
                  Detection Capabilities
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="mt-1 bg-red-500/20 p-2 rounded-lg">
                      <AlertTriangle className="h-4 w-4 text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">IDOR Detection</h3>
                      <p className="text-sm text-gray-400">Content-based analysis with 98% accuracy, detecting unauthorized access to resources</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="mt-1 bg-purple-500/20 p-2 rounded-lg">
                      <Shield className="h-4 w-4 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Auth Bypass</h3>
                      <p className="text-sm text-gray-400">Identifies authentication weaknesses and privilege escalation paths</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="mt-1 bg-blue-500/20 p-2 rounded-lg">
                      <Zap className="h-4 w-4 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Speed Mode</h3>
                      <p className="text-sm text-gray-400">80% confidence threshold for rapid detection and first-mover advantage</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">Business Metrics</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-orange-500 pl-4">
                    <div className="text-2xl font-bold text-white">€1.5K</div>
                    <div className="text-sm text-gray-400">Average IDOR Bounty</div>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <div className="text-2xl font-bold text-white">85%</div>
                    <div className="text-sm text-gray-400">Web API Bounties</div>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <div className="text-2xl font-bold text-white">+45%</div>
                    <div className="text-sm text-gray-400">IDOR Growth (HackerOne)</div>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <div className="text-2xl font-bold text-white">&lt;2%</div>
                    <div className="text-sm text-gray-400">False Positive Rate</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics Chart */}
            <MetricsChart />

            {/* Recent Vulnerabilities */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">Recent Findings</h2>
              <VulnerabilityList />
            </div>
          </div>
        )}

        {activeTab === 'scan' && <ScanInterface />}

        {activeTab === 'results' && (
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Scan Results</h2>
            <VulnerabilityList showDetails />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-700 mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-white mb-3">Framework Overview</h3>
              <p className="text-sm text-gray-400">
                AI-powered vulnerability discovery system targeting IDOR and Authentication Bypass vulnerabilities in web APIs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3">Target Platforms</h3>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• HackerOne</li>
                <li>• Intigriti</li>
                <li>• Bugcrowd</li>
                <li>• Private Programs</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3">Key Advantages</h3>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• 98% Detection Accuracy</li>
                <li>• Speed Mode for First Submission</li>
                <li>• Low Competition Niche</li>
                <li>• Content-Based Analysis</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
            <p>MVP Bug Bounty Hunting Framework - Built for Defensive Security Research</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
