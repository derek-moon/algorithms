/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root) return false;

  let cur = root;

  while (cur) {
    if (q.val > cur.val && p.val > cur.val) {
      cur = cur.right;
    } else if (q.val < cur.val && p.val < cur.val) {
      cur = cur.left;
    } else {
      return cur;
    }
  }
};
