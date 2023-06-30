import XSlider from '@/components/XSlider'

const itemsL = [
  { text: 'Elemento L 1', image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg" },
  { text: 'Elemento L 2', image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg" },
  { text: 'Elemento L 3', image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg" },
  { text: 'Elemento L 4', image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg" },
  { text: 'Elemento L 5', image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg" },
  { text: 'Elemento L 6', image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg" },
];

const itemsR = [
  { text: 'Elemento R 1', image: "https://rickandmortyapi.com/api/character/avatar/11.jpeg" },
  { text: 'Elemento R 2', image: "https://rickandmortyapi.com/api/character/avatar/21.jpeg" },
  { text: 'Elemento R 3', image: "https://rickandmortyapi.com/api/character/avatar/31.jpeg" },
  { text: 'Elemento R 4', image: "https://rickandmortyapi.com/api/character/avatar/41.jpeg" },
  { text: 'Elemento R 5', image: "https://rickandmortyapi.com/api/character/avatar/51.jpeg" },
  { text: 'Elemento R 6', image: "https://rickandmortyapi.com/api/character/avatar/61.jpeg" },
];

type ItemList = {
  text: string,
  image: string
}

type HomeProps = {
  itemsL: ItemList[]
  itemsR: ItemList[]
}

const Home: React.FC<HomeProps> = () => {
  return (
    <main>
      <XSlider itemsL={itemsL} itemsR={itemsR} />
    </main>
  )
}

export default Home