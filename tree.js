/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let sum = 0;
    const sumNode = [this.root];

    while (sumNode.length) {
      let currentVal = sumNode.pop();

      if (currentVal === null) break;
      sum += currentVal.val;
      for (let child of currentVal.children) {
        sumNode.push(child);
      }
    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let count = 0
    const nodes = [this.root]
    while(nodes.length){
      let currentVal = nodes.pop()
      if(currentVal === null) break
      if(currentVal.val % 2 === 0){
        count += 1
      }
      for(let child of currentVal.children){
        nodes.push(child)
      }
    }
    return count
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let count = 0
    let nodes = [this.root]
    while(nodes.length){
      let currentVal = nodes.shift()
      if(currentVal === null) break
      if(currentVal.val > lowerBound){
        count += 1
      }
      for(let child of currentVal.children){
        nodes.unshift(child)
      }
    }
    return count
  }
}

module.exports = { Tree, TreeNode };
