import React from 'react';
import { motion } from 'framer-motion';
import { LogOut, Settings, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const UserProfile = () => {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-xl shadow-lg p-6"
    >
      <div className="flex items-center gap-4 mb-6">
        {user.photoURL ? (
          <img
            src={user.photoURL}
            alt={user.displayName || 'Usuario'}
            className="w-16 h-16 rounded-full"
          />
        ) : (
          <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
            <User className="w-8 h-8 text-indigo-600" />
          </div>
        )}
        <div>
          <h3 className="text-lg font-semibold">
            {user.displayName || 'Usuario'}
          </h3>
          <p className="text-sm text-gray-600">{user.email}</p>
        </div>
      </div>

      <div className="space-y-2">
        <button className="w-full flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
          <Settings className="w-5 h-5" />
          Configuración
        </button>
        <button
          onClick={logout}
          className="w-full flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Cerrar Sesión
        </button>
      </div>
    </motion.div>
  );
};

export default UserProfile;