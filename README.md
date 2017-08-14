# albums
React Native study project

Files and notes from the Complete React Native and Redux Course (https://www.udemy.com/the-complete-react-native-and-redux-course)

### Basic notes
- To reference some js variables inside jsx, you must wrap it using curly braces { }
- "style" is a props of "Text"
- To make the component available to other parts of the App:
`export default Header;`

### AppRegistry
- The first parameter must match the project name
- The second parameter must be a function that returns the first component to render the application
- Only the root component uses AppRegistry:
`AppRegistry.registerComponent('albums', () => App);`

### Component nesting
- Put one component inside another
- It must always return only one element, that's why we should wrap all the elements

### Class component / Class based
- Extends a base class of component
- Used for dynamic sources of data
- Handles any data that might change (fetching data, user events, etc).
- Knows when it gets rendered to the device (useful for data fetching).
- More code to write.
- It MUST override the render method!

### Functional Component.
- Used for presenting static data.
- Can't handle fetching data.
- Easy to write.

### State:
- A plain js object used to record and respond to user-triggered events.
- When we need to update what a component shows, call `this.setState`.
- Only CHANGE state with `setState`, do not do `this.state`.
- The only way to change a state after initalizing is using `this.setState`

### Difference between props and state
props -> parent to child communication

state -> component's intern record keeping


### justifyContent
In a column direction (`flexDirection: 'column'`) of fields:
- Default: aligns on the top left.
- flex-start: default
- flex-end: : aligns on the bottom left.
- center: centers vertically
- space-between: spaces components evenly vertically
- space-around: spaces evenly between components and between components and
limits
