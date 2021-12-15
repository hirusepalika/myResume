import styled from "styled-components";

export const ExperienceFullBody = styled.div`
    background-color: #333;
    position: absolute;
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 5rem rgb(0 0 0 / 50%);

    .fade-in-section {
        opacity: 0;
        transform: translateY(20vh);
        visibility: hidden;
        transition: opacity 1200ms ease-out, transform 600ms ease-out,
            visibility 1200ms ease-out;
        will-change: opacity, transform, visibility;
    }
    .fade-in-section.is-visible {
        opacity: 1;
        transform: none;
        visibility: visible;
    }
`;

export const StyledSpeechBubbleMedium = styled.div`
    margin-top: 20px;
    height: 100px;
    text-align: left;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    padding-left: 10px;
    margin-right: 20px;
`;

export const  StyledSpeechBubbleLarge = styled.div`
    margin-top: 20px;
    height: 150px;
    text-align: left;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    padding-left: 10px;
    margin-right: 20px;
`;
