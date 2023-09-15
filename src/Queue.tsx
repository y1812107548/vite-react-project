import React from "react";

function increment(n: number) {
  return n + 1;
}

function getFinalState(
  baseState: number,
  queue: Array<number | ((n: number) => number)>
) {
  let finalState = baseState;
  for (const update of queue) {
    if (typeof update === "function") {
      // TODO:调用更新函数
      finalState = update(finalState);
    } else {
      // TODO:替换state
      finalState = update;
    }
  }
  return finalState;
}

increment.toString = () => "n => n+1";
export default function Queue() {
  return (
    <>
      <TestCase baseState={0} queue={[1, 1, 1]} expected={1}></TestCase>
      <hr />
      <TestCase
        baseState={0}
        queue={[increment, increment, increment]}
        expected={3}
      ></TestCase>
      <hr />
      <TestCase baseState={0} queue={[5, increment]} expected={6}></TestCase>
      <hr />
      <TestCase
        baseState={0}
        queue={[5, increment, 42]}
        expected={42}
      ></TestCase>
    </>
  );
}

function TestCase({
  baseState,
  queue,
  expected,
}: {
  baseState: number;
  queue: Array<number | ((n: number) => number)>;
  expected: number;
}) {
  const actual = getFinalState(baseState, queue);
  return (
    <>
      <p>
        初始 state：<b>{baseState}</b>
      </p>
      <p>
        队列：<b>[{queue.join(", ")}]</b>
      </p>
      <p>
        预期结果：<b>{expected}</b>
      </p>
      <p
        style={{
          color: actual === expected ? "green" : "red",
        }}
      >
        你的结果：<b>{actual}</b> ({actual === expected ? "正确" : "错误"})
      </p>
    </>
  );
}
