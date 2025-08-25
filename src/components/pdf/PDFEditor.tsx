import React, { useState } from 'react';
import { Upload, Edit3, Type, Highlighter, Trash2 } from 'lucide-react';

export function PDFEditor() {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [activetool, setActiveTool] = useState<'text' | 'highlight' | 'delete'>('text');

  const tools = [
    { id: 'text', icon: Type, label: 'Add Text', description: 'Add text annotations' },
    { id: 'highlight', icon: Highlighter, label: 'Highlight', description: 'Highlight text' },
    { id: 'delete', icon: Trash2, label: 'Delete', description: 'Remove content' }
  ];

  return (
    <div className="space-y-6">
      {/* Upload PDF */}
      {!pdfFile ? (
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Upload PDF to Edit(still in devlopment)</h2>
          
          <div className="border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center hover:border-gray-400 transition-all duration-200">
            <Upload className="mx-auto h-16 w-16 text-gray-400 mb-4" />
            <p className="text-xl font-semibold text-gray-900 mb-2">
              Drop your PDF here
            </p>
            <p className="text-gray-600 mb-6">
              or click to browse files
            </p>
            
            <input
              type="file"
              accept=".pdf"
              className="hidden"
              id="pdf-upload"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setPdfFile(e.target.files[0]);
                }
              }}
            />
            
            <label
              htmlFor="pdf-upload"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-purple-700 cursor-pointer transition-all duration-200"
            >
              Choose PDF File
            </label>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Tools Sidebar */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Editing Tools</h3>
            
            <div className="space-y-3">
              {tools.map((tool) => (
                <button
                  key={tool.id}
                  onClick={() => setActiveTool(tool.id as any)}
                  className={`w-full p-3 rounded-xl transition-all duration-200 text-left ${
                    activeJob === tool.id
                      ? 'bg-blue-100 border-2 border-blue-500'
                      : 'bg-white/50 border border-gray-200 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <tool.icon className={`h-5 w-5 ${
                      activeJob === tool.id ? 'text-blue-600' : 'text-gray-600'
                    }`} />
                    <div>
                      <div className="font-medium text-gray-900">{tool.label}</div>
                      <div className="text-xs text-gray-600">{tool.description}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <button className="w-full px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors">
                Save Changes
              </button>
              <button 
                onClick={() => setPdfFile(null)}
                className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-colors mt-2"
              >
                Load New PDF
              </button>
            </div>
          </div>

          {/* PDF Viewer */}
          <div className="lg:col-span-3 bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {pdfFile.name}
              </h3>
              <div className="flex items-center space-x-2">
                <Edit3 className="h-5 w-5 text-gray-600" />
                <span className="text-sm text-gray-600">
                  Active: {tools.find(t => t.id === activeJob)?.label}
                </span>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-xl h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="h-16 w-16 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Edit3 className="h-8 w-8 text-red-600" />
                </div>
                <p className="text-gray-600">
                  PDF viewer and editing interface would be displayed here
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Interactive PDF editing with the selected tool: {tools.find(t => t.id === activeJob)?.label}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
