'use babel';

import ActiveTabInFrontView from './active-tab-in-front-view';
import { CompositeDisposable } from 'atom';

export default {

  activeTabInFrontView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.activeTabInFrontView = new ActiveTabInFrontView(state.activeTabInFrontViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.activeTabInFrontView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'active-tab-in-front:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.activeTabInFrontView.destroy();
  },

  serialize() {
    return {
      activeTabInFrontViewState: this.activeTabInFrontView.serialize()
    };
  },

  toggle() {
    console.log('ActiveTabInFront was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
