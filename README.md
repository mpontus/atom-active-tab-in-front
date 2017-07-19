# active-tab-in-front package

[![apm install active-tab-in-front](https://apm-badges.herokuapp.com/apm/active-tab-in-front.svg)](https://atom.io/packages/active-tab-in-front)

This package ensures that active item (tab) is always in the front of the list.
This simple change has had a major impact on my workflow, and maybe you can find
it useful as well.

### Typical workflow

Good thing about this package, is that you can reliably predict how to access
your most recently active items. By pressing `Alt-2` repeatedly you can rotate
between two most recent items. I use `Alt-<N>` keybindings the most, followed by
`ctrl-alt-n`, and I only use `ctrl-alt-p` in case of emergencies. The purpose of
the last two commands is explained below.

For this use case, it may help if you imagine the collection of all items in a
pane as a wheel. Since your active tab is always the first one, switching to the
previous item (`pane:show-previous-item`) will bring the last item in the front.
This is akin to the wheel being rotated to the right.

What's missing is a way to rotate the wheel to the left without getting stuck in
the loop (switching to the next item just rotates between two first items). To
address this problem a special command has been introduced:
`active-tab-in-front:burry-active-item`.

What it does, is it moves the active item to the end of the list, and focuses on
the item which is now at the front. The effect of this is like rotating the
wheel in the right direction. You previously active item will be put at the end
of the list and you may not be able to access it with `Alt-<N>` shortcuts which
we have established earlier.

I recommend that you make it easy for yourself to use those two commands in
conjunction. I would prefer to have them bound to `ctrl-tab` or `ctrl-shift-tab`
respectively, or `ctrl-n` and `ctrl-p` if you are comfortable with emacs
semantics. Unfortunately I have not been able to override the default key
bindings. I settled for `ctrl-alt-n` and `ctrl-alt-p` and you can use the
following snippet in your `keymap.cson` to apply them to your configuration:

```
'atom-workspace':
  'ctrl-alt-n': 'active-tab-in-front:bury-active-item'
  'ctrl-alt-p': 'pane:show-previous-item'
```

These keybindings have been set up on a linux system, and should work on windows
machines as well. For macs the code may be different. Please create an issue
with a working snippet if you manage to fix it, so I can include it in this
readme.
