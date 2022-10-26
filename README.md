<h1>usePositionYOffset</h1>

React Hook that triggers on window scroll and return Y offset
<br/>
<br/>
<b>Example</b>
<br/>
In your React component:
<br/>

```
import usePositionYOffset from "position-y-offset"

function SizeInfo() {
  const postitionYOffset = usePositionYOffset()

  return <div>size = ({ postitionYOffset })</div>
}
```

<b>Settings:</b>
<br/>
debounceTime - number (default 200ms)

```
...
const postitionYOffset = usePositionYOffset({debounceTime:200})
```

## Word from author

All the best :3