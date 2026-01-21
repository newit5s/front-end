"use client";

import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export function SearchBar() {
    const [expanded, setExpanded] = useState(false);
    const [query, setQuery] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (expanded && inputRef.current) {
            inputRef.current.focus();
        }
    }, [expanded]);

    const handleClear = () => {
        setQuery("");
        setExpanded(false);
    };

    return (
        <div className="relative flex items-center">
            {/* Expanded Search Input */}
            <div
                className={`
                    absolute right-0 flex items-center bg-white 
                    transition-all duration-300 ease-in-out origin-right 
                    border border-gray-200 rounded-full shadow-sm overflow-hidden
                    ${expanded ? "w-64 opacity-100 p-1 pr-10" : "w-0 opacity-0 p-0 border-none shadow-none"}
                `}
            >
                <div className="pl-3 text-gray-400">
                    <Search className="w-4 h-4" />
                </div>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full px-2 py-1 text-sm outline-none border-none bg-transparent placeholder:text-gray-400"
                />
            </div>

            {/* Toggle Button */}
            <Button
                variant="ghost"
                size="sm"
                className={`
                    relative z-10 text-gray-500 hover:text-primary-600 hover:bg-gray-100 rounded-full w-9 h-9 p-0
                    transition-all duration-200
                    ${expanded ? "rotate-90 opacity-0 pointer-events-none" : "opacity-100"}
                `}
                onClick={() => setExpanded(true)}
            >
                <Search className="h-4 w-4" />
            </Button>

            {/* Close Button (When Expanded) */}
            <Button
                variant="ghost"
                size="sm"
                className={`
                    absolute right-0 z-20 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full w-8 h-8 m-0.5 p-0
                    transition-all duration-200
                    ${expanded ? "opacity-100 scale-100" : "opacity-0 scale-50 pointer-events-none"}
                `}
                onClick={handleClear}
            >
                <X className="h-3 w-3" />
            </Button>
        </div>
    );
}
