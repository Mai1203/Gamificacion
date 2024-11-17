import React from 'react';
import { BookOpen, Code, Play, CheckCircle } from 'lucide-react';

interface LearningModuleProps {
  module: {
    title: string;
    description: string;
    lessons: {
      title: string;
      description: string;
      completed?: boolean;
    }[];
  };
}

const LearningModule: React.FC<LearningModuleProps> = ({ module }) => {
  return (
    <div className="bg-white rounded-xl shadow-xl p-8">
      <h2 className="text-2xl font-bold mb-2">{module.title}</h2>
      <p className="text-gray-600 mb-8">{module.description}</p>

      <div className="space-y-6">
        {module.lessons.map((lesson, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg p-6 transition-all hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-lg ${
                    lesson.completed
                      ? 'bg-green-100 text-green-600'
                      : 'bg-indigo-100 text-indigo-600'
                  }`}
                >
                  {lesson.completed ? (
                    <CheckCircle className="h-6 w-6" />
                  ) : (
                    <BookOpen className="h-6 w-6" />
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{lesson.title}</h3>
                  <p className="text-gray-600">{lesson.description}</p>
                </div>
              </div>
              <button
                className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${
                  lesson.completed
                    ? 'bg-gray-100 text-gray-600'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
              >
                {lesson.completed ? (
                  <>
                    <Code className="h-4 w-4" />
                    Repasar
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4" />
                    Comenzar
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningModule;