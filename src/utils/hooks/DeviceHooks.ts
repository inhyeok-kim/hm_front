import { useMediaQuery } from "react-responsive";

export function useDevice(){
    const isTablet = useMediaQuery({
        query : "(min-width : 768px) and (max-width : 1366px)"
    });
    const isMobile = useMediaQuery({
        query : "(max-width : 767px)"
    });
    const isPc = useMediaQuery({
        query : "(min-width : 1367px)"
    });

    return {isMobile,isPc,isTablet};
}
