#include <stdio.h>
#include <stdlib.h>

typedef char VertexType;
typedef int EdgeType;

#define MAX_VEX 100
#define INFINITY 65535

typedef struct
{
  VertexType vexs[MAX_VEX];     /* 顶点表 */
  EdgeType arc[MAX_VEX][MAX_VEX]; /* 边矩阵 */
  int numVertexes, numEdges;       /* 图中的定点数和边数 */
  
} MGraph;

void CreateMGraph(MGraph *G) {
    int i, j, k, w;
    printf("请输入定点数和边数：\n");
    scanf("%d,%d", &G->numVertexes, &G->numEdges);
    for (i = 0; i < G->numVertexes; i++) { /* 读入顶点信息，建立顶点表 */
      scanf(&G->vexs[i]);
    }

    /* 初始化矩阵 */
    for (i = 0; i < G->numVertexes; i++) {
      for (j = 0; j < G->numEdges; j++) {
        G->arc[i][j] = INFINITY;
      }
    }

    for (k = 0; k < G->numEdges; k++) {
      printf("输入边(vi, vj)上的下标 i, 下标 j，和权 w: \n");
      scanf("%d,%d,%d", &i, &j, &w);
      G->arc[i][j] = w;
      G->arc[j][i] = G->arc[i][j]; /* 无向图矩阵，对角线对称 */
    }
}

int main(int argc, char *argv[])
{

  
  return 0;
}
