'use client';

import { useState } from 'react';

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleYes = () => {
    setShowThankYou(true);

    //close modal in 2sc
    setTimeout(() => {
      setIsOpen(false);
      setShowThankYou(false);
    }, 2000);
  };

  const handleClose = () => {
    setIsOpen(false);
    setShowThankYou(false);
  };

  return (
    <>
      {/* Open Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-md bg-purple-700 px-4 py-2 text-white"
      >
        Open Modal
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="relative w-80 rounded-lg bg-white p-6 shadow-lg">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-xl"
            >
              ✕
            </button>

            {/* Content */}
            {!showThankYou ? (
              <>
                <h2 className="mb-6 text-center text-xl font-bold">
                  Are you ready?
                </h2>

                <div className="flex justify-center gap-4">
                  <button
                    onClick={handleYes}
                    className="rounded-md bg-green-600 px-4 py-2 text-white"
                  >
                    Yes
                  </button>

                  <button
                    onClick={handleClose}
                    className="rounded-md bg-red-600 px-4 py-2 text-white"
                  >
                    No
                  </button>
                </div>
              </>
            ) : (
              <div className="py-6 text-center">
                <h2 className="text-2xl font-bold text-green-600">
                  Thank You!
                </h2>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
