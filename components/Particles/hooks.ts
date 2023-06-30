'use client'

import { StaticImageData } from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { ParticleClass } from './particle.class'

export const useImageToBase64 = (erickImg: StaticImageData) => {
    const [base64, setBase64] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [loaded, setLoaded] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);

        const fetchImageAndConvertToBase64 = async () => {
            const response = await fetch(erickImg.src);
            const blob = await response.blob();
            const reader = new FileReader();
            reader.onloadend = function () {
                const base64Data = reader.result as string;
                setBase64(base64Data);
                setLoading(false);
                setLoaded(true);
            };
            reader.readAsDataURL(blob);
        };

        fetchImageAndConvertToBase64();
        setLoading(false);
    }, []);

    return {
        image: base64,
        loading,
        loaded,
    };
};

export const useRefToCanvas = (image: any | CanvasImageSource, width: number, height: number) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {

        if (image) {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const context = canvas.getContext('2d');
            if (!context) return;

            const imageObj = new Image();

            imageObj.src = image;
            imageObj.onload = () => {
                context.drawImage(imageObj, 0, 0, width, height);
            };
            const pixels = context.getImageData(0, 0, width, height)

            context.fillStyle = 'rgba(255, 255, 255, 255)';
            context.fillRect(0, 0, canvas.width, canvas.height);
            canvas.width = width;
            canvas.height = height;

            const particlesArr: ParticleClass[] = []
            const NUM = 500;
            const SIZE = 3;
            let mappedImage = []

            const init = () => {
                for (let index = 0; index < NUM; index++) {
                    particlesArr.push(new ParticleClass(SIZE, context, width, height))
                }
            }

            init()

            const animate = () => {
                if (!context) return;
                context.globalAlpha = 0.05
                context.fillStyle = 'rgba(0, 255, 255, 0.01)'
                context.fillRect(0, 0, 500, 628)

                for (let index = 0; index < NUM; index++) {
                    particlesArr[index].update()
                    particlesArr[index].draw()
                }
                requestAnimationFrame(animate)
            }

            animate()
        }
    }, [image]);

    return {
        ref: canvasRef
    };
};