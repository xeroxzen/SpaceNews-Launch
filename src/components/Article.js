import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const Article = ({ title, newsSite, summary, url, imageUrl }) => {
  return (
    <div>
      {""}
      <Card
        sx={{
          width: "40%",
          margin: "auto",
          background: "#293138",
          color: "#fff",
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
          sx={{ textDecoration: "none", color: "#fff" }}
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
            sx={{ textAlign: "left", color: "#fff", fontSize: "1.2rem" }}
            variant="subtitle1"
            color="textSecondary"
            component="p"
          >
            {newsSite}
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
