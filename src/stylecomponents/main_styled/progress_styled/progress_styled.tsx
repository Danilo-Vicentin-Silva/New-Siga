import styled from "styled-components";

export const Progress_styled = styled.section`
    display: flex;
    flex-flow: column wrap;
    margin: 39px;
    gap: 20px;

    .progress_title {
        display: flex;
        flex-flow: row wrap;
    }

    p {
        display: inline;
        background-color: #dbdada;
        padding: 10px;
        border-radius: 100%;

        height: 40px;
        width: 40px;
        margin-left: 10px;
        text-align: center;
    }
`;