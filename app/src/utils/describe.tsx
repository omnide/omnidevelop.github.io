import React from 'react';

type flat_descriptor = [string, string];
type descriptor = [string, string | flat_descriptor];

export function infoList(o: object): flat_descriptor[] {
  const entries = Object.entries(Object.getOwnPropertyDescriptors(Object.getPrototypeOf(o))).map(entry => {
    const name: string = entry[0];
    console.log(name);
    const value = Reflect.get(o, name);
    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') { 
      return [name, value.toString()] as flat_descriptor;
    }
    if (Array.isArray(value) || typeof value === 'function' || value === null) {
        return [name, '__ignored'];
    }
    return [name, infoList(value)]
  });
  const flattened: flat_descriptor[] = [];
  for (let entry of entries) {
    if (typeof entry[1] === "string") {
      flattened.push([entry[0], entry[1]] as flat_descriptor);
    } else {
      for (let sub of entry[1]) {
        flattened.push([entry[0] + "." + sub[0], sub[1]]);
      }
    }
  }
  const sorted = flattened.sort((o1,o2) => {
    if (o1[0] > o2[0]) { return 1; }
    if (o1[0] < o2[0]) { return -1; }
    return 0;
  });
  return sorted.filter((desc) => {return desc[1] !== '__ignored';});
}