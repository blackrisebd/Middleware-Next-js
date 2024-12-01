"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if the user is logged in by calling the Express server
    fetch("http://localhost:3000", {
      credentials: "include", // To include cookies for the session
    })
      .then((response) => response.text())
      .then((data) => {
        if (data.includes("Welcome")) {
          // Extract the username or profile info from the response
          const userName = data.match(/Welcome, (.*)<\/h1>/);
          setUser(userName ? userName[1] : null);
        }
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">
          Next.js Google Login
        </h1>

        {user ? (
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">Welcome, {user}</h2>
            <a
              href="http://localhost:3000/logout"
              className="text-blue-500 hover:underline text-lg"
            >
              Logout
            </a>
          </div>
        ) : (
          <div className="text-center">
            <a
              href="http://localhost:3000/auth/google"
              className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition"
            >
              Login with Google
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
