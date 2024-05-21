import { createTheme } from "@mui/material";
import { color_green } from "./hmcolor";

export const theme = createTheme({
    palette : {
        primary : {
            main : color_green,
            contrastText: "white",
        }
    }
})