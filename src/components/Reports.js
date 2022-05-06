import React, { useEffect, useState } from "react";
import axios from "axios";
import Report from "./Report";
import { Grid, Box } from "@mui/material";

const Reports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const getReports = async () => {
      const res = await axios.get(
        "https://api.spaceflightnewsapi.net/v3/reports"
      );
      console.log(res);
      setReports(res.data);
    };
    getReports();
  }, []);

  return (
    <div>
      {reports &&
        reports.map((report, index) => (
          <Box
            sx={{
              flexGrow: 1,
            }}
          >
            <Grid container spacing={2}>
              <Grid item sm={12} md={8} xs={4}>
                <Report
                  key={index}
                  title={report.title}
                  summary={report.summary}
                  newsSite={report.newsSite}
                  url={report.url}
                  imageUrl={report.imageUrl}
                  publishedAt={report.publishedAt}
                />
              </Grid>
            </Grid>
          </Box>
        ))}
    </div>
  );
};

export default Reports;
