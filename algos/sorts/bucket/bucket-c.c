#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[]) {

  int nums[] = {5, 1, 2, 4, 3, 2, 1, 5, 0, 2, 3, 4, 5, 6, 8, 2, 7};
  int max = 8, min = 0;
  int bucket[9] = {0};
  int len = sizeof(nums) / sizeof(int);

  // 第一步，将所有重复的数统计到 bucket[val] = count 桶中
  // 索引是要进行排序的值，值是该值出现的次数
  for (int i = 0; i < len; i++) { // n
    bucket[nums[i]]++;
  }

  // 第二步，将统计之后的逐个还原回原来的数组，完成排序
  int idx = 0;
  for (int k = 0; k < len; k++) { // n
    int val = bucket[idx];  // --> 1
    // 到 0 表示该组相同的数归位完毕
    if (val == 0) {
      idx++;  // --> 1
    }
    bucket[idx]--; // --> 1
    nums[k] = idx; // --> 1
  } // 4 * n

  // -> 2n
  for (int j = 0; j < len; j++) {
    printf("%d | ", nums[j]);
  }
  printf("\n");
  return 0;
}
