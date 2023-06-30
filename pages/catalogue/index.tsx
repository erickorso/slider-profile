import Catalogue from '@/components/Catalogue'
import { GetStaticProps } from 'next'
import React from 'react'

export const getStaticProps: GetStaticProps<any> = async () => {
    const res = await fetch('https://rickandmortyapi.com/api/character')
    const data = await res.json()
    return { props: { characters: data } }
}

const CataloguePage = ({ characters }: any) => {
    return (
        <Catalogue list={characters} />
    )
}

export default CataloguePage