(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{744:function(t,a,e){"use strict";e.r(a);var s=e(0),v=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"노드-업그레이드-하기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#노드-업그레이드-하기"}},[t._v("#")]),t._v(" 노드 업그레이드 하기")]),t._v(" "),e("p",[t._v("이 문서는 "),e("code",[t._v("gaiad")]),t._v(" 풀노드를 새로운 버전으로 업그레이드하는 절차를 설명합니다.")]),t._v(" "),e("h2",{attrs:{id:"소프트웨어-업그레이드"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#소프트웨어-업그레이드"}},[t._v("#")]),t._v(" 소프트웨어 업그레이드")]),t._v(" "),e("p",[t._v("우선 "),e("code",[t._v("gaiad")]),t._v(" 인스턴스를 중지하세요. 이후 소프트웨어를 업그레이드하세요:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y2QgZ2FpYQpnaXQgZmV0Y2ggLS1hbGwgJmFtcDsmYW1wOyBnaXQgY2hlY2tvdXQgJmx0O25ld192ZXJzaW9uJmd0OwptYWtlIGluc3RhbGwK"}}),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",[e("em",[t._v("참고")]),t._v(": 이번 단계에서 문제가 발생하는 경우, 최신 스테이블 버전의 Go가 설치되어있는지 확인하세요.")])]),t._v(" "),e("p",[t._v("최신 퍼블릭 테스트넷에 필요한 버전 정보를 확인하기 위해서는 "),e("a",{attrs:{href:"https://github.com/cosmos/testnets",target:"_blank",rel:"noopener noreferrer"}},[t._v("테스트넷 리포"),e("OutboundLink")],1),t._v("를 참고하시고, 각 릴리즈에 대한 자세한 정보는 "),e("a",{attrs:{href:"https://github.com/cosmos/Gaia/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gaia 릴리즈 페이지"),e("OutboundLink")],1),t._v("를 참고하세요.")]),t._v(" "),e("p",[t._v("이제 풀노드가 깔끔하게 업그레이드되었습니다.")]),t._v(" "),e("h2",{attrs:{id:"제네시스-파일-업그레이드하기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#제네시스-파일-업그레이드하기"}},[t._v("#")]),t._v(" 제네시스 파일 업그레이드하기")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",[t._v("만약 업그레이드를 진행하는 새로운 버전에 'breaking change'가 포함되어있는 경우, 블록체인을 재시작해야합니다. 만약 'breaking change'가 없는 경우, "),e("a",{attrs:{href:"#restart"}},[t._v("리스타트")]),t._v("로 넘어가셔도 좋습니다.")]),t._v(" "),e("p",[t._v("제네시스 파일을 업그레이드하기 위해서는 신뢰할 수 있는 소스에서 받으시거나 로컬 환경에서 내보내실 수 있습니다.")]),t._v(" "),e("h3",{attrs:{id:"신뢰하는-소스에서-받기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#신뢰하는-소스에서-받기"}},[t._v("#")]),t._v(" 신뢰하는 소스에서 받기")]),t._v(" "),e("p",[t._v("메인넷을 참가하시는 경우, "),e("a",{attrs:{href:"https://github.com/cosmos/launch",target:"_blank",rel:"noopener noreferrer"}},[t._v("mainnet repo"),e("OutboundLink")],1),t._v("에서 제네시스를 받으세요. 만약 퍼블릭 테스트넷을 참가하시는 경우, "),e("a",{attrs:{href:"https://github.com/cosmos/testnets",target:"_blank",rel:"noopener noreferrer"}},[t._v("testnet repo"),e("OutboundLink")],1),t._v("에서 올바른 테스트넷 제네시스 파일을 받으세요. 이 외의 경우, 신뢰할 수 있는 소스에서 제네시스 파일을 받으세요.")]),t._v(" "),e("p",[t._v("새로운 제네시스 파일을 "),e("code",[t._v("new_genesis.json")]),t._v("으로 저장하세요. 이후, 오래된 "),e("code",[t._v("genesis.json")]),t._v("을 "),e("code",[t._v("new_genesis.json")]),t._v("으로 바꾸세요.")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y2QgJEhPTUUvLmdhaWFkL2NvbmZpZwpjcCAtZiBnZW5lc2lzLmpzb24gbmV3X2dlbmVzaXMuanNvbgptdiBuZXdfZ2VuZXNpcy5qc29uIGdlbmVzaXMuanNvbgo="}}),t._v(" "),e("p",[t._v("이제 "),e("a",{attrs:{href:"#reset-data"}},[t._v("reset data")]),t._v(" 항목으로 넘어가세요.")]),t._v(" "),e("h3",{attrs:{id:"로컬-환경에서-새로운-제네시스-내보내기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#로컬-환경에서-새로운-제네시스-내보내기"}},[t._v("#")]),t._v(" 로컬 환경에서 새로운 제네시스 내보내기")]),t._v(" "),e("p",[t._v("만약 과거 네트워크 버전에서 노드를 운영하셨고 로컬 환경에서 과거 네트워크의 제네시스 파일을 내보내시는 경우, 다음 명령어를 사용하세요:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y2QgJEhPTUUvLmdhaWFkL2NvbmZpZwpnYWlhZCBleHBvcnQgLS1mb3ItemVyby1oZWlnaHQgLS1oZWlnaHQ9Jmx0O+uCtOuztOuCtOuKlF/ruJTroZ1f64aS7J20KGV4cG9ydC1oZWlnaHQpJmd0OyAmZ3Q7IG5ld19nZW5lc2lzLmpzb24K"}}),t._v(" "),e("p",[t._v("위 명령어는 특정 블록 높이("),e("code",[t._v("<내보내는_블록_높이(export-height)>")]),t._v(")의 상태를 기반으로 새로운 제네시스 파일을 생성합니다. 이 제네시스 파일은 새로운 네트워크를 시작하는데 사용됩니다.")]),t._v(" "),e("p",[t._v("이제 오래된 "),e("code",[t._v("genesis.json")]),t._v("을 "),e("code",[t._v("new_genesis.json")]),t._v("으로 바꾸세요:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y3AgLWYgZ2VuZXNpcy5qc29uIG5ld19nZW5lc2lzLmpzb24KbXYgbmV3X2dlbmVzaXMuanNvbiBnZW5lc2lzLmpzb24K"}}),t._v(" "),e("p",[t._v("이 상태에서 내보낸 제네시스 파일을 새로운 버전과 호환되는 제네시스 파일로 변환하는 스크립트를 실행하셔야될 수 있습니다. 예를 들어, "),e("code",[t._v("Account")]),t._v(" 타입의 형태가 바뀐경우, 스크립트는 account store에서 인코딩된 계정을 확인하고, 언마셜하고, 타입을 업데이트한 후 다시 마셜링을 진행한 다음에 복구하는 작업을 진행합니다. 스크립트의 예시는 "),e("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/master/contrib/export/v0.33.x-to-v0.34.0.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("여기"),e("OutboundLink")],1),t._v(".를 참고하세요")]),t._v(" "),e("h2",{attrs:{id:"데이터-리셋하기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#데이터-리셋하기"}},[t._v("#")]),t._v(" 데이터 리셋하기")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",[t._v("만약 업그레이드하는 <새로운_버전(new_version)>에 'breaking change'가 포함되는 않은 경우, 데이터를 리셋할 필요가 없습니다. 만약 'breaking change'가 포함되지 않은 경우, 바로 "),e("a",{attrs:{href:"#restart"}},[t._v("Restart")]),t._v(" 항목으로 넘어가세요.")])])],1),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",[t._v("메인넷에서 "),e("strong",[t._v("검증인 노드")]),t._v("를 운영하시는 경우, "),e("code",[t._v("gaiad unsafe-reset-all")]),t._v(" 명령어를 실행하실때 주의를 기울이세요. "),e("code",[t._v("chain-id")]),t._v("를 변경하지 않는 이상 이 명령어를 실행할 필요가 없습니다.")])]),t._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[t._v("중요")]),t._v(" "),e("p",[t._v("각 노드가 고유한 "),e("code",[t._v("priv_validator.json")]),t._v(" 파일을 가지고 있는 것을 확인하세요. 절대로 과거 노드에서 "),e("code",[t._v("priv_validator.json")]),t._v("을 복사하여 다수의 신규 노드에 붙혀넣지 마세요. 다수의 동일한 "),e("code",[t._v("priv_validator.json")]),t._v("을 가진 노드가 존재하는 경우 더블 사이닝으로 슬래싱될 수 있습니다.")])]),t._v(" "),e("p",[t._v("우선 오래된 파일을 삭제하시고 데이터를 리셋하세요.\n"),e("strong",[t._v("만약 검증인 노드를 운영하시는 경우, 이 단계를 진행하기 전 따르는 위험을 충분히 숙지하고 진행하세요")]),t._v(".")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgdW5zYWZlLXJlc2V0LWFsbAo="}}),t._v(" "),e("p",[t._v("이제 노드는 "),e("code",[t._v("priv_validator.json")]),t._v("과 "),e("code",[t._v("config.toml")]),t._v("외의 모들 파일이 리셋되었습니다. 업그레이드된 노드는 기존의 연결되었던 센트리 노드와 풀 노드가 존재하는 경우 연결을 시도할 수 있으나, 함께 업그레이드가 진행되지 않으면 연결이 실패할 수 있습니다.")]),t._v(" "),e("h2",{attrs:{id:"노드-다시-시작하기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#노드-다시-시작하기"}},[t._v("#")]),t._v(" 노드 다시 시작하기")]),t._v(" "),e("p",[t._v("노드를 다시 시작하기 위해서는 다음 명령어를 실행하세요:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgc3RhcnQK"}})],1)}),[],!1,null,null,null);a.default=v.exports}}]);