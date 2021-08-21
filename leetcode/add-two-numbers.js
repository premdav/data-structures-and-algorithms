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
    let list1_num = '0', list2_num = '0';
    list1.forEach((elem) => {
        list1_num = `${list1_num}${elem.val.toString()}`;
    });
    console.log(list1_num)
    
    list2.forEach((elem) => {
        list2_num = `${list2_num}${elem.val.toString()}`;
    });
    console.log(list2_num)
    let total = [];
    let lastOver10 = false;
    if (list1_num.length > list2_num.length){
        for (let index = 0; index < list1_num.length; index++) {
            if (list2_num[index] !== undefined && list2_num[index] !== null) {
               let temp2 = (parseInt(list1_num[index], 10) + parseInt(list2_num[index], 10));
                if (temp2 < 10) {
                    total.push(temp2.toString());
                    if (lastOver10) {
                        lastOver10 = false;
                        total[index] = (parseInt(total[index]) + 1).toString();
                    }
                }
                else {
                    if (lastOver10) {
                        lastOver10 = false;
                        total.push('1')
                    }
                    lastOver10 = true;
                    total.push(temp2.toString().substring(1));
                }
            } else {
                total.push(list1_num[index]);
            }
        }
    } else {
        for (let index = 0; index < list2_num.length; index++) {
            if (list1_num[index] !== undefined && list1_num[index] !== null) {
               let temp = (parseInt(list1_num[index], 10) + parseInt(list1_num[index], 10));
                if (temp < 10) {
                    total.push(temp.toString());
                    if (lastOver10) {
                        lastOver10 = false;
                        total[index] = (parseInt(total[index]) + 1).toString();
                    }
                }
                else {
                    if (lastOver10) {
                        lastOver10 = false;
                        total.push('1')
                    }
                    lastOver10 = true;
                    total.push(temp.toString().substring(1));
                }
            } else {
                total.push(list2_num[index]);
            }
        }
    }
    total.shift();
    const sum = total;
    const nums = sum.map((item) => (item = parseInt(item, 10)));
    console.log('nums', nums)
    const next_nums = [...nums];
    next_nums.shift();
    return_list = constructList(nums[0], next_nums);
    return return_list
};