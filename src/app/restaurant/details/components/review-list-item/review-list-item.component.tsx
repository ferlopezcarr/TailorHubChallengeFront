import { Review } from "@app/restaurant/models";
import { ExpandLess, ExpandMore, Star } from "@mui/icons-material";
import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import RatingStarsComponent from "../rating-stars/rating-stars.component";
import "./review-list-item.component.css";

interface Props {
  reviews: Review[];
}

export default function ReviewListItemComponent({ reviews }: Props) {
  let [open, setOpen] = React.useState(false);
  let restaurantReviews: Review[] = reviews;

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <Star />
        </ListItemIcon>
        <ListItemText primary="Reviews" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      {
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {restaurantReviews.map((review, index) => (
              <ListItem key={index} alignItems="flex-start">
                <ListItemText
                  primary={review.name}
                  secondary={
                    <React.Fragment>
                      <div className="review-rating-header-container">
                        <RatingStarsComponent rating={review.rating} />
                        <Typography component="span">{review.date}</Typography>
                      </div>
                      <Typography component="span" variant="body2">
                        {review.comments}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Collapse>
      }
    </>
  );
}
