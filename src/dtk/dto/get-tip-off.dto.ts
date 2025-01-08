export class GetTipOffDto {
  pageId?: number;
  pageSize?: number;
  platform?: number;
  cid?: number;
  contentType?: number;
  play?: string;
  groupId?: string;
}

export class TipOffDto {
  contentType: [];
  count: number;
  createTime: string;
  dataId: number;
  groupId: number; // 群id
  groupName: string; // 群名
  headImg: string;
  id: number;
  materialOriginal: {
    content: string;
    type: number;
  }[];
  materialShow: {
    content: string;
    type: number;
  }[];
  platform: number;
  play: [];
  productId: string;
  roomId: string;
}
