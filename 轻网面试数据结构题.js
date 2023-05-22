/**
 * 以下是一个树状类型的数据结构  data
 * 每个节点都有一个唯一的 id，和一个 name 字段，同时每个节点还有一个 children 字段。
 * children 字段是一个数组，包含了其子节点的信息。
 * 目前已经有一个方法 flattenTreeWithParentId 将其进行扁平化
 * 要求：
 * 1、实现一个方法将其还原成原始的树状结构
 * 2、要求尽可能地使用 Map 和 非Map 两种方式实现
 * 注意：在尽量满足条件1的基础上，尽可能地满足条件2
 */ 
const data = [
  {
    id: 'a',
    name: 'node-a',
    children: [
      {
        id: 'b',
        name: 'node-b',
        children: [
          {
            id: 'c',
            name: 'node-c'
          },
          {
            id: 'd',
            name: 'node-d'
          }
        ]
      },
      {
        id: 'e',
        name: 'node-e',
        children: [
          {
            id: 'f',
            name: 'node-f'
          },
          {
            id: 'g',
            name: 'node-g'
          }
        ]
      }
    ]
  }
]    

/**
 * @description: 将原始的数据结构进行扁平化
 * @param {Array} tree 目标数据结构
 * @param {string | null} parentId 父节点id
 * @return {Array} 扁平化后的数据结构
 */
function flattenTreeWithParentId(tree, parentId = null) {
  const flattened = [];

  tree.forEach(node => {
    const flattenedNode = {
      id: node.id,
      name: node.name,
      parentId: parentId
    };

    flattened.push(flattenedNode);

    if (node.children) {
      const children = flattenTreeWithParentId(node.children, node.id);
      flattened.push(...children);
    }
  });

  return flattened;
}

const flattenedData = flattenTreeWithParentId(data);
console.log(flattenedData);









// ***********  候选人答题区域  *********** //

/**
 * @description: 将扁平化后的数组转换为原始的树状结构
 */
function restoreTree(flattenedData) {
  // 请在此处完善代码
}

console.log(restoreTree(flattenedData))



// ***********  候选人答题区域  *********** //