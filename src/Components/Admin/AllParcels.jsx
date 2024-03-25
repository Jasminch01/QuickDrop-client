import { useQuery } from "@tanstack/react-query";
import DataTable from "react-data-table-component";
import { MdArrowRightAlt } from "react-icons/md";
import { getAllParcels } from "../../api/auth";
import { useState } from "react";
import AssignModal from "./AssignModal";

const AllParcels = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [assignParcel, setAssignParcel] = useState({})
  const { data: parcels = [], isLoading, refetch } = useQuery({
    queryFn: async () => await getAllParcels(),
    queryKey: ["parcels"],
  });

  const handleManage = (parcel) => {
    setIsOpen(true);
    setAssignParcel(parcel)
  }

  const columns = [
    {
      name: "Serial Number",
      selector: (row, idx) => idx + 1,
      sortable: true,
      center: true,
      responsive: true,
    },
    {
      name: "User Name",
      selector: (row) => row.name,
      sortable: true,
      center: true,
      responsive: true,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
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
      name: "Cost",
      selector: (row) => row.price,
      sortable: true,
      center: true,
      responsive: true,
    },
    {
      name: "Action",
      selector: (row) => row.bookingDate,
      sortable: true,
      center: true,
      responsive: true,
      cell: (row) => (
        <button onClick={() => handleManage(row)} className="py-2 bg-blue-400 text-white px-3">
          Manage
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
      <p className="font-medium text-lg flex items-center gap-5">
        <MdArrowRightAlt size={25} />
        Parcels
      </p>
      <hr  className="my-5"/>
      <div className="mt-10">
        <DataTable columns={columns} data={parcels} customStyles={customStyles} />
      </div>
      <AssignModal isOpen={isOpen} setIsOpen={setIsOpen} parcel={assignParcel}/>
    </div>
  );
};

export default AllParcels;
