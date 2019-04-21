/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  const res = new ListNode() 
  let current = res 
  while(l1 !== null && l2 !== null) {
      if(l1.val <= l2.val) {
          current.next = l1
          l1 = l1.next 
      } else {
          current.next = l2
          l2 = l2.next 
      }
      current = current.next
  }
  if(l1 !== null) current.next = l1
  else if(l2 !== null) current.next = l2 
  return res.next
};