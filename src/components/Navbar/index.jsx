import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { useDispatch, useSelector } from "react-redux";
import { setActiveNewUserFormModal, setCloseNewUserFormModal } from "../../redux/modalSlice";
import FormModal from "../formModal";
import { addUser, clearUserData } from "../../redux/userSlice";
import { currentTime, exportToExcel } from "../../utils";
function Navbar() {
const dispatch = useDispatch()
  const userData = useSelector((state) => state.users.userData);
  const  newUserFormActive = useSelector((state)=>state.modal.newUserFormActive)
  const users = useSelector((state) => state.users.users);
  
  function closeFormModal() {
    dispatch(setCloseNewUserFormModal()) ;
    dispatch(clearUserData());
  }
  function createUser() {
    if (!userData.fullName || !userData.role || !userData.status) return alert('Please fill all the inputs!')
    dispatch(addUser())
    closeFormModal();
    
  }
  currentTime()

  return (
    <>
      {/* Create new user */}

      <FormModal formIsActive={newUserFormActive} onClose={closeFormModal} onClick={createUser}/>
      
      {/* Navbar */}
      
    <AppBar position="static">
      <Toolbar
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        component={"nav"}
      >
        <Box sx={{ display: "flex", alignItems:"center",flexDirection: { xs: "row" }, gap: {xs:0,sm:1} }}>
          <Typography
            variant="h6"
            component="span"
            sx={{
              fontSize: { xs: "14px", sm: "18px", md: "20px" },
              fontWeight: 500,
              display: { xs: "none", sm: "block" },
            }}
          >
            User
          </Typography>
          <Typography
            variant="h6"
            component="span"
            sx={{
              fontSize: { xs: "18px",  },
              fontWeight: 500,
              display: { xs: "block", sm: "none" },
            }}
          >
            U
          </Typography>
          <Typography
            variant="h5"
            component="span"
            sx={{
              fontSize: { xs: "16px", sm: "22px", md: "24px" },
              fontWeight: { xs: 500, sm: 600 },
              display: { xs: "none", sm: "block" },
            }}
          >
            Management
                  </Typography>
                  <Typography
            variant="h5"
            component="span"
            sx={{
              fontSize: { xs: "18px", },
              fontWeight: { xs: 600,},
              display: { xs: "block", sm: "none" },
            }}
          >
            M
          </Typography>
        </Box>

        <Typography style={{ display: "flex", gap: "8px" }} component={"div"}>
            <Button
              onClick={()=>exportToExcel(users)}
            variant="contained"
            sx={{
              background: "white",
              color: "gray",
              textTransform: "none",
              padding: { xs: "6px 12px", sm: "8px 16px" },
              fontSize: { xs: "12px", sm: "14px", md: "16px" },

              "&:hover": {
                background: "lightgray",
                color: "black",
              },
            }}
          >
            <InsertDriveFileIcon  sx={{ fontSize: "20px", mr: 1 }} /> Export to Excel
          </Button>
            <Button
               onClick={()=>dispatch(setActiveNewUserFormModal())}
            variant="contained"
            sx={{
              background: "white",
              color: "gray",
              textTransform: "none",
              padding: { xs: "6px 12px", sm: "8px 16px" },
              fontSize: { xs: "12px", sm: "14px", md: "16px" },

              "&:hover": {
                background: "lightgray",
                color: "black",
              },
            }}
          >
            <AddCircleIcon   sx={{ fontSize: "20px", mr: 1 }} /> User
          </Button>
        </Typography>
      </Toolbar>
    </AppBar>
    </>
  );
}

export default Navbar;
