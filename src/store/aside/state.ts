import { AsideName, CardTypeEnum } from "@/common/enum.type";
import { ICard } from "@/data/entities/Card";

export const state = {
  // aside chat 키워드
  keyword: "",
  searchCount: 3,
  searchList: [
    {
      id: 1,
      card_type: CardTypeEnum.TODO,
      title: "서비스 페이지",
      sub_title: "서비스 페이지 이미지 교체",
      project_id: 1,
    },
    {
      id: 2,
      card_type: CardTypeEnum.DOINT,
      title: "서비스 페이지",
      sub_title: "서비스 페이지 이미지 교체",
      project_id: 1,
    },
    {
      id: 3,
      card_type: CardTypeEnum.DONE,
      title: "서비스 페이지",
      sub_title: "서비스 페이지 이미지 교체",
      project_id: 1,
    },
  ] as Partial<ICard>[],
};

export type stateType = typeof state;
