# Team WhiteSpace

## 🖥 프로젝트 소개

React를 사용한 '공백' 웹사이트 클론  
http://white-space.cf/

## 📅 프로젝트 기간

2021.04.12 ~ 2021.04.23

## 🎥 프로젝트 시연영상

https://vimeo.com/540894798

## 👩🏻‍💻🧑🏻‍💻 프로젝트 참가자 (Front & Back)

🔜 FrontEnd

- 김남선, 김동현, 박단비

🔙 BackEnd

- 문희원, 홍태경

## 🔧 기술 스택

- FrontEnd

  ![HTML/CSS](https://img.shields.io/badge/-HTML/CSS-E44D26)  
  ![SASS](https://img.shields.io/badge/-SASS-ff69b4)  
  ![JavaScript(ES6+)](<https://img.shields.io/badge/-JavaScript(ES6%2B)-F0DB4D>)  
  ![React](https://img.shields.io/badge/-React-blue)

- BackEnd

  ![Python](https://img.shields.io/badge/-Python-376FA0)  
  ![Django](https://img.shields.io/badge/-Django-043829)  
  ![CORS Header](<https://img.shields.io/badge/-CORS Header-F0DB4D>)  
  ![Bcrypt](https://img.shields.io/badge/-Bcrypt-2A334C)  
  ![PyJWT](https://img.shields.io/badge/-PyJWT-black)  
  ![MySQL](https://img.shields.io/badge/-MySQL-DD8A00)  
  ![AqeuryTool](https://img.shields.io/badge/-AqeuryTool-6A9CA7)  
  ![S3](https://img.shields.io/badge/-S3-DA5041)

- 협업 도구

  ![Slack](https://img.shields.io/badge/-Slack-D91D57)  
  ![Git](https://img.shields.io/badge/-Git-black)  
  ![Trello](https://img.shields.io/badge/-Trello-036AA7)

---

# ⭐️ 구현한 기능

## 🌱 Frontend

### 회원가입 & 로그인

- 회원 가입시 아이디, 비밀번호 유효성 검사
- 회원 가입시 아이디, 휴대폰번호 중복 검사
- 로그인 시 아이디, 비밀번호 유효성 검사
- 로그아웃 시 로그인 토큰 삭제

### 네비게이션 바

- 팝업 슬라이드 구현
- 로그인 토큰 유무에 따라 메뉴가 바뀌도록 구현

### 메인 페이지
![](https://images.velog.io/images/nsunny0908/post/58e75cd5-4e4c-44c4-b78c-c5ec69340e2f/Apr-25-2021%2023-52-03.gif)
![](https://images.velog.io/images/nsunny0908/post/c74db7b2-1e1a-4f9e-b1b4-a67e8e842957/Apr-25-2021%2023-52-31.gif)

- 🙋🏻‍♀️ **슬라이드를 이용한 이미지배너 구현**
- 🙋🏻‍♀️**top 버튼 구현**
- 🙋🏻‍♀️**로그인 토큰 유무에 따른 회원가입 유도 팝업창 구현**

### 상품리스트 페이지
![](https://images.velog.io/images/nsunny0908/post/8ad54c40-9cbe-4260-8706-35e394b89926/Apr-25-2021%2015-10-37.gif)
![](https://images.velog.io/images/nsunny0908/post/b8483bcc-08e3-4963-9a2a-6b1b9d964b38/Apr-25-2021%2015-11-50.gif)
![](https://images.velog.io/images/nsunny0908/post/c55d8cfa-854a-4783-ac54-cc07d9e832db/Apr-25-2021%2016-26-56.gif)
- 🙋🏻‍♀️**각각의 상품을 컴포넌트 화**
- 🙋🏻‍♀️**상품이 출시된지 하루 이내일 경우 `NEW` 뱃지, 각 상품의 재고량이 없을 시, `LIMITED` 뱃지, 재고량이 없을 경우 `SOLDOUT` 뱃지가 나오도록 구현**
- 🙋🏻‍♀️**페이지네이션 기능 구현**
- 🙋🏻‍♀️**검색 기능 구현, 검색 결과가 없을 시 검색결과가 없습니다 표시**

### 상품 상세페이지
- 상품 정보 컴포넌트화
- 컬러, 옵션에 따른 가격 변동 기능 구현.  
![](https://images.velog.io/images/nsunny0908/post/039b2583-3e16-491c-8270-b3d7ed6190f3/addreview.gif)
![](https://images.velog.io/images/nsunny0908/post/884127a1-6961-4c52-80b5-5752071a8166/reviewstar.gif)
![](https://images.velog.io/images/nsunny0908/post/1007f6ab-2333-47d4-9158-2ec67e4e3fe6/Apr-25-2021%2017-09-39.gif)
- 🙋🏻‍♀️**이미지 등록 시 썸네일 기능, 이미지 변경, 삭제 기능 구현**
- 🙋🏻‍♀️**formData를 활용한 multiple 이미지 업로드 기능 구현**
- 🙋🏻‍♀️**리뷰 클릭 시 모달로 상세 리뷰 확인 기능**

### 장바구니 페이지

- 장바구니 상품 추가 기능
- 장바구니 선택 삭제 기능
- 장바구니 비우기 기능
- 수량 옵션 변경시 Database에 실시간 반영

### 결제 페이지

- 각 테이블을 컴포넌트 화
- 다음 주소 API를 활용한 주소 입력 기능

### 🙋🏻‍♀️ 결제 완료페이지
![](https://images.velog.io/images/nsunny0908/post/4a59e79c-3879-4fbf-87fb-27d0012a9d33/C20BBDC0-A9E6-466E-8A8D-3BFCE88B661A.jpg)

---

## 🌱 Backend

### 모델링 구축

- AQuerytool을 활용한 모델링 논의
- MySQL, AWS RDS로 모델 구축

### 회원가입 & 로그인

- bcrypt를 사용한 암호화
- JWT 로그인 구현 및 @decorator를 이용해서 토큰 인증
- Email & 비밀번호 & 전화번호 정규화를 통한 Validation적용

### 네비게이션 바

- 카테고리 정보 보여주기

### 상품리스트 API

- 가장 많이 팔리는 상품 3가지 필터링
- 카테고리별 상품 필터링
- 검색 키워드에 따른 상품 필터링
- 각 상품별로 신상품인지, 한정재고품인지 체크하는 로직 구현

### 상품 상세 API

- 상품 상세 페이지 (상품 정보: 가격, 사진, 옵션, 재고)
- 각 상품 옵션에 따른 재고 정보 제공
- 제품 설명란 이미지 순서에 맞게 제공

### 장바구니 API

- GET 장바구니 내역 조회
- POST 상품 장바구니에 등록 (개수 포함)
- PATCH 장바구니 상품 수량 변경 및 가격반영(DB에 전부 반영되도록 설정)
- DELETE 장바구니 상품 선택제거 / 전체제거

### 결제 API

- 주문창에서 해당 사용자 정보 확인
- POST 주문시 장바구니에서 해당 상품목록 제거 & 새로운 주문 생성
- 주문 과정 트랜잭션 처리

### 상품 리뷰 API

- 상품 리뷰 보기 (작성자, 평점, 리뷰 내용, 이미지, 구매한 옵션 정보)
- 구매한 사용자만 리뷰 작성 권한 부여
- 리뷰 작성시 이미지 업로드 가능 (Aws S3),
- 해당 상품의 각 평점(1~5) 개수 카운트
- 해당 상품의 총 평균 평점 정보 제공

---

# 👥 후기

## 🔜 Frontend

[김남선](https://velog.io/@nsunny0908/%EA%B3%B5%EB%B0%B1-%EC%9B%B9%EC%82%AC%EC%9D%B4%ED%8A%B8-%ED%81%B4%EB%A1%A0-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0%EB%A1%9D)  
김동현  
[박단비](https://velog.io/@itssweetrain/%EA%B3%B5%EB%B0%B1-%ED%81%B4%EB%A1%A0-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8)

## 🔙 Backend

[문희원](https://fierycoding.tistory.com/70)  
홍태경

---

# ❗️ 레퍼런스

이 프로젝트는 공백 웹사이트를 참조하여 학습목적으로 만들었습니다.
실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
