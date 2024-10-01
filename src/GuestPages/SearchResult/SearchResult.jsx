import { Box, Container } from "@mui/material";
import SearchSection from "../../GlobalComponents/SearchSection";
import YourFilters from "./YourFilters";
import ToolsCardGrid from "../../GlobalComponents/ToolsCardGrid";

function SearchResult() {
  return (
    <Box sx={{ marginTop: "150px" }}>
      <Container maxWidth="lg">
        <SearchSection />
        <YourFilters />
        <ToolsCardGrid />
      </Container>
    </Box>
  );
}

export default SearchResult;
