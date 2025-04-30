import { useEffect, useState, useCallback } from "react";

type Theme = "dark" | "light" | "system";

function getSystemTheme(): "dark" | "light" {
  if (typeof window === "undefined") return "light";
  
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function useTheme() {
  // Initialize theme from localStorage or default to system
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "system";
    return (localStorage.getItem("theme") as Theme) || "system";
  });

  const [resolvedTheme, setResolvedTheme] = useState<"dark" | "light">(
    typeof window === "undefined" ? "light" : getSystemTheme()
  );

  // Function to update the DOM with theme classes
  const applyTheme = useCallback((newTheme: "dark" | "light") => {
    const root = window.document.documentElement;
    
    // Remove both classes first
    root.classList.remove("light", "dark");
    
    // Then add the appropriate class
    root.classList.add(newTheme);
    
    // Update the resolved theme state
    setResolvedTheme(newTheme);
  }, []);

  // Effect for handling theme changes
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    // Calculate the effective theme
    let effectiveTheme: "light" | "dark";
    
    if (theme === "system") {
      effectiveTheme = getSystemTheme();
    } else {
      effectiveTheme = theme;
    }
    
    // Apply the theme
    applyTheme(effectiveTheme);
    
    // Store theme preference
    localStorage.setItem("theme", theme);
  }, [theme, applyTheme]);

  // Effect for system theme changes
  useEffect(() => {
    if (typeof window === "undefined" || theme !== "system") return;
    
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    
    // Handler for system theme changes
    const handleSystemThemeChange = () => {
      const newSystemTheme = getSystemTheme();
      if (theme === "system") {
        applyTheme(newSystemTheme);
      }
    };
    
    // Add listener for system theme changes
    mediaQuery.addEventListener("change", handleSystemThemeChange);
    
    // Clean up
    return () => mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, [theme, applyTheme]);

  // On initial load, need to set initial theme class
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    // Initialize theme based on stored preference or system setting
    const initialTheme = theme === "system" ? getSystemTheme() : theme;
    applyTheme(initialTheme);
  }, [applyTheme]);

  return {
    theme,
    setTheme,
    resolvedTheme,
    isDark: resolvedTheme === "dark",
  } as const;
}
