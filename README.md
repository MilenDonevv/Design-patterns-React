# Design-patterns-React

A playground for different good practices in creating maintainable design patterns in react.

3. Controlled and uncontrolled components

- Uncontrolled components - React Components which keep track of their own internal state.
- The only time we get data out of this components is when some event occurs.
   f.ex. - a form when the user hits 'submit' --> in an uncontrolled form that would be the only time 
   we know what values of that uncontrolled form the input contains.

   const MyComponent = ({ onSubmit }) => {
    const [someState, setSomeState] = useState(...);

    return...
   }

   <MyComponent onSubmit={data => ...} />

- Controlled components - Components that do not keep track of their own state. All state is passed in as props (that is, when we use useState Hook with text inputs). The parent takes care of keeping track of the state and that state is then usually passed to a controlled component as a prop of some sort.


const MyComponent = ({ data, changeData, onSubmit }) => {
    return ...
}


<MyComponent 
    data={...}
    changeData={() => ...}
    onSubmit={() => ...}
>

-> Which type should we generally prefer? 
    More often than not we should prefer controlled components, because they are more reusable and also much easier to test.
