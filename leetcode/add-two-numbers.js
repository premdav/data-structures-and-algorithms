// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order, and each of their nodes contains a single digit. 
// Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 const cycleList = (incoming_list, add_to) => {
    if (incoming_list.val !== null) {
        add_to.push({ val: incoming_list.val, next: incoming_list.next })
        if (incoming_list.next) cycleList(incoming_list.next, add_to);
    }
    return add_to;
};

let returnList = null;

const constructList = (val, next) => {
    // if next has more than one value in it, we need to use recursion
    if (next !== null && next.length) {
        const newVal = next.shift()
        return new ListNode(val, constructList(parseInt(newVal, 10), next));
    }
    if (next.length === 0) next = null;
    return new ListNode(val, next);
}


const addTwoNumbers = (l1, l2) => {
    const list1 = cycleList(l1, []);
    const list2 = cycleList(l2, []);
    let list1_num = [], list2_num = [];
    list1.forEach((elem) => {
        list1_num.push(elem.val);
    });
    
    list2.forEach((elem) => {
        list2_num.push(elem.val);
    });
    let total = [];
    if (list1_num.length > list2_num.length){
        for (let i = 0; i < list1_num.length; i++) {
            if (list2_num[i] !== undefined) total.push(list1_num[i] + list2_num[i])
            else total.push(list1_num[i])
        }
    } else {
        for (let i = 0; i < list2_num.length; i++) {
            if (list1_num[i] !== undefined) total.push(list1_num[i] + list2_num[i])
            else total.push(list2_num[i])
        }
    }
    
    for (let i = 0; i < total.length; i++) {
        if (total[i] >= 10) {
           total[i] = total[i] % 10;
            if(total[i+1] === undefined) total.push(1);
            else total[i+1] += 1;
        }
    }
    const first = total.shift()
    return constructList(first, total);
};