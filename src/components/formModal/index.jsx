import { Autocomplete, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../redux/userSlice";
import { setCloseFormModal } from "../../redux/modalSlice";

const FormModal = ({isEdit, onClick,onClose,formIsActive}) => {
  const userData = useSelector((state) => state.users.userData);
 
  const dispatch = useDispatch();

  return (
    <>
      <Typography
        sx={{
          background: "#80808059",
          position: "fixed",
          top: "0%",
          left: formIsActive == true ? "0%" : "100%",
          width: "100%",
          minHeight: "100vh",
          transition: "all 0.5s ease-out",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        component={"div"}
      >
        <Typography
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            alignItems: "center",
            background: "white",
            borderRadius: "10px",
            padding: "20px 10px",
            width: {
              xs: 0.65,
              sm: 0.5,
              md: 0.35,
              lg: 0.25,

            },
          }}
          component={"div"}
        >
          <TextField
            onChange={(e) =>
              dispatch(
                setUserData({ name: e.target.name, value: e.target.value })
              )
            }
            name="fullName"
            value={userData?.fullName}
            sx={{ width: "100%" }}
            id="outlined-basic"
            label="Fullname"
            variant="outlined"
          />
          <TextField
            value={userData?.role}
            name="role"
            onChange={(e) =>
              dispatch(
                setUserData({ name: e.target.name, value: e.target.value })
              )
            }
            sx={{ width: "100%" }}
            id="outlined-basic"
            label="Role"
            variant="outlined"
          />
          <Autocomplete
            value={userData?.status}
            onChange={(event, newValue) => {
              dispatch(setUserData({ name: "status", value: newValue }));
            }}
            inputValue={userData?.status}
            // onInputChange={(event, newInputValue) => {}}
            id="controllable-states-demo"
            options={["Active", "Inactive"]}
            sx={{ width: "100%" }}
            renderInput={(params) => (
              <TextField {...params} name="status" label="Status" />
            )}
          />
          <Typography  sx={{display:"flex",justifyContent:"space-between",width:"100%"}} component={"div"}>
            <Button onClick={onClick} sx={{width:"45%"}} variant="outlined" color="success">
             {isEdit?"Save":"Add"}
            </Button>
            <Button onClick={onClose} sx={{width:"45%"}}  variant="outlined" color="error">
              Cancel
            </Button>
          </Typography>
        </Typography>
      </Typography>
    </>
  );
};

export default FormModal;
