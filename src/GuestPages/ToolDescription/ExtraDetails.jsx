import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn"; // Pricing Icon
import DevicesIcon from "@mui/icons-material/Devices"; // Platform Icon
import LanguageIcon from "@mui/icons-material/Language"; // Website URL Icon
import PersonIcon from "@mui/icons-material/Person"; // Developer Name Icon
import GavelIcon from "@mui/icons-material/Gavel"; // License Type Icon
import EmailIcon from "@mui/icons-material/Email"; // Contact Mail Icon
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"; // Release Date Icon
import LabelIcon from "@mui/icons-material/Label"; // Tags/Keywords Icon

function Description() {
  return (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={4}>
        {/* Pricing */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              backgroundColor: "primary.cardColor",
              color: "textColor.white",
              minHeight: 100,
            }}
          >
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                <MonetizationOnIcon
                  sx={{ fontSize: 40, color: "#ffda47", mr: 2 }}
                />
                <Typography variant="h6" sx={{ color: "textColor.white" }}>
                  Pricing
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: "textColor.main" }}>
                Free, Freemium, Paid
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Platform */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              backgroundColor: "primary.cardColor",
              color: "textColor.white",
              minHeight: 100,
            }}
          >
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                <DevicesIcon sx={{ fontSize: 40, color: "#ffda47", mr: 2 }} />
                <Typography variant="h6" sx={{ color: "textColor.white" }}>
                  Platform
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: "textColor.main" }}>
                Web, Android, iOS
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Website URL */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              backgroundColor: "primary.cardColor",
              color: "textColor.white",
              minHeight: 100,
            }}
          >
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                <LanguageIcon sx={{ fontSize: 40, color: "#ffda47", mr: 2 }} />
                <Typography variant="h6" sx={{ color: "textColor.white" }}>
                  Website URL
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: "textColor.main" }}>
                PixaAi.com
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Developer Name */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              backgroundColor: "primary.cardColor",
              color: "textColor.white",
              minHeight: 100,
            }}
          >
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                <PersonIcon sx={{ fontSize: 40, color: "#ffda47", mr: 2 }} />
                <Typography variant="h6" sx={{ color: "textColor.white" }}>
                  Develop By
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: "textColor.main" }}>
                Suraj
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* License Type */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              backgroundColor: "primary.cardColor",
              color: "textColor.white",
              minHeight: 100,
            }}
          >
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                <GavelIcon sx={{ fontSize: 40, color: "#ffda47", mr: 2 }} />
                <Typography variant="h6" sx={{ color: "textColor.white" }}>
                  License Type
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: "textColor.main" }}>
                Open Source, Proprietary
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Contact Mail */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              backgroundColor: "primary.cardColor",
              color: "textColor.white",
              minHeight: 100,
            }}
          >
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                <EmailIcon sx={{ fontSize: 40, color: "#ffda47", mr: 2 }} />
                <Typography variant="h6" sx={{ color: "textColor.white" }}>
                  Contact Mail
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: "textColor.main" }}>
                pixa@gm.com
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Release Date */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              backgroundColor: "primary.cardColor",
              color: "textColor.white",
              minHeight: 100,
            }}
          >
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                <CalendarTodayIcon
                  sx={{ fontSize: 40, color: "#ffda47", mr: 2 }}
                />
                <Typography variant="h6" sx={{ color: "textColor.white" }}>
                  Release Date
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: "textColor.main" }}>
                24 Aug 2024
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        
      </Grid>
    </Container>
  );
}

export default Description;
