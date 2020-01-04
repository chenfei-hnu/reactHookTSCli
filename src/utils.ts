import React from 'react';
import { ObjStringMap } from './types/index';
export function getLocalStorageValue(key: string) {
  const value = localStorage.getItem(key);
  if (!value) return null;
  try {
    return JSON.parse(value);
  } catch (error) {
    return null;
  }
}

export function setLocalStorage(key: string, value: string) {
  localStorage.setItem(key, JSON.stringify(value));
}


// 下面使我们编写的自定义 hook
export function useEventListener(eventName: string, handler: (event: any) => void, element = window) {
  // 创建一个 ref 来存储处理程序
  let saveHandler = { current: (event: any) => { } };

  // 如果 handler 变化了，就更新 ref.current 的值。
  // 这个让我们下面的 effect 永远获取到最新的 handler
  React.useEffect(() => {
    saveHandler.current = handler;
  }, [handler]);

  React.useEffect(
    () => {
      // 确保元素支持 addEventListener
      const isSupported = element && element.addEventListener;
      if (!isSupported) return;

      // 创建事件监听调用存储在 ref 的处理方法
      const eventListener = (event: any) => saveHandler.current(event);

      // 添加事件监听
      element.addEventListener(eventName, eventListener);

      // 清除的时候移除事件监听
      return () => {
        element.removeEventListener(eventName, eventListener);
      };
    },
    [eventName, element] // 如果 eventName 或 element 变化，就再次运行
  );
};
export function dateFormat(fmt: string, date: Date) {
  let ret;
  let opt: ObjStringMap = {
    "Y+": date.getFullYear().toString(),        // 年
    "m+": (date.getMonth() + 1).toString(),     // 月
    "d+": date.getDate().toString(),            // 日
    "H+": date.getHours().toString(),           // 时
    "M+": date.getMinutes().toString(),         // 分
    "S+": date.getSeconds().toString()          // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (let k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], (ret[1].length === 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
    };
  };
  return fmt;
}