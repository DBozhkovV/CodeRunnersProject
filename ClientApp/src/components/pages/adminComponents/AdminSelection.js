import React from "react";
import { MDBCard, MDBCardTitle, MDBContainer } from "mdbreact";

const AdminSelection = () => {
    return (
        <MDBContainer style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '16%'
        }}>
          <MDBCard className="card-body" style={{ width: "22rem", marginTop: "1rem" }}>
            <MDBCardTitle>Choose table</MDBCardTitle>
            <div className="flex-row">
              <a href="/admin/userTable">Users</a>
              <a href="/admin/seatTable" style={{ marginLeft: "1.25rem" }}>Desks</a>
            </div>
          </MDBCard>
        </MDBContainer>
      );
}

export default AdminSelection;