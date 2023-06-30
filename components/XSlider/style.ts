import styled from 'styled-components'

export const XSliderStyled = styled.div`
    .slider {
    display: flex;
    height: 100vh;
    background: red;
    }

    .left {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    border: solid green 5px;
    }

    .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    border: solid green 5px;
    }

    .item {
    font-size: 24px;
    padding: 20px;
    background-color: #f1f1f1;
    transition: transform 0.5s;
    box-sizing: border-box;
    border: solid blue 5px;
    height: 100vh;
    width: 50vw;
    }

    .activeItem {
    transform: translateY(0);
    }

    .item:nth-child(even) {
    transform: translateY(100%);
    }

    .item:nth-child(odd) {
    transform: translateY(-100%);
    }

    .pagination {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    }

    .dot {
    width: 10px;
    height: 10px;
    background-color: #ccc;
    border-radius: 50%;
    margin: 0 5px;
    transition: background-color 0.3s;
    cursor: pointer;
    }

    .activeDot {
    background-color: #555;
    }

    .prevButton,
    .nextButton {
    position: absolute;
    bottom: 20px;
    padding: 10px 20px;
    border: none;
    background-color: #555;
    color: #fff;
    cursor: pointer;
    }

    .prevButton {
    left: 20px;
    }

    .nextButton {
    right: 20px;
    }
`