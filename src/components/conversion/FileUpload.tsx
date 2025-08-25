import React, { useCallback, useState } from 'react';
import { Upload, File, X, CheckCircle, AlertCircle } from 'lucide-react';

interface FileUploadProps {
  selectedFile: File | null;
  onFileSelect: (file: File | null) => void;
}

export function FileUpload({ selectedFile, onFileSelect }: FileUploadProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  }, []);

  const handleFileSelect = (file: File) => {
    // Check file size (100MB limit)
    if (file.size > 100 * 1024 * 1024) {
      setUploadStatus('error');
      return;
    }

    setUploadStatus('uploading');
    
    // Simulate upload progress
    setTimeout(() => {
      setUploadStatus('success');
      onFileSelect(file);
    }, 1500);
  };

  const removeFile = () => {
    onFileSelect(null);
    setUploadStatus('idle');
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Upload Your File</h2>
      
      {!selectedFile ? (
        <div
          className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-200 ${
            isDragOver
              ? 'border-blue-500 bg-blue-50/50'
              : 'border-gray-300 hover:border-gray-400'
          }`}
          onDrop={handleDrop}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragOver(true);
          }}
          onDragLeave={() => setIsDragOver(false)}
        >
          <Upload className={`mx-auto h-16 w-16 mb-4 ${
            isDragOver ? 'text-blue-500' : 'text-gray-400'
          }`} />
          
          <p className="text-xl font-semibold text-gray-900 mb-2">
            Drop your file here
          </p>
          <p className="text-gray-600 mb-6">
            or click to browse files
          </p>
          
          <input
            type="file"
            className="hidden"
            id="file-upload"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                handleFileSelect(e.target.files[0]);
              }
            }}
          />
          
          <label
            htmlFor="file-upload"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-purple-700 cursor-pointer transition-all duration-200"
          >
            Choose File
          </label>
          
          <p className="text-sm text-gray-500 mt-4">
            Maximum file size: 100MB
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <File className="h-6 w-6 text-blue-600" />
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900">{selectedFile.name}</h3>
                <p className="text-sm text-gray-600">
                  {formatFileSize(selectedFile.size)}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              {uploadStatus === 'uploading' && (
                <div className="flex items-center space-x-2 text-blue-600">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                  <span className="text-sm font-medium">Uploading...</span>
                </div>
              )}
              
              {uploadStatus === 'success' && (
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircle className="h-5 w-5" />
                  <span className="text-sm font-medium">Ready</span>
                </div>
              )}
              
              {uploadStatus === 'error' && (
                <div className="flex items-center space-x-2 text-red-600">
                  <AlertCircle className="h-5 w-5" />
                  <span className="text-sm font-medium">Error</span>
                </div>
              )}
              
              <button
                onClick={removeFile}
                className="p-2 text-gray-400 hover:text-red-600 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}