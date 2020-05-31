/**
 * @module Tree
 */
const { Node } = require('./node');

/**
 * @class Tree abstract representation
 */
class Tree {
    constructor() {
        this.root = null;
    }

    /**
     * This method takes in a number and add's it as a node to the tree
     * @param {Number} n The value of the new node to be added
     * @returns {void}
     */
    addValue(n) {
        let node = new Node(n);
        if(this.root === null) {
            this.root = node;
        } else {
            this.root.addNode(node);
        }
    }

    /**
     * This method triggers the printVal method in all of the tree's children nodes in order,
     * through recursion
     */
    printOrdered() {
        this.root.printVal();
    }
}

module.exports = { Tree };