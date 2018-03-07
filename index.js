function LinkedList() {

    let Node = function(element){
        this.element = element;
        this.next = null;
    };
    let length = 0;
    let head = null;
    
    // 向列表尾部添加一个新的项。
    this.append = function(element){
        let node = new Node(element), 
            current; //{2}
        if (head === null){ //列表中第一个节点 //{3}
        head = node;
        } else {
        current = head; //{4}
        //循环列表，直到找到最后一项
        while(current.next){
        current = current.next;
        }
        //找到最后一项，将其next赋为node，建立链接
        current.next = node; //{5}
        }
        length++; //更新列表的长度 //{6}
    };
    
    // 向列表的特定位置插入一个新的项
    this.insert = function(position, element){
       //检查越界值
        if (position >= 0 && position <= length) { //{1}
            let node = new Node(element),
                current = head,
                previous,
                index = 0;
            if (position === 0) { //在第一个位置添加
                node.next = current; //{2}
                head = node;
            } else {
                while (index++ < position) { //{3}
                    previous = current;
                    current = current.next;
                }
                node.next = current; //{4}
                previous.next = node; //{5}}
            }
            length++; //更新列表的长度
            return true;
        } else {
            return false; //{6}
        }
    };
    
    // 在任意位置插入元素
    this.removeAt = function(position){
      //检查越界值
        if (position > -1 && position < length) {
            let current = head,
                previous, // 我们还需要一个对当前元素的前一个元素的引用（行{7}）；它被命名为previous
                index = 0;
            //移除第一项
            if (position === 0) {
                head = current.next;
            } else {
                while (index++ < position) {
                    previous = current; 
                    current = current.next;
                }
                //将previous与current的下一项链接起来：跳过current，从而移除它
                previous.next = current.next;
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    }; // 从列表的特定位置移除一项
    this.remove = function(element){}; //从列表中移除一项
    this.indexOf = function(element){};
    this.isEmpty = function() {};
    this.size = function() {};
    this.getHead = function(){};
    this.toString = function(){
        let current = head, 
        string = ''; 
        while (current) { 
            string +=current.element +(current.next ? 'n' : '');
            current = current.next; 
        }
        return string;
    };
    this.print = function(){};
}
