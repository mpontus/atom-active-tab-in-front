'use babel';

import { CompositeDisposable } from 'atom';

export default {
  subscriptions: null,

  activate(state) {
    this.subscriptions = new CompositeDisposable();

    this.subscriptions.add(
      atom.workspace.getCenter().observePanes(pane => {
        this.subscriptions.add(
          pane.observeActiveItem((item) => {
            if (!item) {
              return;
            }
            // This needs to happen asynchronusly in order to avoid conflicts
            // when item is activated as a result of removing an item.
            // If you rearrange an item during the removal process then atom may
            // remove a wrong item.
            setImmediate(() => {
              if (pane.getActiveItem() === item) {
                pane.moveItem(item, 0);
              }
            });
          })
        )
      })
    );

    // This command provides a more useful mechanism for switching to next item
    // considering the nature of this package. It's advised to use it in place
    // pane:show-next-item since the original command will only loop through
    // between first two items when invoked continously.
    this.subscriptions.add(
      atom.commands.add(
        'atom-workspace',
        {
          'active-tab-in-front:bury-active-item': this.buryActiveItem,
        },
      )
    );
  },

  /**
   * Move active item in the specified pane to the front of all other items
   */
  raiseActiveItem(pane) {
    const activeItem = pane.getActiveItem();

    // Skip itemless panes
    if (!activeItem) {
      return;
    }

    pane.moveItem(activeItem, 0);
  },

  /**
   * Move active item in the active pane to the end of all other items
   */
  buryActiveItem() {
    const pane = atom.workspace.getActivePane();
    const item = pane.getActiveItem();
    const len = pane.getItems().length;

    pane.moveItem(item, len - 1);
    pane.activateItemAtIndex(0);
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  serialize() {
    return {};
  },
};
