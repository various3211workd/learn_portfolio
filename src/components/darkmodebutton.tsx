import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export const DarkModeButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => setMounted(true), []);

  return (
    <button
      aria-label="DarkModeToggle"
      type="button"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {mounted && (
        <>
          {theme === 'dark' ? (
            <FontAwesomeIcon
              icon={faSun}
              width={38}
              height={38}
              className="text-2xl text-[#EEDF7A]"
            />
          ) : (
            <FontAwesomeIcon
              icon={faMoon}
              width={38}
              height={38}
              className="text-2xl text-[#FCDE70] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
            />
          )}
        </>
      )}
    </button>
  );
};
