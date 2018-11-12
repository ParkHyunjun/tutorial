# Node.js

# 목차
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

### 무엇을 만들수 있나?
* RESTful APIs & Backend Application
* 실시간 서비스
* Blog, CMS, Social Applications
* Utilities & Tools

## NPM
* Node.js Package Manager
* node 프로그램과 모듈을 설치하는데 사용된다.
* Dependdencies 를 지정하고 연결하는데 쉽다.
* Modules 는 "node_modules" 폴더에 설치된다.
```sh
$ npm install express
$ npm install -g express
```

### 주요 Modules
* Express - Web developer framework
* Connect - 확장가능한 HTTP 서버 framework
* Socket.io - websocket를 위한 서버 사이드 framework
* Pug / Jade - Haml (HTML abstraction markup language)과 같은 템플릿엔진
* Mongo / Mongoose - MongoDB 과 연동하기 위한 Wrappers
* Redis - Redis client library

### package.json
* application 의 최상위 위치에 해당 파일을 생성한다.
* npm에게 패키지 구성 방법 및 패키지 설치 방법을 알려준다.
```sh,
{
  "name": "nodejs_tutorial",
  "version": "1.0.0",
  "description": "Simple node js tutorial",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "herotic@genesis.co.kr",
  "license": "ISC"
  "dependencies": {
      "body-parser": "^1.15.2",
      "express": "^4.14.0",
      "mongojs": "^2.4.0"
  }
}
```
```sh,
$ npm init
```

## node.js install
https://nodejs.org/en/

## REPL
```sh,
$ node
> 1+7
8
> var x = 10;
undefined
> x
10
> for (i=0;i<10;i++) {
... console.log(i);
... };
0
1
2
3
4
5
6
7
8
9
undefined
> function greeting(greet) {
... console.log(greet);
... };
undefined
> greeting('Hello World');
Hello World
undefined
```

## app.js
```sh,
$ node app.js
```

##  Basic Web Service
* 참조 프로젝트 [nodejs_tutorial](https://github.com/ParkHyunjun/tutorial/tree/master/src/node_js)