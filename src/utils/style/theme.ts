import { createTheme } from "@mui/material";
import { color_green } from "./hmstyle";

export const theme = createTheme({
    palette : {
        primary : {
            main : color_green,
            contrastText: "white",
        }
    }
})