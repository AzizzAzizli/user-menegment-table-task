import { Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCloseModal } from "../../redux/modalSlice";

const Modal = ({ onClick }) => {
  const dispatch = useDispatch();
  const isActive = useSelector((state) => state.modal.isActive);

  return (
    <>
      <Typography
        sx={{
          background: "#80808059",
          position: "fixed",
          zIndex:99,
          top: "0%",
          left: isActive == true ? "0%" : "100%",
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
            background: "white",
            borderRadius: "10px",
            padding: "20px 20px",
            width: {
              xs: 0.65,
              sm: 0.5,
              md: 0.25,
              maxWidth:"300px"
            },
          }}
          component={"div"}
        >
          <Typography component={"div"}>
            <Typography
              sx={{
                color: "gray",
                textAlign: "center",
                fontSize: "18px",
                fontWeight: "500",
              }}
              component={"p"}
            >
              Are you sure?
            </Typography>
          </Typography>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "30px",
            }}
            component={"div"}
          >
            <Typography
            onClick={onClick}
              sx={{
                padding: "4px 30px",
                background: "#1976D2",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
              component={"button"}
            >
              Yes
            </Typography>
            <Typography
              onClick={() => dispatch(setCloseModal())}
              sx={{
                padding: "4px 30px",
                background: "red",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
              component={"button"}
            >
              Cancel
            </Typography>
          </Typography>
        </Typography>
      </Typography>
    </>
  );
};

export default Modal;
