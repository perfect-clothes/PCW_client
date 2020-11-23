# PCW_client
## 프로젝트 목표
- Server-Client communication exercise (서버-클라이언트 통신 연습)
- Collaborative development with Git (Git을 사용한 개발 협업)
## 목표 서비스 
1. **Recommend clothes for the weather (날씨에 맞는 옷차림 추천)**
    - Clothes for the current weather (현재 날씨에 맞는 옷)
2. **Weather check (날씨 확인)**
    - Current weather in your area (해당 지역의 현재 날씨)
    - All weather in the area every 3 hours (해당 지역의 날씨를 3시간 마다)
    - Allow user location permission to check the weather at that location (사용자 위치 권한을 허용하면 그 위치의 날씨 확인 가능)
    - City search available (도시 검색으로 원하는 도시의 날씨 확인)
3. **Weather news (날씨 관련 기사 확인)**
## 기능
- geolocation API를 사용하여 위치권한을 묻고, 사용자의 위치에 따른 날씨와 옷을 추천
- 도시를 검색하면 해당 도시의 위치정보를 서버에 전송하여 날씨 데이터를 가져옴
- 추천 받은 옷 항목을 클릭할 경우 네이버 검색 API를 이용하여 해당 옷의 이미지를 모달 형태로 보여줌
- 날씨 뉴스를 가져오고 뉴스 제목을 클릭할 경우 원본 페이지로 이동
- UX를 위한 loading state 관리 및 spinner를 이용한 loading UI 구현
- error 화면 및 검색 실패 모달 구현
- 낮과 밤에 따라 바뀌는 UI와 배경 설정
- 반응형 페이지 구현
- Github Actions와 AWS S3를 이용한 자동 빌드, 배포 구현
## Stack
### Frontend
- react
- react-hooks
- redux
- redux-saga
- redux-actions
- react-redux
- styled-components
- react-router-dom
- dotenv
- axios
- react-helmet-async
### CI/CD
- Github Actions
- AWS S3
- AWS Cloudfront
- AWS Route53
### 협업 툴
- Git
- Github
- Notion
- Figma

