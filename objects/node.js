/**
 * @module Node
 */

/**
 * @class Node - abstract representation
 */
class Node {
    /**
     * 
     * @param {Number} val the value of the node
     */
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }

    /**
     * This method adds a new node to the tree through the use of recursion
     * @param {Node} n a node to be added as a child 
     */
    addNode(n) {
        if(n.value < this.value) {
            if(this.left === null) {
                this.left = n;
            } else {
                this.left.addNode(n);
            }
        } else if (n.value > this.value) {
            if(this.right === null) {
                this.right = n;
            } else {
                this.right.addNode(n);
            }
        }
    }

    printVal() {
        if (this.left) {
            this.left.printVal();

            console.log(this.value);

            if(this.right) {
                this.right.printVal();
            }
        } else {
            console.log(this.value);
            if (this.right) {
                this.right.printVal();
            }
        }
    }
};

module.exports = { Node };