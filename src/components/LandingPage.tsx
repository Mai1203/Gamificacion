import React from 'react';
import { Code2, LogIn, UserPlus, Layout, Palette } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100"
    >
      <nav className="bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Code2 className="h-8 w-8 text-indigo-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                EdoCode
              </span>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/login')}
                className="flex items-center gap-2 px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-300"
              >
                <LogIn className="h-4 w-4" />
                Iniciar Sesión
              </button>
              <button
                onClick={() => navigate('/register')}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg transition-all duration-300"
              >
                <UserPlus className="h-4 w-4" />
                Registrarse
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:w-1/2 space-y-6"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              ¡La forma divertida de aprender desarrollo web!
            </h1>
            <p className="text-xl text-gray-600">
              Aprende HTML, CSS y JavaScript de manera interactiva y efectiva. 
              Construye proyectos reales mientras juegas y ganas puntos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
                onClick={() => navigate('/app')}
                className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white text-lg font-semibold rounded-xl transition-all duration-300 transform"
              >
                ¡Empieza Ahora!
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="lg:w-1/2 flex justify-center"
          >
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
              alt="Coding illustration"
              className="w-full max-w-md rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>

        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div 
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Layout className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">HTML Estructurado</h3>
            <p className="text-gray-600">
              Aprende a crear la estructura perfecta para tus páginas web con HTML5.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Palette className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">CSS Creativo</h3>
            <p className="text-gray-600">
              Domina el arte del diseño web con CSS moderno y responsive.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
              <Code2 className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">JavaScript Dinámico</h3>
            <p className="text-gray-600">
              Da vida a tus páginas web con interactividad y funcionalidades dinámicas.
            </p>
          </motion.div>
        </motion.div>
      </main>
    </motion.div>
  );
};

export default LandingPage;