import React from "react";
import PropTypes from "prop-types";
import {
  Tabs,
  Tab,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Fade } from "react-awesome-reveal";

/* ---------- Tab Panel ---------- */

function TabPanel(props) {
  const { children, value, index, isMobile, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={
        isMobile ? `full-width-tabpanel-${index}` : `vertical-tabpanel-${index}`
      }
      aria-labelledby={
        isMobile ? `full-width-tab-${index}` : `vertical-tab-${index}`
      }
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 2, sm: 3 } }}>
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
  isMobile: PropTypes.bool,
};

function a11yProps(index, isMobile) {
  return isMobile
    ? {
        id: `full-width-tab-${index}`,
        "aria-controls": `full-width-tabpanel-${index}`,
      }
    : {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
      };
}

const JobList = () => {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const experienceItems = {
    "Cape Ann": {
      jobTitle: "Prompt Engineer Intern @",
      url: "https://capeannenterprises.com/",
      duration: "MAR 2026 - JUN 2026",
      desc: [
        <>
          Built <strong>Python frontend</strong> and <strong>backend</strong>{" "}
          functionality using LLMs such as OpenAI ChatGPT, Google Gemini, and
          Anthropic Claude.
        </>,
        <>
          Extended an existing <strong>AI healthcare platform</strong> with new
          features for Alzheimer's interviews and MoCA cognitive assessments.
        </>,
        <>
          Improved conversational AI workflows and cognitive assessment
          functionality for healthcare-focused applications.
        </>,
      ],
    },
    HTEC: {
      jobTitle: "Software Engineer Intern @",
      url: "https://htec.com/",
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
    <Box
      className="tabPanel-joblist"
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        height: "auto",
        minHeight: 300,
      }}
    >
      <Tabs
        orientation={isMobile ? "horizontal" : "vertical"}
        variant="scrollable"
        scrollButtons="auto"
        value={value}
        onChange={handleChange}
        sx={{
          borderRight: isMobile ? 0 : 1,
          borderBottom: isMobile ? 1 : 0,
          borderColor: "var(--lightestNavy)",
        }}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab key={key} label={key} {...a11yProps(i, isMobile)} />
        ))}
      </Tabs>

      <Box sx={{ flexGrow: 1 }}>
        {Object.keys(experienceItems).map((key, i) => (
          <TabPanel key={key} value={value} index={i} isMobile={isMobile}>
            <span className="joblist-job-title">
              {experienceItems[key].jobTitle + " "}
            </span>
            <a
              className="joblist-job-company"
              href={experienceItems[key].url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {key}
            </a>
            <div className="joblist-duration">
              {experienceItems[key].duration}
            </div>
            <ul className="job-description">
              {experienceItems[key].desc.map((descItem, j) => (
                <Fade key={j} direction="up" triggerOnce={true}>
                  <li>{descItem}</li>
                </Fade>
              ))}
            </ul>
          </TabPanel>
        ))}
      </Box>
    </Box>
  );
};

export default JobList;
