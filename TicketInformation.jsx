import React from 'react'

export default function TicketInformation({ res, image, children }) {
  const bgColor =
    res === "resolved" ? 'bg-green-500'
    : res === "in-progress" ? 'bg-red-500'
    : res === "failed" ? 'bg-yellow-500'
    : 'bg-gray-500';



  return (
    <div className="ticket-info" style={{ backgroundColor: bgColor }}>

      <img src={image} alt="ticket" className="ticket-image" />
      <h1>{children}</h1>

    </div>
  );
};
