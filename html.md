# HTML
![Alternate text](https://raw.githubusercontent.com/ParkHyunjun/tutorial/master/images/learn-html5.jpg)

## 정의
* HyperText Markup Language
* 프로그램 언어가 아니다.
* 웹페이지나 문서를 만들기 위한 Markup Language
* Web의 구조를 생성한다.

## 특징
* 서버가 필요없다.
* 확장자는 .html
* 브라우저에서 실행된다. (Chrome, FireFox, Safari, edge, etc)
* index.html은 웹 사이트의 최상위 홈페이지에 위치한다.
> http://www.genesis.tech -> index.html 파일을 읽는다.

> http://www.genesis.tech/intro.html -> intro.html 파일을 읽는다.

## Tag 문법
* Element 이름은 <> 로 둘러쌓인다.
* 기본적으로 시작 태그와 종료 태그가 있어야 하낟.
* 종료 태그는 시작 태그와 같지만 / 가 존재할 수 있다.
* 어떤 태그는 그 자신으로 구성될 수 있다.

```sh

<tagname>content</tagname>

<h1>Genesis Tech</h1>
<p>This is a paragraph</p>

<br /> (self closing)
<br> (HTML5 형식)

```

## HTML 페이지 구조
![Alternate text](https://raw.githubusercontent.com/ParkHyunjun/tutorial/master/images/HTML_page_structure.jpg)

```sh

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Tutorial html</title>
</head>
<body>
    <h1>Heading 1</1>
    <p>paragraph</p>
</body>
</html>

```

## Doctype 
* 페이지의 document type 이 무엇인지 설명
* HTML4, HTML5, XHTML, etc
* 참조 : https://www.w3schools.com/tags/tag_doctype.asp

```sh
<!--- HTML5 -->
<!DOCTYPE html>

<!--- HTML4.01 Strict -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

<!--- XHTML 1.0 Strict -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

```

## inline , block level elements
* inline elements:
> 새로운 행의 처음에 위치하면 안된다. <br>
> 반드시 필요한 부분에 써야 한다.
```sh
<span>, <img>, <a>
```
* block elements
> 새로운 행의 처음에 위치 <br>
> 사용가능한 전체 폭을 차지한다.
```sh
<div>,<h1>-<h6>,<p>,<form>
```
## Tag Attributes
* 모든 tag는 attribute를 갖는다.
* elements 에 대한 정보를 제공한다.
* start tag 내 위치해야 한다.
* key/value 쌍으로 구성(id="value")
```sh
<tagname attributename="attrivutevalue">content</tagname>

<h1 title="GeneisTechnologies">About Company</h1>
```
## HTML5 Semantic Tags
semantic 요소는 개발자와 브라우저에게 그 의미를 명확하게 한다.

```sh
<header></header>
<footer></footer>
<aside></aside>
<main</main>
<article></article>
<nav><nav>
<section></section>
<details><details>
```
![Alternate text](https://raw.githubusercontent.com/ParkHyunjun/tutorial/master/images/img_sem_elements.gif)