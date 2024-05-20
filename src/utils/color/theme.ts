import { createTheme } from "@mui/material";
import { hmgreen } from "./hmcolor";

export const theme = createTheme({
    palette : {
        primary : {
            main : hmgreen,
            contrastText: "white",
        }
    }
})