// Get the count of nodes in a Binary tree.

class Node
{
    constructor(item)
    {
        this.data = item;
        this.left = null;
        this.right = null;
    }
}
let root;
function getfullCount()
{
    if (root == null)
        return 0;

    let queue = [];
    queue.push(root);
    let count = 0;
     
    while (queue.length != 0)
    {
        let temp = queue.shift();
        if (temp.left != null && temp.right != null)
            count++;
        if (temp.left != null)
        {
            queue.push(temp.left);
        }
        if (temp.right != null)
        {
            queue.push(temp.right);
        }
    }
    return count;
}

root = new Node(2);
root.left = new Node(7);
root.right = new Node(5);
root.left.right = new Node(6);
root.left.right.left = new Node(1);
root.left.right.right = new Node(11);
root.right.right = new Node(9);
root.right.right.left = new Node(4);
 
console.log(getfullCount());