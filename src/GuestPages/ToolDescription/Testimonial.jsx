 
import {
  Box,
  Grid,
  Card,
  CardContent,
  Avatar,
  Typography,
  Rating,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

function Testimonial() {
  const reviews = [
    {
      name: "Carl Oliver",
      role: "User",
      avatar: "https://via.placeholder.com/50", // Replace with actual image URLs
      review:
        "The best part about MortalAi is every time I pay my employees, my bank balance doesn’t go down like it used to. Looking forward to spending the extra cash when I figure out why my card is being declined.",
      rating: 4,
    },
    {
      name: "Barbara McIntosh",
      role: "User",
      avatar: "https://via.placeholder.com/50", // Replace with actual image URLs
      review:
        "I used to have to remit tax to the EU and with MortalAi I somehow don’t have to do that anymore. Nervous to travel there now though.",
      rating: 5,
    },
    {
      name: "Thomas Israel",
      role: "User",
      avatar: "https://via.placeholder.com/50", // Replace with actual image URLs
      review:
        "I didn’t know a thing about icon design until I tried this book. Now I can create any icon I need in no time. Great resource!",
      rating: 5,
    },
    {
      name: "Jill Webb",
      role: "User",
      avatar: "https://via.placeholder.com/50", // Replace with actual image URLs
      review:
        "I’m trying to get a hold of someone in support. I’m in a lot of trouble right now and they are passing it as something to do with my books. Please get back to me right away.",
      rating: 4,
    },
    {
      name: "Janista Doll",
      role: "User",
      avatar: "https://via.placeholder.com/50", // Replace with actual image URLs
      review:
        "This is the fourth email I’ve sent to your support team. I am really being held in jail for tax fraud. Please answer your damn emails, this is important.",
      rating: 3,
    },
  ];

  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={4}>
        {reviews.map((review, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                backgroundColor: "primary.cardColor",
                color: "textColor.white",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                  <Avatar
                    src={review.avatar}
                    alt={review.name}
                    sx={{ width: 50, height: 50, mr: 2 }}
                  />
                  <Box>
                    <Typography variant="h6" sx={{ color: "textColor.white" }}>
                      {review.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "textColor.main" }}
                    >
                      {review.role}
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  variant="body2"
                  sx={{ color: "textColor.main", mb: 2 }}
                >
                  {review.review}
                </Typography>
                <Rating
                  value={review.rating}
                  precision={0.5}
                  readOnly
                  icon={<StarIcon sx={{ color: "#ffda47" }} />}
                  emptyIcon={<StarIcon sx={{ color: "#333" }} />}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Testimonial;
