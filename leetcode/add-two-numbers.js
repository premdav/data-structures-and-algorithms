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
    let list1_num = '0', list2_num = '0', sum = 0;
    list1.reverse().forEach((elem) => {
        list1_num = `${list1_num}${elem.val.toString()}`;
    });
    
    list2.reverse().forEach((elem) => {
        list2_num = `${list2_num}${elem.val.toString()}`;
    });
    sum = parseInt(list1_num.substring(1), 10) + parseInt(list2_num.substring(1), 10);
    sum = sum.toString().split('');
    const nums = sum.reverse().map((item) => (item = parseInt(item, 10)));
    const next_nums = [...nums];
    return_list = constructList(nums[0], next_nums);
    return return_list
};