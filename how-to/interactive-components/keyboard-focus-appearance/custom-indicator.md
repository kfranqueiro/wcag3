## Methods

There are various ways of creating a focus indicator. The following techniques provide custom ways of creating and testing each category of focus indicator.

<!-- TODO: generate ToC within methods? -->

- [Line or bounding box indicators](#line-or-bounding-box-indicators)
- [Change of color](#change-of-color)
- [Icon/shape](#iconshape)
- [Tooltip/additional content](#tooltipadditional-content)
- [Size change](#size-change)
- [Combination indicators](#combination-indicators)
- [Other indicators](#other-indicators)

### Line or bounding box indicators

<p class="technology"><span class="visually-hidden">Technology: </span>HTML</p>

A bounding box focus indicator using outline, border or box-shadow.

* **Sufficient Size:** The thickness/length of the focus indicator change is [a sufficient size to be noticeable].
  :::ednote
  We will use a metric of 2px of the perimeter -20% as a starting point. This metric needs usability testing, please get in touch if you could help facilitate this.
  :::
  :::note
  Text within a control is not considered part of the size metric.
  :::

* **Change of contrast:** The contrast change of the pixels that indicate the keyboard focus is [sufficient] in a) standard mode, b) dark mode, and  c) high contrast mode.
  :::ednote
  The contrast metric is to be determined, but assumed to be similar to a large-text level.
  :::
* **Adjacent Contrast:** The focus indicator has sufficient contrast with the adjacent colors in a) standard mode, b) dark mode, and c) high contrast mode
  :::ednote
  There is a relationship between the area of the focus indicator and contrast that will need to be clarified. E.g. a higher contrast area may not need to be as large.
  :::
  :::note
  If the focus indicator is adjacent to the focusable element and does not contrast with the element, it can use the <a href="#size-change">Size change</a> method.
  :::
* **Distinct Style:** The keyboard focus indicator uses a style that is distinct from the style of other controls, so that the item in focus can be distinguished without reference to the non-focused state.
* **Multiple controls:** There must be at least 3 visible controls of the same style in the view/page.
  :::note
  In order for a change of color to be used, there needs to be a basis for comparison, otherwise another method is needed.
  :::
* **Adjacent:** The indicator is closer to the focused element than any other focusable element. (The center of the focused element to the center of the indicator.)


### Change of color

The authored focus indicator uses a change of color within the control.

* **Sufficient Size:** The thickness/length of the focus indicator change is [a sufficient size to be noticeable].
  :::ednote
  We will use a metric of 2px of the perimeter -20% as a starting point. This metric needs usability testing, please get in touch if you could help facilitate this.
  :::
  :::note
  Text within a control is not considered part of the size metric.
  :::
* **Change of contrast:** The contrast change of the pixels that indicate the keyboard focus is [sufficient] in a) standard mode, b) dark mode, and  c) high contrast mode.
    :::ednote
    The contrast metric is to be determined, but assumed to be similar to a large-text level.
    :::
* **Distinct Style:** The keyboard focus indicator uses a style that is distinct from the style of other controls, so that the item in focus can be distinguished without reference to the non-focused state.
* **Multiple controls:** There must be at least 3 visible controls of the same style in the view/page.
  :::note
  In order for a change of color to be used, there needs to be a basis for comparison, otherwise another method is needed.
  :::

### Icon/shape

The authored focus indicator uses the addition/removal of an icon or shape.

* **Sufficient Size:** The thickness/length of the focus indicator change is [a sufficient size to be noticeable].
  :::ednote
  We will use a metric of 2px of the perimeter -20% as a starting point. This metric needs usability testing, please get in touch if you could help facilitate this.
  :::
  :::note
  Text within a control is not considered part of the size metric.
  :::
* **Change of contrast:** The contrast change of the pixels that indicate the keyboard focus is [sufficient] in a) standard mode, b) dark mode, and  c) high contrast mode.
  :::ednote
  The contrast metric is to be determined, but assumed to be similar to a large-text level.
  :::
* **Adjacent Contrast:** The focus indicator has sufficient contrast with the adjacent colors in a) standard mode, b) dark mode, and c) high contrast mode
  :::ednote
  There is a relationship between the area of the focus indicator and contrast that will need to be clarified. E.g. a higher contrast area may not need to be as large.
  :::
  :::note
  If the focus indicator is adjacent to the focusable element and does not contrast with the element, it can use the <a href="#size-change">Size change</a> method.
  :::

### Tooltip/additional content

Display a tooltip to indicate the user interface component with focus.

* **Sufficient Size:** The thickness/length of the focus indicator change is [a sufficient size to be noticeable].
  :::ednote
  We will use a metric of 2px of the perimeter -20% as a starting point. This metric needs usability testing, please get in touch if you could help facilitate this.
  :::
  :::note
  Text within a control is not considered part of the size metric.
  :::
* **Change of contrast:** The contrast change of the pixels that indicate the keyboard focus is [sufficient] in a) standard mode, b) dark mode, and  c) high contrast mode.
  :::ednote
  The contrast metric is to be determined, but assumed to be similar to a large-text level.
  :::
* **Adjacent Contrast:** The focus indicator has sufficient contrast with the adjacent colors in a) standard mode, b) dark mode, and c) high contrast mode
  :::ednote
  There is a relationship between the area of the focus indicator and contrast that will need to be clarified. E.g. a higher contrast area may not need to be as large.
  :::
  :::note
  If the focus indicator is adjacent to the focusable element and does not contrast with the element, it can use the <a href="#size-change">Size change</a> method.
  :::

### Size change

A change of size of the focusable element to show focus.

* **Sufficient Size:** The discernable area of the focus indicator change is [sufficient to be noticeable]
  :::ednote
  We will use a metric of 10% as a starting point. This metric needs usability testing, please get in touch if you could help facilitate this.
  :::
  :::note
  “discernable area” means the focused element has a discernible border or background, it cannot just be text.
  :::
  :::note
  Text within a control is not considered part of the size metric.
  :::
* **Contrast:** The contrast change of the pixels that indicate the keyboard focus is sufficient in a) standard mode, b) dark mode, and c) high contrast mode

### Combination indicators

If an indicator uses a combination of techniques, one of those techniques must meet the test.

### Other indicators

Using a custom indicator that does not fit into any other method.

* **Sufficient Size:** The thickness/length of the focus indicator change is sufficient to be noticeable (metric TBC, use 2px perimeter of the (visually apparent) control as the default, should be relative to the visual size of the control.)
  :::note
  Add the complexity of the adjacent contrast vs size of indicator.
  :::
* Change of contrast: The contrast change of the pixels that indicate the keyboard focus is sufficient in a) standard mode, b) dark mode, and  c) high contrast mode.
* **Adjacent Contrast:** The focus indicator has sufficient contrast with the adjacent colors in a) standard mode, b) dark mode, and c) high contrast mode
  :::note
  There is a relationship between the area of the focus indicator and contrast that will need to be clarified.
  :::
  :::note
  If the focus indicator is adjacent to the focusable element and does not contrast with the element, it may pass via “size change” below.
  :::
* **Distinct Style:** The keyboard focus indicator uses a style that is distinct from the style of other controls, so that the item in focus can be distinguished without reference to the non-focused state.
* **Adjacent:** The indicator is closer to the focused element than any other focusable element. (The center of the focused element to the centre of the indicator.)
