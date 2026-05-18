#  Gabia에서 DNS 설정하기

Gabia에 로그인한 뒤 `logk.co.kr`의 DNS 관리 패널을 엽니다.

아래 레코드를 추가하세요.

### `www.logk.co.kr`용 (CNAME)

| Type | Host | Value | TTL |
|------|------|-------|-----|
| CNAME | `www` | `logk-dev.github.io` | 3600 |

`logk-dev`는 회사 리포지토리를 소유한 실제 GitHub 조직(Organization) 사용자명으로 바꿔주세요. 이 레코드는 `www.logk.co.kr`을 GitHub Pages 주소의 별칭(alias)으로 연결합니다.

### `logk.co.kr`용 (apex domain, A 레코드)

아래 4개의 A 레코드를 모두 추가하세요. GitHub는 이중화를 위해 여러 IP를 사용합니다.

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A | `@` | `185.199.108.153` | 3600 |
| A | `@` | `185.199.109.153` | 3600 |
| A | `@` | `185.199.110.153` | 3600 |
| A | `@` | `185.199.111.153` | 3600 |

`@`는 apex 도메인 자체(`logk.co.kr`)를 의미합니다. 커스텀 도메인 검증이 완료되면 GitHub Pages가 `logk.co.kr`을 `www.logk.co.kr`로 자동 리디렉션합니다.

**DNS 전파를 기다리세요.** 보통 5~30분이 걸리지만 최대 48시간까지 걸릴 수 있습니다. [dnschecker.org](https://dnschecker.org)에서 `www.logk.co.kr`을 입력해 전파 상태를 확인할 수 있습니다.
