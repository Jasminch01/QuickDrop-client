import { useQuery } from "@tanstack/react-query";
import DataTable from "react-data-table-component";
import { MdArrowRightAlt } from "react-icons/md";
import { getAllDeliveryMan } from "../../api/auth";

const DeliveryMans = () => {
  const {
    data: deliverymans = [],
    isLoading,
    refetch,
  } = useQuery({
    queryFn: async () => await getAllDeliveryMan(),
    queryKey: ["deliverymans"],
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
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
      center: true,
      responsive: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
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
      name: "Number of percels delivery",
      selector: (row) => row.status,
      sortable: true,
      center: true,
      responsive: true,
    },
    {
      name: "Avrage Review",
      selector: (row) => row.status,
      sortable: true,
      center: true,
      responsive: true,
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
        Delivery Mans
      </p>
      <hr className="my-5" />
      <div className="mt-10">
        <DataTable
          columns={columns}
          data={deliverymans}
          customStyles={customStyles}
        />
      </div>
    </div>
  );
};

export default DeliveryMans;
