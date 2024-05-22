import { createTheme } from "@mui/material";
import { color_green, color_light_grey } from "./hmstyle";

export const theme = createTheme({
    palette : {
        primary : {
            main : color_green,
            contrastText: "white",
        }
    }
})