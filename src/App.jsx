import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import Store from "./components/Store";
import CreateAPost from "./components/CreateAPost";
import StaffDetails from "./components/CardDetails/StaffDetails";
import AdminNav from "./components/Admin/AdminNav";
import UnbanAppeal from "./components/UnbanAppeal";
import AdminSignUp from "./components/Admin/AdminSignUp";
import ApplyForStaff from "./components/ApplyForStaff";
import AdminPanel from "./components/Admin/AdminPanel";
import UnbanAppealPortal from "./components/Admin/UnbanAppealPortal";
import StaffApplications from "./components/Admin/StaffApplications";
import CompletePayment from "./components/CompletePayment";
import PostDetails from "./components/CardDetails/PostDetails";
import UnbanPortal from "./components/CardDetails/UnbanPortal";
import ReportAPlayer from "./components/ReportAPlayer";
import PlayerReports from "./components/Admin/PlayerReports";
import ReportDetails from "./components/CardDetails/ReportDetails";
import EditPost from "./components/EditPost";

function App() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState({});
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  const sendVerification = async () => {
    await auth.currentUser.sendEmailVerification();
    alert("A verification link has been sent to your email. Please check it.");
  };

  if (user) {
    db.collection("users")
      .doc(auth.currentUser.uid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setUserData(doc.data());
        }
      });
  }
  return (
    <>
      <NavBar user={user} />
      {userData.admin ? <AdminNav /> : null}
      {user ? (
        !user.emailVerified ? (
          <div class="alert alert-danger" role="alert">
            Your email is not verified!{" "}
            <button
              className="btn btn-outline-danger"
              onClick={sendVerification}
            >
              Click Here
            </button>{" "}
            to verify your email.
          </div>
        ) : null
      ) : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/store" element={<Store />} />
        <Route path="/createapost" element={<CreateAPost user={user} />} />
        <Route path="/unbanappeal" element={<UnbanAppeal user={user} />} />
        <Route path="/applyforstaff" element={<ApplyForStaff user={user} />} />
        <Route path="/reportaplayer" element={<ReportAPlayer />} />

        <Route path="/edit/:editpostid" element={<EditPost />} />

        <Route path="/admin/panel" element={<AdminPanel user={user} />} />
        <Route path="/admin/playerreports" element={<PlayerReports />} />
        <Route path="/admin/unbanportal" element={<UnbanAppealPortal />} />
        <Route path="/admin/staffapplication" element={<StaffApplications />} />
        <Route path="/admin/signup" element={<AdminSignUp />} />

        <Route path="/store/completepayment" element={<CompletePayment />} />

        <Route path="/post/:postid" element={<PostDetails />} />
        <Route path="/report/:reportid" element={<ReportDetails />} />
        <Route path="/unbanappeals/:appealid" element={<UnbanPortal />} />
        <Route path="/applications/:applicationid" element={<StaffDetails />} />
      </Routes>
    </>
  );
}

export default App;
