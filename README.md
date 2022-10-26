<h1>usePositionYOffset</h1>
React Hook that triggers on window scroll and return Y offset

<br/>
<br/>

```
npm install use-position-y-offset 
```

or 

```
yarn add use-position-y-offset 
```
<br/>
<br/>
<b>Example</b>
<br/>
In your React component:
<br/>

```
import usePositionYOffset from "position-y-offset"

function PositionInfo() {
  const postitionYOffset = usePositionYOffset()

  return <div>position = ({ postitionYOffset })</div>
}
```

<b>Settings:</b>
<br/>
debounceTime - number (default 200ms)

```
...
const postitionYOffset = usePositionYOffset({debounceTime:200})
```
callback - function (default undefined)

```
...
const handlePositionChange = (positionYOffset) => {
    console.log(positionYOffset);
}

usePositionYOffset({function: handlePositionChange})
```

## Word from author

All the best :3