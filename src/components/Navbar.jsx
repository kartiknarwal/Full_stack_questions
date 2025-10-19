// components/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Search, BookMarked, Layers, Settings } from "lucide-react";

export default function Navbar() {
  const navItems = [
    { to: "/", icon: <Home size={22} />, label: "Home" },
    { to: "/search", icon: <Search size={22} />, label: "Search" },
    { to: "/categories", icon: <Layers size={22} />, label: "Categories" },
    { to: "/saved", icon: <BookMarked size={22} />, label: "Saved" },
    { to: "/settings", icon: <Settings size={22} />, label: "More" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-[#1A1A1A] border-t border-[#FF6B00]/20 py-2 flex justify-around z-50">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `flex flex-col items-center text-sm transition ${
              isActive ? "text-[#FF8C32]" : "text-[#E0E0E0]"
            }`
          }
        >
          <div className="p-2 rounded-xl hover:bg-[#FF8C32]/10 transition">
            {item.icon}
          </div>
          <span className="text-xs">{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
