import { SplitScreen } from './designs/split-screens'
import { LargePersonListItem } from './people/LargePersonListItem';
import { SmallPersonListItem } from './people/SmallPersonListItem';
import { RegularList } from './RegularList';


/*

const LeftHandComponent = ({ name }) => {
  return <h1 style={{ backgroundColor: 'green'}}>{name}</h1>
}

const RightHandComponent = ({ message }) => {
  return <p style={{ backgroundColor: 'red'}}>{message}</p>
}


function App() {

  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftHandComponent name={"Gill Bates"}/>
      <RightHandComponent message={"Ya'll should get vaccinated"}/>
    </SplitScreen>
  )
}


*/

const people = [
  {
    name: 'John Doe',
    age: 54,
    hairColor: 'brown',
    hobbies: ['swimming', 'bicycling', 'video games'],
  },
  {
    name: 'Brenda Smith',
    age: 33,
    hairColor: 'black',
    hobbies: ['golf', 'mathematics'],
  },
  {
    name: 'Jane Garcia',
    age: 27,
    hairColor: 'blonde',
    hobbies: ['biology', 'medicine', 'gymnastics'],
  }
];

const products = [
  {
    name: 'Flat-Screen TV',
    price: '$300',
    description: 'Huge LCD screen, a great deal',
    rating: 4.5,
  },
  {
    name: 'Basketball',
    price: '$10',
    description: 'Just like the pros use',
    rating: 3.8,
  },
  {
    name: 'Running Shoes',
    price: '$120',
    description: 'State-of-the-art technology for optimum running',
    rating: 4.2,
  }
];

function App() {

  return (
    <>
      <RegularList
        items={people}
        resourceName="person" // the prop that SmallPersonListItem and Large... are expexting
        itemComponent={SmallPersonListItem}
      />
      <RegularList
        items={people}
        resourceName="person" // the prop that SmallPersonListItem and Large... are expexting
        itemComponent={LargePersonListItem}
      />
    </>
  )
}

export default App
