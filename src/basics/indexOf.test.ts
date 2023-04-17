

function indexOf(head, value) {
    if(!head) {
        return -1
    }
    let i = 0;
    let node = head;
    while  (node != null) {
        if ( node.data === value ) {
            return i ;
        }
        node = node.next;
        i++
    }
    return -1;


}

function lastIndexOf(head, value) {
    if(!head) {
        return -1
    }
    let i = 0;
    let lastPosition =  -1;
    let node = head;
    while  (node != null) {
        if ( node.data === value ) {
            lastPosition = i;
        }
        node = node.next;
        i++
    }
    return lastPosition;
}


function anyMatch(head, p) {
    if(!head) {
        return false
    }


    let node = head;
    while  (node != null) {
        if ( p(node.data) ) {
          return  true;
        }
        node = node.next;
    }


    return false;
}

function allMatch(head, p) {
    if(!head) {
        return true
    }
    let node = head;
    while  (node != null) {
        if ( !p(node.data) ) {
            return  false;
        }
        node = node.next;
    }


    return true;

}


function countIf(head, p) {
    if(!head) {
        return 0
    }

    let i = 0;
    let node = head;
    while  (node != null) {
        if ( p(node.data) ) {
            i++;
        }
        node = node.next;
    }


    return i;

}


function findNext(head, p) {
     if (head === null) return null;
    if (head.next === null && p(head.data) || p(head.data)){
        return head;
    }
    else {
        return findNext(head.next, p);
    }
}


function filter(head, p) {
    if (head === null) return null;
    head = findNext(head, p);
   let firstHead = head;
    while (head !== null) {
        const next = findNext(head.next, p)
        head.next = next
        if (next===null) break;
        head = next

    }
    return firstHead;

}


function map(head, f) {

    if(!head) {
        return 0
    }

    let clone =  JSON.parse(JSON.stringify(head));

    let i = 0;
    let node = clone;
    while  (node != null) {
        node.data = f(node.data);
        node = node.next;
    }


    return clone;
}


function reduce(head, f, init) {

    if(!head) {
        return init
    }

    let  acc = init;

    let node = head;
    while  (node != null) {
        acc =  f(acc, node.data);
        node = node.next;
    }
    return acc;
}


function flatten(root) {
    return null;
};

class CustomTreeNode {
    left ;
    value;
    right
    constructor(value, left = null, right= null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class CustomNode {
    next ;
    data;

    constructor(data, next = null) {
        this.data = data;
        this.next = next == null || next === undefined ? null : next;
    }
}

const  listFromArray = (arr)  => {
    let next = null;
    let root   =  new CustomNode(arr[0] , next);
    let head = root;
    for (let i = 1; i < arr.length; i++) {
        next =  new CustomNode(arr[i] );
        root.next = next;
        root = next
    }
    return head

}




describe("indexOf", function() {

    it("basic tests", function() {

       expect(indexOf(listFromArray([1, 2, 3]), 2)).toEqual( 1);
        expect(indexOf(null, 17)).toEqual( -1);
        expect(indexOf(listFromArray(['aaa', 'b', 'abc']), 'aaa')).toEqual( 0);
        expect(indexOf(listFromArray([17, '17', 1.2]), 17)).toEqual( 0);
        expect(indexOf(listFromArray([17, '17', 1.2]), '17')).toEqual( 1);
        expect(indexOf(listFromArray([1, 2, 3, 3]), 3)).toEqual( 2);
    });

});


describe("lastIndexOf", function() {

    it("basic tests lastIndexOf", function() {
        expect(lastIndexOf(null, 17)).toEqual( -1);
        expect(lastIndexOf(listFromArray([1, 2, 3]), 2)).toEqual( 1);
        expect(lastIndexOf(listFromArray(['aaa', 'b', 'abc']), 'aaa')).toEqual( 0);
        expect(lastIndexOf(listFromArray([17, '17', 1.2]), 17)).toEqual( 0);
        expect(lastIndexOf(listFromArray([17, '17', 1.2]), '17')).toEqual( 1);
        expect(lastIndexOf(listFromArray([1, 2, 3, 3]), 3)).toEqual( 3);
    });

});


describe("anyMatch & allMatch", function() {

    it("basic tests match", function() {
        expect(anyMatch(null, x => false)).toEqual( false);
        expect(anyMatch(null, x => true)).toEqual( false);
        expect(allMatch(null, x => false)).toEqual( true);
        expect(allMatch(null, x => true)).toEqual( true);
        expect(anyMatch(listFromArray([1, 2, 3]), x => x > 1)).toEqual( true);
        expect(allMatch(listFromArray([1, 2, 3]), x => x > 1)).toEqual( false);
    });

});


describe("countIf", function() {

    it("basic tests", function() {
        expect(countIf(null, x => false)).toEqual( 0);
        expect(countIf(listFromArray([1, 2, 3]), x => true)).toEqual( 3);
    });

    it("array of ints", function() {
        expect(countIf(listFromArray([1, 2, 3]), x => x <= 2)).toEqual( 2);
    });

});


describe("filter", function() {

    // testFilter(input_list_head, predicate, expected_list_head)

    it("basic tests", function() {
        filter(null, x => false, null);
        filter(new CustomNode(1, new CustomNode(2, new CustomNode(3))), x => true, new CustomNode(1, new CustomNode(2, new CustomNode(3))));
        filter(new CustomNode(1, new CustomNode(2, new CustomNode(3))), x => x <= 2, new CustomNode(1, new CustomNode(2)));
        filter(new CustomNode(1, new CustomNode(2, new CustomNode(3))), x => x === 1, new CustomNode(1));
    });

});


describe("map", function() {
    function listToArray(head) {
        return !head ? [] : [head.data].concat(listToArray(head.next));
    };
    // testMap(input_list_head, mapping_function, expected_list_head)
    function testMap(head, f, expected) {
        expect(listToArray(map(head, f))).toEqual( listToArray(expected));
    };
    it("basic tests", function() {
        testMap(null, x => false, null);
        testMap(new CustomNode(1, new CustomNode(2, new CustomNode(3))), x => x * 2, new CustomNode(2, new CustomNode(4, new CustomNode(6))));
    });




});


describe("reduce", function() {

    it("basic tests", function() {
        expect(reduce(null, (a, b) => a + b, 0)).toEqual( 0);
        expect(reduce(new CustomNode(1, new CustomNode(2, new CustomNode(3))), (a, b) => a + b, 0)).toEqual( 6);
        expect(reduce(new CustomNode(1, new CustomNode(2, new CustomNode(3, new CustomNode(4)))), (a, b) => a * b, 1)).toEqual( 24);
        expect(reduce(new CustomNode('a', new CustomNode('b', new CustomNode('c'))), (a, b) => a + b, '')).toEqual( 'abc');
    });

});


 
