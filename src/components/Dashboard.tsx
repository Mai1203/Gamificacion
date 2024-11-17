import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Palette, Trophy, BookOpen, Star, Award } from 'lucide-react';
import LearningModule from './LearningModule';
import ProgressBar from './ProgressBar';
import UserProfile from './UserProfile';
import { modules } from '../data/modules';
import { useAuth } from '../context/AuthContext';

function Dashboard() {
  const [activeModule, setActiveModule] = useState(0);
  const [progress, setProgress] = useState({
    html: 25,
    css: 10,
    javascript: 5
  });
  const { user } = useAuth();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100"
    >
      <header className="bg-white/80 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Code2 className="h-8 w-8 text-indigo-600" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                EdoCode
              </h1>
            </div>
            {user && (
              <div className="flex items-center gap-4">
                <Trophy className="h-6 w-6 text-yellow-500" />
                <span className="font-semibold">850 puntos</span>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-xl shadow-xl p-6">
              <h2 className="text-xl font-bold mb-4">Módulos</h2>
              <nav className="space-y-2">
                {modules.map((module, index) => (
                  <motion.button
                    key={module.id}
                    whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                    whileTap={{ scale: 0.98, transition: { duration: 0.2 } }}
                    onClick={() => setActiveModule(index)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      activeModule === index
                        ? 'bg-indigo-600 text-white'
                        : 'hover:bg-indigo-50'
                    }`}
                  >
                    {module.id === 'html' && <Layout className="h-5 w-5" />}
                    {module.id === 'css' && <Palette className="h-5 w-5" />}
                    {module.id === 'javascript' && <Code2 className="h-5 w-5" />}
                    <span>{module.title}</span>
                  </motion.button>
                ))}
              </nav>

              {user && (
                <>
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4">Tu Progreso</h3>
                    <div className="space-y-4">
                      <ProgressBar label="HTML" progress={progress.html} color="rose" />
                      <ProgressBar label="CSS" progress={progress.css} color="blue" />
                      <ProgressBar
                        label="JavaScript"
                        progress={progress.javascript}
                        color="yellow"
                      />
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4">Logros</h3>
                    <div className="grid grid-cols-3 gap-2">
                      <motion.div
                        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                        className="flex flex-col items-center"
                      >
                        <div className="bg-yellow-100 p-2 rounded-lg">
                          <Star className="h-6 w-6 text-yellow-500" />
                        </div>
                        <span className="text-xs mt-1">Principiante</span>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                        className="flex flex-col items-center"
                      >
                        <div className="bg-blue-100 p-2 rounded-lg">
                          <Award className="h-6 w-6 text-blue-500" />
                        </div>
                        <span className="text-xs mt-1">Intermedio</span>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                        className="flex flex-col items-center opacity-50"
                      >
                        <div className="bg-purple-100 p-2 rounded-lg">
                          <Trophy className="h-6 w-6 text-purple-500" />
                        </div>
                        <span className="text-xs mt-1">Experto</span>
                      </motion.div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="lg:col-span-6"
          >
            <LearningModule module={modules[activeModule]} />
          </motion.div>

          {user && (
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              className="lg:col-span-3"
            >
              <UserProfile />
            </motion.div>
          )}
        </div>
      </main>
    </motion.div>
  );
}

export default Dashboard;