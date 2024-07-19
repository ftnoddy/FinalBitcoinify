import React from 'react';
import { Link } from 'react-router-dom';
import { BitcoinIcon, MenuIcon } from './Icons';

const NavBar = () => {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b bg-background px-4 sm:px-6">
      <Link to="/" className="flex items-center gap-2">
        <BitcoinIcon className="h-6 w-6" />
        <span className="text-lg font-semibold">CryptoTracker</span>
      </Link>
      <nav className="hidden sm:flex items-center gap-4">
        <Link to="/dashboard" className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground">
          Dashboard
        </Link>
        <Link to="/buy" className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
          Buy
        </Link>
      </nav>
      <button className="sm:hidden">
        <MenuIcon className="h-5 w-5" />
        <span className="sr-only">Toggle menu</span>
      </button>
    </header>
  );
};

export default NavBar;
