import { INodeModel, NodeKeyType, INodeRecordType } from "./NodeModel";
import { Record, List } from "immutable";

interface IMindNodeRecordType extends INodeRecordType {
  parentKey: NodeKeyType;
  content: string;
  subItemKeys?: List<NodeKeyType>;
  collapse: boolean;
}

const defaultMindNodeRecord: IMindNodeRecordType = {
  key: null,
  parentKey: null,
  content: null,
  subItemKeys: List(),
  collapse: false
};

// @ts-ignore
export class MindNodeModel extends Record(defaultMindNodeRecord)
  implements INodeModel {
  constructor() {
    super();
  }
  getKey(): NodeKeyType {
    return this.get("key");
  }

  getParentKey(): NodeKeyType {
    return this.get("parentKey");
  }

  getContent(): any {
    return this.get("content");
  }

  getSubItemKeys(): List<NodeKeyType> {
    return this.get("subItemKeys");
  }

  getCollapse(): boolean {
    return this.get("collapse");
  }

  static create(
    key: NodeKeyType,
    parentKey = null,
    content = "new node",
    subItemKeys = List([]),
    collapse = false
  ): MindNodeModel {
    return MindNodeModel.createWith({
      key,
      parentKey,
      content,
      subItemKeys,
      collapse
    });
  }

  static createWith(obj: any): MindNodeModel {
    let node = new MindNodeModel();
    node = node.merge({
      key: obj.key,
      parentKey: obj.parentKey,
      content: obj.content,
      subItemKeys: List(obj.subItemKeys),
      collapse: obj.collapse
    });
    return node;
  }
}
