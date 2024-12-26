import React, { useState, useEffect } from 'react'

const KeyInstructions = ({ isVisible, onFadeOut }) => {

  const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        if (isVisible) {
        const fadeTimeout = setTimeout(() => {
            setIsFading(true);
            const hideTimeout = setTimeout(onFadeOut, 1000); 
            return () => clearTimeout(hideTimeout);
        }, 2000); 

        return () => clearTimeout(fadeTimeout);
        }
    }, [isVisible, onFadeOut]);

  return (
    <div
      className={`absolute top-3/4 left-1/2 transform -translate-x-1/2 bg-zinc-900/70 text-white px-4 py-2 rounded-sm text-sm ${
        isFading ? 'opacity-0 transition-opacity duration-500' : 'opacity-100'
      }`}
    >
      Use ←, → keys to navigate between images
    </div>
  );
};


export default KeyInstructions