import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const Blog = ({ title, newsSite, summary, url, imageUrl }) => {
  return (
    <div>
      {""}
      <Card
        sx={{
          width: "40%",
          margin: "auto",
          background:
            "linear-gradient(0deg, rgba(4,82,115,1) 0%, rgba(6,67,97,1) 32%, rgba(180,27,240,1) 100%);",
          borderRadius: "10px",
          boxShadow: "5px 5px 10px #ccc",
          ":hover:": {
            boxShadow: "10px 10px 20px #ccc",
          },
          padding: 2,
          mt: 2,
          mb: 2,
        }}
      >
        <CardHeader
          sx={{ textDecoration: "none", color: "white" }}
          component="a"
          variant="title"
          href={url}
          title={title}
        />
        <CardMedia
          component="img"
          height="194"
          image={imageUrl}
          alt={imageUrl}
        />
        <CardContent>
          <hr />
          <br />
          <Typography
            sx={{ textAlign: "left", color: "white", fontSize: "1.2rem" }}
            variant="subtitle1"
            color="textSecondary"
            component="p"
          >
            {newsSite}
          </Typography>
          <br />
          <Typography
            sx={{ textAlign: "left" }}
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

export default Blog;
