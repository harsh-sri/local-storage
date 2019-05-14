# local-storage
This module helps you to access Local Storage easily: ReactJS

## Install

```bash
npm install localstorage
```

## Example

```javascript
import { localStorage } from 'localStorage';
//save Object into local storage
localStorage.setObj('user', {'foo':'bar'});
// get object from local storage
localStorage.getObj('user');
// save string/number into local storage
localStorage.set('name', 'harsh');
//get value from local storage by key name
localStorage.get('name');
// remove item from local storage
localStorage.remove('keyname');
// clear local storage 
localStorage.clear();
```

## License

MIT

