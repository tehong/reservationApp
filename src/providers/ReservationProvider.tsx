import React, { PureComponent } from "react";

// Set Up The Initial Context
const ReservationContext = React.createContext("Reservation");
// Create an exportable consumer that can be injected into components
export const ReservationConsumer = ReservationContext.Consumer;
// Create the provider using a traditional React.Component class
class ReservationProvider extends PureComponent {
  state = {
    name: "",
    updateReservation: (updatedReservation: any) =>
      this.updateReservation(updatedReservation)
  };
  updateReservation = (updatedReservation: any) => {
    this.setState(prevState => ({
      ...prevState,
      ...updatedReservation
    }));
  };
  render() {
    return (
      // value prop is where we define what values
      // that are accessible to consumer components
      <ReservationContext.Provider value={this.state}>
        {this.props.children}
      </ReservationContext.Provider>
    );
  }
}

export default ReservationProvider;
