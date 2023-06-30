'use client'

import styled from 'styled-components';
import { useChangeIndex } from './hooks'
import Pagination from '../Pagination';
import XSliderItem from './XSliderItem';

interface SliderItem {
    text: string;
    image: string
}

interface SliderProps {
    itemsL: SliderItem[];
    itemsR: SliderItem[];
}

const SliderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const LeftSection = styled.div`
    position: relative;
    width: 100%;
`;

const RightSection = styled.div`
    position: relative;
    width: 100%;
`;

const XSlider: React.FC<SliderProps> = ({ itemsL, itemsR }) => {
    const { current, next, prev, setStep } = useChangeIndex(itemsL)

    return (
        <SliderWrapper>

            <LeftSection>
                {
                    itemsL.map((item, index) => (
                        <XSliderItem
                            key={index}
                            item={item}
                            index={index}
                            current={current}
                        >
                            {itemsL[index].text}
                        </XSliderItem>
                    ))
                }
            </LeftSection >
            <RightSection>
                {
                    itemsR.map((item, index) => (
                        <XSliderItem
                            key={index}
                            item={item}
                            index={index}
                            current={current}
                            invert={true}
                        >
                            {itemsR[index].text}
                        </XSliderItem>
                    ))
                }
            </RightSection>
            <Pagination
                current={current}
                next={next}
                prev={prev}
                setStep={setStep}
                items={itemsL}
            />

        </SliderWrapper >
    );
};

export default XSlider;
