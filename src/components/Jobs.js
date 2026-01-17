import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Fade } from "react-awesome-reveal";

const isHorizontal = window.innerWidth < 600;

/* ---------- Styled components (MUI v6) ---------- */

const Root = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  backgroundColor: theme.palette.background.paper,
  display: "flex",
  height: 300,
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  borderRight: `1px solid ${theme.palette.divider}`,
}));

/* ---------- Tab Panel ---------- */

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={
        isHorizontal
          ? `full-width-tabpanel-${index}`
          : `vertical-tabpanel-${index}`
      }
      aria-labelledby={
        isHorizontal ? `full-width-tab-${index}` : `vertical-tab-${index}`
      }
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return isHorizontal
    ? {
        id: `full-width-tab-${index}`,
        "aria-controls": `full-width-tabpanel-${index}`,
      }
    : {
        id: `vertical-tab-${index}`,
      };
}

const JobList = () => {
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    HTEC: {
      jobTitle: "Software Engineer Intern @",
      duration: "OCT 2025 - JAN 2026",
      desc: [
        <>
          Worked on a <strong>chat application</strong>, implementing core
          features such as sending messages, viewing chat history, and managing
          user interactions, focusing on reliability and usability.
        </>,
        <>
          Gained practical understanding of how communication works over the
          internet using the <strong>TCP protocol</strong>, ensuring stable
          connections and correct message delivery between users.
        </>,
        <>
          Used <strong>Jira</strong> for task tracking and planning, and{" "}
          <strong>Bitbucket</strong> for version control and team collaboration
          during development.
        </>,
      ],
    },
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Root className="tabPanel-joblist">
      <StyledTabs
        orientation={isHorizontal ? "horizontal" : "vertical"}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab
            key={key}
            label={isHorizontal ? `0${i}.` : key}
            {...a11yProps(i)}
          />
        ))}
      </StyledTabs>

      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel key={key} value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key].jobTitle + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key].duration}
          </div>
          <ul className="job-description">
            {experienceItems[key].desc.map((descItem, j) => (
              <Fade direction="down" triggerOnce={true}>
                <li>{descItem}</li>
              </Fade>
            ))}
          </ul>
        </TabPanel>
      ))}
    </Root>
  );
};

export default JobList;
