import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
 
  const BookingCard = () => {
      const storedUserDetails = localStorage.getItem('facilityUser');
      const userType = JSON.parse(storedUserDetails).userDetails.userType ;

      const [bookings, setBookings] = useState([]);
      const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            let response;
            if (userType === 'admin' || userType === 'DVC' || userType === 'Director' ) {
              response = await axios.get('http://localhost:4000/api/booking/getAllBookings');
            } else if(userType==='university'){
              response = await axios.get('http://localhost:4000/api/booking/getBooking/:userID');
            }
            console.log("res",response.data);
            setBookings(response.data);
            setLoading(false);
          } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);
    


      return (
        <Box display="flex" justifyContent="center" mt={4}>
      {loading ? (
        <Typography variant="h6">Loading...</Typography>
      ) : (
        bookings.map((booking, index) => (
          <Card key={index} sx={{ minWidth: 275, margin: '10px' }} variant="outlined">
            <CardContent>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Organization : {booking.organizationName}<br></br>
              Facility : {booking.facility}<br></br>
              Date : {new Date(booking.date).toLocaleDateString()}<br />
              Time : {booking.Time}<br /><br/>
              Status : {booking.status}
              </Typography>
          
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))
      )}
    </Box>
      );
    };
    
    export default BookingCard;