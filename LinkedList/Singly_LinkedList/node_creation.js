// class Node {
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }

// let firstNode = new Node(10)
// console.log(firstNode)


// const n1 = {
//     data : 100
// };

// const n2 = {
//     data : 200
// };

// console.log(n1);
// console.log(n2);

/**class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    
    // Method to add a node at the end of the list
    append(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
    
    // Method to print the list
    printList() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// Create a linked list and allocate memory for 3 nodes
let list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);

// Print the list
list.printList();
**/

//learning node creation 

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }
    prepend(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.head = newNode
        }
        else{
            newNode.next = this.head
            this.head = newNode
        }
        this.size ++;
    }
}
let list = new LinkedList()
list.prepend(10);
list.prepend(20);
list.prepend(30);
console.log("prepend", list)
//console.log("prepend",list.prepend(10))---> can not write like that