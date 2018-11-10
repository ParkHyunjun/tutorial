# Node.js

## 목차
* Node.js 소개 및 동작 방식
* 설치 (Window)
* REPL
* NPM - Node Package Manager
* package.json 설정
* Basic Web Service

## Node.js 소개
* Chome's V8 JavaScript Engine 에서 런타임 빌드되는 JavaScript
* 서버상에 수행되는 JavaScript
* 확장가능한 Web Applicatin을 빠르게 개발할 수 있다.
* event-driven, non-blocking I/O model
  > non-blocking I/O 호출를 single thread가 처리한다.
  > 10000 개의 동시 커넥션을 지원
  > 많은 I/O 처리로 인한 web application의 처리량과 확장성을 보장 하기 때문에
  > Node.js 가 극도로 빠리고 효과적으로 Application을 만들 수 있게 한다.

### Event Loop
* Single-threaded
* 이벤트 및 콜백을 통해 동시성 지원
* EventEmitter class events 와 event listeners를 바인드할때 사용된다.

![](https://raw.githubusercontent.com/ParkHyunjun/tutorial/master/images/node-js-event-loop-diagram.jpg)