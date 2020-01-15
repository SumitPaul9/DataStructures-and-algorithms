class Node{
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    add(element){

        var node = new Node(element);
        var current;

        if(this.head == null){
            this.head = node;
        }else{
            current = this.head;
            while (current.next){
                current = current.next;
            }

            current.next = node;
        }
        this.size++;
    }

    insertAt(element, index){
        if(index > 0 && index > this.size)
            return false;
        else{
            var node = new Node(element);
            var curr, prev;

            curr = this.head;

            if(index == 0){
                node.next = head;
                this.head = node;
            }else {
                curr = this.head;
                var iter = 0;

                while( iter < index){
                    iter ++;
                    prev = curr;
                    curr = curr.next;
                }

                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }

}