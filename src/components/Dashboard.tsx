import React, { useState } from 'react';
import { Header } from './layout/Header';
import { FileUpload } from './conversion/FileUpload';
import { ConversionOptions } from './conversion/ConversionOptions';
import { PDFEditor } from './pdf/PDFEditor';

export function Dashboard() {
  const [activeTab, setActiveTab] = useState<'convert' | 'edit'>('convert');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigation */}
        <div className="flex space-x-1 bg-white/50 backdrop-blur-sm rounded-2xl p-2 mb-8 border border-white/20">
          {[
            { id: 'convert', label: 'Convert Files' },
            { id: 'edit', label: 'Edit PDF' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'convert' && (
          <div className="space-y-8">
            <FileUpload selectedFile={selectedFile} onFileSelect={setSelectedFile} />
            {selectedFile && <ConversionOptions file={selectedFile} />}
          </div>
        )}

        {activeTab === 'edit' && (
          <PDFEditor />
        )}
      </main>
    </div>
  );
}