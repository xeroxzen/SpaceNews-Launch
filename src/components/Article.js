import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const Article = ({ title, newsSite, summary, url, imageUrl, publishedAt }) => {
  return (
    <div>
      <Card
        sx={{
          width: "328px",
          margin: "auto",
          background: "#000000BF",
          color: "#fff",
          boxShadow: "5px 5px 10px #ccc",
          ":hover:": {
            boxShadow: "10px 10px 20px #ccc",
          },
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: 2,
          mt: 2,
        }}
      >
        <CardHeader
          sx={{
            textDecoration: "none",
            color: "#FFFFFFBF",

            hover: { textDecoration: "underline" },
          }}
          component="a"
          variant="title"
          href={url}
          title={title}
        />
        <CardMedia
          padding="56.25% 0 0 0"
          component="img"
          height="194"
          image={imageUrl}
          alt={imageUrl}
        />
        <CardContent flexGrow="1">
          <hr />
          <br />
          <Typography
            sx={{ textAlign: "left", color: "#fff", fontSize: "1.2rem" }}
            variant="subtitle1"
            color="textSecondary"
            component="p"
          >
            {newsSite}
          </Typography>
          <Typography
            sx={{ textAlign: "left", color: "#0073B1", fontSize: "1rem" }}
            variant="subtitle2"
            color="textSecondary"
            component="p"
          >
            {/* Output the date in human readable form */}
            {new Date(publishedAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </Typography>
          <br />
          <Typography
            sx={{ textAlign: "left", color: "#fff" }}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {summary}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Article;
