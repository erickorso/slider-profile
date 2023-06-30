import styled from 'styled-components';

const PaginationButtonStyled = styled.button`
  position: absolute;
  bottom: 20px;
  padding: 10px 20px;
  border: none;
  background-color: #555;
  color: #fff;
  cursor: pointer;

  &.left{
    left: 20px;
  }
  &.right{
    right: 20px;
  }
`;

type Props = {
    children: string | JSX.Element,
    onClick: () => void
    position: string
}

const PaginationButton: React.FC<Props> = ({ children, onClick, position }) => {
    return (
        <PaginationButtonStyled
            onClick={onClick}
            className={position ? position : ''}
        >
            {children}
        </PaginationButtonStyled>
    )
}

export default PaginationButton