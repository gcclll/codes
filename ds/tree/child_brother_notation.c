#include <stdlib.h>
#include <stdio.h>

#define MAX_TREE_SIZE 100

typedef int TElementType;

/* 孩子兄弟表示法 */
typedef struct CSNode {
  TElementType data;                      /* 数据域 */
  // struct CSNode *parent; // 记录双亲结点，如果有需要的话
  struct CSNode *first_child, *right_sib; /* 第一个孩子结点和右边的兄弟结点指针 */
} CSNode, *CSTree;

int main(int argc, char *argv[])
{

  return 0;
}
