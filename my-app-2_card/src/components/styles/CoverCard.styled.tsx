import styled from "styled-components";
import myImage from "./../../headline.png";

export const CoverCard = styled.div`
    max-width: 400px;
    height: 250px;
    background-image: url(${myImage});
    background-size: cover;
    border-radius: 15px;
`