'use client'

import ParticlesStyled from "./style"
import erickImg from '../../public/erick.jpg'
import { useImageToBase64, useRefToCanvas } from "./hooks";
import Image from "next/image";

const Particles = () => {
    const { image, loading, loaded } = useImageToBase64(erickImg);
    const { ref } = useRefToCanvas(image, 500, 628);

    return (
        <ParticlesStyled>
            <Image src={image} width={250} height={314} alt="some" />
            {
                loading ?
                    <h1>loading</h1>
                    : null
            }
            {
                loaded ?
                    <canvas id="canvas1" ref={ref}></canvas>
                    : null
            }
        </ParticlesStyled>
    )
}

export default Particles