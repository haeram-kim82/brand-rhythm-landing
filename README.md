# BRAND RHYTHM Landing

브랜드리듬의 서비스 소개, 포트폴리오 확인, 무료 샘플 신청을 위한 공개용 정적 랜딩페이지다. HTML, CSS, 최소 JavaScript와 이미지로 구성하며 서버 코드, 데이터베이스, 설치 및 별도 빌드 과정이 필요하지 않다.

## 파일 구성

- index.html: 1페이지 랜딩
- styles.css: 모바일 중심 스타일
- script.js: 포트폴리오 프리뷰 확대/닫기
- assets/logo/: 브랜드 로고
- assets/portfolio/: 표시하는 현재 포트폴리오와 서비스 소개 이미지
- .nojekyll: GitHub Pages의 Jekyll 처리 생략

## 로컬 미리보기

index.html을 브라우저로 직접 열 수 있다. 상대경로를 유지하려면 폴더 전체를 함께 옮긴다.

HTTP 환경에서 확인하려면 이 폴더에서 다음을 실행한다(Python이 설치된 경우).

```sh
python -m http.server 8000 --bind 127.0.0.1
```

브라우저에서 http://127.0.0.1:8000/ 을 연다. 종료할 때 Ctrl+C를 누른다.

## Google Form 신청 링크

헤더, HERO, 무료 샘플 섹션, FINAL CTA, 모바일 하단의 신청 CTA 5개는 모두 아래 공개 신청 Form으로 연결한다.

https://docs.google.com/forms/d/e/1FAIpQLSexXAz-nPeEzGfxV085CGhb12llUQeQJUsNsDn4oy-G0X212A/viewform

신청 링크는 새 탭으로 열리며 사이트 자체에서는 신청 정보를 저장하거나 전송하지 않는다.

## GitHub Pages 배포 방법

아래는 배포가 승인된 이후 적용할 방법이다.

1. 이 폴더의 **내용만** 별도 사이트 저장소의 루트에 넣는다. index.html, .nojekyll과 assets 폴더의 상대 위치를 유지한다.
2. GitHub 저장소의 Settings → Pages로 이동한다.
3. Build and deployment의 Source를 Deploy from a branch로 선택한다.
4. 사이트 파일을 저장한 branch와 /(root)를 선택하고 Save한다.
5. Pages에 표시되는 사이트 주소에서 모바일 화면, 이미지, 확대 보기, FAQ 및 신청 링크를 확인한다.

별도 빌드 도구나 사용자 정의 배포 workflow는 필요하지 않다. 현재 번들 구성만으로 배포 설정을 활성화하거나 사이트가 공개되는 것은 아니다.

공식 안내: [GitHub Pages 게시 소스 설정](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), [정적 사이트와 .nojekyll](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

## 업데이트 규칙

원본 AI_SNS_MRR70 프로젝트에서 승인된 랜딩 구현과 자산만 반영한다. 검수 후 실행에 필요한 파일만 이 번들에 복사하고 상대경로·신청 링크·제공범위·이미지 로딩을 다시 확인한다. 이전 이미지 백업, 원본 프로젝트 전체, 고객 자료, 운영 문서, 검수 자료, 로컬 설정은 공개 사이트 저장소에 포함하지 않는다.
