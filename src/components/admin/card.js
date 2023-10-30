import React, { useState, useEffect, useRef } from 'react';
import { fetchAdminTickets } from '../APIcalls/admin';

function Card() {
  const cardData = [
    {
      title: 'All Tickets',
      color: 'primary',
      icon: 'fa-home',
      filterStatus: undefined,
    },
    {
      title: 'Open Tickets',
      color: 'warning',
      icon: 'fa-folder-open',
      filterStatus: 'Open',
    },
    {
      title: 'Assigned Tickets',
      color: 'info',
      icon: 'fa-up-down-left-right',
      filterStatus: 'Assigned',
    },
    {
      title: 'Closed Tickets',
      color: 'success',
      icon: 'fa-folder-closed',
      filterStatus: 'Closed',
    },
  ];

  const [ticketData, setTicketData] = useState([]);
  const hasFetchedData = useRef(false);

  useEffect(() => {
    if (!hasFetchedData.current) {
      fetchAdminTickets()
        .then((data) => {
          if (data && data.tickets) {
            setTicketData(data.tickets);
          }
        })
        .catch((error) => {
          console.error('Error fetching student dashboard data:', error);
        });

      hasFetchedData.current = true;
    }
  }, []);

  const generateCard = (cardInfo, index) => {
    const filteredTickets = cardInfo.filterStatus
      ? ticketData.filter((ticket) => ticket.status === cardInfo.filterStatus)
      : ticketData;
  
    return (
      <div className="col-xl-3 col-md-6 mb-4" key={index}>
        <div className={`card border-left-${cardInfo.color} shadow h-100 py-2`}>
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className={`text-xs font-weight-bold text-${cardInfo.color} text-uppercase mb-1`}>
                  {cardInfo.title}
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">{filteredTickets.length}</div>
              </div>
              <div className="col-auto">
                <i className={`fas ${cardInfo.icon} fa-2x text-gray-300`}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <>
      {cardData.map((cardInfo, index) => (
        generateCard(cardInfo, index)
      ))}
    </>
  );
  

    }
export default Card;
