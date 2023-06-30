import styled from 'styled-components';

const ChartsStyled = styled.div`
    width: 95vw;
    height: 95vh;
    background: #fff;
    margin: auto auto;
    padding: 10px;

    h2{
        margin-top: 40px;
    }

    .x-container{
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 20px 10px; 
        min-height: 220px;
        max-height: 300px;
        background-color: #eee;
    }
`

export default ChartsStyled

export const LineChartStyled = styled.div`
    padding: 20px;
    max-height: 200px;
    border: solid orange 2px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
`
