import React from 'react'
import Studio from '../components/Studio/Studio'
import Wrapper from '../components/Wrapper/Wrapper'
import Team from '../components/Team/Team'
import ParallaxGallery from '../components/ParallaxGallery/ParallaxGallery'
import GridDistortion from '../components/GridDistortion/GridDistortion'
import InfiniteMenu from '../components/InfiniteMenu/InfiniteMenu'

const StudioPage = () => {

  const items = [
    {
      image: 'https://picsum.photos/300/300?grayscale',
      link: 'https://google.com/',
      title: 'Item 1',
      description: 'This is pretty cool, right?'
    },
    {
      image: 'https://picsum.photos/400/400?grayscale',
      link: 'https://google.com/',
      title: 'Item 2',
      description: 'This is pretty cool, right?'
    },
    {
      image: 'https://picsum.photos/500/500?grayscale',
      link: 'https://google.com/',
      title: 'Item 3',
      description: 'This is pretty cool, right?'
    },
    {
      image: 'https://picsum.photos/600/600?grayscale',
      link: 'https://google.com/',
      title: 'Item 4',
      description: 'This is pretty cool, right?'
    }
  ];
  




  return (
    <>
    <Studio />
    <div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <GridDistortion
    imageSrc="https://picsum.photos/1920/1080?grayscale"
    grid={10}
    mouse={0.1}
    strength={0.15}
    relaxation={0.9}
    className="custom-class"
  />
</div>
    <Wrapper title='Наша студия' maintitle='Креативная площадка'
     text='Созданная с нуля, студия It Academy была спроектирована и создана для развития творческого сообщества, которая вдохновляет учеников усердно заниматься. Наша студия, расположенная в ГЛАВПОЧТАМПТЕ, воплощает наш идеал «Серьезно игривый» — серьезный спереди, игривый сзади.' linkspan='It Academy' link='https://maps.app.goo.gl/FQ2SQAhLQDDaaKGd6' />
     <div style={{ height: '600px', position: 'relative' }}>
  <InfiniteMenu items={items}/>
</div>
     <ParallaxGallery/>
     <Team />
    </>
  )
}

export default StudioPage
