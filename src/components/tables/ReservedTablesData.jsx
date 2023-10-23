import { useEffect } from "react";

const ReservedTablesData = () => {
  useEffect(() => {
    fetch("http://localhost:3500/Reservations")
      .then((res) => res.json())
      .then((reservations) => {
        localStorage.setItem(
          "reservations",
          JSON.stringify(reservations.sort((a, b) => b.id - a.id))
        );
      })
      .catch((err) => console.log(err));
    return localStorage.removeItem("reservations");
  }, []);

  const reservations = JSON.parse(localStorage.getItem("reservations"));
  return (
    <div className="w-full min-h-[50vh]">
      <h2 className="px-1 text-4xl font-semibold my-2 font-markazi-text">
        All reserved tables
      </h2>
      <table className="min-w-full divide-y divide-gray-300 border">
        <thead className="bg-gray-100">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Date
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Time
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Guests
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Occasions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {reservations ? (
            reservations.map((reservation) => (
              <tr className="hover:bg-gray-50" key={reservation.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {reservation.Date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {reservation.Time}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {reservation.Guests}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {reservation.Occasion}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="px-6 py-4">
                It looks like there are no reservations
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ReservedTablesData;
