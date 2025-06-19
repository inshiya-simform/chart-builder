import { Button } from "antd";
import { toast, ToastContainer } from "react-toastify";
import { useAppDispatch } from "../../../store/hook";
import { chartActions } from "../../../store";
import { csvToObject } from "../../../utils/csvToObject";

const Data = () => {
  const dispatch = useAppDispatch();
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      if ("csv" === e.target.files[0].name.split(".").pop()) {
        const reader = new FileReader();
        reader.readAsText(e.target.files[0]);
        reader.onload = (event) => {
          const csvContent = event.target?.result as string;
          const data = csvToObject(csvContent);
          dispatch(chartActions.setData(data));
          toast.success("Data uploaded successfully!");
        };
      } else {
        toast.error("Please upload a valid CSV file.");
        return;
      }
    }
  }
  return (
    <>
      <Button title=".csv file" type="primary">
        <input
          type="file"
          id="file-upload"
          onChange={(e) => handleChange(e)}
          accept=".csv"
          style={{ display: "none" }}
        />
        <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
          Add Data
        </label>
      </Button>
      <ToastContainer />
    </>
  );
};

export default Data;
