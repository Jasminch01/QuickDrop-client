import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../api/auth";
import DataTable from "react-data-table-component";
import { MdArrowRightAlt } from "react-icons/md";

const Users = () => {
  const { data: users = [], isLoading } = useQuery({
    queryFn: async () => await getUsers(),
    queryKey: ["users"],
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
      name: "User Name",
      selector: (row) => row.name,
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
      name: "User Role",
      selector: (row) => row.role,
      sortable: true,
      center: true,
      responsive: true,
    },
    {
      name: "Created At",
      selector: (row) => row.timestamp,
      sortable: true,
      center: true,
      responsive: true,
    },
    {
      name: "Action",
      selector: (row) => row.timestamp,
      sortable: true,
      center: true,
      responsive: true,
      cell: () => (
        <button className="py-2 bg-blue-400 text-white px-3">
          Update Role
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
    headCells: {
    },
    rows: {
      style: {
        backgroundColor: '#F7FAFC',
      }
    }
  };

  return (
    <div>
      <p className="font-medium text-lg flex items-center gap-5">
        <MdArrowRightAlt size={25} />
        Users
      </p>
      <hr className="my-5"/>
      <div className="mt-10">
        <DataTable columns={columns} data={users} customStyles={customStyles} />
      </div>
    </div>
  );
};

export default Users;
