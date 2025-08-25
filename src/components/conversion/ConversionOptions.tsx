import React, { useState } from 'react';
import { ArrowRight, Download, Loader } from 'lucide-react';
import { conversionTypes } from '../../data/conversionTypes';

interface ConversionOptionsProps {
  file: File;
}

export function ConversionOptions({ file }: ConversionOptionsProps) {
  const [selectedConversion, setSelectedConversion] = useState<string>('');
  const [converting, setConverting] = useState(false);
  const [converted, setConverted] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string>('');

  const fileExtension = file.name.split('.').pop()?.toLowerCase() || '';
  const availableConversions = conversionTypes.filter(conversion => 
    conversion.from.includes(fileExtension)
  );

  const handleConvert = async () => {
    if (!selectedConversion) return;

    setConverting(true);
    
    // Simulate conversion process
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Create a mock download URL
    const mockUrl = URL.createObjectURL(file);
    setDownloadUrl(mockUrl);
    setConverted(true);
    setConverting(false);

    // Auto-cleanup after 1 hour
    setTimeout(() => {
      URL.revokeObjectURL(mockUrl);
    }, 3600000);
  };

  const handleDownload = () => {
    const selectedOption = conversionTypes.find(c => c.id === selectedConversion);
    if (selectedOption && downloadUrl) {
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = `${file.name.split('.')[0]}.${selectedOption.to}`;
      link.click();
    }
  };

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Convert Your File</h2>
      
      {availableConversions.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">
            No conversion options available for this file type.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Conversion Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {availableConversions.map((conversion) => (
              <button
                key={conversion.id}
                onClick={() => setSelectedConversion(conversion.id)}
                className={`p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                  selectedConversion === conversion.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300 bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-900">
                    {conversion.from.join('/')} → {conversion.to}
                  </span>
                  <ArrowRight className={`h-4 w-4 ${
                    selectedConversion === conversion.id ? 'text-blue-500' : 'text-gray-400'
                  }`} />
                </div>
                <p className="text-sm text-gray-600">{conversion.description}</p>
              </button>
            ))}
          </div>

          {/* Convert Button */}
          {selectedConversion && !converted && (
            <div className="flex justify-center">
              <button
                onClick={handleConvert}
                disabled={converting}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center space-x-2"
              >
                {converting ? (
                  <>
                    <Loader className="h-5 w-5 animate-spin" />
                    <span>Converting...</span>
                  </>
                ) : (
                  <>
                    <span>Start Conversion</span>
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </button>
            </div>
          )}

          {/* Download Section */}
          {converted && (
            <div className="bg-green-50 rounded-xl p-6 text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Download className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Conversion Complete!
              </h3>
              <p className="text-gray-600 mb-4">
                Your file has been successfully converted and is ready for download.
              </p>
              <button
                onClick={handleDownload}
                className="px-6 py-3 bg-green-600 text-white font-medium rounded-xl hover:bg-green-700 transition-colors"
              >
                Download File
              </button>
              <p className="text-xs text-gray-500 mt-3">
                Download link expires in 1 hour
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}