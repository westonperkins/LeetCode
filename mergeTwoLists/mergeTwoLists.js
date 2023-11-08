var mergeTwoLists = function (l1, l2) {
    const dummy = new ListNode(-Infinity)
    // create the new list to merge the two lists into.
    let pointer = dummy
    // create a pointer for that new list 
    while (l1 && l2) {
        // while l1 and l2 are not null, begin to iterate through them
        if (l1.val < l2.val) {
            // if the current value of l1 is smaller than the current value of l2
            pointer.next = l1
            // move the pointer of the merge list to the first value of l1
            l1 = l1.next
            // now make l1 point to the next value in l1 - essentially iterating over it 1 time
        } else {
            // if the current value of l2 is smaller than the current value of l2
            pointer.next = l2
            // move the merge list pointer's next value to the current value of l2
            l2 = l2.next
            // move over one value in l2 and make l2 equal to its next value
        }
        pointer = pointer.next
        // after all this has been done then you point to the next value in pointer to keep adding to the merge list
    }
    // if l1 is null, there are no more values in it so point to l2
    if (!l1) { pointer.next = l2 }
    // if l2 is null, there are no more values in it so point to l1
    if (!l2) { pointer.next = l1 }
    // return the next value in dummy since we started with -Infinity
    return dummy.next
};