# Perlin Noise

Perlin Noise is an algorithm that is used to generate various effects with natural qualities in computer generated effects.

Noise function produces a more naturally ordered ("smooth") sequence of events rather than a randomly generated distribution of numbers. With noise() the output range is fixed - a value is returned between 0 and 1. 

It is used with mapping or map() function. This is to get around the fixed values of between 0 and 1. Mapping function takes 5 arguments. 

1. The value we want to map
2. Current Range - minimum
3. Current Range - maxium
4. Desired Range - minimum
5. Desired Range - maximum

Eg.
```
var x = map(noiseT, 0, 1, 0, width);
```
In this case, the noise has a range between 0 and 1, but we'd like to draw a circle with a range between 0 and the window's width. 
