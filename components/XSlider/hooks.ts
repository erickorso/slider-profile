
import { useState } from 'react';

export const useChangeIndex = (itemsL: any[]) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = (): void => {
        if (currentIndex < itemsL.length - 1) {
            setCurrentIndex((prevIndex) => (prevIndex + 1));
        } else {
            setCurrentIndex(0);
        }
    };

    const handlePrev = (): void => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => (prevIndex - 1));
        } else {
            setCurrentIndex(itemsL.length - 1);
        }
    };

    const goTo = (index: number): void => setCurrentIndex(index);

    return {
        current: currentIndex,
        next: handleNext,
        prev: handlePrev,
        setStep: goTo
    }
}