import styled from 'styled-components';

const XSliderItemStyled = styled.div`
position: absolute;
z-index: 0;
font-size: 24px;
padding: 20px;
background-color: #f1f1f1;
transition: ease-in-out all 0.5s;
min-height: 100px;
width: 50vw;
transform: translateY(80vh)scale(0);
opacity: 0;
top: 0;
left: 0;
right: 0;
bottom: 0;
transition: ease-in-out all 1s;
background-size: cover;
background-position: center;
background-repeat: no-repeat;

&.hide-up{
    transform: translateY(-80vh)scale(0);
}
&.hide-down{
    transform: translateY(80vh)scale(2);
}

&.active{
    opacity: 1;
    z-index: 1;
    transform: translateY(0)scale(1);
}
`;

type Props = {
    children: string | JSX.Element,
    item: any,
    index: number,
    current: number,
    invert?: boolean,
}

const XSliderItem: React.FC<Props> = ({ children, item, index, current, invert }) => {

    const style = () => {
        if (invert) {
            return index === current ? 'active' : index > current ? 'hide-down' : 'hide-up'
        }
        return index === current ? 'active' : index < current ? 'hide-down' : 'hide-up'
    }
    return (
        <XSliderItemStyled
            className={style()}
            style={{ backgroundImage: `url(${item.image})` }}
        >
            {children}
        </XSliderItemStyled>
    )
}

export default XSliderItem