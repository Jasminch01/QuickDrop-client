import { useQuery } from "@tanstack/react-query";
import { getParcels } from "../../api/auth";
import useAuth from "../../Hooks/UseAuth";
import { MdArrowRightAlt } from "react-icons/md";
import DataTable from "react-data-table-component";

const MyParcels = () => {
  const { user } = useAuth();
  const { email } = user;
  const { data = [], isLoading } = useQuery({
    queryFn: async () => await getParcels(email),
    queryKey: ["parcels"],
  });

  const columns = [
    {
      name: "Serial Number",
      selector: (row, idx) => idx + 1,
      sortable: true,
      center: true,
      responsive: true,
    },
    {
      name: "Sender Name",
      selector: (row) => row.name,
      sortable: true,
      center: true,
      responsive: true,
    },
    {
      name: "Reciver Name",
      selector: (row) => row.reciver_name,
      sortable: true,
      center: true,
      responsive: true,
    },
    {
      name: "Reciver Phone",
      selector: (row) => row.reciver_phone,
      sortable: true,
      center: true,
      responsive: true,
    },
    {
      name: "Parcel Weight",
      selector: (row) => row.parcel_weight + " kg",
      sortable: true,
      center: true,
      responsive: true,
    },
    {
      name: "Parcel Price",
      selector: (row) => row.price + " tk",
      sortable: true,
      center: true,
      responsive: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
      center: true,
      responsive: true,
    },
    {
      name: "Booking Date",
      selector: (row) => row.bookingDate,
      sortable: true,
      center: true,
      responsive: true,
    },
    {
      name: "Delivery Man",
      selector: (row) => (row?.deliveryman ? row.deliveryman : "Not Asssign"),
      sortable: true,
      center: true,
      responsive: true,
      style: {
        color: "red",
      },
    },
    {
      name: "Action",
      selector: (row) => row.timestamp,
      sortable: true,
      center: true,
      responsive: true,
      cell: () => (
        <button className="py-2 font-bold bg-red-400 text-white px-3">
          Cancel Parcel
        </button>
      ),
    },
    {
      name: "Pay",
      selector: (row) => row.timestamp,
      sortable: true,
      center: true,
      responsive: true,
      cell: () => (
        <button className="py-2 bg-green-400 font-bold text-white px-3">
          Make Payment
        </button>
      ),
    },
  ];
  const customStyles = {
    headRow: {
      style: {
        backgroundColor: "#DBEAFE",
        color: "black",
        fontWeight: "bold", // Adding font bold
      },
    },
    headCells: {},
    rows: {
      style: {
        backgroundColor: "#F7FAFC",
      },
    },
  };

  return (
    <div>
      <div className="flex items-center gap-5">
        <MdArrowRightAlt size={25} />
        <p className="text-2xl font-medium">My parcels</p>
      </div>
      <hr className="my-10" />
      <div className="mt-10">
        <DataTable columns={columns} data={data} customStyles={customStyles} />
      </div>
    </div>
  );
};

export default MyParcels;
