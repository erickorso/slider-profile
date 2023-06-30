import styled from 'styled-components';

const ParticlesStyled = styled.div`
    width: 95vw;
    height: 95vh;
    background: #fff;
    margin: auto auto;
    border: solid red 2px;

    #canvas1{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%)translateY(-50%);
        border: solid #f60 10px;
        /* height: 500px; */
        /* width: 600px; */
    }
`

export default ParticlesStyled