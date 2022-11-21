import React from 'react';
import './App.css';
import Button from './Buttons/Button';
import Product from './Products/Product';
import Tile from './Tiles/Tile';
import bag_1 from './assets/bag_1.png';
import bag_2 from './assets/bag_2.png';
import bag_3 from './assets/bag_3.png';
import bag_4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import our_story from './assets/our_story.png';


function App() {
  return (
      <>
      <h1>Handbags & Purses</h1>

        <nav>
          <Button visible={false} click={("to the collection")}>to the collection</Button>
          <Button visible={false} click={("shop all bags")}>shop all bags</Button>
          <Button visible={true} click={("pre-orders")}>pre-orders</Button>
        </nav>

        <main>
          <Product>
            image={bag_1}
            label="Best seller"
            title="The handy bag"
            price={400}
          </Product>

          <Product>
            image={bag_2}
            label="Best seller"
            title="the stylish bag"
            price={250}
          </Product>

          <Product>
            image={bag_3}
            label="New collection"
            title="The simple bag"
            price={300}
          </Product>

          <Product>
            image={bag_4}
            label="New collection"
            title="The trendy bag"
            price={150}
          </Product>
        </main>

        <footer>
          <Tile>
            title="The Brand"
            summary="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis ipsum maiores provident quidem, quis quos temporibus unde! Atque aut consequuntur deserunt, maxime natus neque quidem, quo sapiente sunt tempora unde."
          </Tile>
          <Tile image={brand} />
          <Tile image={our_story}/>
          <Tile>
            title="Our Story"
            summary="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis ipsum maiores provident quidem, quis quos temporibus unde! Atque aut consequuntur deserunt, maxime natus neque quidem, quo sapiente sunt tempora unde."
          </Tile>
        </footer>

      </>
  );
}

export default App;



