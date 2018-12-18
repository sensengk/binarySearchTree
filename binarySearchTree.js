/**
 * @description 用构造函数模拟的数据结构二叉树(bst) 
 * @author 吴森
 * @date 2018/7/7
 */


123

function BinarySearchTree() {

    // 定义node节点 初始左子树和右子树都是空的
    let Node = function(key) {
        this.key = key;
        this.left = left;
        this.right = right;
    }

    // 定义根节点
    let root = null

    /**
     * @descripttion 私有属性  插入节点函数
     * @params  [node, newNode]   - 被比较的节点   新节点
     */
    const insertNode = function(node, newNode) {
            if (newNode.key < node.key) {
                if (node.left === null) {
                    node.left = newNode
                } else {
                    insertNode(node.left, newNode)
                }
            } else {
                if (node.right === null) {
                    node.right = newNode
                } else {
                    insertNode(node.right, newNode)
                }
            }
        }
        /**
         * @descripttion 向外暴露的方法
         * @params  [ key ]   - 要插入的新节点的值
         */
    this.insert = function(key) {
        let newNode = new Node(key)
        if (root === null) {
            root = newNode
        } else {
            insertNode(root, newNode)
        }
    }

    // 中序遍历的使用方法
    const inOrderTraverseNode = function(node, cb) {
        if (node !== null) {
            inOrderTraverseNode(node.left, cb)
                // 相关的处理函数
            cb && cb()
                // 相关处理结束
            inOrderTraverseNode(node.right, cb)
        }
    }

    /**
     * @descripttion 中序遍历
     * @params  [ cb ]   - 对节点的处理
     */

    this.inOrderTraverse = function(cb) {
        inOrderTraverseNode(root, cb)
    }

    // 先序遍历的使用方法
    const prevOrderTraverseNode = function(node, cb) {
        if (node !== null) {
            // 相关的处理函数
            cb && cb()
                // 相关处理结束
            prevOrderTraverseNode(node.left, cb)
            prevOrderTraverseNode(node.right, cb)
        }
    }

    /**
     * @descripttion 先序遍历
     * @params  [ cb ]   - 对节点的处理
     */
    this.prevOrderTraverse = function(cb) {
        prevOrderTraverseNode(root, cb)
    }

    // 后序遍历的方法
    const postOrderTraverseNode = function(node, cb) {
            if (node !== null) {
                postOrderTraverseNode(node.left, cb)
                postOrderTraverseNode(node.right, cb)
                    // 相关的处理函数
                cb && cb()
                    // 相关处理结束
            }
        }
        /**
         * @descripttion 后序遍历
         * @params  [ cb ]   - 对节点的处理
         */

    this.postOrderTraverse = function(cb) {
        postOrderTraverseNode(root, cb)
    }

    // 寻找树的最小节点
    const minNode = function(node) {
        if (node) {
            while (node.left) {
                node = node.left
            }
            return node.key
        }
        return null
    }

    /**
     * @descripttion 寻找最小节点
     */

    this.min = function() {
        return minNode(root)
    }

    // 寻找树中的最大节点
    const maxNode = function(node) {
            if (node) {
                while (node.right) {
                    node = node.right
                }
                return node.key
            }
            return null
        }
        /**
         * @descripttion 寻找最大节点
         */
    this.max = function() {
        maxNode(root)
    }
    const searchNode = function(node, key) {
            if (node === null) {
                return false
            } else if (node.key > key) {
                return searchNode(node.left, key)
            } else if (node.key < key) {
                return searchNode(node.left, key)
            } else {
                return true
            }
        }
        /**
         * @descripttion 判断某个节点是否存在
         */
    this.search = function(key) {
        searchNode(root, key)
    }

    const findMinNode = function(node) {
        while (node && node.left) {
            node = node.left
        }
        return node
    }
    const removeNode = function(node, key) {
        if (node == null) {
            return null
        } else {
            if (node.key > key) {
                node.left = removeNode(node.left, key)
                return node
            } else if (node.key < key) {
                node.right = removeNode(node.right, key)
                return node
            } else {
                if (node.left === null && node.right === null) {
                    node = null
                    return node
                } else if (node.left === null) {
                    node = node.right
                    return node
                } else if (node.right === null) {
                    node = node.left
                    return node
                }
                var aux = findMinNode(node.right)
                node.key = aux.key
                node.right = removeNode(node.right, aux.key)
                return node

            }

        }
    }

    /**
     * @descripttion 移除某个节点
     */

    this.remove = function(key) {
        root = removeNode(root, key)
    }
}
// 使用方式
// var binarySearchTree = BinarySearchTree();
// binarySearchTree.insert(1)