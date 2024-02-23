import React, { useState, useEffect } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { Box, Stack } from "@mui/material";

export default function DynamicPieChart() {
  // State variables
  const [chartData, setChartData] = useState([
    { id: 0, value: 10, label: "Groceries" },
    { id: 1, value: 15, label: "Food" },
    { id: 2, value: 20, label: "Transportation" },
  ]);
  const [newLabel, setNewLabel] = useState("");
  const [newValue, setNewValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [errorDialogOpen, setErrorDialogOpen] = useState(false);
  const [exceedDialogOpen, setExceedDialogOpen] = useState(false);
  const monthlySalary = 3000; // Hardcoded monthly salary

  // Check if the total budget exceeds the monthly salary whenever chartData or monthlySalary changes
  useEffect(() => {
    const totalBudget = chartData.reduce(
      (acc, curr) => acc + (curr.value / 100) * monthlySalary,
      0
    );
    if (totalBudget > monthlySalary) {
      setExceedDialogOpen(true);
    }
  }, [chartData, monthlySalary]);

  // Functions for adding, editing, updating, and deleting data
  const handleAddData = () => {
    if (!newLabel || !newValue) {
      setErrorDialogOpen(true);
      return;
    }
    const newId = chartData.length;
    setChartData((prevData) => [
      ...prevData,
      { id: newId, value: parseInt(newValue), label: newLabel },
    ]);
    setNewLabel("");
    setNewValue("");
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setNewLabel(chartData[index].label);
    setNewValue(chartData[index].value.toString());
  };

  const handleUpdate = () => {
    if (!newLabel || !newValue) {
      setErrorDialogOpen(true);
      return;
    }
    setChartData((prevData) => {
      const updatedData = [...prevData];
      updatedData[editIndex] = {
        ...updatedData[editIndex],
        label: newLabel,
        value: parseInt(newValue),
      };
      return updatedData;
    });
    setEditIndex(null);
    setNewLabel("");
    setNewValue("");
  };

  const handleDelete = (index) => {
    setChartData((prevData) => prevData.filter((_, i) => i !== index));
  };

  // Functions for closing dialogs
  const handleCloseErrorDialog = () => {
    setErrorDialogOpen(false);
  };

  const handleCloseExceedDialog = () => {
    setExceedDialogOpen(false);
  };

  return (
    <Stack spacing={2} marginTop={2} marginLeft={2}>
      {/* Title */}
      <Typography variant="h4">Monthly Budget Planner</Typography>
      {/* Display monthly income */}
      <Typography variant="h5">
        Your Monthly income is ${monthlySalary}
      </Typography>
      {/* Main Content */}
      <Stack spacing={2} alignItems="center">
        {/* Form for adding new data */}
        <Stack spacing={2} direction="row" alignItems="center">
          <TextField
            label="Category"
            value={newLabel}
            onChange={(e) => setNewLabel(e.target.value)}
            style={{ marginRight: "10px" }}
          />
          <TextField
            label="Percentage"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
            type="number"
            style={{ marginRight: "10px" }}
          />
          {editIndex !== null ? (
            <Button variant="contained" color="primary" onClick={handleUpdate}>
              Update
            </Button>
          ) : (
            <Button variant="contained" color="primary" onClick={handleAddData}>
              Add Category
            </Button>
          )}
        </Stack>
        {/* Pie chart */}
        <PieChart
          series={[{ data: chartData }]}
          width={500}
          height={230}
          labelAccessor={({ dataEntry }) => `${dataEntry.value}%`}
        />
      </Stack>

      {/* Cards displaying categories */}
      <Stack spacing={2}>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          {chartData.map((category, index) => (
            <Card
              key={category.id}
              style={{
                marginRight: "30px",
                marginBottom: "10px",
                width: "23%",
              }}
            >
              <CardContent>
                <Typography variant="h5">{category.label}</Typography>
                <Typography>
                  Budget: {category.value}% equals to $
                  {(category.value / 100) * monthlySalary}
                </Typography>
                <IconButton onClick={() => handleEdit(index)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(index)}>
                  <DeleteIcon />
                </IconButton>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Stack>

      {/* Error Dialog */}
      <Dialog open={errorDialogOpen} onClose={handleCloseErrorDialog}>
        <DialogTitle>Input Error</DialogTitle>
        <DialogContent>
          <Typography>Please enter both category and Percentage.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseErrorDialog} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>

      {/* Exceed Dialog */}
      <Dialog open={exceedDialogOpen} onClose={handleCloseExceedDialog}>
        <DialogTitle>Total Budget Exceeds Monthly Salary</DialogTitle>
        <DialogContent>
          <Typography>
            The total budget exceeds your monthly salary. Please review your
            expenses.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseExceedDialog} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}
