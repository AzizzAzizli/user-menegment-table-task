import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import SettingsIcon from "@mui/icons-material/Settings";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, changeCurrentUsers, clearUserData, deleteUser, saveEdit, setActiveUserData } from "../../redux/userSlice";
import { decrement, increment, setCurrentPage, setTotalPages } from "../../redux/paginationSlice";
import Modal from "../modal";
import { setActiveForm, setActiveModal, setCloseFormModal, setCloseModal } from "../../redux/modalSlice";
import FormModal from "../formModal";


const TableComponent = () => {
 const formIsActive = useSelector((state)=>state.modal.formIsActive)
  const users = useSelector((state) => state.users.users);
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const totalPages = useSelector((state) => state.pagination.totalPages);
  const currentUsers = useSelector((state) => state.users.currentUsers);
  const activeIndex = useSelector((state) => state.modal.activeIndex);
  const dispatch = useDispatch()


  useEffect(() => {

    let total = Math.ceil(users.length / 5);
    
    dispatch(setTotalPages(total))

    let firstPart = users.slice(0, 5)

    dispatch(changeCurrentUsers(firstPart));
    
  }, []);


  useEffect(() => {

    let currentUsersPart = users.slice((currentPage - 1) * 5, currentPage * 5);

    dispatch(changeCurrentUsers(currentUsersPart));
    let total = Math.ceil(users.length / 5);
    
    dispatch(setTotalPages(total));
 
  }, [currentPage,users]);

  function deleteCurrentUser() {

    dispatch(deleteUser(activeIndex))

    dispatch(setCloseModal())

  }

  function activateEditForm(id) {
    dispatch(setActiveForm(id));
    dispatch(setActiveUserData(id))
  };
  function saveChanges() {
    dispatch(saveEdit(activeIndex));
    dispatch(clearUserData())
    dispatch(setCloseFormModal());
  }
  function closeEditFormModal() {
    dispatch(setCloseFormModal());
    dispatch(clearUserData());
  };

  return (
    <>
      {/* Delete Modal */}

      <Modal onClick={deleteCurrentUser} />

      {/* Form Modal */}

      <FormModal formIsActive={formIsActive} isEdit onClick={saveChanges} onClose={closeEditFormModal}/>

      {/* Table */}

      <Typography component={"div"}>
        <TableContainer sx={{ height: 400 }} component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell width={"10%"} align="left">
                  #
                </TableCell>
                <TableCell width={"25%"} align="left">
                  Full Name
                </TableCell>
                <TableCell width={"15%"} align="left">
                  Date Created
                </TableCell>
                <TableCell width={"15%"} align="left">
                  Role
                </TableCell>
                <TableCell width={"15%"} align="left">
                  Status
                </TableCell>
                <TableCell width={"5%"} align="left">
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentUsers?.map((row,i) => (
                <TableRow key={row.id+i+row.fullName+row.role+row.status}>
                  <TableCell align="left">{row.id}</TableCell>

                  <TableCell component="th" scope="row">
                    {row.fullName}
                  </TableCell>
                  <TableCell align="left">{row.dateCreated}</TableCell>
                  <TableCell align="left">{row.role}</TableCell>
                  <TableCell align="left">{row.status}</TableCell>
                  <TableCell align="left">
                    {
                      <Box sx={{ display: "flex", gap: 1 }}>
                        <Typography component={"div"}>
                          <SettingsIcon 
                            onClick={()=>activateEditForm(row.id)}
                          sx={{ color: "#1976D2", cursor: "pointer" }}
                        />
                        </Typography>
                       
                        <Typography  component={"div"}>
                          <CancelIcon onClick={() => dispatch(setActiveModal(row.id))}
                          sx={{ color: "red", cursor: "pointer" }} />

                        </Typography>
                      </Box>
                    }
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination  */}
        
        <Typography
          sx={{
            display: "flex",
            flexDirection:{sm:"row",xs:"column"},
            justifyContent: { sm: "space-between", xs: "center" },
            textAlign:{sm:"left",xs:"center"},
            padding: "6px 20px",
          }}
          component={"div"}
        >
          <Typography component={"div"}>
            <Typography
              sx={{ fontSize: "14px", color: "gray" }}
              component={"p"}
            >
              {`Showing ${currentPage==totalPages?users?.length:currentUsers.length*currentPage} of ${users?.length}`}
            </Typography>
          </Typography>
        
          <Typography component={"div"}>
            <Typography sx={{display:"flex",justifyContent:{sm:"normal",xs:"center"}}} gap={0.5} component={"div"}>
              <Typography
                onClick={()=>dispatch(decrement())}
                display={currentPage !== 1 ? "block" : "none"}
                sx={{ fontSize: "14px", color: "gray" ,cursor: "pointer", }}
                component={"p"}
              >
                Previous
              </Typography>
              <Typography sx={{ display: "flex" }} gap={1} component={"div"}>
                {
                  totalPages===3?new Array(totalPages).fill(0).map((_, i) => (<Typography onClick={() => dispatch(setCurrentPage(i + 1))} key={i} sx={{ fontSize: "14px", cursor: "pointer", width: "20px", textAlign: "center", color: i + 1 == currentPage ? "white" : "gray", background: i + 1 == currentPage ? "#1976D2" : "white" }} component={"div"}>
                  {i + 1}
                  </Typography>)):currentPage<=2?[...new Array(3).fill(0).map((_, i) => (<Typography onClick={() => dispatch(setCurrentPage(i + 1))} key={i} sx={{ fontSize: "14px", cursor: "pointer", width: "20px", textAlign: "center", color: i + 1 == currentPage ? "white" : "gray", background: i + 1 == currentPage ? "#1976D2" : "white" }} component={"div"}>
                  {i+1}
                  </Typography>)), <Typography sx={{color:"gray"}} component={"div"} key={"dots1"}>. . . </Typography> ]:currentPage>totalPages-2?[ <Typography sx={{color:"gray"}} component={"div"} key={"dots2"}>. . . </Typography>,...new Array(3).fill(0).map((_, i) => (<Typography onClick={() => dispatch(setCurrentPage(totalPages - 2 + i))} key={i} sx={{ fontSize: "14px", cursor: "pointer", width: "20px", textAlign: "center", color: totalPages - 2 + i == currentPage ? "white" : "gray", background: totalPages - 2 + i == currentPage ? "#1976D2" : "white" }} component={"div"}>
                    {totalPages - 2 + i}
                  </Typography>)) ]:currentPage>=3&& currentPage<=totalPages-2?[<Typography sx={{color:"gray"}} component={"div"} key={"dots3"}>. . . </Typography>,...new Array(3).fill(0).map((_, i) => (<Typography onClick={() => dispatch(setCurrentPage(currentPage-1+i))} key={i} sx={{ fontSize: "14px", cursor: "pointer", width: "20px", textAlign: "center", color: currentPage-1+i == currentPage ? "white" : "gray", background: currentPage-1+i == currentPage ? "#1976D2" : "white" }} component={"div"}>
                  {currentPage-1+i}
                  </Typography>)),<Typography sx={{color:"gray"}} component={"div"} key={"dots4"}>. . . </Typography>]:""
                }
      
              </Typography>
              <Typography
                onClick={()=>dispatch(increment())}
                sx={{ fontSize: "14px", color: "gray" ,cursor:"pointer"}}
                component={"p"}
                display={currentPage !== totalPages ? "block" : "none"}
              >
                Next
              </Typography>
            </Typography>
          </Typography>
        </Typography>
      </Typography>
    </>
  );
};

export default TableComponent;
