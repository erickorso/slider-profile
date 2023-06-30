import Image from "next/image"
import Link from "next/link"
import styled from 'styled-components';

const ComponentWrapper = styled.div`
    border: solid red 2px;
    padding: 0 50px;
    background-color: #222;
    color: white;

    a{
        width: 100%;
        text-decoration: none;
        color: #222
    }
    ul{
        display: flex;
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
        background-color: #ccc;
        padding: 20px;
        border-radius: 10px;

        li{
            min-width: 300px;
            max-width: 350px;
            min-height: 300px;
            max-height: 500px;
            border: solid gray 2px;
            border-radius: 5px;
            margin: 5px;
            position: relative;
            overflow: hidden;
            transition: ease-in-out all 0.5s;

            &:hover{
                background-color: #222;
                border: solid white 2px;
                box-shadow: 0 0 10px black;
                h2{
                    color: white;
                }
                p{
                    opacity: 1;
                }
                img{
                    scale: 1;
                }
            }
            
            h2{
                padding: 10px;
                font-size: 22px;
            }
            p{
                padding: 5px;
                margin: 0;
                font-size: 16px;
                font-style: italic;
                font-weight: bolder;
                text-align: center;
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                z-index: 1;
                background-color: #e8dfdf;
                opacity: 0;
                transition: ease-in-out all 0.5s;

                &.line1{
                    bottom: 200px;
                    transition: ease-in-out all 0.5s;
                }
            }
            img{
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                object-fit: cover;
                margin: 0 auto;
                z-index: 0;
                margin-bottom: 25px;
                scale: 1.2;
                transition: ease-in-out all 0.5s;
            }
        }
    }
`;

type CatalogueType = {
    list: {
        results: any[]
    }
}

const Catalogue: React.FC<CatalogueType> = ({ list, list: { results } }) => {
    console.log({ list: list.results });

    return (
        <ComponentWrapper>
            <h1>Catalogue</h1>
            <ul>
                {
                    results ? results.map((item) => (
                        <li key={item.name}>
                            <Link href={item.url} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h2>
                                <p className="font-normal text-gray-700 dark:text-gray-400 line1">species:{item.species}</p>
                                <p className="font-normal text-gray-700 dark:text-gray-400 line2">origin:{item.origin ? item.origin.name : 'desconocido'}</p>
                                <Image src={item.image} width={200} height={200} alt="image-item" />
                            </Link>
                        </li>
                    )) : null
                }
            </ul>
            {/* <dialog id="some">
                <h1>DIALOG</h1>
                <button onClick={() => document.getElementById('some').closeModal()}>close</button>
            </dialog>
            <button onClick={() => document.getElementById('some').showModal()}>open</button> */}
        </ComponentWrapper>
    )
}

export default Catalogue