import React from 'react';
import { FileText, User, LogOut } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

export function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white/70 backdrop-blur-sm border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="h-10 w-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-3">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">ConvertPro</h1>
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-white/50 rounded-xl px-4 py-2">
              <User className="h-5 w-5 text-gray-600" />
              <span className="text-sm font-medium text-gray-900">{user?.name}</span>
            </div>
            
            <button
              onClick={logout}
              className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors bg-white/50 rounded-xl px-3 py-2 hover:bg-red-50"
            >
              <LogOut className="h-5 w-5" />
              <span className="text-sm font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}