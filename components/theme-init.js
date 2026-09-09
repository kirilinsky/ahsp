// Runs before first paint, inlined in <head>. Keeps the stored theme from
// flashing the system one. Must stay dependency-free and tiny.
export const THEME_STORAGE_KEY = "ahsp-theme";

export const themeInitScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t==="light"||t==="dark"){document.documentElement.dataset.theme=t}}catch(e){}})();`;
