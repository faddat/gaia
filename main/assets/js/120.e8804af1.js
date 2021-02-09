(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{669:function(v,_,d){"use strict";d.r(_);var c=d(0),o=Object(c.a)({},(function(){var v=this,_=v.$createElement,d=v._self._c||_;return d("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[d("h1",{attrs:{id:"제네시스-파일"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#제네시스-파일"}},[v._v("#")]),v._v(" 제네시스 파일")]),v._v(" "),d("p",[v._v("이 문서는 코스모스 허브 메인넷의 제네시스 파일의 구조를 설명합니다. 또한, 자체 gaia 테스트넷을 운영하기 위해 자체적으로 제네시스 파일을 작성하는 방법을 설명합니다.")]),v._v(" "),d("p",[v._v("참고로 기본 설정이 적용된 제네시스 파일을 사용해 테스트넷을 운영하기 위해서는 다음 명령어를 입력할 수 있습니다:")]),v._v(" "),d("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgaW5pdCAmbHQ766qF7LmtKG1vbmlrZXIpJmd0OyAtLWNoYWluLWlkICZsdDvssrTsnbhf7JWE7J2065SUKGNoYWluLWlkKSZndDsK"}}),v._v(" "),d("p",[v._v("제네시스 파일은 "),d("code",[v._v("~/.gaiad/config/genesis.toml")]),v._v("에 저장됩니다.")]),v._v(" "),d("h2",{attrs:{id:"제네시스-파일은-무엇인가"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#제네시스-파일은-무엇인가"}},[v._v("#")]),v._v(" 제네시스 파일은 무엇인가?")]),v._v(" "),d("p",[v._v("제네시스 파일은 블록체인 초기 상태(state)를 정의하는 JSON 파일입니다. 이는 실질적으로 블록 높이 "),d("code",[v._v("0")]),v._v("을 뜻하며, 첫 블록이 생성되는 "),d("code",[v._v("1")]),v._v(" 블록은 제네시스 파일을 패런트(parent)로 참조합니다.")]),v._v(" "),d("p",[v._v("제네시스 파일에 정의된 상태는 토큰 분배, 제네시스 시간, 기본 파라미터 값 등의 모든 필수 정보를 포함하고 있습니다. 각 정보를 항목별로 정리합니다.")]),v._v(" "),d("h2",{attrs:{id:"제네시스-시간과-체인-아이디"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#제네시스-시간과-체인-아이디"}},[v._v("#")]),v._v(" 제네시스 시간과 체인 아이디")]),v._v(" "),d("p",[d("code",[v._v("genesis_time")]),v._v("은 제네시스 파일 상단에 정의됩니다. 제네시스 타임은 블록체인이 시작되는 "),d("code",[v._v("UTC")]),v._v(" 기준 시간을 정의합니다. 해당 시간에 도달하면 제네시스 검증인은 온라인어 컨센서스 과정에 참여를 시작합니다. 블록체인은 제네시스 검증인의 2/3 이상이 (보팅 파워 기준으로) 온라인될 경우에 시작됩니다.")]),v._v(" "),d("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"JnF1b3Q7Z2VuZXNpc190aW1lJnF1b3Q7OiAmcXVvdDsyMDE5LTAzLTEzVDE3OjAwOjAwLjAwMDAwMDAwMFomcXVvdDssCg=="}}),v._v(" "),d("p",[d("code",[v._v("chain_id")]),v._v("는 블록체인의 고유 식별 정보입니다. 동일한 소프트웨어를 운영하는 다양한 체인을 구별하기 위해 사용됩니다.")]),v._v(" "),d("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"JnF1b3Q7Y2hhaW5faWQmcXVvdDs6ICZxdW90O2Nvc21vc2h1Yi0yJnF1b3Q7LAo="}}),v._v(" "),d("h2",{attrs:{id:"컨센서스-파라미터"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#컨센서스-파라미터"}},[v._v("#")]),v._v(" 컨센서스 파라미터")]),v._v(" "),d("p",[v._v("이후 제네시스 파일은 컨센서스 파라미터 값을 정의합니다. 컨센서스 파라미터는 모든 합의 계층("),d("code",[v._v("gaia")]),v._v("의 경우 "),d("code",[v._v("Tendermint")]),v._v(" 계층) 관련 값을 리그룹(regroup)합니다. 파라미터 값에 대해 알아보겠습니다:")]),v._v(" "),d("ul",[d("li",[d("code",[v._v("block")]),v._v(" "),d("ul",[d("li",[d("code",[v._v("max_bytes")]),v._v(": 블록 최대 바이트 크기")]),v._v(" "),d("li",[d("code",[v._v("max_gas")]),v._v(": 블록 가스 한도(gas limit). 블록에 포함되는 모든 트랜잭션은 가스를 소모합니다. 블록에 포함되어있는 트랜잭션들의 총 가스 사용량은 이 한도를 초과할 수 없습니다.")])])]),v._v(" "),d("li",[d("code",[v._v("evidence")]),v._v(" "),d("ul",[d("li",[d("code",[v._v("max_age")]),v._v(": 증거(evidence)는 검증인이 동일한 블록 높이와 합의 라운드(round)에서 두개의 블록을 동시했다는 증거입니다. 위와 같은 행동은 명백한 악의적 행동으로 간주되며 스테이트 머신 계층에서 페널티를 부과합니다. "),d("code",[v._v("max_age")]),v._v(" 값은 증거 유효성이 유지되는 최대 "),d("em",[v._v("블록")]),v._v(" 개수를 의미합니다.")])])]),v._v(" "),d("li",[d("code",[v._v("validator")]),v._v(" "),d("ul",[d("li",[d("code",[v._v("pub_key_types")]),v._v(": 검증인이 사용할 수 있는 pubkey 형태입니다("),d("code",[v._v("ed25519")]),v._v(", "),d("code",[v._v("secp256k1")]),v._v(", ...). 현재 "),d("code",[v._v("ed25519")]),v._v("만 지원됩니다.")])])])]),v._v(" "),d("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"JnF1b3Q7Y29uc2Vuc3VzX3BhcmFtcyZxdW90OzogewogICAgJnF1b3Q7YmxvY2tfc2l6ZSZxdW90OzogewogICAgICAmcXVvdDttYXhfYnl0ZXMmcXVvdDs6ICZxdW90OzE1MDAwMCZxdW90OywKICAgICAgJnF1b3Q7bWF4X2dhcyZxdW90OzogJnF1b3Q7MTUwMDAwMCZxdW90OwogICAgfSwKICAgICZxdW90O2V2aWRlbmNlJnF1b3Q7OiB7CiAgICAgICZxdW90O21heF9hZ2UmcXVvdDs6ICZxdW90OzEwMDAwMDAmcXVvdDsKICAgIH0sCiAgICAmcXVvdDt2YWxpZGF0b3ImcXVvdDs6IHsKICAgICAgJnF1b3Q7cHViX2tleV90eXBlcyZxdW90OzogWwogICAgICAgICZxdW90O2VkMjU1MTkmcXVvdDsKICAgICAgXQogICAgfQogIH0sCg=="}}),v._v(" "),d("h2",{attrs:{id:"애플리케이션-상태"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#애플리케이션-상태"}},[v._v("#")]),v._v(" 애플리케이션 상태")]),v._v(" "),d("p",[v._v("애플리케이션 상태(application state)는 스테이트 머신(상태 기계, state machine)의 초기 상태를 정의합니다.")]),v._v(" "),d("h3",{attrs:{id:"제네시스-계정"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#제네시스-계정"}},[v._v("#")]),v._v(" 제네시스 계정")]),v._v(" "),d("p",[v._v("이 항목에서는 초기 토큰 분배가 정의됩니다. 수동으로 제네시스 파일에 계정을 추가할 수 있지만, 다음 명령어를 통해 계정을 추가할 수도 있습니다:")]),v._v(" "),d("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Ly8g7JiI7IucOiBnYWlhZCBhZGQtZ2VuZXNpcy1hY2NvdW50IGNvc21vczFxczh0bncydDhsNmFtdHp2ZGVtbm5zcTlkemswYWcwejM3Z2gzaCAxMDAwMDAwMHVhdG9tCgpnYWlhZCBhZGQtZ2VuZXNpcy1hY2NvdW50ICZsdDvqs4TsoJVf7KO87IaMKGFjY291bnRfYWRkcmVzcykmZ3Q7ICZsdDvsiJjrn4koYW1vdW50KSZndDsgJmx0O+uLqOychChkZW5vbSkmZ3Q7Cg=="}}),v._v(" "),d("p",[v._v("위 명령어는 "),d("code",[v._v("app_state")]),v._v(" 항목 내 "),d("code",[v._v("accounts")]),v._v(" 리스트에 아이템을 추가합니다.")]),v._v(" "),d("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"JnF1b3Q7YWNjb3VudHMmcXVvdDs6IFsKICAgICAgewogICAgICAgICZxdW90O2FkZHJlc3MmcXVvdDs6ICZxdW90O2Nvc21vczFxczh0bncydDhsNmFtdHp2ZGVtbm5zcTlkemswYWcwejM3Z2gzaCZxdW90OywKICAgICAgICAmcXVvdDtjb2lucyZxdW90OzogWwogICAgICAgICAgewogICAgICAgICAgICAmcXVvdDtkZW5vbSZxdW90OzogJnF1b3Q7dWF0b20mcXVvdDssCiAgICAgICAgICAgICZxdW90O2Ftb3VudCZxdW90OzogJnF1b3Q7MTAwMDAwMDAmcXVvdDsKICAgICAgICAgIH0KICAgICAgICBdLAogICAgICAgICZxdW90O3NlcXVlbmNlX251bWJlciZxdW90OzogJnF1b3Q7MCZxdW90OywKICAgICAgICAmcXVvdDthY2NvdW50X251bWJlciZxdW90OzogJnF1b3Q7MCZxdW90OywKICAgICAgICAmcXVvdDtvcmlnaW5hbF92ZXN0aW5nJnF1b3Q7OiBbCiAgICAgICAgICB7CiAgICAgICAgICAgICZxdW90O2Rlbm9tJnF1b3Q7OiAmcXVvdDt1YXRvbSZxdW90OywKICAgICAgICAgICAgJnF1b3Q7YW1vdW50JnF1b3Q7OiAmcXVvdDsyNjMwNjAwMDAwMCZxdW90OwogICAgICAgICAgfQogICAgICAgIF0sCiAgICAgICAgJnF1b3Q7ZGVsZWdhdGVkX2ZyZWUmcXVvdDs6IG51bGwsCiAgICAgICAgJnF1b3Q7ZGVsZWdhdGVkX3Zlc3RpbmcmcXVvdDs6IG51bGwsCiAgICAgICAgJnF1b3Q7c3RhcnRfdGltZSZxdW90OzogJnF1b3Q7MCZxdW90OywKICAgICAgICAmcXVvdDtlbmRfdGltZSZxdW90OzogJnF1b3Q7MTAwMDAmcXVvdDsKICAgICAgfQpdCg=="}}),v._v(" "),d("p",[v._v("각 파라미터 값을 항목별로 설명하겠습니다:")]),v._v(" "),d("ul",[d("li",[d("code",[v._v("sequence_number")]),v._v(": 이 숫자는 계정이 전송한 트랜잭션 수를 추적하는데 사용됩니다. 트랜잭션이 블록에 포함될 때마다 숫자가 증가하며 리플레이 공격(replay attack)을 방지하기 위해 사용됩니다. 기본 값은 "),d("code",[v._v("0")]),v._v(" 입니다.")]),v._v(" "),d("li",[d("code",[v._v("account_number")]),v._v(": 계정 고유 식별번호입니다. 해당 계정의 첫 트랜잭션이 블록에 포함될때 생성됩니다.")]),v._v(" "),d("li",[d("code",[v._v("original_vesting")]),v._v(": "),d("code",[v._v("gaia")]),v._v("는 베스팅(락업) 기능을 지원합니다. 락업 계정이 소유한 토큰 수량을 지정하고, 토큰 전송이 가능할때까지의 시간을 정할 수 있습니다. 락업된 토큰의 스테이킹은 지원됩니다. 기본 값은 "),d("code",[v._v("null")]),v._v("입니다.")]),v._v(" "),d("li",[d("code",[v._v("delegated_free")]),v._v(": 락업이 풀린 후 전송될 수 있는 위임된 수량을 뜻합니다. 대부분 제네시스 상황에서는 "),d("code",[v._v("null")]),v._v("이 표준 값입니다.")]),v._v(" "),d("li",[d("code",[v._v("delegated_vesting")]),v._v(": 아직 락업이 진행중인 위임된 수량을 뜻합니다. 대분분 제네시스 상황에서는 "),d("code",[v._v("null")]),v._v("이 표준 값입니다.")]),v._v(" "),d("li",[d("code",[v._v("start_time")]),v._v(": 락업이 풀리는 시점의 블록 높이입니다. 대부분 제네시스 상황에서는 "),d("code",[v._v("0")]),v._v("이 표준 값입니다.")]),v._v(" "),d("li",[d("code",[v._v("end_time")]),v._v(": 락업 기간이 마감되는 시점의 블록 높이입니다. 락업이 없는 계정의 표준 값은 "),d("code",[v._v("0")]),v._v("입니다.")])]),v._v(" "),d("h3",{attrs:{id:"뱅크-bank"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#뱅크-bank"}},[v._v("#")]),v._v(" 뱅크(Bank)")]),v._v(" "),d("p",[d("code",[v._v("bank")]),v._v(" 모듈은 토큰을 관리합니다. 이 항목에서 정의될 파라미터는 제네시스 시작시 전송 가능여부를 정의하는 것입니다.")]),v._v(" "),d("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"JnF1b3Q7YmFuayZxdW90OzogewogICAgICAmcXVvdDtzZW5kX2VuYWJsZWQmcXVvdDs6IGZhbHNlCiAgICB9Cg=="}}),v._v(" "),d("h3",{attrs:{id:"스테이킹-staking"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#스테이킹-staking"}},[v._v("#")]),v._v(" 스테이킹(Staking)")]),v._v(" "),d("p",[d("code",[v._v("staking")]),v._v(" 모듈은 스테이트 머신의 지분증명(proof-of-stake) 로직의 대다수를 처리합니다. 이 항목은 다음과 같습니다:")]),v._v(" "),d("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"JnF1b3Q7c3Rha2luZyZxdW90OzogewogICAgICAmcXVvdDtwb29sJnF1b3Q7OiB7CiAgICAgICAgJnF1b3Q7bm90X2JvbmRlZF90b2tlbnMmcXVvdDs6ICZxdW90OzEwMDAwMDAwJnF1b3Q7LAogICAgICAgICZxdW90O2JvbmRlZF90b2tlbnMmcXVvdDs6ICZxdW90OzAmcXVvdDsKICAgICAgfSwKICAgICAgJnF1b3Q7cGFyYW1zJnF1b3Q7OiB7CiAgICAgICAgJnF1b3Q7dW5ib25kaW5nX3RpbWUmcXVvdDs6ICZxdW90OzE4MTQ0MDAwMDAwMDAwMDAmcXVvdDssCiAgICAgICAgJnF1b3Q7bWF4X3ZhbGlkYXRvcnMmcXVvdDs6IDEwMCwKICAgICAgICAmcXVvdDttYXhfZW50cmllcyZxdW90OzogNywKICAgICAgICAmcXVvdDtib25kX2Rlbm9tJnF1b3Q7OiAmcXVvdDt1YXRvbSZxdW90OwogICAgICB9LAogICAgICAmcXVvdDtsYXN0X3RvdGFsX3Bvd2VyJnF1b3Q7OiAmcXVvdDswJnF1b3Q7LAogICAgICAmcXVvdDtsYXN0X3ZhbGlkYXRvcl9wb3dlcnMmcXVvdDs6IG51bGwsCiAgICAgICZxdW90O3ZhbGlkYXRvcnMmcXVvdDs6IG51bGwsCiAgICAgICZxdW90O2JvbmRzJnF1b3Q7OiBudWxsLAogICAgICAmcXVvdDt1bmJvbmRpbmdfZGVsZWdhdGlvbnMmcXVvdDs6IG51bGwsCiAgICAgICZxdW90O3JlZGVsZWdhdGlvbnMmcXVvdDs6IG51bGwsCiAgICAgICZxdW90O2V4cG9ydGVkJnF1b3Q7OiBmYWxzZQogICAgfQo="}}),v._v(" "),d("p",[v._v("각 파라미터 값에 대해 알아보겠습니다:")]),v._v(" "),d("ul",[d("li",[d("code",[v._v("pool")]),v._v(" "),d("ul",[d("li",[d("code",[v._v("not_bonded_tokens")]),v._v(": 제네시스 시점에서 위임되지 않은 토큰의 수량을 정의합니다. 대부분의 상황에서 이 값은 스테이킹 토큰의 총 발행량을 뜻합니다 (이 예시에서는 "),d("code",[v._v("uatom")]),v._v(" 단위로 정의됩니다).")]),v._v(" "),d("li",[d("code",[v._v("bonded_tokens")]),v._v(": 제네시스 시점에서 위임된 토큰의 수량입니다. 대부분 상황에서 이 값은 "),d("code",[v._v("0")]),v._v("입니다.")])])]),v._v(" "),d("li",[d("code",[v._v("params")]),v._v(" "),d("ul",[d("li",[d("code",[v._v("unbonding_time")]),v._v(": 토큰의 언본딩이 완료될 때까지의 기간을 "),d("em",[v._v("나노초(nanosecond)")]),v._v(" 단위로 정의합니다.")]),v._v(" "),d("li",[d("code",[v._v("max_validators")]),v._v(": 최대 검증인 수입니다.")]),v._v(" "),d("li",[d("code",[v._v("max_entries")]),v._v(": 특정 검증인/위임자 쌍에서 동시에 진행될 수 있는 최대 언본딩/재위임 회수.")]),v._v(" "),d("li",[d("code",[v._v("bond_denom")]),v._v(": 스테이킹 토큰 단위.")])])]),v._v(" "),d("li",[d("code",[v._v("last_total_power")]),v._v(": 보팅 파워 수치. 통상 제네시스 시점에서 "),d("code",[v._v("0")]),v._v("입니다 (다만, 과거 블록체인 상태를 기반으로 제네시스가 생성되었을 경우 다를 수 있습니다).")]),v._v(" "),d("li",[d("code",[v._v("last_validator_powers")]),v._v(": 각 검증인의 가장 최근 보팅 파워 수치입니다. 통상 제네시스 시점에서 "),d("code",[v._v("null")]),v._v("입니다. (다만, 과거 블록체인 상태를 기반으로 제네시스가 생성되었을 경우 다를 수 있습니다).")]),v._v(" "),d("li",[d("code",[v._v("validators")]),v._v(": 가장 최근 검증인 목록. 통상 제네시스 시점에서 "),d("code",[v._v("null")]),v._v("입니다. (다만, 과거 블록체인 상태를 기반으로 제네시스가 생성되었을 경우 다를 수 있습니다).")]),v._v(" "),d("li",[d("code",[v._v("bonds")]),v._v(": 가장 최근 위임 목록입니다. 통상 제네시스 시점에서 "),d("code",[v._v("null")]),v._v("입니다. (다만, 과거 블록체인 상태를 기반으로 제네시스가 생성되었을 경우 다를 수 있습니다).")]),v._v(" "),d("li",[d("code",[v._v("unbonding_delegations")]),v._v(": 가장 최근 위임 취소 목록입니다. 통상 제네시스 시점에서 "),d("code",[v._v("null")]),v._v("입니다. (다만, 과거 블록체인 상태를 기반으로 제네시스가 생성되었을 경우 다를 수 있습니다).")]),v._v(" "),d("li",[d("code",[v._v("redelegations")]),v._v(": 가장 최근 재위임 목록입니다. 통상 제네시스 시점에서 "),d("code",[v._v("null")]),v._v("입니다. (다만, 과거 블록체인 상태를 기반으로 제네시스가 생성되었을 경우 다를 수 있습니다).")]),v._v(" "),d("li",[d("code",[v._v("exported")]),v._v(": 제네시스 파일이 과거 상태를 기반을 내보내어 작성된 여부.")])]),v._v(" "),d("h3",{attrs:{id:"민트-mint"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#민트-mint"}},[v._v("#")]),v._v(" 민트(mint)")]),v._v(" "),d("p",[d("code",[v._v("mint")]),v._v(" 모듈은 토큰 발행량의 인플레이션 관련 로직을 처리합니다. 제네시스 파일의 "),d("code",[v._v("mint")]),v._v(" 항목은 다음과 같습니다:")]),v._v(" "),d("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"JnF1b3Q7bWludCZxdW90OzogewogICAgICAmcXVvdDttaW50ZXImcXVvdDs6IHsKICAgICAgICAmcXVvdDtpbmZsYXRpb24mcXVvdDs6ICZxdW90OzAuMDcwMDAwMDAwMDAwMDAwMDAwJnF1b3Q7LAogICAgICAgICZxdW90O2FubnVhbF9wcm92aXNpb25zJnF1b3Q7OiAmcXVvdDswLjAwMDAwMDAwMDAwMDAwMDAwMCZxdW90OwogICAgICB9LAogICAgICAmcXVvdDtwYXJhbXMmcXVvdDs6IHsKICAgICAgICAmcXVvdDttaW50X2Rlbm9tJnF1b3Q7OiAmcXVvdDt1YXRvbSZxdW90OywKICAgICAgICAmcXVvdDtpbmZsYXRpb25fcmF0ZV9jaGFuZ2UmcXVvdDs6ICZxdW90OzAuMTMwMDAwMDAwMDAwMDAwMDAwJnF1b3Q7LAogICAgICAgICZxdW90O2luZmxhdGlvbl9tYXgmcXVvdDs6ICZxdW90OzAuMjAwMDAwMDAwMDAwMDAwMDAwJnF1b3Q7LAogICAgICAgICZxdW90O2luZmxhdGlvbl9taW4mcXVvdDs6ICZxdW90OzAuMDcwMDAwMDAwMDAwMDAwMDAwJnF1b3Q7LAogICAgICAgICZxdW90O2dvYWxfYm9uZGVkJnF1b3Q7OiAmcXVvdDswLjY3MDAwMDAwMDAwMDAwMDAwMCZxdW90OywKICAgICAgICAmcXVvdDtibG9ja3NfcGVyX3llYXImcXVvdDs6ICZxdW90OzYzMTE1MjAmcXVvdDsKICAgICAgfQogICAgfQo="}}),v._v(" "),d("p",[v._v("각 파라미터 값에 대해 알아보겠습니다:")]),v._v(" "),d("ul",[d("li",[d("code",[v._v("minter")]),v._v(" "),d("ul",[d("li",[d("code",[v._v("inflation")]),v._v(": 토큰 총 발행량의 기본 연간 인플레이션 % (주 단위 복리 기준). "),d("code",[v._v("0.070000000000000000")]),v._v(" 값은 주 단위 복리 기준으로 연간 "),d("code",[v._v("7%")]),v._v(" 인플레이션을 뜻합니다.")]),v._v(" "),d("li",[d("code",[v._v("annual_provisions")]),v._v(": 매 블록마다 계산됨. 기본 값은 "),d("code",[v._v("0.000000000000000000")]),v._v("으로 시작합니다.")])])]),v._v(" "),d("li",[d("code",[v._v("params")]),v._v(" "),d("ul",[d("li",[d("code",[v._v("mint_denom")]),v._v(": 인플레이션 대상 스테이킹 토큰의 단위.")]),v._v(" "),d("li",[d("code",[v._v("inflation_rate_change")]),v._v(": 연간 인플레이션 변화율.")]),v._v(" "),d("li",[d("code",[v._v("inflation_max")]),v._v(": 인플레이션 최대 수치.")]),v._v(" "),d("li",[d("code",[v._v("inflation_min")]),v._v(": 인플레이션 최소 수치.")]),v._v(" "),d("li",[d("code",[v._v("goal_bonded")]),v._v(": 총 발행량 중 위임 목표 % 수치. 만약 현재 위임 비율이 해당 이 값보다 낮은 경우, 인플레이션은 "),d("code",[v._v("inflation_rate_change")]),v._v(" 값을 따라 "),d("code",[v._v("inflation_max")]),v._v("까지 증가합니다. 반대로 현재 위임 비율이 이 수치보다 높을 경우 "),d("code",[v._v("inflation_rate_change")]),v._v(" 값을 따라 "),d("code",[v._v("inflation_min")]),v._v("까지 감소합니다.")]),v._v(" "),d("li",[d("code",[v._v("blocks_per_year")]),v._v(": 연간 생성되는 블록 예상 수치. 스테이킹 토큰 인플레이션으로 발생하는 토큰을 각 블록당 지급(블록 프로비젼, block provisions)하는데 계산하는 용도로 사용됩니다.")])])])]),v._v(" "),d("h3",{attrs:{id:"분배-distribution"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#분배-distribution"}},[v._v("#")]),v._v(" 분배(distribution)")]),v._v(" "),d("p",[d("code",[v._v("distribution")]),v._v(" 모듈은 블록당 위임 보상(block provision)을 검증인과 위임자에게 분배하는 로직을 처리합니다. 제네시스 파일의 "),d("code",[v._v("distribution")]),v._v(" 항목은 다음과 같습니다:")]),v._v(" "),d("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ICAgICZxdW90O2Rpc3RyaWJ1dGlvbiZxdW90OzogewogICAgICAmcXVvdDtmZWVfcG9vbCZxdW90OzogewogICAgICAgICZxdW90O2NvbW11bml0eV9wb29sJnF1b3Q7OiBudWxsCiAgICAgIH0sCiAgICAgICZxdW90O2NvbW11bml0eV90YXgmcXVvdDs6ICZxdW90OzAuMDIwMDAwMDAwMDAwMDAwMDAwJnF1b3Q7LAogICAgICAmcXVvdDtiYXNlX3Byb3Bvc2VyX3Jld2FyZCZxdW90OzogJnF1b3Q7MC4wMTAwMDAwMDAwMDAwMDAwMDAmcXVvdDssCiAgICAgICZxdW90O2JvbnVzX3Byb3Bvc2VyX3Jld2FyZCZxdW90OzogJnF1b3Q7MC4wNDAwMDAwMDAwMDAwMDAwMDAmcXVvdDssCiAgICAgICZxdW90O3dpdGhkcmF3X2FkZHJfZW5hYmxlZCZxdW90OzogZmFsc2UsCiAgICAgICZxdW90O2RlbGVnYXRvcl93aXRoZHJhd19pbmZvcyZxdW90OzogbnVsbCwKICAgICAgJnF1b3Q7cHJldmlvdXNfcHJvcG9zZXImcXVvdDs6ICZxdW90OyZxdW90OywKICAgICAgJnF1b3Q7b3V0c3RhbmRpbmdfcmV3YXJkcyZxdW90OzogbnVsbCwKICAgICAgJnF1b3Q7dmFsaWRhdG9yX2FjY3VtdWxhdGVkX2NvbW1pc3Npb25zJnF1b3Q7OiBudWxsLAogICAgICAmcXVvdDt2YWxpZGF0b3JfaGlzdG9yaWNhbF9yZXdhcmRzJnF1b3Q7OiBudWxsLAogICAgICAmcXVvdDt2YWxpZGF0b3JfY3VycmVudF9yZXdhcmRzJnF1b3Q7OiBudWxsLAogICAgICAmcXVvdDtkZWxlZ2F0b3Jfc3RhcnRpbmdfaW5mb3MmcXVvdDs6IG51bGwsCiAgICAgICZxdW90O3ZhbGlkYXRvcl9zbGFzaF9ldmVudHMmcXVvdDs6IG51bGwKICAgIH0K"}}),v._v(" "),d("p",[v._v("각 파라미터 값에 대해 알아보겠습니다:")]),v._v(" "),d("ul",[d("li",[d("code",[v._v("fee_pool")]),v._v(" "),d("ul",[d("li",[d("code",[v._v("community_pool")]),v._v(": 커뮤니티 풀은 임무 수행(개발, 커뮤니티 빌딩, 등)의 보상으로 제공될 수 있는 토큰 자금입니다. 토큰 풀의 사용은 거버넌스 프로포절을 통해 결정됩니다. 통상 제네시스 시점에서 "),d("code",[v._v("null")]),v._v("입니다.")])])]),v._v(" "),d("li",[d("code",[v._v("community_tax")]),v._v(": 블록 보상과 수수료 중 커뮤니티 풀로 예치될 '세금' %.")]),v._v(" "),d("li",[d("code",[v._v("base_proposer_reward")]),v._v(": 유효한 블록의 트랜잭션 수수료 중 블록 프로포저에게 지급될 리워드. 값이 "),d("code",[v._v("0.010000000000000000")]),v._v("인 경우, 수수료의 1%가 블록 프로포저에게 지급됩니다.")]),v._v(" "),d("li",[d("code",[v._v("bonus_proposer_reward")]),v._v(": 유효한 블록의 트랜잭션 수수료 중 블록 프로포저에게 지급될 리워드의 "),d("em",[v._v("최대 한도")]),v._v(". 보너스 수량은 블록 프로포저가 포함한 "),d("code",[v._v("precommit")]),v._v(" 수량에 비례합니다. 만약 프로포저가 보팅 파워 기준으로"),d("code",[v._v("precommit")]),v._v("의 2/3을 포함한 경우 (2/3는 유효한 블록을 생성하기 위한 최소 한도입니다), "),d("code",[v._v("base_proposer_reward")]),v._v(" 만큼의 보너스를 지급 받습니다. 보너스는 블록 프로포저가 "),d("code",[v._v("precommit")]),v._v("의 100%를 포함하는 경우 최대 "),d("code",[v._v("bonus_proposer_reward")]),v._v("까지 선의적(linearly)으로 증가합니다.")]),v._v(" "),d("li",[d("code",[v._v("withdraw_addr_enabled")]),v._v(": 파라미터 값이 "),d("code",[v._v("true")]),v._v("인 경우, 위임자는 위임 보상을 받을 별도의 주소를 지정할 수 있습니다. 제네시스에서 토큰 전송 기능을 비활성화하기 원하시는 경우, 토큰 전송 잠금 기능을 우회할 수 있으니 "),d("code",[v._v("false")]),v._v("로 설정하세요.")]),v._v(" "),d("li",[d("code",[v._v("delegator_withdraw_infos")]),v._v(": 위임자들의 보상 출금 주소 목록입니다. 과거 상태에서 제네시스가 생성되지 않은 경우 "),d("code",[v._v("null")]),v._v(" 값이 기본 값입니다.")]),v._v(" "),d("li",[d("code",[v._v("previous_proposer")]),v._v(": 지난 블록의 프로포저입니다. 과거 상태에서 제네시스가 생성되지 않은 경우 "),d("code",[v._v('""')]),v._v(" 값으로 입력하세요")]),v._v(" "),d("li",[d("code",[v._v("outstanding_rewards")]),v._v(": 보상 출금이 진행되지 않은 리워드입니다. 과거 상태에서 제네시스가 생성되지 않은 경우 "),d("code",[v._v("null")]),v._v(" 값이 기본 설정입니다.")]),v._v(" "),d("li",[d("code",[v._v("validator_accumulated_commission")]),v._v(": 검증인 커미션 중 출금되지 않은 커미션입니다. 과거 상태에서 제네시스가 생성되지 않은 경우 "),d("code",[v._v("null")]),v._v(" 값이 기본 설정입니다.")]),v._v(" "),d("li",[d("code",[v._v("validator_historical_rewards")]),v._v(": "),d("code",[v._v("distribution")]),v._v(" 모듈 연산 용도로 사용되는 검증인 과거 리워드 정보입니다. 과거 상태에서 제네시스가 생성되지 않은 경우 "),d("code",[v._v("null")]),v._v(" 값이 기본 설정입니다.")]),v._v(" "),d("li",[d("code",[v._v("validators_current_rewards")]),v._v(": "),d("code",[v._v("distribution")]),v._v(" 모듈 연산 용도로 사용되는 검증인 현재 리워드 정보입니다. 과거 상태에서 제네시스가 생성되지 않은 경우 "),d("code",[v._v("null")]),v._v(" 값이 기본 설정입니다.")]),v._v(" "),d("li",[d("code",[v._v("delegator_starting_infos")]),v._v(": 검증인 검증 기간, 위임자 스테이킹 토큰 수량, creation height (슬래싱이 발생한 경우 확인용) 정보입니다. "),d("code",[v._v("distribution")]),v._v(" 모듈 연산 용도로 사용되는 검증인 과거 리워드 정보입니다. 과거 상태에서 제네시스가 생성되지 않은 경우 "),d("code",[v._v("null")]),v._v(" 값이 기본 설정입니다.")]),v._v(" "),d("li",[d("code",[v._v("validator_slash_events")]),v._v(": 과거 검증인의 슬래싱 정보입니다. "),d("code",[v._v("distribution")]),v._v(" 모듈 연산 용도로 사용되는 검증인 과거 리워드 정보입니다. 과거 상태에서 제네시스가 생성되지 않은 경우 "),d("code",[v._v("null")]),v._v(" 값이 기본 설정입니다.")])]),v._v(" "),d("h3",{attrs:{id:"거버넌스-governance"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#거버넌스-governance"}},[v._v("#")]),v._v(" 거버넌스(governance)")]),v._v(" "),d("p",[d("code",[v._v("gov")]),v._v(" 모듈은 모든 거버넌스 관련 트랜잭션을 처리합니다. 제네시스 파일의 기본 "),d("code",[v._v("gov")]),v._v(" 항목은 다음과 같습니다:")]),v._v(" "),d("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"JnF1b3Q7Z292JnF1b3Q7OiB7CiAgICAgICZxdW90O3N0YXJ0aW5nX3Byb3Bvc2FsX2lkJnF1b3Q7OiAmcXVvdDsxJnF1b3Q7LAogICAgICAmcXVvdDtkZXBvc2l0cyZxdW90OzogbnVsbCwKICAgICAgJnF1b3Q7dm90ZXMmcXVvdDs6IG51bGwsCiAgICAgICZxdW90O3Byb3Bvc2FscyZxdW90OzogbnVsbCwKICAgICAgJnF1b3Q7ZGVwb3NpdF9wYXJhbXMmcXVvdDs6IHsKICAgICAgICAmcXVvdDttaW5fZGVwb3NpdCZxdW90OzogWwogICAgICAgICAgewogICAgICAgICAgICAmcXVvdDtkZW5vbSZxdW90OzogJnF1b3Q7dWF0b20mcXVvdDssCiAgICAgICAgICAgICZxdW90O2Ftb3VudCZxdW90OzogJnF1b3Q7NTEyMDAwMDAwJnF1b3Q7CiAgICAgICAgICB9CiAgICAgICAgXSwKICAgICAgICAmcXVvdDttYXhfZGVwb3NpdF9wZXJpb2QmcXVvdDs6ICZxdW90OzEyMDk2MDAwMDAwMDAwMDAmcXVvdDsKICAgICAgfSwKICAgICAgJnF1b3Q7dm90aW5nX3BhcmFtcyZxdW90OzogewogICAgICAgICZxdW90O3ZvdGluZ19wZXJpb2QmcXVvdDs6ICZxdW90OzEyMDk2MDAwMDAwMDAwMDAmcXVvdDsKICAgICAgfSwKICAgICAgJnF1b3Q7dGFsbHlfcGFyYW1zJnF1b3Q7OiB7CiAgICAgICAgJnF1b3Q7cXVvcnVtJnF1b3Q7OiAmcXVvdDswLjQmcXVvdDssCiAgICAgICAgJnF1b3Q7dGhyZXNob2xkJnF1b3Q7OiAmcXVvdDswLjUmcXVvdDssCiAgICAgICAgJnF1b3Q7dmV0byZxdW90OzogJnF1b3Q7MC4zMzQmcXVvdDssCiAgICAgICAgJnF1b3Q7Z292ZXJuYW5jZV9wZW5hbHR5JnF1b3Q7OiAmcXVvdDswLjAmcXVvdDsKICAgICAgfQogICAgfQo="}}),v._v(" "),d("p",[v._v("각 파라미터 값에 대해 알아보겠습니다:")]),v._v(" "),d("ul",[d("li",[d("code",[v._v("starting_proposal_id")]),v._v(": 이 파라미터는 첫 프로포절의 ID를 정의합니다. 각 프로포절은 고유한 ID를 보유합니다.")]),v._v(" "),d("li",[d("code",[v._v("deposits")]),v._v(": 각 프로포절 ID에 대한 보증금 목록입니다. 과거 상태에서 제네시스가 생성되지 않은 경우 "),d("code",[v._v("null")]),v._v(" 값이 기본 설정입니다.")]),v._v(" "),d("li",[d("code",[v._v("votes")]),v._v(": 각 프로포절 ID에 대한 투표 목록입니다. 과거 상태에서 제네시스가 생성되지 않은 경우 "),d("code",[v._v("null")]),v._v(" 값이 기본 설정입니다.")]),v._v(" "),d("li",[d("code",[v._v("votes")]),v._v(": 각 프로포절 ID에 대한 투표 목록입니다. 과거 상태에서 제네시스가 생성되지 않은 경우 "),d("code",[v._v("null")]),v._v(" 값이 기본 설정입니다.")]),v._v(" "),d("li",[d("code",[v._v("proposals")]),v._v(": 각 프로포절 ID에 대한 프로포절 목록입니다.")]),v._v(" "),d("li",[d("code",[v._v("deposit_params")]),v._v(" "),d("ul",[d("li",[d("code",[v._v("min_deposit")]),v._v(": 프로포절의 "),d("code",[v._v("voting period")]),v._v(" 단계를 시작하기 위해 필요한 최소 보증금 수량입니다. 만약 다수 단위를 적용할 경우 "),d("code",[v._v("OR")]),v._v(" 연산자를 사용하세요.")]),v._v(" "),d("li",[d("code",[v._v("max_deposit_period")]),v._v(": 프로포절 보증금 추가가 가능한 기간 ("),d("strong",[v._v("나노초(nanosecond)")]),v._v(" 단위로 입력). 이 기간이 지난 이후에는 프로포절 보증금 추가가 불가능합니다.")])])]),v._v(" "),d("li",[d("code",[v._v("voting_params")]),v._v(" "),d("ul",[d("li",[d("code",[v._v("voting_period")]),v._v(": 프로포절의 투표 기간("),d("strong",[v._v("나노초(nanosecond)")]),v._v(" 단위로 입력).")])])]),v._v(" "),d("li",[d("code",[v._v("tally_params")]),v._v(" "),d("ul",[d("li",[d("code",[v._v("quorum")]),v._v(": 프로포절 투표 결과가 유효하기 위한 위임된 스테이킹 토큰의 투표율.")]),v._v(" "),d("li",[d("code",[v._v("threshold")]),v._v(": 프로포절 투표가 통과하기 위해 필요한 최소 "),d("code",[v._v("YES")]),v._v(" 투표 %.")]),v._v(" "),d("li",[d("code",[v._v("veto")]),v._v(": 프로포절 투표 결과가 유효하기 위한 "),d("code",[v._v("NO_WITH_VETO")]),v._v(" 투표 %의 최대 한도.")]),v._v(" "),d("li",[d("code",[v._v("governance_penalty")]),v._v(": 프로포절 투표에 참여하지 않은 검증인들에 부과하는 페널티.")])])])]),v._v(" "),d("h3",{attrs:{id:"슬래싱-slashing"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#슬래싱-slashing"}},[v._v("#")]),v._v(" 슬래싱(slashing)")]),v._v(" "),d("p",[d("code",[v._v("slashing")]),v._v(" 모듈은 검증인의 악의적인 행동으로 발생하는 위임자 슬래싱 페널티 로직을 처리합니다.")]),v._v(" "),d("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"JnF1b3Q7c2xhc2hpbmcmcXVvdDs6IHsKICAgICAgJnF1b3Q7cGFyYW1zJnF1b3Q7OiB7CiAgICAgICAgJnF1b3Q7bWF4X2V2aWRlbmNlX2FnZSZxdW90OzogJnF1b3Q7MTgxNDQwMDAwMDAwMDAwMCZxdW90OywKICAgICAgICAmcXVvdDtzaWduZWRfYmxvY2tzX3dpbmRvdyZxdW90OzogJnF1b3Q7MTAwMDAmcXVvdDssCiAgICAgICAgJnF1b3Q7bWluX3NpZ25lZF9wZXJfd2luZG93JnF1b3Q7OiAmcXVvdDswLjA1MDAwMDAwMDAwMDAwMDAwMCZxdW90OywKICAgICAgICAmcXVvdDtkb3dudGltZV9qYWlsX2R1cmF0aW9uJnF1b3Q7OiAmcXVvdDs2MDAwMDAwMDAwMDAmcXVvdDssCiAgICAgICAgJnF1b3Q7c2xhc2hfZnJhY3Rpb25fZG91YmxlX3NpZ24mcXVvdDs6ICZxdW90OzAuMDUwMDAwMDAwMDAwMDAwMDAwJnF1b3Q7LAogICAgICAgICZxdW90O3NsYXNoX2ZyYWN0aW9uX2Rvd250aW1lJnF1b3Q7OiAmcXVvdDswLjAwMDEwMDAwMDAwMDAwMDAwMCZxdW90OwogICAgICB9LAogICAgICAmcXVvdDtzaWduaW5nX2luZm9zJnF1b3Q7OiB7fSwKICAgICAgJnF1b3Q7bWlzc2VkX2Jsb2NrcyZxdW90Ozoge30KICAgIH0K"}}),v._v(" "),d("p",[v._v("각 파라미터 값에 대해 알아보겠습니다:")]),v._v(" "),d("ul",[d("li",[d("code",[v._v("params")]),v._v(" "),d("ul",[d("li",[d("code",[v._v("max_evidence_age")]),v._v(": 증거 최대 유효기간 ("),d("strong",[v._v("나노초(nanosecond)")]),v._v(" 단위)")]),v._v(" "),d("li",[d("code",[v._v("signed_blocks_window")]),v._v(": 오프라인 검증인 판단을 위해 검토되는 최근 블록 개수.")]),v._v(" "),d("li",[d("code",[v._v("min_signed_per_window")]),v._v(": 검증인이 온라인으로 간주되기 위해"),d("code",[v._v("singed_blocks_window")]),v._v(" 내에 포함되어야하는 최소 "),d("code",[v._v("precommit")]),v._v(" %.")]),v._v(" "),d("li",[d("code",[v._v("downtime_jail_duration")]),v._v(": 다운 타임 슬래싱으로 발생하는 제일(jail) 기간("),d("strong",[v._v("나노초(nanosecond)")]),v._v(" 단위.")]),v._v(" "),d("li",[d("code",[v._v("slash_fraction_double_sign")]),v._v(": 검증인이 더블 사이닝을 할 경우 슬래싱되는 위임자 위임량의 % 단위.")]),v._v(" "),d("li",[d("code",[v._v("slash_fraction_downtime")]),v._v(": 검증인이 오프라인인 경우 슬래싱되는 위임자 워임량의 % 단위.")])])]),v._v(" "),d("li",[d("code",[v._v("signing_infos")]),v._v(": "),d("code",[v._v("slashing")]),v._v(" 모듈이 사용하는 각 검증인의 정보. 과거 상태에서 제네시스가 생성되지 않은 경우 "),d("code",[v._v("{}")]),v._v(" 값이 기본 설정입니다.")]),v._v(" "),d("li",[d("code",[v._v("missed_blocks")]),v._v(": "),d("code",[v._v("slashing")]),v._v(" 모듈이 사용하는 missed blocks 정보. 과거 상태에서 제네시스가 생성되지 않은 경우 "),d("code",[v._v("{}")]),v._v(" 값이 기본 설정입니다.")])]),v._v(" "),d("h3",{attrs:{id:"제네시스-트랜잭션-genesis-transactions"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#제네시스-트랜잭션-genesis-transactions"}},[v._v("#")]),v._v(" 제네시스 트랜잭션(genesis transactions)")]),v._v(" "),d("p",[v._v("기본적인 상태에서 제네시스 파일은 "),d("code",[v._v("gentx")]),v._v("를 포함하지 않습니다. "),d("code",[v._v("gentx")]),v._v("는 제네시스 파일 내 "),d("code",[v._v("accounts")]),v._v(" 항목에 있는 스테이킹 토큰을 검증인에게 위임하는 트랜잭션입니다. 실질적으로 제네시스에서 검증인을 생성하는데 사용됩니다. 유효한 "),d("code",[v._v("gentx")]),v._v("를 보유한 검증인(보팅 파워 기준)의 2/3가 "),d("code",[v._v("genesis_time")]),v._v(" 이후 온라인되면 블록체인이 시작됩니다.")]),v._v(" "),d("p",[d("code",[v._v("gentx")]),v._v("는 수동으로 제네시스 파일에 추가되거나 다음 명령어를 사용해 추가할 수 있습니다:")]),v._v(" "),d("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgY29sbGVjdC1nZW50eHMK"}}),v._v(" "),d("p",[v._v("위 명령어는 "),d("code",[v._v("~/.gaiad/config/gentx")]),v._v("에 있는 모든 "),d("code",[v._v("gentxs")]),v._v("를 제네시스 파일에 추가합니다. 제네시스 트랜잭션을 생성하기 위해서는 "),d("RouterLink",{attrs:{to:"/translations/kr/validators/validator-setup.html#participate-in-genesis-as-a-validator"}},[v._v("여기")]),v._v("를 확인하세요.")],1)],1)}),[],!1,null,null,null);_.default=o.exports}}]);