#include <stdio.h>
#include <stdlib.h>

#define TREE_DEPTH 3
#define MAX_TREE_SIZE 100

typedef int TElemType; // 树结点的数据类型

/* 双亲表示法 */
typedef struct PTNode {
  TElemType data;
  int parent; // 记录的双亲结点的位置信息
} PTNode;

typedef struct {
  PTNode nodes[MAX_TREE_SIZE];
  int r, n; // 根的位置和结点数
} PTree;

/* 孩子表示法：数据域 + 孩子指针域 + 孩子指针域的个数(树的的度) */
typedef struct CTNode {
  TElemType data;
  struct CTNode *children[TREE_DEPTH];
} CTNode;

int main(int argc, char *argv[])
{
  // 双亲表示法
  return 0;
}
