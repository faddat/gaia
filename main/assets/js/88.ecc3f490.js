(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{673:function(e,t,o){"use strict";o.r(t);var s=o(0),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"genesis-file"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#genesis-file"}},[e._v("#")]),e._v(" Genesis File")]),e._v(" "),o("p",[e._v("This document explains how the genesis file of the Cosmos Hub mainnet is structured. It also explains how you can build a genesis file for your own "),o("code",[e._v("gaia")]),e._v(" testnet.")]),e._v(" "),o("p",[e._v("Note that you can generate a default genesis file for your own testnet by running the following command:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgaW5pdCAmbHQ7bW9uaWtlciZndDsgLS1jaGFpbi1pZCAmbHQ7Y2hhaW4taWQmZ3Q7Cg=="}}),e._v(" "),o("p",[e._v("The genesis file is stored in "),o("code",[e._v("~/.gaiad/config/genesis.toml")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"what-is-a-genesis-file"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-genesis-file"}},[e._v("#")]),e._v(" What is a Genesis File")]),e._v(" "),o("p",[e._v("A genesis file is a JSON file which defines the initial state of your blockchain. It can be seen as height "),o("code",[e._v("0")]),e._v(" of your blockchain. The first block, at height "),o("code",[e._v("1")]),e._v(", will reference the genesis file as its parent.")]),e._v(" "),o("p",[e._v("The state defined in the genesis file contains all the necessary information, like initial token allocation, genesis time, default parameters, and more. Let us break down these information.")]),e._v(" "),o("h2",{attrs:{id:"genesis-time-and-chain-id"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#genesis-time-and-chain-id"}},[e._v("#")]),e._v(" Genesis Time and Chain_id")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("genesis_time")]),e._v(" is defined at the top of the genesis file. It is a "),o("code",[e._v("UTC")]),e._v(" timestamps which specifies when the blockchain is due to start. At this time, genesis validators are supposed to come online and start participating in the consensus process. The blockchain starts when more than 2/3rd of the genesis validators (weighted by voting power) are online.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"JnF1b3Q7Z2VuZXNpc190aW1lJnF1b3Q7OiAmcXVvdDsyMDE5LTAzLTEzVDE3OjAwOjAwLjAwMDAwMDAwMFomcXVvdDssCg=="}}),e._v(" "),o("p",[e._v("The "),o("code",[e._v("chain_id")]),e._v(" is a unique identifier for your chain. It helps differentiate between different chains using the same version of the software.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"JnF1b3Q7Y2hhaW5faWQmcXVvdDs6ICZxdW90O2Nvc21vc2h1Yi0yJnF1b3Q7LAo="}}),e._v(" "),o("h2",{attrs:{id:"consensus-parameters"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#consensus-parameters"}},[e._v("#")]),e._v(" Consensus Parameters")]),e._v(" "),o("p",[e._v("Next, the genesis file defines consensus parameters. Consensus parameters regroup all the parameters that are related to the consensus layer, which is "),o("code",[e._v("Tendermint")]),e._v(" in the case of "),o("code",[e._v("gaia")]),e._v(". Let us look at these parameters:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("block")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("max_bytes")]),e._v(": Maximum number of bytes per block.")]),e._v(" "),o("li",[o("code",[e._v("max_gas")]),e._v(": Gas limit per block. Each transaction included in the block will consume some gas. The total gas used by transactions included in a block cannot exceed this limit.")])])]),e._v(" "),o("li",[o("code",[e._v("evidence")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("max_age")]),e._v(": An evidence is a proof that a validator signed two different blocks at the same height (and round). This is an explicitly malicious behaviour that is punished at the state-machine level. The "),o("code",[e._v("max_age")]),e._v(" defines the maximum number of "),o("strong",[e._v("blocks")]),e._v(" after which an evidence is not valid anymore.")])])]),e._v(" "),o("li",[o("code",[e._v("validator")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("pub_key_types")]),e._v(": The types of pubkey ("),o("code",[e._v("ed25519")]),e._v(", "),o("code",[e._v("secp256k1")]),e._v(", ...) that are accepted for validators. Currently only "),o("code",[e._v("ed25519")]),e._v(" is accepted.")])])])]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"JnF1b3Q7Y29uc2Vuc3VzX3BhcmFtcyZxdW90OzogewogICAgJnF1b3Q7YmxvY2tfc2l6ZSZxdW90OzogewogICAgICAmcXVvdDttYXhfYnl0ZXMmcXVvdDs6ICZxdW90OzE1MDAwMCZxdW90OywKICAgICAgJnF1b3Q7bWF4X2dhcyZxdW90OzogJnF1b3Q7MTUwMDAwMCZxdW90OwogICAgfSwKICAgICZxdW90O2V2aWRlbmNlJnF1b3Q7OiB7CiAgICAgICZxdW90O21heF9hZ2UmcXVvdDs6ICZxdW90OzEwMDAwMDAmcXVvdDsKICAgIH0sCiAgICAmcXVvdDt2YWxpZGF0b3ImcXVvdDs6IHsKICAgICAgJnF1b3Q7cHViX2tleV90eXBlcyZxdW90OzogWwogICAgICAgICZxdW90O2VkMjU1MTkmcXVvdDsKICAgICAgXQogICAgfQogIH0sCg=="}}),e._v(" "),o("h2",{attrs:{id:"application-state"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#application-state"}},[e._v("#")]),e._v(" Application State")]),e._v(" "),o("p",[e._v("The application state defines the initial state of the state-machine.")]),e._v(" "),o("h3",{attrs:{id:"genesis-accounts"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#genesis-accounts"}},[e._v("#")]),e._v(" Genesis Accounts")]),e._v(" "),o("p",[e._v("In this section, initial allocation of tokens is defined. It is possible to add accounts manually by directly editing the genesis file, but it is also possible to use the following command:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Ly8gRXhhbXBsZTogZ2FpYWQgYWRkLWdlbmVzaXMtYWNjb3VudCBjb3Ntb3MxcXM4dG53MnQ4bDZhbXR6dmRlbW5uc3E5ZHprMGFnMHozN2doM2ggMTAwMDAwMDB1YXRvbQoKZ2FpYWQgYWRkLWdlbmVzaXMtYWNjb3VudCAmbHQ7YWNjb3VudC1hZGRyZXNzJmd0OyAmbHQ7YW1vdW50Jmd0OyZsdDtkZW5vbSZndDsK"}}),e._v(" "),o("p",[e._v("This command creates an item in the "),o("code",[e._v("accounts")]),e._v(" list, under the "),o("code",[e._v("app_state")]),e._v(" section.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"JnF1b3Q7YWNjb3VudHMmcXVvdDs6IFsKICAgICAgewogICAgICAgICZxdW90O2FkZHJlc3MmcXVvdDs6ICZxdW90O2Nvc21vczFxczh0bncydDhsNmFtdHp2ZGVtbm5zcTlkemswYWcwejM3Z2gzaCZxdW90OywKICAgICAgICAmcXVvdDtjb2lucyZxdW90OzogWwogICAgICAgICAgewogICAgICAgICAgICAmcXVvdDtkZW5vbSZxdW90OzogJnF1b3Q7dWF0b20mcXVvdDssCiAgICAgICAgICAgICZxdW90O2Ftb3VudCZxdW90OzogJnF1b3Q7MTAwMDAwMDAmcXVvdDsKICAgICAgICAgIH0KICAgICAgICBdLAogICAgICAgICZxdW90O3NlcXVlbmNlX251bWJlciZxdW90OzogJnF1b3Q7MCZxdW90OywKICAgICAgICAmcXVvdDthY2NvdW50X251bWJlciZxdW90OzogJnF1b3Q7MCZxdW90OywKICAgICAgICAmcXVvdDtvcmlnaW5hbF92ZXN0aW5nJnF1b3Q7OiBbCiAgICAgICAgICB7CiAgICAgICAgICAgICZxdW90O2Rlbm9tJnF1b3Q7OiAmcXVvdDt1YXRvbSZxdW90OywKICAgICAgICAgICAgJnF1b3Q7YW1vdW50JnF1b3Q7OiAmcXVvdDsyNjMwNjAwMDAwMCZxdW90OwogICAgICAgICAgfQogICAgICAgIF0sCiAgICAgICAgJnF1b3Q7ZGVsZWdhdGVkX2ZyZWUmcXVvdDs6IG51bGwsCiAgICAgICAgJnF1b3Q7ZGVsZWdhdGVkX3Zlc3RpbmcmcXVvdDs6IG51bGwsCiAgICAgICAgJnF1b3Q7c3RhcnRfdGltZSZxdW90OzogJnF1b3Q7MCZxdW90OywKICAgICAgICAmcXVvdDtlbmRfdGltZSZxdW90OzogJnF1b3Q7MTAwMDAmcXVvdDsKICAgICAgfQpdCg=="}}),e._v(" "),o("p",[e._v("Let us break down the parameters:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("sequence_number")]),e._v(": This number is used to count the number of transactions sent by this account. It is incremented each time a transaction is included in a block, and used to prevent replay attacks. Initial value is "),o("code",[e._v("0")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("account_number")]),e._v(": Unique identifier for the account. It is generated the first time a transaction including this account is included in a block.")]),e._v(" "),o("li",[o("code",[e._v("original_vesting")]),e._v(": Vesting is natively supported by "),o("code",[e._v("gaia")]),e._v(". You can define an amount of token owned by the account that needs to be vested for a period of time before they can be transferred. Vested tokens can be delegated. Default value is "),o("code",[e._v("null")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("delegated_free")]),e._v(": Amount of delegated tokens that can be transferred after they've been vested. Most of the time, will be "),o("code",[e._v("null")]),e._v(" in genesis.")]),e._v(" "),o("li",[o("code",[e._v("delegated_vesting")]),e._v(": Amount of delegated tokens that are still vesting. Most of the time, will be "),o("code",[e._v("null")]),e._v(" in genesis.")]),e._v(" "),o("li",[o("code",[e._v("start_time")]),e._v(": Block at which the vesting period starts. "),o("code",[e._v("0")]),e._v(" most of the time in genesis.")]),e._v(" "),o("li",[o("code",[e._v("end_time")]),e._v(": Block at which the vesting period ends. "),o("code",[e._v("0")]),e._v(" if no vesting for this account.")])]),e._v(" "),o("h3",{attrs:{id:"bank"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#bank"}},[e._v("#")]),e._v(" Bank")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("bank")]),e._v(" module handles tokens. The only parameter that needs to be defined in this section is wether "),o("code",[e._v("transfers")]),e._v(" are enabled at genesis or not.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"JnF1b3Q7YmFuayZxdW90OzogewogICAgICAmcXVvdDtzZW5kX2VuYWJsZWQmcXVvdDs6IGZhbHNlCiAgICB9Cg=="}}),e._v(" "),o("h3",{attrs:{id:"staking"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#staking"}},[e._v("#")]),e._v(" Staking")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("staking")]),e._v(" module handles the bulk of the Proof-of-Stake logic of the state-machine. This section should look like the following:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"JnF1b3Q7c3Rha2luZyZxdW90OzogewogICAgICAmcXVvdDtwb29sJnF1b3Q7OiB7CiAgICAgICAgJnF1b3Q7bm90X2JvbmRlZF90b2tlbnMmcXVvdDs6ICZxdW90OzEwMDAwMDAwJnF1b3Q7LAogICAgICAgICZxdW90O2JvbmRlZF90b2tlbnMmcXVvdDs6ICZxdW90OzAmcXVvdDsKICAgICAgfSwKICAgICAgJnF1b3Q7cGFyYW1zJnF1b3Q7OiB7CiAgICAgICAgJnF1b3Q7dW5ib25kaW5nX3RpbWUmcXVvdDs6ICZxdW90OzE4MTQ0MDAwMDAwMDAwMDAmcXVvdDssCiAgICAgICAgJnF1b3Q7bWF4X3ZhbGlkYXRvcnMmcXVvdDs6IDEwMCwKICAgICAgICAmcXVvdDttYXhfZW50cmllcyZxdW90OzogNywKICAgICAgICAmcXVvdDtib25kX2Rlbm9tJnF1b3Q7OiAmcXVvdDt1YXRvbSZxdW90OwogICAgICB9LAogICAgICAmcXVvdDtsYXN0X3RvdGFsX3Bvd2VyJnF1b3Q7OiAmcXVvdDswJnF1b3Q7LAogICAgICAmcXVvdDtsYXN0X3ZhbGlkYXRvcl9wb3dlcnMmcXVvdDs6IG51bGwsCiAgICAgICZxdW90O3ZhbGlkYXRvcnMmcXVvdDs6IG51bGwsCiAgICAgICZxdW90O2JvbmRzJnF1b3Q7OiBudWxsLAogICAgICAmcXVvdDt1bmJvbmRpbmdfZGVsZWdhdGlvbnMmcXVvdDs6IG51bGwsCiAgICAgICZxdW90O3JlZGVsZWdhdGlvbnMmcXVvdDs6IG51bGwsCiAgICAgICZxdW90O2V4cG9ydGVkJnF1b3Q7OiBmYWxzZQogICAgfQo="}}),e._v(" "),o("p",[e._v("Let us break down the parameters:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("pool")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("not_bonded_tokens")]),e._v(": Defines the amount of tokens not bonded (i.e. delegated) in genesis. Generally, it equals the total supply of the staking token ("),o("code",[e._v("uatom")]),e._v(" in this example).")]),e._v(" "),o("li",[o("code",[e._v("bonded_tokens")]),e._v(": Amount of bonded tokens in genesis. Generally "),o("code",[e._v("0")]),e._v(".")])])]),e._v(" "),o("li",[o("code",[e._v("params")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("unbonding_time")]),e._v(": Time in "),o("strong",[e._v("nanosecond")]),e._v(" it takes for tokens to complete unbonding.")]),e._v(" "),o("li",[o("code",[e._v("max_validators")]),e._v(": Maximum number of active validators.")]),e._v(" "),o("li",[o("code",[e._v("max_entries")]),e._v(": Maximum unbonding delegations and redelegations between a particular pair of delegator / validator.")]),e._v(" "),o("li",[o("code",[e._v("bond_denom")]),e._v(": Denomination of the staking token.")])])]),e._v(" "),o("li",[o("code",[e._v("last_total_power")]),e._v(": Total amount of voting power. Generally "),o("code",[e._v("0")]),e._v(" in genesis (except if genesis was generated using a previous state).")]),e._v(" "),o("li",[o("code",[e._v("last_validator_powers")]),e._v(": Power of each validator in last known state. Generally "),o("code",[e._v("null")]),e._v(" in genesis (except if genesis was generated using a previous state).")]),e._v(" "),o("li",[o("code",[e._v("validators")]),e._v(": List of last known validators. Generally "),o("code",[e._v("null")]),e._v(" in genesis (except if genesis was generated using a previous state).")]),e._v(" "),o("li",[o("code",[e._v("bonds")]),e._v(": List of last known delegation. Generally "),o("code",[e._v("null")]),e._v(" in genesis (except if genesis was generated using a previous state).")]),e._v(" "),o("li",[o("code",[e._v("unbonding_delegations")]),e._v(": List of last known unbonding delegations. Generally "),o("code",[e._v("null")]),e._v(" in genesis (except if genesis was generated using a previous state).")]),e._v(" "),o("li",[o("code",[e._v("redelegations")]),e._v(": List of last known redelegations. Generally "),o("code",[e._v("null")]),e._v(" in genesis (except if genesis was generated using a previous state).")]),e._v(" "),o("li",[o("code",[e._v("exported")]),e._v(": Wether this genesis was generated using the export of a previous state.")])]),e._v(" "),o("h3",{attrs:{id:"mint"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#mint"}},[e._v("#")]),e._v(" Mint")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("mint")]),e._v(" module governs the logic of inflating the supply of token. The "),o("code",[e._v("mint")]),e._v(" section in the genesis file looks like the follwing:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"JnF1b3Q7bWludCZxdW90OzogewogICAgICAmcXVvdDttaW50ZXImcXVvdDs6IHsKICAgICAgICAmcXVvdDtpbmZsYXRpb24mcXVvdDs6ICZxdW90OzAuMDcwMDAwMDAwMDAwMDAwMDAwJnF1b3Q7LAogICAgICAgICZxdW90O2FubnVhbF9wcm92aXNpb25zJnF1b3Q7OiAmcXVvdDswLjAwMDAwMDAwMDAwMDAwMDAwMCZxdW90OwogICAgICB9LAogICAgICAmcXVvdDtwYXJhbXMmcXVvdDs6IHsKICAgICAgICAmcXVvdDttaW50X2Rlbm9tJnF1b3Q7OiAmcXVvdDt1YXRvbSZxdW90OywKICAgICAgICAmcXVvdDtpbmZsYXRpb25fcmF0ZV9jaGFuZ2UmcXVvdDs6ICZxdW90OzAuMTMwMDAwMDAwMDAwMDAwMDAwJnF1b3Q7LAogICAgICAgICZxdW90O2luZmxhdGlvbl9tYXgmcXVvdDs6ICZxdW90OzAuMjAwMDAwMDAwMDAwMDAwMDAwJnF1b3Q7LAogICAgICAgICZxdW90O2luZmxhdGlvbl9taW4mcXVvdDs6ICZxdW90OzAuMDcwMDAwMDAwMDAwMDAwMDAwJnF1b3Q7LAogICAgICAgICZxdW90O2dvYWxfYm9uZGVkJnF1b3Q7OiAmcXVvdDswLjY3MDAwMDAwMDAwMDAwMDAwMCZxdW90OywKICAgICAgICAmcXVvdDtibG9ja3NfcGVyX3llYXImcXVvdDs6ICZxdW90OzYzMTE1MjAmcXVvdDsKICAgICAgfQogICAgfQo="}}),e._v(" "),o("p",[e._v("Let us break down the parameters:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("minter")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("inflation")]),e._v(": Initial yearly percentage of increase in the total supply of staking token, compounded weekly. A "),o("code",[e._v("0.070000000000000000")]),e._v(" value means the target is "),o("code",[e._v("7%")]),e._v(" yearly inflation, compounded weekly.")]),e._v(" "),o("li",[o("code",[e._v("annual_provisions")]),e._v(": Calculated each block. Initialize at "),o("code",[e._v("0.000000000000000000")]),e._v(".")])])]),e._v(" "),o("li",[o("code",[e._v("params")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("mint_denom")]),e._v(": Denom of the staking token that is inflated.")]),e._v(" "),o("li",[o("code",[e._v("inflation_rate_change")]),e._v(": Max yearly change in inflation.")]),e._v(" "),o("li",[o("code",[e._v("inflation_max")]),e._v(": Maximum level of inflation.")]),e._v(" "),o("li",[o("code",[e._v("inflation_min")]),e._v(": Minimum level of inflation.")]),e._v(" "),o("li",[o("code",[e._v("goal_bonded")]),e._v(": Percentage of the total supply that is targeted to be bonded. If the percentage of bonded staking tokens is below this target, the inflation increases (following "),o("code",[e._v("inflation_rate_change")]),e._v(") until it reaches "),o("code",[e._v("inflation_max")]),e._v(". If the percentage of bonded staking tokens is above this target, the inflation decreases (following "),o("code",[e._v("inflation_rate_change")]),e._v(") until it reaches "),o("code",[e._v("inflation_min")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("blocks_per_year")]),e._v(": Estimation of the amount of blocks per year. Used to compute the block reward coming from inflated staking token (called block provisions).")])])])]),e._v(" "),o("h3",{attrs:{id:"distribution"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#distribution"}},[e._v("#")]),e._v(" Distribution")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("distribution")]),e._v(" module handles the logic of distribution block provisions and fees to validators and delegators. The "),o("code",[e._v("distribution")]),e._v(" section in the genesis file looks like the follwing:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ICAgICZxdW90O2Rpc3RyaWJ1dGlvbiZxdW90OzogewogICAgICAmcXVvdDtmZWVfcG9vbCZxdW90OzogewogICAgICAgICZxdW90O2NvbW11bml0eV9wb29sJnF1b3Q7OiBudWxsCiAgICAgIH0sCiAgICAgICZxdW90O2NvbW11bml0eV90YXgmcXVvdDs6ICZxdW90OzAuMDIwMDAwMDAwMDAwMDAwMDAwJnF1b3Q7LAogICAgICAmcXVvdDtiYXNlX3Byb3Bvc2VyX3Jld2FyZCZxdW90OzogJnF1b3Q7MC4wMTAwMDAwMDAwMDAwMDAwMDAmcXVvdDssCiAgICAgICZxdW90O2JvbnVzX3Byb3Bvc2VyX3Jld2FyZCZxdW90OzogJnF1b3Q7MC4wNDAwMDAwMDAwMDAwMDAwMDAmcXVvdDssCiAgICAgICZxdW90O3dpdGhkcmF3X2FkZHJfZW5hYmxlZCZxdW90OzogZmFsc2UsCiAgICAgICZxdW90O2RlbGVnYXRvcl93aXRoZHJhd19pbmZvcyZxdW90OzogbnVsbCwKICAgICAgJnF1b3Q7cHJldmlvdXNfcHJvcG9zZXImcXVvdDs6ICZxdW90OyZxdW90OywKICAgICAgJnF1b3Q7b3V0c3RhbmRpbmdfcmV3YXJkcyZxdW90OzogbnVsbCwKICAgICAgJnF1b3Q7dmFsaWRhdG9yX2FjY3VtdWxhdGVkX2NvbW1pc3Npb25zJnF1b3Q7OiBudWxsLAogICAgICAmcXVvdDt2YWxpZGF0b3JfaGlzdG9yaWNhbF9yZXdhcmRzJnF1b3Q7OiBudWxsLAogICAgICAmcXVvdDt2YWxpZGF0b3JfY3VycmVudF9yZXdhcmRzJnF1b3Q7OiBudWxsLAogICAgICAmcXVvdDtkZWxlZ2F0b3Jfc3RhcnRpbmdfaW5mb3MmcXVvdDs6IG51bGwsCiAgICAgICZxdW90O3ZhbGlkYXRvcl9zbGFzaF9ldmVudHMmcXVvdDs6IG51bGwKICAgIH0K"}}),e._v(" "),o("p",[e._v("Let us break down the parameters:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("fee_pool")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("community_pool")]),e._v(": The community pool is a pool of tokens that can be used to pay for bounties. It is allocated via governance proposals. Generally "),o("code",[e._v("null")]),e._v(" in genesis.")])])]),e._v(" "),o("li",[o("code",[e._v("community_tax")]),e._v(": The tax percentage on fees and block rewards that goes to the community pool.")]),e._v(" "),o("li",[o("code",[e._v("base_proposer_reward")]),e._v(": Base bonus on transaction fees collected in a valid block that goes to the proposer of block. If value is "),o("code",[e._v("0.010000000000000000")]),e._v(", 1% of the fees go to the proposer.")]),e._v(" "),o("li",[o("code",[e._v("bonus_proposer_reward")]),e._v(": Max bonus on transaction fees collected in a valid block that goes to the proposer of block. The bonus depends on the number of "),o("code",[e._v("precommits")]),e._v(" the proposer includes. If the proposer includes 2/3rd "),o("code",[e._v("precommits")]),e._v(" weighted by voting power (minimum for the block to be valid), they get a bonus of "),o("code",[e._v("base_proposer_reward")]),e._v(". This bonus increases linearly up to "),o("code",[e._v("bonus_proposer_reward")]),e._v(" if the proposer includes 100% of "),o("code",[e._v("precommits")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("withdraw_addr_enabled")]),e._v(": If "),o("code",[e._v("true")]),e._v(", delegators can set a different address to withdraw their rewards. Set to "),o("code",[e._v("false")]),e._v(" if you want to disable transfers at genesis, as it can be used as a way to get around the restriction.")]),e._v(" "),o("li",[o("code",[e._v("delegator_withdraw_infos")]),e._v(": List of delegators withdraw address. Generally "),o("code",[e._v("null")]),e._v(" if genesis was not exported from previous state.")]),e._v(" "),o("li",[o("code",[e._v("previous_proposer")]),e._v(": Proposer of the previous block. Set to "),o("code",[e._v('""')]),e._v(" if genesis was not exported from previous state.")]),e._v(" "),o("li",[o("code",[e._v("outstanding_rewards")]),e._v(": Outstanding (un-withdrawn) rewards. Set to "),o("code",[e._v("null")]),e._v(" if genesis was not exported from previous state.")]),e._v(" "),o("li",[o("code",[e._v("validator_accumulated_commission")]),e._v(": Outstanding (un-withdrawn) commission of validators. Set to "),o("code",[e._v("null")]),e._v(" if genesis was not exported from previous state.")]),e._v(" "),o("li",[o("code",[e._v("validator_historical_rewards")]),e._v(": Set of information related to the historical rewards of validators and used by the "),o("code",[e._v("distribution")]),e._v(" module for various computation. Set to "),o("code",[e._v("null")]),e._v(" if genesis was not exported from previous state.")]),e._v(" "),o("li",[o("code",[e._v("validators_current_rewards")]),e._v(": Set of information related to the current rewards of validators and used by the "),o("code",[e._v("distribution")]),e._v(" module for various computation. Set to "),o("code",[e._v("null")]),e._v(" if genesis was not exported from previous state.")]),e._v(" "),o("li",[o("code",[e._v("delegator_starting_infos")]),e._v(": Tracks the previous validator period, the delegation's amount of staking token, and the creation height (to check later on if any slashes have occurred). Set to "),o("code",[e._v("null")]),e._v(" if genesis was not exported from previous state.")]),e._v(" "),o("li",[o("code",[e._v("validator_slash_events")]),e._v(": Set of information related to the past slashing of validators. Set to "),o("code",[e._v("null")]),e._v(" if genesis was not exported from previous state.")])]),e._v(" "),o("h3",{attrs:{id:"governance"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#governance"}},[e._v("#")]),e._v(" Governance")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("gov")]),e._v(" module handles all governance-related transactions. The initial state of the "),o("code",[e._v("gov")]),e._v(" section looks like the following:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"JnF1b3Q7Z292JnF1b3Q7OiB7CiAgICAgICZxdW90O3N0YXJ0aW5nX3Byb3Bvc2FsX2lkJnF1b3Q7OiAmcXVvdDsxJnF1b3Q7LAogICAgICAmcXVvdDtkZXBvc2l0cyZxdW90OzogbnVsbCwKICAgICAgJnF1b3Q7dm90ZXMmcXVvdDs6IG51bGwsCiAgICAgICZxdW90O3Byb3Bvc2FscyZxdW90OzogbnVsbCwKICAgICAgJnF1b3Q7ZGVwb3NpdF9wYXJhbXMmcXVvdDs6IHsKICAgICAgICAmcXVvdDttaW5fZGVwb3NpdCZxdW90OzogWwogICAgICAgICAgewogICAgICAgICAgICAmcXVvdDtkZW5vbSZxdW90OzogJnF1b3Q7dWF0b20mcXVvdDssCiAgICAgICAgICAgICZxdW90O2Ftb3VudCZxdW90OzogJnF1b3Q7NTEyMDAwMDAwJnF1b3Q7CiAgICAgICAgICB9CiAgICAgICAgXSwKICAgICAgICAmcXVvdDttYXhfZGVwb3NpdF9wZXJpb2QmcXVvdDs6ICZxdW90OzEyMDk2MDAwMDAwMDAwMDAmcXVvdDsKICAgICAgfSwKICAgICAgJnF1b3Q7dm90aW5nX3BhcmFtcyZxdW90OzogewogICAgICAgICZxdW90O3ZvdGluZ19wZXJpb2QmcXVvdDs6ICZxdW90OzEyMDk2MDAwMDAwMDAwMDAmcXVvdDsKICAgICAgfSwKICAgICAgJnF1b3Q7dGFsbHlfcGFyYW1zJnF1b3Q7OiB7CiAgICAgICAgJnF1b3Q7cXVvcnVtJnF1b3Q7OiAmcXVvdDswLjQmcXVvdDssCiAgICAgICAgJnF1b3Q7dGhyZXNob2xkJnF1b3Q7OiAmcXVvdDswLjUmcXVvdDssCiAgICAgICAgJnF1b3Q7dmV0byZxdW90OzogJnF1b3Q7MC4zMzQmcXVvdDssCiAgICAgICAgJnF1b3Q7Z292ZXJuYW5jZV9wZW5hbHR5JnF1b3Q7OiAmcXVvdDswLjAmcXVvdDsKICAgICAgfQogICAgfQo="}}),e._v(" "),o("p",[e._v("Let us break down the parameters:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("starting_proposal_id")]),e._v(": This parameter defines the ID of the first proposal. Each proposal is identified by a unique ID.")]),e._v(" "),o("li",[o("code",[e._v("deposits")]),e._v(": List of deposits for each proposal ID. Set to "),o("code",[e._v("null")]),e._v(" if genesis was not exported from previous state.")]),e._v(" "),o("li",[o("code",[e._v("votes")]),e._v(": List of votes for each proposal ID. Set to "),o("code",[e._v("null")]),e._v(" if genesis was not exported from previous state.")]),e._v(" "),o("li",[o("code",[e._v("proposals")]),e._v(": List of proposals for each proposal ID: Set to "),o("code",[e._v("null")]),e._v(" if genesis was not exported from previous state.")]),e._v(" "),o("li",[o("code",[e._v("deposit_params")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("min_deposit")]),e._v(": The minimum deposit required for the proposal to enter "),o("code",[e._v("Voting Period")]),e._v(". If multiple denoms are provided, the "),o("code",[e._v("OR")]),e._v(" operator applies.")]),e._v(" "),o("li",[o("code",[e._v("max_deposit_period")]),e._v(": The maximum period (in "),o("strong",[e._v("nanoseconds")]),e._v(") after which it is not possible to deposit on the proposal anymore.")])])]),e._v(" "),o("li",[o("code",[e._v("voting_params")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("voting_period")]),e._v(": Length of the voting period in "),o("strong",[e._v("nanoseconds")]),e._v(".")])])]),e._v(" "),o("li",[o("code",[e._v("tally_params")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("quorum")]),e._v(": Minimum percentage of bonded staking tokens that needs to vote for the result to be valid.")]),e._v(" "),o("li",[o("code",[e._v("threshold")]),e._v(": Minimum percentage of votes that need to be "),o("code",[e._v("YES")]),e._v(" for the result to be valid.")]),e._v(" "),o("li",[o("code",[e._v("veto")]),e._v(": Maximum percentage "),o("code",[e._v("NO_WITH_VETO")]),e._v(" votes for the result to be valid.")]),e._v(" "),o("li",[o("code",[e._v("governance_penalty")]),e._v(": Penalty for validators that do not vote on a given proposal.")])])])]),e._v(" "),o("h3",{attrs:{id:"slashing"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#slashing"}},[e._v("#")]),e._v(" Slashing")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("slashing")]),e._v(" module handles the logic to slash delegators if their validator misbehave. The "),o("code",[e._v("slashing")]),e._v(" section in genesis looks as follows:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"JnF1b3Q7c2xhc2hpbmcmcXVvdDs6IHsKICAgICAgJnF1b3Q7cGFyYW1zJnF1b3Q7OiB7CiAgICAgICAgJnF1b3Q7bWF4X2V2aWRlbmNlX2FnZSZxdW90OzogJnF1b3Q7MTgxNDQwMDAwMDAwMDAwMCZxdW90OywKICAgICAgICAmcXVvdDtzaWduZWRfYmxvY2tzX3dpbmRvdyZxdW90OzogJnF1b3Q7MTAwMDAmcXVvdDssCiAgICAgICAgJnF1b3Q7bWluX3NpZ25lZF9wZXJfd2luZG93JnF1b3Q7OiAmcXVvdDswLjA1MDAwMDAwMDAwMDAwMDAwMCZxdW90OywKICAgICAgICAmcXVvdDtkb3dudGltZV9qYWlsX2R1cmF0aW9uJnF1b3Q7OiAmcXVvdDs2MDAwMDAwMDAwMDAmcXVvdDssCiAgICAgICAgJnF1b3Q7c2xhc2hfZnJhY3Rpb25fZG91YmxlX3NpZ24mcXVvdDs6ICZxdW90OzAuMDUwMDAwMDAwMDAwMDAwMDAwJnF1b3Q7LAogICAgICAgICZxdW90O3NsYXNoX2ZyYWN0aW9uX2Rvd250aW1lJnF1b3Q7OiAmcXVvdDswLjAwMDEwMDAwMDAwMDAwMDAwMCZxdW90OwogICAgICB9LAogICAgICAmcXVvdDtzaWduaW5nX2luZm9zJnF1b3Q7OiB7fSwKICAgICAgJnF1b3Q7bWlzc2VkX2Jsb2NrcyZxdW90Ozoge30KICAgIH0K"}}),e._v(" "),o("p",[e._v("Let us break down the parameters:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("params")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("max_evidence_age")]),e._v(": Maximum age of the evidence in "),o("strong",[e._v("nanoseconds")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("signed_blocks_window")]),e._v(": Moving window of blocks to figure out offline validators.")]),e._v(" "),o("li",[o("code",[e._v("min_signed_per_window")]),e._v(": Minimum percentage of "),o("code",[e._v("precommits")]),e._v("that must be present in the "),o("code",[e._v("block window")]),e._v(" for the validator to be considered online.")]),e._v(" "),o("li",[o("code",[e._v("downtime_jail_duration")]),e._v(": Duration in "),o("strong",[e._v("nanoseconds")]),e._v(" for which a validator is jailed after they get slashed for downtime.")]),e._v(" "),o("li",[o("code",[e._v("slash_fraction_double_sign")]),e._v(": Percentage of delegators bonded stake slashed when their validator double signs.")]),e._v(" "),o("li",[o("code",[e._v("slash_fraction_downtime")]),e._v(": Percentage of delegators bonded stake slashed when their validator is down.")])])]),e._v(" "),o("li",[o("code",[e._v("signing_infos")]),e._v(": Various infos per validator needed by the "),o("code",[e._v("slashing")]),e._v(" module. Set to "),o("code",[e._v("{}")]),e._v(" if genesis was not exported from previous state.")]),e._v(" "),o("li",[o("code",[e._v("missed_blocks")]),e._v(": Various infos related to missed blocks needed by the "),o("code",[e._v("slashing")]),e._v(" module. Set to "),o("code",[e._v("{}")]),e._v(" if genesis was not exported from previous state.")])]),e._v(" "),o("h3",{attrs:{id:"genesis-transactions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#genesis-transactions"}},[e._v("#")]),e._v(" Genesis Transactions")]),e._v(" "),o("p",[e._v("By default, the genesis file do not contain any "),o("code",[e._v("gentxs")]),e._v(". A "),o("code",[e._v("gentx")]),e._v(" is a transaction that bonds staking token present in the genesis file under "),o("code",[e._v("accounts")]),e._v(" to a validator, essentially creating a validator at genesis. The chain will start as soon as more than 2/3rds of the validators (weighted by voting power) that are the recipient of a valid "),o("code",[e._v("gentx")]),e._v(" come online after "),o("code",[e._v("genesis_time")]),e._v(".")]),e._v(" "),o("p",[e._v("A "),o("code",[e._v("gentx")]),e._v(" can be added manually to the genesis file, or via the following command:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgY29sbGVjdC1nZW50eHMK"}}),e._v(" "),o("p",[e._v("This command will add all the "),o("code",[e._v("gentxs")]),e._v(" stored in "),o("code",[e._v("~/.gaiad/config/gentx")]),e._v(" to the genesis file. In order to create a genesis transaction, click "),o("RouterLink",{attrs:{to:"/validators/validator-setup.html#participate-in-genesis-as-a-validator"}},[e._v("here")]),e._v(".")],1)],1)}),[],!1,null,null,null);t.default=i.exports}}]);