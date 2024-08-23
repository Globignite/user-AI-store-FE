import { Box, Container } from "@mui/material";
import SearchSection from "../components/SearchSection";
import YourFilters from "./YourFilters";
import ToolsCardGrid from "../components/ToolsCardGrid";

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
