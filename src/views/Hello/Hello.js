import React, { useState } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import "reset-css";
import { colors } from "./themes/colors";
import List from "./components/List";
import { v4 as uuidv4 } from "uuid";
import CustomButton from "./components/CustomButton";

const useStyles = makeStyles({
  wrapper: {
    maxWidth: "500px",
    margin: "auto"
  },
  heading: {
    backgroundColor: colors.darkBLue,
    textAlign: "center",
    color: colors.white,
    padding: "10px 0"
  },
  title: {
    fontSize: "16px",
    marginTop: "10px",
    marginBottom: "16px"
  },
  shippingContainer: {
    padding: "10px"
  },
  optionsContainer: {
    borderRadius: "4px",
    border: `1px solid ${colors.lightGray}`
  },
  button: {
    marginTop: "20px",
    padding: "10px"
  }
});

const initialMethods = [
  {
    type: "Free Shipping",
    detail: "Group Tracking for delivery",
    amount: "Free",
    active: false
  },
  {
    type: "Standard Shipping",
    detail: "Group Tracking for delivery",
    amount: "$5.85",
    active: false
  },
  {
    type: "Priority Processing",
    detail: "Tracked & Shipped Ahead of the  Queue ",
    amount: "$7.90",
    active: false
  },
  {
    type: "Priority Processing & Shipping Insurence",
    detail: "Tracked, Shipped Fast, Ensurance Guarantee",
    amount: "$12.80",
    active: false
  }
];

const App = () => {
  const classes = useStyles();
  const [methodsType, setMethodsType] = useState(initialMethods);

  const handleSelect = (index) => {
    const data = [...methodsType];
    const result = data.map((item) => {
      return {
        ...item,
        active: false
      };
    });
    result[index].active = true;
    setMethodsType(result);
  };

  return (
    <Box className={classes.wrapper}>
      <Typography className={classes.heading}>
        Your order is safe and secure
      </Typography>
      <Box className={classes.shippingContainer}>
        <Typography className={classes.title}>Shipping Method</Typography>
        <Box className={classes.optionsContainer}>
          {methodsType.map((item, i) => (
            <List
              key={uuidv4()}
              data={item}
              onClick={() => handleSelect(i)}
              border={i !== methodsType.length - 1}
            />
          ))}
        </Box>
        <CustomButton
          externalClass={classes.button}
          label="Complete My Order"
        />
      </Box>
    </Box>
  );
};

export default App;



import React from "react";
import { Box, Grid, makeStyles, Radio, Typography } from "@material-ui/core";
import "reset-css";
import { colors } from "../themes/colors";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  wrapper: {
    padding: "8px 0",
    paddingRight: "1rem",
    cursor: "pointer",
    borderBottom: (props) =>
      props.border ? `1px solid ${colors.lightGray}` : ""
  },
  title: {
    fontSize: "16px",
    color: colors.back
  },
  subTitle: {
    fontSize: "12px",
    color: colors.lightGray2
  },
  amountStatus: {
    fontSize: "16px",
    color: colors.back,
    fontWeight: 600
  },
  radio: {
    color: colors.buttonColor
  }
});

const List = ({ data, border, onClick }) => {
  const classes = useStyles({ border });
  return (
    <Grid
      container
      alignItems="center"
      justify="space-between"
      wrap="nowrap"
      className={classes.wrapper}
      onClick={onClick}
    >
      <Grid container alignItems="center" justify="flex-start" wrap="nowrap">
        <Radio
          color="default"
          checked={data.active}
          className={classes.radio}
        />
        <Box>
          <Typography className={classes.title}>{data.type}</Typography>
          <Typography className={classes.subTitle}>{data.detail}</Typography>
        </Box>
      </Grid>

      <Typography className={classes.amountStatus}>{data.amount}</Typography>
    </Grid>
  );
};

List.propTypes = {
  data: PropTypes.object,
  border: PropTypes.bool,
  onClick: PropTypes.func
};

export default List;



import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import "reset-css";
import { colors } from "../themes/colors";
import PropTypes from "prop-types";
import classnames from "classnames";

const useStyles = makeStyles({
  button: {
    backgroundColor: colors.buttonColor,
    borderRadius: "4px",
    textTransform: "capitalize",
    width: "100%",
    color: colors.white,
    fontWeight: 600,
    "&:hover": {
      backgroundColor: colors.buttonColor
    }
  }
});

const CustomButton = ({ label, externalClass, ...rest }) => {
  const classes = useStyles();
  return (
    <Button className={classnames(classes.button, externalClass)} {...rest}>
      {label}
    </Button>
  );
};

CustomButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.bool,
  externalClass: PropTypes.string
};

export default CustomButton;



export const colors = {
    darkBLue: "#132d4b",
    white: "#ffffff",
    lightGray: "#e1e1e1",
    lightGray2: "#949494",
    back: "#212121",
    buttonColor: "#4aa5a7"
  };
  