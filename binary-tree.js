/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth(root = this.root) {
    /* let queue = [this.root];
    if (this.root === null) return 0;
    let min = 1;

    while (queue.length) {
      let levelSize = queue.length;
      while (levelSize) {
        let current = queue.shift();
        if (!current.left && !current.right) return min;
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);

        levelSize--;
      }
      min++;
    }
    return min; */
    if (root === null) {
      return 0;
    }

    return 1 + Math.min(this.maxDepth(root.left), this.maxDepth(root.right));
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth(root = this.root) {
    if (root === null) {
      return 0;
    }

    return 1 + Math.max(this.maxDepth(root.left), this.maxDepth(root.right));
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum(root = this.root) {
    if (root === null) return 0;

    let leftSide = this.maxSum(root.left) + root.val;
    let rightSide = this.maxSum(root.right) + root.val;

    if (root === this.root) {
      return leftSide + rightSide - root.val;
    }

    return Math.max(leftSide, rightSide);
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let queue = [this.root];
    if (this.root === null) return null;
    let checkVal = this.root.val;
    while (queue.length) {
      let current = queue.shift();
      if (current.val > lowerBound) {
        if (current.val < checkVal) {
          checkVal = current.val;
        }
      }
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    if (lowerBound === checkVal) return null;
    return checkVal;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
    let queue = [this.root];

    let level = 1;
    let foundNode1 = null;
    let foundNode2 = null;
    while (queue.length) {
      let levelLength = queue.length;
      while (levelLength) {
        let current = queue.shift();

        if (current.left === node1 && current.right === node2) {
          return false;
        }
        if (current === node1) foundNode1 = level;
        if (current === node2) foundNode2 = level;
        if (foundNode1 && foundNode2) {
          if (foundNode1 === foundNode2) {
            return true;
          } else {
            return false;
          }
        }

        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);

        levelLength--;
      }
      level++;
    }
  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {}

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {}

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };
