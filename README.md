# 2020-Image-Description-Decision-Tree

## JSON Format

Current node format in some pseudo grammar:

```Javascript
{
type: binary|nary|null,
value: 0-9+,
title: \w*,
content: [{
  text: \w*,
  value: 0-9+,
  }],
children: [node*],
}
```

The idea is nary nodes have content (that is the description on the radio
button) which is linked via the value to the children . Binary nodes have
default description content.

## HTML Demo View
https://diagram-codesprint.github.io/2020-Image-Description-Decision-Tree/test.html

## Wireframes

https://www.figma.com/file/fVmv8UBcOABz23PJz20bfH/DIAGRAM-Decision-Tree?node-id=18%3A624

## Prototype

https://www.figma.com/proto/fVmv8UBcOABz23PJz20bfH/DIAGRAM-Decision-Tree?node-id=18%3A624

### Embed (if it works)

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FfVmv8UBcOABz23PJz20bfH%2FDIAGRAM-Decision-Tree%3Fnode-id%3D18%253A624&chrome=DOCUMENTATION" allowfullscreen></iframe>