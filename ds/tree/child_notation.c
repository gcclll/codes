#include <stdio.h>
#include <stdlib.h>

#define MAX_TREE_SIZE 100

typedef int TElementType;

/* 孩子结点结构，child 当前孩子结点的索引，next 兄弟结点位置  */
typedef struct CTNode {
  int child;
  struct CTNode *next;
} *ChildPtr;

/* 头结点结构，data 结点实际数据，firstChild 第一个孩子结点 */
typedef struct {
  TElementType data;
  int parent; // 双亲结点的位置
  ChildPtr firstChild;
} CTBox;

/* 树结构，所有树的结点都以线性方式(数组)存储，通过 firstChild->next 将所有结点关联起来 */
typedef struct {
  CTBox nodes[MAX_TREE_SIZE];
  int r, n; // 根结点的位置和结点数
} CTree;

int main(int argc, char *argv[])
{

  return 0;
}
