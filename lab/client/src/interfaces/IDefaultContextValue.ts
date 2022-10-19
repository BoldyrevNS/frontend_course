import { IServerData } from "./IServerData";
import { IUserD } from "./IUserD";

export interface IDefaultContextValue{
  data: IServerData[],
  errorStatus: number,
  userR: number,
  getError: string,
  userId: number,
  loading: boolean,
  accept: number,
  usersD: IUserD[],
  arrWords: IServerData[],
  setUserR(userR: number): void,
  setUsersD(usersD: IUserD[]): void,
  setUserId(id: number): void,
  setAccept(accept: number): void,
  setArrWords(arrWords: IServerData[]): void,
  handlerAddWord(newWord: IServerData): void,
  handlerDelete(id: number): void,
  handlerInputSave(updatedWord: IServerData): void
}