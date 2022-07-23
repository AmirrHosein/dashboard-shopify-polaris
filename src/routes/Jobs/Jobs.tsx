import { Route, Routes } from "react-router";
import EditJob from "../EditJob/EditJob";
import JobList from "../JobList/JobList";
import Newjob from "../Newjob/Newjob";

export default function Jobs() {
  return (
    <Routes>
      <Route path="/" element={<JobList />}></Route>
      <Route path="/new" element={<Newjob />}></Route>
      <Route path="/edit/:id" element={<EditJob />}></Route>
    </Routes>
  );
}
