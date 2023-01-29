import request from '../utils/request'
import {catchError, from, Observable, of} from "rxjs";
import {map} from "rxjs/operators";
import {AxiosResponse} from "axios";

export interface UserInfo {
    id?:number,
    name: string,
    age: number,
    sex: string
}

export function getUserInfo(): Observable<UserInfo[] | undefined> {
    return from(request({
        url: '/api/getUserInfo'
    })).pipe(
        map((res: AxiosResponse<any, any>) => {
            return res.data;
        }),
        catchError((error:Error) => {
            console.error('getUserInfo failed', error);
            return of(undefined);
        })
    );
}
