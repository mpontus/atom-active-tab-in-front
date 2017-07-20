# active-tab-in-front package

[![apm install active-tab-in-front](https://apm-badges.herokuapp.com/apm/active-tab-in-front.svg)](https://atom.io/packages/active-tab-in-front)

This package provides means for a very intuitive workflow in regards to tab
(items) management. It's comprised of two concepts: treating the collection of
all pane items as a wheel, and being able to easily navigate between a few items
under your immediate attention.

### Typical workflow

This workflow is comprised entirely using 4 commands:

1. `alt-<N>` switch to N-th most recently active item
2. `ctrl-p` (or other) rotate item "wheel" to the left
3. `ctrl-n` (or other) rotate item "wheel" to the right
4. `ctrl-b` (`fuzzy-finder:toggle-buffer-finder`) bring up a deep item

Most often I use `alt-2` through `alt-4` to navigate between a few files I'm
attending to.

Remaining commands are used to find something farther down. `ctrl-b` allows you
to find item by its name but I actually find myself using `ctrl-p` and
`ctrl-n` more often.

I also use `ctrl-n` to "forget" about the item, and `ctrl-p` to bring it
back. The wheel metaphor is mostly there for intuition, as it is hard to
describe item destination otherwise.

### Keymap

I use following snippet to enable the key bindings as described above. You can
add this to `keymap.cson` (Edit > Keymap). Note: this will override default
commands: `fuzzy-finder:toggle-file-finder` and `application:new-file`.

```
'atom-workspace':
  'ctrl-p': 'pane:show-previous-item'
  'ctrl-n': 'active-tab-in-front:bury-active-item'
```
