import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to CodeVerse</h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        A modern development platform for collaborative coding, project management, and team collaboration.
      </p>
      <div className="flex justify-center space-x-4">
        <Link
          to="/login"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Get Started
        </Link>
        <Link
          to="/dashboard"
          className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
        >
          View Dashboard
        </Link>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Collaborative Coding</h3>
          <p className="text-gray-600">Real-time code collaboration with your team members.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Project Management</h3>
          <p className="text-gray-600">Organize and track your development projects efficiently.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Team Workspaces</h3>
          <p className="text-gray-600">Create dedicated spaces for your development teams.</p>
        </div>
      </div>
    </div>
  );
}