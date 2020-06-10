# 2020-Image-Description-Decision-Tree

# JSON Format

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

# HTML Demo View
https://diagram-codesprint.github.io/2020-Image-Description-Decision-Tree/test.html
