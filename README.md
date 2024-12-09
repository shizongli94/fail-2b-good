## fail-2b-good

A simple js/ts exception-handling wrapper so that you won't get stuck with the nesting hell of try-catch statements.

## Install

```
npm i fail-2b-good
```

## Usage
Try-Catch blocks in JavaScript/TypeScript used to be:

```
try {
    const ourResult = await someFuncThatCanFail(paramA, paramB)
    // ... do something with ourResult
} catch (error) {
    console.error(error)
    // ... other error handling code 
}

// variable "ourResult" is no longer visible because it is declared inside the try-block

```
To avoid the problem, maybe you can do:
```
let ourResult
try {
    ourResult = await someFuncThatCanFail(paramA, paramB)
    // ... do something with ourResult
} catch (error) {
    console.error(error)
    // ... other error handling code 
}

```
but this is ugly.

With fail-2b-good, you can do:
```
import { failable } from 'fail-2b-good'

const [error, ourResult] = await failable(someFuncThatCanFail(paramA, paramB))
if (error) {
    console.error(error)
    // ... other error handling code 
}

// ... do something with ourResult
```
Easier, cleaner, and flat. It's just a simple wrapper to make exception-handling less pain. 

## Detail
### For promise/async, use failable()
```
 failable<T>(promise: Promise<T>): Promise<[undefined, T] | [Error]>
```
Parameter: Any function (someFuncThatCanFail) that returns a promise of type T.

Return: A promise of this type: [Error|undefined, T|undefined], which is an array of some error and the value we want to get out of someFuncThatCanFail.

By testing where the first element (i.e. the possible error) is undefined, TypeScript can know whether the second element is undefined or not. Therefore, it won't complain about it, since either Error or T is undefined, but not both.

### For synchronous job, use failableSync()
```
const [someError, ourSyncResult] = failableSync(someSyncFunc(paramX, paramY))
```

