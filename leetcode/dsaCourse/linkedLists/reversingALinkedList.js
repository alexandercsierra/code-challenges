/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

const {ListNode} = require('../../utls/linkedLists')

function reverseBetween({head, left, right})  {
    
    // initialize a dummy node bc start could be first node and we need prev to reverse  
    const dummy = new ListNode(0, head)
    let start = dummy
    
    // iterate to the node before the left node
    for(let i=0; i<left-1; i++){
        start = start.next;
    }
        
    let prev = start;
    let curr = start.next;
    
    // reverse the list up to right
    for(let i=left; i<=right; i++){
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    
    // by the time the reversal process is complete, start represents the node before left
    // still pointing at what is now the tail of the reversed sublist
    const tail = start.next;
    // prev is holding onto the head of the reversed sublist, so point next there
    start.next = prev;
    // curr is holding onto whatever is left of the list after right, so connect that piece
    tail.next = curr
    
    // return the newly assembled list minus the dummy node we set up
    return dummy.next
   
}

module.exports={reverseBetween}