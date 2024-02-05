import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const fetchBookings = async () => {
      // Simulating a database fetch
      const response = await fetch('http://localhost:3000/booking');
      const data = await response.json();
      return data;
    };
    
    const BookingCard = () => {
      const [bookings, setBookings] = useState([]);
      const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        // Fetch booking details when the component mounts
        const fetchData = async () => {
          try {
            const data = await fetchBookings();
            setBookings(data);
          } catch (error) {
            console.error('Error fetching bookings:', error);
          }
        };
    
        fetchData();
      }, []); // Empty dependency array ensures this effect runs once on mount
    

      return (
        <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined">
            {loading ? (
              <CardContent>
                <Typography variant="h5" component="div">
                  No Booking Details
                </Typography>
              </CardContent>
            ) : (
              <>
                {bookings.map((booking) => (
                  <Card key={booking.id}>
                    <CardContent>
                      <Typography color="text.secondary" gutterBottom>
                        
                        Booking ID: {booking.id}
                      </Typography>
                      <Typography variant="h5" component="div">
                        Facility: {booking.name}
                      </Typography>
                      <Typography variant="body2">
                        {/* Your additional details here */}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                ))}
              </>
            )}
          </Card>
        </Box>
      );
    };
    
    export default BookingCard;
//   return (
//     <div>
//       <h2>Booking Details</h2>
//       {bookings.map((booking) => (
//         <div key={booking.id} className="booking-card">
//           <p>Booking ID: {booking.id}</p>
//           <p>Facility: {booking.name}</p>
//           <p>Date: {booking.bookingDate}</p>
//           <p>Time: {booking.Time}</p>
//           <p>Comments: {booking.comments}</p>
//           <p>Status: {booking.status}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BookingCard;
