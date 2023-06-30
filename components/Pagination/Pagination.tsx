import styled from 'styled-components';
import PaginationButton from './PaginationButton';

const PaginationStyled = styled.div`
  position: absolute;
  z-index: 10;
  bottom: 0;
  left: 0;
  right: 0;
  

  .dots {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }
`;

const Dot = styled.span`
  width: 10px;
  height: 10px;
  background-color: #ccc;
  border-radius: 50%;
  margin: 0 5px;
  transition: background-color 0.3s;
  cursor: pointer;

  &.activeDot{
    background-color: #555;
  }
`;

type Props = {
  current: number
  next: () => void
  prev: () => void
  setStep: (index: number) => void
  items: any[]
}

const Pagination: React.FC<Props> = ({ current, next, prev, setStep, items }) => {
  return (
    <PaginationStyled>
      <div className="dots">
        {items.map((_, index) => (
          <Dot key={index} className={index === current ? 'activeDot' : ''} onClick={() => setStep(index)} />
        ))}
      </div>
      <PaginationButton
        onClick={prev}
        position="left"
      >
        Prev
      </PaginationButton>
      <PaginationButton
        onClick={next}
        position="right"
      >
        Next45
      </PaginationButton>
    </PaginationStyled>
  )
}

export default Pagination