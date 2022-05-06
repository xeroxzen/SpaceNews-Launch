import React, { useEffect, useState } from "react";
import axios from "axios";
import Report from "./Report";

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
          <Report
            key={index}
            title={report.title}
            summary={report.summary}
            newsSite={report.newsSite}
            url={report.url}
            imageUrl={report.imageUrl}
          />
        ))}
    </div>
  );
};

export default Reports;
