import React, { useEffect, useState } from "react";
import axios from "axios";
import Report from "./Report";
import styled from "styled-components";

import { MediaQuiries } from "./MediaQuiries";


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

  // handleChange function

 
  

  return (
    <Container>
        <Banner>
          <BannerHeader>Reports</BannerHeader>
          <BannerParagraph>Space stations and other missions often publish their data.</BannerParagraph>
        </Banner>
      <ReportContainer>
        {reports &&
          reports.map((report, index) => (
                  <Report
                    key={index}
                    title={report.title}
                    summary={report.summary}
                    newsSite={report.newsSite}
                    url={report.url}
                    imageUrl={report.imageUrl}
                    publishedAt={report.publishedAt}
                  />
          ))}
    </ReportContainer>
    </Container>
   
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 7rem;
  background-color: blue;

  @media ${MediaQuiries.mobileS} {
    height: 10rem;
    padding-left: 2rem;
}
`
const BannerHeader = styled.h1`
  font-size: 3rem;
  font-family: 'Play', sans-serif;
  letter-spacing: .5rem;
  margin-bottom: 1rem;

`
const BannerParagraph = styled.p`
  font-size: 1.5rem;
  font-family: 'Play', sans-serif;
  margin-bottom: 1rem;

`
const ReportContainer = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));

`

export default Reports;
