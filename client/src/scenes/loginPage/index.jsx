import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileSreens = useMediaQuery("(min-width: 1000px");
  return (
    <Box>
      <Box width="100%" backgroundColor={theme.palette.background.alt}>
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          Socialpedia
        </Typography>
      </Box>
      <Box
        width={isNonMobileSreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}>
        <Typography fontWeight="500" variant="h5" sx={{ marginBottom: "1.5rem" }}>
          Welcome to Socialpedia, the Social Media for Socialpaths!
        </Typography>
        <Form>Hello</Form>
      </Box>
    </Box>
  );
};

export default LoginPage;
