#include <stdio.h>
#include <stdlib.h>

typedef char VertexType;
typedef int EdgeType;

#define MAXVEX 65535

typedef struct
{
  int adjvex;                   /* 邻接点域，存储该顶点对应的下表 */
  EdgeType weight;              /* 权值，非网图不需要 */
  struct EdgeNode * next;       /* 链域，指向下一个邻接点 */
} EdgeNode;

typedef struct VertexNode {     /* 顶点表结点 */
  VertexType data;              /* 顶点域，存储顶点信息 */
  EdgeNode *firstEdge;          /* 边表头指针 */
} VertexNode, AdjList[MAXVEX];

typedef struct {
  AdjList adjList;              /* 顶点结构数组 */
  int numVertexes, numEdges;
} GraphAdjList;                 /* 邻接表结构 */

void CreateALGraph(GraphAdjList *G) {
  int i, j, k;
  EdgeNode *e;

  printf("输入顶点数和边数：\n");
  scanf("%d,%d", &G->numVertexes, &G->numEdges);
  for (i = 0; i < G->numVertexes; i++) {
    scanf(&G->adjList[i].data); /* 顶点信息 */
    G->adjList[i].firstEdge = NULL; /* 边表置空 */
  }

  /* 建立边表 */
  for (k = 0; k < G->numEdges; k++) {
    printf("输入边(vi, vj)上的顶点序号：\n");
    scanf("%d,%d", &i, &j);     /* 输入边(vi, vj)上的顶点序号 */
    e = (EdgeNode *)malloc(sizeof(EdgeNode)); /* 申请边节点空间 */

    e->adjvex = j;              /* 邻接序号 */
    e->next = G->adjList[i].firstEdge; /* 指向当前顶点指向的节点 */
    G->adjList[i].firstEdge = e;       /* 当前顶点指针指向邻边节点 */

    e = (EdgeNode *)malloc(sizeof(EdgeNode)); /* 边结点 */

    e->adjvex = i;
    e->next = G->adjList[j].firstEdge;
    G->adjList[j].firstEdge = e;
  }
}

int main(int argc, char *argv[])
{

  
  return 0;
}
