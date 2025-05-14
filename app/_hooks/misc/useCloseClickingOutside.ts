import React, { useEffect } from 'react';

function useCloseClickingOutside<TElement extends HTMLElement, TEvent>(
  ref: React.RefObject<TElement | null>,
  handler: (e: TEvent) => void,
  isOpen: boolean,
) {

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (ref.current && ref.current.contains(e.target as Node)) {
        return;
      }
      handler(e as TEvent);
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside, true);
      document.addEventListener('touchstart', handleClickOutside, true);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true);
      document.removeEventListener('touchstart', handleClickOutside, true);
    }
  }, [isOpen, ref, handler]);

  return [isOpen, ref, handler];
}

export { useCloseClickingOutside };
