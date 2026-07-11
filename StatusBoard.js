import TicketInformation from "./TicketInformation";
import React from 'react';
import completed from '../component/completed.png';
import failed from '../component/failed.png';
import inProgress from '../component/in-progress.png';

export default function StatusBoard() {
    return (
        <div className="status-board">
            <TicketInformation res="resolved" image={completed}>
                Completed Tickets
            </TicketInformation>
            <TicketInformation res="in-progress" image={inProgress}>
                In Progress Tickets
            </TicketInformation>
            <TicketInformation res="failed" image={failed}>
                Failed Tickets
            </TicketInformation>
        </div>
    );
};