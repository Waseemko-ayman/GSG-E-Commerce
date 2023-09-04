"use client";
/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { StyledAlignFlex, StyledSection } from "@/style/common";
import { styled } from "styled-components";

const StyledTabs = styled(StyledSection)`
  .css-1h9z7r5-MuiButtonBase-root-MuiTab-root {
    color: var(--gray-500-color, #8b96a5);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: capitalize;
  }

  @media (max-width: 426px) {
    .css-1h9z7r5-MuiButtonBase-root-MuiTab-root {
      font-size: 13px;
    }
  }

  .css-19kzrtu {
    padding: 0;
  }
`;

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabsSection() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <StyledTabs>
      <CustomTabPanel value={value} index={0}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Description" {...a11yProps(0)} />
            <Tab label="Reviews" {...a11yProps(1)} />
            <Tab label="Shipping" {...a11yProps(2)} />
            <Tab label="About company" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <div className="desc-content">
          ** 1 **
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, Quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <table>
            <tbody>
              <tr>
                <td>Model</td>
                <td>#8786867</td>
              </tr>
              <tr>
                <td>Style</td>
                <td>Classic style</td>
              </tr>
              <tr>
                <td>Certificate</td>
                <td>ISO-898921212</td>
              </tr>
              <tr>
                <td>Size</td>
                <td>34mm x 450mm x 19mm</td>
              </tr>
              <tr>
                <td>Memory</td>
                <td>36GB RAM</td>
              </tr>
            </tbody>
          </table>
          <ul>
            <StyledAlignFlex gap="7px" as="li">
              <img src="/assets/check2.svg" alt="check" />{" "}
              <span>Some great feature name here</span>
            </StyledAlignFlex>
            <StyledAlignFlex gap="7px" as="li">
              <img src="/assets/check2.svg" alt="check" />{" "}
              <span>Lorem ipsum dolor sit amet, consectetur </span>
            </StyledAlignFlex>
            <StyledAlignFlex gap="7px" as="li">
              <img src="/assets/check2.svg" alt="check" />{" "}
              <span>Duis aute irure dolor in reprehenderit</span>
            </StyledAlignFlex>
            <StyledAlignFlex gap="7px" as="li">
              <img src="/assets/check2.svg" alt="check" />{" "}
              <span>Some great feature name here</span>
            </StyledAlignFlex>
          </ul>
        </div>
      </CustomTabPanel>

      <CustomTabPanel style={{ padding: 0 }} value={value} index={1}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Description" {...a11yProps(0)} />
            <Tab label="Reviews" {...a11yProps(1)} />
            <Tab label="Shipping" {...a11yProps(2)} />
            <Tab label="About company" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <div className="desc-content">
          ** 2 **
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, Quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <table>
            <tbody>
              <tr>
                <td>Model</td>
                <td>#4593425</td>
              </tr>
              <tr>
                <td>Style</td>
                <td>Classic style</td>
              </tr>
              <tr>
                <td>Certificate</td>
                <td>ISO-885603272</td>
              </tr>
              <tr>
                <td>Size</td>
                <td>34mm x 450mm x 19mm</td>
              </tr>
              <tr>
                <td>Memory</td>
                <td>43GB RAM</td>
              </tr>
            </tbody>
          </table>
          <ul>
            <StyledAlignFlex gap="7px" as="li">
              <img src="/assets/check2.svg" alt="check" />{" "}
              <span>Some great feature name here</span>
            </StyledAlignFlex>
            <StyledAlignFlex gap="7px" as="li">
              <img src="/assets/check2.svg" alt="check" />{" "}
              <span>Lorem ipsum dolor sit amet, consectetur </span>
            </StyledAlignFlex>
            <StyledAlignFlex gap="7px" as="li">
              <img src="/assets/check2.svg" alt="check" />{" "}
              <span>Duis aute irure dolor in reprehenderit</span>
            </StyledAlignFlex>
            <StyledAlignFlex gap="7px" as="li">
              <img src="/assets/check2.svg" alt="check" />{" "}
              <span>Some great feature name here</span>
            </StyledAlignFlex>
          </ul>
        </div>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Description" {...a11yProps(0)} />
            <Tab label="Reviews" {...a11yProps(1)} />
            <Tab label="Shipping" {...a11yProps(2)} />
            <Tab label="About company" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <div className="desc-content">
        ** 3 **
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam
          </p>
          <table>
            <tbody>
              <tr>
                <td>Model</td>
                <td>#8786867</td>
              </tr>
              <tr>
                <td>Style</td>
                <td>Classic style</td>
              </tr>
              <tr>
                <td>Certificate</td>
                <td>ISO-898921212</td>
              </tr>
              <tr>
                <td>Size</td>
                <td>34mm x 450mm x 19mm</td>
              </tr>
              <tr>
                <td>Memory</td>
                <td>36GB RAM</td>
              </tr>
            </tbody>
          </table>
          <ul>
            <StyledAlignFlex gap="7px" as="li">
              <img src="/assets/check2.svg" alt="check" />{" "}
              <span>Some great feature name here</span>
            </StyledAlignFlex>
            <StyledAlignFlex gap="7px" as="li">
              <img src="/assets/check2.svg" alt="check" />{" "}
              <span>Lorem ipsum dolor sit amet, consectetur </span>
            </StyledAlignFlex>
            <StyledAlignFlex gap="7px" as="li">
              <img src="/assets/check2.svg" alt="check" />{" "}
              <span>Duis aute irure dolor in reprehenderit</span>
            </StyledAlignFlex>
            <StyledAlignFlex gap="7px" as="li">
              <img src="/assets/check2.svg" alt="check" />{" "}
              <span>Some great feature name here</span>
            </StyledAlignFlex>
          </ul>
        </div>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={3}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Description" {...a11yProps(0)} />
            <Tab label="Reviews" {...a11yProps(1)} />
            <Tab label="Shipping" {...a11yProps(2)} />
            <Tab label="About company" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <div className="desc-content">
        ** 4 **
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, Quis nostrud exercitation ullamco laboris
            nisi
          </p>
          <table>
            <tbody>
              <tr>
                <td>Model</td>
                <td>#8786867</td>
              </tr>
              <tr>
                <td>Style</td>
                <td>Classic style</td>
              </tr>
              <tr>
                <td>Certificate</td>
                <td>ISO-898921212</td>
              </tr>
              <tr>
                <td>Size</td>
                <td>34mm x 450mm x 19mm</td>
              </tr>
              <tr>
                <td>Memory</td>
                <td>36GB RAM</td>
              </tr>
            </tbody>
          </table>
          <ul>
            <StyledAlignFlex gap="7px" as="li">
              <img src="/assets/check2.svg" alt="check" />{" "}
              <span>Some great feature name here</span>
            </StyledAlignFlex>
            <StyledAlignFlex gap="7px" as="li">
              <img src="/assets/check2.svg" alt="check" />{" "}
              <span>Lorem ipsum dolor sit amet, consectetur </span>
            </StyledAlignFlex>
            <StyledAlignFlex gap="7px" as="li">
              <img src="/assets/check2.svg" alt="check" />{" "}
              <span>Duis aute irure dolor in reprehenderit</span>
            </StyledAlignFlex>
            <StyledAlignFlex gap="7px" as="li">
              <img src="/assets/check2.svg" alt="check" />{" "}
              <span>Some great feature name here</span>
            </StyledAlignFlex>
          </ul>
        </div>
      </CustomTabPanel>
    </StyledTabs>
  );
}
