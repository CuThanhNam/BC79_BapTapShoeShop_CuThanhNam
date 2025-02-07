import React from 'react'

export default function ButtonColor({ color }) {
    return (
      <button
        className="px-10 py-5 rounded border-2 mx-5 to-white"
        style={{ background: color }}
      >
        {color}
      </button>
    );
  }
