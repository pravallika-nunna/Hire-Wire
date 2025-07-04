import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logout, clearAllUserErrors } from "../store/slices/userSlice";
import { LuMoveRight } from "react-icons/lu";

import MyProfile from "../components/MyProfile";
import UpdateProfile from "../components/UpdateProfile";
import UpdatePassword from "../components/UpdatePassword";
import MyJobs from "../components/MyJobs";
import JobPost from "../components/JobPost";
import Applications from "../components/Applications";
import MyApplications from "../components/MyApplications";
import Spinner from "../components/Spinner";

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const [componentName, setComponentName] = useState("");
  // const [componentName, setComponentName] = useState(null); // Start with null

  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const { loading, isAuthenticated, error, user } = useSelector(
  (state) => state.user
);

// ✅ Debug Redux state on change
useEffect(() => {
  console.log("🔍 Redux user state =>", {
    loading,
    isAuthenticated,
    user,
    error,
  });
}, [loading, isAuthenticated, user, error]);



  // Redirect if not authenticated or error occurred
//   useEffect(() => {
//     if (error) {
//       toast.error(error);
//       dispatch(clearAllUserErrors());
//     }

//     if (!isAuthenticated) {
//       navigateTo("/");
//     }
//   }, [dispatch, error, isAuthenticated, navigateTo]);

//   useEffect(() => {
//   console.log("Redux state:", { loading, user });
// }, [loading, user]);

useEffect(() => {
  if (!loading && !isAuthenticated) {
    navigateTo("/");
  }

  if (error) {
    toast.error(error);
    dispatch(clearAllUserErrors());
  }
}, [dispatch, error, isAuthenticated, loading, navigateTo]);



  // Set initial tab based on user role
  useEffect(() => {
      if (user?.role) {
        if (user.role === "Recruiter") {
          setComponentName("Applications");
        } else {
          setComponentName("My Profile");
        }
      }
    }, [user?.role]); // 🔁 Change dependency from [user?.role] to [user]

      const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out successfully.");
  };


    if (!isAuthenticated || loading || !user) {
    return (
      <div className="spinner-wrapper">
        <Spinner />
        {/* <p className="spinner-message">Please refresh this page</p> */}
      </div>
    );
  }


  //Cleaner mapping of component names to components
  const componentMap = {
    "My Profile": <MyProfile />,
    "Update Profile": <UpdateProfile />,
    "Update Password": <UpdatePassword />,
    "Job Post": <JobPost />,
    "My Jobs": <MyJobs />,
    "Applications": <Applications />,
    "My Applications": <MyApplications />,
  };

   

  return (
    <section className="account">
      <div className="component_header">
        <p>Dashboard</p>
        <p>
        Welcome! <span style={{ fontSize: "1.5rem" }}>{user.name}</span>

        </p>
      </div>
      <div className="container">
        <div className={show ? "sidebar showSidebar" : "sidebar"}>
          <ul className="sidebar_links">
            <h4>Manage Account</h4>
            <li>
              <button
                onClick={() => {
                  setComponentName("My Profile");
                  setShow(false);
                }}
              >
                My Profile
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setComponentName("Update Profile");
                  setShow(false);
                }}
              >
                Update Profile
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setComponentName("Update Password");
                  setShow(false);
                }}
              >
                Update Password
              </button>
            </li>

            {user?.role === "Recruiter" && (
              <>
                <li>
                  <button
                    onClick={() => {
                      setComponentName("Job Post");
                      setShow(false);
                    }}
                  >
                    Post New Job
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setComponentName("My Jobs");
                      setShow(false);
                    }}
                  >
                    My Jobs
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setComponentName("Applications");
                      setShow(false);
                    }}
                  >
                    Applications
                  </button>
                </li>
              </>
            )}

            {user?.role === "Job Seeker" && (
              <li>
                <button
                  onClick={() => {
                    setComponentName("My Applications");
                    setShow(false);
                  }}
                >
                  My Applications
                </button>
              </li>
            )}

            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>

        <div className="banner">
          <div
            className={show ? "sidebar_icon move_right" : "sidebar_icon move_left"}
          >
            <LuMoveRight
              onClick={() => setShow(!show)}
              className={show ? "left_arrow" : "right_arrow"}
            />
          </div>

          {/* Render the active component */}
          {componentMap[componentName] || <MyProfile />}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;