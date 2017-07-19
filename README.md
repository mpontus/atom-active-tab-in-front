# active-tab-in-front package

[![apm install active-tab-in-front](https://apm-badges.herokuapp.com/apm/active-tab-in-front.svg)](https://atom.io/packages/active-tab-in-front)

This package provides means for a very intuitive workflow in regards to tab
(items) management. It's comprised of two concepts: treating the collection of
all pane items as a wheel, and being able to easily navigate between a few items
under your immediate attention.

### Typical workflow

This workflow is comprised entirely using 4 commands:

1. `alt-<N>` switch to N-th most recently active item
2. `ctrl-alt-p` (or other) rotate item "wheel" to the left
3. `ctrl-alt-n` (or other) rotate item "wheel" to the right
4. `ctrl-b` (`fuzzy-finder:toggle-buffer-finder`) bring up a deep item

Most often I use `alt-2` through `alt-4` to navigate between a few files I'm
attending to.

Remaining commands are used to find something farther down. `ctrl-b` allows you
to find item by its name but I actually find myself using `ctrl-alt-p` and
`ctrl-alt-n` more often.

I also use `ctrl-alt-n` to "forget" about the item, and `ctrl-alt-p` to bring it
back. The wheel metaphor is mostly there for intuition, as it is hard to
describe item destination otherwise.

### Keymap

Use following snippet to enable the key bindings as described above. Add it to
your `keymap.cson` (Edit > Keymap).

```
'atom-workspace':
  'ctrl-alt-n': 'active-tab-in-front:bury-active-item'
  'ctrl-alt-p': 'pane:show-previous-item'
```

I would use `ctrl-n` and `ctrl-p` but I haven't figured out a way to override
the default key bindings.

Feel free to open an issue if you have a solution.
