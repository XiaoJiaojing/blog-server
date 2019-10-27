var result = [
    {
        title: 'JavaScript 实现数据结构',
        abstract: '>本文主要是用 JavaScript 实现计算机中的常见数据结构',
        tag: '数据结构',
        page: 1,
        file: '## JavaScript 实现数据结构\n' +
            '\n' +
            '> 本文主要是用 JavaScript 实现计算机中的常见数据结构\n' +
            '\n' +
            '### 一、栈结构的实现\n' +
            '\n' +
            '以下针对每种数据结构，本文都将其封装在一个类（构造函数）中，以便多次使用。\n' +
            '\n' +
            '**首先是栈结构，可以看做是羽毛球筒，只有一个口，这个口即是数据的出口也是数据的入口，也就是说栈是只能在一端进行插入和删除操作的特殊线性表同时是一种`先进后出`的数据结构，且是只能在一端进行插入和删除操作的特殊线性表**\n' +
            '\n' +
            '> 主要有 入栈（push），出栈（pop），检查栈顶（peek），栈大小（size）等操作，以下是具体的代码实现：\n' +
            '\n' +
            '```javascript\n' +
            ' var Stack = function () {\n' +
            '        var items = [];     //私有的，通过数组来模拟一个栈，存储数据\n' +
            '        // this.items = [];   //共有的\n' +
            '        this.push = function (element) {\n' +
            '            items.push(element)\n' +
            '        }\n' +
            '     \t\n' +
            '        this.pop = function () {\n' +
            '            return items.pop()\n' +
            '        }\n' +
            '        // peek 检查栈顶\n' +
            '        this.peek = function () {\n' +
            '            return items[items.length-1]\n' +
            '        }\n' +
            '\n' +
            '        // 检查栈是否为空？\n' +
            '        this.isEmpty = function () {\n' +
            '            return items.length == 0\n' +
            '        }\n' +
            '        // 清除栈\n' +
            '        this.clear = function () {\n' +
            '            items = []\n' +
            '        }\n' +
            '        // 获取栈的大小\n' +
            '        this.size = function () {\n' +
            '            return items.length\n' +
            '        }\n' +
            '     \n' +
            '     //获取内部的items\n' +
            '        this.getItems = function () {\n' +
            '            return items;\n' +
            '        }\n' +
            '    }\n' +
            '\n' +
            '```\n' +
            '\n' +
            '### 二、队列结构的实现\n' +
            '\n' +
            '**队列结构和栈十分相似，它们都是线性表，特殊之处在于它只允许在表的前端（front）进行删除操作，而在表的后端（rear）进行插入操作，也就是遵循`先进先出`的原则，队列从尾部添加新元素，从顶部移除元素，最新添加的元素必须排列在队列的末尾。**\n' +
            '\n' +
            '> 主要有入列(enqueue)，出列(dequeue)，返回队列第一个元素(front)，检查队列是否为空(isEmpty)，队列长度(length)等操作，具体的代码实现如下：\n' +
            '\n' +
            '```javascript\n' +
            'var Queue = function () {\n' +
            '        items = []  //私有的，通过数组来模拟一个队列，存储数据\n' +
            '        // 入列\n' +
            '        this.enqueue = function (element) {\n' +
            '            items.push(element)\n' +
            '        }\n' +
            '    \t//出列\n' +
            '        this.dequeue = function () {\n' +
            '          return  items.shift()\n' +
            '        }\n' +
            '\t\t//返回队列中第一个元素\n' +
            '        this.front = function () {\n' +
            '            return items[0]\n' +
            '        }\n' +
            '\t\t//检查队列是否为空\n' +
            '        this.isEmpty = function () {\n' +
            '            return items.length === 0\n' +
            '        }\n' +
            '\t\t//获取队列的长度\n' +
            '        this.size = function () {\n' +
            '            return items.length\n' +
            '        }\n' +
            '    \t//清空队列\n' +
            '        this.clear = function () {\n' +
            '\t\t\titems = []\n' +
            '        }\n' +
            '    \t//获取队列\n' +
            '        this.getItems = function () {\n' +
            '\t\t\treturn items\n' +
            '        }\n' +
            '    }\n' +
            '```\n' +
            '\n' +
            '### 三、链表结构的实现\n' +
            '\n' +
            '**链表有单向链表，双向链表和循环链表，这里主要讲的是单向链表，单向链表中的每一个元素都是由元素本身数据和指向下一个元素的指针构成，所以添加或是移除某一个元素不需要对链表整体进行操作，只需要改变相关元素的指针指向就可以了。**\n' +
            '\n' +
            '链表在实际生活中的例子也有很多，比如自行车的链条，环环相扣，或者是火车的车厢，每一节车厢就是元素，想要移除或是添加某一节车厢，只需要把连接车厢的链条改变一下就好了。\n' +
            '\n' +
            '​  主要有以下操作：\n' +
            '\n' +
            '> append(element):  向链表尾部添加一个新的元素；\n' +
            '\n' +
            '> insert(position,element):  向链表特定位置插入元素；\n' +
            '\n' +
            '> remove(element):   从链表移除一项；\n' +
            '\n' +
            '> indexOf(element):   返回链表中某元素的索引，如果没有返回-1；\n' +
            '\n' +
            '> removeAt(position):   从特定位置移除一项；\n' +
            '\n' +
            '> isEmpty():   判断链表是否为空，如果为空返回true,否则返回false;\n' +
            '\n' +
            '> size():   返回链表包含的元素个数；\n' +
            '\n' +
            '> toString():   重写继承自Object类的toString()方法，因为我们使用了Node类；\n' +
            '\n' +
            '具体代码实现如下：\n' +
            '\n' +
            '```javascript\n' +
            'function LinkedList() {\n' +
            '    //Node类声明 模拟链表中每个节点的数据结构\n' +
            '    let Node = function(element){\n' +
            '        this.element = element;\n' +
            '        this.next = null;\n' +
            '    };\n' +
            '    //初始化链表长度\n' +
            '    let length = 0;\n' +
            '    //初始化第一个元素\n' +
            '    let head = null;\n' +
            '    \n' +
            '    //在链表尾部添加元素的方法\n' +
            '    this.append = function(element){\n' +
            '        //初始化添加的Node实例\n' +
            '        let node = new Node(element);\n' +
            '        if (head === null){\n' +
            '            //第一个Node实例进入链表，之后在这个LinkedList实例中head就不再是null了\n' +
            '            head = node;\n' +
            '        } else {\n' +
            '            current = head;\n' +
            '            //循环链表知道找到最后一项，循环结束current指向链表最后一项元素\n' +
            '            while(current.next){\n' +
            '                current = current.next;\n' +
            '            }\n' +
            '            //找到最后一项元素后，将他的next属性指向新元素node,j建立链接\n' +
            '            current.next = node;\n' +
            '        }\n' +
            '        //更新链表长度\n' +
            '        length++;\n' +
            '    };\n' +
            '    \n' +
            '    //在链表某个位置插入一个元素的方法\n' +
            '    this.insert = function(position, element){\n' +
            '        //检查是否越界，超过链表长度或是小于0肯定不符合逻辑的\n' +
            '        if (position >= 0 && position <= length){\n' +
            '            let node = new Node(element),\n' +
            '                current = head,\n' +
            '                previous = null,\n' +
            '                index = 0;\n' +
            '            if (position === 0){\n' +
            '                //在第一个位置添加\n' +
            '                 head = node;\n' +
            '                 node.next = current;\n' +
            '            } else {\n' +
            '              //循环链表，找到正确位置，循环完毕，previous，current分别是被添加元素的前一个和后一个元素\n' +
            '                while (index < position){\n' +
            '                    previous = current;\n' +
            '                    current = current.next;\n' +
            '                    index++\n' +
            '                }\n' +
            '                node.next = current;\n' +
            '                previous.next = node;\n' +
            '            }\n' +
            '            //更新链表长度\n' +
            '            length++;\n' +
            '            return true;\n' +
            '        } else {\n' +
            '            return false;\n' +
            '        }\n' +
            '    };\n' +
            '    \n' +
            '    //删除链表某个位置的元素的方法\n' +
            '    this.removeAt = function(position){\n' +
            '        //检查是否越界，超过链表长度或是小于0肯定不符合逻辑的\n' +
            '        if (position > -1 && position < length){\n' +
            '            let current = head,\n' +
            '                previous,\n' +
            '                index = 0;\n' +
            '            //移除第一个元素\n' +
            '            if (position === 0){\n' +
            '                //移除第一项，相当于head=null;\n' +
            '                head = current.next;\n' +
            '            } else {\n' +
            '               //循环链表，找到正确位置，循环完毕，previous，current分别是被添加元素的前一个和后一个元素\n' +
            '                while (index++ < position){\n' +
            '                    previous = current;\n' +
            '                    current = current.next;\n' +
            '                }\n' +
            '                //链接previous和current的下一个元素，也就是把current移除了\n' +
            '                previous.next = current.next;\n' +
            '            }\n' +
            '            length--;\n' +
            '            return current.element;\n' +
            '        } else {\n' +
            '            return null;\n' +
            '        }\n' +
            '    };\n' +
            '    \n' +
            '    //获取链表某个位置的元素的方法\n' +
            '    this.indexOf = function(element){\n' +
            '        let current = head,\n' +
            '            index = 0;\n' +
            '        //循环链表找到元素位置\n' +
            '        while (current) {\n' +
            '            if (element === current.element) {\n' +
            '                return index;\n' +
            '            }\n' +
            '            index++;\n' +
            '            current = current.next;\n' +
            '        }\n' +
            '        return -1;\n' +
            '    };\n' +
            '    \n' +
            '    // 删除链表中的某个元素的方法\n' +
            '    this.remove = function(element){\n' +
            '        //调用已经声明过的indexOf和removeAt方法\n' +
            '        let index = this.indexOf(element);\n' +
            '        return this.removeAt(index);\n' +
            '    };\n' +
            '    \n' +
            '    //判断链表是否为空的方法\n' +
            '    this.isEmpty = function() {\n' +
            '        return length === 0;\n' +
            '    };\n' +
            '    //返回链表的长度\n' +
            '    this.size = function() {\n' +
            '        return length;\n' +
            '    };\n' +
            '    //返回链表头\n' +
            '    this.getHead = function(){\n' +
            '        return head;\n' +
            '    }；\n' +
            '}\n' +
            '```\n' +
            '\n' +
            '### 四、集合数据结构的实现，对应的是ES6中的 Set结构\n' +
            '\n' +
            '**集合是类似于对象的一种数据结构，但是它是 value-value 的形式存在的**，特点是： `没有重复的数据`\n' +
            '\n' +
            '集合中主要有以下操作：\n' +
            '\n' +
            '> add(value):   向集合添加一个新的项\n' +
            '\n' +
            '> remove(value):   从集合移除一个值\n' +
            '\n' +
            '> has(value):   如果值在集合中，返回true,否则返回false\n' +
            '\n' +
            '> clear():   移除集合中的所有项\n' +
            '\n' +
            '> size():   返回集合所包含的元素数量，与数组的length属性相似\n' +
            '\n' +
            '> values():   返回一个集合中所有值的数组\n' +
            '\n' +
            '> union(setName):   并集，返回包含两个集合所有元素的新集合(元素不重复)\n' +
            '\n' +
            '> intersection(setName):   交集，返回包含两个集合中共有的元素的集合、\n' +
            '\n' +
            '> difference(setName):   差集，返回包含所有存在本集合而不存在setName集合的元素的新集合\n' +
            '\n' +
            '> subset(setName):   子集，验证setName是否是本集合的子集\n' +
            '\n' +
            '```javascript\n' +
            'var Set2 = function () {\n' +
            '        var items = {}\n' +
            '\n' +
            '        // has 检查元素是否存在 return boolean\n' +
            '        this.has = function (value) {\n' +
            '            return items.hasOwnProperty(value)\n' +
            '        }\n' +
            '\n' +
            '        // 添加元素\n' +
            '        this.add = function (value) {\n' +
            '            if(this.has(value)){\n' +
            '                // 存在\n' +
            '                return false\n' +
            '            } else {\n' +
            '                items[value] = value\n' +
            '                return value\n' +
            '            }\n' +
            '        }\n' +
            '        \n' +
            '        // 删除方法\n' +
            '        this.remove = function (value) {\n' +
            '            if(this.has(value)){\n' +
            '                // delete 用来删除键值对\n' +
            '                delete items[value]\n' +
            '                return true\n' +
            '            } else {\n' +
            '                // 不用管\n' +
            '                return false\n' +
            '            }\n' +
            '        }\n' +
            '\n' +
            '        // 清空集合\n' +
            '        this.clear = function () {\n' +
            '            items = {}\n' +
            '        }\n' +
            '\n' +
            '        // 集合的大小\n' +
            '        this.size = function () {\n' +
            '            /* 方法1\n' +
            '            var count = 0\n' +
            '             // 遍历集合\n' +
            '            for(var key in items){\n' +
            '                 if(items.hasOwnProperty(key)){\n' +
            '                     count++\n' +
            '                 }\n' +
            '             }\n' +
            '            return count\n' +
            '\t\t\t*/\n' +
            '            // 方法2\n' +
            '            // Object.keys(items)  返回所有键组成的数组\n' +
            '            return Object.keys(items).length\n' +
            '        }\n' +
            '\n' +
            '        // 提取集合里所有的值\n' +
            '        this.value = function () {\n' +
            '            var value = []\n' +
            '            for(var key in items){\n' +
            '                if(items.hasOwnProperty(key)){\n' +
            '                    value.push(items[key])\n' +
            '                }\n' +
            '            }\n' +
            '            return value\n' +
            '        }\n' +
            '\n' +
            '        // 并集\n' +
            '        this.union = function (otherSet) {\n' +
            '            var resultSet = new Set2()\n' +
            '            // 1.把自己的值提取出来\n' +
            '            var arr = this.value()\n' +
            '            for(var i=0;i<arr.length;i++){\n' +
            '                resultSet.add(arr[i])\n' +
            '            }\n' +
            '            // 把另一个集合的值取出来\n' +
            '            arr = otherSet.value()\n' +
            '            for(var i=0;i<arr.length; i++){\n' +
            '                resultSet.add(arr[i])\n' +
            '            }\n' +
            '            return resultSet\n' +
            '        }\n' +
            '\n' +
            '        // 交集\n' +
            '        this.intersection = function (otherSet) {\n' +
            '            var resultSet = new Set2()\n' +
            '            var arr = this.value()\n' +
            '            for(var i=0;i<arr.length;i++){\n' +
            '                if(otherSet.has(arr[i])){\n' +
            '                    resultSet.add(arr[i])\n' +
            '                }\n' +
            '            }\n' +
            '            return resultSet\n' +
            '        }\n' +
            '        //差集\n' +
            '        this.difference = function (otherSet) {\n' +
            '            var resultSet = new Set2()\n' +
            '            var arr = this.value()\n' +
            '            for(var i=0;i<arr.length;i++){\n' +
            '                if(!otherSet.has(arr[i])){\n' +
            '                    resultSet.add(arr[i])\n' +
            '                }\n' +
            '            }\n' +
            '            return resultSet\n' +
            '        }\n' +
            '\n' +
            '        // 调试\n' +
            '        this.getItems = function () {\n' +
            '            return items\n' +
            '        }\n' +
            '\n' +
            '    }\n' +
            '```\n' +
            '\n' +
            '### 五、字典结构的实现，对应ES6中的 Map 结构\n' +
            '\n' +
            '**字典结构类似于对象，存储结构以键--值的方式存储，特点是字典中不存在重复的键**\n' +
            '\n' +
            '```javascript\n' +
            '  var Dictionary = function () {\n' +
            '       // 添加键值对\n' +
            '        var items = {}\n' +
            '\n' +
            '        this.has = function (key) {\n' +
            '            return items.hasOwnProperty(key)\n' +
            '        }\n' +
            '        this.set = function (key,value) {\n' +
            '            items[key]= value\n' +
            '        }\n' +
            '\n' +
            '        // 删除对象中某个键值\n' +
            '        this.delete = function (key) {\n' +
            '            if(this.has(key)){\n' +
            '               var s = delete items[key]\n' +
            '\n' +
            '                return true\n' +
            '            }\n' +
            '            return false\n' +
            '        }\n' +
            '        // 获取对象中指定 key 的值\n' +
            '        this.get = function (key) {\n' +
            '            if(this.has(key)){\n' +
            '                return items[key]\n' +
            '            }\n' +
            '            return undefined\n' +
            '        }\n' +
            '\n' +
            '        this.getItems = function () {\n' +
            '            return items\n' +
            '        }\n' +
            '    }\n' +
            '```\n' +
            '\n' +
            '##### 5.1 基于字典的 哈希表的出现\n' +
            '\n' +
            '我们知道在数组中存储数据的时候，如果要找到某个元素。需要去遍历，这样的效率比较低，因此，我们希望把数据以 `键-值`的形式存储，通过键，就能获取到对应的值，或者把键转化成一个数字，以数组-索引的方式存储，通过索引来获取值，本文中的哈希表就是通过数组-索引来获取对应值的。哈希表的关键是将键转化成一个数字，这个转化过程主要是应用了不同字符对应不同的 ASCLL 码。\n' +
            '\n' +
            '第一版本的哈希表代码如下：\n' +
            '\n' +
            '```javascript\n' +
            'var Haxibiao = function () {\n' +
            '        var items = []  // 存储数据\n' +
            '\t\t// 键 转 特殊数字   的函数\n' +
            '        var loseloseHashCode = function (key) {\n' +
            '            var hash = 0\n' +
            '            for(var i=0;i<key.length;i++){\n' +
            '                hash += key[i].charCodeAt()\n' +
            '            }\n' +
            '            return hash % 37\n' +
            '        }\n' +
            '\n' +
            '        // 设置哈希表\n' +
            '        this.put = function (key,value) {\n' +
            '            var position = loseloseHashCode(key)\n' +
            '            items[position] = value\n' +
            '        }\n' +
            '\n' +
            '        // 移除表中某个元素\n' +
            '        this.remove = function (key) {\n' +
            '            items[loseloseHashCode(key)] = undefined\n' +
            '        }\n' +
            '\t\t\n' +
            '    \t//获取某个键对应的值\n' +
            '        this.get = function (key) {\n' +
            '            return items[loseloseHashCode(key)]\n' +
            '        }\n' +
            '\n' +
            '        this.getItems = function () {\n' +
            '            return items\n' +
            '        }\n' +
            '    }\n' +
            '```\n' +
            '\n' +
            ' 这样看似能解决问题，但是有时候，不同的键转化后的数字可能是相同的，这时候，就会产生新的问题。当键转化过来的数字相同的时候，后面的数据会覆盖前面的数据，针对这种情况，有两种解决方法，第一种是通过链表来解决，第二种是每次键转化后的数字都要先判断，该位置是否已经被占用，如果被占用，则继续向下找，下面如果没被占用，则将数据放在该位置，否则继续向下找。\n' +
            '\n' +
            '​      **首先通过链表解决**\n' +
            '\n' +
            '在 键 转化成 数字 的位置 比如 items[position] 的位置生成一个链表，如果下一个数据还是在这个位置，则将数据添加到链表尾部，具体代码如下：\n' +
            '\n' +
            '```javascript\n' +
            '// 需要链表，因此我们把上面封装好的链表的构造函数  LikedList 拿过来\n' +
            '//使用分离链接法：\n' +
            'var HashTable_L = function () {\n' +
            '    var items = []  \n' +
            '    \n' +
            '    var loseloseHashCode = function (key) {\n' +
            '        var hash = 0\n' +
            '        for(var i=0;i<key.length;i++){\n' +
            '            hash += key[i].charCodeAt()\n' +
            '        }\n' +
            '        return hash % 37\n' +
            '    }\n' +
            '    //为了后面的遍历，存值的时候需要将键-值都存进去\n' +
            '    var Node = function (key,value){\n' +
            '        this.key = key\n' +
            '        this.value = value\n' +
            '    }\n' +
            '    //设置键-值的方法\n' +
            '    this.put = function (key,value) {\n' +
            '        var node = new Node(key,value)\n' +
            '        var position = loseloseHashCode(key)\n' +
            '        if(items[position]){\n' +
            '            items[position].append(node)\n' +
            '        } else {\n' +
            '            var list = new LikedList()\n' +
            '            items[position] = list\n' +
            '            items[position].append(node)\n' +
            '        }\n' +
            '    }\n' +
            '    //获取对应键处的值\n' +
            '    this.get = function (key){\n' +
            '        var position = loseloseHashCode(key)\n' +
            '        if(items[position]){\n' +
            '            var current = items[position].getHead()\n' +
            '            while(current){\n' +
            '                if(current.element.key === key){  //这里需要用到element判断，是因为链表里设置了链表中每个元素的结构。现在我们传入的element是一个包含 key 和 value 的 对象，因此需要用element.key来帮助判断\n' +
            '                    return current.element.value\n' +
            '                }\n' +
            '                current = current.next\n' +
            '            }\n' +
            '        } else {\n' +
            '            return undefined\n' +
            '        }\n' +
            '    }\n' +
            '    //根据某个键删除元素\n' +
            '    this.remove = function (key){\n' +
            '        var position = loseloseHashCode(key)\n' +
            '        if(items[position]){\n' +
            '            var current = items[position].getHead()\n' +
            '            while(current){\n' +
            '                if(current.element.key === key){\n' +
            '                    items[position].remove(current.element)\n' +
            '                   // 删除后判断当前链表是否为空，如果为空，则设置为 undefined\n' +
            '                    if(items[position].isEmpty()){\n' +
            '                        items[position] = undefined\n' +
            '                    }\n' +
            '                }\n' +
            '                return true\n' +
            '            }\n' +
            '            current  = current.next\n' +
            '        } else {\n' +
            '            return false\n' +
            '        }\n' +
            '    }\n' +
            '    \n' +
            '    this.getItems = function () {\n' +
            '        return table\n' +
            '    }   \n' +
            '}\n' +
            '\n' +
            '```\n' +
            '\n' +
            '解决哈希表的第二种方法： 线性探查表\n' +
            '\n' +
            '```javascript\n' +
            'var HaxiTable_X = function () {\n' +
            '    var items  = []\n' +
            '    var loseloseHashCode = function (key) {\n' +
            '        var hash = 0\n' +
            '        for(var i=0;i<key[i].length;i++){\n' +
            '            hash += key[i].charCodeAt()\n' +
            '        }\n' +
            '        return hash % 37\n' +
            '    }\n' +
            '    var Node = function (key,value) {\n' +
            '        this.key = key\n' +
            '        this.value = value\n' +
            '    }\n' +
            '    \n' +
            '    this.put = function (key,value){\n' +
            '        var position = loseloseHashCode(key)\n' +
            '        if (items[position] == undefined){\n' +
            '            items[position] = new Node(key,value)\n' +
            '        } else {\n' +
            '            var index = position + 1\n' +
            '            while(items[position]!==undefined){\n' +
            '                index++\n' +
            '            }\n' +
            '            items[index] = new Node(key,value)\n' +
            '        }\n' +
            '    }\n' +
            '    //根据某个键 获取值\n' +
            '    this.get = function (key){\n' +
            '        var position = loseloseHashCode(key)\n' +
            '        if(items[position].key === key){\n' +
            '            return item[position].value\n' +
            '        } else {\n' +
            '            var index = position+1\n' +
            '            while(items[index].key !== key){\n' +
            '                index++\n' +
            '            }\n' +
            '            return item[index].value\n' +
            '        }\n' +
            '    }\n' +
            '    //删除某对键值\n' +
            '    this.remove = function (key) {\n' +
            '        var position = loselosehashCode(key)\n' +
            '        if(items[position].key === key){\n' +
            '            items[position] = undefined\n' +
            '        } else {\n' +
            '            var index = position+1\n' +
            '            while(items[position].key !== key){\n' +
            '                index++\n' +
            '            }\n' +
            '            items[index] = undefined\n' +
            '        }\n' +
            '        return true\n' +
            '    } else {\n' +
            '        return false\n' +
            '    }\n' +
            '    this.getTable = function () {\n' +
            '        return table\n' +
            '    }\n' +
            '}\n' +
            '```\n' +
            '\n' +
            '接下来，还有另一种哈希算法，可以用来制作哈希表\n' +
            '\n' +
            '```javascript\n' +
            ' var Haxibiao = function () {\n' +
            '        var table = []\n' +
            '        //新的哈希算法 这个算法可以大大减少出现重复的机率\n' +
            '        var djb2HashCode = function (key) {\n' +
            '            var hash = 5381\n' +
            '            for(var i=0;i<key.length;i++){\n' +
            '                hash = hash * 33 + key[i].charCodeAt()\n' +
            '            }\n' +
            '            return hash % 1013\n' +
            '        }\n' +
            '        //设置键-值的方法\n' +
            '        this.put = function (key,value) {\n' +
            '            var position = djb2HashCode(key)\n' +
            '            table[position] = value\n' +
            '\n' +
            '        }\n' +
            '     \t//根据某个键获取对应值的方法\n' +
            '        this.get = function (key) {\n' +
            '            var position = djb2HashCode(key)\n' +
            '            return table[position]\n' +
            '        }\n' +
            '\n' +
            '        this.getTable = function () {\n' +
            '            return table\n' +
            '        }\n' +
            '    }\n' +
            '```\n' +
            '\n' +
            '### 六、二叉树结构的实现\n' +
            '\n' +
            '**树是用来模拟具有树状结构性质的数据集合。根据它的特性可以分为很多类，在本文中主要讲二叉树，二叉树是一种典型的树状结构，如名字描述的那样，二叉树是每个节点有两个子节点的树结构。**\n' +
            '\n' +
            '> 且左子节点的值  < 节点的值 ，右子节点的值  > 节点的值，树结构的实现主要是用递归实现的。\n' +
            '\n' +
            '主要的操作如下：\n' +
            '\n' +
            '> insertNode ：树结构中插入某个节点\n' +
            '\n' +
            '> traverse ： 遍历树结构中的节点\n' +
            '\n' +
            '> removeNode : 移除树结构中的某个节点\n' +
            '\n' +
            '具体代码实现如下：\n' +
            '\n' +
            '```javascript\n' +
            'var Tree = function () {\n' +
            '    var Node = function (value){\n' +
            '        this.value = value\n' +
            '        this.left = null\n' +
            '        this.right = null\n' +
            '    }\n' +
            '    var root = null\n' +
            '    //插入节点的递归函数\n' +
            '    var insertNode = function (node,newNode) {\n' +
            '        if(newNode.value > node.value){\n' +
            '            if(node.right === null){\n' +
            '                node.right = newNode\n' +
            '            } else {\n' +
            '                insertNode(node.right,newNode)\n' +
            '            }\n' +
            '        } else if (newNode.value < node.value){\n' +
            '            if (node.left === null){\n' +
            '                node.left = newNode\n' +
            '            } else {\n' +
            '                insertNode(node.left,newNode)\n' +
            '            }\n' +
            '        }\n' +
            '    }\n' +
            '    \n' +
            '    //插入某个节点的方法\n' +
            '    this.insert = function (value) {\n' +
            '    \tvar newNode = new Node(value)\n' +
            '        if(root === null){\n' +
            '            root = newNode\n' +
            '        } else {\n' +
            '           //通过递归找到一个空的位置插入\n' +
            '           //因此需要重新定义一个递归函数  insertNode\n' +
            '            insertNode(root,newNode)\n' +
            '        }\n' +
            '    }\n' +
            '   //遍历的递归函数\n' +
            '    var traversed = function (node,callback) {\n' +
            '        if (node === null) {\n' +
            '            return \n' +
            '        }\n' +
            '        \n' +
            '        /* \n' +
            '         * 前序遍历\n' +
            '         * callback(node.value)\n' +
            '        */\n' +
            '        traversed(node.left,callback)\n' +
            '        //中序遍历\n' +
            '        callback(node.value)\n' +
            '        \n' +
            '        traversed(node.right,callback)\n' +
            '        \n' +
            '        /* \n' +
            '         * 后序遍历\n' +
            '         * callback(node.value)\n' +
            '        */\n' +
            '        \n' +
            '    }\n' +
            '    \n' +
            '    //遍历节点  需要传入一个操作的回调函数\n' +
            '    this.traverse = function (callback) {\n' +
            '       // 遍历需要递归，因此要定义个递归函数\n' +
            '        traversed(root,callback)\n' +
            '    }\n' +
            '      // 移除有左右子节点时的辅助函数\n' +
            '        var findMinNode = function (node) {\n' +
            '            if (node == null) return null\n' +
            '            while(node && node.left){\n' +
            '                node = node.left\n' +
            '            }\n' +
            '            return node\n' +
            '        }\n' +
            '    //移除节点的递归函数\n' +
            '    var removeNode = function (node,value) {\n' +
            '        if(node === null) return null\n' +
            '        if(value > ndoe.value){\n' +
            '           node.right =  removeNode(node.right,value)\n' +
            '        } else if (value < node.value){\n' +
            '           node.left =  removeNode(node.left,value)\n' +
            '            return node\n' +
            '        } else {\n' +
            '            // 两个的值相等  value == node.value\n' +
            '                // 执行删除过程\n' +
            '            if (node.left === null && node.right === null){\n' +
            '                //删除叶节点的条件\n' +
            '                node = null\n' +
            '                return node\n' +
            '            }\n' +
            '              // 只有一个子节点条件\n' +
            '                if(node.left == null && node.right){\n' +
            '                    node = node.right\n' +
            '                    return node\n' +
            '                } else if (node.right == null && node.left){\n' +
            '                    node = node.left\n' +
            '                    return node\n' +
            '                }\n' +
            '\n' +
            '                // 有两个子节点的条件\n' +
            '                var aux = findMinNode(node.right)  //查找右侧的最小子节点\n' +
            '                node.value = aux.value\n' +
            '                node.right = removeNode(node.right,aux.value)\n' +
            '                return node\n' +
            '        }   \n' +
            '    }\n' +
            '   // 移除节点\n' +
            '    this.remove = function (value) {\n' +
            '        //移除节点，也需要遍历节点，找到需要移除的节点，然后重构树\n' +
            '        // 定义移除节点的递归函数\n' +
            '        root = removeNode(root,value)\n' +
            '    }\n' +
            '     // 树结构中的最小值就是树结构的最左边的分支\n' +
            '        // 1.树还是空的\n' +
            '        // 2.树不是空的\n' +
            '        var min = function (node) {\n' +
            '            if (node == null) return null\n' +
            '            while(node && node.left){\n' +
            '                node = node.left\n' +
            '            }\n' +
            '            console.log(node)\n' +
            '        }\n' +
            '        this.min = function () {\n' +
            '           return min(root)\n' +
            '        }\n' +
            '\n' +
            '        // 树结构中的最大值\n' +
            '        var max = function (node) {\n' +
            '            if(node == null) return null\n' +
            '            while(node && node.right){\n' +
            '                node = node.right\n' +
            '            }\n' +
            '            console.log(node)\n' +
            '        }\n' +
            '        this.max = function () {\n' +
            '            return max(root)\n' +
            '        }\n' +
            '        // 测试\n' +
            '        this.getRoot = function () {\n' +
            '            return root\n' +
            '        } \n' +
            '}\n' +
            '```\n' +
            '\n' +
            '### 七、图结构的实现\n' +
            '\n' +
            '图是一种复杂的非线性结构。\n' +
            '\n' +
            '在线性结构中，数据元素之间满足唯一的线性关系，每个数据元素(除第一个和最后一个外)只有一个直接前趋和一个直接后继；\n' +
            '\n' +
            '在树形结构中，数据元素之间有着明显的层次关系，并且每个数据元素只与上一层中的一个元素(双亲节点)及下一层的多个元素(孩子节点)相关；\n' +
            '\n' +
            '而在图形结构中，节点之间的关系是任意的，图中任意两个数据元素之间都有可能相关。\n' +
            '\n' +
            '**图结构可以分为有向图和无向图两种**\n' +
            '\n' +
            '本文主要学习的是`无向图`，如下： 顶点A有三条边，分别是B、C、D，顶点B有A、E、F三条边\n' +
            '\n' +
            'A ==> B   C   D\n' +
            '\n' +
            'B ==> A   E    \n' +
            '\n' +
            '具体代码如下：\n' +
            '\n' +
            '```javascript\n' +
            'var MyMap = function () {\n' +
            '        var vertices = []   //存储顶点\n' +
            '        var adjList = {}     //存储边\n' +
            '        // 把每个顶点作为对象的键，把边放在一个数组中，这样就能知道每个顶点分别有哪些边\n' +
            '        // adjList {\n' +
            '        //     A : [B,C,D]\n' +
            '        // }\n' +
            '\n' +
            '        // 设置顶点的方法\n' +
            '\n' +
            '        this.setVertices = function (value) {\n' +
            '            vertices.push(value)    //把顶点加入顶点数组中\n' +
            '            adjList[value] = []     // 每次添加顶点的时候，先设置每个顶点的边为空\n' +
            '        }\n' +
            '\n' +
            '        //设置边的方法\n' +
            '        this.setAdj = function (a,b) {\n' +
            '            //由于我们现在构建的是一个无向图，因此当A-B两个顶点相连接时，A是顶点时，B是A的边，B是顶点时，A是B的边\n' +
            '            adjList[a].push(b)\n' +
            '            adjList[b].push(a)\n' +
            '        }\n' +
            '\t\t//测试代码\n' +
            '        this.print = function () {\n' +
            '            var s = \'\\n\'\n' +
            '            for(var i=0;i<vertices.length;i++){\n' +
            '                var dindian = vertices[i]\n' +
            '                s += dindian + \'====>\'\n' +
            '                for(var j=0;j<adjList[dindian].length;j++){\n' +
            '                  \n' +
            '                    s+=adjList[dindian][j]+ \'\\t\'\n' +
            '                }\n' +
            '                s+= \'\\n\'\n' +
            '            }\n' +
            '            console.log(s)\n' +
            '        }\n' +
            '    }\n' +
            ' var myMap = new MyMap()\n' +
            ' //添加以下顶点和边\n' +
            '    myMap.setVertices(\'A\')\n' +
            '    myMap.setVertices(\'B\')\n' +
            '    myMap.setVertices(\'C\')\n' +
            '    myMap.setVertices(\'D\')\n' +
            '    myMap.setVertices(\'E\')\n' +
            '    myMap.setVertices(\'F\')\n' +
            '\n' +
            '    myMap.setAdj(\'A\',\'B\')\n' +
            '    myMap.setAdj(\'A\',\'C\')\n' +
            '    myMap.setAdj(\'A\',\'D\')\n' +
            '    myMap.setAdj(\'B\',\'E\')\n' +
            '    myMap.setAdj(\'B\',\'F\')\n' +
            '    myMap.print()\n' +
            '    //打印结果如下：\n' +
            '\t/*\n' +
            '    A====>B\tC\tD\t\n' +
            '    B====>A\tE\tF\t\n' +
            '    C====>A\t\n' +
            '    D====>A\t\n' +
            '    E====>B\t\n' +
            '    F====>B\t\n' +
            '    */\n' +
            '```\n' +
            '\n' +
            '至此，我们就简单的模拟了一个无向图结构，在此基础上，去实现广度优先遍历，也就是会先遍历每个顶点的所有边，然后再以这些边作为顶点，继续遍历它的边。\n' +
            '\n' +
            '#### 广度优先遍历的代码实现\n' +
            '\n' +
            '```javascript\n' +
            '// 需要借助 队列\n' +
            'var Queue = function () {\n' +
            '        items = []\n' +
            '        this.enqueue = function (element) {\n' +
            '            items.push(element)\n' +
            '        }\n' +
            '        this.dequeue = function () {\n' +
            '            return  items.shift()\n' +
            '        }\n' +
            '\n' +
            '        this.front = function () {\n' +
            '            return items[0]\n' +
            '        }\n' +
            '\n' +
            '        this.isEmpty = function () {\n' +
            '            return items.length === 0\n' +
            '        }\n' +
            '\n' +
            '        this.size = function () {\n' +
            '            return items.length\n' +
            '        }\n' +
            '    }\n' +
            '\t// 图结构\n' +
            '    var MyMap = function () {\n' +
            '        var vertices = []   //存储顶点\n' +
            '        var adjList = {}     //存储边\n' +
            '        // 把每个顶点作为对象的键，把边放在一个数组中，这样就能知道每个顶点分别有哪些边\n' +
            '        // adjList {\n' +
            '        //     A : [B,C,D]\n' +
            '        // }\n' +
            '\n' +
            '        // 设置顶点的方法\n' +
            '\n' +
            '        this.setVertices = function (value) {\n' +
            '            vertices.push(value)    //把顶点加入顶点数组中\n' +
            '            adjList[value] = []     // 每次添加顶点的时候，先设置每个顶点的边为空\n' +
            '        }\n' +
            '\n' +
            '        //设置边的方法\n' +
            '        this.setAdj = function (a,b) {\n' +
            '     //由于我们现在构建的是一个无向图，因此当A-B两个顶点相连接时，A是顶点时，B是A的边，B是顶点时，A是B的边\n' +
            '            adjList[a].push(b)\n' +
            '            adjList[b].push(a)\n' +
            '        }\n' +
            '       /* 广度优先遍历的内容   开始了\n' +
            '         一开始要设置所有的顶点的颜色都是 white  表示所有的顶点都是未发现的\n' +
            '         {\n' +
            '            \'A\': \'white\',\n' +
            '            \'B\': \'white\',\n' +
            '            ...\n' +
            '           }\n' +
            '\t\t*/\n' +
            '        var initColor = function () {\n' +
            '            var color = {}\n' +
            '            for(var i=0;i<vertices.length;i++){\n' +
            '                var dingdian = vertices[i]\n' +
            '                color[dingdian] = \'white\'\n' +
            '            }\n' +
            '            return color\n' +
            '        }\n' +
            '        //广度优先遍历\n' +
            '        this.bfs = function (value,callback) {\n' +
            '            // 新建一个队列， 队列的在此的作用就是保证广度优先遍历，因为队列的特性：先进先出\n' +
            '            var queue = new Queue()\n' +
            '            // 一开始所有的点都是未发现的   用 white 表示\n' +
            '            var color = initColor()\n' +
            '            // 一旦入列后，标记为   已发现未探索  用 grey 表示\n' +
            '            queue.enqueue(value)\n' +
            '            color[value] = \'grey\'\n' +
            '\n' +
            '            // 接下来要 将队列中的数据拿出来，进行探索\n' +
            '            // 如果队列不为空，就可继续执行\n' +
            '\n' +
            '            while(!queue.isEmpty()){\n' +
            '                var now = queue.dequeue()\n' +
            '                var edges = adjList[now]   //顶点对应的所有边\n' +
            '                for(var i=0;i<edges.length;i++){\n' +
            '                    var w = edges[i]\n' +
            '                    if(color[w] === \'white\'){\n' +
            '                        //未发现的全部入列，并标记为已发现\n' +
            '                        queue.enqueue(w)\n' +
            '                        color[w] = \'grey\'\n' +
            '                    }\n' +
            '                }\n' +
            '                color[now] = \'black\'  //表示已探索\n' +
            '                if(callback){\n' +
            '                    callback(now)\n' +
            '                }\n' +
            '\n' +
            '            }\n' +
            '        }\n' +
            '        /*广度优先遍历的内容 结束了*/\n' +
            '\n' +
            '        this.print = function () {\n' +
            '            var s = \'\\n\'\n' +
            '            for(var i=0;i<vertices.length;i++){\n' +
            '                var dingdian = vertices[i]\n' +
            '                s += dingdian + \'====>\'\n' +
            '                for(var j=0;j<adjList[dingdian].length;j++){\n' +
            '\n' +
            '                    s+=adjList[dingdian][j]+ \'\\t\'\n' +
            '                }\n' +
            '                s+= \'\\n\'\n' +
            '            }\n' +
            '            console.log(s)\n' +
            '        }\n' +
            '\n' +
            '    }\n' +
            '```\n' +
            '\n' +
            '##### 在上面广度优先遍历的基础上，寻找最短路径，代码如下：\n' +
            '\n' +
            '```javascript\n' +
            '        // 寻找路径的两个重要点是： 两个点之间的距离和回溯点\n' +
            '        // 寻找最短路径\n' +
            '        //d: 距离值\n' +
            '        //pred: 回溯点\n' +
            '\n' +
            '        this.BFS = function (value,callback) {\n' +
            '            // 新建一个队列， 队列的在此的作用就是保证广度优先遍历，因为队列的特性：先进先出\n' +
            '            var queue = new Queue()\n' +
            '            // 一开始所有的点都是未发现的   用 white 表示\n' +
            '            var color = initColor()\n' +
            '            // 一旦入列后，标记为   已发现未探索  用 grey 表示\n' +
            '            queue.enqueue(value)\n' +
            '\n' +
            '            var d = {}\n' +
            '            var pred = {}\n' +
            '\n' +
            '            for(var i=0;i<vertices.length;i++){\n' +
            '                var dindian = vertices[i]\n' +
            '                d[dindian] = 0\n' +
            '                pred[dindian] = null\n' +
            '            }\n' +
            '            console.log(d,pred)\n' +
            '\n' +
            '            // 接下来要 将队列中的数据拿出来，进行探索\n' +
            '            // 如果队列不为空，就可继续执行\n' +
            '\n' +
            '            while(!queue.isEmpty()){\n' +
            '                var now = queue.dequeue()\n' +
            '                var edges = adjList[now]   //顶点对应的所有边\n' +
            '                for(var i=0;i<edges.length;i++){\n' +
            '                    var w = edges[i]\n' +
            '                    if(color[w] === \'white\'){\n' +
            '                        //未发现的全部入列，并标记为已发现\n' +
            '                        queue.enqueue(w)\n' +
            '                        color[w] = \'grey\'\n' +
            '                        // 此时可以知道该点的回溯点是 now\n' +
            '                        pred[w] = now\n' +
            '                        d[w] = d[now]+ 1\n' +
            '                    }\n' +
            '                }\n' +
            '                color[now] = \'black\'  //表示已探索\n' +
            '                if(callback){\n' +
            '                    callback(now)\n' +
            '                }\n' +
            '            }\n' +
            '            return {\n' +
            '                pred: pred,\n' +
            '                d: d\n' +
            '            }\n' +
            '        }\n' +
            '//构造函数外部进行测试\n' +
            ' var zuiduan = function (from,to) {\n' +
            '\n' +
            '        var v = to  //设置当前点\n' +
            '\n' +
            '        var path = new Stack()  // 使用栈结构  主要是为了让数据正向显示\n' +
            '        while(v !== from){\n' +
            '            path.push(v)\n' +
            '            v = pred[v]\n' +
            '        }\n' +
            '        path.push(v)\n' +
            '        var str = \'\'\n' +
            '        while(!path.isEmpty()){\n' +
            '            str+=path.pop()+ \'-\'\n' +
            '        }\n' +
            '        str = str.slice(0,str.length-1)\n' +
            '        console.log(str)\n' +
            '\n' +
            '    }\n' +
            '    zuiduan(\'A\',\'F\')  // A-B-F\n' +
            '```\n' +
            '\n' +
            '##### 深度优先遍历    核心思想： 使用递归\n' +
            '\n' +
            '```javascript\n' +
            ' // 深度优先算法的递归函数\n' +
            '        var dfsVisite = function (u,color,callback) {\n' +
            '            color[u] = \'grey\'\n' +
            '            var n = adjList[u]\n' +
            '            for(var i=0;i<n.length;i++){\n' +
            '                var w = n[i]\n' +
            '                if(color[w] === \'white\'){\n' +
            '                    dfsVisite(w,color,callback)\n' +
            '                }\n' +
            '            }\n' +
            '            color[u] = \'black\'\n' +
            '            if(callback){\n' +
            '                callback(u)\n' +
            '            }\n' +
            '        }\n' +
            '        //深度优先算法\n' +
            '        this.dfs = function (v,callback) {\n' +
            '            var color = initColor()\n' +
            '            dfsVisite(v,color,callback)\n' +
            '        }\n' +
            '```\n' +
            '\n' +
            '\n' +
            '\n' +
            '\n' +
            '\n'
    },
    {
        title: 'JavaScript 实现几种排序算法',
        abstract: '>本篇主要是对几种较为常见的排序算法的总结',
        tag: '算法',
        page: 1,
        file: '## JavaScript 实现几种排序算法\n' +
            '\n' +
            '> 本篇主要是对几种较为常见的排序算法的总结\n' +
            '\n' +
            '### 一、冒泡排序\n' +
            '\n' +
            '理解：冒泡排序（从小到大），比如给定一个数组 [3,5,2,1]，那么冒泡排序是通过两两比较，如果前面的数大于后面的数，则交换位置，每一趟比较下来都确定一个最大值，具体如下：\n' +
            '\n' +
            '第一轮：比较3和5，发现3小于5，所以不交换，继续比较5和2，发现5大于2，因此交换位置，此时 为[3,2,5,1]，       \n' +
            '\n' +
            '​               接下来拿5和1进行比较，发现5大于1，交换位置，到此第一轮就结束了，此时为[3,2,1,5],第一轮确定了\n' +
            '\n' +
            '​               最大的数5\n' +
            '\n' +
            '第二轮：3和2进行比较，发现3大于2，因此交换位置，此时为[2,3,1,5]，接下来拿3和1比较，发现3大于1，交换\n' +
            '\n' +
            '​              位置，此时为[2,1,3,5]，第二轮确定了最大的数3\n' +
            '\n' +
            '第三轮：2和1进行比较，发现2大于，因此交换位置，最后为[1,2,3,5]\n' +
            '\n' +
            '通过上面的分析，可以发现一共需要`arr.length-1-i`轮，(此时的i是第几轮) 每次需要跑\n' +
            '\n' +
            '```javascript\n' +
            'function bubbleSort(arr){\n' +
            '    //外出循环控制的是轮数\n' +
            '    for(var i=0;i<arr.length-1;i++){\n' +
            '        //里层控制的是每轮中数的比较，由于每轮都会确定一个最大的数，这个数下一轮可以不用再比较\n' +
            '        for(var j=0;j<arr.length-1-i;j++){\n' +
            '            if(arr[j]>arr[j+1]){\n' +
            '                var temp = arr[j]\n' +
            '                arr[j] = arr[j+1]\n' +
            '                arr[j+1] = temp\n' +
            '            }\n' +
            '        }\n' +
            '    }\n' +
            '    return arr\n' +
            '}\n' +
            '```\n' +
            '\n' +
            '### 二、选择排序\n' +
            '\n' +
            '理解： 选择排序，将数组进行循环，每一轮循环都挑出第一个数作为最小值，和其他值进行比较，一旦有比这个值小的，就交换，接着再拿下边的值和最小值进行比较，如此进行比较，直到比较结束，就可以找到这一轮的最小值，再将这个最小值赋给对应的arr[i]即可达到排序。\n' +
            '\n' +
            '```javascript\n' +
            'function changeSort(arr){\n' +
            '    //最外层循环控制每一轮\n' +
            '        for(var i=0;i<arr.length;i++){\n' +
            '            var min = arr[i]\n' +
            '            //里层循环控制每一轮能找到一个最小值\n' +
            '            for(var j=i+1;j<arr.length;j++){\n' +
            '                if (arr[j]< min){\n' +
            '                    var temp = min\n' +
            '                    min = arr[j]\n' +
            '                    arr[j] = temp\n' +
            '\n' +
            '                }\n' +
            '            }\n' +
            '            //每一轮确定好最小值后，将值付给数组的具体索引\n' +
            '            arr[i] = min\n' +
            '        }\n' +
            '        return arr\n' +
            '    }\n' +
            '```\n' +
            '\n' +
            '### 三、插入排序\n' +
            '\n' +
            '理解：插入排序就和打扑克牌一样，每轮设置一个值作为比较，比如设置temp,且设置的值从第二个开始，然后把这个值拿出来，和排在这个值前面的值进行比较，如果比这个值大，那么前面这个值就向右移一位，然后再拿前面的值和做个temp做比较，如果前面的值还是比temp大，则这个值继续向右移，反之，把temp插入到这个位置\n' +
            '\n' +
            '```javascript\n' +
            ' function insertSort(arr) {\n' +
            '        for(let i=1;i<arr.length;i++){\n' +
            '            let j=i-1\n' +
            '            let temp = arr[i]\n' +
            '            while(j>=0 && arr[j]>temp){\n' +
            '                arr[j+1] = arr[j]\n' +
            '                j--\n' +
            '            }\n' +
            '            arr[j+1] = temp\n' +
            '        }\n' +
            '        return arr\n' +
            '    }\n' +
            '\n' +
            '```\n' +
            '\n' +
            '### 四、快速排序\n' +
            '\n' +
            '理解：快速排序的核心思想是将数组的第一个元素拿出来，然后创建left和right 两个空数组，如果原数组里的值比拿出来的第一个数大，则加入到right，如果原数组里的值比拿出来的数小，则加到left，接下来，对left 和right 数组进行同样的操作\n' +
            '\n' +
            '```javascript\n' +
            'function quickSort(arr) {\n' +
            '        if (arr.length < 2) return arr\n' +
            '        var middle = arr[0]\n' +
            '        var left = []\n' +
            '        var right = []\n' +
            '        for(var i=1;i<arr.length;i++){\n' +
            '            if(arr[i]>middle){\n' +
            '                right.push(arr[i])\n' +
            '            }else {\n' +
            '                left.push(arr[i])\n' +
            '            }\n' +
            '        }\n' +
            '\n' +
            '        return quickSort(left).concat(middle,quickSort(right))\n' +
            '    }\n' +
            '```\n' +
            '\n' +
            '### 五、归并排序\n' +
            '\n' +
            '理解：核心是使用递归的方法\n' +
            '\n' +
            '```javascript\n' +
            'const mergeSort = arr => {\n' +
            '        // 采用自伤而下的递归方法\n' +
            '        const len = arr.length\n' +
            '\n' +
            '        if (len < 2) {\n' +
            '            return arr\n' +
            '        }\n' +
            '\n' +
            '        let middle = Math.floor(len/2),\n' +
            '            left = arr.slice(0,middle),\n' +
            '            right = arr.slice(middle)\n' +
            '        return merge(mergeSort(left),mergeSort(right))\n' +
            '    }\n' +
            '\n' +
            '    const merge = (left,right) => {\n' +
            '        const result = []\n' +
            '         while (left.length && right.length){\n' +
            '             // 注意: 判断的条件是小于或等于，如果只是小于，那么排序将不稳定.\n' +
            '             if(left[0]<=right[0]) {\n' +
            '                 result.push(left.shift())\n' +
            '             } else {\n' +
            '                 result.push(right.shift())\n' +
            '             }\n' +
            '         }\n' +
            '         while (left.length) result.push(left.shift())\n' +
            '         while(right.length) result.push(right.shift())\n' +
            '        return result\n' +
            '    }\n' +
            '```\n' +
            '\n'
    },
    {
        title: '作用域和作用域链',
        abstract: '>作用域：变量可以起作用的范围',
        tag: 'JavaScript',
        page: 1,
        file: '## 作用域和作用域链\n' +
            '\n' +
            '> 作用域：变量可以起作用的范围\n' +
            '\n' +
            '### 全局变量和局部变量\n' +
            '\n' +
            '- 全局变量\n' +
            '\n' +
            '  ​在任何地方都可以访问到的变量就是全局变量，对应全局作用域\n' +
            '\n' +
            '- 局部变量\n' +
            '\n' +
            '  ​只在固定的代码片段内可访问到的变量，最常见的例如函数内部。对应局部作用域(函数作用域)\n' +
            '\n' +
            '```\n' +
            '在函数内部，不使用var声明的变量是全局变量，不推荐使用。\n' +
            '局部变量退出作用域之后会销毁，全局变量关闭网页或浏览器才会销毁\n' +
            '```\n' +
            '\n' +
            '### 块级作用域\n' +
            '\n' +
            '任何一对花括号（｛和｝）中的语句集都属于一个块，在这之中定义的所有变量在代码块外都是不可见的，我们称之为块级作用域。\n' +
            '**在es5之前没有块级作用域的的概念,只有函数作用域**.\n' +
            '\n' +
            '### 词法作用域\n' +
            '\n' +
            '变量的作用域是在定义时决定而不是执行时决定，也就是说词法作用域取决于源码，通过静态分析就能确定，因此词法作用域也叫做静态作用域。\n' +
            '\n' +
            '**在 js 中词法作用域规则:**\n' +
            '\n' +
            '- 函数允许访问函数外的数据.\n' +
            '- 整个代码结构中只有函数可以限定作用域.\n' +
            '- 作用域规则首先使用提升规则分析\n' +
            '- 如果当前作用规则中有名字了, 就不考虑外面的名字\n' +
            '\n' +
            '```javascript\n' +
            'var num = 123;\n' +
            'function foo() {\n' +
            '  console.log( num );\n' +
            '}\n' +
            'foo();\n' +
            '\n' +
            'if ( false ) {\n' +
            '    var num = 123;\n' +
            '}\n' +
            'console.log( num ); // undefiend\n' +
            '```\n' +
            '\n' +
            '### 作用域链\n' +
            '\n' +
            '```\n' +
            '只有函数可以制造作用域结构， 那么只要是代码，就至少有一个作用域, 即全局作用域。凡是代码中有函数，那么这个函数就构成另一个作用域。如果函数中还有函数，那么在这个作用域中就又可以诞生一个作用域。\n' +
            '\n' +
            '将这样的所有的作用域列出来，可以有一个结构: 函数内指向函数外的链式结构。就称作作用域链。\n' +
            '\n' +
            '函数在查找某个变量的时候，是从最里面的函数内部依次向外查找的\n' +
            '```\n' +
            '\n' +
            '```javascript\n' +
            '// 案例1：\n' +
            'function f1() {\n' +
            '    function f2() {\n' +
            '    }\n' +
            '}\n' +
            '\n' +
            'var num = 456;\n' +
            'function f3() {\n' +
            '    function f4() {    \n' +
            '    }\n' +
            '}\n' +
            '```\n' +
            '\n' +
            '![06-1.png](https://github.com/XiaoJiaojing/fundamentals-and-principles-of-JavaScript/blob/master/scope%20and%20scope%20chain/images/06-1.png?raw=true)\n' +
            '\n' +
            '```javascript\n' +
            '// 案例2\n' +
            'function f1() {\n' +
            '    var num = 123;\n' +
            '    function f2() {\n' +
            '        console.log( num );\n' +
            '    }\n' +
            '    f2(); // 123\n' +
            '}\n' +
            'var num = 456;\n' +
            'f1();\n' +
            '```\n' +
            '\n' +
            '![06-2.png](https://github.com/XiaoJiaojing/fundamentals-and-principles-of-JavaScript/blob/master/scope%20and%20scope%20chain/images/06-2.png?raw=true)\n' +
            '\n' +
            '## 预解析\n' +
            '\n' +
            '> JavaScript代码的执行是由浏览器中的JavaScript解析器来执行的。JavaScript解析器执行JavaScript代码的时候，分为两个过程：预解析过程和代码执行过程\n' +
            '\n' +
            '预解析过程：\n' +
            '\n' +
            '1. 把变量的声明提升到当前作用域的最前面，只会提升声明，不会提升赋值。\n' +
            '2. 把函数的声明提升到当前作用域的最前面，只会提升声明，不会提升调用。\n' +
            '3. 先提升var，在提升function\n' +
            '\n' +
            'JavaScript的执行过程\n' +
            '\n' +
            '```javascript\n' +
            'var a = 25;\n' +
            'function abc (){\n' +
            '  alert(a);//undefined 这是因为 变量会提升 var a 会提升到alert前面，所以结果是undefined\n' +
            '  var a = 10;\n' +
            '}\n' +
            'abc();\n' +
            '// 如果变量和函数同名的话，函数优先\n' +
            'console.log(a);\n' +
            'function a() {\n' +
            '  console.log(\'aaaaa\');\n' +
            '}\n' +
            'var a = 1;\n' +
            'console.log(a);\n' +
            '```\n' +
            '\n' +
            '### 全局解析规则\n' +
            '\n' +
            '### 函数内部解析规则\n' +
            '\n' +
            '### 变量提升\n' +
            '\n' +
            '- 变量提升\n' +
            '\n' +
            '  定义变量的时候，变量的声明会被提升到作用域的最上面，变量的赋值不会提升。\n' +
            '\n' +
            '- 函数提升\n' +
            '\n' +
            '  JavaScript解析器首先会把当前作用域的函数声明提前到整个作用域的最前面\n' +
            '\n' +
            '```javascript\n' +
            '// 1、-----------------------------------\n' +
            'var num = 10;\n' +
            'fun();\n' +
            'function fun() {\n' +
            '  console.log(num); //undefined\n' +
            '  var num = 20;\n' +
            '}\n' +
            '//2、-----------------------------------\n' +
            'var a = 18;\n' +
            'f1();\n' +
            'function f1() {\n' +
            '  var b = 9;\n' +
            '  console.log(a);  //undefined\n' +
            '  console.log(b);   9\n' +
            '  var a = \'123\';\n' +
            '}\n' +
            '// 3、-----------------------------------\n' +
            'f1();\n' +
            'console.log(c);    //9\n' +
            'console.log(b);    //9\n' +
            'console.log(a);    //报错\n' +
            'function f1() {\n' +
            '  var a = b = c = 9;\n' +
            '  console.log(a);   //9\n' +
            '  console.log(b);   //9\n' +
            '  console.log(c);   //9\n' +
            '}\n' +
            '```\n' +
            '\n'
    },
    {
        title: 'JavaScirpt 中的事件机制',
        abstract: '> 事件：触发-响应机制\n' +
            '\n' +
            '> Event接口表示在DOM中发生的任何事件，一些是用户生成的（例如鼠标或键盘事件），而其他由API生成。',
        tag: 'JavaScript',
        page: 1,
        file: '## JavaScirpt中的事件机制\n' +
            '\n' +
            '> 事件：触发-响应机制\n' +
            '\n' +
            '> Event接口表示在DOM中发生的任何事件，一些是用户生成的（例如鼠标或键盘事件），而其他由API生成。\n' +
            '\n' +
            '### 事件三要素\n' +
            '\n' +
            '- 事件源:触发(被)事件的元素\n' +
            '- 事件类型:事件的触发方式(例如鼠标点击或键盘点击)\n' +
            '- 事件处理程序:事件触发后要执行的代码(函数形式)\n' +
            '\n' +
            '### 注册/移除事件的三种方式\n' +
            '\n' +
            '> 坚持用什么方式绑定事件，就用什么方式移除事件的原则\n' +
            '\n' +
            '```javascript\n' +
            'var box = document.getElementById(\'box\');\n' +
            'box.onclick = function () {\n' +
            '  console.log(\'点击后执行\');\n' +
            '};\n' +
            'box.onclick = null;\n' +
            '\n' +
            'box.addEventListener(\'click\', eventCode, false);\n' +
            'box.removeEventListener(\'click\', eventCode, false);\n' +
            '\n' +
            'box.attachEvent(\'onclick\', eventCode);\n' +
            'box.detachEvent(\'onclick\', eventCode);\n' +
            '\n' +
            'function eventCode() {\n' +
            '  console.log(\'点击后执行\');\n' +
            '}\n' +
            '```\n' +
            '\n' +
            '### 兼容代码\n' +
            '\n' +
            '```javascript\n' +
            'function addEventListener(element, type, fn) {\n' +
            '  if (element.addEventListener) {\n' +
            '    element.addEventListener(type, fn, false);\n' +
            '  } else if (element.attachEvent){\n' +
            '    element.attachEvent(\'on\' + type,fn);\n' +
            '  } else {\n' +
            '    element[\'on\'+type] = fn;\n' +
            '  }\n' +
            '}\n' +
            '\n' +
            'function removeEventListener(element, type, fn) {\n' +
            '  if (element.removeEventListener) {\n' +
            '    element.removeEventListener(type, fn, false);\n' +
            '  } else if (element.detachEvent) {\n' +
            '    element.detachEvent(\'on\' + type, fn);\n' +
            '  } else {\n' +
            '    element[\'on\'+type] = null;\n' +
            '  }\n' +
            '}\n' +
            '```\n' +
            '\n' +
            '### 事件的三个阶段\n' +
            '\n' +
            '1. 捕获阶段 (true) :从外向里触发\n' +
            '\n' +
            '2. 当前目标阶段\n' +
            '\n' +
            '3. 冒泡阶段 (false) ：从里向外触发\n' +
            '\n' +
            '   事件对象.eventPhase属性可以查看事件触发时所处的阶段\n' +
            '   `addEventListener(type,fn,\'控制事件阶段\')`\n' +
            '   控制事件阶段处：写的是 `true` 或 `false`，`true `表示捕获阶段， `false `表示冒泡阶段\n' +
            '\n' +
            '> 一般事件捕获和事件冒泡不会同时出现，只会出现其中一种\n' +
            '\n' +
            '### 事件对象的属性和方法\n' +
            '\n' +
            '- event.type 获取事件类型\n' +
            '- clientX/clientY     所有浏览器都支持，窗口位置\n' +
            '- pageX/pageY       IE8以前不支持，页面位置\n' +
            '- event.target || event.srcElement 用于获取触发事件的元素\n' +
            '- event.preventDefault() 取消默认行为\n' +
            '\n' +
            '### 阻止事件传播的方式\n' +
            '\n' +
            '- 标准方式 event.stopPropagation();\n' +
            '- IE低版本 event.cancelBubble = true; 标准中已废弃\n' +
            '\n' +
            '### 常用的鼠标和键盘事件\n' +
            '\n' +
            '- onmouseup 鼠标按键放开时触发\n' +
            '- onmousedown 鼠标按键按下触发\n' +
            '- onmousemove 鼠标移动触发\n' +
            '- onkeyup 键盘按键按下触发\n' +
            '- onkeydown 键盘按键抬起触发\n' +
            '\n'
    },
    {
        title: '简单类型和复杂类型的区别',
        abstract: '>简单类型又叫做值类型，复杂类型又叫做引用类型\n' +
            '>\n' +
            '>值类型：简单数据类型，基本数据类型，在存储时，变量中存储的是值本身，因此叫做值类型。\n' +
            '>\n' +
            '>引用类型：复杂数据类型，在存储是，变量中存储的仅仅是地址（引用），因此叫做引用数据类型。',
        tag: 'JavaScript',
        page: 2,
        file: '### 简单类型和复杂类型的区别\n' +
            '\n' +
            '> 简单类型又叫做值类型，复杂类型又叫做引用类型\n' +
            '>\n' +
            '> 值类型：简单数据类型，基本数据类型，在存储时，变量中存储的是值本身，因此叫做值类型。\n' +
            '>\n' +
            '> 引用类型：复杂数据类型，在存储是，变量中存储的仅仅是地址（引用），因此叫做引用数据类型。\n' +
            '\n' +
            '- 堆和栈\n' +
            '\n' +
            '  ```\n' +
            '  堆栈空间分配区别：\n' +
            '  　　1、栈（操作系统）：由操作系统自动分配释放 ，存放函数的参数值，局部变量的值等。其操作方式类似于数据结构中的栈；\n' +
            '  　　2、堆（操作系统）： 存储复杂类型(对象)，一般由程序员分配释放， 若程序员不释放，由垃圾回收机制回收，分配方式倒是类似于链表。\n' +
            '  ```\n' +
            '\n' +
            '#### 基本类型在内存中的存储\n' +
            '\n' +
            '![3.png](https://github.com/XiaoJiaojing/fundamentals-and-principles-of-JavaScript/blob/master/%E7%AE%80%E5%8D%95%E7%B1%BB%E5%9E%8B%E5%92%8C%E5%A4%8D%E6%9D%82%E7%B1%BB%E5%9E%8B%E7%9A%84%E5%8C%BA%E5%88%AB/images/3.png?raw=true)\n' +
            '\n' +
            '#### 复杂类型在内存中的存储\n' +
            '\n' +
            '![2.png](https://github.com/XiaoJiaojing/fundamentals-and-principles-of-JavaScript/blob/master/%E7%AE%80%E5%8D%95%E7%B1%BB%E5%9E%8B%E5%92%8C%E5%A4%8D%E6%9D%82%E7%B1%BB%E5%9E%8B%E7%9A%84%E5%8C%BA%E5%88%AB/images/2.png?raw=true)\n' +
            '\n' +
            '#### 基本类型作为函数的参数\n' +
            '\n' +
            '基本类型作为函数参数时，传入的是值\n' +
            '\n' +
            '#### 复杂类型作为函数的参数\n' +
            '\n' +
            '复杂类型作为函数的参数时，传入的是地址\n' +
            '\n' +
            '```javascript\n' +
            '// 下面代码输出的结果\n' +
            'function Person(name,age,salary) {\n' +
            '  this.name = name;\n' +
            '  this.age = age;\n' +
            '  this.salary = salary;\n' +
            '}\n' +
            'function f1(person) {\n' +
            '  person.name = "ls";\n' +
            '  person = new Person("aa",18,10);\n' +
            '}\n' +
            '\n' +
            'var p = new Person("zs",18,1000);\n' +
            'console.log(p.name);    //zs\n' +
            'f1(p);\n' +
            'console.log(p.name);    //ls\n' +
            '```\n' +
            '\n'
    },
    {
        title: '原型和原型链',
        abstract: '>本篇主要是学习原型、原型链以及构造函数三者之间的关系',
        tag: 'JavaScript',
        page: 2,
        file: '## 原型和原型链\n' +
            '\n' +
            '> 本篇主要是学习原型、原型链以及构造函数三者之间的关系\n' +
            '\n' +
            '### 一、构造函数\n' +
            '\n' +
            '```javascript\n' +
            'function Person (name, age) {\n' +
            '  this.name = name\n' +
            '  this.age = age\n' +
            '  this.sayName = function () {\n' +
            '    console.log(this.name)\n' +
            '  }\n' +
            '}\n' +
            '\n' +
            'var p1 = new Person(\'Jack\', 18)\n' +
            'p1.sayName() // => Jack\n' +
            '\n' +
            'var p2 = new Person(\'Mike\', 23)\n' +
            'p2.sayName() // => Mike\n' +
            '```\n' +
            '\n' +
            '**可以看到，通过 new 的方式生成了实例对象， new 的时候，一共做了下面几件事情**\n' +
            '\n' +
            '- 1、首先创建一个空的对象，空对象的__proto__属性指向构造函数的原型对象，实现继承\n' +
            '- 2、把上面创建的空对象赋值构造函数内部的this，用构造函数内部的方法修改空对象\n' +
            '- 3、如果构造函数返回一个非基本类型的值，则返回这个值，否则上面创建的对象\n' +
            '\n' +
            '**new 实现的简单模拟**\n' +
            '\n' +
            '```javascript\n' +
            '    function _new(fn, ...arg) {\n' +
            '        const obj = Object.create(fn.prototype);\n' +
            '        const ret = fn.apply(obj, arg);\n' +
            '        return ret instanceof Object ? ret : obj;\n' +
            '    }\n' +
            '```\n' +
            '\n' +
            'new 构造函数 可以生成一个实例对象，因此接下来看看构造函数和实例对象的关系\n' +
            '\n' +
            '### 二、构造函数和实例对象的关系\n' +
            '\n' +
            '使用构造函数的好处不仅仅在于代码的简洁性，更重要的是我们可以识别对象的具体类型了。\n' +
            '在每一个实例对象中的\\__proto\\__中同时有一个 `constructor` 属性，该属性指向创建该实例的构造函数：\n' +
            '\n' +
            '```javascript\n' +
            'console.log(p1.constructor === Person) // => true\n' +
            'console.log(p2.constructor === Person) // => true\n' +
            'console.log(p1.constructor === p2.constructor) // => true\n' +
            '```\n' +
            '\n' +
            '对象的 `constructor` 属性最初是用来标识对象类型的，\n' +
            '但是，如果要检测对象的类型，还是使用 `instanceof` 操作符更可靠一些：\n' +
            '\n' +
            '```javascript\n' +
            'console.log(p1 instanceof Person) // => true\n' +
            'console.log(p2 instanceof Person) // => true\n' +
            '```\n' +
            '\n' +
            '总结：\n' +
            '\n' +
            '- 构造函数是根据具体的事物抽象出来的抽象模板\n' +
            '- 实例对象是根据抽象的构造函数模板得到的具体实例对象\n' +
            '- 每一个实例对象都具有一个 `constructor` 属性，指向创建该实例的构造函数\n' +
            '  - 注意： `constructor` 是实例的属性的说法不严谨，这个属性是从原型对象中继承来的\n' +
            '- 可以通过实例的 `constructor` 属性判断实例和构造函数之间的关系\n' +
            '  - 注意：这种方式不严谨，推荐使用 `instanceof` 操作符\n' +
            '\n' +
            '### 原型\n' +
            '\n' +
            '- 构造函数、prototype 原型对象、实例对象 三者之间的关系\n' +
            '- 属性成员搜索原则：原型链\n' +
            '- 实例对象读写原型对象中的成员\n' +
            '- 原型对象的简写形式\n' +
            '- 原生对象的原型\n' +
            '  - Object\n' +
            '  - Array\n' +
            '  - String\n' +
            '  - ...\n' +
            '- 原型对象的问题\n' +
            '- 构造的函数和原型对象使用建议\n' +
            '\n' +
            'JavaScript 规定，每一个构造函数都有一个 `prototype` 属性，指向另一个对象。\n' +
            '这个对象的所有属性和方法，都会被构造函数的实例继承。\n' +
            '\n' +
            '这也就意味着，我们可以把所有对象实例需要共享的属性和方法直接定义在 `prototype` 对象上。\n' +
            '\n' +
            '```javascript\n' +
            'function Person (name, age) {\n' +
            '  this.name = name\n' +
            '  this.age = age\n' +
            '}\n' +
            '\n' +
            'console.log(Person.prototype)\n' +
            '\n' +
            'Person.prototype.type = \'human\'\n' +
            '\n' +
            'Person.prototype.sayName = function () {\n' +
            '  console.log(this.name)\n' +
            '}\n' +
            '\n' +
            'var p1 = new Person(...)\n' +
            'var p2 = new Person(...)\n' +
            '\n' +
            'console.log(p1.sayName === p2.sayName) // => true\n' +
            '```\n' +
            '\n' +
            '这时所有实例的 `type` 属性和 `sayName()` 方法，\n' +
            '其实都是同一个内存地址，指向 `prototype` 对象，因此就提高了运行效率。\n' +
            '\n' +
            '### 构造函数、实例、原型三者之间的关系\n' +
            '\n' +
            '任何函数都具有一个 `prototype` 属性，该属性是一个对象。\n' +
            '\n' +
            '```javascript\n' +
            'function F () {}\n' +
            'console.log(F.prototype) // => object\n' +
            '\n' +
            'F.prototype.sayHi = function () {\n' +
            '  console.log(\'hi!\')\n' +
            '}\n' +
            '```\n' +
            '\n' +
            '构造函数的 `prototype` 对象默认都有一个 `constructor` 属性，指向 `prototype` 对象所在函数。\n' +
            '\n' +
            '```javascript\n' +
            'console.log(F.prototype.constructor === F) // => true\n' +
            '```\n' +
            '\n' +
            '通过构造函数得到的实例对象内部会包含一个指向构造函数的 `prototype` 对象的指针 `__proto__`。\n' +
            '\n' +
            '```javascript\n' +
            'var instance = new F()\n' +
            'console.log(instance.__proto__ === F.prototype) // => true\n' +
            '```\n' +
            '\n' +
            '<p class="tip">\n' +
            '  `__proto__` 是非标准属性。\n' +
            '</p>\n' +
            '\n' +
            '实例对象可以直接访问原型对象成员。\n' +
            '\n' +
            '```javascript\n' +
            'instance.sayHi() // => hi!\n' +
            '```\n' +
            '\n' +
            '只要是对象，就有 `__proto__`属性，原型对象中的`__proto__`属性指向了`Object.ptototype`，`Object.ptototype`里的`__proto__`指向了`null`\n' +
            '\n' +
            '三者的关系如下图(图源：https://github.com/mqyqingfeng/Blog/raw/master/Images/prototype4.png)）：\n' +
            '\n' +
            '![原型的原型关系图](https://github.com/mqyqingfeng/Blog/raw/master/Images/prototype4.png)\n' +
            '\n' +
            '总结：\n' +
            '\n' +
            '- 任何函数都具有一个 `prototype` 属性，该属性是一个对象\n' +
            '- 构造函数的 `prototype` 对象默认都有一个 `constructor` 属性，指向 `prototype` 对象所在函数\n' +
            '- 通过构造函数得到的实例对象内部会包含一个指向构造函数的 `prototype` 对象的指针 `__proto__`\n' +
            '- 所有实例都直接或间接继承了原型对象的成员\n' +
            '\n' +
            '### 属性成员的搜索原则：原型链\n' +
            '\n' +
            '了解了 **构造函数-实例-原型对象** 三者之间的关系后，接下来我们来解释一下为什么实例对象可以访问原型对象中的成员。\n' +
            '\n' +
            '每当代码读取某个对象的某个属性时，都会执行一次搜索，目标是具有给定名字的属性\n' +
            '\n' +
            '- 搜索首先从对象实例本身开始\n' +
            '- 如果在实例中找到了具有给定名字的属性，则返回该属性的值\n' +
            '- 如果没有找到，则继续搜索指针指向的原型对象，在原型对象中查找具有给定名字的属性\n' +
            '- 如果在原型对象中找到了这个属性，则返回该属性的值\n' +
            '\n' +
            '也就是说，在我们调用 `person1.sayName()` 的时候，会先后执行两次搜索：\n' +
            '\n' +
            '- 首先，解析器会问：“实例 person1 有 sayName 属性吗？”答：“没有。\n' +
            '- ”然后，它继续搜索，再问：“ person1 的原型有 sayName 属性吗？”答：“有。\n' +
            '- ”于是，它就读取那个保存在原型对象中的函数。\n' +
            '- 当我们调用 person2.sayName() 时，将会重现相同的搜索过程，得到相同的结果。\n' +
            '\n' +
            '而这正是多个对象实例共享原型所保存的属性和方法的基本原理。\n' +
            '\n' +
            '总结：\n' +
            '\n' +
            '- 先在自己身上找，找到即返回\n' +
            '- 自己身上找不到，则沿着原型链向上查找，找到即返回\n' +
            '- 如果一直到原型链的末端还没有找到，则返回 `undefined`\n' +
            '\n' +
            '### 更简单的原型语法\n' +
            '\n' +
            '我们注意到，前面例子中每添加一个属性和方法就要敲一遍 `Person.prototype` 。\n' +
            '为减少不必要的输入，更常见的做法是用一个包含所有属性和方法的对象字面量来重写整个原型对象：\n' +
            '\n' +
            '```javascript\n' +
            'function Person (name, age) {\n' +
            '  this.name = name\n' +
            '  this.age = age\n' +
            '}\n' +
            '\n' +
            'Person.prototype = {\n' +
            '  type: \'human\',\n' +
            '  sayHello: function () {\n' +
            '    console.log(\'我叫\' + this.name + \'，我今年\' + this.age + \'岁了\')\n' +
            '  }\n' +
            '}\n' +
            '```\n' +
            '\n' +
            '在该示例中，我们将 `Person.prototype` 重置到了一个新的对象。\n' +
            '这样做的好处就是为 `Person.prototype` 添加成员简单了，但是也会带来一个问题，那就是原型对象丢失了 `constructor` 成员。\n' +
            '\n' +
            '所以，我们为了保持 `constructor` 的指向正确，建议的写法是：\n' +
            '\n' +
            '```javascript\n' +
            'function Person (name, age) {\n' +
            '  this.name = name\n' +
            '  this.age = age\n' +
            '}\n' +
            '\n' +
            'Person.prototype = {\n' +
            '  constructor: Person, // => 手动将 constructor 指向正确的构造函数\n' +
            '  type: \'human\',\n' +
            '  sayHello: function () {\n' +
            '    console.log(\'我叫\' + this.name + \'，我今年\' + this.age + \'岁了\')\n' +
            '  }\n' +
            '}\n' +
            '```\n' +
            '\n' +
            '### 原生对象的原型\n' +
            '\n' +
            '<p class="tip">\n' +
            '  所有函数都有 prototype 属性对象。\n' +
            '</p>\n' +
            '\n' +
            '- Object.prototype\n' +
            '- Function.prototype\n' +
            '- Array.prototype\n' +
            '- String.prototype\n' +
            '- Number.prototype\n' +
            '- Date.prototype\n' +
            '- ...\n' +
            '\n' +
            '#### 原型对象的问题\n' +
            '\n' +
            '- 共享数组\n' +
            '- 共享对象\n' +
            '\n' +
            '如果真的希望可以被实例对象之间共享和修改这些共享数据那就不是问题。但是如果不希望实例之间共享和修改这些共享数据则就是问题。\n' +
            '\n' +
            '一个更好的建议是，最好不要让实例之间互相共享这些数组或者对象成员，一旦修改的话会导致数据的走向很不明确而且难以维护。\n' +
            '\n' +
            '#### 原型对象使用建议\n' +
            '\n' +
            '- 私有成员（一般就是非函数成员）放到构造函数中\n' +
            '- 共享成员（一般就是函数）放到原型对象中\n' +
            '- 如果重置了 `prototype` 记得修正 `constructor` 的指向\n' +
            '\n' +
            '### 继承\n' +
            '\n' +
            '##### 构造函数的属性继承：借用构造函数\n' +
            '\n' +
            '```javascript\n' +
            'function Person (name, age) {\n' +
            '  this.type = \'human\'\n' +
            '  this.name = name\n' +
            '  this.age = age\n' +
            '}\n' +
            '\n' +
            'function Student (name, age) {\n' +
            '  // 借用构造函数继承属性成员\n' +
            '  Person.call(this, name, age)\n' +
            '}\n' +
            '\n' +
            'var s1 = Student(\'张三\', 18)\n' +
            'console.log(s1.type, s1.name, s1.age) // => human 张三 18\n' +
            '```\n' +
            '\n' +
            '##### 构造函数的原型方法继承：拷贝继承（for-in）\n' +
            '\n' +
            '```javascript\n' +
            'function Person (name, age) {\n' +
            '  this.type = \'human\'\n' +
            '  this.name = name\n' +
            '  this.age = age\n' +
            '}\n' +
            '\n' +
            'Person.prototype.sayName = function () {\n' +
            '  console.log(\'hello \' + this.name)\n' +
            '}\n' +
            '\n' +
            'function Student (name, age) {\n' +
            '  Person.call(this, name, age)\n' +
            '}\n' +
            '\n' +
            '// 原型对象拷贝继承原型对象成员\n' +
            'for(var key in Person.prototype) {\n' +
            '  Student.prototype[key] = Person.prototype[key]\n' +
            '}\n' +
            '\n' +
            'var s1 = Student(\'张三\', 18)\n' +
            '\n' +
            's1.sayName() // => hello 张三\n' +
            '```\n' +
            '\n' +
            '#####另一种继承方式：原型继承\n' +
            '\n' +
            '```javascript\n' +
            'function Person (name, age) {\n' +
            '  this.type = \'human\'\n' +
            '  this.name = name\n' +
            '  this.age = age\n' +
            '}\n' +
            '\n' +
            'Person.prototype.sayName = function () {\n' +
            '  console.log(\'hello \' + this.name)\n' +
            '}\n' +
            '\n' +
            'function Student (name, age) {\n' +
            '  Person.call(this, name, age)\n' +
            '}\n' +
            '\n' +
            '// 利用原型的特性实现继承\n' +
            'Student.prototype = new Person()\n' +
            '\n' +
            'var s1 = Student(\'张三\', 18)\n' +
            '\n' +
            'console.log(s1.type) // => human\n' +
            '\n' +
            's1.sayName() // => hello 张三\n' +
            '```\n' +
            '\n'
    },
    {
        title: 'webpack安装使用方法及注意问题',
        abstract: '>这篇主要是关于webpack 的安装和使用',
        tag: 'webpack',
        page: 2,
        file: '## webpack安装使用方法及注意问题\n' +
            '\n' +
            '> 这篇主要是关于webpack 的安装和使用的\n' +
            '\n' +
            '### 1.什么是webpack \n' +
            '\n' +
            '```javascript\n' +
            'webpack 是前端的一个项目构建工具，它是基于 Node.js 开发出来的一个前端工具；\n' +
            '```\n' +
            '\n' +
            '### 2.webpack安装的两个方式\n' +
            '\n' +
            '```\n' +
            '2.1. 运行`npm i webpack -g`全局安装webpack，这样就能在全局使用webpack的命令(一般安装到全局就可以使用)\n' +
            '2.2. 在项目根目录中运行`npm i webpack --save-dev`安装到项目依赖中\n' +
            '```\n' +
            '\n' +
            '### 3.webpack 4.x的使用\n' +
            '\n' +
            '1、 运行 `npm init -y` 快速初始化项目\n' +
            '\n' +
            '2.在项目根目录创建 `views` 和 `src `两个目录\n' +
            '\n' +
            '3.在`src`目录下新建 首页页面  `index.html`\n' +
            '\n' +
            '4.使用 cnpm 安装webpack,运行 `cnpm i webpack -D`\n' +
            '\n' +
            '5.运行 `cnpm i webpack-cli -D`\n' +
            '\n' +
            '6.新建一个`webpack-config.js`文件\n' +
            '\n' +
            '7.`webpack.config.js`文件的内容如下：\n' +
            '\n' +
            '```javascript\n' +
            '//首先导出一个对象\n' +
            'module.exports = {\n' +
            '    //开发环境的代码是没有被压缩的，而生产环境的是被压缩的\n' +
            '   // 4.x 新增的`mode`选项，可选值为：`development`和`production` 必选项\n' +
            '     // webpack 3.x在这里要指定打包的入口和出口文件\n' +
            '    // 在webpack 4.x中有一个很大的特点，就是约定大于配置，默认的打包入口文件就是src下的index.js\n' +
            '     mode:\'development\'\n' +
            '}\n' +
            '//输入 webpack 进行测试\n' +
            '疑问：可否使用exports default {} 导出呢？  \n' +
            '答案：不行，exports default {} 是es6中的向外导出模块，与之对应的导入模块是 import ** from **\n' +
            '\n' +
            '```\n' +
            '\n' +
            '注意：如果是`webpack 3.x`版本，需要配置打包的入口文件的目录，具体如下\n' +
            '\n' +
            '```javascript\n' +
            '    // 导入处理路径的模块\n' +
            '    var path = require(\'path\');\n' +
            '\n' +
            '    // 导出一个配置对象，将来webpack在启动的时候，会默认来查找webpack.config.js，并读取这个文件中导出的配置对象，来进行打包处理\n' +
            '    module.exports = {\n' +
            '        entry: path.resolve(__dirname, \'src/js/main.js\'), // 项目入口文件\n' +
            '        output: { // 配置输出选项\n' +
            '            path: path.resolve(__dirname, \'views\'), // 配置输出的路径\n' +
            '            filename: \'bundle.js\' // 配置输出的文件名\n' +
            '        }\n' +
            '    }\n' +
            '```\n' +
            '\n' +
            '8.安装自动监听打包构建的插件 `webpack-dev-server`   指令如右：`cnpm i webpack-dev-server -D`\n' +
            '\n' +
            '9.下载完毕后，在`package.json`文件中的`scripts`选项中新增一个 `"dev" : "webpack-dev-server"`\n' +
            '\n' +
            '10.一旦使用`webpack-dev-server`打包，生成的文件时存放在内存中的，不是在物理磁盘上，但是，我们可以假装认为在根目录中有一个打包的文件，打包文件会存储在根目录下，因此引入的时候，要注意路径的书写\n' +
            '\n' +
            '11.如果想要打包好后，直接打开`index.html`文件，需要在`package.json`文件的`scripts`中的`"dev" ：“webpack-dev-server"中加一项：\n' +
            '\n' +
            '```javascript\n' +
            'scripts: {\n' +
            '    "dev":"webpack-dev-server --open --port 3000 --hot --host 127.0.0.1"\n' +
            '}\n' +
            '\n' +
            '//--open  chrome默认打开\n' +
            '//--hot  热加载\n' +
            '//--port 设置端口号\n' +
            '//--host 设置域名\n' +
            '\n' +
            '\n' +
            '```\n' +
            '\n' +
            '之后，运行文件不再通过`webpack`,而是 `npm run dev `\n' +
            '\n' +
            '12.配置`html-webpack-plugin`插件,具体步骤如下\n' +
            '\n' +
            '```javascript\n' +
            '1.cnpm i html-webpack-plugin -D\n' +
            '2.在配置文件 webpack.config.js文件中进行配置\n' +
            '  const path = require(\'path\')\n' +
            '  const HtmlWebpackPlugin = require(\'html-webpack-plugin\')  导入在内存中自动生成 index.html的插件\n' +
            '3.创建一个插件的实例对象\n' +
            'const htmlPlugin = new HtmlWebpackPlugin({\n' +
            '    template: path.join(__dirname,\'./src/index.html\')  ,//源文件\n' +
            '    filename:  \'index.html\'//生成的内存中首页的名称\n' +
            '})\n' +
            '4.插件设置完毕后，添加到导出的对象中(指定的环境是生产环境时，可能会出现limit错误)\n' +
            'module.exports = {\n' +
            '    mode:\'development\',\n' +
            '    plugins:[\n' +
            '        htmlPlugin\n' +
            '    ]\n' +
            '}\n' +
            '5.使用该插件后，自动在内存中生成index.html文件，并且直接引用了内存中打包好的index.js文件，因此，我们早页面上不需要引入\n' +
            '```\n' +
            '\n' +
            '### 4.webpack 中引入vue\n' +
            '\n' +
            '组件化的过程中，使用 .vue 结尾，webpack 不能识别，因此需要配置合适的`loader`去进行配置\n' +
            '\n' +
            '具体如下：\n' +
            '\n' +
            '1. 运行`cnpm i vue -S`将vue安装为运行依赖；\n' +
            '2. 运行`cnpm i vue-loader vue-template-compiler -D`将解析转换vue的包安装为开发依赖；\n' +
            '3. 运行`cnpm i style-loader css-loader -D`将解析转换CSS的包安装为开发依赖，因为.vue文件中会写CSS样式；\n' +
            '4. 在`webpack.config.js`中，添加如下`module`规则：\n' +
            '\n' +
            '```javascript\n' +
            'var VueLoaderPlugin = require(\'vue-loader/lib/plugin\')    //首先引入插件,一定要引入\n' +
            'module: {\n' +
            '    rules: [\n' +
            '      { test: /\\.css$/, use: [\'vue-style-loader\', \'css-loader\'] },\n' +
            '      { test: /\\.vue$/, use: \'vue-loader\' }\n' +
            '    ]\n' +
            '  },\n' +
            '  plugins:[\n' +
            '     new VueLoaderPlugin()\n' +
            '  ]\n' +
            '```\n' +
            '\n' +
            '### 5. webpack 处理 不同后缀的文件\n' +
            '\n' +
            '`webpack `默认只能打包 `js` 类型的文件，所以想处理非`js` 类型的文件，需要手动安装第三方的加载器\n' +
            '\n' +
            '##### 5.1 如果引入的是 .css 结尾的文件，需要如下设置：\n' +
            '\n' +
            '1. 运行  `cnpm i style-loader css-loader --save-dev`\n' +
            '2. 修改`webpack.config.js`  这个配置文件，在里面新增一个配置节点，叫`module`， 是一个对象，在该对象身上有一个 `rules` 属性，这个属性是个数组，这个数组中存放了所有第三方文件的匹配和处理规则：\n' +
            '\n' +
            '```javascript\n' +
            'module: { // 用来配置第三方loader模块的\n' +
            '        rules: [ // 文件的匹配规则\n' +
            '            { test: /\\.css$/, use: [\'style-loader\', \'css-loader\'] }//处理css文件的规则\n' +
            '        ]\n' +
            '    }\n' +
            '```\n' +
            '\n' +
            '##### 5.2 如果引入的是 .scss 或 less 结尾的文件，需要如下配置：\n' +
            '\n' +
            '打包处理 .less 或者 .scss 文件\n' +
            '\n' +
            '- 首先是处理 `less` 文件，先要下载安装\n' +
            '\n' +
            '1. 运行`cnpm i less-loader less -D`，会提示你还需安装什么less@2.3.1等，你只需在项目中安装即可\n' +
            '2. 即 `cnpm i less -D`\n' +
            '3. 修改`webpack.config.js`这个配置文件：\n' +
            '\n' +
            '- 打包处理 `scss`文件\n' +
            '\n' +
            '1. 运行`cnpm i sass-loader --save-dev`\n' +
            '\n' +
            '1. 安装还会提示你还要安装 node-sass，因此我们还需要 `cnpm i node-sass -D`\n' +
            '\n' +
            '1. 以上两步可以合并 `cnpm i sass-loader node-sass -D`\n' +
            '2. 在`webpack.config.js`中添加处理sass文件的loader模块：\n' +
            '\n' +
            '```javascript\n' +
            '{ test: /\\.scss$/, use: [\'style-loader\', \'css-loader\', \'sass-loader\'] }\n' +
            '{ test: /\\.scss$/, use: [\'style-loader\', \'css-loader\', \'less-loader\'] }\n' +
            '```\n' +
            '\n' +
            '##### 5.3如果需要引入一些图片格式的文件，需要如下设置：\n' +
            '\n' +
            '1. 运行`cnpm i url-loader file-loader --save-dev`\n' +
            '2. 在`webpack.config.js`中添加处理url路径的loader模块：\n' +
            '\n' +
            '```javascript\n' +
            '{ test: /\\.(png|jpg|gif)$/, use: \'url-loader\' }\n' +
            '```\n' +
            '\n' +
            '3.可以通过`limit`指定进行base64编码的图片大小；只有小于指定字节（byte）的图片才会进行base64编码：\n' +
            '\n' +
            '4.如果不想让其名字被修改，可以再传参， 用&符号连接，`&name=[name].[ext]`\n' +
            '\n' +
            '5.`[ext]`表示原来是什么后缀名，现在就是什么后缀\n' +
            '\n' +
            '```javascript\n' +
            '{ test: /\\.(png|jpg|gif)$/,use:[\'url-loader?limit=22752&name=[name].[ext]\']}\n' +
            '```\n' +
            '\n' +
            '### 6. 使用 babel 处理高级 JS语法\n' +
            '\n' +
            '##### 6.1 安装 babel loader\n' +
            '\n' +
            '如果直接运行`cnpm i babel-core babel-loader babel-plugin-transform-runtime --save-dev`安装babel的相关loader包，后面使用的时候会报错，具体原因如下：\n' +
            '\n' +
            '1. 安装完成后 `package.json`中显示：\n' +
            '\n' +
            '```javascript\n' +
            '"dependencies": {\n' +
            '"babel-core": "^6.26.3",\n' +
            '"babel-loader": "^8.0.5",\n' +
            '...\n' +
            '},\n' +
            '```\n' +
            '\n' +
            '2.`package.json`中的信息显示，在`npmjs.com`仓库中`babel-core`最新版本是`6.26.3`，同时`babel-loader`最新版本是`8.0.5`，但是这里报了一个警告：\n' +
            '\n' +
            '```javascript\n' +
            'npm WARN babel-loader@8.0.5 requires a peer of @babel/core@^7.0.0 but none is installed. \n' +
            '```\n' +
            '\n' +
            '###### 关于上述问题的解答\n' +
            '\n' +
            '`babel-loader@8.x`是webpack用于`Babel 7.x`的一个整合loader模块，`Babel 7.x`已经把所有的相关的包从`babel-`迁移到了`@babel`的npm环境仓库。\n' +
            '\n' +
            '##### 因此具体的安装方法如下：\n' +
            '\n' +
            '2.1 如果你希望安装`Babel 6.x`，你可以使用下面的命令：\n' +
            '\n' +
            '```javascript\n' +
            'cnpm i babel-core babel-loader@7 babel-plugin-transform-runtime -D\n' +
            '```\n' +
            '\n' +
            '2.2 如果你想使用`Babel 7`，理论上你可以使用下面的命令安装：\n' +
            '\n' +
            '```javascript\n' +
            'cnpm i @babel/core babel-loader babel-plugin-transform-runtime -D \n' +
            '```\n' +
            '\n' +
            '##### 6.2 安装 babel 转换的语法\n' +
            '\n' +
            '1. 运行`cnpm i babel-preset-es2015 babel-preset-stage-0 --save-dev`安装babel转换的语法\n' +
            '2. 或者运行`cnpm i babel-preset-env babel-preset-stage-0 --save-dev`安装babel转换的语法\n' +
            '3. 以上任意一种方法安装好后，打开在`webpack.config.js`，并在其中添加相关loader模块，其中需要注意的是，一定要把`node_modules`文件夹添加到排除项：\n' +
            '4. 排除`node_modules`的原因有两个\n' +
            '   - 第1：如果不排除 `node_modules`文件，Bable 会把 `node_modules`中的所有的第三方 `js`文件都打包编译，这会非常消耗计算的CPU 计算机的打包速度会很慢\n' +
            '   - 第2： 哪怕最终 Bable 把 `node_modules`中的 `js` 文件都转化了，最后项目也无法运行\n' +
            '\n' +
            '##### 6.3 配置 .babelrc 文件\n' +
            '\n' +
            '1. 在项目根目录下，创建 `.babelrc`文件\n' +
            '   - 注意 `.babelrc`文件是 `JSON`格式的，里面不能写注释，且字符串必须要用双引号括起来\n' +
            '2. 需要在 `webpack.config.js`里面添加如下配置项：\n' +
            '\n' +
            '```\n' +
            '{ test: /\\.js$/, use: \'babel-loader\', exclude: /node_modules/ }\n' +
            '```\n' +
            '\n' +
            '1. 在项目根目录中添加`.babelrc`文件，并修改这个配置文件如下：\n' +
            '\n' +
            '```javascript\n' +
            '//如果使用 cnpm i babel-preset-es2015 babel-preset-stage-0 --save-dev，则配置如下\n' +
            '{\n' +
            '    "presets":["es2015", "stage-0"],\n' +
            '    "plugins":["transform-runtime"]\n' +
            '}\n' +
            '\n' +
            '// 如果使用 cnpm i babel-preset-env babel-preset-stage-0 --save-dev 则配置\n' +
            '{\n' +
            '    "presets":["env", "stage-0"],\n' +
            '    "plugins":["transform-runtime"]\n' +
            '}\n' +
            '```\n' +
            '\n' +
            '\n' +
            '\n'
    }
]

var tags = [
    {
        id: "tag1",
        content: "数据结构"
    },
    {
        id: "tag2",
        content: "js"
    }
]