"use client";

import React, { useEffect, useRef } from 'react';

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, className = '', ...props }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-900/50 backdrop-blur-sm p-4">
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        className={`relative w-full max-w-lg bg-white rounded-2xl shadow-xl flex flex-col ${className}`}
        {...props}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export const ModalHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className = '', ...props }) => (
  <div className={`px-6 py-4 border-b border-gray-100 ${className}`} {...props}>
    {children}
  </div>
);

export const ModalBody: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className = '', ...props }) => (
  <div className={`px-6 py-4 ${className}`} {...props}>
    {children}
  </div>
);

export const ModalFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className = '', ...props }) => (
  <div className={`px-6 py-4 border-t border-gray-100 bg-gray-50/50 flex items-center justify-end gap-3 rounded-b-2xl ${className}`} {...props}>
    {children}
  </div>
);
