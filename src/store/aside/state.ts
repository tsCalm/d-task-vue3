import { AlarmType, AsideName, CardTypeEnum } from "@/common/enum.type";
import { IAlarm } from "@/data/entities/Alarm";
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
  previousAlarm: [
    {
      id: 3,
      event_type: AlarmType.MOVE_DONE,
      user: {
        id: 3,
        name: "구가현",
        pf_img: null,
      },
      event_title: "서비스 페이지 'DONE'으로 이동",
      event_sub_title: "서비스페이지 아티스트 히어로배너 텍스트 스타일 수정",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 3,
      event_type: AlarmType.MOVE_DONE,
      user: {
        id: 3,
        name: "구가현",
        pf_img: null,
      },
      event_title: "프로젝트 'DTASK' 개설",
      event_sub_title: null,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ] as Partial<IAlarm>,
  todayAlarm: [
    {
      id: 3,
      event_type: AlarmType.CREATE_TODO,
      user: {
        id: 3,
        name: "구가현",
        pf_img: null,
      },
      event_title: "'TODO'카드 등록",
      event_sub_title: "관리자페이지 아티스트 메인페이지 이미지 교체",
      created_at: new Date(),
      updated_at: new Date(),
    },
  ] as Partial<IAlarm>,
};

export type stateType = typeof state;
