import React, {useState} from 'react';

interface ReservationType {
  name: string;
  updateReservation: (updatedReservation: any) => void;
}
// Set Up The Initial Context
const context: ReservationType = {
  name: 'Reservation',
  updateReservation: (_updatedReservation: any) => {},
};
const ReservationContext = React.createContext<ReservationType>(context);
// Create an exportable consumer that can be injected into components
export const ReservationConsumer = ReservationContext.Consumer;
// Create the provider using a traditional React.Component class
interface Props {}
interface State {}

const ReservationProvider = (props: any) => {
  const initialState: ReservationType = {
    name: '',
    updateReservation: (updatedReservation: any) =>
      updateReservation(updatedReservation),
  };
  const [state, setState] = useState(initialState);
  const updateReservation = (updatedReservation: any) => {
    setState({
      ...state,
      ...updatedReservation,
    });
  };
  return (
    // value prop is where we define what values
    // that are accessible to consumer components
    <ReservationContext.Provider value={state}>
      {props.children}
    </ReservationContext.Provider>
  );
};

export default ReservationProvider;
