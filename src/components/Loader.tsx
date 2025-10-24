"use client";

import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="loader" style={{
      position: 'relative',
      display: 'inline-block',
      width: 'fit-content',
      height: 'fit-content'
    }}>
      <img
        src="/favicon copy.ico"
        alt="Loading"
        style={{
          width: '32px',
          height: '32px',
          display: 'block'
        }}
      />
      <div
        className="half-circle"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '40px',
          height: '40px',
          border: '3px solid transparent',
          borderTop: '3px solid #c8ff3d',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          animation: 'spin 1s linear infinite'
        }}
      />
    </div>
  );
};

export default Loader;
