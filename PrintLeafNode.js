class Node
{
    constructor()
    {
        this.data = 0;
        this.left = null;
        this.right = null;
    }
};
 
function printLeafNodes(root)
{
     
    if (root == null)
        return;
       
    if (root.left == null &&
        root.right == null)
    {
        console.log(root.data + " ");
        return;
    }
     
    if (root.left != null)
        printLeafNodes(root.left);
         
    if (root.right != null)
        printLeafNodes(root.right);
}
 
function newNode(data)
{
    var temp = new Node();
    temp.data = data;
    temp.left = null;
    temp.right = null;
    return temp;
}
 
var root = newNode(1);
root.left = newNode(2);
root.right = newNode(3);
root.left.left = newNode(4);
root.right.left = newNode(5);
root.right.right = newNode(8);
root.right.left.left = newNode(6);
root.right.left.right = newNode(7);
root.right.right.left = newNode(9);
root.right.right.right = newNode(10);
 
// Print leaf nodes of the given tree
printLeafNodes(root);