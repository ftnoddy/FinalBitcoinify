import React from 'react';

export const Button = ({ variant, size, children, ...props }) => {
  let className = "px-4 py-2 rounded";
  if (variant === "outline") className += " border border-gray-300";
  if (size === "sm") className += " text-sm";
  if (size === "icon") className += " p-2";
  return <button className={className} {...props}>{children}</button>;
};

export const DropdownMenu = ({ children }) => <div className="relative">{children}</div>;
export const DropdownMenuTrigger = ({ asChild, children }) => <div>{children}</div>;
export const DropdownMenuContent = ({ align, children }) => (
  <div className={`absolute ${align === 'end' ? 'right-0' : 'left-0'} mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}>{children}</div>
);
export const DropdownMenuLabel = ({ children }) => <div className="px-4 py-2 text-gray-700">{children}</div>;
export const DropdownMenuSeparator = () => <div className="border-t border-gray-100"></div>;
export const DropdownMenuItem = ({ children }) => <button className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">{children}</button>;

export const Table = ({ children }) => <table className="min-w-full bg-white">{children}</table>;
export const TableHeader = ({ children }) => <thead className="bg-gray-100">{children}</thead>;
export const TableRow = ({ children }) => <tr>{children}</tr>;
export const TableHead = ({ children }) => <th className="px-4 py-2 border-b">{children}</th>;
export const TableBody = ({ children }) => <tbody>{children}</tbody>;
export const TableCell = ({ children }) => <td className="px-4 py-2 border-b">{children}</td>;

export const Badge = ({ variant, children }) => {
  let className = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";
  if (variant === "secondary") className += " bg-green-100 text-green-800";
  if (variant === "outline") className += " border border-gray-300 text-gray-800";
  return <span className={className}>{children}</span>;
};

export const Pagination = ({ children }) => <div className="flex items-center">{children}</div>;
export const PaginationContent = ({ children }) => <div className="flex items-center">{children}</div>;
export const PaginationItem = ({ children }) => <div className="mx-1">{children}</div>;
