(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{764:function(e,t,a){"use strict";a.r(t);var s=a(0),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"service-providers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service-providers"}},[e._v("#")]),e._v(" Service Providers")]),e._v(" "),a("p",[e._v("We define 'service providers' as entities providing services for end-users that involve some form of interaction with a Cosmos-SDK based blockchain (this includes the Cosmos Hub). More specifically, this document will be focused around interactions with tokens.")]),e._v(" "),a("p",[e._v("This section does not concern wallet builders that want to provide Light-Client functionalities. Service providers are expected to act as trusted point of contact to the blockchain for their end-users.")]),e._v(" "),a("h2",{attrs:{id:"high-level-description-of-the-architecture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#high-level-description-of-the-architecture"}},[e._v("#")]),e._v(" High-level description of the architecture")]),e._v(" "),a("p",[e._v("There are three main pieces to consider:")]),e._v(" "),a("ul",[a("li",[e._v("Full-nodes: To interact with the blockchain.")]),e._v(" "),a("li",[e._v("Rest Server: This acts as a relayer for HTTP calls.")]),e._v(" "),a("li",[e._v("Rest API: Define available endpoints for the Rest Server.")])]),e._v(" "),a("h2",{attrs:{id:"running-a-full-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-a-full-node"}},[e._v("#")]),e._v(" Running a Full-Node")]),e._v(" "),a("h3",{attrs:{id:"installation-and-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-and-configuration"}},[e._v("#")]),e._v(" Installation and configuration")]),e._v(" "),a("p",[e._v("We will describe the steps to run and interact with a full-node for the Cosmos Hub. For other SDK-based blockchain, the process should be similar.")]),e._v(" "),a("p",[e._v("First, you need to "),a("RouterLink",{attrs:{to:"/gaia-tutorials/installation.html"}},[e._v("install the software")]),e._v(".")],1),e._v(" "),a("p",[e._v("Then, you can start "),a("RouterLink",{attrs:{to:"/gaia-tutorials/join-mainnet.html"}},[e._v("running a full-node")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"command-line-interface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#command-line-interface"}},[e._v("#")]),e._v(" Command-Line interface")]),e._v(" "),a("h2",{attrs:{id:"setting-up-gaiad"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-gaiad"}},[e._v("#")]),e._v(" Setting Up "),a("code",[e._v("gaiad")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[a("strong",[e._v("Before setting up "),a("code",[e._v("gaiad")]),e._v(", make sure you have set up a way to "),a("a",{attrs:{href:"#accessing-the-cosmos-hub-network"}},[e._v("access the Cosmos Hub network")])])])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",[a("strong",[e._v("Please check that you are always using the latest stable release of "),a("code",[e._v("gaiad")])])])]),e._v(" "),a("p",[a("code",[e._v("gaiad")]),e._v(" is the tool that enables you to interact with the node that runs on the Cosmos Hub network, whether you run it yourself or not. Let us set it up properly.")]),e._v(" "),a("p",[e._v("In order to set up "),a("code",[e._v("gaiad")]),e._v(", use the following command:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgY29uZmlnICZsdDtmbGFnJmd0OyAmbHQ7dmFsdWUmZ3Q7Cg=="}}),e._v(" "),a("p",[e._v("It allows you to set a default value for each given flag.")]),e._v(" "),a("p",[e._v("First, set up the address of the full-node you want to connect to:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgY29uZmlnIG5vZGUgJmx0O2hvc3QmZ3Q7OiZsdDtwb3J0CgovLyBleGFtcGxlOiBnYWlhZCBjb25maWcgbm9kZSBodHRwczovLzc3Ljg3LjEwNi4zMzoyNjY1Nwo="}}),e._v(" "),a("p",[e._v("If you run your own full-node, just use "),a("code",[e._v("tcp://localhost:26657")]),e._v(" as the address.")]),e._v(" "),a("p",[e._v("Then, let us set the default value of the "),a("code",[e._v("--trust-node")]),e._v(" flag:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgY29uZmlnIHRydXN0LW5vZGUgZmFsc2UKCi8vIFNldCB0byB0cnVlIGlmIHlvdSBydW4gYSBsaWdodC1jbGllbnQgbm9kZSwgZmFsc2Ugb3RoZXJ3aXNlCg=="}}),e._v(" "),a("p",[e._v("Finally, let us set the "),a("code",[e._v("chain-id")]),e._v(" of the blockchain we want to interact with:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgY29uZmlnIGNoYWluLWlkIGNvc21vc2h1Yi0yCg=="}}),e._v(" "),a("p",[e._v("Next you will find a few useful CLI commands to interact with the Full-Node.")]),e._v(" "),a("h4",{attrs:{id:"creating-a-key-pair"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-key-pair"}},[e._v("#")]),e._v(" Creating a key-pair")]),e._v(" "),a("p",[e._v("To generate a new key (default secp256k1 elliptic curve):")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQga2V5cyBhZGQgJmx0O3lvdXJfa2V5X25hbWUmZ3Q7Cg=="}}),e._v(" "),a("p",[e._v("You will be asked to create a password (at least 8 characters) for this key-pair. This will return the information listed below:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("NAME")]),e._v(": Name of your key")]),e._v(" "),a("li",[a("code",[e._v("TYPE")]),e._v(": Type of your key, always "),a("code",[e._v("local")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("ADDRESS")]),e._v(": Your address. Used to receive funds.")]),e._v(" "),a("li",[a("code",[e._v("PUBKEY")]),e._v(": Your public key. Useful for validators.")]),e._v(" "),a("li",[a("code",[e._v("MNEMONIC")]),e._v(": 24-words phrase. "),a("strong",[e._v("Save this mnemonic somewhere safe")]),e._v(". It is used to recover your private key in case you forget the password.")])]),e._v(" "),a("p",[e._v("You can see all your available keys by typing:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQga2V5cyBsaXN0Cg=="}}),e._v(" "),a("h4",{attrs:{id:"checking-your-balance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#checking-your-balance"}},[e._v("#")]),e._v(" Checking your balance")]),e._v(" "),a("p",[e._v("After receiving tokens to your address, you can view your account's balance by typing:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgcXVlcnkgYWNjb3VudCAmbHQ7WU9VUl9BRERSRVNTJmd0Owo="}}),e._v(" "),a("p",[a("em",[e._v("Note: When you query an account balance with zero tokens, you will get this error: No account with address <YOUR_ADDRESS> was found in the state. This is expected! We're working on improving our error messages.")])]),e._v(" "),a("h4",{attrs:{id:"sending-coins-via-the-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sending-coins-via-the-cli"}},[e._v("#")]),e._v(" Sending coins via the CLI")]),e._v(" "),a("p",[e._v("Here is the command to send coins via the CLI:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgdHggc2VuZCAmbHQ7ZnJvbV9rZXlfb3JfYWRkcmVzcyZndDsgJmx0O3RvX2FkZHJlc3MmZ3Q7ICZsdDthbW91bnQmZ3Q7IFwKICAgIC0tY2hhaW4taWQ9Jmx0O25hbWVfb2ZfdGVzdG5ldF9jaGFpbiZndDsgCg=="}}),e._v(" "),a("p",[e._v("Parameters:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("<from_key_or_address>")]),e._v(": Key name or address of sending account.")]),e._v(" "),a("li",[a("code",[e._v("<to_address>")]),e._v(": Address of the recipient.")]),e._v(" "),a("li",[a("code",[e._v("<amount>")]),e._v(": This parameter accepts the format "),a("code",[e._v("<value|coinName>")]),e._v(", such as "),a("code",[e._v("10faucetToken")]),e._v(".")])]),e._v(" "),a("p",[e._v("Flags:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("--chain-id")]),e._v(": This flag allows you to specify the id of the chain. There will be different ids for different testnet chains and main chain.")])]),e._v(" "),a("h4",{attrs:{id:"help"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#help"}},[e._v("#")]),e._v(" Help")]),e._v(" "),a("p",[e._v("If you need to do something else, the best command you can run is:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgCg=="}}),e._v(" "),a("p",[e._v("It will display all the available commands. For each command, you can use the "),a("code",[e._v("--help")]),e._v(" flag to get further information.")]),e._v(" "),a("h2",{attrs:{id:"setting-up-the-rest-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-the-rest-server"}},[e._v("#")]),e._v(" Setting up the Rest Server")]),e._v(" "),a("p",[e._v("The Rest Server acts as an intermediary between the front-end and the full-node. You don't need to run the Rest Server on the same machine as the full-node.")]),e._v(" "),a("p",[e._v("To start the Rest server:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgcmVzdC1zZXJ2ZXIgLS1ub2RlPSZsdDtmdWxsX25vZGVfYWRkcmVzczpmdWxsX25vZGVfcG9ydCZndDsK"}}),e._v(" "),a("p",[e._v("Flags:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("--trust-node")]),e._v(": A boolean. If "),a("code",[e._v("true")]),e._v(", light-client verification is disabled. If "),a("code",[e._v("false")]),e._v(", it is enabled. For service providers, this should be set to "),a("code",[e._v("true")]),e._v(". By default, it set to "),a("code",[e._v("false")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("--node")]),e._v(": This is where you indicate the address and the port of your full-node. The format is "),a("code",[e._v("<full_node_address:full_node_port>")]),e._v(". If the full-node is on the same machine, the address should be "),a("code",[e._v("tcp://localhost:26657")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("--laddr")]),e._v(": This flag allows you to specify the address and port for the Rest Server (default "),a("code",[e._v("1317")]),e._v('). You will mostly use this flag only to specify the port, in which case just input "localhost" for the address. The format is <rest_server_address:port>.')])]),e._v(" "),a("h3",{attrs:{id:"listening-for-incoming-transaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#listening-for-incoming-transaction"}},[e._v("#")]),e._v(" Listening for incoming transaction")]),e._v(" "),a("p",[e._v("The recommended way to listen for incoming transaction is to periodically query the blockchain through the following endpoint of the LCD:")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://cosmos.network/rpc/#/ICS20/get_bank_balances__address_",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("/bank/balance/{address}")]),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"rest-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rest-api"}},[e._v("#")]),e._v(" Rest API")]),e._v(" "),a("p",[e._v("The Rest API documents all the available endpoints that you can use to interact\nwith your full node. It can be found "),a("a",{attrs:{href:"https://cosmos.network/rpc/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("The API is divided into ICS standards for each category of endpoints. For\nexample, the "),a("a",{attrs:{href:"https://cosmos.network/rpc/#/ICS20/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS20"),a("OutboundLink")],1),e._v(" describes the API to\ninteract with tokens.")]),e._v(" "),a("p",[e._v("To give more flexibility to developers, we have included the ability to\ngenerate unsigned transactions, "),a("a",{attrs:{href:"https://cosmos.network/rpc/#/ICS20/post_tx_sign",target:"_blank",rel:"noopener noreferrer"}},[e._v("sign"),a("OutboundLink")],1),e._v("\nand "),a("a",{attrs:{href:"https://cosmos.network/rpc/#/ICS20/post_tx_broadcast",target:"_blank",rel:"noopener noreferrer"}},[e._v("broadcast"),a("OutboundLink")],1),e._v(" them with\ndifferent API endpoints. This allows service providers to use their own signing\nmechanism for instance.")]),e._v(" "),a("p",[e._v("In order to generate an unsigned transaction (example with\n"),a("a",{attrs:{href:"https://cosmos.network/rpc/#/ICS20/post_bank_accounts__address__transfers",target:"_blank",rel:"noopener noreferrer"}},[e._v("coin transfer"),a("OutboundLink")],1),e._v("),\nyou need to use the field "),a("code",[e._v("generate_only")]),e._v(" in the body of "),a("code",[e._v("base_req")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"cosmos-sdk-transaction-signing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cosmos-sdk-transaction-signing"}},[e._v("#")]),e._v(" Cosmos SDK Transaction Signing")]),e._v(" "),a("p",[e._v("Cosmos SDK transaction signing is a fairly simple process.")]),e._v(" "),a("p",[e._v("Every Cosmos SDK transaction has a canonical JSON representation. The "),a("code",[e._v("gaiad")]),e._v('\nand Stargate REST interfaces provide canonical JSON representations of transactions\nand their "broadcast" functions will provide compact Amino (a protobuf-like wire format)\nencoding translations.')]),e._v(" "),a("p",[e._v("Things to know when signing messages:")]),e._v(" "),a("p",[e._v("The format is as follows")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICZxdW90O2FjY291bnRfbnVtYmVyJnF1b3Q7OiBYWFgsCiAgJnF1b3Q7Y2hhaW5faWQmcXVvdDs6IFhYWCwKICAmcXVvdDtmZWUmcXVvdDs6IFhYWCwKICAmcXVvdDtzZXF1ZW5jZSZxdW90OzogWFhYLAogICZxdW90O21lbW8mcXVvdDs6IFhYWCwKICAmcXVvdDttc2dzJnF1b3Q7OiBYWFgKfQo="}}),e._v(" "),a("p",[e._v("The signer must supply "),a("code",[e._v('"chain_id"')]),e._v(", "),a("code",[e._v('"account number"')]),e._v(" and "),a("code",[e._v('"sequence number"')]),e._v(".")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v('"fee"')]),e._v(", "),a("code",[e._v('"msgs"')]),e._v(" and "),a("code",[e._v('"memo"')]),e._v(" fields will be supplied by the transaction\ncomposer interface.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v('"account_number"')]),e._v(" and "),a("code",[e._v('"sequence"')]),e._v(" fields can be queried directly from the\nblockchain or cached locally. Getting these numbers wrong, along with the chainID,\nis a common cause of invalid signature error. You can load the mempool of a full\nnode or validator with a sequence of uncommitted transactions with incrementing\nsequence numbers and it will mostly do the correct thing.")]),e._v(" "),a("p",[e._v("Before signing, all keys are lexicographically sorted and all white space is\nremoved from the JSON output.")]),e._v(" "),a("p",[e._v("The signature encoding is the 64-byte concatenation of ECDSArands (i.e. "),a("code",[e._v("r || s")]),e._v("),\nwhere "),a("code",[e._v("s")]),e._v(" is lexicographically less than its inverse in order to prevent malleability.\nThis is like Ethereum, but without the extra byte for PubKey recovery, since\nTendermint assumes the PubKey is always provided anyway.")]),e._v(" "),a("p",[e._v("Signatures and public key examples in a signed transaction:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:" json",base64:"ewogICZxdW90O3R5cGUmcXVvdDs6ICZxdW90O2F1dGgvU3RkVHgmcXVvdDssCiAgJnF1b3Q7dmFsdWUmcXVvdDs6IHsKICAgICZxdW90O21zZyZxdW90OzogWy4uLl0sCiAgICAmcXVvdDtzaWduYXR1cmVzJnF1b3Q7OiBbCiAgICAgIHsKICAgICAgICAmcXVvdDtwdWJfa2V5JnF1b3Q7OiB7CiAgICAgICAgICAmcXVvdDt0eXBlJnF1b3Q7OiAmcXVvdDt0ZW5kZXJtaW50L1B1YktleVNlY3AyNTZrMSZxdW90OywKICAgICAgICAgICZxdW90O3ZhbHVlJnF1b3Q7OiBYWFgKICAgICAgICB9LAogICAgICAgICZxdW90O3NpZ25hdHVyZSZxdW90OzogWFhYCiAgICAgIH0KICAgIF0sCiAgfQp9Cg=="}}),e._v(" "),a("p",[e._v("Once signatures are properly generated, insert the JSON into into the generated\ntransaction and then use the broadcast endpoint.")])],1)}),[],!1,null,null,null);t.default=o.exports}}]);