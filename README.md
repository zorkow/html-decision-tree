# HTML Decision Tree

This is a generic library for building a simple web-based decision trees UI.
Data is provided in JSON format, which is then displayed on a website.


## Installing and Building

The code is in Typescript. After cloning the repository, just type

``` Bash
npm install
npm run-script build
```

This builds the `decisiontree.js` library in `dist`.

Alternative build is done using typescript and webpack:

``` Bash
npx tsc
npx webpack
```

Or simply install the package using 

``` Bash
npm install html-decision-tree
```

## Simple Example

Here is a very simple decision tree for deciding if you should play tennis:

[Tennis example](https://diagram-codesprint.github.io/2020-Image-Description-Decision-Tree/samples/tennis.html)

Here is the corresponding flow chart decision tree for deciding if you should play tennis:

https://app.lucidchart.com/publicSegments/view/ba9eb5f5-98c9-41d2-a3aa-c3cfeb74a59f


## JSON Format

Current node format in some pseudo grammar:

```Javascript
{
type: binary|nary|null,
value: 0-9+,
title: \w*,
content: \w*,
labels: [{
  text: \w*,
  value: 0-9+,
  }],
children: [node*],
}
```

The idea is nary nodes have content (that is the description on the radio
button) which is linked via the value to the children . Binary nodes have
default description content.

### Acknowledgments

* **Amaya Webster** for suggesting the initial idea at the 2020 DIAGRAM and ETS Code Sprint
* **Brian Hochhalter** for UI design and wireframe design and prototyping
* **Danielle Vargas** for CSS styles and accessibility testing and design
* **Carlos Cavalie** for accessibility testing and design

