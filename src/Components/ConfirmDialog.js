import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CachedIcon from "@mui/icons-material/Cached";

export function ConfirmDialog(props) {
  const [open, setOpen] = React.useState(false);

  function handleClose() {
    setOpen(false);
  }

  function handleClickOpen() {
    setOpen(true);
  }

  return (
    <div>
      <IconButton
        aria-label="add an alarm"
        className="refresh-button"
        onClick={() => handleClickOpen()}
      >
        <CachedIcon />
        <span className="tooltiptextbutton">Refresh Game</span>
      </IconButton>
      <Dialog
        open={open}
        onClose={() => handleClose()}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirmation"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to refresh game?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={() => {
              props.handleRestartButtonClick();
              handleClose();
            }}
          >
            Refresh
          </Button>
          <Button onClick={() => handleClose()} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
