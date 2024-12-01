import React from "react";

export default function Layout({ children }) {
  return (
    <div>
      <h1 className="text-3xl font-bold">Header</h1>
      {children}
      <h1 className="text-2xl font-bold">Footer</h1>
    </div>
  );
}
