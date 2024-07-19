import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../model/Footer';

const Login = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 bg-gradient-to-br from-[#8e2de2] to-[#4a00e0] px-4 sm:px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex flex-col items-center justify-center gap-6">
            <h1 className="text-4xl font-bold text-white">Welcome Back to CryptoTracker</h1>
            <p className="text-lg text-white">
              Log in to continue tracking your cryptocurrency investments and stay up-to-date with the latest market trends.
            </p>
            <div className="w-full max-w-md bg-white p-6 rounded-md shadow-lg">
              <form className="flex flex-col gap-4">
                <div className="grid gap-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90"
                  style={{ backgroundColor: '#4a00e0' }}
                >
                  Log In
                </button>
                <p className="text-center text-sm text-gray-600">
                  Don't have an account? <Link to="/" className="text-indigo-600 hover:text-indigo-500">Sign up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
