import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion({ content }) {
  const classes = useStyles();

  return content.map(({ title, label }) => (
    <div className={classes.root}>
      <Accordion
        style={{
          backgroundColor: "#303030",
          color: "white",
          padding: "10px",
          marginTop: "10px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading + "test"}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{label}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  ));
}
