import React, { memo } from 'react'

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { pxToRem } from '../../../utils/styles'

const useStyles = makeStyles(theme => ({
  dialogPaper: {
    padding: theme.spacing(6, 2, 2),
    width: pxToRem(487),
  },
  dialogContent: {
    padding: theme.spacing(0, 4),
    '&:first-child': {
      paddingTop: 0,
    },
  },
  dialogActions: {
    padding: 0,
  },
  dialogTitle: {
    color: theme.palette.common.black,
    padding: theme.spacing(0, 4, 4),

    '& h4': {
      fontWeight: 500,
    },
  },
  description: {
    color: theme.palette.text.primary,
  },
}))

function Alert({
  cancelLabel = 'Cancel',
  confirmLabel = 'Confirm',
  description,
  isOpen,
  onCancel,
  onConfirm,
  title,
}) {
  const classes = useStyles()

  return (
    <Dialog
      open={isOpen}
      classes={{
        paper: classes.dialogPaper,
      }}
    >
      {title && (
        <DialogTitle
          className={classes.dialogTitle}
          disableTypography
          id="alert-dialog-title"
        >
          <Typography variant="h4">{title}</Typography>
        </DialogTitle>
      )}
      <DialogContent className={classes.dialogContent}>
        <DialogContentText
          id="alert-dialog-description"
          className={classes.description}
        >
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        <Button onClick={onCancel} color="primary">
          {cancelLabel}
        </Button>
        {onConfirm && (
          <Button onClick={onConfirm} color="primary" autoFocus>
            {confirmLabel}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  )
}

export default memo(Alert)
