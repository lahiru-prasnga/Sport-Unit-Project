import React, { useState, useEffect } from "react";
import { Table, Button, Modal } from "antd";
import axios from "axios";
import "./bookingAproval.css";

const BookingApproval = () => {
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/booking/getAllBookings"
      );
      setBookings(response.data);
    } catch (error) {
      console.error("Error fetching booking data", error);
    }
  };

  const columns = [
    {
      title: "Organization Name",
      dataIndex: "organizationName",
      key: "organizationName",
    },
    {
      title: "organization Address",
      dataIndex: "organizationAddress",
      key: "facility",
    },
    {
      title: "Selected Facility",
      dataIndex: "facility",
      key: "facility",
    },
    {
      title: "Booking Date",
      dataIndex: "bookingDate",
      key: "bookingDate",
    },
    {
      title: "Booking Time",
      dataIndex: "Time",
      key: "Time",
    },
    {
      title: "Designation",
      dataIndex: "designation",
      key: "designation",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Button className="ant-btn" onClick={() => handleViewDetails(record)}>
          View Details
        </Button>
      ),
    },
  ];

  const handleViewDetails = (booking) => {
    setSelectedBooking(booking);
    setIsModalVisible(true);
  };

  const handleApprove = () => {
    // approve logic
  };

  const handleReject = () => {
    // reject logic
  };

  return (
    <div>
      <h1 className="admin-dashboard-header">Booking Request Details</h1>
      <Table
        className="ant-table-container"
        dataSource={bookings}
        columns={columns}
      />

      <Modal
        className="ant-modal-content"
        title="Booking Details"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={[
          <Button key="approve" onClick={handleApprove}>
            Approve
          </Button>,
          <Button key="reject" onClick={handleReject}>
            Reject
          </Button>,
        ]}
      >
        <p className="model-pharagraph">
          <strong className="model-pharagraph">Organization Name:</strong>{" "}
          {selectedBooking?.organizationName}
        </p>
        <p className="model-pharagraph">
          <strong className="model-pharagraph">Organization Adress:</strong>{" "}
          {selectedBooking?.organizationAddress}
        </p>
        <p className="model-pharagraph">
          <strong className="model-pharagraph">Selected Facility:</strong>{" "}
          {selectedBooking?.facility}
        </p>
        <p className="model-pharagraph">
          <strong className="model-pharagraph">Booking Date:</strong>{" "}
          {selectedBooking?.bookingDate}
        </p>
        <p className="model-pharagraph">
          <strong className="model-pharagraph">Booking Time:</strong>{" "}
          {selectedBooking?.Time}
        </p>
        <p className="model-pharagraph">
          <strong className="model-pharagraph">Designation:</strong>{" "}
          {selectedBooking?.designation}
        </p>
        <p className="model-pharagraph">
          <strong className="model-pharagraph">Description:</strong>{" "}
          {selectedBooking?.description}
        </p>
        <p className="model-pharagraph">
          <strong className="model-pharagraph">Status:</strong>{" "}
          {selectedBooking?.status}
        </p>
      </Modal>
    </div>
  );
};

export default BookingApproval;
